import { useId } from 'react';

/**
 * Lumi, la mascotte de Hublot : une petite étincelle de curiosité qui grandit
 * avec l'enfant. Un seul personnage, six paliers — le corps ne change pas, seuls
 * la coiffe, les accessoires et le halo évoluent d'un rang à l'autre. C'est ce
 * qui la rend reconnaissable tout en marquant la progression.
 *
 * Le composant est purement présentatif. Les identifiants de dégradés sont
 * isolés par `useId` : deux Lumi sur la même page ne peuvent donc pas se voler
 * leurs `url(#…)`.
 *
 * `rang` est l'index de `RANGS` (0 = Apprenti … 5 = Génie), borné ici pour ne
 * jamais rendre un écran vide si la valeur dérive.
 */
interface LumiProps {
  rang: number;
  /** Côté du carré de rendu, en pixels. */
  taille?: number;
  className?: string;
}

export function Lumi({ rang, taille = 96, className }: LumiProps) {
  const uid = useId();
  const corps = `${uid}-corps`;
  const haloFaible = `${uid}-halo-faible`;
  const haloMoyen = `${uid}-halo-moyen`;
  const haloFort = `${uid}-halo-fort`;
  const n = Math.max(0, Math.min(5, Math.floor(rang)));

  return (
    <svg
      viewBox="0 0 120 130"
      width={taille}
      height={(taille * 130) / 120}
      className={className}
      role="img"
      aria-label={`Lumi, la mascotte, au rang ${LEGENDES[n]}.`}
    >
      <defs>
        <linearGradient id={corps} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fffdf8" />
          <stop offset="1" stopColor="#efe4cc" />
        </linearGradient>
        <radialGradient id={haloFaible}>
          <stop offset="0" stopColor="#ffb627" stopOpacity="0.4" />
          <stop offset="1" stopColor="#ffb627" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={haloMoyen}>
          <stop offset="0" stopColor="#ffb627" stopOpacity="0.65" />
          <stop offset="1" stopColor="#ffb627" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={haloFort}>
          <stop offset="0" stopColor="#ffcf5e" stopOpacity="0.95" />
          <stop offset="0.5" stopColor="#ffb627" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffb627" stopOpacity="0" />
        </radialGradient>
      </defs>

      {n === 0 && <Apprenti corps={corps} halo={haloFaible} />}
      {n === 1 && <Explorateur corps={corps} halo={haloFaible} />}
      {n === 2 && <Aventurier corps={corps} halo={haloMoyen} />}
      {n === 3 && <Chercheur corps={corps} halo={haloMoyen} />}
      {n === 4 && <Savant corps={corps} halo={haloMoyen} />}
      {n === 5 && <Genie corps={corps} halo={haloFort} />}
    </svg>
  );
}

const LEGENDES = [
  'Apprenti',
  'Explorateur',
  'Aventurier',
  'Chercheur',
  'Savant',
  'Génie',
];

interface Piece {
  corps: string;
  halo: string;
}

/* Corps commun : bras derrière, corps, joues. Les yeux et la bouche varient. */
function CorpsBase({ corps }: { corps: string }) {
  return (
    <>
      <ellipse cx="25" cy="88" rx="7.5" ry="10" fill={`url(#${corps})`} />
      <ellipse cx="95" cy="88" rx="7.5" ry="10" fill={`url(#${corps})`} />
      <path
        d="M60 24 C 69 40 92 46 92 74 C 92 96 78 108 60 108 C 42 108 28 96 28 74 C 28 46 51 40 60 24 Z"
        fill={`url(#${corps})`}
      />
      <ellipse cx="40" cy="82" rx="6.6" ry="4" fill="#ffb627" opacity="0.4" />
      <ellipse cx="80" cy="82" rx="6.6" ry="4" fill="#ffb627" opacity="0.4" />
    </>
  );
}

/* Yeux ronds et rieurs, avec reflet. */
function YeuxRonds({ cy = 71 }: { cy?: number }) {
  return (
    <>
      <ellipse cx="50" cy={cy} rx="6" ry="8" fill="#0f1b33" />
      <ellipse cx="70" cy={cy} rx="6" ry="8" fill="#0f1b33" />
      <circle cx="52.4" cy={cy - 3.4} r="2.1" fill="#fff" />
      <circle cx="72.4" cy={cy - 3.4} r="2.1" fill="#fff" />
    </>
  );
}

