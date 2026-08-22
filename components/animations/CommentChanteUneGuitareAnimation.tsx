'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

/*
  Les légendes de l'illustration sont du contenu, pas du décor : elles nomment
  ce que la scène montre. Les passer par `localise` fait plus que traduire — le
  typage impose à chaque langue de reprendre exactement les clés du français,
  donc une légende oubliée en cours de traduction ne compile pas.
*/
const LEGENDES = {
  fr: {
    pincer: 'tu pinces une corde',
    inaudible: 'seule, presque inaudible',
    amplifier: 'le bois amplifie, fort !',
    courte: 'corde plus courte → plus aigu',
  },
  en: {
    pincer: 'you pluck a string',
    inaudible: 'alone, almost inaudible',
    amplifier: 'the wood amplifies — loud!',
    courte: 'shorter string → higher',
  },
};

/**
 * Le son n'est pas fabriqué par le trou de la guitare : c'est la corde qui
 * vibre, et c'est toute la caisse de résonance qui amplifie ce son.
 */
export function CommentChanteUneGuitareAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite, dejaVu } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#140b1f" />

      {/* La guitare, toujours visible */}
      <rect x="20" y="94" width="150" height="28" fill="#5b3a21" />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={40 + i * 30} y1="94" x2={40 + i * 30} y2="122" stroke="#3f2914" strokeWidth="1.5" />
      ))}
      <path
        d="M170 60 Q230 40 270 78 Q300 108 270 150 Q240 190 190 178 Q150 168 150 130 Q150 90 170 60 Z"
        fill="#8b5a2b"
      />
      <circle cx="222" cy="112" r="26" fill="#140b1f" />

      {/*
        Les cordes courent du sillet au chevalet, manche compris.

        L'unique corde s'arrêtait au bord de la caisse : elle ne passait pas
        sur le manche, si bien que le doigt de la dernière phase se posait à
        vide, à cent unités de ce qu'il était censé plaquer. Cinq cordes en
        sourdine donnent l'instrument, la sixième est celle qu'on pince.
      */}
      <rect x="286" y="96" width="6" height="24" rx="2" fill="#3f2914" />
      {[98, 103, 113, 118].map((y) => (
        <line key={y} x1="26" y1={y} x2="290" y2={y} stroke="#7c5c8a" strokeWidth="1" />
      ))}
      <line x1="26" y1="108" x2="290" y2="108" stroke="#e879f9" strokeWidth="2" id="corde-guitare" />

      {/* Phase 1 : on pince la corde */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <path d="M40 100 Q60 100 80 100" stroke="#fbcfe8" strokeWidth="2" fill="none" opacity="0.6" />
        <text x="16" y="150" fill="#fbcfe8" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.pincer}</text>
      </g>

      {/* Phase 2 : seule, elle produit un son très faible */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <path d="M26 108 Q158 104 290 108" stroke="#38bdf8" strokeWidth="2" fill="none">
          {anime && (
            <animate
              attributeName="d"
              values="M26 108 L290 108;M26 108 Q158 98 290 108;M26 108 L290 108;M26 108 Q158 118 290 108;M26 108 L290 108"
              dur="0.3s"
              repeatCount="indefinite"
            />
          )}
        </path>
        <path d="M300 106 Q306 108 300 110" stroke="#38bdf8" strokeWidth="1.5" fill="none" opacity="0.7" />
        <text x="16" y="150" fill="#38bdf8" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.inaudible}</text>
      </g>

      {/* Phase 3 : la caisse en bois amplifie le son */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <ellipse cx="222" cy="112" rx="76" ry="60" fill="none" stroke="#fde047" strokeWidth="2" opacity="0.5">
          {anime && <animate attributeName="rx" values="70;82;70" dur="1.4s" repeatCount="indefinite" />}
        </ellipse>
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M${254 + i * 14} 100 Q${268 + i * 14} 112 ${254 + i * 14} 124`} stroke="#fde047" strokeWidth="2" fill="none">
            {anime && <animate attributeName="opacity" values="0.2;1;0.2" dur="1.2s" begin={`${i * 0.25}s`} repeatCount="indefinite" />}
          </path>
        ))}
        <text x="16" y="150" fill="#fde047" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.amplifier}</text>
      </g>

      {/* Phase 4 : un doigt raccourcit la corde, la note monte */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <circle cx="90" cy="108" r="7" fill="#e879f9">
          {anime && <animateTransform attributeName="transform" type="translate" values="0 0; -30 0; 0 0" dur="2s" repeatCount="indefinite" />}
        </circle>
        {/* Seul le segment doigt → chevalet vibre : c'est lui qui a raccourci. */}
        {dejaVu(3) && <line x1="26" y1="108" x2="90" y2="108" stroke="#5b3a21" strokeWidth="3" />}
        {dejaVu(3) && <line x1="90" y1="108" x2="290" y2="108" stroke="#e879f9" strokeWidth="3" />}
        <text x="16" y="150" fill="#e879f9" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.courte}</text>
      </g>
    </svg>
  );
}
