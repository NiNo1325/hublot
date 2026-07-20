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
const EN_ATTENTE_AUDIO = new Set([
  // Vague 1
  'les-volcans',
  'les-phases-de-la-lune',
  'le-coeur-et-le-sang',
  'les-aimants',
  'les-etats-de-la-matiere',
  'comment-vole-un-avion',
  'comment-marche-internet',
  'les-fractales',
  // Vague 2
  'pourquoi-la-terre-tremble',
  'pourquoi-il-y-a-des-saisons',
  'les-microbes',
  'pourquoi-on-voit-les-couleurs',
  'ou-va-le-sucre-dans-leau',
  'les-leviers',
  'quest-ce-quun-programme',
  'le-hasard',
  // Vague 3
  'les-fossiles',
  'les-etoiles',
  'pourquoi-on-dort',
  'comment-voyage-le-son',
  'de-quoi-est-fait-lair',
  'les-engrenages',
  'comment-un-ordinateur-se-souvient',
  'linfini',
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
      const premier = carte.content.fr.explanation['6-8'].beats[0];
      return existsSync(`public/audio/${id}/6-8/${premier.id}.mp3`);
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
