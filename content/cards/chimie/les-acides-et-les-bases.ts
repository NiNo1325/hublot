import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : « acide » n'est pas synonyme de danger — on en mange
 * tous les jours — et surtout, la réciproque est fausse. Les bases fortes
 * brûlent tout aussi bien, sans prévenir par un goût piquant. C'est la
 * symétrie de l'échelle de pH que la carte cherche à installer.
 */
export const card: ScienceCard = {
  id: 'les-acides-et-les-bases',
  domainId: 'chimie',
  animationId: 'acide-base',
  thumbnail: '🍋',
  content: {
    fr: {
      title: {
        '3-5': 'Ce qui pique la langue',
        '6-8': 'Les acides et leur contraire',
        '9-12': 'Acides et bases : une échelle symétrique',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'piquant',
              text: 'Le citron pique la langue. C’est ce qu’on appelle un acide.',
            },
            {
              id: 'echelle',
              text: 'Il y a des acides tout doux, comme le citron, et des acides très forts qu’il ne faut jamais toucher.',
            },
            {
              id: 'bases',
              text: 'Et il existe le contraire des acides. Le savon en fait partie. Lui aussi peut être dangereux.',
            },
            {
              id: 'neutraliser',
              text: 'Si on mélange un acide et son contraire, les deux s’annulent, et il ne reste presque rien.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'piquant',
              text: 'Le goût acide, tu le connais bien : citron, vinaigre, pomme verte. Un acide n’est donc pas forcément un danger — tu en manges tous les jours.',
            },
            {
              id: 'echelle',
              text: 'Ce qui compte, c’est la force, qu’on mesure par le pH, de zéro à quatorze. Sept, c’est neutre, comme l’eau pure. En dessous c’est acide, au-dessus c’est basique. Et chaque graduation vaut dix fois la précédente.',
            },
            {
              id: 'bases',
              text: 'L’erreur la plus courante est de croire que seuls les acides sont dangereux. Les bases fortes — soude, déboucheur de canalisation — brûlent la peau tout aussi bien, parfois davantage. Et elles ne préviennent par aucun goût piquant.',
            },
            {
              id: 'neutraliser',
              text: 'Mis ensemble, un acide et une base se neutralisent et donnent de l’eau et un sel. C’est ce que fait le bicarbonate sur du vinaigre. C’est aussi pourquoi ton estomac, très acide, doit être protégé par une couche de mucus.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'piquant',
              text: 'Un acide cède un proton, une base en capte un. Cette définition, due à Brønsted et Lowry, ne dit rien de la dangerosité : l’acide citrique du citron et l’acide chlorhydrique de laboratoire relèvent exactement de la même famille.',
            },
            {
              id: 'echelle',
              text: 'Le pH est l’opposé du logarithme décimal de la concentration en ions hydrogène. La conséquence est souvent manquée : l’échelle étant logarithmique, un pH de trois est dix fois plus acide qu’un pH de quatre, et cent fois plus qu’un pH de cinq. Le suc gastrique se situe autour de un ou deux.',
            },
            {
              id: 'bases',
              text: 'La symétrie est complète, et la croyance populaire fausse : la soude, de pH quatorze, est au moins aussi corrosive que les acides forts. Elle saponifie les graisses de la peau — précisément le mécanisme par lequel on fabrique du savon.',
            },
            {
              id: 'neutraliser',
              text: 'Acide et base réagissent en formant de l’eau et un sel. Le vivant exploite des systèmes tampons pour résister à ces variations : le pH du sang est maintenu entre 7,35 et 7,45, et un écart de quelques dixièmes suffit à mettre la vie en danger.',
            },
          ],
        },
      },
    },
  },
};
