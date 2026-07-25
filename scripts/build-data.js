// Regenerates src/data/fonts.json from the human-editable files in
// data-source/. Run this after reordering a ranking list, or after adding
// a new font (add it to fonts-registry.json AND to both order lists).
//
//   npm run build:data

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

function readOrderList(filename) {
  const raw = fs.readFileSync(path.join(root, 'data-source', filename), 'utf8');
  return raw
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'));
}

const formalityOrder = readOrderList('formality-order.txt');
const serifOrder = readOrderList('serif-order.txt');
const registry = JSON.parse(
  fs.readFileSync(path.join(root, 'data-source', 'fonts-registry.json'), 'utf8')
);

const formalityRank = new Map(formalityOrder.map((name, i) => [name, i]));
const serifRank = new Map(serifOrder.map((name, i) => [name, i]));

const errors = [];
const fonts = registry.map((font) => {
  if (!formalityRank.has(font.name)) errors.push(`"${font.name}" is missing from formality-order.txt`);
  if (!serifRank.has(font.name)) errors.push(`"${font.name}" is missing from serif-order.txt`);
  return {
    ...font,
    formalityRank: formalityRank.get(font.name),
    serifRank: serifRank.get(font.name),
  };
});

// Also catch names that are in an order list but not in the registry (typos, etc).
for (const name of formalityOrder) {
  if (!registry.some((f) => f.name === name)) errors.push(`"${name}" is in formality-order.txt but not in fonts-registry.json`);
}
for (const name of serifOrder) {
  if (!registry.some((f) => f.name === name)) errors.push(`"${name}" is in serif-order.txt but not in fonts-registry.json`);
}

if (errors.length) {
  console.error('Could not build fonts.json — fix these first:\n');
  errors.forEach((e) => console.error('  - ' + e));
  process.exit(1);
}

fs.writeFileSync(
  path.join(root, 'src', 'data', 'fonts.json'),
  JSON.stringify(fonts, null, 2)
);

console.log(`Built fonts.json with ${fonts.length} fonts.`);