/* Yeux sereins (arcs), pour les rangs les plus hauts. */
function YeuxSereins() {
  return (
    <>
      <path d="M44 71 Q 50 65 56 71" stroke="#0f1b33" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <path d="M64 71 Q 70 65 76 71" stroke="#0f1b33" strokeWidth="2.6" fill="none" strokeLinecap="round" />
    </>
  );
}

function Sourire({ d = 'M53 84 Q 60 90 67 84', large = false }: { d?: string; large?: boolean }) {
  return (
    <path d={d} stroke="#0f1b33" strokeWidth={large ? 2.6 : 2.4} fill="none" strokeLinecap="round" />
  );
}

function Apprenti({ corps, halo }: Piece) {
  return (
    <>
      <circle cx="60" cy="70" r="46" fill={`url(#${halo})`} />
      <CorpsBase corps={corps} />
      <YeuxRonds />
      <Sourire />
      <path
        d="M60 12 l1.4 3.6 3.6 1.4 -3.6 1.4 -1.4 3.6 -1.4 -3.6 -3.6 -1.4 3.6 -1.4 z"
        fill="#ffb627"
      />
    </>
  );
}

function Explorateur({ corps, halo }: Piece) {
  return (
    <>
      <circle cx="60" cy="70" r="46" fill={`url(#${halo})`} />
      <CorpsBase corps={corps} />
      {/* foulard */}
      <path d="M52 100 L60 108 L68 100 Q 60 104 52 100 Z" fill="#ffb627" />
      <YeuxRonds cy={72} />
      <Sourire d="M53 85 Q 60 91 67 85" />
      {/* casquette d'explorateur */}
      <path d="M35 40 Q 60 16 85 40 Z" fill="#2c3f66" />
      <path d="M34 39 Q 60 30 86 39 L 90 45 Q 60 38 30 45 Z" fill="#22314f" />
      <rect x="55" y="20" width="10" height="7" rx="3.5" fill="#22314f" />
      <path d="M36 40 Q 60 32 84 40" stroke="#ffb627" strokeWidth="2.4" fill="none" />
    </>
  );
}

function Aventurier({ corps, halo }: Piece) {
  return (
    <>
      <circle cx="60" cy="70" r="48" fill={`url(#${halo})`} />
      {/* flammes des propulseurs */}
      <path d="M49 106 Q 46 122 53 118 Q 51 112 49 106 Z" fill="#ffb627" />
      <path d="M49 106 Q 47 116 51 114 Q 50 110 49 106 Z" fill="#ff8a3d" />
      <path d="M71 106 Q 74 122 67 118 Q 69 112 71 106 Z" fill="#ffb627" />
      <path d="M71 106 Q 73 116 69 114 Q 70 110 71 106 Z" fill="#ff8a3d" />
      <ellipse cx="24" cy="82" rx="7.5" ry="10" fill={`url(#${corps})`} transform="rotate(-18 24 82)" />
      <ellipse cx="96" cy="82" rx="7.5" ry="10" fill={`url(#${corps})`} transform="rotate(18 96 82)" />
      <path
        d="M60 24 C 69 40 92 46 92 74 C 92 96 78 108 60 108 C 42 108 28 96 28 74 C 28 46 51 40 60 24 Z"
        fill={`url(#${corps})`}
      />
      <ellipse cx="40" cy="82" rx="6.6" ry="4" fill="#ffb627" opacity="0.4" />
      <ellipse cx="80" cy="82" rx="6.6" ry="4" fill="#ffb627" opacity="0.4" />
      <YeuxRonds />
      <Sourire d="M52 84 Q 60 91 68 84" />
      {/* casque bulle */}
      <circle cx="60" cy="66" r="35" fill="#bcd3ff" opacity="0.1" />
      <circle cx="60" cy="66" r="35" fill="none" stroke="#bcd3ff" strokeWidth="2.6" opacity="0.65" />
      <path d="M40 50 Q 48 40 60 39" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.7" />
    </>
  );
}

