import type { ScienceCard } from '@/lib/types';

/**
 * Idée reçue corrigée : « dans une tempête, le vent tourne n'importe comment ».
 * En réalité, un ouragan est une immense spirale très organisée qui tourne autour
 * d'un centre calme, l'œil. Il naît au-dessus des mers chaudes, qui lui donnent
 * son énergie.
 */
export const card: ScienceCard = {
  id: 'louragan',
  domainId: 'meteo',
  animationId: 'ouragan',
  thumbnail: '🌀',
  content: {
    fr: {
      title: {
        '3-5': "L'ouragan",
        '6-8': "L'ouragan",
        '9-12': "L'ouragan",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'mer-chaude',
              text: 'Un ouragan naît au-dessus de la mer, quand l’eau est bien chaude.',
            },
            {
              id: 'spirale',
              text: 'Le vent se met à tourner en rond, de plus en plus vite, comme une immense toupie.',
            },
            {
              id: 'oeil',
              text: 'Et tout au milieu, il y a un endroit tout calme : c’est l’œil de l’ouragan.',
            },
            {
              id: 'structure',
              text: 'Le vent ne va pas n’importe où : il tourne bien rangé autour de ce centre.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'mer-chaude',
              text: "Un ouragan se forme au-dessus des mers chaudes des tropiques. L'eau tiède fait monter de l'air humide, qui donne au tourbillon toute son énergie.",
            },
            {
              id: 'spirale',
              text: 'Les vents s’enroulent alors en une gigantesque spirale de nuages, large de centaines de kilomètres, qui tourne de plus en plus vite.',
            },
            {
              id: 'oeil',
              text: 'Au centre exact se trouve l’œil : une zone étonnamment calme et souvent dégagée, où le ciel peut même être bleu.',
            },
            {
              id: 'structure',
              text: 'Contrairement à ce qu’on croit, le vent ne souffle pas dans le désordre : tout est organisé en spirale autour de cet œil central.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'mer-chaude',
              text: "Un ouragan naît sur une mer d'au moins 26 °C. L'eau chaude évapore beaucoup de vapeur ; en s'élevant et se condensant, celle-ci libère de la chaleur, le carburant qui alimente la tempête.",
            },
            {
              id: 'spirale',
              text: "L'air aspiré vers le centre est dévié par la rotation de la Terre (l'effet Coriolis), ce qui enroule les vents en une spirale. Le système s'organise en bandes nuageuses tournant à des vitesses pouvant dépasser 250 km/h.",
            },
            {
              id: 'oeil',
              text: "En son cœur, l'air redescend, ce qui dissipe les nuages : c'est l'œil, calme et clair, cerné par le mur de l'œil, l'anneau où les vents sont les plus violents.",
            },
            {
              id: 'structure',
              text: "Un ouragan est donc l'inverse du chaos : une machine thermique remarquablement structurée, une spirale géante organisée autour d'un axe. Le croire désordonné, c'est confondre sa violence avec du hasard — sa force vient précisément de son organisation.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The hurricane',
        '6-8': 'The hurricane',
        '9-12': 'The hurricane',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'mer-chaude',
              text: 'A hurricane is born over the sea, when the water is nice and warm.',
            },
            {
              id: 'spirale',
              text: 'The wind starts turning round and round, faster and faster, like a huge spinning top.',
            },
            {
              id: 'oeil',
              text: 'And right in the middle there is a very calm spot: that’s the eye of the hurricane.',
            },
            {
              id: 'structure',
              text: 'The wind does not go just anywhere: it turns neatly around that middle.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'mer-chaude',
              text: 'A hurricane forms over the warm seas of the tropics. The warm water sends humid air rising, and that gives the whirlwind all its energy.',
            },
            {
              id: 'spirale',
              text: 'The winds then coil into a gigantic spiral of cloud, hundreds of kilometres wide, turning faster and faster.',
            },
            {
              id: 'oeil',
              text: 'At the exact centre lies the eye: a surprisingly calm and often clear zone, where the sky can even be blue.',
            },
            {
              id: 'structure',
              text: 'Contrary to what people believe, the wind does not blow at random: everything is organised in a spiral around that central eye.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'mer-chaude',
              text: 'A hurricane is born over a sea of at least 26 °C. The warm water evaporates a great deal of vapour; as it rises and condenses, that vapour releases heat, the fuel that feeds the storm.',
            },
            {
              id: 'spirale',
              text: 'Air drawn towards the centre is deflected by the Earth’s rotation (the Coriolis effect), which coils the winds into a spiral. The system organises itself into cloud bands turning at speeds that can exceed 250 km/h.',
            },
            {
              id: 'oeil',
              text: 'At its heart, the air sinks back down, which clears the clouds away: this is the eye, calm and clear, ringed by the eyewall, the band where the winds are most violent.',
            },
            {
              id: 'structure',
              text: 'A hurricane is therefore the opposite of chaos: a remarkably structured heat engine, a giant spiral organised around an axis. To think it disordered is to mistake its violence for randomness — its strength comes precisely from its organisation.',
            },
          ],
        },
      },
    },
  },
};
