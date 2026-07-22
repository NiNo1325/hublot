import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

interface EntreeCatalogue {
  chemin: string;
  octets: number;
  empreinte: string | null;
}

/**
 * Le catalogue pilote le téléchargement hors ligne : c'est lui qui dit à
 * l'application quels fichiers récupérer et combien d'octets annoncer.
 *
 * Périmé, il produit deux pannes silencieuses et symétriques. Un fichier
 * ajouté depuis serait absent du téléchargement, et l'enfant tomberait sur une
 * carte muette en voiture. Un fichier supprimé y resterait, et le
 * téléchargement échouerait sur un 404 sans que rien n'explique pourquoi.
 *
 * D'où ce test : il échoue dès qu'on oublie `npm run audio:catalogue` après
 * une génération.
 */
const CHEMIN = 'public/audio/catalogue.json';

describe('catalogue audio', () => {
  it('existe', () => {
    expect(existsSync(CHEMIN), `manquant — lance « npm run audio:catalogue »`).toBe(
      true,
    );
  });

  const catalogue = JSON.parse(readFileSync(CHEMIN, 'utf8')) as {
    fichiers: EntreeCatalogue[];
    octets: number;
  };

  const surDisque = readdirSync('public/audio', { recursive: true })
    .map((entree) => String(entree).replaceAll('\\', '/'))
    .filter((nom) => nom.endsWith('.mp3'))
    .map((nom) => `/audio/${nom}`)
    .sort();

  it('couvre exactement les fichiers présents sur le disque', () => {
    expect(catalogue.fichiers.map((f) => f.chemin).sort()).toEqual(surDisque);
  });

  it('annonce les bonnes tailles', () => {
    for (const fichier of catalogue.fichiers) {
      expect(fichier.octets, fichier.chemin).toBe(
        statSync(`public${fichier.chemin}`).size,
      );
    }
  });

  it('totalise le poids annoncé', () => {
    const somme = catalogue.fichiers.reduce((n, f) => n + f.octets, 0);
    expect(catalogue.octets).toBe(somme);
  });
});
