import type { AgeRange, Localise } from '@/lib/types';

/**
 * Les savants du Wall of Fame.
 *
 * Le nom propre ne se traduit pas, les dates non plus : « 1867 – 1934 » se lit
 * dans toutes les langues. Une personne vivante porte un intervalle ouvert
 * (« 1934 – »), ce qui évite l'accord de « né »/« née » que le français
 * imposerait et l'anglais non.
 *
 * Deux textes seulement, et courts. Une fiche de savant n'est pas une carte :
 * elle ne se narre pas en quatre temps, elle se lit d'un coup d'œil. L'apport
 * dit ce qu'on lui doit, l'anecdote donne la prise — c'est elle qu'un enfant
 * racontera à table, et c'est par elle qu'il se souviendra du reste.
 *
 * Chaque texte est décliné par âge, comme les cartes, et pour la même raison :
 * on ne parle pas d'algèbre à un enfant de quatre ans comme à un de onze. Le
 * registre 3-5 tient en deux phrases très concrètes, sans terme technique ; le
 * 6-8 s'appuie sur une comparaison familière ; le 9-12 assume le mot exact.
 *
 * `cartes` rattache la fiche aux cartes qu'elle éclaire : un enfant qui vient
 * de lire Newton peut enchaîner sur « pourquoi tout tombe ». Un test vérifie
 * que ces identifiants existent — le contenu est écrit à la main, et une carte
 * renommée casserait le lien en silence.
 */
export interface Savant {
  /** Slug : nomme aussi l'illustration, `public/images/wall-of-fame/<id>.webp`. */
  id: string;
  nom: string;
  naissance: number;
  /** `null` pour une personne vivante. */
  mort: number | null;
  /** Ce qu'on lui doit, à chaque âge. */
  apport: Localise<Record<AgeRange, string>>;
  /** Le détail qui accroche, et qu'on retient. */
  anecdote: Localise<Record<AgeRange, string>>;
  /** Cartes que la fiche permet d'enchaîner. */
  cartes: string[];
}

