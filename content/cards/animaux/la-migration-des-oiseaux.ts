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
  },
};
