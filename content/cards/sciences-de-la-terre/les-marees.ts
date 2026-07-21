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
  },
};
