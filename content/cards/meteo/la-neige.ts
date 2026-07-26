import type { ScienceCard } from '@/lib/types';

/**
 * Idée reçue corrigée : « la neige, c'est de la pluie gelée ». En réalité, un
 * flocon se forme directement à partir de la vapeur d'eau qui se change en glace
 * dans le froid, sans passer par la goutte d'eau. Il pousse en cristal à six
 * branches. La pluie qui gèle, elle, donne du verglas ou du grésil, pas des
 * flocons.
 */
export const card: ScienceCard = {
  id: 'la-neige',
  domainId: 'meteo',
  animationId: 'neige',
  thumbnail: '❄️',
  content: {
    fr: {
      title: {
        '3-5': 'La neige',
        '6-8': 'Comment se forme la neige',
        '9-12': 'Comment se forme la neige',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'pas-pluie-gelee',
              text: "La neige, ce n'est pas de la pluie qui a gelé en tombant.",
            },
            {
              id: 'vapeur-au-froid',
              text: 'Tout en haut, là où il fait très froid, la vapeur d’eau se change tout de suite en glace.',
            },
            {
              id: 'cristal-six',
              text: 'Elle forme un tout petit cristal avec six branches, comme une étoile.',
            },
            {
              id: 'flocon',
              text: 'Plein de cristaux se collent et tombent : ce sont les flocons de neige !',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'pas-pluie-gelee',
              text: "On croit souvent que la neige, c'est de la pluie qui gèle en tombant. C'est faux : la pluie gelée donne du verglas, pas de la neige.",
            },
            {
              id: 'vapeur-au-froid',
              text: 'Dans les nuages très froids, la vapeur d’eau ne devient pas d’abord une goutte : elle se transforme directement en glace.',
            },
            {
              id: 'cristal-six',
              text: 'Cette glace pousse en un cristal minuscule qui a toujours six branches, à cause de la façon dont les molécules d’eau s’assemblent.',
            },
            {
              id: 'flocon',
              text: 'En tombant, les cristaux s’accrochent les uns aux autres et forment les flocons. Comme chacun rencontre des conditions différentes, il n’y en a jamais deux identiques.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'pas-pluie-gelee',
              text: "La neige n'est pas de la pluie gelée. Une goutte de pluie qui gèle en chutant produit du grésil ou du verglas — de la glace transparente, sans forme d'étoile.",
            },
            {
              id: 'vapeur-au-froid',
              text: "Le flocon naît autrement : dans un nuage sous zéro, la vapeur d'eau se dépose directement à l'état solide sur une microscopique poussière. On passe du gaz à la glace sans étape liquide, c'est la déposition.",
            },
            {
              id: 'cristal-six',
              text: "Les molécules d'eau se lient selon des angles fixes qui imposent une symétrie à six côtés : tout cristal de neige a six branches. Sa forme exacte — étoile, plaque, aiguille — dépend de la température et de l'humidité traversées.",
            },
            {
              id: 'flocon',
              text: "Le cristal grossit en tombant, capte d'autres cristaux, et devient un flocon. Chaque flocon suit un trajet unique à travers le nuage, si bien que sa forme finale l'est aussi : c'est l'origine de l'idée qu'il n'existe pas deux flocons identiques.",
            },
          ],
        },
      },
    },
  },
};
