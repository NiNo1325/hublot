import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : l'extinction n'est pas un lent déclin. Les données
 * géologiques (limite Crétacé-Paléogène) situent l'événement dans un temps
 * très court à l'échelle géologique, même si ses effets se sont étalés sur
 * des mois voire des années.
 */
export const card: ScienceCard = {
  id: 'le-jour-de-lasteroide',
  domainId: 'les-dinosaures',
  animationId: 'le-jour-de-lasteroide',
  thumbnail: '☄️',
  content: {
    fr: {
      title: {
        '3-5': 'Le jour du grand caillou',
        '6-8': "Le jour de l'astéroïde",
        '9-12': "L'astéroïde et la fin des dinosaures non aviens",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: "Il y a très longtemps, un énorme caillou tombé du ciel a frappé la Terre très fort.",
            },
            {
              id: 'deux',
              text: 'Un immense nuage de poussière a caché le Soleil pendant très longtemps.',
            },
            {
              id: 'trois',
              text: "Sans soleil, les plantes n'ont plus poussé, et les gros dinosaures n'ont plus eu à manger.",
            },
            {
              id: 'quatre',
              text: 'Les tout petits animaux, cachés dans des trous, ont réussi à survivre.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: "Il y a soixante-six millions d'années, un astéroïde de plusieurs kilomètres de large a percuté la Terre à une vitesse folle.",
            },
            {
              id: 'deux',
              text: 'Le choc a projeté une quantité énorme de poussière dans le ciel, qui a caché le Soleil pendant des mois.',
            },
            {
              id: 'trois',
              text: "Privées de lumière, les plantes ont dépéri, et la chaîne alimentaire s'est effondrée : les grands animaux ont manqué de nourriture et disparu peu à peu.",
            },
            {
              id: 'quatre',
              text: 'Les petits animaux, capables de se cacher et de se contenter de peu, ont eu plus de chances de survivre à cette catastrophe.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: "Il y a environ soixante-six millions d'années, un astéroïde d'une dizaine de kilomètres de diamètre a percuté la péninsule du Yucatán, au Mexique.",
            },
            {
              id: 'deux',
              text: "L'impact a projeté dans l'atmosphère d'immenses quantités de poussière et de soufre, provoquant un refroidissement brutal et un assombrissement du ciel durant des mois, voire des années.",
            },
            {
              id: 'trois',
              text: "La photosynthèse ralentie a fait s'effondrer les chaînes alimentaires : les grands herbivores, puis les prédateurs, ont disparu faute de ressources.",
            },
            {
              id: 'quatre',
              text: "Les espèces de petite taille, aux besoins alimentaires réduits et capables de s'abriter, ont eu de meilleures chances de traverser cette extinction de masse — parmi elles, les ancêtres des oiseaux actuels.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The day of the big rock',
        '6-8': 'The day of the asteroid',
        '9-12': 'The asteroid and the end of the non-avian dinosaurs',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'A very long time ago, a huge rock fell from the sky and hit the Earth very hard.',
            },
            {
              id: 'deux',
              text: 'A giant cloud of dust hid the Sun for a very long time.',
            },
            {
              id: 'trois',
              text: 'With no sun, the plants stopped growing, and the big dinosaurs had nothing left to eat.',
            },
            {
              id: 'quatre',
              text: 'The tiny animals, hidden away in their burrows, managed to survive.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Sixty-six million years ago, an asteroid several kilometres wide smashed into the Earth at a tremendous speed.',
            },
            {
              id: 'deux',
              text: 'The crash threw an enormous amount of dust into the sky, and that dust hid the Sun for months.',
            },
            {
              id: 'trois',
              text: 'Deprived of light, the plants withered and the food chain collapsed: the big animals ran short of food and died out little by little.',
            },
            {
              id: 'quatre',
              text: 'Small animals, able to hide away and to get by on very little, stood a better chance of surviving the disaster.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'About sixty-six million years ago, an asteroid some ten kilometres across struck the Yucatán peninsula, in Mexico.',
            },
            {
              id: 'deux',
              text: 'The impact threw immense quantities of dust and sulphur into the atmosphere, causing an abrupt cooling and a darkening of the sky for months, even years.',
            },
            {
              id: 'trois',
              text: 'With photosynthesis slowed to a crawl, the food chains collapsed: the large herbivores, then the predators, disappeared for want of resources.',
            },
            {
              id: 'quatre',
              text: 'Small species, with modest food needs and able to take shelter, stood a better chance of coming through this mass extinction — among them, the ancestors of the birds we know today.',
            },
          ],
        },
      },
    },
  },
};
