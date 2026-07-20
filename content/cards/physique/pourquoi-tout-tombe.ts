import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : « les objets lourds tombent plus vite » est l'intuition
 * spontanée, et elle est fausse. La carte la corrige avec un fait vérifiable —
 * l'expérience du marteau et de la plume réalisée sur la Lune en 1971 — plutôt
 * qu'avec une affirmation d'autorité.
 */
export const card: ScienceCard = {
  id: 'pourquoi-tout-tombe',
  domainId: 'physique',
  animationId: 'gravite',
  thumbnail: '🍎',
  content: {
    fr: {
      title: {
        '3-5': 'Tout tombe par terre',
        '6-8': 'Pourquoi les choses tombent',
        '9-12': 'La gravité',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'chute',
              text: 'Quand tu lâches un objet, il tombe toujours vers le bas. Jamais vers le haut, jamais sur le côté.',
            },
            {
              id: 'attraction',
              text: "C'est la Terre qui tire tout vers elle. On ne voit pas ce qui tire, mais ça tire tout le temps.",
            },
            {
              id: 'plume',
              text: "Une plume tombe plus lentement qu'une bille. Ce n'est pas parce qu'elle est légère : c'est l'air qui la freine, comme un tout petit parachute.",
            },
            {
              id: 'lune',
              text: "La Terre tire même sur la Lune, très très loin dans le ciel. C'est pour ça que la Lune reste avec nous.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'chute',
              text: "Tout ce que tu lâches tombe vers le sol. Cette force qui attire les objets vers la Terre s'appelle la gravité.",
            },
            {
              id: 'attraction',
              text: "La gravité vient de la Terre elle-même : parce qu'elle est énorme, elle attire tout ce qui se trouve autour d'elle. Et toi aussi tu attires la Terre — mais tu es si petit que ça ne se voit pas.",
            },
            {
              id: 'plume',
              text: "On croit souvent que les objets lourds tombent plus vite. C'est faux. Si une plume tombe lentement, c'est parce que l'air la freine. Sans air, une plume et un marteau tombent exactement à la même vitesse.",
            },
            {
              id: 'lune',
              text: "Des astronautes l'ont vérifié sur la Lune, où il n'y a pas d'air : ils ont lâché un marteau et une plume, et les deux ont touché le sol en même temps.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'chute',
              text: "La gravité est l'attraction mutuelle qui existe entre deux objets ayant une masse. Elle est d'autant plus forte que les masses sont grandes et que les objets sont proches.",
            },
            {
              id: 'attraction',
              text: "L'attraction est réciproque : la Terre t'attire, et tu attires la Terre avec exactement la même force. Mais comme la Terre est des milliers de milliards de milliards de fois plus massive que toi, c'est toi qui bouges, et pas elle.",
            },
            {
              id: 'plume',
              text: "Tous les objets tombent avec la même accélération, quelle que soit leur masse. Une plume semble contredire cela uniquement à cause de la résistance de l'air. Dans le vide, un marteau et une plume tombent rigoureusement de la même façon.",
            },
            {
              id: 'lune',
              text: "En 1971, l'astronaute David Scott a réalisé cette expérience sur la Lune, dépourvue d'atmosphère : marteau et plume ont touché le sol simultanément. La Lune elle-même ne s'échappe pas parce que la gravité terrestre la retient — elle tombe en permanence vers la Terre, mais sa vitesse la fait manquer, ce qui la met en orbite.",
            },
          ],
        },
      },
    },
  },
};
