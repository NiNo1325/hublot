'use client';

import type { AgeRange, ScienceCard } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';
import { useLocale } from '@/components/i18n/useLocale';
import { localise } from '@/lib/i18n/localise';
import { useT } from '@/components/i18n/useT';

interface CardTileProps {
  card: ScienceCard;
  ageRange: AgeRange;
  /** Rang dans la grille, pour l'allumage en séquence. */
  index: number;
  /** Carte déjà écoutée : elle porte la coche de validation. */
  dejaJouee: boolean;
  /** Hublot éteint. Levé quand tout le catalogue est exploré, la coche restant. */
  eteinte: boolean;
  /** Carte premium non débloquée : elle porte un cadenas. */
  verrouillee: boolean;
  onSelect: (card: ScienceCard) => void;
}

/**
 * Un hublot : disque lumineux posé sur le fond encre. La cible tactile fait
 * 128px de côté minimum, bien au-delà des 44px recommandés — la précision
 * motrice d'un enfant de trois ans est faible.
 *
 * Une carte déjà écoutée perd son halo et son anneau coloré, de sorte que
 * seules les cartes restantes brillent. L'emoji, lui, ne change pas : une
 * tuile grisée se lirait « indisponible », alors qu'une carte se réécoute
 * autant qu'on veut. Et comme éteindre est une variation de luminance et non
 * de teinte, le repère tient aussi sans distinguer les couleurs.
 *
 * S'y ajoute une coche verte, à la demande des utilisateurs : l'extinction dit
 * « il ne reste rien à faire ici », la coche dit « c'est validé ». Les deux
 * cohabitent, et la coche apporte un troisième canal — une forme — après la
 * luminance et le texte pour lecteur d'écran.
 */
export function CardTile({
  card,
  ageRange,
  index,
  dejaJouee,
  eteinte,
  verrouillee,
  onSelect,
}: CardTileProps) {
  const { locale } = useLocale();
  const t = useT();
  const style = domainStyles[card.domainId];
  const titre = localise(card.content, locale).title[ageRange];

  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(card)}
        className="group flex w-full cursor-pointer flex-col items-center gap-3 rounded-3xl p-2 transition-transform duration-150 hover:scale-105 active:scale-95"
        style={{
          animation: 'allumage 500ms ease-out backwards',
          animationDelay: `${index * 70}ms`,
        }}
      >
        <span
          className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 text-4xl transition-[box-shadow,border-color] duration-500 sm:h-32 sm:w-32 sm:text-5xl lg:h-36 lg:w-36"
          style={{
            borderColor: eteinte ? 'var(--color-encre-bord)' : style.teinte,
            backgroundColor: 'var(--color-encre-clair)',
            boxShadow: eteinte ? 'none' : `0 0 32px ${style.halo}`,
          }}
        >
          {card.thumbnail}

          {/*
            Posée à quarante-cinq degrés sur l'anneau, en bas à droite : sur un
            cercle, le coin de la boîte est hors du disque, et la coche y
            flotterait sans y appartenir. Le liseré couleur du fond la détache
            de l'anneau quel que soit le domaine.
          */}
          {dejaJouee && (
            <span
              aria-hidden="true"
              className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-encre"
              style={{ backgroundColor: '#34d399' }}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path
                  d="M5 13l4.5 4.5L19 7"
                  fill="none"
                  stroke="var(--color-encre)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}

          {verrouillee && (
            <span
              aria-hidden="true"
              className="absolute bottom-1 left-1 flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-encre bg-encre-clair text-sm"
            >
              🔒
            </span>
          )}
        </span>

        {/*
          Le titre s'affiche à tous les âges. Même si les 3-5 ne lisent pas
          encore, montrer le nom partout est plus cohérent (choix du produit) —
          et l'emoji reste leur repère principal.
        */}
        <span className="text-center font-display text-base font-medium text-craie">
          {titre}
        </span>

        {/*
          L'extinction est visuelle : pour qui n'y a pas accès, le repère doit
          être dit. C'est la redondance qu'impose la règle d'accessibilité du
          projet — jamais d'information portée par le seul rendu.
        */}
        {dejaJouee && <span className="sr-only">{t('carte.deja-ecoutee')}</span>}
        {verrouillee && <span className="sr-only">{t('carte.verrouillee')}</span>}
      </button>
    </li>
  );
}
