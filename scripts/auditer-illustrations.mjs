/**
 * Audite les illustrations des cartes dans un vrai navigateur.
 *
 * Usage : npx tsx scripts/auditer-illustrations.mjs [url]
 *
 * Mesure la position réelle de chaque élément dans le navigateur, plutôt que
 * d'estimer la largeur des textes à partir du nombre de caractères — une
 * approche qui donnait trop de faux positifs et de faux négatifs pour servir.
 * Cela permet de détecter ce qu'aucun test ne voit, et qu'il serait
 * irréaliste de chercher à l'œil sur quatre-vingts cartes :
 *
 *   - un texte qui sort du cadre ;
 *   - deux textes qui se recouvrent.
 *
 * Le viewBox étant fixe, la composition est identique sur mobile et sur
 * ordinateur : un seul passage suffit pour les deux.
 */
import { chromium } from 'playwright';
import { cards } from '../content/cards/index.ts';

const URL = process.argv[2] ?? 'http://localhost:3001';
const VIEWBOX = { largeur: 400, hauteur: 240 };
/** En deçà, le recouvrement est trop faible pour gêner la lecture. */
const SURFACE_MIN = 30;

function aire(r) {
  return Math.max(0, r.largeur) * Math.max(0, r.hauteur);
}

function intersection(a, b) {
  const x = Math.max(a.x, b.x);
  const y = Math.max(a.y, b.y);
  const x2 = Math.min(a.x + a.largeur, b.x + b.largeur);
  const y2 = Math.min(a.y + a.hauteur, b.y + b.hauteur);
  return { x, y, largeur: x2 - x, hauteur: y2 - y };
}

const navigateur = await chromium.launch();
const page = await navigateur.newPage({ viewport: { width: 1280, height: 900 } });

// Sans audio, la narration bascule en mode minuté : les phases défilent
// lentement et laissent le temps de mesurer.
await page.route('**/audio/**', (route) => route.abort());

await page.goto(`${URL}/`);
await page.evaluate(() =>
  window.localStorage.setItem('science.ageRange.v1', '9-12'),
);

const rapport = [];

for (const carte of cards) {
  await page.goto(`${URL}/decouvrir`);
  const titre = carte.content.fr.title['9-12'];

  try {
    await page.getByRole('button', { name: titre }).click({ timeout: 8000 });
    await page.waitForSelector('dialog svg', { timeout: 8000 });
  } catch {
    rapport.push({ carte: carte.id, type: 'ouverture', detail: 'carte introuvable' });
    continue;
  }

  const mesures = await page.evaluate(() => {
    const svg = document.querySelector('dialog svg');
    if (!svg) return null;

    /*
      getBBox renvoie des coordonnées dans le repère local de l'élément :
      fausses dès qu'un groupe parent porte un translate ou un rotate. On passe
      par les rectangles écran, ramenés aux unités du viewBox.
    */
    const cadre = svg.getBoundingClientRect();
    const vb = svg.viewBox.baseVal;
    const echelleX = vb.width / cadre.width;
    const echelleY = vb.height / cadre.height;

    const lire = (el) => {
      const r = el.getBoundingClientRect();
      return {
        x: (r.left - cadre.left) * echelleX,
        y: (r.top - cadre.top) * echelleY,
        largeur: r.width * echelleX,
        hauteur: r.height * echelleY,
      };
    };

    const textes = [...svg.querySelectorAll('text')].map((el) => ({
      contenu: el.textContent.trim().slice(0, 40),
      ...lire(el),
    }));

    return { textes };
  });

  if (!mesures) continue;

  for (const t of mesures.textes) {
    if (t.largeur === 0) continue;

    if (t.x < -2 || t.x + t.largeur > VIEWBOX.largeur + 2) {
      rapport.push({
        carte: carte.id,
        type: 'hors cadre',
        detail: `« ${t.contenu} » dépasse de ${Math.round(t.x + t.largeur - VIEWBOX.largeur)}px`,
      });
    }
    if (t.y + t.hauteur > VIEWBOX.hauteur + 2) {
      rapport.push({
        carte: carte.id,
        type: 'hors cadre (bas)',
        detail: `« ${t.contenu} » dépasse de ${Math.round(t.y + t.hauteur - VIEWBOX.hauteur)}px`,
      });
    }
  }

  for (let i = 0; i < mesures.textes.length; i += 1) {
    for (let j = i + 1; j < mesures.textes.length; j += 1) {
      const a = mesures.textes[i];
      const b = mesures.textes[j];
      if (!a.largeur || !b.largeur) continue;
      /*
        Deux lignes d'un même bloc de légende partagent leur abscisse et se
        suivent de près : leurs boîtes se touchent sans que rien ne soit
        illisible. Ce n'est pas un défaut.
      */
      const memeBloc =
        Math.abs(a.x - b.x) < 6 && Math.abs(a.y - b.y) < 22;
      const surface = aire(intersection(a, b));
      if (!memeBloc && surface > SURFACE_MIN) {
        rapport.push({
          carte: carte.id,
          type: 'textes superposés',
          detail: `« ${a.contenu} » × « ${b.contenu} » (${Math.round(surface)}px²)`,
        });
      }
    }
  }

}

await navigateur.close();

if (rapport.length === 0) {
  console.log(`Aucun défaut détecté sur les ${cards.length} cartes.`);
} else {
  const parCarte = {};
  for (const r of rapport) (parCarte[r.carte] ??= []).push(r);
  console.log(
    `${rapport.length} défaut(s) sur ${Object.keys(parCarte).length} carte(s) :\n`,
  );
  for (const [carte, defauts] of Object.entries(parCarte)) {
    console.log(carte);
    for (const d of defauts) console.log(`   [${d.type}] ${d.detail}`);
  }
}
