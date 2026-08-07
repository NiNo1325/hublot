'use client';

import Link from 'next/link';
import type { AgeRange, DomainDefinition } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';

interface MondeTileProps {
  domain: DomainDefinition;
  vues: number;
  total: number;
  ageRange: AgeRange;
  /** Rang dans la grille, pour l'allumage en séquence. */
  index: number;
}

// Rayon et circonférence de l'anneau de progression (viewBox 100×100).
const R = 46;
const C = 2 * Math.PI * R;

/**
 * Un « monde » : le hublot d'un domaine, cerclé d'un anneau de progression qui
 * se remplit à mesure des cartes écoutées. Domaine complet = anneau plein +
 * coche. Le label est masqué pour les 3-5 ans (reconnaissance par emoji/couleur),
 * mais la progression est toujours dite en `sr-only`.
 */
export function MondeTile({ domain, vues, total, ageRange, index }: MondeTileProps) {
  const style = domainStyles[domain.id];
  const complet = total > 0 && vues >= total;
  const fraction = total > 0 ? vues / total : 0;

  return (
    <li>
      <Link
        href={`/decouvrir/${domain.id}`}
        className="group flex w-40 cursor-pointer flex-col items-center gap-3 rounded-3xl p-2 transition-transform duration-150 hover:scale-105 active:scale-95 sm:w-44"
        style={{ animation: 'allumage 500ms ease-out backwards', animationDelay: `${index * 70}ms` }}
      >
        <span className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
          {/* Anneau de progression */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
            <circle cx="50" cy="50" r={R} fill="none" stroke="var(--color-encre-bord)" strokeWidth="6" />
            <circle
              cx="50"
              cy="50"
              r={R}
              fill="none"
              stroke={style.teinte}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${fraction * C} ${C}`}
              style={{ transition: 'stroke-dasharray 500ms ease' }}
            />
          </svg>
          {/* Disque + emoji */}
          <span
            className="flex h-24 w-24 items-center justify-center rounded-full text-5xl sm:h-28 sm:w-28"
            style={{
              backgroundColor: 'var(--color-encre-clair)',
              boxShadow: complet ? 'none' : `0 0 28px ${style.halo}`,
            }}
          >
            {domain.icon}
          </span>
          {/* Coche quand le monde est terminé */}
          {complet && (
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
        </span>

        {/* Label : masqué pour les 3-5 ans, comme les cartes */}
        <span
          className={
            ageRange === '3-5'
              ? 'sr-only'
              : 'text-center font-display text-base font-medium text-craie'
          }
        >
          {domain.labels.fr}
        </span>
        {/* Compteur discret pour lecteurs/parents */}
        {ageRange !== '3-5' && (
          <span aria-hidden="true" className="text-sm text-craie-douce">
            {vues}/{total}
          </span>
        )}
        {/* Toujours dit pour l'accessibilité */}
        <span className="sr-only">
          {domain.labels.fr}, {vues} carte{vues > 1 ? 's' : ''} sur {total} écoutée
          {vues > 1 ? 's' : ''}
          {complet ? ', terminé' : ''}
        </span>
      </Link>
    </li>
  );
}
