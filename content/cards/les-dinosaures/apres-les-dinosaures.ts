import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : soixante-cinq millions d'années séparent la
 * disparition des dinosaures non aviens de celle des mammouths. La mégafaune
 * de l'âge de glace n'a jamais côtoyé les dinosaures.
 */
export const card: ScienceCard = {
  id: 'apres-les-dinosaures',
  domainId: 'les-dinosaures',
  animationId: 'apres-les-dinosaures',
  thumbnail: '🦣',
  content: {
    fr: {
      title: {
        '3-5': 'Après les dinosaures',
        '6-8': 'Après les dinosaures : les mammouths',
        '9-12': "L'essor des mammifères et l'âge de glace",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Après la disparition des dinosaures, les petits mammifères ont grandi peu à peu.',
            },
            {
              id: 'deux',
              text: "Bien plus tard, une période très froide est arrivée : l'âge de glace.",
            },
            {
              id: 'trois',
              text: "C'est là que vivaient le mammouth laineux et le tigre à dents de sabre.",
            },
            {
              id: 'quatre',
              text: 'Eux aussi ont disparu, mais beaucoup, beaucoup plus tard que les dinosaures.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: "Après la disparition des dinosaures non aviens, les mammifères, jusque-là petits et discrets, ont pu se diversifier et grandir, occupant les milieux laissés libres.",
            },
            {
              id: 'deux',
              text: "Des dizaines de millions d'années plus tard, la Terre a connu plusieurs périodes très froides que l'on regroupe sous le nom d'âge de glace.",
            },
            {
              id: 'trois',
              text: "C'est à cette époque que vivaient le mammouth laineux, recouvert d'une épaisse fourrure, et le redoutable tigre à dents de sabre.",
            },
            {
              id: 'quatre',
              text: "Ces animaux ont disparu il y a seulement environ dix mille ans, soit des dizaines de millions d'années après les dinosaures.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: "Après l'extinction du Crétacé-Paléogène, les mammifères, jusqu'alors de petite taille, ont connu une radiation évolutive rapide et ont colonisé les niches écologiques laissées vacantes.",
            },
            {
              id: 'deux',
              text: "Bien plus tard, au cours du Pléistocène, débuté il y a environ deux virgule six millions d'années, une succession de glaciations a façonné les écosystèmes de l'hémisphère nord.",
            },
            {
              id: 'trois',
              text: 'La mégafaune de cette période comprenait notamment le mammouth laineux, adapté au froid par son épaisse fourrure et ses petites oreilles, et le smilodon, tigre à dents de sabre.',
            },
            {
              id: 'quatre',
              text: "Cette mégafaune s'est éteinte il y a environ dix mille ans, à la fin de la dernière glaciation, soit près de soixante-cinq millions d'années après les derniers dinosaures non aviens.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'After the dinosaurs',
        '6-8': 'After the dinosaurs: the mammoths',
        '9-12': 'The rise of the mammals and the Ice Age',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'After the dinosaurs were gone, little furry animals slowly grew bigger.',
            },
            {
              id: 'deux',
              text: 'Much, much later, a very cold time came along: the Ice Age.',
            },
            {
              id: 'trois',
              text: 'That is when the woolly mammoth and the sabre-toothed tiger lived.',
            },
            {
              id: 'quatre',
              text: 'They died out too, but much, much later than the dinosaurs.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Once the non-bird dinosaurs had died out, mammals, small and hidden away until then, were able to spread out and grow bigger, taking over the space left empty.',
            },
            {
              id: 'deux',
              text: 'Tens of millions of years later, the Earth went through several very cold spells that we group together under the name Ice Age.',
            },
            {
              id: 'trois',
              text: 'That was the time of the woolly mammoth, wrapped in thick fur, and of the fearsome sabre-toothed tiger.',
            },
            {
              id: 'quatre',
              text: 'These animals died out only about ten thousand years ago, which is tens of millions of years after the dinosaurs.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'After the Cretaceous-Palaeogene extinction, mammals, small-bodied until then, went through a rapid evolutionary radiation and colonised the ecological niches left vacant.',
            },
            {
              id: 'deux',
              text: 'Much later, during the Pleistocene, which began about two point six million years ago, a succession of glaciations shaped the ecosystems of the northern hemisphere.',
            },
            {
              id: 'trois',
              text: 'The megafauna of that period included the woolly mammoth, adapted to the cold by its thick fur and small ears, and Smilodon, the sabre-toothed cat.',
            },
            {
              id: 'quatre',
              text: 'This megafauna died out about ten thousand years ago, at the end of the last glaciation, nearly sixty-five million years after the last non-avian dinosaurs.',
            },
          ],
        },
      },
    },
  },
};
