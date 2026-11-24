import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const source = fs.readFileSync('app/config/sections.config.js', 'utf8');
const { getVisibleAiProjects, isNavigationItemVisible } = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
const project = { id: 'summarizer', title: 'Text Summarizer', status: 'published', demoUrl: 'https://example.com/demo' };
const data = (enabled, projects) => ({ featureFlags: { aiLab: enabled }, aiLab: { projects } });

test('lab and navigation stay hidden until explicitly enabled with a published demo', () => {
  for (const input of [undefined, data(false, [project]), data('true', [project]), data(true, []), data(true, [{ ...project, status: 'draft' }]), data(true, [{ ...project, demoUrl: '' }])]) {
    const projects = getVisibleAiProjects(input);
    assert.deepEqual(projects, []);
    assert.equal(isNavigationItemVisible({ href: '#ai-lab' }, projects.length > 0), false);
  }
});
test('only real published HTTPS demo entries become visible; ordinary navigation remains visible', () => {
  const projects = getVisibleAiProjects(data(true, [project, null, { ...project, demoUrl: 'javascript:alert(1)' }, { ...project, demoUrl: 'http://example.com' }, { ...project, title: '' }]));
  assert.deepEqual(projects, [project]);
  assert.equal(isNavigationItemVisible({ href: '#ai-lab' }, projects.length > 0), true);
  assert.equal(isNavigationItemVisible({ href: '#skills' }, false), true);
});
test('portfolio ships with the AI Lab disabled and no invented projects', () => {
  const content = JSON.parse(fs.readFileSync('public/data.json', 'utf8'));
  assert.equal(content.featureFlags.aiLab, false);
  assert.deepEqual(content.aiLab.projects, []);
  assert.deepEqual(getVisibleAiProjects(content), []);
});
