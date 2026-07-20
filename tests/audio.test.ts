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
describe('couverture audio du catalogue', () => {
  const cas = cards.flatMap((carte) =>
    AGE_RANGES.flatMap((age) =>
      carte.content.fr.explanation[age].beats.map(
        (beat) =>
          [`${carte.id}/${age}/${beat.id}`, `public/audio/${carte.id}/${age}/${beat.id}.mp3`] as const,
      ),
    ),
  );

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
});
