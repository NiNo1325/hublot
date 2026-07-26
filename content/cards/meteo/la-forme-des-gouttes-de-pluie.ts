import type { ScienceCard } from '@/lib/types';

/**
 * Idée reçue corrigée : « une goutte de pluie a la forme d'une larme, pointue
 * en haut ». En réalité, une petite goutte est ronde (la tension de surface la
 * tient serrée) ; en tombant, plus grosse, l'air la pousse par en dessous et
 * l'aplatit comme un petit coussin (ou un pain). Jamais la forme de larme
 * dessinée partout.
 */
export const card: ScienceCard = {
  id: 'la-forme-des-gouttes-de-pluie',
  domainId: 'meteo',
  animationId: 'goutte-forme',
  thumbnail: '🌧️',
  content: {
    fr: {
      title: {
        '3-5': 'La forme des gouttes',
        '6-8': 'La vraie forme des gouttes de pluie',
        '9-12': 'La vraie forme des gouttes de pluie',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'image-larme',
              text: 'On dessine toujours les gouttes de pluie pointues, comme une larme.',
            },
            {
              id: 'petite-ronde',
              text: 'Mais en vrai, une petite goutte est toute ronde, comme une bille.',
            },
            {
              id: 'air-dessous',
              text: 'Quand elle tombe, l’air la pousse fort par en dessous.',
            },
            {
              id: 'coussin',
              text: 'Alors elle s’aplatit et ressemble à un petit coussin. Jamais à une larme !',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'image-larme',
              text: 'Dans les dessins, une goutte de pluie est toujours pointue en haut, en forme de larme. Pourtant, c’est faux.',
            },
            {
              id: 'petite-ronde',
              text: 'Une petite goutte est en réalité parfaitement ronde : l’eau se tient serrée en boule, comme une minuscule bille.',
            },
            {
              id: 'air-dessous',
              text: 'Quand la goutte tombe, l’air qu’elle traverse appuie sur elle par le dessous, là où elle fonce.',
            },
            {
              id: 'coussin',
              text: 'Cet air aplatit le bas de la goutte : elle prend la forme d’un petit pain ou d’un coussin, plate en dessous et arrondie en haut. Jamais la larme pointue des dessins.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'image-larme',
              text: 'La goutte en forme de larme est un mythe tenace, repris par tous les dessins. Les vraies gouttes de pluie n’ont jamais cette forme pointue.',
            },
            {
              id: 'petite-ronde',
              text: 'Une petite goutte est sphérique : la tension superficielle, qui tire sa surface vers l’intérieur, lui donne la forme la plus compacte possible, la boule.',
            },
            {
              id: 'air-dessous',
              text: 'En chutant, la goutte rencontre la résistance de l’air. Cette pression s’exerce surtout sur sa face avant, celle du bas, qui affronte l’air.',
            },
            {
              id: 'coussin',
              text: 'La goutte s’aplatit alors par-dessous et s’arrondit sur le dessus : elle ressemble à un petit pain à hamburger, pas à une larme. Si elle grossit trop, cet aplatissement s’accentue jusqu’à la faire éclater en gouttes plus petites. La forme d’une goutte raconte donc sa chute — un équilibre entre l’eau qui veut rester en boule et l’air qui l’écrase.',
            },
          ],
        },
      },
    },
  },
};