function Chercheur({ corps, halo }: Piece) {
  return (
    <>
      <circle cx="60" cy="70" r="48" fill={`url(#${halo})`} />
      <CorpsBase corps={corps} />
      {/* col de blouse */}
      <path d="M50 100 L60 109 L58 98 Z" fill="#ffffff" />
      <path d="M70 100 L60 109 L62 98 Z" fill="#ffffff" />
      <YeuxRonds />
      <Sourire d="M53 85 Q 60 90 67 85" />
      {/* lunettes de labo */}
      <circle cx="50" cy="71" r="10" fill="none" stroke="#2c3f66" strokeWidth="2.6" />
      <circle cx="70" cy="71" r="10" fill="none" stroke="#2c3f66" strokeWidth="2.6" />
      <line x1="59" y1="70.5" x2="61" y2="70.5" stroke="#2c3f66" strokeWidth="2.6" strokeLinecap="round" />
      <line x1="40" y1="69" x2="34" y2="66" stroke="#2c3f66" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="80" y1="69" x2="86" y2="66" stroke="#2c3f66" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M45 66 q 3 -3 8 -1" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.55" />
    </>
  );
}

function Savant({ corps, halo }: Piece) {
  return (
    <>
      <circle cx="60" cy="70" r="49" fill={`url(#${halo})`} />
      <ellipse cx="25" cy="88" rx="7.5" ry="10" fill={`url(#${corps})`} />
      <ellipse cx="95" cy="88" rx="7.5" ry="10" fill={`url(#${corps})`} />
      <path
        d="M60 26 C 69 41 92 47 92 74 C 92 96 78 108 60 108 C 42 108 28 96 28 74 C 28 47 51 41 60 26 Z"
        fill={`url(#${corps})`}
      />
      <ellipse cx="40" cy="82" rx="6.6" ry="4" fill="#ffb627" opacity="0.4" />
      <ellipse cx="80" cy="82" rx="6.6" ry="4" fill="#ffb627" opacity="0.4" />
      <YeuxSereins />
      <Sourire d="M53 84 Q 60 90 67 84" />
      {/* toque de diplômée */}
      <path d="M51 32 h18 v7 q -9 5 -18 0 z" fill="#22314f" />
      <path d="M36 33 L60 24 L84 33 L60 42 Z" fill="#1b2a4a" stroke="#2c3f66" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="79" y1="31.5" x2="83" y2="45" stroke="#ffb627" strokeWidth="1.6" />
      <circle cx="83" cy="46.5" r="2.6" fill="#ffb627" />
    </>
  );
}

function Genie({ corps, halo }: Piece) {
  return (
    <>
      <circle cx="60" cy="70" r="52" fill={`url(#${halo})`} />
      <ellipse cx="25" cy="88" rx="7.5" ry="10" fill={`url(#${corps})`} />
      <ellipse cx="95" cy="88" rx="7.5" ry="10" fill={`url(#${corps})`} />
      <path
        d="M60 26 C 69 41 92 47 92 74 C 92 96 78 108 60 108 C 42 108 28 96 28 74 C 28 47 51 41 60 26 Z"
        fill={`url(#${corps})`}
      />
      <ellipse cx="40" cy="82" rx="6.6" ry="4" fill="#ffb627" opacity="0.45" />
      <ellipse cx="80" cy="82" rx="6.6" ry="4" fill="#ffb627" opacity="0.45" />
      <path d="M44 70 Q 50 64 56 70" stroke="#0f1b33" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <path d="M64 70 Q 70 64 76 70" stroke="#0f1b33" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <Sourire d="M51 83 Q 60 92 69 83" large />
      {/* auréole */}
      <ellipse cx="60" cy="18" rx="19" ry="5.4" fill="none" stroke="#ffcf5e" strokeWidth="3.4" />
      <ellipse cx="60" cy="18" rx="19" ry="5.4" fill="none" stroke="#fff" strokeWidth="1" opacity="0.6" />
      {/* électrons en orbite */}
      <g transform="rotate(-22 60 66)">
        <ellipse cx="60" cy="66" rx="46" ry="17" fill="none" stroke="#bcd3ff" strokeWidth="1" opacity="0.3" />
        <circle cx="106" cy="66" r="3.4" fill="#8fd0ff" />
        <circle cx="14" cy="66" r="3.4" fill="#ffb627" />
      </g>
      {/* étincelles */}
      <path d="M96 34 l1.2 3 3 1.2 -3 1.2 -1.2 3 -1.2 -3 -3 -1.2 3 -1.2 z" fill="#fff" />
      <path d="M22 40 l1 2.6 2.6 1 -2.6 1 -1 2.6 -1 -2.6 -2.6 -1 2.6 -1 z" fill="#ffb627" />
    </>
  );
}
