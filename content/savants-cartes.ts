/**
 * Les savants prisonniers, et les cartes qui les libèrent.
 *
 * La règle est asymétrique, et c'est elle qui commande tout le fichier : une
 * carte n'a **qu'un** savant, mais un savant peut tenir **plusieurs** cartes.
 * Newton n'explique pas seulement la chute des corps, il explique aussi les
 * marées et le poids ; l'obliger à choisir aurait forcé trois autres noms sur
 * des sujets qui ne sont pas les leurs.
 *
 * C'est ce qui distingue ce fichier d'une simple table : chaque ligne dit ce que
 * le savant a **réellement** fait sur cette carte-là. Le rattachement est
 * honnête ou il n'est rien — parfois c'est « il l'a décrit le premier » et non
 * « il l'a découvert ». Une attribution inventée serait une erreur scientifique
 * servie à un enfant, ce que cette application existe pour ne pas faire.
 *
 * Le coût en clés d'une cellule se déduit du nombre de cartes tenues : un savant
 * qui tient trois cartes en coûte trois. Le total est donc exactement le nombre
 * de cartes du catalogue — libérer tout le monde, c'est avoir répondu juste à
 * toutes les questions au moins une fois.
 *
 * `aRevoir` marque les rattachements les plus discutables : le lien est
 * indirect, ou le savant obscur. Ils tiennent, mais méritent un arbitrage.
 */
import type { Localise } from '@/lib/types';

export interface CarteTenue {
  /** Identifiant de carte, dans `content/cards.ts`. */
  id: string;
  /** Ce que le savant a réellement fait sur ce sujet précis. */
  lien: Localise<string>;
}

export interface SavantPrisonnier {
  /** Slug : nommera aussi son illustration, `public/images/wall-of-fame/<id>.webp`. */
  id: string;
  nom: string;
  naissance: number;
  /** `null` pour une personne vivante. Négatif avant notre ère. */
  mort: number | null;
  /**
   * Ce pour quoi il est connu, en dehors de l'application.
   *
   * `lien` dit ce qu'il a fait *sur cette carte-là* ; `portrait` dit qui il
   * est. Sans lui, un enfant qui délivre Newton n'apprend de lui que la chute
   * des corps et les marées — jamais qu'il a aussi décomposé la lumière et
   * inventé le calcul infinitésimal. La fiche donnait le détail sans jamais
   * donner la mesure.
   *
   * Un seul texte, non décliné par âge : c'est la règle de cet écran, où les
   * explications de cartes n'en ont pas non plus. Trois ou quatre phrases,
   * assez brèves pour être dites d'un souffle par la voix de Lumi, assez
   * précises pour ne pas se réduire à « un grand savant ».
   */
  portrait: Localise<string>;
  /** Les cartes dont il est le savant. Au moins une. */
  cartes: CarteTenue[];
  /** Le rattachement mérite une relecture. */
  aRevoir?: boolean;
}