export const savants: Savant[] = [
  {
    id: 'al-khwarizmi',
    nom: 'Al-Khwârizmî',
    naissance: 780,
    mort: 850,
    apport: {
      fr: {
        '3-5': 'Il a appris aux gens à résoudre un problème étape par étape, dans le bon ordre.',
        '6-8': 'Il a écrit un livre qui explique comment résoudre un problème en suivant des étapes, toujours dans le même ordre. C’est la recette de cuisine des mathématiques.',
        '9-12': 'Il a écrit le livre qui a donné l’algèbre, et expliqué comment résoudre un problème en suivant des étapes, dans l’ordre.',
      },
      en: {
        '3-5': 'He taught people to solve a problem step by step, in the right order.',
        '6-8': 'He wrote a book explaining how to solve a problem by following steps, always in the same order. It is the recipe book of mathematics.',
        '9-12': 'He wrote the book that gave us algebra, and set out how to solve a problem by following steps, in order.',
      },
    },
    anecdote: {
      fr: {
        '3-5': 'Son nom est devenu un mot qu’on dit tous les jours : algorithme.',
        '6-8': 'Son nom a été déformé petit à petit, en passant d’une langue à l’autre, jusqu’à devenir un mot que tu entends tous les jours : algorithme.',
        '9-12': 'Son nom, déformé au fil des siècles, est devenu un mot que tu entends tous les jours : algorithme.',
      },
      en: {
        '3-5': 'His name became a word we say every day: algorithm.',
        '6-8': 'His name was worn down little by little, passing from one language to another, until it became a word you hear every day: algorithm.',
        '9-12': 'His name, worn down over the centuries, became a word you hear every day: algorithm.',
      },
    },
    cartes: ['quest-ce-quun-programme', 'le-zero'],
  },
  {
    id: 'ibn-al-haytham',
    nom: 'Ibn al-Haytham',
    naissance: 965,
    mort: 1040,
    apport: {
      fr: {
        '3-5': 'Il a compris que tes yeux ne lancent rien : c’est la lumière qui entre dedans.',
        '6-8': 'Avant lui, on croyait que l’œil envoyait des rayons pour voir. Il a montré le contraire : c’est la lumière qui entre dans l’œil. Et il vérifiait tout en faisant des expériences.',
        '9-12': 'Il a compris qu’on voit parce que la lumière entre dans l’œil, et non parce que l’œil enverrait des rayons. Il testait tout par l’expérience.',
      },
      en: {
        '3-5': 'He worked out that your eyes send nothing out: light comes into them.',
        '6-8': 'Before him, people thought the eye sent out rays in order to see. He showed the opposite: light comes into the eye. And he checked everything by doing experiments.',
        '9-12': 'He worked out that we see because light enters the eye, not because the eye sends out rays. He tested everything by experiment.',
      },
    },
    anecdote: {
      fr: {
        '3-5': 'Dans une pièce toute noire avec un petit trou, il a vu le dehors dessiné à l’envers sur le mur.',
        '6-8': 'Il s’est enfermé dans une pièce entièrement noire, percée d’un seul petit trou. Sur le mur d’en face, le monde du dehors apparaissait dessiné — mais à l’envers.',
        '9-12': 'Il a fait l’expérience dans une pièce entièrement noire, percée d’un seul petit trou : l’image du dehors se dessinait à l’envers sur le mur.',
      },
      en: {
        '3-5': 'In a completely dark room with one tiny hole, he saw the outside drawn upside down on the wall.',
        '6-8': 'He shut himself in a completely dark room with a single small hole. On the opposite wall, the world outside appeared — but upside down.',
        '9-12': 'He ran the experiment in a completely dark room with a single small hole: the world outside appeared upside down on the wall.',
      },
    },
    cartes: ['pourquoi-on-voit-les-couleurs', 'pourquoi-on-a-deux-yeux'],
  },
  {
    id: 'leonard-de-vinci',
    nom: 'Léonard de Vinci',
    naissance: 1452,
    mort: 1519,
    apport: {
      fr: {
        '3-5': 'Il dessinait très bien, et il a inventé des machines pour voler.',
        '6-8': 'C’était un peintre, mais pour mieux dessiner les gens il regardait comment ils sont faits à l’intérieur. Et il a rempli ses carnets de machines volantes, bien avant l’avion.',
        '9-12': 'Peintre, il disséquait des corps pour mieux les dessiner — et a rempli ses carnets de machines volantes quatre siècles avant l’avion.',
      },
      en: {
        '3-5': 'He drew very well, and he invented machines for flying.',
        '6-8': 'He was a painter, but to draw people better he looked at how they are made inside. And he filled his notebooks with flying machines, long before the aeroplane.',
        '9-12': 'A painter, he dissected bodies to draw them better — and filled his notebooks with flying machines four centuries before the aeroplane.',
      },
    },
    anecdote: {
      fr: {
        '3-5': 'Il écrivait à l’envers ! Pour le lire, il faut un miroir.',
        '6-8': 'Il écrivait de droite à gauche, toutes les lettres retournées. Pour lire ses carnets, il faut les tenir devant un miroir.',
        '9-12': 'Il écrivait à l’envers, de droite à gauche. Pour lire ses carnets, il faut les tenir devant un miroir.',
      },
      en: {
        '3-5': 'He wrote backwards! To read him, you need a mirror.',
        '6-8': 'He wrote from right to left, with every letter flipped. To read his notebooks you have to hold them up to a mirror.',
        '9-12': 'He wrote backwards, from right to left. To read his notebooks you have to hold them up to a mirror.',
      },
    },
    cartes: ['comment-vole-un-avion', 'comment-les-muscles-bougent'],
  },
  {
    id: 'galilee',
    nom: 'Galilée',
    naissance: 1564,
    mort: 1642,
    apport: {
      fr: {
        '3-5': 'Il a regardé le ciel dans une longue-vue et vu des lunes autour d’une autre planète.',
        '6-8': 'Il a pointé une longue-vue vers le ciel et vu que Jupiter avait ses propres lunes. Donc tout ne tournait pas autour de nous, comme on le croyait.',
        '9-12': 'Il a pointé une lunette vers le ciel et vu que Jupiter avait ses propres lunes : la Terre n’était donc pas le centre de tout.',
      },
      en: {
        '3-5': 'He looked at the sky through a spyglass and saw moons going round another planet.',
        '6-8': 'He pointed a spyglass at the sky and saw that Jupiter had moons of its own. So not everything went round us, as people believed.',
        '9-12': 'He pointed a telescope at the sky and saw that Jupiter had moons of its own: so the Earth was not the centre of everything.',
      },
    },
    anecdote: {
      fr: {
        '3-5': 'Il a donné à ces lunes le nom de gens très riches, pour qu’ils lui donnent du travail.',
        '6-8': 'Il a baptisé ces lunes du nom d’une famille très puissante, en espérant qu’elle l’embauche. Ça a marché.',
        '9-12': 'Il a baptisé ces lunes du nom de la famille qu’il espérait avoir pour employeur. Il a eu le poste.',
      },
      en: {
        '3-5': 'He named those moons after some very rich people, so they would give him a job.',
        '6-8': 'He named those moons after a very powerful family, hoping they would hire him. It worked.',
        '9-12': 'He named those moons after the family he hoped would employ him. He got the job.',
      },
    },
    cartes: ['les-planetes', 'pourquoi-tout-tombe'],
  },
  {
    id: 'isaac-newton',
    nom: 'Isaac Newton',
    naissance: 1643,
    mort: 1727,
    apport: {
      fr: {
        '3-5': 'Il a compris que ce qui fait tomber une pomme retient aussi la Lune.',
        '6-8': 'Il a compris que la force qui fait tomber une pomme est exactement la même que celle qui empêche la Lune de s’en aller. Une seule force, pour tout l’univers.',
        '9-12': 'Il a compris que la force qui fait tomber une pomme est la même que celle qui retient la Lune : la gravitation.',
      },
      en: {
        '3-5': 'He worked out that what makes an apple fall also holds the Moon.',
        '6-8': 'He worked out that the force pulling an apple down is exactly the same one that stops the Moon drifting away. One single force, for the whole universe.',
        '9-12': 'He worked out that the force pulling an apple down is the same one that holds the Moon in place: gravity.',
      },
    },
    anecdote: {
      fr: {
        '3-5': 'La pomme, c’est vrai ! Mais elle ne lui est pas tombée sur la tête.',
        '6-8': 'L’histoire de la pomme est vraie, c’est lui qui la racontait. Mais attention : elle ne lui est jamais tombée sur la tête. Il l’a simplement regardée tomber.',
        '9-12': 'L’histoire de la pomme est vraie — c’est lui qui la racontait. Mais elle ne lui est jamais tombée sur la tête : il l’a simplement vue tomber.',
      },
      en: {
        '3-5': 'The apple is true! But it did not fall on his head.',
        '6-8': 'The apple story is true — he told it himself. But careful: it never fell on his head. He simply watched one fall.',
        '9-12': 'The apple story is true — he told it himself. But it never landed on his head: he simply watched one fall.',
      },
    },
    cartes: ['pourquoi-tout-tombe', 'pourquoi-ca-sarrete'],
  },
  {
    id: 'mary-anning',
    nom: 'Mary Anning',
    naissance: 1799,
    mort: 1847,
    apport: {
      fr: {
        '3-5': 'Sur la plage, elle a trouvé les os d’animaux géants qui vivaient dans la mer.',
        '6-8': 'Elle cherchait des fossiles sur la plage et y a déterré d’immenses reptiles marins. Grâce à elle, on a compris que des animaux entiers avaient disparu pour toujours.',
        '9-12': 'Elle a déterré les premiers grands reptiles marins fossiles, et montré que des animaux entiers avaient disparu de la Terre.',
      },
      en: {
        '3-5': 'On the beach, she found the bones of giant animals that lived in the sea.',
        '6-8': 'She hunted for fossils on the beach and dug up huge sea reptiles. Thanks to her, we understood that whole kinds of animal had vanished for ever.',
        '9-12': 'She dug up the first great fossil sea reptiles, and showed that whole kinds of animal had vanished from the Earth.',
      },
    },
    anecdote: {
      fr: {
        '3-5': 'Elle avait douze ans quand elle a fait sa première grande trouvaille.',
        '6-8': 'Elle avait douze ans à sa première grande trouvaille. À l’époque, une fille pauvre n’avait pas le droit d’entrer dans les clubs de savants : elle vendait donc ses fossiles sur la plage.',
        '9-12': 'Elle avait douze ans à sa première grande trouvaille. Trop pauvre et trop femme pour entrer dans les sociétés savantes, elle vendait ses fossiles sur la plage.',
      },
      en: {
        '3-5': 'She was twelve when she made her first big find.',
        '6-8': 'She was twelve when she made her first great find. Back then a poor girl was not allowed into the scientists’ clubs, so she sold her fossils on the beach.',
        '9-12': 'She was twelve when she made her first great find. Too poor and too female to join the learned societies, she sold her fossils on the beach.',
      },
    },
    cartes: ['les-fossiles', 'le-puzzle-des-os'],
  },
  {
    id: 'charles-darwin',
    nom: 'Charles Darwin',
    naissance: 1809,
    mort: 1882,
    apport: {
      fr: {
        '3-5': 'Il a compris que les animaux changent tout doucement, sur très très longtemps.',
        '6-8': 'Il a expliqué pourquoi les animaux changent au fil du temps : ceux qui s’en sortent le mieux ont plus de petits, et leur transmettent ce qui les aide.',
        '9-12': 'Il a expliqué pourquoi les espèces changent au fil du temps : celles qui survivent le mieux transmettent leurs particularités à leurs petits.',
      },
      en: {
        '3-5': 'He worked out that animals change very slowly, over a very long time.',
        '6-8': 'He explained why animals change over time: those that cope best have more young, and pass on whatever helps them.',
        '9-12': 'He explained why species change over time: those that survive best pass their features on to their young.',
      },
    },
    anecdote: {
      fr: {
        '3-5': 'Il goûtait les animaux qu’il étudiait ! Même une tortue géante.',
        '6-8': 'Il goûtait les animaux qu’il étudiait : tatou, puma, tortue géante. À l’université, il faisait même partie d’un club où c’était le but.',
        '9-12': 'Il goûtait les animaux qu’il étudiait. Tatou, puma, tortue géante — à l’université, il appartenait à un club dont c’était tout le programme.',
      },
      en: {
        '3-5': 'He tasted the animals he studied! Even a giant tortoise.',
        '6-8': 'He tasted the animals he studied: armadillo, puma, giant tortoise. At university he even belonged to a club where that was the whole point.',
        '9-12': 'He tasted the animals he studied. Armadillo, puma, giant tortoise — at university he belonged to a club devoted to exactly that.',
      },
    },
    cartes: ['levolution', 'les-oiseaux-sont-des-dinosaures'],
  },
  {
    id: 'ada-lovelace',
    nom: 'Ada Lovelace',
    naissance: 1815,
    mort: 1852,
    apport: {
      fr: {
        '3-5': 'Elle a écrit la toute première liste d’ordres pour une machine.',
        '6-8': 'Elle a écrit le premier programme du monde, pour une machine qui n’a même jamais été construite. Et elle avait compris qu’un jour, ces machines feraient bien plus que des calculs.',
        '9-12': 'Elle a écrit le premier programme de l’histoire, pour une machine qui n’a jamais été construite — et compris qu’elle pourrait faire plus que calculer.',
      },
      en: {
        '3-5': 'She wrote the very first list of orders for a machine.',
        '6-8': 'She wrote the world’s first program, for a machine that was never even built. And she had understood that one day these machines would do far more than sums.',
        '9-12': 'She wrote the first program in history, for a machine that was never built — and saw that it could do more than arithmetic.',
      },
    },
    anecdote: {
      fr: {
        '3-5': 'Son papa était poète. Elle appelait son travail « la science qui fait rêver ».',
        '6-8': 'Son père était un poète célèbre, et elle appelait son travail de la « science poétique ». Aujourd’hui, un langage d’ordinateur porte son prénom.',
        '9-12': 'Fille du poète Byron, elle appelait son travail de la « science poétique ». Un langage de programmation porte aujourd’hui son prénom.',
      },
      en: {
        '3-5': 'Her dad was a poet. She called her work “the science that dreams”.',
        '6-8': 'Her father was a famous poet, and she called her work “poetical science”. Today a computer language carries her first name.',
        '9-12': 'Daughter of the poet Byron, she called her work “poetical science”. A programming language now carries her name.',
      },
    },
    cartes: ['quest-ce-quun-programme', 'comment-compte-un-ordinateur'],
  },
  {
    id: 'louis-pasteur',
    nom: 'Louis Pasteur',
    naissance: 1822,
    mort: 1895,
    apport: {
      fr: {
        '3-5': 'Il a montré que ce sont de tout petits microbes qui rendent malade.',
        '6-8': 'Avant lui, on croyait que les maladies venaient du mauvais air. Il a prouvé que ce sont des microbes — et il a inventé le vaccin pour s’en protéger.',
        '9-12': 'Il a prouvé que les maladies viennent de microbes, pas de l’air vicié — et inventé le moyen de s’en protéger : le vaccin.',
      },
      en: {
        '3-5': 'He showed that tiny little microbes are what make us ill.',
        '6-8': 'Before him, people thought illness came from bad air. He proved it comes from microbes — and he invented vaccination to guard against them.',
        '9-12': 'He proved that diseases come from microbes, not from bad air — and invented the way to guard against them: vaccination.',
      },
    },
    anecdote: {
      fr: {
        '3-5': 'Un garçon mordu par un chien malade est venu le voir. Il l’a sauvé.',
        '6-8': 'Un jour, on lui amène un garçon de neuf ans mordu par un chien enragé. Son vaccin n’avait encore jamais été essayé sur quelqu’un. Il a tenté, et l’enfant a vécu.',
        '9-12': 'En 1885, un garçon de neuf ans mordu par un chien enragé lui est amené. Son vaccin n’avait jamais été essayé sur un humain. L’enfant a vécu.',
      },
      en: {
        '3-5': 'A boy bitten by a sick dog came to see him. He saved him.',
        '6-8': 'One day a nine-year-old boy bitten by a rabid dog was brought to him. His vaccine had never been tried on anyone. He risked it, and the child lived.',
        '9-12': 'In 1885 a nine-year-old boy bitten by a rabid dog was brought to him. His vaccine had never been tried on a human. The boy lived.',
      },
    },
    cartes: ['les-microbes', 'pourquoi-le-lait-devient-yaourt'],
  },
  {
    id: 'dmitri-mendeleiev',
    nom: 'Dmitri Mendeleïev',
    naissance: 1834,
    mort: 1907,
    apport: {
      fr: {
        '3-5': 'Il a rangé tout ce qui existe dans un grand tableau, par familles.',
        '6-8': 'Tout ce qui existe est fait d’une centaine d’ingrédients de base. Il les a rangés dans un tableau, en mettant ensemble ceux qui se ressemblent.',
        '9-12': 'Il a rangé tous les éléments dans un tableau, par familles — celui qui est encore affiché dans les salles de chimie.',
      },
      en: {
        '3-5': 'He tidied everything that exists into a big table, by families.',
        '6-8': 'Everything that exists is made from about a hundred basic ingredients. He arranged them in a table, putting the similar ones together.',
        '9-12': 'He arranged all the elements into a table, by families — the one still pinned up in chemistry classrooms.',
      },
    },
    anecdote: {
      fr: {
        '3-5': 'Il a laissé des cases vides pour des choses que personne n’avait vues. On les a trouvées après !',
        '6-8': 'Il a laissé des cases vides dans son tableau, en disant à quoi ressembleraient les ingrédients manquants. Des années plus tard, on les a tous découverts — exactement comme il l’avait annoncé.',
        '9-12': 'Il a laissé des cases vides pour des éléments que personne n’avait vus, en décrivant à quoi ils ressembleraient. On les a tous trouvés depuis.',
      },
      en: {
        '3-5': 'He left empty boxes for things nobody had seen. They were found later!',
        '6-8': 'He left gaps in his table, saying what the missing ingredients would be like. Years later they were all discovered — exactly as he had said.',
        '9-12': 'He left gaps for elements nobody had seen, describing what they would be like. Every one of them has since been found.',
      },
    },
    cartes: ['les-atomes', 'de-quoi-est-fait-lair'],
  },
  {
    id: 'nikola-tesla',
    nom: 'Nikola Tesla',
    naissance: 1856,
    mort: 1943,
    apport: {
      fr: {
        '3-5': 'Il a trouvé comment envoyer l’électricité très très loin.',
        '6-8': 'Il a mis au point une sorte d’électricité qui peut voyager sur des centaines de kilomètres sans s’épuiser. C’est elle qui sort des prises, partout dans le monde.',
        '9-12': 'Il a mis au point le courant alternatif, celui qui sort de toutes les prises du monde parce qu’il voyage loin sans s’épuiser.',
      },
      en: {
        '3-5': 'He found how to send electricity very, very far.',
        '6-8': 'He developed a kind of electricity that can travel hundreds of kilometres without fading. It is the kind that comes out of sockets, everywhere in the world.',
        '9-12': 'He developed alternating current — the kind in every socket in the world, because it travels a long way without fading.',
      },
    },
    anecdote: {
      fr: {
        '3-5': 'Il habitait à l’hôtel et donnait à manger aux pigeons tous les jours.',
        '6-8': 'Il vivait à l’hôtel et nourrissait les pigeons de New York. Il disait aimer l’un d’eux plus que tous les autres, comme on aime une personne.',
        '9-12': 'Il vivait à l’hôtel et nourrissait les pigeons de New York. Il disait en aimer un en particulier, « comme un homme aime une femme ».',
      },
      en: {
        '3-5': 'He lived in a hotel and fed the pigeons every day.',
        '6-8': 'He lived in hotels and fed the pigeons of New York. He said he loved one of them more than all the others, the way you love a person.',
        '9-12': 'He lived in hotels and fed the pigeons of New York. He said he loved one of them in particular, “as a man loves a woman”.',
      },
    },
    cartes: ['lelectricite', 'les-aimants'],
  },
  {
    id: 'marie-curie',
    nom: 'Marie Curie',
    naissance: 1867,
    mort: 1934,
    apport: {
      fr: {
        '3-5': 'Elle a trouvé des poudres qui brillent toutes seules dans le noir.',
        '6-8': 'Elle a découvert deux ingrédients tout nouveaux, qui brillent tout seuls sans qu’on les allume. C’est ce qu’on appelle la radioactivité.',
        '9-12': 'Elle a découvert deux éléments nouveaux et compris la radioactivité. Seule personne à avoir reçu le prix Nobel dans deux sciences différentes.',
      },
      en: {
        '3-5': 'She found powders that glow all by themselves in the dark.',
        '6-8': 'She discovered two brand-new ingredients that glow on their own, with nothing switching them on. That is what we call radioactivity.',
        '9-12': 'She discovered two new elements and worked out what radioactivity is. She is the only person to have won a Nobel Prize in two different sciences.',
      },
    },
    anecdote: {
      fr: {
        '3-5': 'Ses cahiers brillent encore aujourd’hui. On les garde dans des boîtes très épaisses.',
        '6-8': 'Ses cahiers de notes sont encore radioactifs aujourd’hui, plus de cent ans après. On les range dans des boîtes de plomb, et il faut une autorisation pour les ouvrir.',
        '9-12': 'Ses carnets de notes sont encore radioactifs aujourd’hui. On les garde dans des boîtes de plomb, et il faut signer une décharge pour les consulter.',
      },
      en: {
        '3-5': 'Her notebooks still glow today. They are kept in very thick boxes.',
        '6-8': 'Her notebooks are still radioactive today, more than a hundred years later. They are kept in lead boxes, and you need permission to open them.',
        '9-12': 'Her notebooks are still radioactive today. They are kept in lead boxes, and you have to sign a waiver to look at them.',
      },
    },
    cartes: ['les-atomes'],
  },
  {
    id: 'albert-einstein',
    nom: 'Albert Einstein',
    naissance: 1879,
    mort: 1955,
    apport: {
      fr: {
        '3-5': 'Il a découvert que le temps ne va pas à la même vitesse partout.',
        '6-8': 'Il a montré quelque chose de très étrange : le temps ne passe pas à la même vitesse partout. Plus on va vite, plus il ralentit.',
        '9-12': 'Il a montré que le temps ne s’écoule pas partout à la même vitesse, et que la matière et l’énergie sont deux formes d’une même chose.',
      },
      en: {
        '3-5': 'He found out that time does not go at the same speed everywhere.',
        '6-8': 'He showed something very strange: time does not pass at the same speed everywhere. The faster you go, the more it slows down.',
        '9-12': 'He showed that time does not flow at the same speed everywhere, and that matter and energy are two forms of the same thing.',
      },
    },
    anecdote: {
      fr: {
        '3-5': 'Il ne connaissait pas son propre numéro de téléphone !',
        '6-8': 'Il ne connaissait pas son numéro de téléphone par cœur. Quand on s’en étonnait, il répondait : pourquoi retenir ce qu’on peut chercher dans un annuaire ?',
        '9-12': 'Il ne connaissait pas son propre numéro de téléphone. « Pourquoi retenir ce qu’on peut trouver dans un annuaire ? » disait-il.',
      },
      en: {
        '3-5': 'He did not know his own telephone number!',
        '6-8': 'He did not know his phone number by heart. When people were surprised, he would answer: why memorise what you can look up in a directory?',
        '9-12': 'He did not know his own telephone number. “Why memorise what you can look up in a directory?” he said.',
      },
    },
    cartes: ['les-trous-noirs', 'lenergie'],
  },
  {
    id: 'alexander-fleming',
    nom: 'Alexander Fleming',
    naissance: 1881,
    mort: 1955,
    apport: {
      fr: {
        '3-5': 'Il a trouvé un médicament qui tue les microbes sans nous faire de mal.',
        '6-8': 'Il a découvert la pénicilline, le premier médicament capable de tuer les microbes à l’intérieur du corps sans abîmer le malade. Elle a sauvé énormément de gens.',
        '9-12': 'Il a découvert la pénicilline, la première substance capable de tuer les microbes dans le corps sans tuer le malade.',
      },
      en: {
        '3-5': 'He found a medicine that kills microbes without hurting us.',
        '6-8': 'He discovered penicillin, the first medicine able to kill microbes inside the body without harming the patient. It has saved a huge number of people.',
        '9-12': 'He discovered penicillin, the first substance able to kill microbes inside the body without killing the patient.',
      },
    },
    anecdote: {
      fr: {
        '3-5': 'Il a trouvé ça parce qu’il avait oublié une assiette sale avant les vacances !',
        '6-8': 'Il est parti en vacances en laissant traîner une boîte sale dans son laboratoire. À son retour, une moisissure avait poussé dedans — et tout autour d’elle, les microbes avaient disparu.',
        '9-12': 'Il l’a trouvée parce qu’il était parti en vacances en laissant traîner une boîte sale. À son retour, une moisissure y avait fait le vide autour d’elle.',
      },
      en: {
        '3-5': 'He found it because he forgot a dirty dish before the holidays!',
        '6-8': 'He went on holiday leaving a dirty dish in his laboratory. When he came back, a mould had grown in it — and all around it, the microbes had gone.',
        '9-12': 'He found it because he went on holiday leaving a dirty dish out. When he came back, a mould had cleared a space all around itself.',
      },
    },
    cartes: ['les-microbes'],
  },
  {
    id: 'grace-hopper',
    nom: 'Grace Hopper',
    naissance: 1906,
    mort: 1992,
    apport: {
      fr: {
        '3-5': 'Grâce à elle, on parle aux ordinateurs avec des mots, pas des chiffres.',
        '6-8': 'Avant elle, il fallait écrire des suites de chiffres pour commander un ordinateur. Elle a inventé le moyen de lui parler avec de vrais mots.',
        '9-12': 'Elle a inventé le moyen d’écrire un programme avec de vrais mots, au lieu de suites de chiffres. On ne programme plus autrement.',
      },
      en: {
        '3-5': 'Thanks to her, we talk to computers with words, not numbers.',
        '6-8': 'Before her, you had to write strings of numbers to command a computer. She invented a way to speak to it with real words.',
        '9-12': 'She invented a way to write programs with real words instead of strings of numbers. Nobody programs any other way now.',
      },
    },
    anecdote: {
      fr: {
        '3-5': 'Un vrai papillon s’était coincé dans la machine. C’était le premier « bug » !',
        '6-8': 'Un jour, la machine est tombée en panne : un papillon de nuit s’était coincé dedans. Son équipe l’a scotché dans le cahier avec la note « premier vrai bug trouvé ». Le mot est resté.',
        '9-12': 'Son équipe a un jour trouvé un papillon de nuit coincé dans la machine. Elle l’a scotché dans le carnet de bord : « premier vrai bug trouvé ».',
      },
      en: {
        '3-5': 'A real moth got stuck in the machine. That was the first “bug”!',
        '6-8': 'One day the machine broke down: a moth had got stuck inside. Her team taped it into the logbook with the note “first actual case of bug being found”. The word stuck.',
        '9-12': 'Her team once found a moth stuck inside the machine. She taped it into the logbook: “first actual case of bug being found”.',
      },
    },
    cartes: ['quest-ce-quun-programme', 'comment-un-ordinateur-se-souvient'],
  },
  {
    id: 'alan-turing',
    nom: 'Alan Turing',
    naissance: 1912,
    mort: 1954,
    apport: {
      fr: {
        '3-5': 'Il a imaginé l’ordinateur avant que ça existe.',
        '6-8': 'Il a imaginé ce qu’était un ordinateur avant qu’on sache en construire un. Et pendant la guerre, il a réussi à casser un code secret que tout le monde croyait impossible à percer.',
        '9-12': 'Il a imaginé ce qu’est un ordinateur avant qu’il en existe, et cassé pendant la guerre un code que l’on croyait indéchiffrable.',
      },
      en: {
        '3-5': 'He imagined the computer before it existed.',
        '6-8': 'He imagined what a computer was before anyone knew how to build one. And during the war he broke a secret code everyone thought impossible to crack.',
        '9-12': 'He worked out what a computer is before any existed, and during the war he broke a code everyone believed unbreakable.',
      },
    },
    anecdote: {
      fr: {
        '3-5': 'Il attachait sa tasse au radiateur pour qu’on ne la lui prenne pas !',
        '6-8': 'Il enchaînait sa tasse au radiateur pour être sûr qu’on ne la lui prenne pas. Et il courait le marathon presque aussi vite que les athlètes olympiques.',
        '9-12': 'Il enchaînait sa tasse au radiateur pour qu’on ne la lui prenne pas. Il courait aussi le marathon presque au niveau olympique.',
      },
      en: {
        '3-5': 'He chained his mug to the radiator so nobody would take it!',
        '6-8': 'He chained his mug to the radiator to be sure nobody took it. And he ran marathons almost as fast as Olympic athletes.',
        '9-12': 'He chained his mug to the radiator so nobody would take it. He also ran marathons at almost Olympic level.',
      },
    },
    cartes: ['quest-ce-quun-programme', 'comment-une-machine-apprend'],
  },
  {
    id: 'katherine-johnson',
    nom: 'Katherine Johnson',
    naissance: 1918,
    mort: 2020,
    apport: {
      fr: {
        '3-5': 'Elle calculait le chemin des fusées, avec un crayon et du papier.',
        '6-8': 'Elle calculait à la main le trajet des vaisseaux de la NASA : à quel moment décoller, où freiner, et à quel endroit ils retomberaient dans l’océan.',
        '9-12': 'Elle calculait à la main les trajectoires des vaisseaux de la NASA : où lancer, quand freiner, où l’on retomberait.',
      },
      en: {
        '3-5': 'She worked out the path of rockets, with a pencil and paper.',
        '6-8': 'She worked out NASA’s spacecraft journeys by hand: when to take off, where to brake, and where they would come down in the ocean.',
        '9-12': 'She worked out NASA’s spacecraft trajectories by hand: where to launch, when to brake, where you would come down.',
      },
    },
    anecdote: {
      fr: {
        '3-5': 'Un astronaute a refusé de partir avant qu’elle vérifie les calculs elle-même.',
        '6-8': 'Avant son vol, l’astronaute John Glenn a refusé de décoller tant qu’elle n’aurait pas vérifié à la main les chiffres donnés par l’ordinateur. Il faisait plus confiance à elle qu’à la machine.',
        '9-12': 'Avant son vol, John Glenn a refusé de décoller tant qu’elle n’aurait pas vérifié à la main les chiffres donnés par l’ordinateur.',
      },
      en: {
        '3-5': 'An astronaut refused to go until she checked the sums herself.',
        '6-8': 'Before his flight, the astronaut John Glenn refused to take off until she had checked the computer’s numbers by hand. He trusted her more than the machine.',
        '9-12': 'Before his flight, John Glenn refused to take off until she had checked the computer’s numbers by hand.',
      },
    },
    cartes: ['comment-avance-une-fusee', 'pourquoi-les-astronautes-flottent'],
  },
  {
    id: 'rosalind-franklin',
    nom: 'Rosalind Franklin',
    naissance: 1920,
    mort: 1958,
    apport: {
      fr: {
        '3-5': 'Elle a pris la photo qui montre la forme cachée dans nos cellules.',
        '6-8': 'Avec des rayons spéciaux, elle a photographié l’ADN — le fil minuscule qui contient le mode d’emploi de tous les êtres vivants. Sa photo a révélé sa forme en double spirale.',
        '9-12': 'Ses photographies aux rayons X ont révélé la forme de l’ADN, cette double spirale qui porte les instructions du vivant.',
      },
      en: {
        '3-5': 'She took the photo showing the shape hidden inside our cells.',
        '6-8': 'Using special rays, she photographed DNA — the tiny thread holding the instructions for every living thing. Her photo revealed its double-spiral shape.',
        '9-12': 'Her X-ray photographs revealed the shape of DNA, the double spiral that carries the instructions of living things.',
      },
    },
    anecdote: {
      fr: {
        '3-5': 'Une seule de ses photos a suffi pour tout comprendre.',
        '6-8': 'Une seule de ses photos, appelée « photo 51 », a suffi. Mais on l’a montrée à ses concurrents sans le lui dire, et ce sont eux qu’on a félicités.',
        '9-12': 'Un seul de ses clichés, appelé « photo 51 », a suffi. Il a été montré à ses concurrents sans qu’elle le sache.',
      },
      en: {
        '3-5': 'Just one of her photos was enough to understand it all.',
        '6-8': 'A single one of her photos, known as “Photo 51”, was enough. But it was shown to her rivals without telling her, and they were the ones congratulated.',
        '9-12': 'A single one of her images, known as “Photo 51”, was enough. It was shown to her rivals without her knowing.',
      },
    },
    cartes: ['pourquoi-on-ressemble-a-ses-parents'],
  },
  {
    id: 'jane-goodall',
    nom: 'Jane Goodall',
    naissance: 1934,
    mort: null,
    apport: {
      fr: {
        '3-5': 'Elle a vécu avec les chimpanzés et vu l’un d’eux fabriquer un outil.',
        '6-8': 'Elle a passé des années dans la forêt à observer les chimpanzés. Elle en a vu un fabriquer un outil pour attraper des termites — ce qu’on croyait réservé aux humains.',
        '9-12': 'Elle a vécu des années parmi les chimpanzés et vu l’un d’eux fabriquer un outil — ce qu’on croyait réservé aux humains.',
      },
      en: {
        '3-5': 'She lived with chimpanzees and saw one of them make a tool.',
        '6-8': 'She spent years in the forest watching chimpanzees. She saw one make a tool to catch termites — something we thought only humans did.',
        '9-12': 'She lived for years among chimpanzees and saw one make a tool — something we believed only humans did.',
      },
    },
    anecdote: {
      fr: {
        '3-5': 'Elle leur donnait des prénoms, comme à des amis.',
        '6-8': 'Elle leur donnait des prénoms au lieu de numéros, et on le lui a reproché : ce n’était pas sérieux, disait-on. Les prénoms sont restés — David Barbe-Grise, Flo, Fifi.',
        '9-12': 'Elle leur donnait des noms au lieu de numéros, ce qu’on lui a reproché. Ces noms sont restés : David Barbe-Grise, Flo, Fifi.',
      },
      en: {
        '3-5': 'She gave them names, like friends.',
        '6-8': 'She gave them names instead of numbers, and was criticised for it: not scientific enough, people said. The names stuck — David Greybeard, Flo, Fifi.',
        '9-12': 'She gave them names instead of numbers, and was criticised for it. The names stuck: David Greybeard, Flo, Fifi.',
      },
    },
    cartes: ['levolution'],
  },
  {
    id: 'stephen-hawking',
    nom: 'Stephen Hawking',
    naissance: 1942,
    mort: 2018,
    apport: {
      fr: {
        '3-5': 'Il a montré que les trous noirs ne sont pas tout à fait noirs.',
        '6-8': 'On croyait que rien ne pouvait sortir d’un trou noir. Il a montré qu’il en fuit tout de même un tout petit peu de lumière — et qu’au bout d’un temps immense, ils finissent par disparaître.',
        '9-12': 'Il a montré que les trous noirs ne sont pas tout à fait noirs : ils laissent fuir un peu de lumière et finissent par s’évaporer.',
      },
      en: {
        '3-5': 'He showed that black holes are not completely black.',
        '6-8': 'People thought nothing could ever escape a black hole. He showed that a tiny bit of light leaks out all the same — and that after an immense time, they disappear.',
        '9-12': 'He showed that black holes are not quite black: they leak a little light and eventually evaporate.',
      },
    },
    anecdote: {
      fr: {
        '3-5': 'Il a fait une fête pour les voyageurs du temps. Personne n’est venu !',
        '6-8': 'Il a organisé une fête réservée aux voyageurs du temps, et n’a envoyé les invitations qu’une fois la fête finie. Si quelqu’un savait voyager dans le temps, il aurait pu venir. Personne n’est venu.',
        '9-12': 'Il a donné une fête pour voyageurs du temps, et n’a envoyé les invitations qu’après. Personne n’est venu.',
      },
      en: {
        '3-5': 'He threw a party for time travellers. Nobody came!',
        '6-8': 'He held a party just for time travellers, and only sent the invitations once it was over. If anyone knew how to travel in time, they could have come. Nobody did.',
        '9-12': 'He threw a party for time travellers and sent the invitations out only afterwards. Nobody came.',
      },
    },
    cartes: ['les-trous-noirs'],
  },
];
