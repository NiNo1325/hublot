import type { Affirmation } from '@/lib/types';

/** Affirmations du domaine « Les dinosaures ». */
export const affirmations: Affirmation[] = [
  {
    cardId: 'le-puzzle-des-os',
    vrai: false,
    texte: {
      fr: 'Les squelettes des musées ont été retrouvés entiers, tels qu’on les voit.',
      en: 'The skeletons in museums were found complete, exactly as you see them.',
    },
    reponse: {
      fr: 'Faux ! On retrouve presque toujours des morceaux, et les savants complètent en comparant. Un musée montre un puzzle reconstitué.',
      en: 'False! Almost always it is fragments, and scientists fill the gaps by comparing. A museum shows you a rebuilt puzzle.',
    },
  },
  {
    cardId: 'le-jour-de-lasteroide',
    vrai: false,
    texte: {
      fr: 'L’astéroïde a tué tous les dinosaures le jour même où il est tombé.',
      en: 'The asteroid killed all the dinosaurs on the very day it fell.',
    },
    reponse: {
      fr: 'Faux ! Le pire est venu après : la poussière a caché le Soleil, les plantes sont mortes, puis ceux qui les mangeaient.',
      en: 'False! The worst came afterwards: dust hid the Sun, the plants died, then the animals that ate them.',
    },
  },
  {
    cardId: 'les-oiseaux-sont-des-dinosaures',
    vrai: true,
    texte: {
      fr: 'La mésange sur ta fenêtre est un dinosaure.',
      en: 'The little bird at your window is a dinosaur.',
    },
    reponse: {
      fr: 'Vrai ! Les oiseaux descendent d’un groupe de dinosaures qui a survécu. Ils n’ont jamais tous disparu.',
      en: 'True! Birds come from a group of dinosaurs that survived. They never all died out.',
    },
  },
  {
    cardId: 'il-y-a-tres-tres-longtemps',
    vrai: false,
    texte: {
      fr: 'Tous les dinosaures ont vécu à la même époque, ensemble.',
      en: 'All the dinosaurs lived at the same time, together.',
    },
    reponse: {
      fr: 'Faux ! Quatre-vingts millions d’années séparent le stégosaure du tyrannosaure. Le tyrannosaure est plus proche de toi que du stégosaure.',
      en: 'False! Eighty million years separate Stegosaurus from Tyrannosaurus. Tyrannosaurus is closer to you than to Stegosaurus.',
    },
  },
  {
    cardId: 'pourquoi-si-grands',
    vrai: true,
    texte: {
      fr: 'Les plus grands dinosaures avaient des os creux, remplis d’air.',
      en: 'The biggest dinosaurs had hollow bones, full of air.',
    },
    reponse: {
      fr: 'Vrai ! C’est ce qui leur permettait d’être gigantesques sans s’écrouler. Les oiseaux ont gardé ce truc-là.',
      en: 'True! That is what let them be gigantic without collapsing. Birds kept that trick.',
    },
  },
  {
    cardId: 'carnivore-ou-herbivore',
    vrai: true,
    texte: {
      fr: 'On devine ce que mangeait un dinosaure rien qu’en regardant ses dents.',
      en: 'You can tell what a dinosaur ate just by looking at its teeth.',
    },
    reponse: {
      fr: 'Vrai ! Des pointes tranchantes pour la viande, des dents plates pour râper les plantes. La bouche raconte le repas.',
      en: 'True! Sharp points for meat, flat teeth for grinding plants. The mouth tells you the meal.',
    },
  },
  {
    cardId: 'les-traces-de-pas',
    vrai: true,
    texte: {
      fr: 'Des traces de pas fossilisées disent à quelle vitesse courait un dinosaure.',
      en: 'Fossil footprints tell us how fast a dinosaur was running.',
    },
    reponse: {
      fr: 'Vrai ! On mesure l’écart entre les pas. Plus les pas sont écartés, plus la bête allait vite.',
      en: 'True! You measure the gap between the steps. The wider the gap, the faster the animal was going.',
    },
  },
  {
    cardId: 'des-dinosaures-a-plumes',
    vrai: true,
    texte: {
      fr: 'On connaît la couleur de certains dinosaures.',
      en: 'We know the colour of some dinosaurs.',
    },
    reponse: {
      fr: 'Vrai ! Des grains de couleur se sont conservés dans les plumes fossiles. Certains étaient roux, d’autres noirs et blancs.',
      en: 'True! Grains of colour survived inside fossil feathers. Some were ginger, others black and white.',
    },
  },
  {
    cardId: 'pas-tous-des-dinosaures',
    vrai: false,
    texte: {
      fr: 'Le ptérodactyle était un dinosaure volant.',
      en: 'The pterodactyl was a flying dinosaur.',
    },
    reponse: {
      fr: 'Faux ! C’était un reptile volant, cousin des dinosaures mais pas dinosaure. Comme le mosasaure dans la mer.',
      en: 'False! It was a flying reptile, a cousin of the dinosaurs but not one of them. Same for the mosasaur in the sea.',
    },
  },
  {
    cardId: 'apres-les-dinosaures',
    vrai: false,
    texte: {
      fr: 'Les mammouths ont vécu en même temps que les dinosaures.',
      en: 'Mammoths lived at the same time as the dinosaurs.',
    },
    reponse: {
      fr: 'Faux ! Des dizaines de millions d’années les séparent. Les mammouths, eux, ont croisé des humains.',
      en: 'False! Tens of millions of years separate them. Mammoths, on the other hand, did meet humans.',
    },
  },
];
