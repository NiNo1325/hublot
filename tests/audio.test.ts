import { existsSync, statSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { cards } from '@/content/cards';
import { AGE_RANGES } from '@/lib/types';

/**
 * L'audio est généré hors ligne par `npm run audio` et commité. Rien à
 * l'exécution ne signalerait un fichier manquant : la carte basculerait
 * silencieusement en mode minuté, et personne ne s'en apercevrait avant qu'un
 * enfant ouvre une carte muette. Ce test est ce garde-fou.
 */

/**
 * Cartes livrées avant leur audio, en attente de quota TTS.
 *
 * Cette liste rend l'exception visible et délibérée plutôt que de désactiver
 * le test : toute carte absente d'ici doit avoir son audio complet. Après un
 * `npm run audio` réussi, retirer l'entrée correspondante — le test vérifiera
 * alors les fichiers, et échouera s'ils manquent toujours.
 */
const EN_ATTENTE_AUDIO = new Set<string>([
  'pourquoi-lecho-repond',
  'aigu-ou-grave',
  'pourquoi-les-voix-sont-differentes',
  'comment-loreille-entend',
  'quand-le-bruit-fait-mal',
  'comment-chante-une-guitare',
  'la-sirene-qui-change',
  'ma-voix-enregistree',
  'les-sons-quon-nentend-pas',
  'les-notes-qui-vont-ensemble',
  'le-puzzle-des-os',
  'le-jour-de-lasteroide',
  'les-oiseaux-sont-des-dinosaures',
  'il-y-a-tres-tres-longtemps',
  'pourquoi-si-grands',
  'carnivore-ou-herbivore',
  'les-traces-de-pas',
  'des-dinosaures-a-plumes',
  'pas-tous-des-dinosaures',
  'apres-les-dinosaures',
  'la-chair-de-poule',
  'pourquoi-on-eternue',
  'a-quoi-servent-les-larmes',
  'la-peau-notre-bouclier',
  'les-empreintes-digitales',
  'pourquoi-on-a-mal',
  'comment-les-muscles-bougent',
  'comment-on-tient-debout',
  'pourquoi-on-a-deux-yeux',
  'les-dents-de-lait',
  'dou-viennent-les-vagues',
  'les-fleuves-dans-la-mer',
  'pourquoi-il-fait-noir-au-fond',
  'la-pression-qui-ecrase',
  'le-corail-batisseur',
  'les-animaux-qui-brillent',
  'les-sources-chaudes-du-fond',
  'le-plancton-minuscule',
  'pourquoi-on-flotte-mieux-dans-la-mer',
  'la-vague-geante',
  'pourquoi-le-pain-gonfle',
  'pourquoi-ca-dore',
  'pourquoi-loignon-fait-pleurer',
  'pourquoi-le-piment-brule',
  'pourquoi-le-popcorn-explose',
  'pourquoi-le-lait-devient-yaourt',
  'pourquoi-loeuf-durcit',
  'pourquoi-le-soda-petille',
  'pourquoi-la-pomme-brunit',
  'pourquoi-le-miel-ne-se-perime-pas',
]);

const cas = cards
  .filter((carte) => !EN_ATTENTE_AUDIO.has(carte.id))
  .flatMap((carte) =>
    AGE_RANGES.flatMap((age) =>
      carte.content.fr.explanation[age].beats.map(
        (beat) =>
          [
            `${carte.id}/${age}/${beat.id}`,
            `public/audio/${carte.id}/${age}/${beat.id}.mp3`,
          ] as const,
      ),
    ),
  );

describe('couverture audio du catalogue', () => {
  it.each(cas)('%s a son fichier audio', (_libelle, chemin) => {
    expect(existsSync(chemin), `manquant : ${chemin} — lance « npm run audio »`).toBe(
      true,
    );
  });

  it.each(cas)('%s a un fichier audio non vide', (_libelle, chemin) => {
    if (!existsSync(chemin)) return;
    // Un mp3 tronqué se lit comme un silence : la taille est le seul signal
    // simple qu'on ait sans décoder le flux.
    expect(statSync(chemin).size).toBeGreaterThan(2000);
  });

  /*
    Empêche la liste d'exceptions de devenir un cimetière : une carte dont
    l'audio a été généré doit en sortir, sinon elle ne serait plus jamais
    vérifiée.
  */
  it("ne garde en attente que des cartes réellement dépourvues d'audio", () => {
    const aTortEnAttente = [...EN_ATTENTE_AUDIO].filter((id) => {
      const carte = cards.find((c) => c.id === id);
      if (!carte) return false;
      /*
        Vérifie tous les beats, et non le premier seulement : la génération
        s'interrompt sur épuisement de quota, souvent au milieu d'une carte.
        Une carte à moitié sonore doit rester en attente.
      */
      return AGE_RANGES.every((age) =>
        carte.content.fr.explanation[age].beats.every((beat) =>
          existsSync(`public/audio/${id}/${age}/${beat.id}.mp3`),
        ),
      );
    });

    expect(
      aTortEnAttente,
      `ces cartes ont leur audio : retire-les de EN_ATTENTE_AUDIO`,
    ).toEqual([]);
  });

  it('référence des cartes existantes dans la liste d’attente', () => {
    const inconnues = [...EN_ATTENTE_AUDIO].filter(
      (id) => !cards.some((c) => c.id === id),
    );
    expect(inconnues, 'identifiants obsolètes dans EN_ATTENTE_AUDIO').toEqual([]);
  });
});
