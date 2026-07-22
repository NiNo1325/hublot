'use client';

import type { CardBeat } from '@/lib/types';

interface NarrationProgressProps {
  beats: CardBeat[];
  /** Étape en cours, ou -1 avant le premier démarrage. */
  activeIndex: number;
  onSelect: (index: number) => void;
}

/**
 * Où l'on en est dans l'explication, et le moyen d'y revenir.
 *
 * Un segment par beat plutôt qu'une barre de temps continue : « quatre étapes,
 * tu es à la deuxième » se comprend sans savoir lire, là où un remplissage
 * progressif suppose de se représenter une durée. Et un trait fin serait
 * intappable pour un enfant de trois ans — ici c'est le bouton qui est grand,
 * la barre visible n'en occupe qu'une douzaine de pixels.
 */
export function NarrationProgress({
  beats,
  activeIndex,
  onSelect,
}: NarrationProgressProps) {
  return (
    <ol
      aria-label="Étapes de l’explication"
      className="flex w-full items-center gap-2"
    >
      {beats.map((beat, index) => {
        const enCours = index === activeIndex;
        const passee = index < activeIndex;

        return (
          <li key={beat.id} className="flex-1">
            <button
              type="button"
              onClick={() => onSelect(index)}
              aria-current={enCours ? 'step' : undefined}
              className="flex min-h-12 w-full cursor-pointer items-center px-1"
            >
              {/*
                Le libellé porte le rang plutôt que le contenu du beat : à
                l'oreille, « étape deux sur quatre » situe, quand le texte de la
                phrase ne ferait que répéter ce qui va être lu.
              */}
              <span className="sr-only">
                Étape {index + 1} sur {beats.length}
                {enCours ? ' (en cours)' : ''}
              </span>
              <span
                aria-hidden="true"
                className={`w-full rounded-full transition-all duration-300 ${
                  enCours
                    ? 'h-3 bg-soleil'
                    : passee
                      ? 'h-2 bg-craie-douce'
                      : 'h-2 bg-encre-bord'
                }`}
              />
            </button>
          </li>
        );
      })}
    </ol>
  );
}
