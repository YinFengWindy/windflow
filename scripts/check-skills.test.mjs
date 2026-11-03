import assert from 'node:assert/strict';
import { appendFileSync, cpSync, mkdirSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { checkCollection, checkSkill } from './check-skills.mjs';

const source = fileURLToPath(new URL('../skills/', import.meta.url));

function temporary(t) {
  const directory = mkdtempSync(join(tmpdir(), 'windflow-skills-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  return directory;
}

test('the collection exposes flat packages and resolves declared stage dependencies', () => {
  const skills = checkCollection(source);
  const coordinator = skills.find(skill => skill.name === 'windflow');
  assert(coordinator.dependencies.length > 0);
  assert(skills.filter(skill => skill.name !== 'windflow').every(skill => skill.dependencies.length === 0));
});

for (const entry of readdirSync(source, { withFileTypes: true }).filter(entry => entry.isDirectory())) {
  test(entry.name + ' retains its resources when installed alone', t => {
    const directory = temporary(t);
    const installed = join(directory, entry.name);
    cpSync(join(source, entry.name), installed, { recursive: true });
    const result = checkSkill(installed);
    assert.equal(result.name, entry.name);
    assert.deepEqual(readdirSync(directory), [entry.name]);
  });
}

test('an installation missing its review method is rejected', t => {
  const installed = join(temporary(t), 'review');
  cpSync(join(source, 'review'), installed, { recursive: true });
  rmSync(join(installed, 'references/method.md'));
  assert.throws(() => checkSkill(installed), /Broken link/);
});

test('a reference outside the selected skill is rejected even if it exists', t => {
  const directory = temporary(t);
  const installed = join(directory, 'review');
  cpSync(join(source, 'review'), installed, { recursive: true });
  writeFileSync(join(directory, 'outside.md'), 'Not part of this installation.');
  appendFileSync(join(installed, 'SKILL.md'), '\n[Hidden dependency](../outside.md)\n');
  assert.throws(() => checkSkill(installed), /Link escapes installed skill/);
});

test('a collection missing a required coordinator stage is rejected', t => {
  const installed = join(temporary(t), 'skills');
  cpSync(source, installed, { recursive: true });
  rmSync(join(installed, 'design'), { recursive: true });
  assert.throws(() => checkCollection(installed), /Missing collection dependency: design/);
});

test('nested legacy skill entrypoints are rejected', t => {
  const installed = join(temporary(t), 'review');
  cpSync(join(source, 'review'), installed, { recursive: true });
  mkdirSync(join(installed, 'skills/legacy'), { recursive: true });
  writeFileSync(join(installed, 'skills/legacy/SKILL.md'), '# Legacy');
  assert.throws(() => checkSkill(installed), /Nested skill entrypoint/);
});
