import type { ScienceCard } from '@/lib/types';

/**
 * Idée reçue corrigée : « les abeilles fabriquent le miel avec le pollen, et
 * elles le font pour nous ». En réalité, le miel vient du nectar des fleurs,
 * transformé et déshydraté par les abeilles, et c'est leur réserve de nourriture
 * pour l'hiver. Le pollen, lui, est transporté mais n'entre pas dans le miel.
 */
export const card: ScienceCard = {
  id: 'comment-les-abeilles-font-le-miel',
  domainId: 'animaux',
  animationId: 'miel',
  thumbnail: '🐝',
  content: {
    fr: {
      title: {
        '3-5': 'Le miel des abeilles',
        '6-8': 'Comment les abeilles font le miel',
        '9-12': 'Comment les abeilles font le miel',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'nectar',
              text: "L'abeille se pose sur une fleur et aspire son jus sucré, tout liquide.",
            },
            {
              id: 'transport',
              text: 'Elle rapporte ce jus dans sa maison, la ruche.',
            },
            {
              id: 'transformation',
              text: 'Les abeilles battent des ailes très fort pour sécher le jus. Il devient épais : c’est le miel !',
            },
            {
              id: 'reserve',
              text: 'Elles rangent le miel dans des petites cases, pour avoir à manger tout l’hiver.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'nectar',
              text: "Le miel ne vient pas du pollen, mais du nectar : le liquide sucré que les fleurs cachent au fond de leurs pétales. L'abeille l'aspire avec sa langue.",
            },
            {
              id: 'transport',
              text: 'Elle stocke ce nectar dans une poche de son ventre, le jabot, et le rapporte à la ruche.',
            },
            {
              id: 'transformation',
              text: "Là, les abeilles se le passent de bouche en bouche en y ajoutant leurs sucs, puis ventilent avec leurs ailes pour évaporer l'eau. Le nectar liquide s'épaissit peu à peu en miel.",
            },
            {
              id: 'reserve',
              text: "Elles scellent le miel dans les alvéoles de cire. Ce n'est pas pour nous : c'est leur garde-manger pour passer l'hiver, quand il n'y a plus de fleurs.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'nectar',
              text: "Tout part du nectar, une eau très sucrée sécrétée par les fleurs pour attirer les butineuses. L'abeille l'aspire ; en chemin, du pollen se colle à ses pattes, mais ce pollen ne deviendra pas du miel.",
            },
            {
              id: 'transport',
              text: 'Le nectar est stocké dans le jabot, un estomac dédié où des enzymes commencent déjà à découper ses sucres. De retour à la ruche, la butineuse le transmet à une ouvrière.',
            },
            {
              id: 'transformation',
              text: "S'ensuit un long travail : le nectar passe de bouche en bouche, enrichi d'enzymes, puis déposé en fine couche dans les alvéoles. Les abeilles ventilent en masse pour évaporer l'eau — le nectar contient environ 80 % d'eau, le miel à peine 18 %. C'est cette déshydratation qui le rend épais et le conserve.",
            },
            {
              id: 'reserve',
              text: "Une fois assez concentré, le miel est operculé sous un couvercle de cire. Il constitue la réserve énergétique de la colonie pour l'hiver, quand aucune fleur ne fleurit. Nous n'en récoltons qu'une partie du surplus : le miel est d'abord fait par les abeilles, pour les abeilles.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The bees’ honey',
        '6-8': 'How bees make honey',
        '9-12': 'How bees make honey',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'nectar',
              text: 'The bee lands on a flower and sucks up its sweet juice, all runny.',
            },
            {
              id: 'transport',
              text: 'She carries this juice back to her home, the hive.',
            },
            {
              id: 'transformation',
              text: 'The bees beat their wings very hard to dry the juice. It turns thick: that is honey!',
            },
            {
              id: 'reserve',
              text: 'They tidy the honey away into little boxes, to have food all winter long.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'nectar',
              text: 'Honey does not come from pollen, but from nectar: the sweet liquid that flowers hide at the bottom of their petals. The bee sucks it up with her tongue.',
            },
            {
              id: 'transport',
              text: 'She stores this nectar in a pouch in her belly, the crop, and carries it back to the hive.',
            },
            {
              id: 'transformation',
              text: 'There, the bees pass it from mouth to mouth, adding their own juices, then fan with their wings to evaporate the water. The runny nectar slowly thickens into honey.',
            },
            {
              id: 'reserve',
              text: 'They seal the honey into cells of wax. It is not for us: it is their larder for getting through the winter, when there are no flowers left.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'nectar',
              text: 'It all starts with nectar, a very sugary water that flowers make to attract foragers. The bee sucks it up; on the way, pollen sticks to her legs, but that pollen will never become honey.',
            },
            {
              id: 'transport',
              text: 'The nectar is stored in the crop, a dedicated stomach where enzymes already begin to break its sugars apart. Back at the hive, the forager hands it over to a house bee.',
            },
            {
              id: 'transformation',
              text: 'Then comes a long job: the nectar passes from mouth to mouth, enriched with enzymes, then is laid down in a thin layer in the cells. The bees fan in great numbers to evaporate the water — nectar is about 80% water, honey barely 18%. It is this drying out that makes it thick and keeps it from spoiling.',
            },
            {
              id: 'reserve',
              text: 'Once it is concentrated enough, the honey is capped under a lid of wax. It is the colony’s energy store for the winter, when not a single flower is in bloom. We harvest only part of the surplus: honey is made first by bees, for bees.',
            },
          ],
        },
      },
    },
  },
};
