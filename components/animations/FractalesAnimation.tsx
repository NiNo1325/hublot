'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['motif', 'repetition', 'nature', 'limite'] as const;

/**
 * L'arbre est engendré récursivement à la volée : c'est la démonstration même
 * du propos — une règle tenant en trois lignes produit une structure d'aspect
 * très complexe.
 */
function branches(
  x: number,
  y: number,
  longueur: number,
  angle: number,
  profondeur: number,
): { d: string; profondeur: number }[] {
  if (profondeur === 0 || longueur < 3) return [];
  const x2 = x + Math.cos(angle) * longueur;
  const y2 = y + Math.sin(angle) * longueur;
  return [
    { d: `M${x.toFixed(1)} ${y.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}`, profondeur },
    ...branches(x2, y2, longueur * 0.72, angle - 0.5, profondeur - 1),
    ...branches(x2, y2, longueur * 0.72, angle + 0.5, profondeur - 1),
  ];
}

export function FractalesAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite, auRepos } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  /* La profondeur croît avec la narration : la règle se déploie sous les yeux. */
  const profondeur = auRepos ? 5 : Math.min(3 + phase * 2, 8);
  const arbre = branches(120, 210, 44, -Math.PI / 2, profondeur);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Arbre récursif */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {arbre.map((b, i) => (
          <path
            key={i}
            d={b.d}
            stroke={b.profondeur > 5 ? '#1f6f4e' : '#34d399'}
            strokeWidth={Math.max(1, b.profondeur * 0.9)}
            strokeLinecap="round"
            fill="none"
          >
            {anime && phase === 1 && (
              <animate attributeName="opacity" values="0;1" dur="0.35s" begin={`${i * 0.012}s`} fill="freeze" />
            )}
          </path>
        ))}
      </g>

      {/* Le motif isolé : une partie ressemble au tout. */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <rect x="150" y="96" width="52" height="52" rx="6" fill="none" stroke="#ffb627" strokeWidth="2" strokeDasharray="5 5" />
        <path d="M202 122 h30" stroke="#ffb627" strokeWidth="2" />
        <g transform="translate(258 122) scale(1.5)">
          {branches(0, 22, 16, -Math.PI / 2, 3).map((b, i) => (
            <path key={i} d={b.d} stroke="#ffb627" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          ))}
        </g>
        <text x="228" y="168" fill="#ffb627" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          la partie = le tout
        </text>
      </g>

      {/* Présence dans la nature */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <text x="266" y="60" fontSize="26">🫁</text>
        <text x="304" y="60" fontSize="26">❄️</text>
        <text x="342" y="60" fontSize="26">🥦</text>
        <text x="205" y="84" fill="#b9c4da" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          partout dans la nature
        </text>
      </g>

      {/* La limite : le réel s'arrête, le modèle non. */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="220" y="214" fill="#b9c4da" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          la nature s&apos;arrête,
        </text>
        <text x="211" y="232" fill="#b9c4da" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          les maths continuent
        </text>
      </g>
    </svg>
  );
}
