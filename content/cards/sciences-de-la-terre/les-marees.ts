import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : la Lune n'« aspire » pas l'eau vers le haut comme un
 * aimant. Elle attire toute la Terre, et c'est la différence d'attraction
 * entre la face proche et la face lointaine qui déforme les océans — d'où deux
 * marées hautes en même temps, aux antipodes.
 */
export const card: ScienceCard = {
  id: 'les-marees',
  domainId: 'sciences-de-la-terre',
  animationId: 'marees',
  thumbnail: '🌊',
  content: {
    fr: {
      title: {
        '3-5': 'La mer qui monte et descend',
        '6-8': "Pourquoi il y a des marées",
        '9-12': 'Marées et attraction de la Lune',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'observer',
              text: 'À la plage, la mer avance sur le sable, puis elle recule. Elle recommence chaque jour.',
            },
            {
              id: 'lune',
              text: 'C’est la Lune qui fait ça, de très loin, en tirant sur l’eau des océans.',
            },
            {
              id: 'deux-cotes',
              text: 'La mer monte du côté de la Lune, mais aussi de l’autre côté de la Terre, en même temps.',
            },
            {
              id: 'rythme',
              text: 'Comme la Terre tourne, ton coin de plage passe deux fois par jour sous la mer haute.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'observer',
              text: 'La marée, c’est la mer qui monte et descend deux fois par jour, toujours aux mêmes rythmes.',
            },
            {
              id: 'lune',
              text: 'La Lune attire la Terre entière. Mais elle tire un peu plus fort sur l’eau qui lui fait face, parce qu’elle en est plus proche.',
            },
            {
              id: 'deux-cotes',
              text: 'Cette eau se soulève donc vers la Lune. De l’autre côté de la Terre, l’eau est la moins attirée : elle se soulève aussi, en sens inverse. Il y a donc deux bosses d’eau, aux deux bouts.',
            },
            {
              id: 'rythme',
              text: 'La Terre tourne sous ces deux bosses. En un jour, chaque côte passe deux fois sous une bosse : d’où deux marées hautes et deux marées basses. Le Soleil aide un peu, mais la Lune commande.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'observer',
              text: 'Les marées suivent un cycle régulier d’environ douze heures vingt-cinq entre deux marées hautes, calé sur la Lune et non sur le Soleil.',
            },
            {
              id: 'lune',
              text: 'La gravité décroît avec la distance. La Lune attire donc plus fortement la face de la Terre qui lui fait face que son centre, et le centre plus que la face opposée. C’est cette différence, appelée force de marée, qui compte — pas l’attraction elle-même.',
            },
            {
              id: 'deux-cotes',
              text: 'Résultat : l’océan s’étire en deux bourrelets alignés avec la Lune, l’un vers elle, l’autre à l’opposé. Contrairement à l’idée courante, la Lune ne « pompe » pas l’eau : elle l’étire de part et d’autre.',
            },
            {
              id: 'rythme',
              text: 'La Terre tournant sur elle-même, une côte traverse ces deux bourrelets par jour : deux pleines mers, deux basses mers. Quand Soleil et Lune s’alignent, leurs effets s’ajoutent — ce sont les grandes marées de vive-eau.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The sea that rises and falls',
        '6-8': 'Why there are tides',
        '9-12': 'Tides and the pull of the Moon',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'observer',
              text: 'At the beach, the sea creeps up the sand, then it goes back down. It starts again every day.',
            },
            {
              id: 'lune',
              text: 'It is the Moon that does this, from very far away, by pulling on the water of the oceans.',
            },
            {
              id: 'deux-cotes',
              text: 'The sea rises on the side facing the Moon, but also on the other side of the Earth, at the same time.',
            },
            {
              id: 'rythme',
              text: 'As the Earth turns, your patch of beach passes under the high sea twice a day.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'observer',
              text: 'A tide is the sea rising and falling twice a day, always to the same rhythm.',
            },
            {
              id: 'lune',
              text: 'The Moon pulls on the whole Earth. But it pulls a little harder on the water facing it, because that water is closer to it.',
            },
            {
              id: 'deux-cotes',
              text: 'So that water bulges up towards the Moon. On the other side of the Earth, the water is pulled the least: it bulges up too, the other way. There are two bulges of water, then, one at each end.',
            },
            {
              id: 'rythme',
              text: 'The Earth turns underneath these two bulges. In one day, every coast passes under a bulge twice: hence two high tides and two low tides. The Sun helps a little, but the Moon is in charge.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'observer',
              text: 'Tides follow a regular cycle of about twelve hours and twenty-five minutes between two high tides, set by the Moon and not by the Sun.',
            },
            {
              id: 'lune',
              text: 'Gravity weakens with distance. The Moon therefore pulls harder on the face of the Earth turned towards it than on its centre, and harder on the centre than on the far side. It is this difference, called the tidal force, that counts — not the pull itself.',
            },
            {
              id: 'deux-cotes',
              text: 'The result: the ocean stretches into two bulges lined up with the Moon, one towards it, the other opposite. Contrary to the common idea, the Moon does not “suck” the water up: it stretches it out on both sides.',
            },
            {
              id: 'rythme',
              text: 'Since the Earth spins on its axis, a coastline crosses both bulges each day: two high waters, two low waters. When the Sun and the Moon line up, their effects add together — these are the great spring tides.',
            },
          ],
        },
      },
    },
  },
};
