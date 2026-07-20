/**
 * Capture l'illustration de chaque carte et les assemble en planches.
 *
 * Usage : npx tsx scripts/planche-illustrations.mjs [url]
 *
 * Complète l'audit automatique : celui-ci garantit qu'aucun texte ne déborde
 * ni n'en recouvre un autre, mais il ne dit pas si la composition reste
 * lisible. Regrouper les illustrations en planches permet de les juger d'un
 * coup d'œil plutôt qu'une par une.
 */
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { cards } from '../content/cards/index.ts';

const URL = process.argv[2] ?? 'http://localhost:3001';
const DOSSIER = 'planches';
const PAR_PLANCHE = 8;

await mkdir(DOSSIER, { recursive: true });

const navigateur = await chromium.launch();
const page = await navigateur.newPage({ viewport: { width: 1280, height: 900 } });
await page.route('**/audio/**', (route) => route.abort());

await page.goto(`${URL}/`);
await page.evaluate(() =>
  window.localStorage.setItem('science.ageRange.v1', '9-12'),
);

const vignettes = [];

for (const carte of cards) {
  await page.goto(`${URL}/decouvrir`);
  try {
    await page
      .getByRole('button', { name: carte.content.fr.title['9-12'] })
      .click({ timeout: 8000 });
    await page.waitForSelector('dialog svg', { timeout: 8000 });
  } catch {
    continue;
  }
  const svg = await page.locator('dialog svg').innerHTML();
  vignettes.push({ id: carte.id, svg });
}

/* Les planches sont des pages HTML : le SVG y reste vectoriel et net. */
const planches = [];
for (let i = 0; i < vignettes.length; i += PAR_PLANCHE) {
  planches.push(vignettes.slice(i, i + PAR_PLANCHE));
}

for (const [i, planche] of planches.entries()) {
  const html = `<!doctype html><meta charset="utf-8">
<style>
  body { margin:0; background:#0f1b33; font-family: sans-serif; }
  .grille { display:grid; grid-template-columns:repeat(2,1fr); gap:14px; padding:14px; }
  figure { margin:0; }
  figcaption { color:#b9c4da; font-size:13px; padding:4px 2px; }
  svg { width:100%; height:auto; display:block; border:2px solid #2c3f66; border-radius:12px; }
</style>
<div class="grille">
${planche
  .map(
    (v) =>
      `<figure><svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">${v.svg}</svg><figcaption>${v.id}</figcaption></figure>`,
  )
  .join('\n')}
</div>`;

  await page.setContent(html);
  await page.locator('.grille').screenshot({ path: `${DOSSIER}/planche-${i + 1}.png` });
  console.log(`planche ${i + 1}/${planches.length} — ${planche.length} cartes`);
}

await navigateur.close();
console.log(`\n${vignettes.length} illustrations dans ${DOSSIER}/`);
