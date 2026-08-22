'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['inclinaison', 'ete', 'hiver', 'distance'] as const;

/*
  Les deux légendes de saison partagent la même ligne (y = 182) : celle d'été
  démarre à x = 26 et celle d'hiver à x = 196. La version anglaise d'« été »
  doit donc rester aussi courte que le français, sous peine de la recouvrir.
*/
const LEGENDES = {
  fr: {
    ete: 'été : rayons droits',
    hiver: 'hiver : rayons en biais',
    axe: 'l’axe garde toujours la même direction',
    distance: 'la distance ne change presque pas',
  },
  en: {
    ete: 'summer: direct rays',
    hiver: 'winter: slanted rays',
    axe: 'the axis always points the same way',
    distance: 'the distance barely changes',
  },
};

/**
 * Terre inclinée, avec son axe et son hémisphère nord marqué.
 *
 * Le signe de la rotation n'est pas indifférent : en SVG, l'axe des y descend,
 * si bien que `rotate(23)` envoie le pôle nord vers la droite. La Terre d'été
 * étant à gauche du Soleil, c'est ce sens-là qui la fait pencher vers lui.
 * Avec `rotate(-23)`, elle penchait à l'opposé — la carte montrait exactement
 * l'inverse de ce qu'elle enseigne, et l'inclinaison est le seul repère visuel
 * dont dispose l'enfant.
 *
 * Les deux Terres partagent la même valeur, et doivent la garder : des axes
 * parallèles aux deux positions de l'orbite, c'est précisément ce qui produit
 * les saisons.
 */
function Terre({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(23)`}>
      <circle r="26" fill="#2563eb" />
      <path d="M-26 0 A26 26 0 0 1 26 0 Z" fill="#38bdf8" />
      <line x1="0" y1="-36" x2="0" y2="36" stroke="#f5f0e6" strokeWidth="2" strokeDasharray="4 4" />
      <text x="-6" y="-14" fill="#0f1b33" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">N</text>
    </g>
  );
}

/**
 * L'axe garde la même direction aux deux positions de l'orbite : c'est
 * précisément ce qui produit les saisons. Le faisceau incident est dessiné
 * étroit côté été et étalé côté hiver — la surface éclairée est l'argument,
 * pas la distance.
 */
export function SaisonsAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Soleil au centre */}
      <circle cx="200" cy="120" r="24" fill="#ffb627" />
      <ellipse cx="200" cy="120" rx="142" ry="86" fill="none" stroke="#2c3f66" strokeWidth="2" strokeDasharray="5 7" />

      {/* Été : rayons concentrés sur une petite surface */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <Terre x={62} y={120} />
        {[-10, 0, 10].map((dy) => (
          <line
            key={dy} x1="172" y1={120 + dy} x2="96" y2={120 + dy * 0.4}
            stroke="#ffb627" strokeWidth="3" strokeDasharray="6 6"
          >
            {anime && (
              <animate attributeName="stroke-dashoffset" values="12;0" dur="1s" repeatCount="indefinite" />
            )}
          </line>
        ))}
        <text x="26" y="182" fill="#ffb627" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.ete}
        </text>
      </g>

      {/* Hiver : même énergie étalée sur une plus grande surface */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <Terre x={338} y={120} />
        {[-26, 0, 26].map((dy) => (
          <line
            key={dy} x1="228" y1={120 + dy * 0.3} x2="304" y2={120 + dy}
            stroke="#7dd3fc" strokeWidth="3" strokeDasharray="6 6"
          >
            {anime && (
              <animate attributeName="stroke-dashoffset" values="12;0" dur="1s" repeatCount="indefinite" />
            )}
          </line>
        ))}
        <text x="196" y="182" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.hiver}
        </text>
      </g>

      {/* L'axe conserve sa direction sur toute l'orbite */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <text x="69" y="30" fill="#b9c4da" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.axe}
        </text>
      </g>

      {/* La distance n'explique rien : elle varie à peine, et à contretemps. */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="86" y="234" fill="#fb7185" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          {legende.distance}
        </text>
        {phase === 3 && (
          <line x1="88" y1="120" x2="312" y2="120" stroke="#fb7185" strokeWidth="2" strokeDasharray="4 6" />
        )}
      </g>
    </svg>
  );
}
