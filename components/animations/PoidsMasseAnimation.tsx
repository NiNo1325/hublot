'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['balance', 'deux-choses', 'sur-la-lune', 'apesanteur'] as const;

/**
 * Trois lieux, une seule masse, trois poids. Le nom du lieu est une légende
 * comme les autres : il vit dans LEGENDES, la colonne ne garde que sa clé.
 */
const LIEUX = [
  { x: 50, cle: 'terre', poids: '600 N' },
  { x: 180, cle: 'lune', poids: '100 N' },
  { x: 306, cle: 'orbite', poids: '0 N' },
] as const;

const LEGENDES = {
  fr: {
    terre: 'Terre',
    lune: 'Lune',
    orbite: 'orbite',
    masse: 'la masse ne change jamais',
    poids: 'le poids dépend de l’astre',
    chuteLibre: 'en orbite, tout tombe ensemble',
  },
  en: {
    terre: 'Earth',
    lune: 'Moon',
    orbite: 'orbit',
    masse: 'the mass never changes',
    poids: 'the weight depends on the world',
    chuteLibre: 'in orbit, all falls together',
  },
};

/**
 * La ligne des masses est identique dans les trois colonnes, celle des poids
 * change à chaque fois : la comparaison est l'argument, et elle se lit sans
 * qu'il faille suivre le texte.
 */
export function PoidsMasseAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite, auRepos } = miseEnScene(PHASES, activeBeatId);

  /*
    `opacite` n'éclaire qu'une seule phase, or la masse et le poids sont chacun
    le sujet de plusieurs beats. Les masses étaient donc laissées en pleine
    lumière en permanence, y compris à la phase « balance » où le texte dit
    « elle afficherait six fois moins » : l'enfant entendait « six fois moins »
    et voyait 60 kg des deux côtés, mis en avant.

    Le poids est le sujet de `balance`, `sur-la-lune` et `apesanteur` ; la masse,
    de `deux-choses`, `sur-la-lune` et `apesanteur`.
  */
  const enAvant = (...quelles: number[]) =>
    auRepos ? 0.55 : quelles.includes(phase) ? 1 : 0.25;
  const anime = isPlaying && !prefersReducedMotion;
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {LIEUX.map((lieu, i) => (
        <g key={lieu.cle}>
          {/* Le sol de chaque lieu, absent en orbite */}
          {i < 2 && (
            <line x1={lieu.x - 8} y1="134" x2={lieu.x + 62} y2="134" stroke="#475569" strokeWidth="3" />
          )}
          {/* La balance de salle de bain, que le texte nomme et qu'on ne voyait pas. */}
          {i < 2 && (
            <rect
              x={lieu.x + 8} y="126" width="36" height="8" rx="3" fill="#94a3b8"
              style={{ opacity: enAvant(0, 2, 3), transition: 'opacity 600ms ease' }}
            />
          )}
          {/* La même personne partout */}
          <g
            style={{
              transform: i === 2 ? 'rotate(-16deg)' : 'none',
              transformOrigin: `${lieu.x + 26}px 104px`,
            }}
          >
            <circle cx={lieu.x + 26} cy="84" r="10" fill="#fca5a5" />
            <rect x={lieu.x + 18} y="96" width="16" height="28" rx="5" fill="#7dd3fc" />
            {anime && i === 2 && phase === 3 && (
              <animateTransform
                attributeName="transform" type="translate"
                values="0 0;0 -8;0 0" dur="3.4s" repeatCount="indefinite"
              />
            )}
          </g>
          <text x={lieu.x} y="60" fill="#e2e8f0" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
            {legende[lieu.cle]}
          </text>
          {/* La masse : identique partout */}
          <text
            x={lieu.x} y="154" fill="#4ade80" fontSize="16"
            fontFamily="var(--font-atkinson), sans-serif"
            style={{ opacity: enAvant(1, 2, 3), transition: 'opacity 600ms ease' }}
          >
            60 kg
          </text>
          {/* Le poids : propre à chaque astre */}
          <g style={{ opacity: enAvant(0, 2, 3), transition: 'opacity 600ms ease' }}>
            <text x={lieu.x} y="182" fill="#fbbf24" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
              {lieu.poids}
            </text>
          </g>
        </g>
      ))}

      <text
        x="14" y="32" fill="#4ade80" fontSize="16"
        fontFamily="var(--font-atkinson), sans-serif"
        style={{ opacity: enAvant(1, 2, 3), transition: 'opacity 600ms ease' }}
      >
        {legende.masse}
      </text>

      <g style={{ opacity: enAvant(0, 2, 3), transition: 'opacity 600ms ease' }}>
        <text x="14" y="210" fill="#fbbf24" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.poids}
        </text>
      </g>
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="14" y="234" fill="#94a3b8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.chuteLibre}
        </text>
      </g>
    </svg>
  );
}
