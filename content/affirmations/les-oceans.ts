import type { Affirmation } from '@/lib/types';

/** Affirmations du domaine « Les océans ». */
export const affirmations: Affirmation[] = [
  {
    cardId: 'dou-viennent-les-vagues',
    vrai: false,
    texte: {
      fr: 'Une vague transporte l’eau depuis le large jusqu’à la plage.',
      en: 'A wave carries water all the way from the open sea to the beach.',
    },
    reponse: {
      fr: 'Faux ! C’est le mouvement qui voyage, pas l’eau. Un bouchon monte et descend sur place au lieu d’avancer.',
      en: 'False! It is the movement that travels, not the water. A cork bobs up and down on the spot instead of moving along.',
    },
  },
  {
    cardId: 'les-fleuves-dans-la-mer',
    vrai: true,
    texte: {
      fr: 'Il y a de vrais courants dans la mer, comme des fleuves invisibles.',
      en: 'There are real currents in the sea, like invisible rivers.',
    },
    reponse: {
      fr: 'Vrai ! Ils font le tour de la planète et transportent la chaleur. C’est en partie pour ça qu’il fait doux en Europe.',
      en: 'True! They loop around the planet carrying heat. That is partly why Europe is so mild.',
    },
  },
  {
    cardId: 'pourquoi-il-fait-noir-au-fond',
    vrai: false,
    texte: {
      fr: 'S’il fait noir au fond de la mer, c’est parce que l’eau y est trouble.',
      en: 'It is dark at the bottom of the sea because the water down there is murky.',
    },
    reponse: {
      fr: 'Faux ! Même l’eau la plus claire avale la lumière, couleur par couleur. Le rouge part le premier, le bleu résiste le plus longtemps.',
      en: 'False! Even the clearest water swallows light, colour by colour. Red goes first, blue holds out longest.',
    },
  },
  {
    cardId: 'la-pression-qui-ecrase',
    vrai: false,
    texte: {
      fr: 'Les poissons du fond sont écrasés par la pression, comme le serait un sous-marin.',
      en: 'Deep-sea fish are crushed by the pressure, just as a submarine would be.',
    },
    reponse: {
      fr: 'Faux ! Ils sont pleins d’eau, alors l’eau pousse autant du dedans que du dehors. C’est l’air d’un sous-marin qui, lui, se laisse écraser.',
      en: 'False! They are full of water, so water pushes just as hard from inside as out. It is the air in a submarine that gets crushed.',
    },
  },
  {
    cardId: 'le-corail-batisseur',
    vrai: false,
    texte: {
      fr: 'Le corail est une plante qui pousse au fond de la mer.',
      en: 'Coral is a plant that grows on the sea floor.',
    },
    reponse: {
      fr: 'Faux ! C’est un animal — des milliers de bestioles minuscules qui bâtissent leur maison en calcaire, les unes sur les autres.',
      en: 'False! It is an animal — thousands of tiny creatures building a limestone house, one on top of the other.',
    },
  },
  {
    cardId: 'les-animaux-qui-brillent',
    vrai: true,
    texte: {
      fr: 'La lumière que fabriquent les animaux du fond ne chauffe presque pas.',
      en: 'The light made by deep-sea animals gives off almost no heat.',
    },
    reponse: {
      fr: 'Vrai ! C’est une lumière chimique, bien plus économe qu’une ampoule. La plupart des animaux du fond en produisent.',
      en: 'True! It is chemical light, far thriftier than a bulb. Most deep-sea animals make some.',
    },
  },
  {
    cardId: 'les-sources-chaudes-du-fond',
    vrai: true,
    texte: {
      fr: 'Il existe des animaux qui vivent sans jamais dépendre du Soleil.',
      en: 'There are animals that live without ever depending on the Sun.',
    },
    reponse: {
      fr: 'Vrai ! Autour des sources chaudes du fond, tout un monde se nourrit de la chimie de la Terre, dans le noir absolu.',
      en: 'True! Around the hot vents on the sea floor, a whole world feeds on the Earth’s chemistry, in absolute darkness.',
    },
  },
  {
    cardId: 'le-plancton-minuscule',
    vrai: true,
    texte: {
      fr: 'Une bonne partie de l’oxygène que tu respires vient de la mer.',
      en: 'A good share of the oxygen you breathe comes from the sea.',
    },
    reponse: {
      fr: 'Vrai ! Du plancton invisible, à la surface, en fabrique environ une bouffée sur deux. La forêt n’est pas seule.',
      en: 'True! Invisible plankton at the surface makes roughly every other breath. Forests are not doing it alone.',
    },
  },
  {
    cardId: 'pourquoi-on-flotte-mieux-dans-la-mer',
    vrai: true,
    texte: {
      fr: 'On flotte mieux dans la mer que dans une piscine.',
      en: 'You float better in the sea than in a swimming pool.',
    },
    reponse: {
      fr: 'Vrai ! L’eau salée est plus lourde, alors elle pousse plus fort. Dans la mer Morte, on flotte sans même essayer.',
      en: 'True! Salty water is heavier, so it pushes harder. In the Dead Sea you float without even trying.',
    },
  },
  {
    cardId: 'la-vague-geante',
    vrai: false,
    texte: {
      fr: 'Un tsunami, c’est une vague énorme provoquée par une tempête.',
      en: 'A tsunami is an enormous wave caused by a storm.',
    },
    reponse: {
      fr: 'Faux ! Il naît d’un tremblement de terre sous la mer. Au large il est presque plat — c’est en arrivant qu’il se dresse.',
      en: 'False! It comes from an earthquake under the sea. Out at sea it is almost flat — it rears up only as it arrives.',
    },
  },
];
