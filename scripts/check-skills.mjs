import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, realpathSync } from 'node:fs';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const repository = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function checkLinks(root) {
  let links = 0;
  function visit(directory) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) { visit(path); continue; }
      assert(entry.name !== 'SKILL.md' || directory === root, 'Nested skill entrypoint: ' + relative(root, path));
      if (!entry.name.endsWith('.md')) continue;
      for (const match of readFileSync(path, 'utf8').matchAll(/\]\(([^)]+)\)/g)) {
        const target = match[1];
        if (/^https?:\/\//.test(target) || target.startsWith('#')) continue;
        const resolved = resolve(dirname(path), target.split('#')[0]);
        assert(existsSync(resolved), 'Broken link in ' + relative(root, path) + ': ' + target);
        const inside = relative(root, realpathSync(resolved));
        assert(!isAbsolute(inside) && inside !== '..' && !inside.startsWith('..' + sep),
          'Link escapes installed skill in ' + relative(root, path) + ': ' + target);
        links++;
      }
    }
  }
  visit(root);
  return links;
}

export function checkSkill(directory) {
  const root = realpathSync(directory);
  for (const file of ['SKILL.md', 'agents/openai.yaml', 'LICENSE', 'THIRD_PARTY_NOTICES.md']) {
    assert(existsSync(join(root, file)), 'Missing skill file: ' + file);
  }
  const content = readFileSync(join(root, 'SKILL.md'), 'utf8');
  const header = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  assert(header, 'Missing skill frontmatter');
  const name = header[1].match(/^name: ([a-z0-9-]+)\s*$/m)?.[1];
  assert(name, 'Invalid skill name');
  assert.match(header[1], /^description: .+/m, 'Missing skill description');
  assert.match(header[1], /^  collection: windflow\s*$/m, 'Wrong skill collection');
  const dependencies = (header[1].match(/^  requires: ([^\r\n]+)/m)?.[1] || '')
    .split(',').map(value => value.trim()).filter(Boolean);
  return { name, root, dependencies, links: checkLinks(root) };
}

export function checkCollection(directory) {
  const root = realpathSync(directory);
  const entries = readdirSync(root, { withFileTypes: true }).filter(entry => entry.isDirectory());
  const skills = entries.map(entry => {
    const skill = checkSkill(join(root, entry.name));
    assert.equal(skill.name, entry.name, 'Skill directory and identity differ');
    return skill;
  });
  const names = new Set(skills.map(skill => skill.name));
  assert(names.has('windflow'), 'Missing Windflow coordinator');
  for (const skill of skills) {
    for (const dependency of skill.dependencies) {
      assert(names.has(dependency), 'Missing collection dependency: ' + dependency);
      assert(dependency !== skill.name, 'Skill depends on itself: ' + dependency);
    }
  }
  return skills;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  if (process.argv[2]) {
    const skill = checkSkill(process.argv[2]);
    console.log('Skill valid: ' + skill.name + ', ' + skill.links + ' local links; declared stage dependencies: ' + (skill.dependencies.join(', ') || 'none'));
  } else {
    const manifest = JSON.parse(readFileSync(join(repository, '.codex-plugin/plugin.json'), 'utf8'));
    const metadata = JSON.parse(readFileSync(join(repository, 'package.json'), 'utf8'));
    assert.equal(manifest.version, metadata.version, 'Package and plugin versions differ');
    assert.equal(manifest.name, metadata.name, 'Package and plugin names differ');
    assert.equal(manifest.skills, './skills/', 'Plugin must expose the flat skill directory');
    const lock = JSON.parse(readFileSync(join(repository, 'upstream-lock.json'), 'utf8'));
    for (const source of lock.sources) {
      assert.match(source.commit, /^[a-f0-9]{40}$/);
      for (const file of source.files || []) assert.match(file.gitBlobSha, /^[a-f0-9]{40}$/);
    }
    const skills = checkCollection(join(repository, 'skills'));
    console.log('Collection valid: ' + skills.length + ' flat skill packages, ' + skills.reduce((sum, skill) => sum + skill.links, 0) + ' local links');
  }
}
