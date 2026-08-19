import type { Affirmation } from '@/lib/types';

/** Affirmations du domaine « Construire ». */
export const affirmations: Affirmation[] = [
  {
    cardId: 'pourquoi-les-ponts-tiennent',
    vrai: true,
    texte: {
      fr: 'Un pont tient debout grâce à ses triangles.',
      en: 'A bridge stands up thanks to its triangles.',
    },
    reponse: {
      fr: 'Vrai ! Un carré se déforme si on pousse dessus, un triangle non. C’est la forme la plus solide qui existe.',
      en: 'True! A square bends when you push it, a triangle does not. It is the strongest shape there is.',
    },
  },
  {
    cardId: 'comment-vole-un-avion',
    vrai: false,
    texte: {
      fr: 'Un avion vole parce qu’il est plus léger que l’air.',
      en: 'A plane flies because it is lighter than air.',
    },
    reponse: {
      fr: 'Faux ! Il pèse des centaines de tonnes. Ce sont ses ailes qui poussent l’air vers le bas, et l’air le repousse vers le haut.',
      en: 'False! It weighs hundreds of tonnes. Its wings push the air downwards, and the air pushes it back up.',
    },
  },
  {
    cardId: 'les-leviers',
    vrai: true,
    texte: {
      fr: 'Un levier ne fait pas gagner de force : il fait gagner de la distance.',
      en: 'A lever does not save you force: it trades force for distance.',
    },
    reponse: {
      fr: 'Vrai ! Tu pousses moins fort, mais sur un chemin plus long. Le travail total, lui, reste le même.',
      en: 'True! You push less hard, but over a longer path. The total work stays exactly the same.',
    },
  },
  {
    cardId: 'les-engrenages',
    vrai: true,
    texte: {
      fr: 'Deux roues dentées qui se touchent tournent dans des sens opposés.',
      en: 'Two touching cogwheels turn in opposite directions.',
    },
    reponse: {
      fr: 'Vrai ! L’une pousse l’autre, forcément à l’envers. Il en faut une troisième pour revenir au même sens.',
      en: 'True! One pushes the other, so it must go backwards. You need a third one to get back the same direction.',
    },
  },
  {
    cardId: 'pourquoi-les-bateaux-flottent',
    vrai: false,
    texte: {
      fr: 'Un bateau flotte parce qu’il est léger.',
      en: 'A boat floats because it is light.',
    },
    reponse: {
      fr: 'Faux ! Un porte-conteneurs pèse des milliers de tonnes. Il flotte parce qu’il est creux et qu’il pousse beaucoup d’eau de côté.',
      en: 'False! A container ship weighs thousands of tonnes. It floats because it is hollow and shoves a lot of water aside.',
    },
  },
  {
    cardId: 'les-poulies',
    vrai: true,
    texte: {
      fr: 'Avec assez de poulies, un enfant peut soulever une voiture.',
      en: 'With enough pulleys, a child can lift a car.',
    },
    reponse: {
      fr: 'Vrai ! Chaque poulie partage l’effort. Il faut juste tirer beaucoup, beaucoup plus de corde.',
      en: 'True! Each pulley shares the load. You just have to pull a lot, lot more rope.',
    },
  },
  {
    cardId: 'comment-avance-une-fusee',
    vrai: false,
    texte: {
      fr: 'Une fusée avance en poussant sur l’air derrière elle.',
      en: 'A rocket moves forward by pushing on the air behind it.',
    },
    reponse: {
      fr: 'Faux ! Dans l’espace il n’y a pas d’air, et elle avance quand même. Elle jette du gaz en arrière, et le gaz la pousse en avant.',
      en: 'False! There is no air in space, and it moves anyway. It throws gas backwards, and the gas pushes it forwards.',
    },
  },
  {
    cardId: 'comment-on-freine',
    vrai: true,
    texte: {
      fr: 'Quand une voiture freine, son mouvement se transforme en chaleur.',
      en: 'When a car brakes, its movement turns into heat.',
    },
    reponse: {
      fr: 'Vrai ! Les freins deviennent brûlants. Le mouvement ne disparaît pas : il change de forme.',
      en: 'True! The brakes get scorching hot. The movement does not vanish: it changes form.',
    },
  },
  {
    cardId: 'comment-marche-un-frigo',
    vrai: false,
    texte: {
      fr: 'Un frigo fabrique du froid et l’envoie dans la boîte.',
      en: 'A fridge makes cold and blows it into the box.',
    },
    reponse: {
      fr: 'Faux ! Il sort la chaleur de la boîte et la rejette derrière. Touche l’arrière d’un frigo : c’est tiède.',
      en: 'False! It takes the heat out of the box and dumps it behind. Touch the back of a fridge: it is warm.',
    },
  },
  {
    cardId: 'le-micro-ondes',
    vrai: false,
    texte: {
      fr: 'Le micro-ondes cuit les aliments de l’intérieur.',
      en: 'A microwave cooks food from the inside out.',
    },
    reponse: {
      fr: 'Faux ! Il chauffe l’eau des premiers centimètres, et la chaleur se propage vers le cœur — comme dans un four, mais plus vite.',
      en: 'False! It heats the water in the first few centimetres, and the heat spreads inwards — like an oven, only faster.',
    },
  },
];
