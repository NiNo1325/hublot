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
    en: {
      title: {
        '3-5': 'Footsteps in the stone',
        '6-8': 'Fossilised footprints',
        '9-12': 'What fossilised footprints reveal',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'A dinosaur walks through soft, squishy mud and leaves its footprints.',
            },
            {
              id: 'deux',
              text: 'Over time, the mud goes very hard, just like stone.',
            },
            {
              id: 'trois',
              text: 'Scientists measure the distance between each footprint.',
            },
            {
              id: 'quatre',
              text: 'That tells them if it walked fast, and if several of them walked together.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'A dinosaur walks through the soft mud at the edge of a river or a lake, and its feet leave a clean print behind.',
            },
            {
              id: 'deux',
              text: 'If the prints dry out and are then covered by sediment before they wear away, they can turn to stone over millions of years.',
            },
            {
              id: 'trois',
              text: 'Scientists measure the length of the steps and the gap between the prints in every trackway they find.',
            },
            {
              id: 'quatre',
              text: 'With those measurements they work out how fast the animal was going, and by comparing several trackways side by side, they can even tell whether the dinosaurs travelled in a group.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'A dinosaur crossing soft ground, river mud or lake sediment, presses the shape of its feet into it in sharp relief.',
            },
            {
              id: 'deux',
              text: 'If the trackway dries quickly and is then buried by fresh sediment without being eroded, it can survive and mineralise into a trace fossil, or ichnofossil.',
            },
            {
              id: 'trois',
              text: 'Stride length, trackway width and print size make it possible to estimate the hip height of the animal, and therefore its approximate size.',
            },
            {
              id: 'quatre',
              text: 'By combining estimated speed, the orientation of the trackways and the presence of individuals of several sizes at one site, we can reconstruct herd behaviour, a group hunt or a simple migration.',
            },
          ],
        },
      },
    },
  },
};
