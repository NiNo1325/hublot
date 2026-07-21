import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : le sel ne vient pas du fond de la mer, mais des roches
 * des continents — apporté, paradoxalement, par des rivières d'eau douce. Et
 * la mer ne se sale pas indéfiniment : autant de sel se redépose qu'il en
 * arrive.
 */
export const card: ScienceCard = {
  id: 'pourquoi-la-mer-est-salee',
  domainId: 'sciences-de-la-terre',
  animationId: 'sel-mer',
  thumbnail: '🧂',
  content: {
    fr: {
      title: {
        '3-5': 'L’eau de mer qui pique',
        '6-8': 'Pourquoi la mer est salée',
        '9-12': 'D’où vient le sel des océans',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'gout',
              text: 'Si tu bois la tasse à la mer, c’est très salé. Dans une rivière, non : l’eau est douce.',
            },
            {
              id: 'roches',
              text: 'Le sel vient des cailloux. La pluie use les rochers et emporte de tout petits grains de sel.',
            },
            {
              id: 'rivieres',
              text: 'Les rivières les portent jusqu’à la mer. Il y en a si peu qu’on ne les goûte même pas.',
            },
            {
              id: 'equilibre',
              text: 'Et quand l’eau de la mer part dans les nuages, le sel, lui, reste. Alors il s’accumule.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'gout',
              text: 'L’eau de mer est salée, celle des rivières ne l’est pas. C’est étonnant, puisque ce sont justement les rivières qui remplissent la mer.',
            },
            {
              id: 'roches',
              text: 'Le sel ne vient pas du fond de l’océan : il vient des roches des continents. La pluie, légèrement acide, les attaque et dissout leurs minéraux.',
            },
            {
              id: 'rivieres',
              text: 'Chaque rivière transporte donc un peu de sel — bien trop peu pour se sentir au goût. Mais elles coulent depuis des milliards d’années.',
            },
            {
              id: 'equilibre',
              text: 'Et l’évaporation ne prend que l’eau : le sel reste sur place. Voilà pourquoi il s’est concentré. La mer ne devient pourtant pas de plus en plus salée : il s’en redépose au fond autant qu’il en arrive.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'gout',
              text: 'L’eau de mer contient environ trente-cinq grammes de sels dissous par litre. Le paradoxe apparent tient en une phrase : ce sont des fleuves d’eau douce qui l’alimentent.',
            },
            {
              id: 'roches',
              text: 'L’origine est continentale. Le dioxyde de carbone dissous rend la pluie légèrement acide ; elle altère les roches et libère des ions — surtout sodium et chlore, mais aussi magnésium, calcium et sulfates. Les sources hydrothermales des dorsales océaniques en apportent leur part.',
            },
            {
              id: 'rivieres',
              text: 'Chaque fleuve n’en transporte qu’une concentration infime, de l’ordre du dixième de gramme par litre. L’accumulation vient donc de la durée, pas du débit.',
            },
            {
              id: 'equilibre',
              text: 'L’évaporation ne retire que l’eau, jamais les sels. Mais la salinité est stable depuis très longtemps, car ils sont soustraits au même rythme qu’ils arrivent : précipitation d’évaporites, piégeage dans les sédiments, échanges avec la croûte océanique. C’est un état stationnaire, non une accumulation sans fin.',
            },
          ],
        },
      },
    },
  },
};
