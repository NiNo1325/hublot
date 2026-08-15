import type { Localise } from '@/lib/types';

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
  /** Ce qu'on lui doit, en une phrase. */
  apport: Localise<string>;
  /** Le détail qui accroche, et qu'on retient. */
  anecdote: Localise<string>;
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
      fr: 'Il a écrit le livre qui a donné l’algèbre, et expliqué comment résoudre un problème en suivant des étapes, dans l’ordre.',
      en: 'He wrote the book that gave us algebra, and set out how to solve a problem by following steps, in order.',
    },
    anecdote: {
      fr: 'Son nom, déformé au fil des siècles, est devenu un mot que tu entends tous les jours : algorithme.',
      en: 'His name, worn down over the centuries, became a word you hear every day: algorithm.',
    },
    cartes: ['quest-ce-quun-programme', 'le-zero'],
  },
  {
    id: 'ibn-al-haytham',
    nom: 'Ibn al-Haytham',
    naissance: 965,
    mort: 1040,
    apport: {
      fr: 'Il a compris qu’on voit parce que la lumière entre dans l’œil, et non parce que l’œil enverrait des rayons. Il testait tout par l’expérience.',
      en: 'He worked out that we see because light enters the eye, not because the eye sends out rays. He tested everything by experiment.',
    },
    anecdote: {
      fr: 'Il a fait l’expérience dans une pièce entièrement noire, percée d’un seul petit trou : l’image du dehors se dessinait à l’envers sur le mur.',
      en: 'He ran the experiment in a completely dark room with a single small hole: the world outside appeared upside down on the wall.',
    },
    cartes: ['pourquoi-on-voit-les-couleurs', 'pourquoi-on-a-deux-yeux'],
  },
  {
    id: 'leonard-de-vinci',
    nom: 'Léonard de Vinci',
    naissance: 1452,
    mort: 1519,
    apport: {
      fr: 'Peintre, il disséquait des corps pour mieux les dessiner — et a rempli ses carnets de machines volantes quatre siècles avant l’avion.',
      en: 'A painter, he dissected bodies to draw them better — and filled his notebooks with flying machines four centuries before the aeroplane.',
    },
    anecdote: {
      fr: 'Il écrivait à l’envers, de droite à gauche. Pour lire ses carnets, il faut les tenir devant un miroir.',
      en: 'He wrote backwards, from right to left. To read his notebooks you have to hold them up to a mirror.',
    },
    cartes: ['comment-vole-un-avion', 'comment-les-muscles-bougent'],
  },
  {
    id: 'galilee',
    nom: 'Galilée',
    naissance: 1564,
    mort: 1642,
    apport: {
      fr: 'Il a pointé une lunette vers le ciel et vu que Jupiter avait ses propres lunes : la Terre n’était donc pas le centre de tout.',
      en: 'He pointed a telescope at the sky and saw that Jupiter had moons of its own: so the Earth was not the centre of everything.',
    },
    anecdote: {
      fr: 'Il a baptisé ces lunes du nom de la famille qu’il espérait avoir pour employeur. Il a eu le poste.',
      en: 'He named those moons after the family he hoped would employ him. He got the job.',
    },
    cartes: ['les-planetes', 'pourquoi-tout-tombe'],
  },
  {
    id: 'isaac-newton',
    nom: 'Isaac Newton',
    naissance: 1643,
    mort: 1727,
    apport: {
      fr: 'Il a compris que la force qui fait tomber une pomme est la même que celle qui retient la Lune : la gravitation.',
      en: 'He worked out that the force pulling an apple down is the same one that holds the Moon in place: gravity.',
    },
    anecdote: {
      fr: 'L’histoire de la pomme est vraie — c’est lui qui la racontait. Mais elle ne lui est jamais tombée sur la tête : il l’a simplement vue tomber.',
      en: 'The apple story is true — he told it himself. But it never landed on his head: he simply watched one fall.',
    },
    cartes: ['pourquoi-tout-tombe', 'pourquoi-ca-sarrete'],
  },
  {
    id: 'mary-anning',
    nom: 'Mary Anning',
    naissance: 1799,
    mort: 1847,
    apport: {
      fr: 'Elle a déterré les premiers grands reptiles marins fossiles, et montré que des animaux entiers avaient disparu de la Terre.',
      en: 'She dug up the first great fossil sea reptiles, and showed that whole kinds of animal had vanished from the Earth.',
    },
    anecdote: {
      fr: 'Elle avait douze ans à sa première grande trouvaille. Trop pauvre et trop femme pour entrer dans les sociétés savantes, elle vendait ses fossiles sur la plage.',
      en: 'She was twelve when she made her first great find. Too poor and too female to join the learned societies, she sold her fossils on the beach.',
    },
    cartes: ['les-fossiles', 'le-puzzle-des-os'],
  },
  {
    id: 'charles-darwin',
    nom: 'Charles Darwin',
    naissance: 1809,
    mort: 1882,
    apport: {
      fr: 'Il a expliqué pourquoi les espèces changent au fil du temps : celles qui survivent le mieux transmettent leurs particularités à leurs petits.',
      en: 'He explained why species change over time: those that survive best pass their features on to their young.',
    },
    anecdote: {
      fr: 'Il goûtait les animaux qu’il étudiait. Tatou, puma, tortue géante — à l’université, il appartenait à un club dont c’était tout le programme.',
      en: 'He tasted the animals he studied. Armadillo, puma, giant tortoise — at university he belonged to a club devoted to exactly that.',
    },
    cartes: ['levolution', 'les-oiseaux-sont-des-dinosaures'],
  },
  {
    id: 'ada-lovelace',
    nom: 'Ada Lovelace',
    naissance: 1815,
    mort: 1852,
    apport: {
      fr: 'Elle a écrit le premier programme de l’histoire, pour une machine qui n’a jamais été construite — et compris qu’elle pourrait faire plus que calculer.',
      en: 'She wrote the first program in history, for a machine that was never built — and saw that it could do more than arithmetic.',
    },
    anecdote: {
      fr: 'Fille du poète Byron, elle appelait son travail de la « science poétique ». Un langage de programmation porte aujourd’hui son prénom.',
      en: 'Daughter of the poet Byron, she called her work “poetical science”. A programming language now carries her name.',
    },
    cartes: ['quest-ce-quun-programme', 'comment-compte-un-ordinateur'],
  },
  {
    id: 'louis-pasteur',
    nom: 'Louis Pasteur',
    naissance: 1822,
    mort: 1895,
    apport: {
      fr: 'Il a prouvé que les maladies viennent de microbes, pas de l’air vicié — et inventé le moyen de s’en protéger : le vaccin.',
      en: 'He proved that diseases come from microbes, not from bad air — and invented the way to guard against them: vaccination.',
    },
    anecdote: {
      fr: 'En 1885, un garçon de neuf ans mordu par un chien enragé lui est amené. Son vaccin n’avait jamais été essayé sur un humain. L’enfant a vécu.',
      en: 'In 1885 a nine-year-old boy bitten by a rabid dog was brought to him. His vaccine had never been tried on a human. The boy lived.',
    },
    cartes: ['les-microbes', 'pourquoi-le-lait-devient-yaourt'],
  },
  {
    id: 'dmitri-mendeleiev',
    nom: 'Dmitri Mendeleïev',
    naissance: 1834,
    mort: 1907,
    apport: {
      fr: 'Il a rangé tous les éléments dans un tableau, par familles — celui qui est encore affiché dans les salles de chimie.',
      en: 'He arranged all the elements into a table, by families — the one still pinned up in chemistry classrooms.',
    },
    anecdote: {
      fr: 'Il a laissé des cases vides pour des éléments que personne n’avait vus, en décrivant à quoi ils ressembleraient. On les a tous trouvés depuis.',
      en: 'He left gaps for elements nobody had seen, describing what they would be like. Every one of them has since been found.',
    },
    cartes: ['les-atomes', 'de-quoi-est-fait-lair'],
  },
  {
    id: 'nikola-tesla',
    nom: 'Nikola Tesla',
    naissance: 1856,
    mort: 1943,
    apport: {
      fr: 'Il a mis au point le courant alternatif, celui qui sort de toutes les prises du monde parce qu’il voyage loin sans s’épuiser.',
      en: 'He developed alternating current — the kind in every socket in the world, because it travels a long way without fading.',
    },
    anecdote: {
      fr: 'Il vivait à l’hôtel et nourrissait les pigeons de New York. Il disait en aimer un en particulier, « comme un homme aime une femme ».',
      en: 'He lived in hotels and fed the pigeons of New York. He said he loved one of them in particular, “as a man loves a woman”.',
    },
    cartes: ['lelectricite', 'les-aimants'],
  },
  {
    id: 'marie-curie',
    nom: 'Marie Curie',
    naissance: 1867,
    mort: 1934,
    apport: {
      fr: 'Elle a découvert deux éléments nouveaux et compris la radioactivité. Seule personne à avoir reçu le prix Nobel dans deux sciences différentes.',
      en: 'She discovered two new elements and worked out what radioactivity is. She is the only person to have won a Nobel Prize in two different sciences.',
    },
    anecdote: {
      fr: 'Ses carnets de notes sont encore radioactifs aujourd’hui. On les garde dans des boîtes de plomb, et il faut signer une décharge pour les consulter.',
      en: 'Her notebooks are still radioactive today. They are kept in lead boxes, and you have to sign a waiver to look at them.',
    },
    cartes: ['les-atomes'],
  },
  {
    id: 'albert-einstein',
    nom: 'Albert Einstein',
    naissance: 1879,
    mort: 1955,
    apport: {
      fr: 'Il a montré que le temps ne s’écoule pas partout à la même vitesse, et que la matière et l’énergie sont deux formes d’une même chose.',
      en: 'He showed that time does not flow at the same speed everywhere, and that matter and energy are two forms of the same thing.',
    },
    anecdote: {
      fr: 'Il ne connaissait pas son propre numéro de téléphone. « Pourquoi retenir ce qu’on peut trouver dans un annuaire ? » disait-il.',
      en: 'He did not know his own telephone number. “Why memorise what you can look up in a directory?” he said.',
    },
    cartes: ['les-trous-noirs', 'lenergie'],
  },
  {
    id: 'alexander-fleming',
    nom: 'Alexander Fleming',
    naissance: 1881,
    mort: 1955,
    apport: {
      fr: 'Il a découvert la pénicilline, la première substance capable de tuer les microbes dans le corps sans tuer le malade.',
      en: 'He discovered penicillin, the first substance able to kill microbes inside the body without killing the patient.',
    },
    anecdote: {
      fr: 'Il l’a trouvée parce qu’il était parti en vacances en laissant traîner une boîte sale. À son retour, une moisissure y avait fait le vide autour d’elle.',
      en: 'He found it because he went on holiday leaving a dirty dish out. When he came back, a mould had cleared a space all around itself.',
    },
    cartes: ['les-microbes'],
  },
  {
    id: 'grace-hopper',
    nom: 'Grace Hopper',
    naissance: 1906,
    mort: 1992,
    apport: {
      fr: 'Elle a inventé le moyen d’écrire un programme avec de vrais mots, au lieu de suites de chiffres. On ne programme plus autrement.',
      en: 'She invented a way to write programs with real words instead of strings of numbers. Nobody programs any other way now.',
    },
    anecdote: {
      fr: 'Son équipe a un jour trouvé un papillon de nuit coincé dans la machine. Elle l’a scotché dans le carnet de bord : « premier vrai bug trouvé ».',
      en: 'Her team once found a moth stuck inside the machine. She taped it into the logbook: “first actual case of bug being found”.',
    },
    cartes: ['quest-ce-quun-programme', 'comment-un-ordinateur-se-souvient'],
  },
  {
    id: 'alan-turing',
    nom: 'Alan Turing',
    naissance: 1912,
    mort: 1954,
    apport: {
      fr: 'Il a imaginé ce qu’est un ordinateur avant qu’il en existe, et cassé pendant la guerre un code que l’on croyait indéchiffrable.',
      en: 'He worked out what a computer is before any existed, and during the war he broke a code everyone believed unbreakable.',
    },
    anecdote: {
      fr: 'Il enchaînait sa tasse au radiateur pour qu’on ne la lui prenne pas. Il courait aussi le marathon presque au niveau olympique.',
      en: 'He chained his mug to the radiator so nobody would take it. He also ran marathons at almost Olympic level.',
    },
    cartes: ['quest-ce-quun-programme', 'comment-une-machine-apprend'],
  },
  {
    id: 'katherine-johnson',
    nom: 'Katherine Johnson',
    naissance: 1918,
    mort: 2020,
    apport: {
      fr: 'Elle calculait à la main les trajectoires des vaisseaux de la NASA : où lancer, quand freiner, où l’on retomberait.',
      en: 'She worked out NASA’s spacecraft trajectories by hand: where to launch, when to brake, where you would come down.',
    },
    anecdote: {
      fr: 'Avant son vol, John Glenn a refusé de décoller tant qu’elle n’aurait pas vérifié à la main les chiffres donnés par l’ordinateur.',
      en: 'Before his flight, John Glenn refused to take off until she had checked the computer’s numbers by hand.',
    },
    cartes: ['comment-avance-une-fusee', 'pourquoi-les-astronautes-flottent'],
  },
  {
    id: 'rosalind-franklin',
    nom: 'Rosalind Franklin',
    naissance: 1920,
    mort: 1958,
    apport: {
      fr: 'Ses photographies aux rayons X ont révélé la forme de l’ADN, cette double spirale qui porte les instructions du vivant.',
      en: 'Her X-ray photographs revealed the shape of DNA, the double spiral that carries the instructions of living things.',
    },
    anecdote: {
      fr: 'Un seul de ses clichés, appelé « photo 51 », a suffi. Il a été montré à ses concurrents sans qu’elle le sache.',
      en: 'A single one of her images, known as “Photo 51”, was enough. It was shown to her rivals without her knowing.',
    },
    cartes: ['pourquoi-on-ressemble-a-ses-parents'],
  },
  {
    id: 'jane-goodall',
    nom: 'Jane Goodall',
    naissance: 1934,
    mort: null,
    apport: {
      fr: 'Elle a vécu des années parmi les chimpanzés et vu l’un d’eux fabriquer un outil — ce qu’on croyait réservé aux humains.',
      en: 'She lived for years among chimpanzees and saw one make a tool — something we believed only humans did.',
    },
    anecdote: {
      fr: 'Elle leur donnait des noms au lieu de numéros, ce qu’on lui a reproché. Ces noms sont restés : David Barbe-Grise, Flo, Fifi.',
      en: 'She gave them names instead of numbers, and was criticised for it. The names stuck: David Greybeard, Flo, Fifi.',
    },
    cartes: ['levolution'],
  },
  {
    id: 'stephen-hawking',
    nom: 'Stephen Hawking',
    naissance: 1942,
    mort: 2018,
    apport: {
      fr: 'Il a montré que les trous noirs ne sont pas tout à fait noirs : ils laissent fuir un peu de lumière et finissent par s’évaporer.',
      en: 'He showed that black holes are not quite black: they leak a little light and eventually evaporate.',
    },
    anecdote: {
      fr: 'Il a donné une fête pour voyageurs du temps, et n’a envoyé les invitations qu’après. Personne n’est venu.',
      en: 'He threw a party for time travellers and sent the invitations out only afterwards. Nobody came.',
    },
    cartes: ['les-trous-noirs'],
  },
];
