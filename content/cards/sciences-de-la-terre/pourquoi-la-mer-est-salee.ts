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
    en: {
      title: {
        '3-5': 'Sea water that stings',
        '6-8': 'Why the sea is salty',
        '9-12': 'Where the salt of the oceans comes from',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'gout',
              text: 'If you swallow a mouthful at the sea, it is very salty. In a river it is not: the water is fresh.',
            },
            {
              id: 'roches',
              text: 'The salt comes from stones. Rain wears the rocks away and carries off tiny grains of salt.',
            },
            {
              id: 'rivieres',
              text: 'Rivers carry them all the way to the sea. There are so few that you cannot even taste them.',
            },
            {
              id: 'equilibre',
              text: 'And when the sea water goes off into the clouds, the salt stays behind. So it builds up.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'gout',
              text: 'Sea water is salty, river water is not. That is surprising, since it is the rivers that fill the sea in the first place.',
            },
            {
              id: 'roches',
              text: 'The salt does not come from the bottom of the ocean: it comes from the rocks of the continents. Rain, which is slightly acidic, attacks them and dissolves their minerals.',
            },
            {
              id: 'rivieres',
              text: 'So every river carries a little salt — far too little to taste. But rivers have been flowing for billions of years.',
            },
            {
              id: 'equilibre',
              text: 'And evaporation takes only the water: the salt stays where it is. That is why it has become concentrated. Even so, the sea is not getting saltier and saltier: as much salt settles on the bottom as arrives.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'gout',
              text: 'Sea water contains about thirty-five grams of dissolved salts per litre. The apparent paradox fits into one sentence: it is freshwater rivers that feed it.',
            },
            {
              id: 'roches',
              text: 'The origin is continental. Dissolved carbon dioxide makes rain slightly acidic; it weathers the rocks and releases ions — mainly sodium and chlorine, but also magnesium, calcium and sulphates. Hydrothermal vents along the mid-ocean ridges add their share.',
            },
            {
              id: 'rivieres',
              text: 'Each river carries only a minute concentration, of the order of a tenth of a gram per litre. The build-up comes from the length of time, then, not from the flow.',
            },
            {
              id: 'equilibre',
              text: 'Evaporation removes only the water, never the salts. Yet salinity has been stable for a very long time, because they are taken out at the same rate as they arrive: evaporites precipitating out, trapping in sediments, exchanges with the oceanic crust. It is a steady state, not an endless build-up.',
            },
          ],
        },
      },
    },
  },
};
