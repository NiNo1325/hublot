'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['sommet-neige', 'pas-le-soleil', 'air-rare', 'retient-moins'] as const;

/**
 * Il fait plus froid en altitude non pas à cause du Soleil (« plus près » est
 * barré), mais parce que l'air se raréfie (points d'air clairsemés en haut) et
 * retient moins la chaleur, qui s'échappe.
 */
export function AltitudeFroidAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#12233c" />
      <rect y="170" width="400" height="70" fill="#1c2f22" />

      {/* La montagne */}
      <path d="M110 170 L190 44 L270 170 Z" fill="#3d4b63" />
      <path d="M168 82 L190 44 L212 82 L200 90 L190 78 L180 90 Z" fill="#f1f5f9" />

      {/* Thermomètre : froid en haut, chaud en bas */}
      <g transform="translate(300 60)">
        <rect x="-5" y="0" width="10" height="96" rx="5" fill="#1e293b" />
        <rect x="-3" y="4" width="6" height="40" fill="#7dd3fc" />
        <rect x="-3" y="52" width="6" height="42" fill="#fb923c" />
        <circle cx="0" cy="104" r="9" fill="#fb923c" />
      </g>

      {/* Phase 1 : neige même en été */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <circle cx="196" cy="60" r="3" fill="#e0f2fe" />
        <circle cx="184" cy="70" r="3" fill="#e0f2fe" />
        <text x="20" y="200" fill="#e0f2fe" fontSize="15" fontFamily={police}>neige même en été</text>
      </g>

      {/* Phase 2 : pas plus près du Soleil (idée reçue barrée) */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <circle cx="360" cy="30" r="14" fill="#fbbf24" />
        <line x1="196" y1="52" x2="344" y2="34" stroke="#fbbf24" strokeWidth="2" strokeDasharray="5 4" />
        <line x1="240" y1="30" x2="290" y2="56" stroke="#f43f5e" strokeWidth="4" />
        <line x1="290" y1="30" x2="240" y2="56" stroke="#f43f5e" strokeWidth="4" />
        <text x="20" y="224" fill="#fca5a5" fontSize="15" fontFamily={police}>pas plus près du Soleil</text>
      </g>

      {/* Phase 3 : l'air se raréfie (dense en bas, clairsemé en haut) */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        {[
          [150, 150], [170, 150], [190, 150], [210, 150], [230, 150],
          [165, 128], [190, 128], [215, 128],
          [178, 104], [202, 104],
          [190, 82],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="#93c5fd">
            {anime && <animate attributeName="opacity" values="0.4;1;0.4" dur="2.4s" begin={`${i * 0.12}s`} repeatCount="indefinite" />}
          </circle>
        ))}
        <text x="250" y="200" fill="#93c5fd" fontSize="15" fontFamily={police}>l’air se raréfie</text>
      </g>

      {/* Phase 4 : en haut, la chaleur s'échappe */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        {/* chaleur gardée en bas (flèches courbes qui restent) */}
        <path d="M150 158 q10 -10 20 0" stroke="#fb923c" strokeWidth="2.5" fill="none" />
        <path d="M210 158 q10 -10 20 0" stroke="#fb923c" strokeWidth="2.5" fill="none" />
        {/* chaleur qui s'échappe en haut */}
        {[180, 200].map((x, i) => (
          <g key={x}>
            <line x1={x} y1="88" x2={x} y2="60" stroke="#fb923c" strokeWidth="2" />
            <path d={`M${x - 4} 66 L${x} 56 L${x + 4} 66 Z`} fill="#fb923c">
              {anime && <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
            </path>
          </g>
        ))}
        <text x="230" y="224" fill="#fb923c" fontSize="15" fontFamily={police}>la chaleur s’échappe</text>
      </g>
    </svg>
  );
}
