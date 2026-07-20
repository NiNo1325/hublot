import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : « il n'y a pas de gravité dans l'espace » est faux et
 * très répandu. À l'altitude de la station spatiale, la gravité vaut encore
 * près de 90 % de celle au sol. Les astronautes flottent parce qu'ils tombent
 * en permanence — et que la station tombe avec eux.
 */
export const card: ScienceCard = {
  id: 'pourquoi-les-astronautes-flottent',
  domainId: 'astronomie',
  animationId: 'apesanteur',
  thumbnail: '👨‍🚀',
  content: {
    fr: {
      title: {
        '3-5': 'Flotter dans la fusée',
        '6-8': 'Pourquoi les astronautes flottent',
        '9-12': 'Chute libre et satellisation',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'flotte',
              text: "Dans leur vaisseau, les astronautes flottent en l'air. Ils peuvent faire la culbute sans jamais tomber.",
            },
            {
              id: 'gravite-existe',
              text: "Pourtant, la Terre continue de les tirer vers elle, comme elle te tire toi.",
            },
            {
              id: 'chute',
              text: "En fait, ils tombent tout le temps ! Mais leur vaisseau tombe avec eux, alors ils flottent dedans.",
            },
            {
              id: 'orbite',
              text: "Ils vont si vite sur le côté qu'ils ratent toujours la Terre. Alors ils tournent autour, encore et encore.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'flotte',
              text: "À bord de la station spatiale, tout flotte : les astronautes, l'eau, les outils. On appelle cela l'impesanteur.",
            },
            {
              id: 'gravite-existe',
              text: "On dit souvent qu'il n'y a pas de gravité dans l'espace. C'est faux. La station orbite à quatre cents kilomètres, où la gravité vaut encore environ quatre-vingt-dix pour cent de celle au sol.",
            },
            {
              id: 'chute',
              text: "Alors pourquoi flottent-ils ? Parce qu'ils tombent, et que la station tombe exactement à la même vitesse. Tu ressens la même chose une fraction de seconde en sautant d'un plongeoir : rien ne te pousse plus.",
            },
            {
              id: 'orbite',
              text: "La station tombe donc en permanence, mais elle avance aussi sur le côté à vingt-huit mille kilomètres par heure. Elle rate la Terre à chaque instant, et sa chute devient un tour complet toutes les quatre-vingt-dix minutes.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'flotte',
              text: "L'impesanteur n'est pas l'absence de gravité mais l'absence de force de contact. Ton poids ressenti vient en réalité du sol qui te pousse vers le haut ; sans lui, tu ne ressens rien.",
            },
            {
              id: 'gravite-existe',
              text: "L'intensité de la gravité décroît avec le carré de la distance au centre de la Terre. À 400 kilomètres d'altitude, on est encore à environ 6 770 kilomètres du centre contre 6 370 au sol : la gravité y vaut à peu près 8,7 mètres par seconde carrée, contre 9,8.",
            },
            {
              id: 'chute',
              text: "En orbite, station et occupants subissent la même accélération et tombent ensemble. Aucune force ne s'exerce entre eux, d'où la sensation de flotter. C'est rigoureusement la situation d'un ascenseur dont le câble aurait cédé.",
            },
            {
              id: 'orbite',
              text: "Une orbite est une chute qui ne rencontre jamais le sol : la vitesse horizontale est telle que la courbure de la trajectoire suit celle de la Terre. Newton l'avait décrit avec l'expérience de pensée du boulet de canon — au-delà d'une certaine vitesse de tir, le boulet retombe éternellement sans jamais toucher terre.",
            },
          ],
        },
      },
    },
  },
};
