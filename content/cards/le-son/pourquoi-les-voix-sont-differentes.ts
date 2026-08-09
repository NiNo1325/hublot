import type { ScienceCard } from '@/lib/types';

/**
 * La voix naît sur les cordes vocales, dans la gorge — pas dans la bouche.
 * La bouche, le nez et la gorge ne font que la colorer ensuite.
 */
export const card: ScienceCard = {
  id: 'pourquoi-les-voix-sont-differentes',
  domainId: 'le-son',
  animationId: 'pourquoi-les-voix-sont-differentes',
  thumbnail: '🗣️',
  content: {
    fr: {
      title: {
        '3-5': "D'où vient ta voix ?",
        '6-8': 'Pourquoi les voix sont différentes',
        '9-12': 'Pourquoi chaque voix est unique',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'L\'air sort de tes poumons et remonte dans ta gorge.',
            },
            {
              id: 'deux',
              text: 'Il fait trembler deux petites cordes, au fond de ta gorge.',
            },
            {
              id: 'trois',
              text: 'Ta bouche et ton nez donnent une couleur à ce son.',
            },
            {
              id: 'quatre',
              text: 'Ta gorge et ta bouche ont une forme à toi : ta voix est unique !',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: "Quand tu parles, l'air remonte de tes poumons vers ta gorge.",
            },
            {
              id: 'deux',
              text: 'Il fait vibrer les cordes vocales, deux petits replis tendus dans ta gorge : c\'est là que naît le son de ta voix.',
            },
            {
              id: 'trois',
              text: 'Ce son traverse ensuite ta gorge, ta bouche et ton nez, qui le transforment comme une caisse de résonance.',
            },
            {
              id: 'quatre',
              text: "Comme personne n'a exactement la même forme de gorge, de bouche ou de nez, chaque voix est unique, même entre jumeaux.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: "En parlant, l'air expiré par les poumons remonte le long de la trachée jusqu'au larynx.",
            },
            {
              id: 'deux',
              text: "Il fait vibrer les cordes vocales, deux replis de tissu tendus dans le larynx : c'est cette vibration qui crée le son brut de la voix, pas la bouche.",
            },
            {
              id: 'trois',
              text: "Ce son traverse ensuite les cavités du pharynx, de la bouche et du nez, qui agissent comme une caisse de résonance et renforcent certaines fréquences plutôt que d'autres.",
            },
            {
              id: 'quatre',
              text: "La forme précise de ces cavités varie d'une personne à l'autre : c'est cette combinaison unique qui donne à chaque voix sa couleur reconnaissable entre toutes.",
            },
          ],
        },
      },
    },
  },
};
