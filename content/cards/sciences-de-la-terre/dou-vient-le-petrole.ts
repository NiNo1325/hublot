import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : le pétrole ne vient pas des dinosaures. Son origine est
 * marine et microscopique — du plancton, pas de grands animaux terrestres. Le
 * charbon, lui, vient bien de forêts : les deux stockent de la lumière solaire
 * fixée il y a des centaines de millions d'années.
 */
export const card: ScienceCard = {
  id: 'dou-vient-le-petrole',
  domainId: 'sciences-de-la-terre',
  animationId: 'petrole',
  thumbnail: '🛢️',
  content: {
    fr: {
      title: {
        '3-5': 'Le liquide noir sous la terre',
        '6-8': 'D’où vient le pétrole',
        '9-12': 'Pétrole et charbon : deux origines',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'dinosaures',
              text: 'On raconte souvent que le pétrole vient des dinosaures. Ce n’est pas vrai du tout.',
            },
            {
              id: 'plancton',
              text: 'Il vient de tout petits êtres qui flottaient dans la mer, il y a très très longtemps.',
            },
            {
              id: 'enfoui',
              text: 'En mourant, ils sont tombés au fond. La boue les a recouverts, de plus en plus profond.',
            },
            {
              id: 'epuisable',
              text: 'Il a fallu des millions d’années pour le fabriquer. Et nous, on le brûle en une seconde.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'dinosaures',
              text: 'L’image du dinosaure transformé en carburant est très répandue, et fausse. Les dinosaures n’y sont pour presque rien : le pétrole vient de la mer, pas de la terre ferme.',
            },
            {
              id: 'plancton',
              text: 'Il vient du plancton — des algues et des organismes microscopiques qui flottaient dans les océans par milliards.',
            },
            {
              id: 'enfoui',
              text: 'En mourant, ils se sont déposés au fond, dans des eaux si pauvres en oxygène qu’ils n’ont pas pourri. Recouverts de sédiments, enfouis à plusieurs kilomètres, chauffés et comprimés pendant des millions d’années, ils sont devenus du pétrole.',
            },
            {
              id: 'epuisable',
              text: 'Le charbon, lui, vient bien de forêts. Dans les deux cas, ce qui est stocké est de la lumière du Soleil captée par des êtres vivants il y a des centaines de millions d’années. Nous la relâchons en quelques secondes en brûlant.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'dinosaures',
              text: 'L’association entre pétrole et dinosaures doit beaucoup à la publicité d’une compagnie pétrolière des années trente. Elle n’a aucun fondement : les hydrocarbures ne proviennent pas de grands animaux terrestres.',
            },
            {
              id: 'plancton',
              text: 'La matière organique à l’origine du pétrole est essentiellement du phytoplancton et du zooplancton marins, accumulés dans des bassins anoxiques où ils échappaient à la décomposition bactérienne.',
            },
            {
              id: 'enfoui',
              text: 'Enfouie, cette matière se transforme d’abord en kérogène, puis en hydrocarbures sous l’effet de la température. Le processus n’opère que dans une plage étroite, la fenêtre à huile, entre environ soixante et cent vingt degrés : trop peu profond, rien ne se forme ; trop profond, on n’obtient que du gaz.',
            },
            {
              id: 'epuisable',
              text: 'Le charbon a une autre origine : les forêts du Carbonifère, enfouies avant que les champignons ne sachent dégrader la lignine. Les deux stockent de l’énergie solaire fixée par photosynthèse il y a des centaines de millions d’années. C’est ce décalage qui définit une ressource non renouvelable : des millions d’années pour se former, quelques secondes pour se consumer.',
            },
          ],
        },
      },
    },
  },
};
