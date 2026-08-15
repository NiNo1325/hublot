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
    en: {
      title: {
        '3-5': 'Snow',
        '6-8': 'How snow forms',
        '9-12': 'How snow forms',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'pas-pluie-gelee',
              text: 'Snow is not rain that froze on the way down.',
            },
            {
              id: 'vapeur-au-froid',
              text: 'Way up high, where it is very cold, the water in the air turns straight into ice.',
            },
            {
              id: 'cristal-six',
              text: 'It makes a tiny crystal with six arms, like a little star.',
            },
            {
              id: 'flocon',
              text: 'Lots of crystals stick together and fall down: those are the snowflakes!',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'pas-pluie-gelee',
              text: 'People often think snow is rain that freezes as it falls. That’s wrong: frozen rain gives ice on the road, not snow.',
            },
            {
              id: 'vapeur-au-froid',
              text: 'In very cold clouds, water vapour does not become a droplet first: it turns directly into ice.',
            },
            {
              id: 'cristal-six',
              text: 'That ice grows into a tiny crystal that always has six arms, because of the way water molecules fit together.',
            },
            {
              id: 'flocon',
              text: 'As they fall, the crystals catch on one another and make snowflakes. Since each one meets different conditions, no two are ever the same.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'pas-pluie-gelee',
              text: 'Snow is not frozen rain. A raindrop that freezes as it falls produces sleet or glaze ice — clear ice, with no star shape at all.',
            },
            {
              id: 'vapeur-au-froid',
              text: 'A snowflake is born another way: in a cloud below freezing, water vapour settles directly as a solid onto a microscopic speck of dust. It goes from gas to ice with no liquid stage — that is deposition.',
            },
            {
              id: 'cristal-six',
              text: 'Water molecules bond at fixed angles that impose a six-sided symmetry: every snow crystal has six arms. Its exact shape — star, plate, needle — depends on the temperatures and humidity it passes through.',
            },
            {
              id: 'flocon',
              text: 'The crystal grows as it falls, picks up other crystals, and becomes a flake. Each flake follows a unique path through the cloud, so its final shape is unique too: that is where the idea that no two snowflakes are alike comes from.',
            },
          ],
        },
      },
    },
  },
};
