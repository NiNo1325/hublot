import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : la réponse intuitive est « parce que c'est solide ».
 * L'idée à faire passer est que la forme compte autant que le matériau — un
 * triangle est indéformable là où un carré s'affaisse, et c'est vérifiable à
 * la main avec des pailles.
 */
export const card: ScienceCard = {
  id: 'pourquoi-les-ponts-tiennent',
  domainId: 'ingenierie',
  animationId: 'structures',
  thumbnail: '🌉',
  content: {
    fr: {
      title: {
        '3-5': 'Le pont qui ne tombe pas',
        '6-8': 'Pourquoi les ponts tiennent debout',
        '9-12': 'Forces et structures',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'poids',
              text: 'Quand une voiture roule sur un pont, elle appuie très fort dessus. Et pourtant, le pont ne casse pas.',
            },
            {
              id: 'carre',
              text: "Si tu fais un carré avec quatre pailles, tu peux l'écraser tout doucement : il se penche sur le côté.",
            },
            {
              id: 'triangle',
              text: "Mais un triangle avec trois pailles, tu as beau pousser, il ne bouge pas. Le triangle est la forme la plus solide.",
            },
            {
              id: 'repartition',
              text: "Alors on construit les ponts avec plein de triangles. Chacun porte un petit peu du poids, et tous ensemble, ils sont très forts.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'poids',
              text: "Un pont doit supporter son propre poids, plus celui de tout ce qui passe dessus. Ce poids pousse vers le bas, en permanence.",
            },
            {
              id: 'carre',
              text: "Fabrique un carré avec quatre bâtonnets attachés aux coins : il se déforme facilement en losange. Ses angles peuvent changer sans que les bâtonnets s'allongent.",
            },
            {
              id: 'triangle',
              text: "Un triangle, lui, ne peut pas se déformer. Pour changer ses angles, il faudrait allonger ou raccourcir un côté. C'est pour cela que le triangle est la forme de base de presque toutes les charpentes et grues.",
            },
            {
              id: 'repartition',
              text: "Les arcs fonctionnent autrement : ils font glisser le poids le long de leur courbe jusqu'aux piliers, puis jusqu'au sol. Le sol retient tout — et c'est pour ça que la forme d'un pont compte autant que le matériau dont il est fait.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'poids',
              text: "Un pont subit deux types de charges : sa charge permanente, c'est-à-dire son propre poids, et sa charge d'exploitation, celle des véhicules, du vent ou de la neige. La structure doit encaisser les deux sans se déformer durablement.",
            },
            {
              id: 'carre',
              text: "Un quadrilatère articulé n'est pas rigide : ses angles peuvent varier à longueurs de côtés constantes. Sous une charge latérale, il se transforme en losange et s'effondre.",
            },
            {
              id: 'triangle',
              text: "Le triangle est la seule figure indéformable : la longueur de ses trois côtés détermine entièrement ses angles. Une structure triangulée ne travaille alors qu'en traction et en compression, deux sollicitations que les matériaux supportent bien mieux que la flexion.",
            },
            {
              id: 'repartition',
              text: "L'arc transforme la charge verticale en compression dirigée vers ses appuis — d'où les contreforts des cathédrales, qui reprennent la poussée latérale. Le pont suspendu inverse le principe : les câbles travaillent en traction et transmettent la charge aux pylônes puis aux ancrages. Trois solutions, un même problème : conduire les forces jusqu'au sol.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The bridge that does not fall down',
        '6-8': 'Why bridges stay up',
        '9-12': 'Forces and structures',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'poids',
              text: 'When a car drives over a bridge, it presses down on it very hard. And yet the bridge does not break.',
            },
            {
              id: 'carre',
              text: 'If you make a square out of four straws, you can squash it ever so gently: it leans over to one side.',
            },
            {
              id: 'triangle',
              text: 'But a triangle made of three straws will not budge, however hard you push. The triangle is the strongest shape.',
            },
            {
              id: 'repartition',
              text: 'So bridges are built with lots of triangles. Each one carries a little bit of the weight, and all together they are very strong.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'poids',
              text: 'A bridge has to hold up its own weight, plus the weight of everything that crosses it. That weight presses downwards, all the time.',
            },
            {
              id: 'carre',
              text: 'Make a square out of four sticks joined at the corners: it squashes easily into a diamond. Its angles can change without the sticks getting any longer.',
            },
            {
              id: 'triangle',
              text: 'A triangle, on the other hand, cannot change shape. To change its angles, you would have to lengthen or shorten one of its sides. That is why the triangle is the basic shape of almost every roof frame and crane.',
            },
            {
              id: 'repartition',
              text: 'Arches work differently: they slide the weight along their curve down to the piers, and then down to the ground. The ground holds everything — and that is why the shape of a bridge counts as much as the material it is made of.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'poids',
              text: 'A bridge carries two kinds of load: its dead load, that is to say its own weight, and its live load, that of vehicles, wind or snow. The structure has to take both without deforming for good.',
            },
            {
              id: 'carre',
              text: 'A hinged quadrilateral is not rigid: its angles can vary while the lengths of its sides stay the same. Under a sideways load, it turns into a diamond and collapses.',
            },
            {
              id: 'triangle',
              text: 'The triangle is the only figure that cannot be deformed: the lengths of its three sides fix its angles entirely. A triangulated structure then works only in tension and compression, two kinds of loading that materials withstand far better than bending.',
            },
            {
              id: 'repartition',
              text: 'An arch turns the vertical load into compression directed towards its supports — hence the buttresses of cathedrals, which take up the sideways thrust. A suspension bridge reverses the principle: the cables work in tension and pass the load on to the towers and then to the anchorages. Three solutions, one and the same problem: leading the forces down to the ground.',
            },
          ],
        },
      },
    },
  },
};
