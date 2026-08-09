import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : la majorité des espèces de dinosaures connues étaient
 * herbivores ou omnivores. Les grands prédateurs comme le Tyrannosaure ont
 * marqué l'imaginaire collectif, mais ne représentent pas la norme.
 */
export const card: ScienceCard = {
  id: 'carnivore-ou-herbivore',
  domainId: 'les-dinosaures',
  animationId: 'carnivore-ou-herbivore',
  thumbnail: '🥩',
  content: {
    fr: {
      title: {
        '3-5': 'Que mangeait-il ?',
        '6-8': 'Carnivore ou herbivore ?',
        '9-12': 'Carnivore ou herbivore : que révèlent les dents ?',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Pour savoir ce que mangeait un dinosaure, on regarde ses dents fossilisées.',
            },
            {
              id: 'deux',
              text: "Des dents pointues et tranchantes, c'est pour manger de la viande.",
            },
            {
              id: 'trois',
              text: "Des dents plates et larges, c'est pour manger des plantes.",
            },
            {
              id: 'quatre',
              text: "Comme ça, on devine son repas, même sans l'avoir vu manger !",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Pour savoir ce que mangeait un dinosaure disparu, les scientifiques examinent la forme de ses dents fossilisées.',
            },
            {
              id: 'deux',
              text: "Des dents longues, pointues et souvent recourbées servaient à découper la chair : c'est le signe d'un régime carnivore.",
            },
            {
              id: 'trois',
              text: "Des dents plates, larges, parfois en forme de feuille, servaient à broyer des végétaux fibreux : c'est le signe d'un régime herbivore.",
            },
            {
              id: 'quatre',
              text: "En étudiant simplement la dentition, on peut ainsi reconstituer le menu d'un animal que personne n'a jamais vu manger.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: "L'analyse de la morphologie dentaire, complétée parfois par les microtraces d'usure ou le contenu fossilisé de l'estomac, permet de reconstituer le régime alimentaire d'une espèce disparue.",
            },
            {
              id: 'deux',
              text: "Des dents en lame de couteau, comprimées latéralement et souvent dentelées comme un couteau à steak, indiquent un régime carnivore adapté à découper la chair.",
            },
            {
              id: 'trois',
              text: "Des dents plates à couronne large, ou en forme de feuille avec des crêtes d'usure, indiquent un régime herbivore adapté au broyage de matière végétale fibreuse.",
            },
            {
              id: 'quatre',
              text: "Cette méthode comparative, appliquée à d'autres indices comme les griffes ou la position des yeux, permet de reconstituer un régime alimentaire avec une bonne fiabilité, malgré l'absence d'observation directe.",
            },
          ],
        },
      },
    },
  },
};
