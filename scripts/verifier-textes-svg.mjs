/**
 * Repère les annotations SVG qui sortent du cadre.
 *
 * Usage : npx tsx scripts/verifier-textes-svg.mjs
 *
 * Les animations partagent un viewBox de 400 unités de large. Un texte dont
 * l'abscisse plus la largeur estimée dépasse cette limite est tronqué à
 * l'affichage — défaut invisible dans le code, et facile à manquer à l'œil sur
 * quarante cartes.
 */
import { readFileSync } from 'node:fs';
import { globSync } from 'node:fs';

const LARGEUR_VIEWBOX = 400;
/** Largeur moyenne d'un caractère en Atkinson Hyperlegible, en fraction de la taille. */
const RATIO_CARACTERE = 0.53;
/** Marge de sécurité : un texte affleurant le bord reste inconfortable. */
const MARGE = 6;

const fichiers = globSync('components/animations/*.tsx');
const problemes = [];

for (const fichier of fichiers) {
  const source = readFileSync(fichier, 'utf8');

  // <text x="..." ... fontSize="..."> contenu </text>
  const motif =
    /<text\s+x="(\d+)"[^>]*?fontSize="(\d+)"[^>]*?>\s*([^<]+?)\s*<\/text>/gs;

  for (const m of source.matchAll(motif)) {
    const x = Number(m[1]);
    const taille = Number(m[2]);
    // Les entités JSX comptent pour un caractère à l'affichage.
    const texte = m[3].replace(/&[a-z]+;/g, "'").trim();
    if (!texte || texte.length < 2) continue;

    const largeur = texte.length * taille * RATIO_CARACTERE;
    const fin = x + largeur;
    if (fin > LARGEUR_VIEWBOX - MARGE) {
      problemes.push({
        fichier: fichier.split(/[\\/]/).pop(),
        texte: texte.slice(0, 42),
        x,
        taille,
        depassement: Math.round(fin - LARGEUR_VIEWBOX),
      });
    }
  }
}

if (problemes.length === 0) {
  console.log('Aucun texte ne déborde.');
} else {
  console.log(`${problemes.length} texte(s) hors cadre :\n`);
  problemes
    .sort((a, b) => b.depassement - a.depassement)
    .forEach((p) => {
      console.log(
        `  ${p.fichier.padEnd(30)} x=${String(p.x).padEnd(4)} ${String(p.taille).padEnd(3)} ` +
          `dépasse de ~${p.depassement}px  « ${p.texte} »`,
      );
    });
  process.exitCode = 1;
}
