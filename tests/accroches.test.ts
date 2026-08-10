import { existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { domains } from '@/content/domains';

/*
  Domaines livrés avant l'audio de leur accroche, en attente de quota TTS.
  Pendant des listes des beats (tests/audio.test.ts) et des quizz
  (tests/quiz.test.ts). `npm run audio:attente` la recalcule depuis les fichiers
  présents. Tout domaine absent d'ici doit avoir son mp3 d'accroche.
*/
const EN_ATTENTE_ACCROCHES = new Set<string>([
  'les-dinosaures',
]);

describe('accroches de domaine', () => {
  it('chaque domaine a une accroche non vide', () => {
    for (const d of domains) {
      expect(d.accroche.fr.trim().length, `accroche vide : ${d.id}`).toBeGreaterThan(0);
    }
  });

  const cas = domains
    .filter((d) => !EN_ATTENTE_ACCROCHES.has(d.id))
    .map((d) => [d.id, `public/audio/accroches/${d.id}.mp3`] as const);

  it.each(cas)('audio %s présent', (_id, chemin) => {
    expect(existsSync(chemin), `manquant : ${chemin} — lance « npm run audio:accroches »`).toBe(
      true,
    );
  });
});
