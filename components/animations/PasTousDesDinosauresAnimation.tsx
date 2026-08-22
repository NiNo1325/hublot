'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    ptero: 'le ptérosaure vole avec une aile de peau',
    plesio: 'le plésiosaure nage, long cou compris',
    hanche: 'une hanche très différente',
    dinosaure: 'dinosaure',
    pteroPlesio: 'ptéro / plésio',
    dinosaures: 'dinosaures',
    cousins: 'cousins',
    conclusion: 'des cousins, pas des dinosaures',
  },
  en: {
    ptero: 'the pterosaur flies on a wing of skin',
    plesio: 'the plesiosaur swims, long neck and all',
    hanche: 'a very different hip',
    dinosaure: 'dinosaur',
    pteroPlesio: 'ptero / plesio',
    dinosaures: 'dinosaurs',
    cousins: 'cousins',
    conclusion: 'cousins, not dinosaurs',
  },
};

/**
 * Deux silhouettes bien réelles (ptérosaure, plésiosaure) précèdent la
 * preuve anatomique : ce n'est qu'après les avoir vues qu'on regarde la
 * hanche, pour ancrer la conclusion dans des animaux concrets.
 */
export function PasTousDesDinosauresAnimation({
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

      {/* Phase 1 : le ptérosaure vole avec une aile de peau */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <ellipse cx="200" cy="70" rx="16" ry="8" fill="#e8ddc8" />
        <path d="M200 66 Q140 40 90 60 Q140 66 190 74 Z" fill="#a8a29e">
          {anime && (
            <animate attributeName="d" values="M200 66 Q140 40 90 60 Q140 66 190 74 Z;M200 66 Q140 56 90 50 Q140 68 190 74 Z;M200 66 Q140 40 90 60 Q140 66 190 74 Z" dur="1.6s" repeatCount="indefinite" />
          )}
        </path>
        <path d="M200 66 Q260 40 310 60 Q260 66 210 74 Z" fill="#a8a29e">
          {anime && (
            <animate attributeName="d" values="M200 66 Q260 40 310 60 Q260 66 210 74 Z;M200 66 Q260 56 310 50 Q260 68 210 74 Z;M200 66 Q260 40 310 60 Q260 66 210 74 Z" dur="1.6s" repeatCount="indefinite" />
          )}
        </path>
        {/*
          Le bord d’attaque : le bras, le poignet, puis le quatrième doigt.

          Deux ailes grises lisses, sans bras ni doigt, donnaient la silhouette
          d’un oiseau planeur vu de face — exactement l’animal dont la carte
          veut distinguer le ptérosaure, alors que l’aile tendue par un doigt
          unique est le sujet explicite de deux des trois textes. Le poignet
          est calculé sur la courbe de l’aile, au tiers, pour battre avec elle.
        */}
        <g stroke="#57534e" fill="none" strokeLinecap="round">
          <path d="M200 66 Q140 40 90 60" strokeWidth="3">
            {anime && (
              <animate attributeName="d" values="M200 66 Q140 40 90 60;M200 66 Q140 56 90 50;M200 66 Q140 40 90 60" dur="1.6s" repeatCount="indefinite" />
            )}
          </path>
          <path d="M200 66 L161 54" strokeWidth="6">
            {anime && (
              <animate attributeName="d" values="M200 66 L161 54;M200 66 L161 61;M200 66 L161 54" dur="1.6s" repeatCount="indefinite" />
            )}
          </path>
          <path d="M200 66 Q260 40 310 60" strokeWidth="3">
            {anime && (
              <animate attributeName="d" values="M200 66 Q260 40 310 60;M200 66 Q260 56 310 50;M200 66 Q260 40 310 60" dur="1.6s" repeatCount="indefinite" />
            )}
          </path>
          <path d="M200 66 L239 54" strokeWidth="6">
            {anime && (
              <animate attributeName="d" values="M200 66 L239 54;M200 66 L239 61;M200 66 L239 54" dur="1.6s" repeatCount="indefinite" />
            )}
          </path>
        </g>
        <circle cx="161" cy="54" r="3.2" fill="#57534e">
          {anime && <animate attributeName="cy" values="54;61;54" dur="1.6s" repeatCount="indefinite" />}
        </circle>
        <circle cx="239" cy="54" r="3.2" fill="#57534e">
          {anime && <animate attributeName="cy" values="54;61;54" dur="1.6s" repeatCount="indefinite" />}
        </circle>
        <text x="14" y="30" fill="#a8a29e" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.ptero}</text>
      </g>

      {/* Phase 2 : le plésiosaure nage dans la mer, long cou compris */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <rect x="0" y="60" width="400" height="140" fill="#0e3a5f" opacity="0.6" />
        <path d="M220 150 Q160 130 150 90" stroke="#7dd3fc" strokeWidth="14" strokeLinecap="round" fill="none" />
        <ellipse cx="220" cy="150" rx="30" ry="18" fill="#7dd3fc" />
        {/*
          Quatre nageoires, écartées à l’avant et à l’arrière.

          Deux registres sur trois insistent sur le chiffre quatre, et l’image
          en donnait deux, toutes deux groupées au milieu du ventre. La paire
          opposée est plus pâle : c’est une vue de profil.
        */}
        <g fill="#38bdf8" opacity="0.5">
          <path d="M198 156 q-24 14 -28 30 q15 5 28 -13 z" />
          <path d="M242 156 q24 14 28 30 q-15 5 -28 -13 z" />
        </g>
        <g fill="#7dd3fc">
          <path d="M204 162 q-21 16 -23 33 q15 4 25 -15 z" />
          <path d="M238 162 q21 16 23 33 q-15 4 -25 -15 z" />
        </g>
        <text x="14" y="30" fill="#7dd3fc" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.plesio}</text>
      </g>

      {/* Phase 3 : leur hanche ne ressemble pas à celle des dinosaures */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <g transform="translate(140 120)">
          <path d="M0 0 A20 20 0 1 1 0 0.1" fill="none" stroke="#4ade80" strokeWidth="4" />
          <text x="-38" y="42" fill="#4ade80" fontSize="12" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.dinosaure}</text>
        </g>
        <g transform="translate(260 120)">
          <path d="M-18 -12 L18 12 M18 -12 L-18 12" stroke="#f87171" strokeWidth="4" />
          <circle r="20" fill="none" stroke="#f87171" strokeWidth="4" />
          <text x="-30" y="42" fill="#f87171" fontSize="12" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.pteroPlesio}</text>
        </g>
        <text x="14" y="30" fill="#e8ddc8" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.hanche}</text>
      </g>

      {/* Phase 4 : des cousins de la même époque, pas des dinosaures */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <circle cx="200" cy="180" r="7" fill="#e5e7eb" />
        <path d="M200 174 Q160 130 140 96" stroke="#e5e7eb" strokeWidth="3" fill="none" />
        <path d="M200 174 Q240 130 260 96" stroke="#e5e7eb" strokeWidth="3" fill="none" />
        <circle cx="140" cy="90" r="9" fill="#4ade80" />
        <circle cx="260" cy="90" r="9" fill="#f87171" />
        <text x="96" y="76" fill="#4ade80" fontSize="12" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.dinosaures}</text>
        <text x="222" y="76" fill="#f87171" fontSize="12" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.cousins}</text>
        <text x="14" y="220" fill="#e5e7eb" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.conclusion}</text>
      </g>
    </svg>
  );
}
