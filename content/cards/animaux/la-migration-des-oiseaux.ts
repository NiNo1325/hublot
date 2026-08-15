import type { ScienceCard } from '@/lib/types';

/**
 * Idée reçue corrigée : « les oiseaux partent parce qu'ils ont froid ». En
 * réalité, ils partent surtout parce que la nourriture manque en hiver ; le
 * froid seul, bien couverts de plumes, ils le supporteraient. Ils s'orientent
 * grâce au soleil, aux étoiles et au champ magnétique de la Terre.
 */
export const card: ScienceCard = {
  id: 'la-migration-des-oiseaux',
  domainId: 'animaux',
  animationId: 'migration',
  thumbnail: '🦅',
  content: {
    fr: {
      title: {
        '3-5': 'Le grand voyage des oiseaux',
        '6-8': 'La migration des oiseaux',
        '9-12': 'La migration des oiseaux',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'nourriture',
              text: "En hiver, il n'y a plus beaucoup à manger : les petites bêtes et les graines ont disparu.",
            },
            {
              id: 'depart',
              text: 'Alors les oiseaux partent très loin, vers les pays chauds où il y a à manger.',
            },
            {
              id: 'boussole',
              text: "Pour trouver leur chemin, ils regardent le soleil et les étoiles, comme une carte dans le ciel.",
            },
            {
              id: 'retour',
              text: 'Au printemps, quand la nourriture revient, ils reviennent aussi !',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'nourriture',
              text: "Quand l'hiver arrive, insectes, graines et fruits deviennent rares. Ce n'est pas tant le froid que la faim qui pose problème.",
            },
            {
              id: 'depart',
              text: 'Beaucoup d’oiseaux s’envolent alors vers des régions plus chaudes, parfois à des milliers de kilomètres, pour y trouver de quoi manger.',
            },
            {
              id: 'boussole',
              text: 'Comment ne se perdent-ils pas ? Ils se repèrent avec le soleil le jour, les étoiles la nuit, et même avec le champ magnétique de la Terre, comme une boussole intérieure.',
            },
            {
              id: 'retour',
              text: 'Au printemps, la nourriture réapparaît dans leur région de départ, et ils refont le voyage en sens inverse pour y nicher.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'nourriture',
              text: "La migration répond d'abord à la nourriture, pas au thermomètre. En hiver, les insectes disparaissent et les graines se raréfient ; un oiseau bien emplumé résiste au froid, mais pas à la disette.",
            },
            {
              id: 'depart',
              text: "Des espèces entières s'élancent alors vers le sud. La sterne arctique détient le record : d'un pôle à l'autre, elle parcourt chaque année près de 70 000 kilomètres.",
            },
            {
              id: 'boussole',
              text: "Pour s'orienter, les oiseaux combinent plusieurs repères : la position du soleil, la carte des étoiles, des points de repère au sol, et une perception du champ magnétique terrestre qui leur indique le nord. C'est cette boussole intérieure, encore étudiée, qui étonne le plus.",
            },
            {
              id: 'retour',
              text: "Au printemps, la nourriture revient au nord et les jours rallongent : le signal du retour. Beaucoup retrouvent précisément le même nid que l'année précédente. La migration n'est donc pas une fuite du froid, mais une poursuite de la nourriture.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The birds’ big journey',
        '6-8': 'Bird migration',
        '9-12': 'Bird migration',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'nourriture',
              text: 'In winter, there is not much left to eat: the little bugs and the seeds are gone.',
            },
            {
              id: 'depart',
              text: 'So the birds fly far away, to warm countries where there is food.',
            },
            {
              id: 'boussole',
              text: 'To find their way, they look at the sun and the stars, like a map in the sky.',
            },
            {
              id: 'retour',
              text: 'In spring, when the food comes back, they come back too!',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'nourriture',
              text: 'When winter comes, insects, seeds and fruit grow scarce. It is hunger, more than the cold, that is the problem.',
            },
            {
              id: 'depart',
              text: 'So many birds fly off to warmer places, sometimes thousands of kilometres away, to find something to eat.',
            },
            {
              id: 'boussole',
              text: 'How do they not get lost? They use the sun by day, the stars by night, and even the Earth’s magnetic field, like a compass inside them.',
            },
            {
              id: 'retour',
              text: 'In spring, food comes back where they started from, and they make the journey the other way round to nest there.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'nourriture',
              text: 'Migration answers to food, not to the thermometer. In winter, insects vanish and seeds grow rare; a well-feathered bird can stand the cold, but not the famine.',
            },
            {
              id: 'depart',
              text: 'Whole species then set off south. The Arctic tern holds the record: from one pole to the other, it covers nearly 70,000 kilometres every year.',
            },
            {
              id: 'boussole',
              text: 'To steer, birds combine several clues: the position of the sun, the map of the stars, landmarks on the ground, and a sense of the Earth’s magnetic field that tells them where north is. It is this inner compass, still being studied, that astonishes most.',
            },
            {
              id: 'retour',
              text: 'In spring, food returns in the north and the days grow longer: the signal to go back. Many find exactly the same nest as the year before. Migration is not an escape from the cold, then, but a pursuit of food.',
            },
          ],
        },
      },
    },
  },
};
