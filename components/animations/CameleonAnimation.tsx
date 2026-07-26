'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['humeur', 'signal', 'temperature', 'mecanisme'] as const;

/** Couleur du corps selon la phase — la couleur EST le message. */
const COULEURS = ['#4a9d3f', '#f97316', '#2b2f3a', '#22d3ee'];

/**
 * Le caméléon change de couleur pour communiquer et régler sa température, pas
 * pour se camoufler. En phase « signal », un second caméléon reçoit le message
 * (la couleur est montrée, pas cachée) ; en « mécanisme », les cristaux et le
 * mur barré opposent l'idée reçue à la vérité.
 */
export function CameleonAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite, auRepos } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const couleur = auRepos ? '#4a9d3f' : (COULEURS[phase] ?? '#4a9d3f');

  const corps = (x: number, mirror = false) => (
    <g transform={`translate(${x} 120) ${mirror ? 'scale(-1 1)' : ''}`}>
      <path
        d="M-40 0 Q-20 -26 6 -20 Q34 -16 44 4 Q30 16 6 14 Q-18 20 -40 0 Z"
        fill={couleur}
        style={{ transition: 'fill 600ms ease' }}
      />
      <circle cx="30" cy="-10" r="6" fill="#0f1b12" />
      <circle cx="31" cy="-11" r="2" fill="#f5f5f5" />
      {/* queue enroulée */}
      <path d="M-40 0 Q-58 -6 -52 -20 Q-48 -30 -40 -26" stroke={couleur} strokeWidth="6" fill="none" style={{ transition: 'stroke 600ms ease' }} />
    </g>
  );

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#12281a" />
      {/* branche */}
      <path d="M20 150 Q200 140 380 150" stroke="#3d5a34" strokeWidth="7" fill="none" />

      {/* Le caméléon principal, toujours visible : sa couleur suit la phase */}
      {corps(150)}

      {/* Phase 1 : humeur calme */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <text x="20" y="200" fill="#a3e635" fontSize="15" fontFamily={police}>au calme, il est terne</text>
      </g>

      {/* Phase 2 : signal — un second caméléon reçoit le message */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        {corps(320, true)}
        {[92, 108].map((y) => (
          <g key={y}>
            <line x1="212" y1={y} x2="268" y2={y} stroke="#fde047" strokeWidth="3" />
            <path d={`M262 ${y - 5} L274 ${y} L262 ${y + 5} Z`} fill="#fde047" />
          </g>
        ))}
        <text x="20" y="224" fill="#fde047" fontSize="15" fontFamily={police}>un signal envoyé à un autre</text>
      </g>

      {/* Phase 3 : température — soleil + flèche de chaleur vers la peau sombre */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <circle cx="60" cy="46" r="18" fill="#fbbf24" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
          const r = (a * Math.PI) / 180;
          return (
            <line key={a} x1={60 + Math.cos(r) * 22} y1={46 + Math.sin(r) * 22} x2={60 + Math.cos(r) * 30} y2={46 + Math.sin(r) * 30} stroke="#fbbf24" strokeWidth="2.5" />
          );
        })}
        <line x1="78" y1="64" x2="128" y2="104" stroke="#fb923c" strokeWidth="3" />
        <path d="M122 96 L132 108 L118 108 Z" fill="#fb923c" />
        <text x="230" y="200" fill="#fb923c" fontSize="15" fontFamily={police}>sombre pour se réchauffer</text>
      </g>

      {/* Phase 4 : mécanisme — cristaux + camouflage barré */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        {/* zoom cristaux */}
        <g transform="translate(56 60)">
          <rect x="-16" y="-16" width="72" height="52" rx="6" fill="#0f2a1a" stroke="#22d3ee" strokeWidth="1.5" />
          {[0, 1, 2].map((r2) =>
            [0, 1, 2, 3].map((c) => (
              <circle key={`${r2}-${c}`} cx={-4 + c * 16} cy={-2 + r2 * 15} r="3.5" fill="#67e8f9">
                {anime && (
                  <animate attributeName="cx" values={`${-4 + c * 16};${-4 + c * 16 + 2};${-4 + c * 16}`} dur="2.4s" repeatCount="indefinite" />
                )}
              </circle>
            )),
          )}
        </g>
        {/* mur « camouflage » barré */}
        <g transform="translate(300 46)">
          <rect x="0" y="0" width="34" height="34" rx="4" fill="#c084fc" />
          <line x1="-4" y1="-4" x2="38" y2="38" stroke="#f43f5e" strokeWidth="4" />
          <line x1="38" y1="-4" x2="-4" y2="38" stroke="#f43f5e" strokeWidth="4" />
        </g>
        <text x="230" y="224" fill="#67e8f9" fontSize="15" fontFamily={police}>pas pour se cacher</text>
      </g>
    </svg>
  );
}
