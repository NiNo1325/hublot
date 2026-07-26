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
  },
};
