import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : montrer toujours la même face suppose de tourner sur
 * soi-même, pas l'inverse. Un corps sans rotation propre présenterait
 * successivement toutes ses faces au cours d'une orbite. Second contresens
 * traité ici : « face sombre » — l'hémisphère caché reçoit autant de soleil
 * que l'autre.
 */
export const card: ScienceCard = {
  id: 'la-face-cachee-de-la-lune',
  domainId: 'astronomie',
  animationId: 'face-lune',
  thumbnail: '🌚',
  content: {
    fr: {
      title: {
        '3-5': 'L’autre côté de la Lune',
        '6-8': 'Pourquoi on voit toujours la même face',
        '9-12': 'Rotation synchrone et face cachée',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'toujours-pareille',
              text: 'Regarde bien la Lune : elle montre toujours le même dessin. Toujours le même côté.',
            },
            {
              id: 'elle-tourne',
              text: 'Beaucoup croient qu’elle ne tourne pas sur elle-même. Et pourtant si, elle tourne !',
            },
            {
              id: 'verrouillage',
              text: 'Elle tourne juste à la bonne vitesse : un tour sur elle-même pendant qu’elle fait le tour de la Terre.',
            },
            {
              id: 'face-cachee',
              text: 'Alors on ne voit jamais son autre côté. Il existe bien, et il n’est pas tout noir : le Soleil l’éclaire aussi.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'toujours-pareille',
              text: 'La Lune nous présente toujours la même face. On en conclut souvent qu’elle ne tourne pas sur elle-même — et c’est exactement l’inverse.',
            },
            {
              id: 'elle-tourne',
              text: 'Pour garder le même côté tourné vers nous, il faut au contraire tourner : un tour sur soi-même pendant un tour d’orbite. Fais le tour d’une table en gardant les yeux fixés sur son centre : à l’arrivée, tu auras fait un tour complet sur toi-même.',
            },
            {
              id: 'verrouillage',
              text: 'Cette égalité parfaite n’est pas un hasard. La Terre déforme légèrement la Lune, et ce bourrelet a freiné sa rotation pendant des milliards d’années, jusqu’à la caler exactement. On appelle cela le verrouillage par les marées.',
            },
            {
              id: 'face-cachee',
              text: 'L’autre côté n’est pas la « face sombre » : il reçoit autant de soleil que le nôtre — c’est même lui qui est en plein jour quand nous voyons la nouvelle Lune. Il est seulement caché, et personne ne l’avait vu avant 1959, quand une sonde soviétique l’a photographié.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'toujours-pareille',
              text: 'La Lune est en rotation synchrone : sa période de rotation propre, vingt-sept jours et un tiers, égale exactement sa période orbitale.',
            },
            {
              id: 'elle-tourne',
              text: 'L’erreur courante consiste à croire qu’une absence de rotation produirait ce résultat. C’est le contraire : un corps sans rotation propre présenterait successivement toutes ses faces à la Terre au cours d’une orbite.',
            },
            {
              id: 'verrouillage',
              text: 'La synchronisation résulte du couple exercé par la Terre sur le bourrelet de marée de la Lune, qui a dissipé son énergie de rotation jusqu’au verrouillage. Le phénomène est général : la plupart des grands satellites du système solaire sont verrouillés sur leur planète. La libration — oscillations dues à l’excentricité et à l’inclinaison de l’orbite — permet malgré tout d’observer depuis la Terre environ cinquante-neuf pour cent de la surface lunaire.',
            },
            {
              id: 'face-cachee',
              text: 'L’expression « face sombre » est un contresens : l’hémisphère caché reçoit autant d’ensoleillement que l’autre, et se trouve en plein jour lors de la nouvelle Lune. Photographié pour la première fois par Luna 3 en 1959, il s’est révélé très différent : sa croûte est plus épaisse et il est presque dépourvu des grandes mers basaltiques qui marquent la face visible.',
            },
          ],
        },
      },
    },
  },
};
