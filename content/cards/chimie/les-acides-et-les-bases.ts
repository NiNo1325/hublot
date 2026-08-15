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
    en: {
      title: {
        '3-5': 'What makes your tongue tingle',
        '6-8': 'Acids and their opposite',
        '9-12': 'Acids and bases: a symmetrical scale',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'piquant',
              text: 'A lemon makes your tongue tingle. That is what we call an acid.',
            },
            {
              id: 'echelle',
              text: 'There are very gentle acids, like lemon, and very strong acids you must never touch.',
            },
            {
              id: 'bases',
              text: 'And there is the opposite of acids. Soap is one of them. It can be dangerous too.',
            },
            {
              id: 'neutraliser',
              text: 'If you mix an acid and its opposite, the two cancel each other out, and almost nothing is left.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'piquant',
              text: 'You know the sour taste of acids well: lemon, vinegar, green apple. So an acid is not always a danger — you eat some every day.',
            },
            {
              id: 'echelle',
              text: 'What matters is the strength, which we measure with the pH, from zero to fourteen. Seven is neutral, like pure water. Below that it is acidic, above that it is basic. And each step is worth ten times the one before.',
            },
            {
              id: 'bases',
              text: 'The commonest mistake is to believe that only acids are dangerous. Strong bases — caustic soda, drain cleaner — burn the skin just as well, sometimes worse. And they give no warning through a sharp taste.',
            },
            {
              id: 'neutraliser',
              text: 'Put together, an acid and a base neutralise each other and give water and a salt. That is what bicarbonate does to vinegar. It is also why your stomach, which is very acidic, has to be protected by a layer of mucus.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'piquant',
              text: 'An acid gives away a proton, a base takes one up. This definition, due to Brønsted and Lowry, says nothing about how dangerous something is: the citric acid in a lemon and the hydrochloric acid in a laboratory belong to exactly the same family.',
            },
            {
              id: 'echelle',
              text: 'The pH is the opposite of the base-ten logarithm of the hydrogen ion concentration. The consequence is often missed: because the scale is logarithmic, a pH of three is ten times more acidic than a pH of four, and a hundred times more than a pH of five. Gastric juice sits at around one or two.',
            },
            {
              id: 'bases',
              text: 'The symmetry is complete, and the popular belief is wrong: caustic soda, at pH fourteen, is at least as corrosive as the strong acids. It saponifies the fats in the skin — precisely the mechanism by which soap is made.',
            },
            {
              id: 'neutraliser',
              text: 'An acid and a base react to form water and a salt. Living things use buffer systems to withstand such swings: the pH of blood is held between 7.35 and 7.45, and a shift of a few tenths is enough to put life in danger.',
            },
          ],
        },
      },
    },
  },
};
