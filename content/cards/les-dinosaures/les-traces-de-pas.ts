import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : un fossile n'est pas forcément un os. Une piste de pas
 * fossilisée (ichnofossile) renseigne sur le comportement d'un animal vivant
 * — vitesse, démarche, vie en groupe — là où les os seuls restent muets.
 */
export const card: ScienceCard = {
  id: 'les-traces-de-pas',
  domainId: 'les-dinosaures',
  animationId: 'les-traces-de-pas',
  thumbnail: '👣',
  content: {
    fr: {
      title: {
        '3-5': 'Des pas dans la pierre',
        '6-8': 'Les traces de pas fossilisées',
        '9-12': 'Ce que révèlent les traces de pas fossilisées',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Un dinosaure marche dans la boue toute molle et laisse ses empreintes.',
            },
            {
              id: 'deux',
              text: 'Avec le temps, la boue devient toute dure, comme de la pierre.',
            },
            {
              id: 'trois',
              text: 'Les scientifiques mesurent la distance entre chaque pas.',
            },
            {
              id: 'quatre',
              text: "Ça leur permet de deviner s'il marchait vite, et s'il y en avait plusieurs ensemble.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: "Un dinosaure marche dans la boue molle au bord d'une rivière ou d'un lac, et ses pattes y laissent une empreinte nette.",
            },
            {
              id: 'deux',
              text: "Si les empreintes sèchent puis sont recouvertes de sédiments avant de disparaître, elles peuvent se transformer en pierre au fil des millions d'années.",
            },
            {
              id: 'trois',
              text: "Les scientifiques mesurent la longueur des pas et l'écart entre les empreintes de chaque piste retrouvée.",
            },
            {
              id: 'quatre',
              text: "Avec ces mesures, ils calculent la vitesse de l'animal, et en comparant plusieurs pistes côte à côte, ils peuvent même savoir si les dinosaures se déplaçaient en groupe.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: "Un dinosaure traversant un substrat meuble, boue de rivière ou sédiment lacustre, y imprime la forme de ses pieds avec un relief net.",
            },
            {
              id: 'deux',
              text: "Si la piste sèche rapidement puis est recouverte par un nouvel apport sédimentaire sans être érodée, elle peut se conserver et se minéraliser en ichnofossile.",
            },
            {
              id: 'trois',
              text: "La longueur de la foulée, la largeur de la piste et la taille de l'empreinte permettent d'estimer la hauteur de hanche de l'animal et donc sa taille approximative.",
            },
            {
              id: 'quatre',
              text: "En croisant vitesse estimée, orientation des pistes et présence de plusieurs tailles d'individus sur un même site, on peut reconstituer un comportement grégaire, une chasse en groupe ou une simple migration.",
            },
          ],
        },
      },
    },
  },
};
