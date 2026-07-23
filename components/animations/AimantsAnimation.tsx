'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['attraction', 'poles', 'pas-tout', 'boussole'] as const;

/**
 * Un barreau aimanté à deux pôles. Le nord est corail, le sud craie : la
 * couleur double la lettre, pour qui ne lit pas encore.
 */
function Barreau({
  x,
  y,
  gauche,
  droite,
}: {
  x: number;
  y: number;
  gauche: 'N' | 'S';
  droite: 'N' | 'S';
}) {
  const couleur = (p: 'N' | 'S') => (p === 'N' ? '#fb7185' : '#e2e8f0');
  const lettre = (p: 'N' | 'S', cx: number) => (
    <text
      x={cx}
      y={y + 16}
      fill="#0f1b33"
      fontSize="17"
      fontFamily="var(--font-atkinson), sans-serif"
      textAnchor="middle"
    >
      {p}
    </text>
  );
  return (
    <g>
      <rect x={x} y={y} width="44" height="22" fill={couleur(gauche)} />
      <rect x={x + 44} y={y} width="44" height="22" fill={couleur(droite)} />
      {lettre(gauche, x + 22)}
      {lettre(droite, x + 66)}
    </g>
  );
}

export function AimantsAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Aimant en fer à cheval et objets attirés */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <path
          d="M56 122 a34 34 0 0 1 68 0 v46 h-20 v-46 a14 14 0 0 0 -28 0 v46 h-20 z"
          fill="#38bdf8"
        />
        <rect x="56" y="160" width="20" height="14" fill="#fb7185" />
        <rect x="104" y="160" width="20" height="14" fill="#f5f0e6" />
        {[0, 1, 2].map((i) => (
          <rect key={i} x="150" y={112 + i * 22} width="16" height="6" rx="2" fill="#b9c4da">
            {anime && (
              <animate
                attributeName="x" values="164;128"
                dur="1.8s" begin={`${i * 0.4}s`} repeatCount="indefinite"
              />
            )}
          </rect>
        ))}
      </g>

      {/*
        Les deux cas montrés ensemble : c'est la comparaison qui fait la règle.
        L'ancienne version n'affichait qu'une paire, avec un mouvement ambigu et
        un texte qui contredisait les pôles dessinés — le visuel disait l'inverse
        de la voix.
      */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {/* Pôles opposés (S face à N) : ils s'attirent. Flèches convergentes. */}
        <Barreau x={150} y={54} gauche="N" droite="S" />
        <Barreau x={262} y={54} gauche="N" droite="S" />
        <g>
          <line x1="222" y1="92" x2="242" y2="92" stroke="#4ade80" strokeWidth="4" />
          <path d="M238 86 L250 92 L238 98 Z" fill="#4ade80" />
          <line x1="278" y1="92" x2="258" y2="92" stroke="#4ade80" strokeWidth="4" />
          <path d="M262 86 L250 92 L262 98 Z" fill="#4ade80" />
        </g>
        <text x="14" y="66" fill="#4ade80" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          opposés :
        </text>
        <text x="14" y="86" fill="#4ade80" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          ils collent
        </text>

        {/* Pôles identiques (N face à N) : ils se repoussent. Flèches divergentes. */}
        <Barreau x={150} y={150} gauche="S" droite="N" />
        <Barreau x={262} y={150} gauche="N" droite="S" />
        <g>
          <line x1="238" y1="188" x2="218" y2="188" stroke="#f87171" strokeWidth="4" />
          <path d="M222 182 L210 188 L222 194 Z" fill="#f87171" />
          <line x1="262" y1="188" x2="282" y2="188" stroke="#f87171" strokeWidth="4" />
          <path d="M278 182 L290 188 L278 194 Z" fill="#f87171" />
        </g>
        <text x="14" y="162" fill="#f87171" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          pareils :
        </text>
        <text x="14" y="182" fill="#f87171" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          se repoussent
        </text>
      </g>

      {/*
        L'aluminium ne réagit pas : c'est le démenti que l'enfant peut vérifier
        lui-même avec une canette.
      */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <rect x="206" y="118" width="30" height="52" rx="6" fill="#94a3b8" />
        <text x="196" y="188" fill="#94a3b8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          aluminium : rien
        </text>
        <rect x="292" y="118" width="30" height="52" rx="6" fill="#64748b" />
        <text x="284" y="212" fill="#34d399" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          fer : attiré
        </text>
        <path d="M276 144 h-28" stroke="#34d399" strokeWidth="3" strokeLinecap="round" />
        <path d="M252 138 l-8 6 l8 6" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Boussole : la Terre est un aimant */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <circle cx="76" cy="196" r="30" fill="#1b2a4a" stroke="#2c3f66" strokeWidth="3" />
        <g>
          <path d="M76 174 l7 22 l-7 8 l-7 -8 z" fill="#fb7185" />
          <path d="M76 218 l7 -22 l-7 -8 l-7 8 z" fill="#f5f0e6" />
          {anime && phase === 3 && (
            <animateTransform
              attributeName="transform" type="rotate"
              values="-24 76 196; 14 76 196; -6 76 196; 2 76 196; 0 76 196"
              dur="3.4s" repeatCount="indefinite"
            />
          )}
        </g>
      </g>
    </svg>
  );
}
