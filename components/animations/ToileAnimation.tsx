'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['rayons', 'spirale', 'marche', 'proie'] as const;

const LEGENDES = {
  fr: {
    rayons: 'les fils secs',
    spirale: 'la spirale colle',
    marche: 'elle marche sur le sec',
    proie: 'la proie est piégée',
  },
  en: {
    rayons: 'the dry threads',
    spirale: 'the spiral is sticky',
    marche: 'it walks on the dry',
    proie: 'the prey is trapped',
  },
};

const CX = 188;
const CY = 100;
const N = 8;
const RMAX = 72;

/** Point du rayon i à la distance r du centre. */
function pt(i: number, r: number): [number, number] {
  const a = (Math.PI * 2 * i) / N - Math.PI / 2;
  return [CX + Math.cos(a) * r, CY + Math.sin(a) * r];
}

/**
 * Tous les fils ne collent pas : les rayons (gris, secs) portent l'araignée, la
 * spirale (dorée, à gouttes de glu) piège la proie. Le code couleur oppose sec
 * et collant, ce qui réfute « l'araignée se colle à sa propre toile ».
 */
export function ToileAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const legende = localise(LEGENDES, locale);

  const anneaux = [26, 44, 62];

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0e1524" />

      {/* Rayons secs (gris) — toujours visibles, la charpente */}
      {Array.from({ length: N }, (_, i) => {
        const [x, y] = pt(i, RMAX);
        return <line key={i} x1={CX} y1={CY} x2={x} y2={y} stroke="#94a3b8" strokeWidth="2" />;
      })}

      {/* Phase 2+ : la spirale collante (dorée, à gouttes) */}
      <g style={{ opacity: opacite(1) > 0.5 || opacite(2) > 0.5 || opacite(3) > 0.5 ? 1 : 0.25, transition: 'opacity 400ms ease' }}>
        {anneaux.map((r) => (
          <polygon
            key={r}
            points={Array.from({ length: N }, (_, i) => pt(i, r).join(',')).join(' ')}
            fill="none"
            stroke="#f6c453"
            strokeWidth="2"
          />
        ))}
        {anneaux.flatMap((r) =>
          Array.from({ length: N }, (_, i) => {
            const [x, y] = pt(i, r);
            return <circle key={`${r}-${i}`} cx={x} cy={y} r="2" fill="#fde68a" />;
          }),
        )}
      </g>

      {/* Phase 1 : les fils secs */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <text x="20" y="200" fill="#cbd5e1" fontSize="15" fontFamily={police}>{legende.rayons}</text>
      </g>

      {/* Phase 2 : la spirale colle */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <text x="20" y="224" fill="#f6c453" fontSize="15" fontFamily={police}>{legende.spirale}</text>
      </g>

      {/* Phase 3 : l'araignée marche sur les rayons secs */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        {/* rayon emprunté, surligné */}
        <line x1={CX} y1={CY} x2={pt(6, RMAX)[0]} y2={pt(6, RMAX)[1]} stroke="#38bdf8" strokeWidth="3" />
        <g transform={`translate(${(CX + pt(6, 40)[0]) / 2} ${CY})`}>
          <ellipse cx="0" cy="0" rx="8" ry="6" fill="#3b2f2a" />
          {[-1, 1].map((s) =>
            [0, 1, 2].map((k) => (
              <line key={`${s}-${k}`} x1="0" y1="0" x2={s * (10 + k * 3)} y2={-6 + k * 6} stroke="#3b2f2a" strokeWidth="1.5" />
            )),
          )}
        </g>
        <text x="228" y="200" fill="#38bdf8" fontSize="15" fontFamily={police}>{legende.marche}</text>
      </g>

      {/* Phase 4 : la proie piégée sur la spirale */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <g transform={`translate(${pt(2, 62)[0]} ${pt(2, 62)[1]})`}>
          <ellipse cx="0" cy="0" rx="5" ry="3.5" fill="#a3e635" />
          <path d="M-4 -3 Q-9 -8 -6 -1 M4 -3 Q9 -8 6 -1" stroke="#65a30d" strokeWidth="1.4" fill="none">
            {anime && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="indefinite" />}
          </path>
        </g>
        <text x="228" y="224" fill="#a3e635" fontSize="15" fontFamily={police}>{legende.proie}</text>
      </g>
    </svg>
  );
}
