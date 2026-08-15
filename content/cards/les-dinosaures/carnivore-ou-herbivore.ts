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
    en: {
      title: {
        '3-5': 'What did it eat?',
        '6-8': 'Meat-eater or plant-eater?',
        '9-12': 'Carnivore or herbivore: what the teeth reveal',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'To know what a dinosaur ate, we look at its old fossil teeth.',
            },
            {
              id: 'deux',
              text: 'Pointy, sharp teeth: those are for eating meat.',
            },
            {
              id: 'trois',
              text: 'Flat, wide teeth: those are for eating plants.',
            },
            {
              id: 'quatre',
              text: 'That way we can guess its dinner, without ever seeing it eat!',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'To work out what a long-dead dinosaur ate, scientists look closely at the shape of its fossilised teeth.',
            },
            {
              id: 'deux',
              text: 'Long, pointed teeth, often curved backwards, were made for slicing flesh: that is the sign of a meat-eater, a carnivore.',
            },
            {
              id: 'trois',
              text: 'Flat, wide teeth, sometimes shaped like a leaf, were made for grinding tough plants: that is the sign of a plant-eater, a herbivore.',
            },
            {
              id: 'quatre',
              text: 'Simply by studying the teeth, we can put together the menu of an animal that nobody has ever seen eating.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Analysing dental morphology, sometimes alongside microscopic wear marks or fossilised stomach contents, makes it possible to reconstruct the diet of an extinct species.',
            },
            {
              id: 'deux',
              text: 'Blade-like teeth, flattened from side to side and often serrated like a steak knife, point to a carnivorous diet adapted to slicing flesh.',
            },
            {
              id: 'trois',
              text: 'Flat teeth with a broad crown, or leaf-shaped teeth bearing wear ridges, point to a herbivorous diet adapted to grinding fibrous plant matter.',
            },
            {
              id: 'quatre',
              text: 'This comparative method, combined with other clues such as the claws or the position of the eyes, reconstructs a diet with good reliability, despite the absence of any direct observation.',
            },
          ],
        },
      },
    },
  },
};
