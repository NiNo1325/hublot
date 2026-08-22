'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    tourbillons: 'plein de tourbillons',
    avantNaissance: 'formé avant ta naissance',
    attraper: 'ça aide à attraper',
    unique: 'personne n’a le même',
  },
  en: {
    tourbillons: 'lots of little swirls',
    avantNaissance: 'formed before you were born',
    attraper: 'it helps you grip',
    unique: 'nobody has the same',
  },
};

/** Cinq boucles concentriques et décalées : un tourbillon, pas des cercles parfaits. */
const BOUCLES = [
  'M200 66 Q236 70 240 106 Q244 146 204 152',
  'M200 76 Q226 80 228 108 Q230 138 202 142',
  'M200 86 Q216 90 217 110 Q218 130 202 132',
  'M200 96 Q206 98 206 112 Q206 122 202 122',
];

/** Un second motif, plus étiré : même un vrai jumeau a un dessin différent. */
const BOUCLES_JUMEAU = [
  'M160 60 Q230 76 220 116 Q212 156 168 148',
  'M168 74 Q216 86 210 114 Q206 142 174 138',
  'M176 88 Q202 96 200 114 Q198 130 180 128',
  'M184 100 Q192 104 192 114 Q192 122 186 120',
];

/**
 * Un bout de doigt occupe le centre de l'écran, avec ses lignes en
 * tourbillon : le même motif réapparaît en miniature sur le ventre (formé
 * avant la naissance), puis sert à agripper un objet, puis se compare à un
 * second doigt légèrement différent (le jumeau).
 */
export function LesEmpreintesDigitalesAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Le bout du doigt, avec ses lignes en tourbillon */}
      <rect x="150" y="40" width="100" height="150" rx="50" fill="#fbcfe8" />
      {BOUCLES.map((d) => (
        <path key={d} d={d} fill="none" stroke="#be5b7a" strokeWidth="2.5" />
      ))}

      {/* Phase 1 : les tourbillons */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <circle cx="200" cy="110" r="60" fill="none" stroke="#f9a8d4" strokeWidth="2" strokeDasharray="3 5">
          {anime && (
            <animateTransform attributeName="transform" type="rotate" values="0 200 110;360 200 110" dur="6s" repeatCount="indefinite" />
          )}
        </circle>
        <text x="20" y="34" fill="#f9a8d4" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.tourbillons}</text>
      </g>

      {/* Phase 2 : formé avant la naissance */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <circle cx="80" cy="180" r="30" fill="#7c3f56" />
        <path d="M80 168 Q92 170 92 180 Q92 190 80 188" fill="none" stroke="#fbcfe8" strokeWidth="2" />
        <text x="20" y="228" fill="#fbcfe8" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.avantNaissance}</text>
      </g>

      {/* Phase 3 : ça aide à attraper */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <circle cx="320" cy="130" r="22" fill="#a3a3a3">
          {anime && (
            <animateTransform attributeName="transform" type="translate" values="6 0; -2 0; 6 0" dur="1.4s" repeatCount="indefinite" />
          )}
        </circle>
        <path d="M296 118 l-14 -6 M296 142 l-14 6" stroke="#4ade80" strokeWidth="2.5" />
        <text x="250" y="200" fill="#4ade80" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.attraper}</text>
      </g>

      {/* Phase 4 : unique, même entre jumeaux */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        {/*
          L'empreinte du jumeau, à gauche de celle du doigt principal.

          Elle était dessinée hors de l'écran : `translate(-108 90) scale(0.42)`
          la plaçait entre x = −45 et x = −3, dans un viewBox qui commence à 0.
          La phase repose entièrement sur une comparaison — « même pas un
          jumeau » — et il n'y avait rien à comparer.

          `scale(0.55)` puis `translate(-36.5 34)` la posent entre x = 46 et
          x = 101, y = 56 et y = 138 : à gauche du doigt principal (qui commence
          à x = 150), au-dessus du fœtus de la phase 2 (qui descend à y = 150).
          Un peu plus grande et moins pâle qu'avant, pour qu'on puisse
          réellement comparer les deux dessins.
        */}
        <g transform="translate(-36.5 34) scale(0.55)">
          <rect x="150" y="40" width="100" height="150" rx="50" fill="#fbcfe8" opacity="0.85" />
          {BOUCLES_JUMEAU.map((d) => (
            <path key={d} d={d} fill="none" stroke="#be5b7a" strokeWidth="4" opacity="0.85" />
          ))}
        </g>
        <text x="20" y="222" fill="#38bdf8" fontSize="14" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.unique}</text>
      </g>
    </svg>
  );
}
