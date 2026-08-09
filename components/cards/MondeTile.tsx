'use client';

import Link from 'next/link';
import type { DomainDefinition } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';

interface MondeTileProps {
  domain: DomainDefinition;
  vues: number;
  total: number;
  /** Rang dans la grille, pour l'allumage en séquence. */
  index: number;
  onEcouter: () => void;
  enLecture: boolean;
  maitrise: boolean;
}

// Rayon et circonférence de l'anneau de progression (viewBox 100×100).
const R = 46;
const C = 2 * Math.PI * R;

/**
 * Un « monde » : le hublot d'un domaine, cerclé d'un anneau de progression, avec
 * son accroche et un bouton pour l'écouter. Tout est affiché à tous les âges —
 * un jeune enfant qui ne lit pas peut au moins écouter l'accroche.
 *
 * Le bouton audio vit hors du `Link` : un `<button>` ne peut pas être imbriqué
 * dans le `<a>` qu'un `Link` produit.
 */
export function MondeTile({
  domain,
  vues,
  total,
  index,
  onEcouter,
  enLecture,
  maitrise,
}: MondeTileProps) {
  const style = domainStyles[domain.id];
  const complet = total > 0 && vues >= total;
  const fraction = total > 0 ? vues / total : 0;
  const accroche = domain.accroche.fr;

  return (
    <li
      className="w-40 sm:w-44"
      style={{ animation: 'allumage 500ms ease-out backwards', animationDelay: `${index * 70}ms` }}
    >
      {/* Chaque monde est une carte auto-contenue : le hublot, le nom, le
          compteur et l'accroche forment un seul bloc. L'accroche appartient
          ainsi clairement à sa carte, et ne flotte plus entre deux mondes. */}
      <div className="flex h-full flex-col items-center gap-2 rounded-3xl border-2 border-encre-bord bg-encre-clair/40 p-3">
      <Link
        href={`/decouvrir/${domain.id}`}
        className="group flex cursor-pointer flex-col items-center gap-2 rounded-3xl p-1 transition-transform duration-150 hover:scale-105 active:scale-95"
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
          {maitrise && (
            <span
              className="absolute bottom-1 left-1 flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-encre bg-soleil text-sm"
            >
              <span aria-hidden="true">🏅</span>
              <span className="sr-only">maîtrisé</span>
            </span>
          )}
        </span>

        <span className="text-center font-display text-base font-medium text-craie">
          {domain.labels.fr}
        </span>
        <span aria-hidden="true" className="text-sm text-craie-douce">
          {vues}/{total}
        </span>
        <span className="sr-only">
          {domain.labels.fr}, {vues} carte{vues > 1 ? 's' : ''} sur {total} écoutée
          {vues > 1 ? 's' : ''}
          {complet ? ', terminé' : ''}
        </span>
      </Link>

      {/* Accroche + écoute, poussées en bas de la carte (mt-auto) pour que les
          boutons s'alignent d'une carte à l'autre. Hors du Link : un bouton ne
          peut pas vivre dans un <a>. */}
      <div className="mt-auto flex items-start gap-2 pt-1">
        <p className="flex-1 text-center text-sm italic leading-snug text-craie-douce">
          {accroche}
        </p>
        <button
          type="button"
          onClick={onEcouter}
          aria-label={`Écouter : ${accroche}`}
          className="mt-0.5 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-encre-bord text-base transition-colors hover:border-soleil hover:text-soleil"
        >
          <span aria-hidden="true">{enLecture ? '⏸' : '🔊'}</span>
        </button>
      </div>
      </div>
    </li>
  );
}
