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
    en: {
      title: {
        '3-5': 'The other side of the Moon',
        '6-8': 'Why we always see the same face',
        '9-12': 'Synchronous rotation and the far side',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'toujours-pareille',
              text: 'Look carefully at the Moon: it always shows the same pattern. Always the same side.',
            },
            {
              id: 'elle-tourne',
              text: 'Lots of people think it does not spin round. But it does, it really spins!',
            },
            {
              id: 'verrouillage',
              text: 'It spins at just the right speed: one turn on itself while it goes once round the Earth.',
            },
            {
              id: 'face-cachee',
              text: 'So we never see its other side. It really is there, and it is not all dark: the Sun lights it up too.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'toujours-pareille',
              text: 'The Moon always shows us the same face. People often conclude that it does not spin on itself — and it is exactly the opposite.',
            },
            {
              id: 'elle-tourne',
              text: 'To keep the same side turned towards us, it actually has to spin: one turn on itself for one turn of orbit. Walk round a table keeping your eyes fixed on its centre: by the time you get back, you will have made one full turn on yourself.',
            },
            {
              id: 'verrouillage',
              text: 'That perfect match is no accident. The Earth slightly deforms the Moon, and this bulge slowed its rotation over billions of years, until it settled exactly. This is called tidal locking.',
            },
            {
              id: 'face-cachee',
              text: 'The other side is not the “dark side”: it gets as much sunshine as ours — it is even the side in broad daylight when we see the new Moon. It is only hidden, and nobody had seen it before 1959, when a Soviet probe photographed it.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'toujours-pareille',
              text: 'The Moon is in synchronous rotation: its own rotation period, twenty-seven and a third days, is exactly equal to its orbital period.',
            },
            {
              id: 'elle-tourne',
              text: 'The common error is to believe that an absence of rotation would produce this result. The opposite is true: a body with no rotation of its own would present every one of its faces to the Earth in turn over the course of an orbit.',
            },
            {
              id: 'verrouillage',
              text: 'The synchronisation results from the torque the Earth exerts on the Moon’s tidal bulge, which dissipated its rotational energy until it locked. The phenomenon is general: most of the large satellites in the solar system are locked to their planet. Libration — a wobble caused by the eccentricity and the inclination of the orbit — nevertheless allows about fifty-nine per cent of the lunar surface to be observed from the Earth.',
            },
            {
              id: 'face-cachee',
              text: 'The expression “dark side” is a misnomer: the hidden hemisphere receives as much sunlight as the other, and is in broad daylight at new Moon. Photographed for the first time by Luna 3 in 1959, it turned out to be very different: its crust is thicker and it is almost devoid of the great basaltic seas that mark the visible face.',
            },
          ],
        },
      },
    },
  },
};
