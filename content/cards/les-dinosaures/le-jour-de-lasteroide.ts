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
  },
};
