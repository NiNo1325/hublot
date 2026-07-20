import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : « il fait plus chaud en été parce que la Terre est plus
 * proche du Soleil » est l'erreur la plus répandue sur le sujet — et elle est
 * réfutable par un fait net : la Terre est au plus près du Soleil début
 * janvier, en plein hiver de l'hémisphère nord.
 */
export const card: ScienceCard = {
  id: 'pourquoi-il-y-a-des-saisons',
  domainId: 'astronomie',
  animationId: 'saisons',
  thumbnail: '🍂',
  content: {
    fr: {
      title: {
        '3-5': "L'été et l'hiver",
        '6-8': "Pourquoi il y a des saisons",
        '9-12': "L'inclinaison de l'axe terrestre",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'inclinaison',
              text: 'La Terre est un peu penchée sur le côté, comme une toupie qui tourne de travers.',
            },
            {
              id: 'ete',
              text: "Quand ton pays est penché vers le soleil, ses rayons tapent bien droit. Il fait chaud : c'est l'été.",
            },
            {
              id: 'hiver',
              text: "Six mois plus tard, ton pays est penché de l'autre côté. Les rayons arrivent de travers et réchauffent moins : c'est l'hiver.",
            },
            {
              id: 'distance',
              text: "Ce n'est pas parce qu'on est plus près du soleil ! On est même tout près de lui en plein hiver.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'inclinaison',
              text: "L'axe autour duquel la Terre tourne est incliné d'environ vingt-trois degrés. Cette inclinaison ne change pas pendant qu'elle fait le tour du Soleil.",
            },
            {
              id: 'ete',
              text: "Quand ton hémisphère penche vers le Soleil, les rayons arrivent presque à la verticale et concentrent leur chaleur sur une petite surface. Les journées sont aussi plus longues. C'est l'été.",
            },
            {
              id: 'hiver',
              text: "Six mois plus tard, le même hémisphère penche dans l'autre sens. Les rayons frappent en biais et se répartissent sur une plus grande surface : ils chauffent moins. Les nuits s'allongent. C'est l'hiver.",
            },
            {
              id: 'distance',
              text: "On entend souvent qu'il fait chaud en été parce que la Terre est plus proche du Soleil. C'est faux : elle en est au plus près début janvier, quand c'est l'hiver en Europe. Et pendant ce temps, c'est l'été en Australie.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'inclinaison',
              text: "L'axe de rotation terrestre est incliné de 23,4 degrés par rapport au plan de son orbite, et conserve une direction fixe dans l'espace au cours de l'année.",
            },
            {
              id: 'ete',
              text: "Lorsqu'un hémisphère est incliné vers le Soleil, l'angle d'incidence est élevé : un même faisceau lumineux se répartit sur une surface plus petite, donc l'énergie reçue par mètre carré augmente. La durée d'ensoleillement s'allonge, ce qui accroît encore le total.",
            },
            {
              id: 'hiver',
              text: "Six mois plus tard, la situation s'inverse. Les rayons rasants s'étalent sur une surface plus grande et traversent une plus longue épaisseur d'atmosphère, qui en absorbe davantage.",
            },
            {
              id: 'distance',
              text: "La distance Terre-Soleil varie bien, mais de trois pour cent seulement, et dans le sens contraire de l'intuition : le périhélie a lieu début janvier. Si la distance commandait les saisons, les deux hémisphères auraient l'été en même temps — or ils sont toujours en opposition. C'est bien l'inclinaison, et elle seule, qui les explique.",
            },
          ],
        },
      },
    },
  },
};
