import type { Affirmation } from '@/lib/types';

/** Affirmations du domaine « Les animaux ». */
export const affirmations: Affirmation[] = [
  {
    cardId: 'la-metamorphose-du-papillon',
    vrai: true,
    texte: {
      fr: 'Dans son cocon, la chenille se transforme presque entièrement en bouillie.',
      en: 'Inside its cocoon, the caterpillar turns almost entirely into mush.',
    },
    reponse: {
      fr: 'Vrai ! Elle se défait, puis se rebâtit en papillon. Ce n’est pas un déguisement : c’est un corps refait à neuf.',
      en: 'True! It comes apart, then rebuilds itself as a butterfly. It is not a costume: it is a body made anew.',
    },
  },
  {
    cardId: 'pourquoi-le-cameleon-change-de-couleur',
    vrai: false,
    texte: {
      fr: 'Le caméléon change de couleur pour se cacher sur ce qu’il touche.',
      en: 'A chameleon changes colour to hide against whatever it is touching.',
    },
    reponse: {
      fr: 'Faux ! Il change surtout selon son humeur et sa température. C’est une façon de parler, pas un camouflage.',
      en: 'False! It changes mostly with its mood and its temperature. It is a way of talking, not camouflage.',
    },
  },
  {
    cardId: 'la-migration-des-oiseaux',
    vrai: true,
    texte: {
      fr: 'Certains oiseaux se repèrent grâce au champ magnétique de la Terre.',
      en: 'Some birds find their way using the Earth’s magnetic field.',
    },
    reponse: {
      fr: 'Vrai ! Une boussole dans la tête, le soleil, les étoiles, la forme des côtes : ils utilisent tout à la fois.',
      en: 'True! A compass in the head, the sun, the stars, the shape of the coast: they use all of it at once.',
    },
  },
  {
    cardId: 'lhibernation',
    vrai: false,
    texte: {
      fr: 'Un animal qui hiberne dort profondément, comme nous la nuit.',
      en: 'A hibernating animal is deeply asleep, like we are at night.',
    },
    reponse: {
      fr: 'Faux ! Son cœur ralentit énormément et son corps refroidit. C’est bien plus qu’un sommeil : c’est une mise en veille.',
      en: 'False! Its heart slows right down and its body cools. It is far more than sleep: it is a standby mode.',
    },
  },
  {
    cardId: 'lecholocation-de-la-chauve-souris',
    vrai: false,
    texte: {
      fr: 'Les chauves-souris sont aveugles.',
      en: 'Bats are blind.',
    },
    reponse: {
      fr: 'Faux ! Elles voient très bien. Mais dans le noir complet, écouter l’écho de son propre cri marche encore mieux.',
      en: 'False! They see perfectly well. But in total darkness, listening to the echo of your own shout works even better.',
    },
  },
  {
    cardId: 'comment-les-poissons-respirent',
    vrai: false,
    texte: {
      fr: 'Un poisson casse l’eau en morceaux pour en tirer l’oxygène.',
      en: 'A fish breaks water apart to get the oxygen out of it.',
    },
    reponse: {
      fr: 'Faux ! L’oxygène est déjà mélangé dans l’eau, comme le sucre dans le thé. Ses branchies n’ont qu’à l’attraper au passage.',
      en: 'False! The oxygen is already mixed into the water, like sugar in tea. Its gills only have to catch it as it goes by.',
    },
  },
  {
    cardId: 'pourquoi-les-zebres-ont-des-rayures',
    vrai: true,
    texte: {
      fr: 'Les rayures du zèbre gênent surtout les mouches.',
      en: 'A zebra’s stripes mostly bother the flies.',
    },
    reponse: {
      fr: 'Vrai ! On a essayé avec des manteaux rayés sur des chevaux : les mouches se posent beaucoup moins.',
      en: 'True! They tried striped coats on horses: the flies land far less often.',
    },
  },
  {
    cardId: 'comment-les-abeilles-font-le-miel',
    vrai: true,
    texte: {
      fr: 'Le miel, c’est du nectar que les abeilles ont fait sécher.',
      en: 'Honey is nectar that the bees have dried out.',
    },
    reponse: {
      fr: 'Vrai ! Elles le transforment et l’éventent avec leurs ailes jusqu’à ce qu’il épaississe. Sans eau, il ne moisit jamais.',
      en: 'True! They transform it and fan it with their wings until it thickens. With no water left, it never goes mouldy.',
    },
  },
  {
    cardId: 'la-toile-de-laraignee',
    vrai: false,
    texte: {
      fr: 'Toute la toile est collante : c’est l’araignée qui a des pattes spéciales pour ne pas s’y prendre.',
      en: 'The whole web is sticky: it is the spider that has special legs to avoid getting caught.',
    },
    reponse: {
      fr: 'Faux ! Ce sont les fils qui ne sont pas tous collants. Elle marche sur les rayons secs, et garde la colle pour la spirale — et pour les mouches.',
      en: 'False! It is the threads that are not all sticky. It walks on the dry spokes, and saves the glue for the spiral — and for the flies.',
    },
  },
  {
    cardId: 'pourquoi-le-chat-retombe-sur-ses-pattes',
    vrai: true,
    texte: {
      fr: 'Un chat se retourne en l’air sans prendre appui sur rien.',
      en: 'A cat turns over in mid-air without pushing off anything.',
    },
    reponse: {
      fr: 'Vrai ! Il tord l’avant d’un côté et l’arrière de l’autre. C’est un tour de gymnaste, pas de la magie.',
      en: 'True! It twists its front one way and its back the other. It is a gymnast’s trick, not magic.',
    },
  },
];
