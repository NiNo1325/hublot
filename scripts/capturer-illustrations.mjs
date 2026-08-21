/**
 * Capture chaque phase de chaque illustration, et le texte qu'elle accompagne.
 *
 * Usage : npx tsx scripts/capturer-illustrations.mjs [domaine] [url]
 *   npx tsx scripts/capturer-illustrations.mjs animaux
 *   npx tsx scripts/capturer-illustrations.mjs tout http://localhost:3000
 *
 * Produit `audit-illustrations/<carte>-<phase>.png` et un manifeste JSON qui
 * accole à chaque image les trois textes qu'elle doit illustrer.
 *
 * Pourquoi une image par phase, et non une par carte : une explication est une
 * suite de *beats*, et l'animation change de phase à chaque phrase. Une seule
 * capture ne montrerait qu'un quart de ce que l'enfant voit, et manquerait
 * précisément l'endroit où un dessin peut contredire son texte.
 *
 * Bonne nouvelle du catalogue : les identifiants de beats sont **les mêmes aux
 * trois niveaux** — seul le texte change. Une capture par phase sert donc les
 * trois registres, ce qui divise le travail par trois.
 *
 * L'audio est bloqué, et l'on met la narration en pause : les phases se
 * parcourent alors par les boutons « Étape N sur M » de la carte, ce qui est
 * déterministe et instantané — attendre la minuterie de repli coûtait six
 * secondes et demie par phase, et se ratait une fois sur deux.
 */
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { cards } from '../content/cards/index.ts';
import { domains } from '../content/domains.ts';

const DOMAINE = process.argv[2] ?? 'tout';
const URL = process.argv[3] ?? 'http://localhost:3000';
const DOSSIER = 'audit-illustrations';
const NIVEAU = '9-12';
/** Le temps que la transition d'une phase se pose avant la capture. */
const REPOS_MS = 450;

const choisies = cards.filter((c) => DOMAINE === 'tout' || c.domainId === DOMAINE);
if (choisies.length === 0) {
  console.error(`Aucune carte pour « ${DOMAINE} ». Mondes : ${domains.map((d) => d.id).join(', ')}`);
  process.exit(1);
}

await mkdir(DOSSIER, { recursive: true });

const navigateur = await chromium.launch();
const page = await navigateur.newPage({ viewport: { width: 900, height: 900 } });
await page.route('**/audio/**', (route) => route.abort());

/* Un profil réglé au niveau le plus exigeant : c'est celui qui en dit le plus. */
await page.goto(`${URL}/`);
await page.evaluate((niveauAge) => {
  const id = 'audit';
  localStorage.setItem('science.profils.v1', JSON.stringify([{ id, prenom: 'Audit', avatar: 'renard' }]));
  localStorage.setItem('science.profilActif.v1', id);
  localStorage.setItem(`science.${id}.age.v1`, niveauAge);
  localStorage.setItem(`science.${id}.tutoVu.v1`, '1');
}, '10');

const manifeste = [];
const echecs = [];

for (const [n, carte] of choisies.entries()) {
  const contenu = carte.content.fr;
  const beats = contenu.explanation[NIVEAU].beats;
  process.stdout.write(`[${n + 1}/${choisies.length}] ${carte.id} (${beats.length} phases)… `);

  await page.goto(`${URL}/decouvrir/${carte.domainId}`, { waitUntil: 'networkidle' });
  try {
    await page.getByRole('button', { name: contenu.title[NIVEAU], exact: false }).first().click({ timeout: 8000 });
    await page.waitForSelector('dialog svg', { timeout: 8000 });
  } catch {
    console.log('carte introuvable');
    echecs.push(`${carte.id} : tuile introuvable`);
    continue;
  }

  /*
    On met la narration en pause avant de parcourir : sans cela, la minuterie
    de repli fait avancer les phases sous les pieds du script, et l'on capture
    une image qui ne correspond plus au texte qu'on lui associe.
  */
  const pause = page.locator('dialog button', { hasText: 'Pause' }).first();
  if (await pause.isVisible().catch(() => false)) await pause.click().catch(() => null);

  const phases = [];
  for (const [i, beat] of beats.entries()) {
    const etape = page.getByRole('button', { name: `Étape ${i + 1} sur ${beats.length}`, exact: false }).first();
    try {
      await etape.click({ timeout: 5000 });
    } catch {
      echecs.push(`${carte.id}/${beat.id} : étape ${i + 1} inatteignable`);
      continue;
    }
    await page.waitForTimeout(REPOS_MS);
    phases.push({ id: beat.id, svg: await page.locator('dialog svg').first().innerHTML() });
  }

  manifeste.push({
    carte: carte.id,
    monde: carte.domainId,
    titre: contenu.title,
    phases: phases.map((p) => ({
      phase: p.id,
      image: `${carte.id}--${p.id}.png`,
      textes: Object.fromEntries(
        Object.entries(contenu.explanation).map(([niveau, e]) => [
          niveau,
          e.beats.find((b) => b.id === p.id)?.text ?? null,
        ]),
      ),
    })),
  });

  // Chaque phase devient une image nette, sans le décor de l'application.
  for (const p of phases) {
    await page.setContent(
      `<!doctype html><meta charset="utf-8">
       <style>body{margin:0;background:#0f1b33}svg{width:800px;height:480px;display:block}</style>
       <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">${p.svg}</svg>`,
    );
    await page.locator('svg').screenshot({ path: `${DOSSIER}/${carte.id}--${p.id}.png` });
  }
  console.log(`${phases.length} image(s)`);
}

await writeFile(`${DOSSIER}/manifeste.json`, `${JSON.stringify(manifeste, null, 2)}\n`);
await navigateur.close();

const images = manifeste.reduce((t, c) => t + c.phases.length, 0);
console.log(`\n${manifeste.length} carte(s), ${images} image(s) dans ${DOSSIER}/`);
if (echecs.length > 0) {
  console.log(`${echecs.length} échec(s) :`);
  for (const e of echecs.slice(0, 10)) console.log(`  - ${e}`);
}
