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
    en: {
      title: {
        '3-5': 'Floating in the spaceship',
        '6-8': 'Why astronauts float',
        '9-12': 'Free fall and going into orbit',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'flotte',
              text: 'Inside their spaceship, astronauts float in the air. They can turn somersaults without ever falling.',
            },
            {
              id: 'gravite-existe',
              text: 'And yet the Earth keeps on pulling them towards it, just like it pulls you.',
            },
            {
              id: 'chute',
              text: 'In fact they are falling all the time! But their spaceship falls with them, so they float inside it.',
            },
            {
              id: 'orbite',
              text: 'They go so fast sideways that they always miss the Earth. So they go round it, again and again.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'flotte',
              text: 'On board the space station, everything floats: the astronauts, the water, the tools. This is called weightlessness.',
            },
            {
              id: 'gravite-existe',
              text: 'People often say there is no gravity in space. That is wrong. The station orbits at four hundred kilometres, where gravity is still about ninety per cent of what it is on the ground.',
            },
            {
              id: 'chute',
              text: 'So why do they float? Because they are falling, and the station is falling at exactly the same speed. You feel the same thing for a split second when you jump off a diving board: nothing is pushing you any more.',
            },
            {
              id: 'orbite',
              text: 'The station is therefore falling all the time, but it is also moving sideways at twenty-eight thousand kilometres per hour. It misses the Earth at every instant, and its fall becomes a complete lap every ninety minutes.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'flotte',
              text: 'Weightlessness is not the absence of gravity but the absence of a contact force. The weight you feel actually comes from the ground pushing you upwards; without it, you feel nothing.',
            },
            {
              id: 'gravite-existe',
              text: 'The strength of gravity falls off with the square of the distance from the centre of the Earth. At an altitude of 400 kilometres, you are still about 6,770 kilometres from the centre, against 6,370 at ground level: gravity there is roughly 8.7 metres per second squared, against 9.8.',
            },
            {
              id: 'chute',
              text: 'In orbit, the station and its occupants undergo the same acceleration and fall together. No force acts between them, hence the sensation of floating. It is precisely the situation of a lift whose cable has snapped.',
            },
            {
              id: 'orbite',
              text: 'An orbit is a fall that never meets the ground: the horizontal speed is such that the curve of the path follows the curve of the Earth. Newton described it with his cannonball thought experiment — beyond a certain firing speed, the ball falls for ever without ever touching the ground.',
            },
          ],
        },
      },
    },
  },
};
