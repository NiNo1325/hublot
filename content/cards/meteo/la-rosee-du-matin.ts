import type { ScienceCard } from '@/lib/types';

/**
 * Idée reçue corrigée : « la rosée tombe du ciel pendant la nuit ». En réalité,
 * l'eau est déjà dans l'air sous forme de vapeur ; quand les surfaces (herbe,
 * feuilles) refroidissent la nuit, cette vapeur se condense sur place en
 * gouttelettes. Rien ne tombe : les gouttes se forment là où on les trouve.
 */
export const card: ScienceCard = {
  id: 'la-rosee-du-matin',
  domainId: 'meteo',
  animationId: 'rosee',
  thumbnail: '💧',
  content: {
    fr: {
      title: {
        '3-5': 'La rosée du matin',
        '6-8': "D'où vient la rosée",
        '9-12': "D'où vient la rosée",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'air-humide',
              text: 'Dans l’air, il y a toujours un peu d’eau cachée, qu’on ne voit pas.',
            },
            {
              id: 'nuit-froide',
              text: 'La nuit, l’herbe et les feuilles deviennent toutes froides.',
            },
            {
              id: 'condense',
              text: 'Au contact du froid, l’eau de l’air se colle dessus en petites gouttes.',
            },
            {
              id: 'matin',
              text: 'Le matin, tout est couvert de gouttes. Elles ne sont pas tombées : elles se sont formées là !',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'air-humide',
              text: "On croit que la rosée tombe du ciel pendant la nuit. Faux : l'eau est déjà là, dans l'air, sous forme de vapeur invisible.",
            },
            {
              id: 'nuit-froide',
              text: 'La nuit, le sol, l’herbe et les feuilles perdent leur chaleur et deviennent plus froids que l’air.',
            },
            {
              id: 'condense',
              text: 'Au contact de ces surfaces froides, la vapeur d’eau de l’air se transforme en minuscules gouttelettes : elle se condense, exactement comme la buée sur un verre glacé.',
            },
            {
              id: 'matin',
              text: 'Au matin, l’herbe est couverte de gouttes de rosée. Elles ne sont pas tombées d’en haut : elles se sont formées directement sur place.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'air-humide',
              text: "La rosée ne tombe pas : elle se dépose. L'air contient en permanence de la vapeur d'eau, invisible, en quantité variable selon l'humidité.",
            },
            {
              id: 'nuit-froide',
              text: "La nuit, par temps clair, les surfaces exposées rayonnent leur chaleur vers le ciel et refroidissent plus vite que l'air. Elles peuvent devenir nettement plus froides que lui.",
            },
            {
              id: 'condense',
              text: "Quand l'air au contact d'une surface descend sous son point de rosée, sa vapeur ne peut plus rester gazeuse : elle se condense en gouttelettes directement sur cette surface. C'est le même phénomène que la buée sur une bouteille sortie du frigo.",
            },
            {
              id: 'matin',
              text: "La rosée n'est donc pas une pluie fine venue d'en haut, mais de l'eau de l'air condensée sur place. Si la surface descend en dessous de zéro, la vapeur se dépose non plus en gouttes mais en glace : c'est alors du givre, pas de la rosée.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Morning dew',
        '6-8': 'Where dew comes from',
        '9-12': 'Where dew comes from',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'air-humide',
              text: 'In the air there is always a little hidden water that we cannot see.',
            },
            {
              id: 'nuit-froide',
              text: 'At night, the grass and the leaves go all cold.',
            },
            {
              id: 'condense',
              text: 'Touching the cold, the water in the air sticks onto them in little drops.',
            },
            {
              id: 'matin',
              text: 'In the morning everything is covered in drops. They did not fall: they formed right there!',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'air-humide',
              text: 'People think dew falls from the sky during the night. Wrong: the water is already there, in the air, as invisible vapour.',
            },
            {
              id: 'nuit-froide',
              text: 'At night, the ground, the grass and the leaves lose their heat and become colder than the air.',
            },
            {
              id: 'condense',
              text: 'Touching those cold surfaces, the water vapour in the air turns into tiny droplets: it condenses, exactly like the mist on an ice-cold glass.',
            },
            {
              id: 'matin',
              text: 'In the morning the grass is covered in drops of dew. They did not fall from above: they formed directly on the spot.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'air-humide',
              text: 'Dew does not fall: it settles. The air permanently contains water vapour, invisible, in amounts that vary with the humidity.',
            },
            {
              id: 'nuit-froide',
              text: 'At night, in clear weather, exposed surfaces radiate their heat towards the sky and cool faster than the air. They can end up markedly colder than it.',
            },
            {
              id: 'condense',
              text: 'When the air touching a surface drops below its dew point, its vapour can no longer stay gaseous: it condenses into droplets directly on that surface. It is the same phenomenon as the mist on a bottle taken out of the fridge.',
            },
            {
              id: 'matin',
              text: 'Dew is therefore not a fine rain from above, but water from the air condensed on the spot. If the surface drops below zero, the vapour settles not as drops but as ice: that is frost, not dew.',
            },
          ],
        },
      },
    },
  },
};