export const savantsPrisonniers: SavantPrisonnier[] = [
  // ── Les grandes figures, qui tiennent plusieurs cellules ─────────────────
  {
    id: 'archimede', nom: 'Archimède', naissance: -287, mort: -212,
    portrait: {
      fr: 'Le plus grand savant de l’Antiquité grecque. Il a posé la loi du levier, trouvé la poussée qui porte les bateaux, et calculé l’aire du cercle en le coinçant entre deux polygones — une idée qui annonce le calcul moderne de deux mille ans. La légende raconte qu’il défendit sa ville, Syracuse, avec des machines de guerre de son invention.',
      en: 'The greatest scientist of ancient Greece. He set out the law of the lever, found the upward push that carries boats, and worked out the area of a circle by trapping it between two polygons — an idea that foreshadows modern calculus by two thousand years. Legend says he defended his city, Syracuse, with war machines of his own making.',
    },
    cartes: [
      { id: 'les-leviers', lien: { fr: 'Il a énoncé la loi du levier — « donnez-moi un point d’appui et je soulèverai le monde ».', en: 'He stated the law of the lever — “give me a place to stand and I will lift the world”.' } },
      { id: 'les-poulies', lien: { fr: 'Il aurait tiré un navire chargé à lui seul, avec un jeu de poulies.', en: 'He is said to have pulled a loaded ship on his own, with a set of pulleys.' } },
      { id: 'pourquoi-les-bateaux-flottent', lien: { fr: 'Il a trouvé la poussée qui soulève tout corps plongé dans l’eau.', en: 'He found the upward push that lifts any object placed in water.' } },
      { id: 'pourquoi-on-flotte-mieux-dans-la-mer', lien: { fr: 'Sa poussée est d’autant plus forte que l’eau est lourde — et l’eau salée l’est.', en: 'His push is all the stronger when the water is heavy — and salt water is.' } },
      { id: 'les-grands-nombres', lien: { fr: 'Il a écrit un livre entier pour compter les grains de sable de l’univers.', en: 'He wrote a whole book to count the grains of sand in the universe.' } },
    ],
  },
  {
    id: 'isaac-newton', nom: 'Isaac Newton', naissance: 1643, mort: 1727,
    portrait: {
      fr: 'Il a montré que la même force fait tomber une pomme et retient la Lune sur son orbite : une seule loi pour le ciel et pour la Terre, ce que personne n’avait osé avant lui. Il a aussi énoncé les trois lois du mouvement, décomposé la lumière blanche avec un prisme, et inventé le calcul infinitésimal, en même temps que Leibniz et sans le savoir.',
      en: 'He showed that the very same force makes an apple fall and holds the Moon in its orbit: one single law for the heavens and for the Earth, which nobody had dared before him. He also set out the three laws of motion, split white light with a prism, and invented calculus, at the same time as Leibniz and without knowing it.',
    },
    cartes: [
      { id: 'pourquoi-tout-tombe', lien: { fr: 'Il a compris que la pomme et la Lune tombent pour la même raison.', en: 'He understood that the apple and the Moon fall for the very same reason.' } },
      { id: 'les-marees', lien: { fr: 'Sa gravitation explique que la Lune tire sur les océans.', en: 'His gravitation explains that the Moon pulls on the oceans.' } },
      { id: 'pourquoi-ca-sarrete', lien: { fr: 'Ses lois du mouvement disent qu’un objet ne s’arrête que si quelque chose le freine.', en: 'His laws of motion say that an object only stops if something slows it down.' } },
      { id: 'le-poids-et-la-masse', lien: { fr: 'Il a séparé le poids, qui dépend de l’endroit, et la masse, qui ne change jamais.', en: 'He separated weight, which depends on where you are, from mass, which never changes.' } },
    ],
  },
  {
    id: 'galilee', nom: 'Galilée', naissance: 1564, mort: 1642,
    portrait: {
      fr: 'Il a pointé une lunette vers le ciel et tout changé : les cratères de la Lune, les lunes de Jupiter, les phases de Vénus. Il a aussi montré que deux corps tombent à la même vitesse et que le mouvement se garde tout seul. L’Église l’a condamné pour avoir soutenu que la Terre tourne autour du Soleil.',
      en: 'He pointed a telescope at the sky and changed everything: craters on the Moon, moons around Jupiter, the phases of Venus. He also showed that two bodies fall at the same speed, and that motion keeps itself going. The Church condemned him for holding that the Earth turns around the Sun.',
    },
    cartes: [
      { id: 'les-phases-de-la-lune', lien: { fr: 'Il a dessiné la Lune à la lunette, ses cratères et ses phases, nuit après nuit.', en: 'He drew the Moon through his telescope, its craters and its phases, night after night.' } },
      { id: 'les-planetes', lien: { fr: 'Il a vu que Jupiter a des lunes : tout ne tourne donc pas autour de la Terre.', en: 'He saw that Jupiter has moons: so not everything turns around the Earth.' } },
    ],
  },
  {
    id: 'louis-pasteur', nom: 'Louis Pasteur', naissance: 1822, mort: 1895,
    portrait: {
      fr: 'Il a prouvé que la fermentation et les maladies viennent d’êtres vivants microscopiques, et non d’une génération spontanée. De là sont venus la pasteurisation, l’asepsie à l’hôpital, et les premiers vaccins fabriqués en laboratoire — dont celui contre la rage, essayé sur un enfant mordu en 1885.',
      en: 'He proved that fermentation and disease come from microscopic living things, not from spontaneous generation. From that came pasteurisation, clean practice in hospitals, and the first vaccines made in a laboratory — including the one against rabies, first tried on a bitten child in 1885.',
    },
    cartes: [
      { id: 'pourquoi-le-lait-devient-yaourt', lien: { fr: 'Il a montré que ce sont des micro-organismes qui font tourner le lait, et comment les maîtriser.', en: 'He showed that tiny living things turn the milk, and how to tame them.' } },
    ],
  },
  {
    id: 'charles-darwin', nom: 'Charles Darwin', naissance: 1809, mort: 1882,
    portrait: {
      fr: 'Après cinq ans de voyage autour du monde sur le Beagle, il a compris que les espèces changent lentement, et que ce qui les fait changer est simple : ceux qui survivent le mieux laissent le plus de descendants. Il a attendu vingt ans avant de publier, sachant l’orage qu’il déclencherait.',
      en: 'After five years sailing around the world on the Beagle, he understood that species change slowly, and that what changes them is simple: those that survive best leave the most offspring. He waited twenty years before publishing, knowing the storm it would raise.',
    },
    cartes: [
      { id: 'levolution', lien: { fr: 'Il a expliqué comment les espèces se transforment lentement, génération après génération.', en: 'He explained how species slowly change, generation after generation.' } },
      { id: 'le-corail-batisseur', lien: { fr: 'Sa première grande théorie explique comment un atoll se bâtit sur un volcan qui s’enfonce.', en: 'His first great theory explains how an atoll builds itself on a sinking volcano.' } },
    ],
  },
  {
    id: 'nikola-tesla', nom: 'Nikola Tesla', naissance: 1856, mort: 1943,
    portrait: {
      fr: 'Ingénieur d’origine serbe, il a imposé le courant alternatif — celui qui sort de nos prises — contre le courant continu d’Edison, en inventant le moteur qui tourne avec lui, et en s’appuyant sur les transformateurs qui le rendent transportable sur de longues distances. Il a aussi travaillé sur les ondes radio et l’éclairage, avec une imagination qui dépassait souvent ses moyens.',
      en: 'An engineer of Serbian family, he made alternating current win — the one that comes out of our sockets — against Edison’s direct current, by inventing the motor that turns with it, and by leaning on the transformers that let it travel long distances. He also worked on radio waves and lighting, with an imagination that often outran his means.',
    },
    cartes: [
      { id: 'lelectricite', lien: { fr: 'Il a imposé le courant alternatif, celui qui arrive aujourd’hui dans les prises.', en: 'He made alternating current win — the one that reaches our sockets today.' } },
      { id: 'les-aimants', lien: { fr: 'Ses moteurs tournent grâce à un champ magnétique qui tourne aussi.', en: 'His motors turn thanks to a magnetic field that turns as well.' } },
    ],
  },
  {
    id: 'ibn-al-haytham', nom: 'Ibn al-Haytham', naissance: 965, mort: 1040,
    portrait: {
      fr: 'Savant arabe de Bassora, il a compris que nous voyons parce que la lumière entre dans l’œil, et non parce que l’œil enverrait des rayons — l’erreur des Grecs. Son Traité d’optique repose sur des expériences reproductibles, ce qui en fait l’un des tout premiers livres de science au sens moderne.',
      en: 'An Arab scholar from Basra, he understood that we see because light enters the eye, and not because the eye sends out rays — the Greeks’ mistake. His Book of Optics rests on experiments anyone can repeat, which makes it one of the very first works of science in the modern sense.',
    },
    cartes: [
      { id: 'pourquoi-on-voit-les-couleurs', lien: { fr: 'Il a établi que la lumière entre dans l’œil, et non l’inverse comme on le croyait.', en: 'He established that light enters the eye, and not the other way round as people believed.' } },
      { id: 'pourquoi-on-a-deux-yeux', lien: { fr: 'Il a étudié le premier ce que voient nos deux yeux à la fois.', en: 'He was the first to study what our two eyes see at the same time.' } },
    ],
  },
  {
    id: 'albert-einstein', nom: 'Albert Einstein', naissance: 1879, mort: 1955,
    portrait: {
      fr: 'Il a montré que le temps ne s’écoule pas partout à la même vitesse, que la matière et l’énergie sont deux visages d’une même chose, et que la gravité est une courbure de l’espace et du temps. Son prix Nobel, pourtant, récompense un autre travail : l’explication de l’effet photoélectrique, à la naissance de la physique quantique.',
      en: 'He showed that time does not flow at the same rate everywhere, that matter and energy are two faces of one thing, and that gravity is a curving of space and of time. His Nobel Prize, though, rewards different work: his account of the photoelectric effect, at the birth of quantum physics.',
    },
    cartes: [
      { id: 'les-eclipses', lien: { fr: 'C’est pendant une éclipse qu’on a vérifié sa théorie : la lumière des étoiles se courbe près du Soleil.', en: 'It was during an eclipse that his theory was checked: starlight bends near the Sun.' } },
      { id: 'lenergie', lien: { fr: 'Il a écrit l’équation qui relie l’énergie et la masse.', en: 'He wrote the equation that ties energy to mass.' } },
    ],
  },
  {
    id: 'katherine-johnson', nom: 'Katherine Johnson', naissance: 1918, mort: 2020,
    portrait: {
      fr: 'Mathématicienne à la NASA, elle calculait à la main les trajectoires des premiers vols habités américains. Avant son vol de 1962, John Glenn a exigé qu’elle vérifie en personne les chiffres sortis de l’ordinateur. Femme noire dans une Amérique ségréguée, elle a longtemps dû prendre ses repas et se laver les mains dans des locaux séparés de ceux de ses collègues.',
      en: 'A mathematician at NASA, she worked out by hand the flight paths of the first American crewed missions. Before his 1962 flight, John Glenn insisted that she check the computer’s figures herself. A Black woman in a segregated America, she long had to eat and wash in rooms kept apart from her colleagues’.',
    },
    cartes: [
      { id: 'pourquoi-les-astronautes-flottent', lien: { fr: 'Elle a calculé à la main les trajectoires qui mettent une capsule en orbite, donc en chute libre.', en: 'She worked out by hand the paths that put a capsule in orbit, and so in free fall.' } },
      { id: 'comment-avance-une-fusee', lien: { fr: 'Ses calculs disaient quand allumer et couper les moteurs, à la seconde près.', en: 'Her calculations said when to fire and cut the engines, to the second.' } },
    ],
  },
  {
    id: 'mary-anning', nom: 'Mary Anning', naissance: 1799, mort: 1847,
    portrait: {
      fr: 'Fille d’un menuisier pauvre, elle a passé sa vie à fouiller les falaises de Lyme Regis, en Angleterre, et y a dégagé le premier squelette complet d’ichtyosaure, dont son frère avait trouvé le crâne, puis seule celui du plésiosaure. Ses découvertes ont nourri toute la paléontologie naissante — mais, parce qu’elle était femme, on lui refusait de signer les articles qu’elle rendait possibles.',
      en: 'The daughter of a poor carpenter, she spent her life searching the cliffs of Lyme Regis, in England, and freed there the first complete ichthyosaur skeleton, whose skull her brother had found, then on her own that of a plesiosaur. Her finds fed the whole young science of palaeontology — but, because she was a woman, she was refused her name on the papers she made possible.',
    },
    cartes: [
      { id: 'les-fossiles', lien: { fr: 'Elle a passé sa vie à extraire des fossiles de la falaise, et à les reconnaître mieux que les savants.', en: 'She spent her life pulling fossils out of the cliff, and knowing them better than the scholars.' } },
      { id: 'pas-tous-des-dinosaures', lien: { fr: 'Elle a découvert des reptiles marins et volants — qui ne sont justement pas des dinosaures.', en: 'She found sea and flying reptiles — which are precisely not dinosaurs.' } },
    ],
  },

  // ── Les sciences de la Terre ─────────────────────────────────────────────
  {
    id: 'pierre-perrault', nom: 'Pierre Perrault', naissance: 1611, mort: 1680,
    portrait: {
      fr: 'Il a fait un calcul que personne n’avait fait : mesurer la pluie tombée sur le bassin de la Seine, puis la comparer à l’eau qui coule dans le fleuve. La pluie suffisait largement. Il a ainsi prouvé que les rivières viennent du ciel, et fondé du même coup l’étude scientifique de l’eau.',
      en: 'He made a calculation nobody had made: measure the rain falling on the Seine basin, then compare it with the water flowing in the river. The rain was more than enough. He proved this way that rivers come from the sky, and founded the scientific study of water at the same stroke.',
    },
    cartes: [{ id: 'cycle-de-leau', lien: { fr: 'Il a mesuré la pluie tombée sur un bassin et prouvé qu’elle suffit à faire couler les rivières.', en: 'He measured the rain falling on a valley and proved it is enough to keep the rivers flowing.' } }],
  },
  {
    id: 'haroun-tazieff', nom: 'Haroun Tazieff', naissance: 1914, mort: 1998,
    portrait: {
      fr: 'Volcanologue et cinéaste, il s’est approché des cratères en éruption plus près que quiconque, caméra à la main, pour rapporter des images qui ont fait connaître les volcans au grand public. Il a aussi étudié les gaz volcaniques et milité pour la surveillance des volcans habités.',
      en: 'A volcanologist and film-maker, he went closer to erupting craters than anyone, camera in hand, bringing back the images that made volcanoes known to the wider public. He also studied volcanic gases and campaigned for the monitoring of volcanoes people live on.',
    },
    cartes: [{ id: 'les-volcans', lien: { fr: 'Il est descendu filmer les volcans en éruption, au plus près de la lave.', en: 'He climbed down to film erupting volcanoes, as close to the lava as he could get.' } }],
  },
  {
    id: 'inge-lehmann', nom: 'Inge Lehmann', naissance: 1888, mort: 1993,
    portrait: {
      fr: 'Sismologue danoise, elle a remarqué que certaines ondes de tremblement de terre arrivaient là où elles n’auraient pas dû. La seule explication tenait : au centre de la Terre, il y a une boule solide au milieu du noyau liquide. Elle avait raison, et elle a travaillé jusqu’à plus de quatre-vingt-dix ans.',
      en: 'A Danish seismologist, she noticed that some earthquake waves arrived where they had no business arriving. Only one explanation held: at the centre of the Earth there is a solid inner ball inside the liquid core. She was right, and she went on working past the age of ninety.',
    },
    cartes: [
      { id: 'pourquoi-la-terre-tremble', lien: { fr: 'En écoutant les séismes traverser la Terre, elle a découvert qu’elle a une graine solide au centre.', en: 'By listening to earthquakes crossing the Earth, she discovered it has a solid seed at its centre.' } },
      { id: 'la-vague-geante', lien: { fr: 'Ce sont les séismes qu’elle étudiait qui soulèvent les vagues géantes.', en: 'The earthquakes she studied are the very ones that raise giant waves.' } },
    ],
  },
  {
    id: 'gaspard-gustave-coriolis', nom: 'Gaspard-Gustave Coriolis', naissance: 1792, mort: 1843,
    portrait: {
      fr: 'Ingénieur français, il a décrit la déviation que subit tout objet en mouvement sur une surface qui tourne. Sur la Terre, cette force explique le sens des cyclones et la courbure des vents. On lui doit aussi les mots « travail » et « énergie cinétique » tels que la physique les emploie aujourd’hui.',
      en: 'A French engineer, he described the sideways drift felt by anything moving on a spinning surface. On Earth, that force explains which way cyclones turn and how winds curve. We also owe him the terms “work” and “kinetic energy” as physics uses them today.',
    },
    cartes: [
      { id: 'le-vent', lien: { fr: 'Il a décrit la force qui dévie les vents parce que la Terre tourne sous eux.', en: 'He described the force that bends the winds because the Earth turns beneath them.' } },
      { id: 'louragan', lien: { fr: 'C’est cette même force qui fait tourner les ouragans, et toujours dans le même sens.', en: 'That same force is what makes hurricanes spin, always the same way round.' } },
    ],
  },
  {
    id: 'lord-rayleigh', nom: 'Lord Rayleigh', naissance: 1842, mort: 1919,
    portrait: {
      fr: 'Physicien anglais, il a expliqué pourquoi le ciel est bleu : les plus petites particules de l’air dispersent bien plus la lumière bleue que la rouge. Il a aussi découvert l’argon avec William Ramsay, ce qui lui a valu le prix Nobel, et écrit un traité sur le son qui fait encore autorité.',
      en: 'An English physicist, he explained why the sky is blue: the smallest particles in the air scatter blue light far more than red. He also discovered argon with William Ramsay, which won him the Nobel Prize, and wrote a treatise on sound that still stands.',
    },
    cartes: [
      { id: 'pourquoi-le-ciel-est-bleu', lien: { fr: 'Il a calculé pourquoi l’air disperse le bleu plus que le rouge — cette diffusion porte son nom.', en: 'He calculated why air scatters blue more than red — that scattering carries his name.' } },
      { id: 'la-forme-des-gouttes-de-pluie', lien: { fr: 'Il a expliqué comment un filet d’eau se coupe en gouttes bien rondes.', en: 'He explained how a thread of water breaks into nicely round drops.' } },
    ],
  },
  {
    id: 'edmond-halley', nom: 'Edmond Halley', naissance: 1656, mort: 1742,
    portrait: {
      fr: 'Astronome anglais, il a compris que plusieurs comètes vues à des siècles d’écart n’en faisaient qu’une, revenant tous les soixante-seize ans — et il a prédit son retour, vérifié après sa mort. C’est aussi lui qui a payé de sa poche l’impression des Principia de Newton, sans quoi le livre n’aurait peut-être jamais paru.',
      en: 'An English astronomer, he realised that several comets seen centuries apart were in fact one, returning every seventy-six years — and he predicted its return, confirmed after his death. It was also he who paid out of his own pocket to print Newton’s Principia, without which the book might never have appeared.',
    },
    cartes: [
      { id: 'pourquoi-la-mer-est-salee', lien: { fr: 'Il a proposé de peser le sel des mers pour deviner depuis combien de temps les fleuves s’y déversent.', en: 'He suggested weighing the salt of the seas to guess how long the rivers have poured into them.' } },
      { id: 'les-etoiles-filantes', lien: { fr: 'Il a compris que les comètes reviennent — et ce sont leurs poussières qui filent dans le ciel.', en: 'He understood that comets come back — and it is their dust that streaks across the sky.' } },
    ],
  },
  {
    id: 'mikhail-lomonossov', nom: 'Mikhaïl Lomonossov', naissance: 1711, mort: 1765,
    portrait: {
      fr: 'Fils de pêcheur devenu le premier grand savant russe, il touchait à tout : chimie, physique, langue, poésie. Il a énoncé que rien ne se perd dans une réaction chimique avant Lavoisier, et deviné que Vénus possède une atmosphère en l’observant passer devant le Soleil. L’université de Moscou porte son nom.',
      en: 'A fisherman’s son who became Russia’s first great scientist, he turned his hand to everything: chemistry, physics, language, poetry. He stated that nothing is lost in a chemical reaction before Lavoisier did, and guessed that Venus has an atmosphere by watching it cross the Sun. Moscow University carries his name.',
    },
    cartes: [{ id: 'dou-vient-le-petrole', lien: { fr: 'Il a soutenu, bien avant les autres, que le pétrole vient de restes d’êtres vivants enfouis.', en: 'He argued, long before anyone else, that oil comes from buried remains of living things.' } }],
  },
  {
    id: 'selman-waksman', nom: 'Selman Waksman', naissance: 1888, mort: 1973,
    portrait: {
      fr: 'Biologiste américain né en Ukraine, il a cherché les remèdes non pas dans les laboratoires mais dans la terre, où vivent des micro-organismes qui se combattent entre eux. Son étudiant Albert Schatz et lui en ont tiré la streptomycine, premier traitement efficace contre la tuberculose, et c’est lui qui a forgé le mot « antibiotique ».',
      en: 'An American biologist born in Ukraine, he looked for cures not in laboratories but in soil, where micro-organisms fight one another. His student Albert Schatz and he drew streptomycin from it, the first effective treatment for tuberculosis, and it was he who coined the word “antibiotic”.',
    },
    cartes: [{ id: 'le-sol-est-vivant', lien: { fr: 'Il a fouillé la vie microscopique du sol et en a tiré des antibiotiques.', en: 'He dug into the tiny life of the soil and drew antibiotics from it.' } }],
  },

  // ── L'espace ─────────────────────────────────────────────────────────────
  {
    id: 'nicolas-copernic', nom: 'Nicolas Copernic', naissance: 1473, mort: 1543,
    portrait: {
      fr: 'Chanoine polonais, il a osé mettre le Soleil au centre et la Terre en orbite autour de lui, à rebours de mille cinq cents ans d’astronomie. Il a attendu d’être mourant pour publier son livre, en 1543. On raconte qu’il n’en a vu qu’un exemplaire, le jour de sa mort.',
      en: 'A Polish canon, he dared to put the Sun at the centre and the Earth in orbit around it, against fifteen hundred years of astronomy. He waited until he was dying to publish his book, in 1543. The story goes that he saw a single copy of it, on the day he died.',
    },
    cartes: [{ id: 'jour-et-nuit', lien: { fr: 'Il a osé dire que c’est la Terre qui tourne, et non le Soleil qui en fait le tour.', en: 'He dared to say that it is the Earth that turns, and not the Sun that goes round it.' } }],
  },
  {
    id: 'milutin-milankovic', nom: 'Milutin Milanković', naissance: 1879, mort: 1958,
    portrait: {
      fr: 'Ingénieur et astronome serbe, il a calculé à la main, pendant des années, comment l’orbite et l’inclinaison de la Terre varient sur des dizaines de milliers d’années. Ces lents balancements commandent le retour des âges glaciaires. On l’a longtemps ignoré ; les carottes prélevées au fond des océans lui ont donné raison bien après sa mort.',
      en: 'A Serbian engineer and astronomer, he spent years calculating by hand how the Earth’s orbit and tilt vary over tens of thousands of years. Those slow swings govern the return of the ice ages. He was long ignored; cores drilled from the ocean floor proved him right well after his death.',
    },
    cartes: [{ id: 'pourquoi-il-y-a-des-saisons', lien: { fr: 'Il a calculé comment l’inclinaison de la Terre règle les saisons et les glaciations.', en: 'He calculated how the tilt of the Earth sets the seasons and the ice ages.' } }],
  },
  {
    id: 'cecilia-payne', nom: 'Cecilia Payne-Gaposchkin', naissance: 1900, mort: 1979,
    portrait: {
      fr: 'Dans sa thèse de 1925, cette astronome britanno-américaine a démontré que les étoiles sont faites presque entièrement d’hydrogène et d’hélium. Le résultat était si contraire aux idées du temps qu’on l’a poussée à le présenter comme douteux. Quatre ans plus tard, tout le monde admettait qu’elle avait raison.',
      en: 'In her 1925 thesis, this British-American astronomer showed that stars are made almost entirely of hydrogen and helium. The result cut so hard against the thinking of the day that she was pressed to present it as doubtful. Four years later, everyone agreed she had been right.',
    },
    cartes: [{ id: 'les-etoiles', lien: { fr: 'Elle a découvert que les étoiles sont faites d’hydrogène — personne ne voulait la croire.', en: 'She discovered that stars are made of hydrogen — nobody wanted to believe her.' } }],
  },
  {
    id: 'stephen-hawking', nom: 'Stephen Hawking', naissance: 1942, mort: 2018,
    portrait: {
      fr: 'Physicien britannique, il a démontré avec Roger Penrose que la relativité impose des singularités — des points où l’espace et le temps cessent d’avoir un sens — puis que les trous noirs eux-mêmes s’évaporent, par un rayonnement qui porte son nom. Atteint d’une maladie qui l’a peu à peu privé de tout mouvement, il a travaillé cinquante ans de plus que les médecins ne le prévoyaient, et fait lire la cosmologie au monde entier.',
      en: 'A British physicist, he proved with Roger Penrose that relativity forces singularities — points where space and time stop making sense — and then that black holes themselves evaporate, through a radiation that carries his name. Struck by an illness that took away his movement piece by piece, he worked fifty years longer than his doctors expected, and got the whole world reading cosmology.',
    },
    cartes: [{ id: 'les-trous-noirs', lien: { fr: 'Il a montré qu’un trou noir n’est pas tout à fait noir : il s’évapore lentement.', en: 'He showed that a black hole is not quite black: it slowly evaporates.' } }],
  },
  {
    id: 'serguei-korolev', nom: 'Sergueï Korolev', naissance: 1907, mort: 1966,
    portrait: {
      fr: 'Ingénieur en chef du programme spatial soviétique, il a lancé Spoutnik, le premier satellite, puis Gagarine, le premier homme dans l’espace. Son nom fut tenu secret toute sa vie : on ne parlait que du « concepteur en chef ». Il avait auparavant passé six ans dans les camps staliniens.',
      en: 'Chief engineer of the Soviet space programme, he launched Sputnik, the first satellite, then Gagarin, the first man in space. His name was kept secret all his life: people spoke only of “the chief designer”. He had earlier spent six years in Stalin’s camps.',
    },
    cartes: [{ id: 'la-face-cachee-de-la-lune', lien: { fr: 'Il a conçu la sonde qui a photographié pour la première fois la face cachée de la Lune.', en: 'He designed the probe that first photographed the far side of the Moon.' } }],
  },

  // ── Le vivant et le corps ────────────────────────────────────────────────
  {
    id: 'jan-baptist-van-helmont', nom: 'Jan Baptist van Helmont', naissance: 1580, mort: 1644,
    portrait: {
      fr: 'Médecin flamand, il a planté un saule dans un pot de terre pesée et l’a arrosé cinq ans. L’arbre avait pris soixante-quatorze kilos, la terre presque rien : la plante ne mange donc pas le sol. Il a aussi inventé le mot « gaz ».',
      en: 'A Flemish physician, he planted a willow in a pot of weighed soil and watered it for five years. The tree had gained seventy-four kilos, the soil almost nothing: so a plant does not eat the ground. He also invented the word “gas”.',
    },
    cartes: [{ id: 'comment-poussent-les-plantes', lien: { fr: 'Il a pesé un saule et sa terre pendant cinq ans pour savoir d’où venait le bois.', en: 'He weighed a willow and its soil for five years, to find out where the wood came from.' } }],
  },
  {
    id: 'william-harvey', nom: 'William Harvey', naissance: 1578, mort: 1657,
    portrait: {
      fr: 'Médecin anglais formé à Padoue, il a osé contredire Galien, dont la médecine régnait depuis quatorze siècles : le sang n’est pas fabriqué puis consommé, il tourne en boucle. Sa preuve était arithmétique — le cœur débite en une heure bien plus de sang que le corps n’en contient.',
      en: 'An English physician trained at Padua, he dared contradict Galen, whose medicine had reigned for fourteen centuries: blood is not made and then used up, it travels round in a loop. His proof was arithmetic — in one hour the heart pushes far more blood than the body holds.',
    },
    cartes: [{ id: 'le-coeur-et-le-sang', lien: { fr: 'Il a montré que le sang tourne en boucle, poussé par le cœur.', en: 'He showed that blood travels in a loop, pushed along by the heart.' } }],
  },
  {
    id: 'alexander-fleming', nom: 'Alexander Fleming', naissance: 1881, mort: 1955,
    portrait: {
      fr: 'En rentrant de vacances, il retrouve une boîte de culture oubliée où une moisissure a tué les bactéries autour d’elle. Beaucoup auraient jeté la boîte ; il l’a regardée. C’était la pénicilline, le premier antibiotique, qui a sauvé des dizaines de millions de vies — même s’il a fallu dix ans et d’autres chercheurs pour en faire un médicament.',
      en: 'Coming back from holiday, he found a forgotten culture dish where a mould had killed the bacteria around it. Many would have thrown the dish away; he looked at it. It was penicillin, the first antibiotic, which has saved tens of millions of lives — though it took ten years and other researchers to turn it into a medicine.',
    },
    cartes: [{ id: 'les-microbes', lien: { fr: 'Une moisissure tombée par hasard dans sa boîte tuait les microbes : la pénicilline.', en: 'A mould that landed by chance in his dish was killing the germs: penicillin.' } }],
  },
  {
    id: 'nathaniel-kleitman', nom: 'Nathaniel Kleitman', naissance: 1895, mort: 1999,
    portrait: {
      fr: 'Fondateur de l’étude scientifique du sommeil, il a passé un mois sous terre dans une grotte du Kentucky pour voir si le corps garde son rythme sans lumière du jour. Avec son étudiant, il a découvert le sommeil paradoxal — ces moments où les yeux bougent vite sous les paupières, et où l’on rêve.',
      en: 'The founder of the scientific study of sleep, he spent a month underground in a Kentucky cave to see whether the body keeps its rhythm without daylight. With his student, he discovered REM sleep — those spells when the eyes move quickly under the lids, and we dream.',
    },
    cartes: [{ id: 'pourquoi-on-dort', lien: { fr: 'Il a découvert le sommeil où les yeux bougent sous les paupières, celui des rêves.', en: 'He discovered the sleep where the eyes move under the eyelids — the sleep of dreams.' } }],
  },
  {
    id: 'rosalind-franklin', nom: 'Rosalind Franklin', naissance: 1920, mort: 1958,
    portrait: {
      fr: 'Chimiste anglaise, elle a obtenu par diffraction des rayons X l’image la plus nette jamais prise de l’ADN, celle qui révèle sa forme en hélice. Watson et Crick l’ont vue sans qu’elle le sache et en ont tiré leur modèle. Morte à trente-sept ans, elle n’a pas partagé leur prix Nobel.',
      en: 'An English chemist, she obtained by X-ray diffraction the sharpest picture ever taken of DNA, the one that reveals its helical shape. Watson and Crick saw it without her knowing and drew their model from it. Dead at thirty-seven, she did not share their Nobel Prize.',
    },
    cartes: [{ id: 'pourquoi-on-ressemble-a-ses-parents', lien: { fr: 'Sa photographie de l’ADN a révélé sa forme en double hélice.', en: 'Her photograph of DNA revealed its double helix shape.' } }],
  },
  {
    id: 'john-scott-haldane', nom: 'John Scott Haldane', naissance: 1860, mort: 1936,
    portrait: {
      fr: 'Physiologiste écossais, il a étudié la respiration en se prenant lui-même comme cobaye, jusqu’à s’empoisonner volontairement pour mesurer les effets des gaz. Il a établi les premières tables de décompression des plongeurs, conçu le masque à gaz de 1915, et fait adopter le canari dans les mines comme détecteur.',
      en: 'A Scottish physiologist, he studied breathing using himself as the test subject, going as far as poisoning himself on purpose to measure the effects of gases. He drew up the first decompression tables for divers, designed the 1915 gas mask, and had the canary adopted in mines as a detector.',
    },
    cartes: [
      { id: 'comment-on-respire', lien: { fr: 'Il a compris que c’est le gaz carbonique, et non le manque d’air, qui commande la respiration.', en: 'He understood that it is carbon dioxide, not the lack of air, that commands our breathing.' } },
      { id: 'comment-les-poissons-respirent', lien: { fr: 'Il a étudié comment l’oxygène passe de l’eau ou de l’air jusque dans le sang.', en: 'He studied how oxygen passes from water or air right into the blood.' } },
    ],
  },
  {
    id: 'ivan-pavlov', nom: 'Ivan Pavlov', naissance: 1849, mort: 1936,
    portrait: {
      fr: 'Physiologiste russe, il a reçu le prix Nobel pour ses travaux sur la digestion, mais il est resté célèbre pour autre chose : ses chiens qui salivaient au son d’un métronome. Il avait découvert le réflexe conditionné, c’est-à-dire qu’un être vivant apprend à associer deux choses qui arrivent ensemble.',
      en: 'A Russian physiologist, he won the Nobel Prize for his work on digestion, but became famous for something else: his dogs, which drooled at the sound of a metronome. He had discovered the conditioned reflex — that a living creature learns to link two things that happen together.',
    },
    cartes: [{ id: 'le-voyage-de-la-nourriture', lien: { fr: 'Il a étudié la digestion pas à pas, de la salive à l’estomac.', en: 'He studied digestion step by step, from saliva to stomach.' } }],
  },
  {
    id: 'santiago-ramon-y-cajal', nom: 'Santiago Ramón y Cajal', naissance: 1852, mort: 1934,
    portrait: {
      fr: 'Médecin espagnol, il a montré au microscope que le cerveau n’est pas un filet continu mais un assemblage de cellules séparées, les neurones, qui se parlent sans se toucher. Ses dessins à l’encre, faits à l’œil nu derrière l’objectif, sont encore reproduits dans les manuels un siècle plus tard.',
      en: 'A Spanish physician, he showed under the microscope that the brain is not a continuous net but an assembly of separate cells, neurons, which speak to one another without touching. His ink drawings, made by eye behind the lens, are still reprinted in textbooks a century later.',
    },
    cartes: [{ id: 'le-cerveau', lien: { fr: 'Il a dessiné les neurones un par un et montré qu’ils ne se touchent pas tout à fait.', en: 'He drew neurons one by one and showed that they do not quite touch.' } }],
  },
  {
    id: 'marie-curie', nom: 'Marie Curie', naissance: 1867, mort: 1934,
    portrait: {
      fr: 'Avec son mari Pierre, elle a découvert deux éléments nouveaux, le polonium et le radium, et compris que certains atomes émettent d’eux-mêmes un rayonnement : la radioactivité, un mot qu’elle a inventé. Seule personne à ce jour à avoir reçu le prix Nobel dans deux sciences différentes, elle est morte des radiations qu’elle avait étudiées.',
      en: 'With her husband Pierre, she discovered two new elements, polonium and radium, and understood that some atoms give off radiation of their own accord: radioactivity, a word she coined. To this day the only person to have won the Nobel Prize in two different sciences, she died of the radiation she had studied.',
    },
    cartes: [{ id: 'les-os', lien: { fr: 'Elle a fait rouler des voitures de radiographie jusqu’au front, pour voir les os à travers la peau.', en: 'She drove X-ray cars all the way to the front line, to see bones through the skin.' } }],
  },
  {
    id: 'dmitri-mendeleiev', nom: 'Dmitri Mendeleïev', naissance: 1834, mort: 1907,
    portrait: {
      fr: 'Chimiste russe, il a rangé les éléments par masse et vu apparaître un motif qui se répète — le tableau périodique. Il a eu l’audace de laisser des cases vides et de décrire les éléments manquants avant qu’on les trouve. Quand on les a trouvés, ils correspondaient.',
      en: 'A Russian chemist, he arranged the elements by mass and saw a pattern appear that repeats — the periodic table. He had the nerve to leave gaps and to describe the missing elements before anyone found them. When they were found, they matched.',
    },
    cartes: [{ id: 'les-atomes', lien: { fr: 'Il a rangé les atomes dans un tableau, en laissant des cases vides pour ceux qu’on n’avait pas encore trouvés.', en: 'He arranged the atoms in a table, leaving empty boxes for those not yet found.' } }],
  },
  {
    id: 'luigi-galvani', nom: 'Luigi Galvani', naissance: 1737, mort: 1798,
    portrait: {
      fr: 'Médecin italien, il a vu la patte d’une grenouille morte se contracter au contact de deux métaux, et en a conclu que les nerfs fonctionnent à l’électricité. Il avait raison sur le fond, tort sur la cause de cette expérience-là — la dispute avec Volta qui s’ensuivit a donné naissance à la pile électrique.',
      en: 'An Italian physician, he saw a dead frog’s leg twitch at the touch of two metals, and concluded that nerves run on electricity. He was right in essence, wrong about the cause in that particular experiment — and the quarrel with Volta that followed gave birth to the electric battery.',
    },
    cartes: [
      { id: 'comment-les-muscles-bougent', lien: { fr: 'Il a fait bouger la patte d’une grenouille morte avec de l’électricité.', en: 'He made a dead frog’s leg move with electricity.' } },
      { id: 'la-chair-de-poule', lien: { fr: 'Ce sont de minuscules muscles, comme ceux qu’il étudiait, qui hérissent les poils.', en: 'It is tiny muscles, like the ones he studied, that make the hairs stand up.' } },
    ],
  },
  {
    id: 'aristote', nom: 'Aristote', naissance: -384, mort: -322, aRevoir: true,
    portrait: {
      fr: 'Philosophe grec, élève de Platon et précepteur d’Alexandre le Grand, il a fondé l’étude méthodique du vivant : il a décrit et classé des centaines d’animaux, souvent avec une justesse étonnante. Sa physique, elle, s’est révélée fausse — et a régné deux mille ans, ce qui montre à quel point observer ne suffit pas.',
      en: 'A Greek philosopher, Plato’s pupil and Alexander the Great’s tutor, he founded the methodical study of living things: he described and classified hundreds of animals, often with startling accuracy. His physics, on the other hand, turned out to be wrong — and reigned for two thousand years, which shows that observing alone is not enough.',
    },
    cartes: [
      { id: 'lhibernation', lien: { fr: 'Il a décrit le premier les animaux qui disparaissent tout l’hiver.', en: 'He was the first to describe the animals that vanish for the whole winter.' } },
      { id: 'pourquoi-on-eternue', lien: { fr: 'Il a consacré tout un chapitre à l’éternuement, qu’il tenait pour un bon présage.', en: 'He devoted a whole chapter to sneezing, which he took for a good omen.' } },
    ],
  },
  {
    id: 'william-frey', nom: 'William Frey', naissance: 1943, mort: null,
    portrait: {
      fr: 'Biochimiste américain, il a eu l’idée simple de récolter des larmes et de les analyser. Celles qui viennent d’un chagrin n’ont pas la même composition que celles d’un oignon : il y aurait trouvé davantage de protéines et d’hormones du stress. Pleurer d’émotion ne serait donc pas tout à fait la même chose que pleurer d’irritation.',
      en: 'An American biochemist, he had the simple idea of collecting tears and analysing them. Those that come from sorrow are not made up like those from an onion: he reported finding in them more proteins and stress hormones. Crying from feeling would therefore not be quite the same thing as crying from irritation.',
    },
    cartes: [{ id: 'a-quoi-servent-les-larmes', lien: { fr: 'Il a comparé les larmes de chagrin et celles d’un oignon : elles ne contiennent pas la même chose.', en: 'He compared tears of sadness with onion tears: they do not contain the same things.' } }],
  },
  {
    id: 'marcello-malpighi', nom: 'Marcello Malpighi', naissance: 1628, mort: 1694,
    portrait: {
      fr: 'Médecin italien, l’un des premiers à braquer un microscope sur le corps. Il y a vu ce qui manquait à Harvey : les capillaires, ces vaisseaux minuscules par où le sang passe des artères aux veines. Il a aussi décrit les alvéoles du poumon et les crêtes des empreintes digitales.',
      en: 'An Italian physician, among the first to turn a microscope on the body. There he saw what Harvey had been missing: capillaries, the tiny vessels through which blood passes from arteries to veins. He also described the air sacs of the lung and the ridges of fingerprints.',
    },
    cartes: [{ id: 'la-peau-notre-bouclier', lien: { fr: 'Il a vu au microscope que la peau est faite de couches — l’une porte son nom.', en: 'Under the microscope he saw that skin is made of layers — one of them bears his name.' } }],
  },
  {
    id: 'jan-purkyne', nom: 'Jan Purkyně', naissance: 1787, mort: 1869,
    portrait: {
      fr: 'Physiologiste tchèque, il a donné son nom aux grandes cellules du cervelet qu’il a décrites, et remarqué qu’au crépuscule le rouge s’éteint avant le bleu — un effet qui porte son nom. Il fut aussi le premier à montrer que les empreintes digitales peuvent se classer en familles de motifs.',
      en: 'A Czech physiologist, he gave his name to the large cerebellar cells he described, and noticed that at dusk red fades before blue — an effect that carries his name. He was also the first to show that fingerprints can be sorted into families of patterns.',
    },
    cartes: [{ id: 'les-empreintes-digitales', lien: { fr: 'Il a classé le premier les dessins du bout des doigts, en neuf familles.', en: 'He was the first to sort the patterns on our fingertips, into nine families.' } }],
  },
  {
    id: 'ronald-melzack', nom: 'Ronald Melzack', naissance: 1929, mort: 2019,
    portrait: {
      fr: 'Psychologue canadien, il a proposé avec Patrick Wall que la douleur passe par une « porte », dans la moelle épinière, que le cerveau peut refermer — ce qui explique pourquoi frotter un coup le soulage. Il a aussi créé le questionnaire qui sert encore à faire décrire une douleur avec des mots.',
      en: 'A Canadian psychologist, he proposed with Patrick Wall that pain passes through a “gate”, in the spinal cord, that the brain can close — which explains why rubbing a knock eases it. He also created the questionnaire still used to have people put a pain into words.',
    },
    cartes: [{ id: 'pourquoi-on-a-mal', lien: { fr: 'Il a expliqué que la douleur passe par une « porte » que le cerveau peut refermer.', en: 'He explained that pain passes through a “gate” the brain can close.' } }],
  },
  {
    id: 'robert-barany', nom: 'Robert Bárány', naissance: 1876, mort: 1936,
    portrait: {
      fr: 'Médecin autrichien, il a compris à quoi sert l’oreille interne au-delà de l’audition : les canaux remplis de liquide qui nous disent où est le haut. Il a reçu le prix Nobel alors qu’il était prisonnier de guerre en Russie, et l’a appris dans son camp.',
      en: 'An Austrian physician, he worked out what the inner ear does beyond hearing: the fluid-filled canals that tell us which way is up. He was awarded the Nobel Prize while a prisoner of war in Russia, and learned of it in his camp.',
    },
    cartes: [{ id: 'comment-on-tient-debout', lien: { fr: 'Il a découvert comment l’oreille interne nous dit où est le haut.', en: 'He discovered how the inner ear tells us which way is up.' } }],
  },
  {
    id: 'pierre-fauchard', nom: 'Pierre Fauchard', naissance: 1678, mort: 1761,
    portrait: {
      fr: 'Chirurgien français, il a fait de l’art de l’arracheur de dents une science. Son livre de 1728 décrit les caries, les plombages, les appareils pour redresser les dents, et conseille déjà de se les nettoyer chaque jour. On l’appelle le père de la dentisterie moderne.',
      en: 'A French surgeon, he turned the tooth-puller’s trade into a science. His 1728 book describes decay, fillings, and braces to straighten teeth, and already advises cleaning them every day. He is called the father of modern dentistry.',
    },
    cartes: [{ id: 'les-dents-de-lait', lien: { fr: 'Il a fondé la dentisterie moderne et décrit la pousse des dents de l’enfant.', en: 'He founded modern dentistry and described how a child’s teeth come through.' } }],
  },

  // ── La physique et la chimie ─────────────────────────────────────────────
  {
    id: 'marin-mersenne', nom: 'Marin Mersenne', naissance: 1588, mort: 1648,
    portrait: {
      fr: 'Moine français, il a mesuré comment la hauteur d’un son dépend de la longueur, de la tension et de l’épaisseur d’une corde — les lois qui gouvernent tous les instruments. Sans laboratoire ni académie, il servait aussi de boîte aux lettres à toute l’Europe savante, faisant circuler les découvertes de Descartes à Galilée.',
      en: 'A French friar, he measured how the pitch of a sound depends on the length, tension and thickness of a string — the laws that govern every instrument. With neither laboratory nor academy, he also served as a letterbox for scholarly Europe, passing discoveries between Descartes and Galileo.',
    },
    cartes: [
      { id: 'comment-voyage-le-son', lien: { fr: 'Il a mesuré la vitesse du son, avec un écho et beaucoup de patience.', en: 'He measured the speed of sound, with an echo and a great deal of patience.' } },
      { id: 'pourquoi-lecho-repond', lien: { fr: 'C’est en chronométrant des échos qu’il a fait cette mesure.', en: 'It was by timing echoes that he made that measurement.' } },
    ],
  },
  {
    id: 'lord-kelvin', nom: 'Lord Kelvin', naissance: 1824, mort: 1907,
    portrait: {
      fr: 'Physicien britannique, il a compris qu’il existe un froid qu’on ne peut pas dépasser, et posé l’échelle des températures absolues qui porte son nom. Il a aussi bâti la thermodynamique avec Clausius, et dirigé la pose du premier câble télégraphique sous l’Atlantique.',
      en: 'A British physicist, he understood that there is a cold you cannot go below, and set out the absolute temperature scale that carries his name. He also built thermodynamics alongside Clausius, and led the laying of the first telegraph cable under the Atlantic.',
    },
    cartes: [
      { id: 'le-chaud-et-le-froid', lien: { fr: 'Il a trouvé qu’il existe un froid absolu, en dessous duquel on ne peut pas descendre.', en: 'He found that there is an absolute cold, below which you cannot go.' } },
      { id: 'les-etats-de-la-matiere', lien: { fr: 'C’est la température qui fait passer la matière du solide au liquide et au gaz.', en: 'It is temperature that takes matter from solid to liquid to gas.' } },
    ],
  },
  {
    id: 'antoine-lavoisier', nom: 'Antoine Lavoisier', naissance: 1743, mort: 1794,
    portrait: {
      fr: 'Il a pesé. Avant lui on décrivait les réactions, lui les a mises sur une balance et a montré que la masse totale ne change jamais. Il a nommé l’oxygène, expliqué la combustion, et donné à la chimie son langage. La Révolution l’a guillotiné à cinquante ans.',
      en: 'He weighed things. Before him people described reactions; he put them on a balance and showed that the total mass never changes. He named oxygen, explained burning, and gave chemistry its language. The Revolution guillotined him at fifty.',
    },
    cartes: [
      { id: 'le-feu', lien: { fr: 'Il a prouvé que brûler, c’est se combiner à l’oxygène — rien ne se perd, rien ne se crée.', en: 'He proved that burning means joining with oxygen — nothing is lost, nothing is created.' } },
      { id: 'de-quoi-est-fait-lair', lien: { fr: 'Il a nommé l’oxygène et l’azote, les deux gaz principaux de l’air.', en: 'He named oxygen and nitrogen, the two main gases of the air.' } },
    ],
  },
  {
    id: 'joseph-priestley', nom: 'Joseph Priestley', naissance: 1733, mort: 1804,
    portrait: {
      fr: 'Pasteur et chimiste anglais, il a isolé le gaz que nous appelons oxygène et montré qu’une plante peut « réparer » l’air vicié par une bougie — une première trace de la photosynthèse. Il a aussi inventé l’eau gazeuse. Ses opinions politiques lui ont valu de voir sa maison incendiée et de fuir en Amérique.',
      en: 'An English minister and chemist, he isolated the gas we call oxygen and showed that a plant can “mend” air spoilt by a candle — an early trace of photosynthesis. He also invented fizzy water. His political views got his house burned down and drove him to flee to America.',
    },
    cartes: [
      { id: 'pourquoi-le-soda-petille', lien: { fr: 'Il a inventé l’eau gazeuse, en faisant passer dans de l’eau le gaz d’une brasserie voisine.', en: 'He invented fizzy water, by running the gas from a nearby brewery through it.' } },
      { id: 'le-volcan-de-vinaigre', lien: { fr: 'C’est le même gaz qu’il capturait qui fait mousser le vinaigre sur le bicarbonate.', en: 'It is the same gas he captured that makes vinegar foam up on bicarbonate.' } },
    ],
  },
  {
    id: 'svante-arrhenius', nom: 'Svante Arrhenius', naissance: 1859, mort: 1927,
    portrait: {
      fr: 'Chimiste suédois, il a expliqué pourquoi l’eau salée conduit l’électricité — les sels s’y séparent en particules chargées — ce qui lui a valu le prix Nobel après avoir failli lui coûter sa thèse. Dès 1896, il a aussi calculé que doubler le gaz carbonique de l’air réchaufferait la planète de plusieurs degrés.',
      en: 'A Swedish chemist, he explained why salty water conducts electricity — salts split in it into charged particles — which won him the Nobel Prize after nearly costing him his doctorate. As early as 1896 he also worked out that doubling the carbon dioxide in the air would warm the planet by several degrees.',
    },
    cartes: [
      { id: 'les-acides-et-les-bases', lien: { fr: 'Il a dit ce qu’est un acide : quelque chose qui libère des particules chargées dans l’eau.', en: 'He said what an acid is: something that releases charged particles into water.' } },
      { id: 'ou-va-le-sucre-dans-leau', lien: { fr: 'Il a expliqué ce que deviennent les molécules quand elles se dissolvent.', en: 'He explained what becomes of molecules when they dissolve.' } },
    ],
  },
  {
    id: 'humphry-davy', nom: 'Humphry Davy', naissance: 1778, mort: 1829,
    portrait: {
      fr: 'Chimiste anglais, il a fait passer du courant dans des sels fondus et en a tiré six éléments nouveaux, dont le sodium et le potassium. Il a aussi inventé la lampe de mineur qui empêche le grisou de s’enflammer, et refusé de la breveter pour qu’elle sauve le plus de vies possible.',
      en: 'An English chemist, he passed current through molten salts and drew six new elements from them, sodium and potassium among them. He also invented the miner’s lamp that keeps firedamp from catching, and refused to patent it so that it might save as many lives as possible.',
    },
    cartes: [{ id: 'la-rouille', lien: { fr: 'Il a protégé les coques des bateaux de la corrosion, en leur donnant un autre métal à ronger.', en: 'He protected ships’ hulls from rust, by giving them another metal to eat away.' } }],
  },
  {
    id: 'michel-eugene-chevreul', nom: 'Michel Eugène Chevreul', naissance: 1786, mort: 1889,
    portrait: {
      fr: 'Chimiste français, il a percé la composition des corps gras, ce qui a transformé la fabrication des savons et des bougies. Il a aussi formulé la loi du contraste simultané des couleurs — une couleur change d’aspect selon sa voisine — qui a nourri les peintres impressionnistes. Il a travaillé jusqu’à cent deux ans.',
      en: 'A French chemist, he cracked what fats are made of, which transformed the making of soap and candles. He also stated the law of simultaneous colour contrast — a colour changes appearance depending on its neighbour — which fed the Impressionist painters. He worked until the age of a hundred and two.',
    },
    cartes: [{ id: 'pourquoi-le-savon-lave', lien: { fr: 'Il a percé la chimie des corps gras, donc celle du savon.', en: 'He cracked the chemistry of fats, and therefore of soap.' } }],
  },
  {
    id: 'linda-buck', nom: 'Linda Buck', naissance: 1947, mort: null,
    portrait: {
      fr: 'Biologiste américaine, elle a trouvé avec Richard Axel la famille de gènes qui fabrique les récepteurs de l’odorat : environ mille chez la souris, chacun réglé sur une forme de molécule. Leur découverte explique comment le nez distingue des milliers d’odeurs, et leur a valu le prix Nobel en 2004.',
      en: 'An American biologist, she found with Richard Axel the family of genes that builds our smell receptors: about a thousand in the mouse, each tuned to one shape of molecule. Their discovery explains how the nose tells thousands of smells apart, and won them the Nobel Prize in 2004.',
    },
    cartes: [{ id: 'pourquoi-ca-sent', lien: { fr: 'Elle a trouvé les capteurs du nez, toute une famille de détecteurs d’odeurs.', en: 'She found the sensors in the nose, a whole family of smell detectors.' } }],
  },
  {
    id: 'linus-pauling', nom: 'Linus Pauling', naissance: 1901, mort: 1994,
    portrait: {
      fr: 'Chimiste américain, il a expliqué avec la mécanique quantique ce qui tient les atomes ensemble dans une molécule, et découvert comment les protéines s’enroulent en hélice. Il a reçu deux prix Nobel non partagés : celui de chimie, puis celui de la paix pour son combat contre les essais nucléaires.',
      en: 'An American chemist, he used quantum mechanics to explain what holds atoms together in a molecule, and discovered how proteins coil into a helix. He received two unshared Nobel Prizes: one in chemistry, then the peace prize for his campaign against nuclear testing.',
    },
    cartes: [{ id: 'pourquoi-la-glace-flotte', lien: { fr: 'Il a décrit comment les molécules d’eau s’accrochent, ce qui rend la glace plus légère que l’eau.', en: 'He described how water molecules hook together, which makes ice lighter than water.' } }],
  },

  // ── Construire ───────────────────────────────────────────────────────────
  {
    id: 'gustave-eiffel', nom: 'Gustave Eiffel', naissance: 1832, mort: 1923,
    portrait: {
      fr: 'Ingénieur français, il a bâti des ponts, des gares et des viaducs dans le monde entier, et la charpente intérieure de la statue de la Liberté. Sa tour, moquée à sa construction, devait être démontée au bout de vingt ans. Il l’a sauvée en y installant des antennes — et un laboratoire d’aérodynamique.',
      en: 'A French engineer, he built bridges, stations and viaducts the world over, and the inner frame of the Statue of Liberty. His tower, mocked while it went up, was to be taken down after twenty years. He saved it by putting aerials on it — and a laboratory for aerodynamics.',
    },
    cartes: [{ id: 'pourquoi-les-ponts-tiennent', lien: { fr: 'Il a bâti des ponts en treillis, où chaque barre tire ou pousse juste ce qu’il faut.', en: 'He built lattice bridges, where every bar pulls or pushes just as much as it should.' } }],
  },
  {
    id: 'leonard-de-vinci', nom: 'Léonard de Vinci', naissance: 1452, mort: 1519,
    portrait: {
      fr: 'Peintre, ingénieur et anatomiste, il remplissait ses carnets de machines volantes, de tourbillons d’eau et de corps disséqués, en écrivant à l’envers. Il a compris que la vraie forme des choses se trouve en les regardant, pas en lisant les Anciens — mais il n’a presque rien publié, et le monde a dû redécouvrir seul ce qu’il savait.',
      en: 'A painter, engineer and anatomist, he filled his notebooks with flying machines, swirling water and dissected bodies, writing back to front. He understood that the true shape of things is found by looking at them, not by reading the ancients — but he published almost nothing, and the world had to rediscover on its own what he already knew.',
    },
    cartes: [{ id: 'comment-vole-un-avion', lien: { fr: 'Il a étudié le vol des oiseaux et dessiné des machines volantes quatre siècles trop tôt.', en: 'He studied the flight of birds and drew flying machines four centuries too early.' } }],
  },
  {
    id: 'al-jazari', nom: 'Al-Jazari', naissance: 1136, mort: 1206,
    portrait: {
      fr: 'Ingénieur de Mésopotamie, il a décrit dans un livre de 1206 une cinquantaine de machines qu’il avait construites : horloges à eau, pompes, serrures à combinaison, et des automates qui servaient à boire. On y trouve le vilebrequin et la bielle, pièces sans lesquelles aucun moteur moderne ne tournerait.',
      en: 'A Mesopotamian engineer, he described in a book of 1206 some fifty machines he had built: water clocks, pumps, combination locks, and automata that poured drinks. In it are the crankshaft and the connecting rod, parts without which no modern engine would turn.',
    },
    cartes: [{ id: 'les-engrenages', lien: { fr: 'Il a dessiné et construit des machines à engrenages d’une précision inouïe pour son temps.', en: 'He drew and built geared machines of a precision unheard of in his time.' } }],
  },
  {
    id: 'elisha-otis', nom: 'Elisha Otis', naissance: 1811, mort: 1861,
    portrait: {
      fr: 'Mécanicien américain, il n’a pas inventé l’ascenseur mais ce qui le rend sûr : un frein qui bloque la cabine si le câble casse. Pour convaincre, il s’est fait hisser en public à l’Exposition de New York en 1854, puis a fait couper la corde devant la foule. Les gratte-ciel sont nés de là.',
      en: 'An American mechanic, he did not invent the lift but the thing that makes it safe: a brake that grips the car if the cable snaps. To convince people, he had himself hoisted up in public at the 1854 New York Exhibition, then had the rope cut in front of the crowd. Skyscrapers were born of that.',
    },
    cartes: [{ id: 'comment-on-freine', lien: { fr: 'Il a inventé le frein de sécurité, et l’a prouvé en faisant couper le câble sous ses pieds.', en: 'He invented the safety brake, and proved it by having the cable cut under his feet.' } }],
  },
  {
    id: 'carl-von-linde', nom: 'Carl von Linde', naissance: 1842, mort: 1934,
    portrait: {
      fr: 'Ingénieur allemand, il a mis au point la machine frigorifique qui a rendu le froid industriel possible — d’abord pour les brasseries, puis pour la conservation des aliments partout. Il a ensuite réussi à liquéfier l’air, ce qui permet aujourd’hui d’en séparer l’oxygène et l’azote.',
      en: 'A German engineer, he devised the refrigerating machine that made industrial cold possible — first for breweries, then for keeping food everywhere. He went on to liquefy air, which is how oxygen and nitrogen are separated from it today.',
    },
    cartes: [{ id: 'comment-marche-un-frigo', lien: { fr: 'Il a construit la machine qui a rendu le froid industriel possible, en détendant un gaz.', en: 'He built the machine that made industrial cold possible, by letting a gas expand.' } }],
  },
  {
    id: 'percy-spencer', nom: 'Percy Spencer', naissance: 1894, mort: 1970,
    portrait: {
      fr: 'Ingénieur américain autodidacte, orphelin parti travailler à douze ans, il passait devant un tube radar quand la barre de chocolat de sa poche a fondu. Il a compris pourquoi, puis fait exploser du maïs pour vérifier : le four à micro-ondes venait de naître.',
      en: 'A self-taught American engineer, an orphan who went out to work at twelve, he was passing a radar tube when the chocolate bar in his pocket melted. He worked out why, then popped corn to check: the microwave oven had just been born.',
    },
    cartes: [{ id: 'le-micro-ondes', lien: { fr: 'Une barre de chocolat a fondu dans sa poche devant un radar : il a compris pourquoi.', en: 'A chocolate bar melted in his pocket in front of a radar: he understood why.' } }],
  },
  {
    id: 'denis-papin', nom: 'Denis Papin', naissance: 1647, mort: 1713,
    portrait: {
      fr: 'Physicien français réfugié en Angleterre puis en Allemagne, il a inventé le « digesteur », l’ancêtre de la cocotte-minute, avec sa soupape de sûreté. Il a surtout compris qu’un piston poussé par la vapeur pouvait fournir du travail — le principe de la machine à vapeur, qu’il n’a jamais eu les moyens de construire en grand.',
      en: 'A French physicist who took refuge in England and then Germany, he invented the “digester”, ancestor of the pressure cooker, with its safety valve. Above all he understood that a piston pushed by steam could do work — the principle of the steam engine, which he never had the means to build at scale.',
    },
    cartes: [{ id: 'pourquoi-le-popcorn-explose', lien: { fr: 'Il a inventé la marmite sous pression : c’est la vapeur enfermée qui fait tout sauter.', en: 'He invented the pressure pot: it is the trapped steam that makes everything burst.' } }],
  },

  // ── Les ordinateurs ──────────────────────────────────────────────────────
  {
    id: 'gottfried-leibniz', nom: 'Gottfried Leibniz', naissance: 1646, mort: 1716,
    portrait: {
      fr: 'Philosophe et mathématicien allemand, il a inventé le calcul infinitésimal indépendamment de Newton, et avec de bien meilleures notations : les nôtres sont les siennes. Il a aussi construit une machine à calculer et décrit le système binaire, où tout s’écrit avec des 0 et des 1 — la langue des ordinateurs, trois siècles avant eux.',
      en: 'A German philosopher and mathematician, he invented calculus independently of Newton, and with far better notation: ours is his. He also built a calculating machine and described the binary system, where everything is written with 0s and 1s — the language of computers, three centuries before them.',
    },
    cartes: [{ id: 'comment-compte-un-ordinateur', lien: { fr: 'Il a inventé le calcul binaire : compter avec des 0 et des 1 seulement.', en: 'He invented binary counting: counting with nothing but 0s and 1s.' } }],
  },
  {
    id: 'vinton-cerf', nom: 'Vinton Cerf', naissance: 1943, mort: null,
    portrait: {
      fr: 'Informaticien américain, il a conçu avec Robert Kahn les règles qui permettent à des réseaux différents de se parler : le protocole TCP/IP, sur lequel tourne encore tout Internet. On les appelle pour cela les pères d’Internet. Malentendant, il a aussi beaucoup œuvré pour l’accessibilité du réseau.',
      en: 'An American computer scientist, he designed with Robert Kahn the rules that let different networks talk to one another: the TCP/IP protocol, on which the whole internet still runs. For that they are called the fathers of the internet. Hard of hearing himself, he has also worked hard for accessibility online.',
    },
    cartes: [{ id: 'comment-marche-internet', lien: { fr: 'Il a écrit les règles qui permettent à deux réseaux différents de se parler.', en: 'He wrote the rules that let two different networks talk to each other.' } }],
  },
  {
    id: 'ada-lovelace', nom: 'Ada Lovelace', naissance: 1815, mort: 1852,
    portrait: {
      fr: 'Fille du poète Byron, mathématicienne anglaise, elle a traduit un article sur la machine à calculer de Babbage et y a ajouté des notes trois fois plus longues que le texte. Elle y écrit le premier programme de l’histoire, et surtout comprend, seule de son temps, qu’une machine pourrait manipuler autre chose que des nombres.',
      en: 'The poet Byron’s daughter and an English mathematician, she translated a paper on Babbage’s calculating engine and added notes three times longer than the text. In them she writes the first program in history, and above all grasps, alone in her time, that a machine might handle more than numbers.',
    },
    cartes: [{ id: 'quest-ce-quun-programme', lien: { fr: 'Elle a écrit le tout premier programme, pour une machine qui n’a jamais été construite.', en: 'She wrote the very first program, for a machine that was never built.' } }],
  },
  {
    id: 'grace-hopper', nom: 'Grace Hopper', naissance: 1906, mort: 1992, aRevoir: true,
    portrait: {
      fr: 'Officier de marine et informaticienne américaine, elle a inventé le compilateur : un programme qui traduit des mots en instructions machine. Elle a ainsi rendu la programmation possible sans parler le langage des circuits, et a porté le langage COBOL. Un vrai papillon coincé dans un relais lui a fourni la plus célèbre illustration du mot « bug », qui existait déjà avant elle.',
      en: 'An American naval officer and computer scientist, she invented the compiler: a program that turns words into machine instructions. She thereby made programming possible without speaking the language of circuits, and championed the COBOL language. A real moth caught in a relay gave her the most famous illustration of the word “bug”, which was already in use before her.',
    },
    cartes: [{ id: 'comment-un-ordinateur-se-souvient', lien: { fr: 'Un vrai papillon coincé dans une machine lui a donné le « bug » le plus célèbre de l’histoire.', en: 'A real moth stuck inside the machine gave her the most famous “bug” in history.' } }],
  },
  {
    id: 'alan-turing', nom: 'Alan Turing', naissance: 1912, mort: 1954,
    portrait: {
      fr: 'Mathématicien anglais, il a défini en 1936 ce qu’une machine peut calculer, et inventé au passage l’ordinateur en théorie. Pendant la guerre, il a cassé le code Enigma des sous-marins allemands. Condamné en 1952 pour son homosexualité, il est mort deux ans plus tard ; le Royaume-Uni lui a présenté ses excuses un demi-siècle après.',
      en: 'An English mathematician, he defined in 1936 what a machine can compute, inventing the computer in theory along the way. During the war he broke the Enigma code of the German submarines. Convicted in 1952 for being homosexual, he died two years later; the United Kingdom apologised half a century afterwards.',
    },
    cartes: [{ id: 'comment-une-machine-apprend', lien: { fr: 'Il a demandé le premier si une machine peut penser, et proposé un test pour le savoir.', en: 'He was the first to ask whether a machine can think, and offered a test to find out.' } }],
  },
  {
    id: 'george-heilmeier', nom: 'George Heilmeier', naissance: 1936, mort: 2014,
    portrait: {
      fr: 'Ingénieur américain, il a fait la première démonstration d’un affichage à cristaux liquides en 1968 : des molécules qu’un peu de courant suffit à tourner, et qui laissent ou non passer la lumière. C’est l’ancêtre de tous les écrans plats, des montres aux téléphones.',
      en: 'An American engineer, he gave the first demonstration of a liquid-crystal display in 1968: molecules that a little current is enough to turn, and which then let light through or not. It is the ancestor of every flat screen, from watches to phones.',
    },
    cartes: [{ id: 'comment-marche-un-ecran', lien: { fr: 'Il a fait le premier écran à cristaux liquides, l’ancêtre de tous nos écrans plats.', en: 'He made the first liquid crystal display, ancestor of all our flat screens.' } }],
  },
  {
    id: 'whitfield-diffie', nom: 'Whitfield Diffie', naissance: 1944, mort: null,
    portrait: {
      fr: 'Cryptographe américain, il a résolu avec Martin Hellman un problème vieux de deux mille ans : comment se mettre d’accord sur un secret à distance, sans jamais l’échanger. Leur idée de clé publique protège aujourd’hui chaque achat en ligne et chaque message chiffré.',
      en: 'An American cryptographer, he solved with Martin Hellman a two-thousand-year-old problem: how to agree on a secret at a distance, without ever sending it. Their public-key idea now protects every online purchase and every encrypted message.',
    },
    cartes: [{ id: 'les-mots-de-passe', lien: { fr: 'Il a inventé le secret à deux clés : une pour fermer, une autre pour ouvrir.', en: 'He invented the two-key secret: one to lock, another to open.' } }],
  },
  {
    id: 'nasir-ahmed', nom: 'Nasir Ahmed', naissance: 1940, mort: null,
    portrait: {
      fr: 'Ingénieur américain né en Inde, il a proposé en 1972 une transformation mathématique qui décompose une image en motifs, du plus grossier au plus fin. On peut alors jeter les plus fins sans que l’œil s’en aperçoive. Presque toutes les photos et vidéos du monde sont compressées avec sa méthode.',
      en: 'An American engineer born in India, he proposed in 1972 a mathematical transform that breaks an image into patterns, from coarsest to finest. The finest can then be thrown away without the eye noticing. Almost every photo and video in the world is compressed with his method.',
    },
    cartes: [{ id: 'pourquoi-une-photo-devient-floue', lien: { fr: 'Il a trouvé la méthode qui compresse les images — et qui les rend floues si on serre trop.', en: 'He found the method that squeezes images — and blurs them if you squeeze too hard.' } }],
  },
  {
    id: 'latanya-sweeney', nom: 'Latanya Sweeney', naissance: 1959, mort: null,
    portrait: {
      fr: 'Informaticienne américaine, elle a montré qu’on peut retrouver une personne dans un fichier « anonyme » : avec le code postal, la date de naissance et le sexe, la plupart des gens sont uniques. Pour le prouver, elle a identifié le dossier médical du gouverneur du Massachusetts et le lui a envoyé.',
      en: 'An American computer scientist, she showed that a person can be found again in an “anonymous” file: with a postcode, a date of birth and a sex, most people are unique. To prove it, she identified the medical record of the governor of Massachusetts and posted it to him.',
    },
    cartes: [{ id: 'la-navigation-privee', lien: { fr: 'Elle a démontré qu’on peut reconnaître quelqu’un dans des données prétendues anonymes.', en: 'She showed that you can recognise someone inside data claimed to be anonymous.' } }],
  },
  {
    id: 'hedy-lamarr', nom: 'Hedy Lamarr', naissance: 1914, mort: 2000,
    portrait: {
      fr: 'Actrice de Hollywood et inventrice autrichienne, elle a imaginé pendant la guerre, avec le compositeur George Antheil, un système où l’émetteur et le récepteur changent de fréquence ensemble, pour empêcher le brouillage des torpilles. Le brevet fut oublié — le saut de fréquence est aujourd’hui au cœur du Bluetooth, et a ouvert la voie aux réseaux sans fil.',
      en: 'A Hollywood actress and Austrian inventor, during the war she devised, with the composer George Antheil, a system in which sender and receiver change frequency together, to stop torpedoes being jammed. The patent was forgotten — frequency hopping now sits at the heart of Bluetooth, and opened the way to wireless networks.',
    },
    cartes: [{ id: 'le-wifi', lien: { fr: 'Actrice et inventrice, elle a imaginé le saut de fréquence, ancêtre du wifi.', en: 'An actress and an inventor, she imagined frequency hopping, the ancestor of wifi.' } }],
  },

  // ── Les nombres ──────────────────────────────────────────────────────────
  {
    id: 'emmy-noether', nom: 'Emmy Noether', naissance: 1882, mort: 1935,
    portrait: {
      fr: 'Mathématicienne allemande, elle a démontré que derrière chaque loi de conservation de la physique se cache une symétrie : si les lois ne changent pas avec le temps, l’énergie se conserve. Son théorème est l’un des plus profonds de la science. Elle a longtemps enseigné sans salaire, l’université refusant de titulariser une femme.',
      en: 'A German mathematician, she proved that behind every conservation law in physics there hides a symmetry: if the laws do not change with time, energy is conserved. Her theorem is among the deepest in science. She taught for years without pay, the university refusing to appoint a woman.',
    },
    cartes: [{ id: 'la-symetrie', lien: { fr: 'Elle a prouvé que derrière chaque symétrie se cache une chose qui se conserve.', en: 'She proved that behind every symmetry hides something that is preserved.' } }],
  },
  {
    id: 'benoit-mandelbrot', nom: 'Benoît Mandelbrot', naissance: 1924, mort: 2010,
    portrait: {
      fr: 'Mathématicien franco-américain, il a nommé et étudié les fractales : ces formes dont chaque morceau ressemble au tout, comme une côte, un chou-fleur ou un poumon. Il a montré que la géométrie de la nature n’est pas faite de droites et de cercles, et lui a donné ses outils.',
      en: 'A French-American mathematician, he named and studied fractals: shapes each piece of which looks like the whole, such as a coastline, a cauliflower or a lung. He showed that the geometry of nature is not made of straight lines and circles, and gave it its tools.',
    },
    cartes: [{ id: 'les-fractales', lien: { fr: 'Il a nommé les fractales, ces formes qui se répètent à toutes les échelles.', en: 'He named fractals, those shapes that repeat at every scale.' } }],
  },
  {
    id: 'blaise-pascal', nom: 'Blaise Pascal', naissance: 1623, mort: 1662,
    portrait: {
      fr: 'Français mort à trente-neuf ans, il a construit à dix-neuf ans une machine à calculer pour aider son père, fondé le calcul des probabilités dans une correspondance avec Fermat, et démontré que l’air pèse en faisant monter un baromètre au sommet du puy de Dôme. Il fut aussi l’un des grands écrivains de sa langue.',
      en: 'A Frenchman dead at thirty-nine, he built a calculating machine at nineteen to help his father, founded the theory of probability in letters exchanged with Fermat, and proved that air has weight by having a barometer carried up the Puy de Dôme. He was also one of the great writers of his language.',
    },
    cartes: [
      { id: 'le-hasard', lien: { fr: 'Il a fondé le calcul des probabilités en réfléchissant à un jeu de dés interrompu.', en: 'He founded the study of probability while thinking about an interrupted dice game.' } },
      { id: 'le-paradoxe-des-anniversaires', lien: { fr: 'C’est son calcul des probabilités qui donne la réponse, et elle surprend tout le monde.', en: 'It is his probability calculus that gives the answer, and it surprises everyone.' } },
    ],
  },
  {
    id: 'georg-cantor', nom: 'Georg Cantor', naissance: 1845, mort: 1918,
    portrait: {
      fr: 'Mathématicien allemand, il a osé compter l’infini et découvert qu’il en existe plusieurs, de tailles différentes : les nombres à virgule sont strictement plus nombreux que les entiers. Ses collègues ont trouvé cela scandaleux et le lui ont fait payer. On sait aujourd’hui qu’il avait raison.',
      en: 'A German mathematician, he dared to count infinity and discovered that there are several, of different sizes: the decimal numbers are strictly more numerous than the whole numbers. His colleagues found this scandalous and made him pay for it. We now know he was right.',
    },
    cartes: [{ id: 'linfini', lien: { fr: 'Il a démontré qu’il existe plusieurs infinis, et que certains sont plus grands que d’autres.', en: 'He proved that there are several infinities, and that some are bigger than others.' } }],
  },
  {
    id: 'al-khwarizmi', nom: 'Al-Khwârizmî', naissance: 780, mort: 850,
    portrait: {
      fr: 'Savant persan de la Maison de la Sagesse à Bagdad, il a écrit le livre qui a donné son nom à l’algèbre, et un autre qui a répandu les chiffres indiens — les nôtres — dans tout le monde méditerranéen. Le mot « algorithme » vient de son nom.',
      en: 'A Persian scholar of the House of Wisdom in Baghdad, he wrote the book that gave algebra its name, and another that spread the Indian numerals — ours — across the Mediterranean world. The word “algorithm” comes from his name.',
    },
    cartes: [{ id: 'le-zero', lien: { fr: 'Il a fait connaître le zéro et les chiffres qu’on écrit encore aujourd’hui.', en: 'He made the zero known, along with the digits we still write today.' } }],
  },
  {
    id: 'euclide', nom: 'Euclide', naissance: -325, mort: -265,
    portrait: {
      fr: 'Mathématicien grec d’Alexandrie, il a rassemblé la géométrie de son temps dans les Éléments, en partant de quelques évidences pour tout démontrer ensuite, étape par étape. Ce livre a été copié, traduit et enseigné pendant plus de deux mille ans : c’est le manuel le plus durable de l’histoire.',
      en: 'A Greek mathematician of Alexandria, he gathered the geometry of his day into the Elements, starting from a few obvious statements and proving everything else, step by step. That book was copied, translated and taught for more than two thousand years: the most enduring textbook in history.',
    },
    cartes: [{ id: 'le-tour-et-la-surface', lien: { fr: 'Il a écrit le livre de géométrie qu’on a utilisé pendant deux mille ans.', en: 'He wrote the geometry book that was used for two thousand years.' } }],
  },
  {
    id: 'adolphe-quetelet', nom: 'Adolphe Quetelet', naissance: 1796, mort: 1874,
    portrait: {
      fr: 'Astronome belge devenu statisticien, il a appliqué aux populations humaines les méthodes du ciel : mesurer beaucoup, puis chercher la moyenne et l’écart. Il a inventé l’« homme moyen », et l’indice de masse corporelle qui porte encore son nom. Cet « homme moyen » ne décrivait pourtant personne en particulier — d’autres après lui le lui ont reproché.',
      en: 'A Belgian astronomer turned statistician, he applied to human populations the methods of the sky: measure a great deal, then look for the average and the spread. He invented the “average man”, and the body mass index that still carries his name. That “average man”, though, described nobody in particular — others after him held it against him.',
    },
    cartes: [
      { id: 'la-moyenne', lien: { fr: 'Il a appliqué la moyenne aux humains, et inventé l’idée d’« homme moyen ».', en: 'He applied the average to human beings, and invented the idea of the “average man”.' } },
      { id: 'les-pourcentages', lien: { fr: 'Il a répandu l’habitude de compter les gens en parts de cent.', en: 'He spread the habit of counting people in parts of a hundred.' } },
    ],
  },

  // ── Les animaux ──────────────────────────────────────────────────────────
  {
    id: 'maria-sibylla-merian', nom: 'Maria Sibylla Merian', naissance: 1647, mort: 1717,
    portrait: {
      fr: 'Naturaliste et peintre allemande, elle a élevé des chenilles pour voir de ses yeux ce qu’elles devenaient, à une époque où l’on croyait encore les insectes nés de la boue. À cinquante-deux ans, elle est partie deux ans au Suriname avec sa fille, et en a rapporté des planches qui font toujours autorité.',
      en: 'A German naturalist and painter, she reared caterpillars to see with her own eyes what they became, at a time when insects were still thought to be born of mud. At fifty-two she left for two years in Suriname with her daughter, and brought back plates that still stand as authorities.',
    },
    cartes: [{ id: 'la-metamorphose-du-papillon', lien: { fr: 'Elle a élevé et peint les chenilles jusqu’au papillon, quand on croyait encore les insectes nés de la boue.', en: 'She raised and painted caterpillars all the way to the butterfly, when insects were still thought to be born from mud.' } }],
  },
  {
    id: 'michel-milinkovitch', nom: 'Michel Milinkovitch', naissance: 1963, mort: null,
    portrait: {
      fr: 'Biologiste belge, il a montré que le caméléon ne change pas de couleur avec des pigments mais en écartant de minuscules cristaux dans sa peau, qui renvoient alors une autre couleur. Son équipe a aussi expliqué que les écailles du crocodile ne sont pas dessinées par les gènes : la peau se fissure toute seule en poussant.',
      en: 'A Belgian biologist, he showed that a chameleon does not change colour with pigments but by spacing out tiny crystals in its skin, which then send back a different colour. His team also explained that a crocodile’s scales are not drawn by genes: the skin simply cracks as it grows.',
    },
    cartes: [{ id: 'pourquoi-le-cameleon-change-de-couleur', lien: { fr: 'Il a montré que le caméléon ne change pas de pigment : il écarte de minuscules cristaux dans sa peau.', en: 'He showed that the chameleon does not change pigment: it spreads tiny crystals in its skin.' } }],
  },
  {
    id: 'johannes-thienemann', nom: 'Johannes Thienemann', naissance: 1863, mort: 1938,
    portrait: {
      fr: 'Pasteur et ornithologue allemand, il a fondé en 1901 la première station de baguage d’oiseaux, sur la Baltique. En posant une bague numérotée à la patte, on pouvait enfin savoir où un oiseau reparaissait — et donc suivre les migrations au lieu de les imaginer.',
      en: 'A German pastor and ornithologist, he founded in 1901 the first bird-ringing station, on the Baltic. By putting a numbered ring on a leg, one could at last learn where a bird turned up again — and so follow migrations instead of imagining them.',
    },
    cartes: [{ id: 'la-migration-des-oiseaux', lien: { fr: 'Il a fondé la première station de baguage, qui a enfin révélé où vont les oiseaux.', en: 'He founded the first bird-ringing station, which finally revealed where they go.' } }],
  },
  {
    id: 'donald-griffin', nom: 'Donald Griffin', naissance: 1915, mort: 2003,
    portrait: {
      fr: 'Zoologiste américain, il a prouvé, encore étudiant et avec son camarade Robert Galambos, que les chauves-souris se dirigent en écoutant l’écho de leurs propres cris, trop aigus pour nos oreilles. Il a forgé le mot « écholocation ». Plus tard, il a défendu l’idée que les animaux pensent, ce qui lui a valu bien des disputes.',
      en: 'An American zoologist, he proved, while still a student and with his fellow student Robert Galambos, that bats find their way by listening to the echo of their own calls, too high for our ears. He coined the word “echolocation”. Later he argued that animals think, which earned him a great many quarrels.',
    },
    cartes: [
      { id: 'lecholocation-de-la-chauve-souris', lien: { fr: 'Il a prouvé que les chauves-souris crient trop aigu pour nous, et écoutent l’écho revenir.', en: 'He proved that bats shriek too high for us, and listen for the echo coming back.' } },
      { id: 'les-sons-quon-nentend-pas', lien: { fr: 'C’est lui qui a montré que des sons existent au-dessus de notre oreille.', en: 'He is the one who showed that sounds exist above our hearing.' } },
    ],
  },
  {
    id: 'tim-caro', nom: 'Tim Caro', naissance: 1954, mort: null,
    portrait: {
      fr: 'Zoologiste britannique, il a passé des années à tester une à une les explications proposées pour les rayures du zèbre. Camouflage, refroidissement, reconnaissance : aucune ne tenait. Il a habillé des chevaux de manteaux rayés et filmé les mouches : elles n’arrivent pas à se poser.',
      en: 'A British zoologist, he spent years testing one by one the explanations offered for the zebra’s stripes. Camouflage, cooling, recognition: none held up. He dressed horses in striped coats and filmed the flies: they cannot manage to land.',
    },
    cartes: [{ id: 'pourquoi-les-zebres-ont-des-rayures', lien: { fr: 'Il a habillé des chevaux de rayures pour montrer que les mouches s’y posent moins.', en: 'He dressed horses in stripes to show that flies land on them less.' } }],
  },
  {
    id: 'karl-von-frisch', nom: 'Karl von Frisch', naissance: 1886, mort: 1982,
    portrait: {
      fr: 'Zoologiste autrichien, il a déchiffré la danse des abeilles : en frétillant dans une certaine direction pendant une certaine durée, une butineuse indique à ses sœurs où trouver des fleurs, et à quelle distance. Il a aussi montré qu’elles voient l’ultraviolet. Prix Nobel en 1973.',
      en: 'An Austrian zoologist, he deciphered the dance of bees: by waggling in a certain direction for a certain time, a forager tells her sisters where to find flowers, and how far away. He also showed that they see ultraviolet. Nobel Prize in 1973.',
    },
    cartes: [
      { id: 'comment-les-abeilles-font-le-miel', lien: { fr: 'Il a déchiffré la danse par laquelle une abeille dit aux autres où trouver les fleurs.', en: 'He decoded the dance by which a bee tells the others where to find flowers.' } },
      { id: 'pourquoi-le-miel-ne-se-perime-pas', lien: { fr: 'Il a étudié toute la vie de la ruche, jusqu’à ce que les abeilles font du nectar.', en: 'He studied the whole life of the hive, right down to what bees do with nectar.' } },
    ],
  },
  {
    id: 'jean-henri-fabre', nom: 'Jean-Henri Fabre', naissance: 1823, mort: 1915,
    portrait: {
      fr: 'Instituteur français devenu entomologiste, il a passé sa vie à observer les insectes vivants dans son jardin plutôt qu’épinglés dans une boîte. Ses Souvenirs entomologiques racontent en dix volumes les mœurs des guêpes, des bousiers et des cigales, dans une langue si belle qu’on l’a proposé pour le prix Nobel de littérature.',
      en: 'A French schoolteacher turned entomologist, he spent his life watching insects alive in his garden rather than pinned in a box. His Souvenirs entomologiques tell in ten volumes the ways of wasps, dung beetles and cicadas, in prose so fine that he was put forward for the Nobel Prize in literature.',
    },
    cartes: [{ id: 'la-toile-de-laraignee', lien: { fr: 'Il a passé sa vie à observer les insectes et les araignées chez lui, et à tout noter.', en: 'He spent his life watching insects and spiders at home, and writing everything down.' } }],
  },
  {
    id: 'etienne-jules-marey', nom: 'Étienne-Jules Marey', naissance: 1830, mort: 1904,
    portrait: {
      fr: 'Physiologiste français, il a inventé le fusil photographique pour saisir le mouvement en une rafale d’images sur une seule plaque. Il a ainsi montré comment vole un oiseau, comment court un cheval, et comment un chat se retourne en tombant. Ses travaux ont ouvert la voie au cinéma.',
      en: 'A French physiologist, he invented the photographic gun to catch movement as a burst of images on a single plate. He showed this way how a bird flies, how a horse runs, and how a cat turns itself over as it falls. His work opened the way to cinema.',
    },
    cartes: [{ id: 'pourquoi-le-chat-retombe-sur-ses-pattes', lien: { fr: 'Il a filmé un chat en train de tomber, image par image, pour voir comment il se retourne.', en: 'He filmed a falling cat, frame by frame, to see how it turns itself over.' } }],
  },

  // ── La météo ─────────────────────────────────────────────────────────────
  {
    id: 'luke-howard', nom: 'Luke Howard', naissance: 1772, mort: 1864,
    portrait: {
      fr: 'Pharmacien quaker et météorologue du dimanche, il tenait depuis des années un journal du ciel londonien quand il proposa, en 1803, de nommer les nuages en latin. En classant des formes que tout le monde croyait trop changeantes pour être nommées, il a rendu le ciel descriptible — et donc étudiable. Goethe lui a écrit des poèmes.',
      en: 'A Quaker pharmacist and Sunday meteorologist, he had kept a journal of the London sky for years when, in 1803, he proposed naming the clouds in Latin. By classifying shapes everyone thought too changeable to be named, he made the sky describable — and so study-able. Goethe wrote poems to him.',
    },
    cartes: [{ id: 'les-nuages', lien: { fr: 'Il a donné leurs noms aux nuages : cumulus, stratus, cirrus.', en: 'He gave the clouds their names: cumulus, stratus, cirrus.' } }],
  },
  {
    id: 'horace-benedict-de-saussure', nom: 'Horace-Bénédict de Saussure', naissance: 1740, mort: 1799,
    portrait: {
      fr: 'Savant genevois, il a inventé le mot « géologie » au sens moderne et parcouru les Alpes pour comprendre comment les montagnes se sont formées. Il a mis au point l’hygromètre à cheveu, qui mesure l’humidité de l’air, et offert la prime qui a poussé les premiers hommes au sommet du mont Blanc.',
      en: 'A Genevan scholar, he coined the word “geology” in its modern sense and roamed the Alps to understand how mountains form. He devised the hair hygrometer, which measures the moisture in the air, and put up the prize that drove the first men to the summit of Mont Blanc.',
    },
    cartes: [{ id: 'pourquoi-il-fait-plus-froid-en-montagne', lien: { fr: 'Il a grimpé au mont Blanc avec ses instruments pour mesurer l’air en altitude.', en: 'He climbed Mont Blanc with his instruments to measure the air high up.' } }],
  },
  {
    id: 'benjamin-franklin', nom: 'Benjamin Franklin', naissance: 1706, mort: 1790,
    portrait: {
      fr: 'Imprimeur, savant et homme d’État américain, il a montré que la foudre est de l’électricité et inventé le paratonnerre, qu’il a refusé de breveter. On lui doit aussi les lunettes à double foyer et le poêle qui porte son nom. Il fut ensuite l’un des pères des États-Unis.',
      en: 'An American printer, scientist and statesman, he showed that lightning is electricity and invented the lightning rod, which he refused to patent. We also owe him bifocal spectacles and the stove that carries his name. He went on to be one of the founders of the United States.',
    },
    cartes: [{ id: 'la-foudre-et-le-tonnerre', lien: { fr: 'Il a montré que la foudre est de l’électricité, et inventé le paratonnerre.', en: 'He showed that lightning is electricity, and invented the lightning rod.' } }],
  },
  {
    id: 'wilson-bentley', nom: 'Wilson Bentley', naissance: 1865, mort: 1931,
    portrait: {
      fr: 'Fermier du Vermont, il a bricolé à dix-neuf ans un microscope monté sur un appareil photo, et passé quarante-cinq hivers à photographier des flocons de neige sur un plateau noir, dehors, dans le froid. Plus de cinq mille clichés, et jamais deux identiques.',
      en: 'A Vermont farmer, at nineteen he rigged a microscope onto a camera, and spent forty-five winters photographing snowflakes on a black tray, outdoors, in the cold. More than five thousand pictures, and never two alike.',
    },
    cartes: [
      { id: 'la-neige', lien: { fr: 'Il a photographié des milliers de flocons et n’en a jamais trouvé deux identiques.', en: 'He photographed thousands of snowflakes and never found two alike.' } },
      { id: 'le-givre', lien: { fr: 'Ses photographies montrent aussi les cristaux qui se forment sur les vitres.', en: 'His photographs also show the crystals that form on windowpanes.' } },
    ],
  },
  {
    id: 'tor-bergeron', nom: 'Tor Bergeron', naissance: 1891, mort: 1977,
    portrait: {
      fr: 'Météorologue suédois, il a expliqué pourquoi il pleut : dans un nuage froid, les cristaux de glace grossissent aux dépens des gouttelettes d’eau qui les entourent, jusqu’à tomber. Ce mécanisme porte son nom et reste, sous nos latitudes, la principale façon dont la pluie se forme.',
      en: 'A Swedish meteorologist, he explained why it rains: inside a cold cloud, ice crystals grow at the expense of the water droplets around them, until they fall. That mechanism carries his name and remains, in our latitudes, the main way rain forms.',
    },
    cartes: [{ id: 'la-grele', lien: { fr: 'Il a expliqué comment la glace grossit dans un nuage jusqu’à devenir trop lourde.', en: 'He explained how ice grows inside a cloud until it becomes too heavy.' } }],
  },
  {
    id: 'john-aitken', nom: 'John Aitken', naissance: 1839, mort: 1919,
    portrait: {
      fr: 'Physicien écossais, il a montré que la vapeur d’eau ne se condense pas toute seule : il lui faut une poussière, un grain de sel ou de fumée pour s’y accrocher. Sans ces minuscules noyaux, il n’y aurait ni nuage ni brouillard. Il a construit l’appareil qui permet de les compter.',
      en: 'A Scottish physicist, he showed that water vapour does not condense on its own: it needs a speck of dust, a grain of salt or of smoke to cling to. Without those tiny nuclei there would be neither cloud nor fog. He built the apparatus that counts them.',
    },
    cartes: [
      { id: 'le-brouillard', lien: { fr: 'Il a découvert que l’eau a besoin d’une poussière pour se condenser en gouttelette.', en: 'He discovered that water needs a speck of dust to condense into a droplet.' } },
      { id: 'la-rosee-du-matin', lien: { fr: 'C’est le même refroidissement qui dépose la rosée sur l’herbe au petit matin.', en: 'It is the same cooling that lays dew on the grass in the early morning.' } },
    ],
  },

  // ── Le son ───────────────────────────────────────────────────────────────
  {
    id: 'ernst-chladni', nom: 'Ernst Chladni', naissance: 1756, mort: 1827,
    portrait: {
      fr: 'Physicien allemand, il a saupoudré du sable sur des plaques de métal et les a frottées avec un archet : le sable dessine les figures des vibrations. Il a aussi soutenu, contre tous, que les pierres tombées du ciel viennent réellement de l’espace — ce qu’on a fini par admettre.',
      en: 'A German physicist, he sprinkled sand on metal plates and drew a bow across them: the sand traces out the shapes of the vibrations. He also argued, against everyone, that stones fallen from the sky really do come from space — which was eventually accepted.',
    },
    cartes: [
      { id: 'comment-chante-une-guitare', lien: { fr: 'Il a rendu les vibrations visibles, en saupoudrant du sable sur des plaques qui chantent.', en: 'He made vibrations visible, by sprinkling sand on plates that sing.' } },
      { id: 'aigu-ou-grave', lien: { fr: 'Ses figures montrent qu’un son aigu fait vibrer la matière plus vite.', en: 'His figures show that a high sound makes matter vibrate faster.' } },
    ],
  },
  {
    id: 'manuel-garcia', nom: 'Manuel García', naissance: 1805, mort: 1906,
    portrait: {
      fr: 'Professeur de chant espagnol, il voulait voir ce que font les cordes vocales pendant qu’on chante. Il a bricolé deux miroirs et une lampe, et a regardé dans sa propre gorge : le laryngoscope était né. Devenu instrument médical, il lui a valu un doctorat honoraire. Il a vécu cent un ans.',
      en: 'A Spanish singing teacher, he wanted to see what the vocal folds do while one sings. He rigged up two mirrors and a lamp, and looked into his own throat: the laryngoscope was born. Turned into a medical instrument, it earned him an honorary doctorate. He lived to a hundred and one.',
    },
    cartes: [{ id: 'pourquoi-les-voix-sont-differentes', lien: { fr: 'Chanteur, il a inventé le miroir qui permet de voir ses propres cordes vocales.', en: 'A singer himself, he invented the mirror that lets you see your own vocal cords.' } }],
  },
  {
    id: 'georg-von-bekesy', nom: 'Georg von Békésy', naissance: 1899, mort: 1972,
    portrait: {
      fr: 'Physicien hongrois entré dans la biologie par la téléphonie, il a compris comment l’oreille interne trie les sons : une onde parcourt la cochlée, l’escargot de l’oreille, et atteint son maximum à un endroit différent selon la hauteur du son. Prix Nobel de médecine en 1961, sans avoir jamais été médecin.',
      en: 'A Hungarian physicist who came to biology through telephones, he understood how the inner ear sorts sounds: a wave runs along the cochlea, the snail of the ear, and peaks at a different place depending on the pitch. Nobel Prize in medicine in 1961, without ever having been a doctor.',
    },
    cartes: [{ id: 'comment-loreille-entend', lien: { fr: 'Il a vu comment l’escargot de l’oreille trie les sons, du grave à l’aigu.', en: 'He saw how the snail of the ear sorts sounds, from low to high.' } }],
  },
  {
    id: 'alexander-graham-bell', nom: 'Alexander Graham Bell', naissance: 1847, mort: 1922,
    portrait: {
      fr: 'Écossais installé au Canada, professeur pour enfants sourds — sa mère et sa femme l’étaient — il cherchait à rendre la parole visible quand il a mis au point le téléphone, breveté en 1876. Il a ensuite travaillé sur les cerfs-volants porteurs, les hydroptères et l’enregistrement du son.',
      en: 'A Scot settled in Canada and a teacher of deaf children — his mother and his wife were deaf — he was trying to make speech visible when he devised the telephone, patented in 1876. He went on to work on man-carrying kites, hydrofoils and sound recording.',
    },
    cartes: [{ id: 'quand-le-bruit-fait-mal', lien: { fr: 'L’unité qui mesure le bruit, le décibel, porte son nom.', en: 'The unit that measures noise, the decibel, carries his name.' } }],
  },
  {
    id: 'christian-doppler', nom: 'Christian Doppler', naissance: 1803, mort: 1853,
    portrait: {
      fr: 'Physicien autrichien, il a prédit en 1842 qu’un son ou une lumière change de fréquence si la source s’approche ou s’éloigne. Trois ans plus tard, on l’a vérifié en faisant jouer des trompettistes sur un train lancé. Cet effet sert aujourd’hui à mesurer la vitesse des voitures, du sang et des galaxies.',
      en: 'An Austrian physicist, he predicted in 1842 that a sound or a light changes frequency if its source moves closer or further away. Three years later it was checked by having trumpeters play on a speeding train. That effect is now used to measure the speed of cars, of blood and of galaxies.',
    },
    cartes: [{ id: 'la-sirene-qui-change', lien: { fr: 'Il a prédit que le son d’une source qui approche monte, puis descend quand elle s’éloigne.', en: 'He predicted that the sound of an approaching source rises, then falls as it moves away.' } }],
  },
  {
    id: 'thomas-edison', nom: 'Thomas Edison', naissance: 1847, mort: 1931,
    portrait: {
      fr: 'Inventeur américain, il a déposé plus de mille brevets, dont le phonographe — la première machine à garder une voix. Il n’a pas inventé l’ampoule seul, mais le système entier qui la rend utile : centrale, câbles, compteurs. Sa vraie invention, peut-être, est le laboratoire de recherche industriel.',
      en: 'An American inventor, he filed more than a thousand patents, among them the phonograph — the first machine to keep a voice. He did not invent the light bulb single-handed, but the whole system that makes it useful: power station, cables, meters. His real invention, perhaps, was the industrial research laboratory.',
    },
    cartes: [{ id: 'ma-voix-enregistree', lien: { fr: 'Il a enregistré et rejoué une voix humaine pour la première fois.', en: 'He recorded and played back a human voice for the very first time.' } }],
  },
  {
    id: 'pythagore', nom: 'Pythagore', naissance: -580, mort: -495,
    portrait: {
      fr: 'Penseur grec, il a fondé une école où l’on croyait que tout, dans le monde, s’explique par des nombres. On y a découvert que les accords musicaux correspondent à des rapports simples de longueurs de corde. Le théorème qui porte son nom était connu avant lui : ce sont ses élèves qui l’ont démontré.',
      en: 'A Greek thinker, he founded a school where it was held that everything in the world is explained by numbers. There it was discovered that musical harmonies match simple ratios of string lengths. The theorem that carries his name was known before him: it was his pupils who proved it.',
    },
    cartes: [{ id: 'les-notes-qui-vont-ensemble', lien: { fr: 'Il a découvert que deux notes s’accordent quand les longueurs de corde sont dans un rapport simple.', en: 'He discovered that two notes agree when the string lengths are in a simple ratio.' } }],
  },

  // ── Les dinosaures ───────────────────────────────────────────────────────
  {
    id: 'richard-owen', nom: 'Richard Owen', naissance: 1804, mort: 1892,
    portrait: {
      fr: 'Anatomiste anglais, il a forgé en 1842 le mot « dinosaure », après avoir compris que plusieurs fossiles géants appartenaient à un même groupe de reptiles disparus. Il a fondé le Muséum d’histoire naturelle de Londres. Homme difficile, adversaire acharné de Darwin, il s’est souvent attribué le travail des autres.',
      en: 'An English anatomist, he coined the word “dinosaur” in 1842, having realised that several giant fossils belonged to one group of extinct reptiles. He founded the Natural History Museum in London. A difficult man and a fierce opponent of Darwin, he often took credit for other people’s work.',
    },
    cartes: [
      { id: 'le-puzzle-des-os', lien: { fr: 'C’est lui qui a inventé le mot « dinosaure », en assemblant les os retrouvés.', en: 'He is the one who invented the word “dinosaur”, by piecing the found bones together.' } },
      { id: 'pourquoi-si-grands', lien: { fr: 'Il a décrit ces reptiles d’une taille qu’on n’imaginait pas possible.', en: 'He described these reptiles of a size nobody had imagined possible.' } },
    ],
  },
  {
    id: 'luis-alvarez', nom: 'Luis Alvarez', naissance: 1911, mort: 1988,
    portrait: {
      fr: 'Physicien américain, prix Nobel pour ses travaux sur les particules, il a aussi radiographié une pyramide aux rayons cosmiques. Avec son fils géologue, il a trouvé dans une fine couche d’argile une teneur en iridium qui ne pouvait venir que du ciel : c’est ainsi qu’est née l’hypothèse de l’astéroïde tueur de dinosaures.',
      en: 'An American physicist, a Nobel laureate for his work on particles, he also X-rayed a pyramid with cosmic rays. With his geologist son he found in a thin layer of clay an amount of iridium that could only have come from the sky: that is how the asteroid theory of the dinosaurs’ end was born.',
    },
    cartes: [{ id: 'le-jour-de-lasteroide', lien: { fr: 'Il a trouvé, dans une fine couche d’argile, la trace d’un astéroïde tombé sur la Terre.', en: 'He found, in a thin layer of clay, the trace of an asteroid that struck the Earth.' } }],
  },
  {
    id: 'john-ostrom', nom: 'John Ostrom', naissance: 1928, mort: 2005,
    portrait: {
      fr: 'Paléontologue américain, il a décrit Deinonychus, un petit prédateur agile aux os creux, et compris qu’il ressemblait beaucoup trop à un oiseau pour que ce soit un hasard. Il a ainsi ranimé l’idée que les oiseaux sont des dinosaures, et lancé la « renaissance des dinosaures » des années 1970.',
      en: 'An American palaeontologist, he described Deinonychus, a small nimble predator with hollow bones, and saw that it looked far too much like a bird for that to be chance. He thereby revived the idea that birds are dinosaurs, and set off the “dinosaur renaissance” of the 1970s.',
    },
    cartes: [{ id: 'les-oiseaux-sont-des-dinosaures', lien: { fr: 'Il a démontré que les oiseaux descendent des dinosaures, os par os.', en: 'He proved that birds descend from dinosaurs, bone by bone.' } }],
  },
  {
    id: 'james-hutton', nom: 'James Hutton', naissance: 1726, mort: 1797,
    portrait: {
      fr: 'Géologue écossais, il a regardé des couches de roche pliées puis recouvertes et compris qu’il avait fallu, pour cela, des durées inimaginables. Contre les six mille ans qu’on prêtait alors à la Terre, il a écrit qu’il n’y voyait « ni trace d’un début, ni perspective d’une fin ». C’est la naissance du temps géologique.',
      en: 'A Scottish geologist, he looked at rock layers folded and then covered over, and understood that this must have taken unimaginable spans of time. Against the six thousand years the Earth was then granted, he wrote that he saw in it “no vestige of a beginning, no prospect of an end”. That is the birth of geological time.',
    },
    cartes: [{ id: 'il-y-a-tres-tres-longtemps', lien: { fr: 'Il a compris que la Terre est immensément vieille, en lisant les roches.', en: 'He understood that the Earth is immensely old, by reading the rocks.' } }],
  },
  {
    id: 'georges-cuvier', nom: 'Georges Cuvier', naissance: 1769, mort: 1832,
    portrait: {
      fr: 'Naturaliste français, il a fondé l’anatomie comparée et prouvé que des espèces ont bel et bien disparu — idée neuve et dérangeante à son époque. Il affirmait pouvoir reconstituer un animal entier à partir de quelques os. Il refusait pourtant l’évolution, et a combattu Lamarck toute sa vie.',
      en: 'A French naturalist, he founded comparative anatomy and proved that species really have died out — a new and unsettling idea in his day. He claimed he could rebuild a whole animal from a few bones. Yet he rejected evolution, and fought Lamarck all his life.',
    },
    cartes: [
      { id: 'carnivore-ou-herbivore', lien: { fr: 'Il disait pouvoir reconnaître un animal entier à partir d’une seule dent.', en: 'He claimed he could recognise a whole animal from a single tooth.' } },
      { id: 'apres-les-dinosaures', lien: { fr: 'Il a prouvé que des espèces entières, comme le mammouth, ont bel et bien disparu.', en: 'He proved that whole species, like the mammoth, really have disappeared.' } },
    ],
  },
  {
    id: 'edward-hitchcock', nom: 'Edward Hitchcock', naissance: 1793, mort: 1864,
    portrait: {
      fr: 'Pasteur et géologue américain, il a rassemblé des milliers d’empreintes fossiles de la vallée du Connecticut, persuadé qu’elles étaient d’immenses oiseaux. C’étaient des dinosaures. Il a fondé sans le savoir l’étude des traces, qui révèle ce qu’un squelette ne dit pas : la vitesse, la démarche, la vie en groupe.',
      en: 'An American pastor and geologist, he gathered thousands of fossil footprints from the Connecticut valley, convinced they belonged to enormous birds. They were dinosaurs. Without knowing it he founded the study of tracks, which reveals what a skeleton cannot: speed, gait, life in groups.',
    },
    cartes: [{ id: 'les-traces-de-pas', lien: { fr: 'Il a rassemblé des milliers d’empreintes fossiles, qu’il croyait être celles d’oiseaux géants.', en: 'He gathered thousands of fossil footprints, which he believed belonged to giant birds.' } }],
  },
  {
    id: 'xu-xing', nom: 'Xu Xing', naissance: 1969, mort: null,
    portrait: {
      fr: 'Paléontologue chinois, il a nommé plus d’espèces de dinosaures qu’aucun autre paléontologue vivant. Les schistes du Liaoning, où il fouille, conservent les plumes : c’est là qu’on a vu pour la première fois, sans discussion possible, des dinosaures emplumés — et même un à quatre ailes.',
      en: 'A Chinese palaeontologist, he has named more dinosaur species than anyone else alive. The shales of Liaoning, where he digs, preserve feathers: it was there that feathered dinosaurs were seen for the first time beyond argument — including one with four wings.',
    },
    cartes: [{ id: 'des-dinosaures-a-plumes', lien: { fr: 'Il a décrit plus de dinosaures à plumes que quiconque.', en: 'He has described more feathered dinosaurs than anyone else.' } }],
  },

  // ── Les océans ───────────────────────────────────────────────────────────
  {
    id: 'walter-munk', nom: 'Walter Munk', naissance: 1917, mort: 2019,
    portrait: {
      fr: 'Océanographe américain né en Autriche, il a prédit la hauteur des vagues pour les débarquements de 1944, puis suivi une houle née près de l’Antarctique jusqu’en Alaska, à travers tout le Pacifique. Il a travaillé sur les marées, la rotation de la Terre et le réchauffement des océans jusqu’à cent un ans.',
      en: 'An Austrian-born American oceanographer, he forecast wave heights for the 1944 landings, then tracked a swell born near Antarctica all the way to Alaska, right across the Pacific. He worked on tides, the Earth’s rotation and the warming of the oceans until the age of a hundred and one.',
    },
    cartes: [{ id: 'dou-viennent-les-vagues', lien: { fr: 'Il a suivi la houle d’une seule tempête à travers tout le Pacifique.', en: 'He followed the swell of a single storm right across the Pacific.' } }],
  },
  {
    id: 'matthew-fontaine-maury', nom: 'Matthew Fontaine Maury', naissance: 1806, mort: 1873,
    portrait: {
      fr: 'Officier de marine américain, blessé et affecté au dépôt des cartes, il a dépouillé des milliers de vieux livres de bord pour en tirer les vents et les courants de chaque zone. Ses cartes ont raccourci les traversées de plusieurs semaines. Son livre de 1855 est le premier traité d’océanographie.',
      en: 'An American naval officer, injured and posted to the depot of charts, he combed through thousands of old logbooks to draw out the winds and currents of every zone. His charts cut weeks off ocean crossings. His 1855 book is the first treatise of oceanography.',
    },
    cartes: [{ id: 'les-fleuves-dans-la-mer', lien: { fr: 'Il a dressé les cartes des courants marins à partir des carnets de bord des marins.', en: 'He drew the charts of ocean currents from sailors’ logbooks.' } }],
  },
  {
    id: 'william-beebe', nom: 'William Beebe', naissance: 1877, mort: 1962,
    portrait: {
      fr: 'Naturaliste américain, il est descendu en 1934 à plus de neuf cents mètres sous la mer dans la bathysphère, une boule d’acier suspendue à un câble, conçue avec Otis Barton. Il fut le premier à voir vivants les poissons lumineux des profondeurs, et à les décrire par téléphone à la surface.',
      en: 'An American naturalist, in 1934 he went more than nine hundred metres down into the sea in the bathysphere, a steel ball hung from a cable, designed with Otis Barton. He was the first to see the glowing fish of the deep alive, and to describe them by telephone to the surface.',
    },
    cartes: [
      { id: 'pourquoi-il-fait-noir-au-fond', lien: { fr: 'Enfermé dans une boule d’acier, il est descendu voir le noir absolu et ce qui y vit.', en: 'Shut inside a steel ball, he went down to see the absolute dark and what lives in it.' } },
      { id: 'la-pression-qui-ecrase', lien: { fr: 'Sa boule d’acier avait des parois énormes, pour résister à l’eau qui écrase.', en: 'His steel ball had enormous walls, to resist the water that crushes everything.' } },
    ],
  },
  {
    id: 'osamu-shimomura', nom: 'Osamu Shimomura', naissance: 1928, mort: 2018,
    portrait: {
      fr: 'Biochimiste japonais, il a passé des étés entiers à pêcher des méduses par dizaines de milliers pour en tirer quelques grammes de protéine. Devenue marqueur, cette molécule permet aujourd’hui d’allumer n’importe quelle cellule pour la suivre au microscope — un outil qui a transformé la biologie. Prix Nobel en 2008. Adolescent, il se trouvait à quinze kilomètres de Nagasaki le jour de la bombe.',
      en: 'A Japanese biochemist, he spent whole summers netting jellyfish by the tens of thousands to draw out a few grams of protein. Turned into a marker, that molecule now lets any cell be lit up and followed under a microscope — a tool that transformed biology. Nobel Prize in 2008. As a teenager, he was fifteen kilometres from Nagasaki on the day of the bomb.',
    },
    cartes: [{ id: 'les-animaux-qui-brillent', lien: { fr: 'Il a extrait d’une méduse la protéine qui brille en vert.', en: 'He extracted from a jellyfish the protein that glows green.' } }],
  },
  {
    id: 'robert-ballard', nom: 'Robert Ballard', naissance: 1942, mort: null,
    portrait: {
      fr: 'Océanographe américain, son équipe a retrouvé l’épave du Titanic en 1985, avec les Français de l’Ifremer et un robot sous-marin. Mais sa découverte la plus importante est ailleurs : les sources hydrothermales du fond des océans, et autour d’elles une vie entière qui ne doit rien au Soleil.',
      en: 'An American oceanographer, his team found the wreck of the Titanic in 1985, with the French of Ifremer and an underwater robot. But his most important discovery lies elsewhere: the hydrothermal vents of the deep sea floor, and around them a whole living world that owes nothing to the Sun.',
    },
    cartes: [{ id: 'les-sources-chaudes-du-fond', lien: { fr: 'Il a découvert, au fond de l’océan, des sources brûlantes grouillantes de vie sans soleil.', en: 'He discovered, at the bottom of the ocean, boiling springs teeming with life without any sun.' } }],
  },
  {
    id: 'victor-hensen', nom: 'Victor Hensen', naissance: 1835, mort: 1924,
    portrait: {
      fr: 'Physiologiste allemand, il a inventé le mot « plancton » — de grec « ce qui erre » — et le filet qui permet de le récolter en quantité mesurable. En comptant ce peuple invisible, il a montré qu’il est la base de toute la nourriture de la mer.',
      en: 'A German physiologist, he invented the word “plankton” — Greek for “that which drifts” — and the net that gathers it in measurable amounts. By counting that invisible multitude, he showed that it is the base of all the food in the sea.',
    },
    cartes: [{ id: 'le-plancton-minuscule', lien: { fr: 'Il a inventé le mot « plancton » et le filet pour l’attraper.', en: 'He invented the word “plankton”, and the net for catching it.' } }],
  },

  // ── La cuisine ───────────────────────────────────────────────────────────
  {
    id: 'eduard-buchner', nom: 'Eduard Buchner', naissance: 1860, mort: 1917,
    portrait: {
      fr: 'Chimiste allemand, il a broyé des cellules de levure et montré que le jus obtenu, où plus rien n’est vivant, fait quand même fermenter le sucre. La fermentation n’exige donc pas la vie, seulement des molécules : les enzymes. Prix Nobel en 1907.',
      en: 'A German chemist, he ground up yeast cells and showed that the juice obtained, in which nothing is alive any more, still ferments sugar. Fermentation therefore does not require life, only molecules: enzymes. Nobel Prize in 1907.',
    },
    cartes: [
      { id: 'pourquoi-le-pain-gonfle', lien: { fr: 'Il a montré que la fermentation marche même sans levure vivante : ce sont des molécules qui travaillent.', en: 'He showed that fermentation works even without living yeast: it is molecules doing the work.' } },
      { id: 'pourquoi-la-pomme-brunit', lien: { fr: 'Ce sont les mêmes molécules travailleuses, les enzymes, qui brunissent la pomme.', en: 'It is those same hard-working molecules, the enzymes, that brown the apple.' } },
    ],
  },
  {
    id: 'louis-camille-maillard', nom: 'Louis-Camille Maillard', naissance: 1878, mort: 1936,
    portrait: {
      fr: 'Médecin et chimiste français, il a décrit en 1912 la réaction entre les sucres et les protéines sous l’effet de la chaleur. Elle donne sa couleur et son goût à tout ce qui dore : le pain, la viande grillée, le café, le caramel. Il cherchait en réalité à comprendre comment le corps fabrique ses protéines.',
      en: 'A French physician and chemist, he described in 1912 the reaction between sugars and proteins under heat. It gives colour and flavour to everything that browns: bread, grilled meat, coffee, caramel. He was in fact trying to understand how the body builds its proteins.',
    },
    cartes: [{ id: 'pourquoi-ca-dore', lien: { fr: 'La réaction qui dore le pain et la viande porte son nom.', en: 'The reaction that browns bread and meat carries his name.' } }],
  },
  {
    id: 'eric-block', nom: 'Eric Block', naissance: 1942, mort: null,
    portrait: {
      fr: 'Chimiste américain, il a passé sa carrière sur la chimie du soufre de l’ail et de l’oignon : des molécules qui n’existent pas dans le bulbe intact et se fabriquent en une seconde quand on le coupe. C’est ce qui pique les yeux, et c’est aussi ce qui donne le goût.',
      en: 'An American chemist, he spent his career on the sulfur chemistry of garlic and onion: molecules that do not exist in the intact bulb and are made in a second when it is cut. That is what stings the eyes, and it is also what gives the taste.',
    },
    cartes: [{ id: 'pourquoi-loignon-fait-pleurer', lien: { fr: 'Il a percé la chimie du soufre de l’oignon et de l’ail.', en: 'He cracked the sulfur chemistry of the onion and of garlic.' } }],
  },
  {
    id: 'wilbur-scoville', nom: 'Wilbur Scoville', naissance: 1865, mort: 1942,
    portrait: {
      fr: 'Pharmacien américain, il a imaginé en 1912 une façon de comparer la force des piments : diluer l’extrait dans de l’eau sucrée jusqu’à ce qu’un jury ne sente plus rien. Le nombre de dilutions donne l’échelle qui porte son nom, encore utilisée aujourd’hui — avec des machines à la place du jury.',
      en: 'An American pharmacist, he devised in 1912 a way to compare the strength of chillies: dilute the extract in sugared water until a panel can taste nothing. The number of dilutions gives the scale that carries his name, still used today — with machines in place of the panel.',
    },
    cartes: [{ id: 'pourquoi-le-piment-brule', lien: { fr: 'Il a inventé l’échelle qui mesure la force d’un piment.', en: 'He invented the scale that measures how strong a chilli is.' } }],
  },
  {
    id: 'christian-anfinsen', nom: 'Christian Anfinsen', naissance: 1916, mort: 1995,
    portrait: {
      fr: 'Biochimiste américain, il a montré qu’une protéine dépliée se replie toute seule dans la bonne forme, sans aide extérieure : toute l’information est déjà dans la chaîne. Ce principe, qui lui a valu le prix Nobel en 1972, est le point de départ de tout ce qu’on sait aujourd’hui du repliement des protéines.',
      en: 'An American biochemist, he showed that an unfolded protein folds itself back into the right shape, with no outside help: all the information is already in the chain. That principle, which won him the Nobel Prize in 1972, is the starting point of everything we now know about protein folding.',
    },
    cartes: [{ id: 'pourquoi-loeuf-durcit', lien: { fr: 'Il a expliqué comment une protéine se replie — et ce qui arrive quand la chaleur la déplie.', en: 'He explained how a protein folds — and what happens when heat unfolds it.' } }],
  },
];
