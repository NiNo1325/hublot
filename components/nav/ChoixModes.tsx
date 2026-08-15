'use client';

import Link from 'next/link';
import { useT } from '@/components/i18n/useT';

export interface Mode {
  /** `null` pour un mode annoncé mais pas encore jouable. */
  href: string | null;
  emoji: string;
  titre: string;
  texte: string;
  /** Teinte de l'accent, reprise du domaine ou du mode. */
  teinte: string;
}

interface ChoixModesProps {
  titre: string;
  texte: string;
  modes: Mode[];
}

/**
 * L'entrée d'un onglet qui abrite plusieurs façons de faire la même chose :
 * découvrir le contenu, ou jouer avec.
 *
 * Un enfant ne choisit pas dans un menu, il choisit devant des objets : chaque
 * mode est une grande tuile qui dit ce qu'on y fait, pas seulement comment ça
 * s'appelle. Les deux onglets partagent ce composant pour que le geste soit le
 * même de l'un à l'autre — un seul motif à comprendre, appris une fois.
 *
 * Un mode encore à venir reste visible mais inerte : montrer ce qui arrive
 * donne envie de revenir, et le griser dit assez qu'il n'y a rien à toucher.
 */
export function ChoixModes({ titre, texte, modes }: ChoixModesProps) {
  const t = useT();

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-8 px-6 py-10">
      <header className="flex flex-col items-center gap-3 text-center">
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{titre}</h1>
        <p className="max-w-md text-craie-douce">{texte}</p>
      </header>

      <ul className="flex flex-col gap-4">
        {modes.map((mode) => {
          const contenu = (
            <>
              <span
                aria-hidden="true"
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-4xl"
                style={{
                  backgroundColor: 'var(--color-encre)',
                  boxShadow: mode.href ? `0 0 20px ${mode.teinte}55` : 'none',
                }}
              >
                {mode.emoji}
              </span>
              <span className="flex flex-1 flex-col gap-1">
                <span className="flex items-center gap-2 font-display text-xl text-craie">
                  {mode.titre}
                  {!mode.href && (
                    <span className="rounded-full border border-encre-bord px-2 py-0.5 text-xs font-normal text-craie-douce">
                      {t('commun.bientot')}
                    </span>
                  )}
                </span>
                <span className="text-sm leading-snug text-craie-douce">{mode.texte}</span>
              </span>
              {mode.href && (
                <span aria-hidden="true" className="text-2xl leading-none text-craie-douce">
                  ›
                </span>
              )}
            </>
          );

          const habillage =
            'flex items-center gap-4 rounded-3xl border-2 bg-encre-clair p-5 text-left';

          return (
            <li key={mode.titre}>
              {mode.href ? (
                <Link
                  href={mode.href}
                  className={`${habillage} cursor-pointer transition-transform hover:scale-[1.01] active:scale-[0.99]`}
                  style={{ borderColor: mode.teinte }}
                >
                  {contenu}
                </Link>
              ) : (
                /*
                  Ni lien ni bouton : rien à activer, donc rien qui prenne le
                  focus au clavier ou s'annonce comme cliquable au lecteur
                  d'écran. Le libellé « bientôt » porte l'information.
                */
                <div
                  className={`${habillage} border-encre-bord opacity-55`}
                  style={{ borderColor: 'var(--color-encre-bord)' }}
                >
                  {contenu}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
