import type { ScienceCard } from '@/lib/types';

/**
 * Cette carte reprend là où « les phases de la Lune » s'arrête. Celle-ci
 * écarte l'ombre de la Terre pour expliquer les phases, et affirme au passage
 * que les éclipses sont rares — sans dire pourquoi. La réponse tient à
 * l'inclinaison de cinq degrés de l'orbite lunaire, et c'est le sujet ici.
 */
export const card: ScienceCard = {
  id: 'les-eclipses',
  domainId: 'astronomie',
  animationId: 'eclipses',
  thumbnail: '🕶️',
  content: {
    fr: {
      title: {
        '3-5': 'Quand la Lune cache le Soleil',
        '6-8': 'Pourquoi les éclipses sont rares',
        '9-12': 'Éclipses : nœuds, ombre et coïncidence',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'pourquoi-pas-tous-les-mois',
              text: 'Parfois, la Lune passe juste devant le Soleil, et il fait sombre en plein jour.',
            },
            {
              id: 'inclinaison',
              text: 'Ça n’arrive presque jamais, parce que la Lune passe souvent un peu au-dessus ou un peu en dessous.',
            },
            {
              id: 'deux-sortes',
              text: 'D’autres fois, c’est la Terre qui met son ombre sur la Lune. Alors la Lune devient toute rouge.',
            },
            {
              id: 'coincidence',
              text: 'Et sais-tu pourquoi la Lune cache le Soleil pile poil ? C’est un hasard extraordinaire.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'pourquoi-pas-tous-les-mois',
              text: 'Tu sais déjà que les phases ne viennent pas de l’ombre de la Terre. Mais alors, pourquoi cette ombre ne tombe-t-elle pas sur la Lune à chaque pleine Lune ?',
            },
            {
              id: 'inclinaison',
              text: 'Parce que l’orbite de la Lune est un peu penchée, d’environ cinq degrés. La plupart du temps, elle passe donc légèrement au-dessus ou au-dessous de l’alignement. Les trois astres ne se retrouvent vraiment en ligne que quelques fois par an.',
            },
            {
              id: 'deux-sortes',
              text: 'Il y a alors deux cas. La Lune passe devant le Soleil : c’est une éclipse de Soleil, visible seulement dans une bande étroite de quelques centaines de kilomètres. Ou la Terre projette son ombre sur la Lune : c’est une éclipse de Lune, visible de toute la moitié nuit de la planète — et la Lune y devient rouge, éclairée par tous les couchers de soleil terrestres à la fois.',
            },
            {
              id: 'coincidence',
              text: 'Reste le plus étonnant. Le Soleil est environ quatre cents fois plus gros que la Lune, mais aussi quatre cents fois plus loin : les deux paraissent donc exactement de la même taille dans le ciel. C’est une coïncidence, et elle ne durera pas — la Lune s’éloigne un peu chaque année.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'pourquoi-pas-tous-les-mois',
              text: 'Si l’orbite lunaire était contenue dans le plan de l’écliptique, il y aurait une éclipse de Lune à chaque pleine Lune et une de Soleil à chaque nouvelle Lune, soit vingt-quatre par an.',
            },
            {
              id: 'inclinaison',
              text: 'Elle est inclinée d’environ cinq degrés. Une éclipse ne survient donc que si l’alignement coïncide avec le passage de la Lune par un nœud de son orbite — le point où elle traverse le plan de l’écliptique. D’où les saisons d’éclipses, deux par an, et un total de quatre à sept éclipses annuelles tous types confondus.',
            },
            {
              id: 'deux-sortes',
              text: 'L’éclipse de Soleil exige que le cône d’ombre lunaire atteigne le sol : la bande de totalité dépasse rarement deux cent cinquante kilomètres de large, et la totalité quelques minutes. L’éclipse de Lune, elle, est visible de tout l’hémisphère nocturne et dure des heures. La Lune y prend une teinte cuivrée parce que l’atmosphère terrestre réfracte et rougit la lumière solaire : ce qui l’éclaire, c’est la somme de tous les levers et couchers de soleil de la planète.',
            },
            {
              id: 'coincidence',
              text: 'La quasi-égalité des diamètres apparents — un demi-degré chacun — est fortuite : le Soleil est quatre cents fois plus grand et quatre cents fois plus éloigné. Elle est aussi temporaire. Les marées éloignent la Lune de près de quatre centimètres par an ; dans quelques centaines de millions d’années, les éclipses totales de Soleil auront disparu, remplacées par des annulaires.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'When the Moon hides the Sun',
        '6-8': 'Why eclipses are rare',
        '9-12': 'Eclipses: nodes, shadow and coincidence',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'pourquoi-pas-tous-les-mois',
              text: 'Sometimes the Moon goes right in front of the Sun, and it turns dark in the middle of the day.',
            },
            {
              id: 'inclinaison',
              text: 'It almost never happens, because the Moon usually goes past a little above or a little below.',
            },
            {
              id: 'deux-sortes',
              text: 'Other times, it is the Earth that puts its shadow on the Moon. Then the Moon turns all red.',
            },
            {
              id: 'coincidence',
              text: 'And do you know why the Moon hides the Sun so exactly? It is an amazing coincidence.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'pourquoi-pas-tous-les-mois',
              text: 'You already know that the phases do not come from the Earth’s shadow. But then why does that shadow not fall on the Moon at every full Moon?',
            },
            {
              id: 'inclinaison',
              text: 'Because the Moon’s orbit is slightly tilted, by about five degrees. Most of the time it therefore passes a little above or a little below the line-up. The three bodies truly line up only a few times a year.',
            },
            {
              id: 'deux-sortes',
              text: 'There are then two cases. The Moon passes in front of the Sun: that is a solar eclipse, visible only in a narrow band a few hundred kilometres wide. Or the Earth casts its shadow on the Moon: that is a lunar eclipse, visible from the whole night side of the planet — and the Moon turns red there, lit by all the Earth’s sunsets at once.',
            },
            {
              id: 'coincidence',
              text: 'The most astonishing part is still to come. The Sun is about four hundred times bigger than the Moon, but also four hundred times further away: so the two look exactly the same size in the sky. It is a coincidence, and it will not last — the Moon drifts a little further away every year.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'pourquoi-pas-tous-les-mois',
              text: 'If the lunar orbit lay in the plane of the ecliptic, there would be a lunar eclipse at every full Moon and a solar eclipse at every new Moon, twenty-four a year.',
            },
            {
              id: 'inclinaison',
              text: 'It is tilted by about five degrees. An eclipse therefore only occurs if the alignment coincides with the Moon passing through a node of its orbit — the point where it crosses the plane of the ecliptic. Hence the eclipse seasons, two a year, and a total of four to seven eclipses annually of all types combined.',
            },
            {
              id: 'deux-sortes',
              text: 'A solar eclipse requires the Moon’s cone of shadow to reach the ground: the band of totality rarely exceeds two hundred and fifty kilometres across, and totality itself lasts a few minutes. A lunar eclipse, by contrast, is visible from the whole night hemisphere and lasts for hours. The Moon takes on a coppery hue because the Earth’s atmosphere refracts and reddens sunlight: what lights it is the sum of every sunrise and sunset on the planet.',
            },
            {
              id: 'coincidence',
              text: 'The near equality of the apparent diameters — half a degree each — is fortuitous: the Sun is four hundred times larger and four hundred times further away. It is also temporary. The tides move the Moon nearly four centimetres further away each year; in a few hundred million years, total solar eclipses will have disappeared, replaced by annular ones.',
            },
          ],
        },
      },
    },
  },
};
