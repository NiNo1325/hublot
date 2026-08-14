/**
 * Audite les illustrations des cartes dans un vrai navigateur.
 *
 * Usage : npx tsx scripts/auditer-illustrations.mjs [url] [langue]
 *
 * La langue restreint l'audit à une seule traduction — le catalogue entier
 * demande plusieurs minutes, et un traducteur n'a besoin de vérifier que la
 * sienne. Sans argument, toutes les langues présentes sont auditées.
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
 *
 * Chaque langue traduite est auditée séparément. Une composition qui tient en
 * français ne tient pas forcément ailleurs : les légendes changent de longueur
 * en traduction, et c'est précisément le genre de défaut qu'on ne verrait
 * jamais à l'œil sur des centaines de cartes.
 */
import { chromium } from 'playwright';
import { cards } from '../content/cards/index.ts';
import { LOCALES } from '../lib/types.ts';

const URL = process.argv[2] ?? 'http://localhost:3001';
const LANGUE_DEMANDEE = process.argv[3] ?? null;
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
/*
  L'âge fixe la version du texte auditée. Le tutoriel est marqué vu : sinon sa
  présentation s'ouvre par-dessus la grille et intercepte tous les clics.
*/
await page.evaluate(() => {
  window.localStorage.setItem('science.ageRange.v1', '9-12');
  window.localStorage.setItem('science.tutoVu.v1', '1');
});

const rapport = [];

/*
  Une carte est auditée dans chacune des langues où elle est traduite. Les
  autres retombent sur le français, déjà couvert par le passage `fr`.

  Les passages sont groupés par langue : la préférence vit dans le stockage
  local, la poser une fois par langue suffit. La rétablir carte par carte
  imposerait un rechargement complet à chaque tour — soit le double du travail
  sur un catalogue qui compte déjà des centaines de passages.
*/
const langues = LANGUE_DEMANDEE ? [LANGUE_DEMANDEE] : LOCALES;
if (LANGUE_DEMANDEE && !LOCALES.includes(LANGUE_DEMANDEE)) {
  console.error(`Langue inconnue : ${LANGUE_DEMANDEE} (attendu : ${LOCALES.join(', ')})`);
  process.exit(1);
}

const passages = langues.flatMap((locale) =>
  cards.filter((carte) => carte.content[locale]).map((carte) => ({ carte, locale })),
);

let langueEnCours = null;

for (const { carte, locale } of passages) {
  if (locale !== langueEnCours) {
    await page.goto(`${URL}/decouvrir`);
    await page.evaluate((l) => window.localStorage.setItem('science.locale.v1', l), locale);
    langueEnCours = locale;
  }
  // Les cartes vivent dans la grille de leur monde ; `/decouvrir` n'affiche
  // que les mondes eux-mêmes.
  await page.goto(`${URL}/decouvrir/${carte.domainId}`);
  const titre = carte.content[locale].title['9-12'];
  const libelle = locale === 'fr' ? carte.id : `${carte.id} (${locale})`;

  try {
    await page.getByRole('button', { name: titre }).click({ timeout: 8000 });
    await page.waitForSelector('dialog svg', { timeout: 8000 });
  } catch {
    rapport.push({ carte: libelle, type: 'ouverture', detail: 'carte introuvable' });
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

    /*
      Opacité réelle, cumulée avec celle des groupes parents : une illustration
      porte toutes ses légendes en même temps dans le DOM et n'en montre qu'une
      par phase, les autres à `opacity: 0`. Sans ce calcul, deux légendes
      successives posées au même endroit se déclarent superposées alors
      qu'elles ne paraissent jamais ensemble.
    */
    const opaciteReelle = (el) => {
      let valeur = 1;
      for (let n = el; n && n !== svg.parentElement; n = n.parentElement) {
        valeur *= Number(getComputedStyle(n).opacity);
      }
      return valeur;
    };

    const textes = [...svg.querySelectorAll('text')].map((el) => ({
      contenu: el.textContent.trim().slice(0, 40),
      visible: opaciteReelle(el) > 0.05,
      ...lire(el),
    }));

    return { textes };
  });

  if (!mesures) continue;

  for (const t of mesures.textes) {
    if (t.largeur === 0) continue;

    if (t.x < -2 || t.x + t.largeur > VIEWBOX.largeur + 2) {
      rapport.push({
        carte: libelle,
        type: 'hors cadre',
        detail: `« ${t.contenu} » dépasse de ${Math.round(t.x + t.largeur - VIEWBOX.largeur)}px`,
      });
    }
    if (t.y + t.hauteur > VIEWBOX.hauteur + 2) {
      rapport.push({
        carte: libelle,
        type: 'hors cadre (bas)',
        detail: `« ${t.contenu} » dépasse de ${Math.round(t.y + t.hauteur - VIEWBOX.hauteur)}px`,
      });
    }
  }

  /*
    Le recouvrement ne se juge qu'entre légendes affichées en même temps. Le
    dépassement de cadre, lui, se juge sur toutes : une légende hors champ
    l'est à chaque fois qu'elle paraît, visible ou non à l'instant de la mesure.
  */
  const visibles = mesures.textes.filter((t) => t.visible);

  for (let i = 0; i < visibles.length; i += 1) {
    for (let j = i + 1; j < visibles.length; j += 1) {
      const a = visibles[i];
      const b = visibles[j];
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
          carte: libelle,
          type: 'textes superposés',
          detail: `« ${a.contenu} » × « ${b.contenu} » (${Math.round(surface)}px²)`,
        });
      }
    }
  }

}

await navigateur.close();

if (rapport.length === 0) {
  console.log(`Aucun défaut détecté sur ${passages.length} passage(s) de carte.`);
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
