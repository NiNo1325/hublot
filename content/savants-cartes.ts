/**
 * L'appariement carte ↔ savant : une carte, un savant, et réciproquement.
 *
 * C'est la fondation du fil rouge : chaque carte du catalogue tient un savant
 * prisonnier, et c'est en répondant juste à sa question qu'on le libère. La
 * relation doit donc être stricte — un savant sans carte resterait enfermé pour
 * toujours, une carte sans savant ne libérerait personne.
 *
 * Le rattachement est honnête ou il n'est rien. On ne prétend jamais qu'un
 * savant a « découvert » le sujet d'une carte quand ce n'est pas le cas : le
 * lien dit ce qu'il a vraiment fait, et c'est parfois « il l'a décrit le
 * premier » ou « il a mesuré la chose ». Une attribution inventée serait une
 * erreur scientifique servie à un enfant, ce que cette application existe
 * précisément pour ne pas faire.
 *
 * `aRevoir` marque les rattachements les plus discutables : soit le savant est
 * obscur, soit le lien est indirect. Ils sont justes, mais méritent un arbitrage
 * avant qu'on écrive leurs fiches.
 *
 * Les vingt savants déjà illustrés (`public/images/wall-of-fame/`) sont tous
 * repris, chacun sur la carte qui lui va le mieux : leurs illustrations
 * existent, les perdre serait un gâchis.
 */
export interface AppariementSavant {
  /** Identifiant de carte, dans `content/cards.ts`. */
  carte: string;
  /** Slug du savant : nommera aussi son illustration. */
  savant: string;
  nom: string;
  naissance: number;
  /** `null` pour une personne vivante. Négatif avant notre ère. */
  mort: number | null;
  /** Ce qu'il a réellement fait sur ce sujet. Une ligne. */
  lien: string;
  /** Le rattachement mérite une relecture. */
  aRevoir?: boolean;
  /** Illustration déjà présente dans `public/images/wall-of-fame`. */
  illustre?: boolean;
}

export const appariements: AppariementSavant[] = [
  // ── Les sciences de la Terre ────────────────────────────────────────────
  {
    carte: 'cycle-de-leau', savant: 'pierre-perrault', nom: 'Pierre Perrault',
    naissance: 1611, mort: 1680,
    lien: 'Il a mesuré la pluie tombée sur un bassin et prouvé qu’elle suffit à faire couler les rivières.',
  },
  {
    carte: 'les-volcans', savant: 'haroun-tazieff', nom: 'Haroun Tazieff',
    naissance: 1914, mort: 1998,
    lien: 'Il est descendu filmer les volcans en éruption, au plus près de la lave.',
  },
  {
    carte: 'pourquoi-la-terre-tremble', savant: 'inge-lehmann', nom: 'Inge Lehmann',
    naissance: 1888, mort: 1993,
    lien: 'En écoutant les séismes traverser la Terre, elle a découvert qu’elle a une graine solide au centre.',
  },
  {
    carte: 'les-fossiles', savant: 'nicolas-stenon', nom: 'Nicolas Sténon',
    naissance: 1638, mort: 1686,
    lien: 'Il a compris que les « pierres à langue » étaient des dents de requin, et que les couches se déposent dans l’ordre.',
  },
  {
    carte: 'le-vent', savant: 'gaspard-gustave-coriolis', nom: 'Gaspard-Gustave Coriolis',
    naissance: 1792, mort: 1843,
    lien: 'Il a décrit la force qui dévie les vents parce que la Terre tourne sous eux.',
  },
  {
    carte: 'les-marees', savant: 'pierre-simon-laplace', nom: 'Pierre-Simon Laplace',
    naissance: 1749, mort: 1827,
    lien: 'Il a écrit la théorie qui explique le mouvement réel des marées, et pas seulement leur cause.',
  },
  {
    carte: 'pourquoi-le-ciel-est-bleu', savant: 'lord-rayleigh', nom: 'Lord Rayleigh',
    naissance: 1842, mort: 1919,
    lien: 'Il a calculé pourquoi l’air disperse le bleu plus que le rouge — cette diffusion porte son nom.',
  },
  {
    carte: 'pourquoi-la-mer-est-salee', savant: 'edmond-halley', nom: 'Edmond Halley',
    naissance: 1656, mort: 1742,
    lien: 'Il a proposé de peser le sel des mers pour deviner depuis combien de temps les fleuves s’y déversent.',
  },
  {
    carte: 'dou-vient-le-petrole', savant: 'mikhail-lomonossov', nom: 'Mikhaïl Lomonossov',
    naissance: 1711, mort: 1765,
    lien: 'Il a soutenu, bien avant les autres, que le pétrole vient de restes d’êtres vivants enfouis.',
  },
  {
    carte: 'le-sol-est-vivant', savant: 'selman-waksman', nom: 'Selman Waksman',
    naissance: 1888, mort: 1973,
    lien: 'Il a fouillé la vie microscopique du sol et en a tiré des antibiotiques.',
  },

  // ── L'espace ────────────────────────────────────────────────────────────
  {
    carte: 'jour-et-nuit', savant: 'nicolas-copernic', nom: 'Nicolas Copernic',
    naissance: 1473, mort: 1543,
    lien: 'Il a osé dire que c’est la Terre qui tourne, et non le Soleil qui en fait le tour.',
  },
  {
    carte: 'les-phases-de-la-lune', savant: 'galilee', nom: 'Galilée',
    naissance: 1564, mort: 1642, illustre: true,
    lien: 'Il a dessiné la Lune à la lunette, ses cratères et ses phases, nuit après nuit.',
  },
  {
    carte: 'pourquoi-il-y-a-des-saisons', savant: 'milutin-milankovic', nom: 'Milutin Milanković',
    naissance: 1879, mort: 1958,
    lien: 'Il a calculé comment l’inclinaison et l’orbite de la Terre règlent les saisons et les glaciations.',
  },
  {
    carte: 'les-etoiles', savant: 'cecilia-payne', nom: 'Cecilia Payne-Gaposchkin',
    naissance: 1900, mort: 1979,
    lien: 'Elle a découvert que les étoiles sont faites d’hydrogène — personne ne voulait la croire.',
  },
  {
    carte: 'pourquoi-les-astronautes-flottent', savant: 'katherine-johnson', nom: 'Katherine Johnson',
    naissance: 1918, mort: 2020, illustre: true,
    lien: 'Elle a calculé à la main les trajectoires qui mettent une capsule en orbite, donc en chute libre.',
  },
  {
    carte: 'les-trous-noirs', savant: 'stephen-hawking', nom: 'Stephen Hawking',
    naissance: 1942, mort: 2018, illustre: true,
    lien: 'Il a montré qu’un trou noir n’est pas tout à fait noir : il s’évapore lentement.',
  },
  {
    carte: 'les-etoiles-filantes', savant: 'giovanni-schiaparelli', nom: 'Giovanni Schiaparelli',
    naissance: 1835, mort: 1910,
    lien: 'Il a relié les pluies d’étoiles filantes aux poussières laissées par les comètes.',
  },
  {
    carte: 'les-planetes', savant: 'johannes-kepler', nom: 'Johannes Kepler',
    naissance: 1571, mort: 1630,
    lien: 'Il a trouvé que les planètes tournent en ellipses, et non en cercles parfaits.',
  },
  {
    carte: 'la-face-cachee-de-la-lune', savant: 'serguei-korolev', nom: 'Sergueï Korolev',
    naissance: 1907, mort: 1966,
    lien: 'Il a conçu la sonde qui a photographié pour la première fois la face cachée de la Lune.',
  },
  {
    carte: 'les-eclipses', savant: 'albert-einstein', nom: 'Albert Einstein',
    naissance: 1879, mort: 1955, illustre: true,
    lien: 'C’est pendant une éclipse qu’on a vérifié sa théorie : la lumière des étoiles se courbe près du Soleil.',
  },

  // ── Le vivant ───────────────────────────────────────────────────────────
  {
    carte: 'comment-poussent-les-plantes', savant: 'jan-baptist-van-helmont', nom: 'Jan Baptist van Helmont',
    naissance: 1580, mort: 1644,
    lien: 'Il a pesé un saule et sa terre pendant cinq ans pour savoir d’où venait le bois.',
  },
  {
    carte: 'le-coeur-et-le-sang', savant: 'william-harvey', nom: 'William Harvey',
    naissance: 1578, mort: 1657,
    lien: 'Il a montré que le sang tourne en boucle, poussé par le cœur.',
  },
  {
    carte: 'les-microbes', savant: 'alexander-fleming', nom: 'Alexander Fleming',
    naissance: 1881, mort: 1955, illustre: true,
    lien: 'Une moisissure tombée par hasard dans sa boîte tuait les microbes : la pénicilline.',
  },
  {
    carte: 'pourquoi-on-dort', savant: 'nathaniel-kleitman', nom: 'Nathaniel Kleitman',
    naissance: 1895, mort: 1999,
    lien: 'Il a découvert le sommeil où les yeux bougent sous les paupières, celui des rêves.',
  },
  {
    carte: 'pourquoi-on-ressemble-a-ses-parents', savant: 'rosalind-franklin', nom: 'Rosalind Franklin',
    naissance: 1920, mort: 1958, illustre: true,
    lien: 'Sa photographie de l’ADN a révélé sa forme en double hélice.',
  },
  {
    carte: 'comment-on-respire', savant: 'john-scott-haldane', nom: 'John Scott Haldane',
    naissance: 1860, mort: 1936,
    lien: 'Il a compris que c’est le gaz carbonique, et non le manque d’air, qui commande la respiration.',
  },
  {
    carte: 'le-voyage-de-la-nourriture', savant: 'ivan-pavlov', nom: 'Ivan Pavlov',
    naissance: 1849, mort: 1936,
    lien: 'Il a étudié la digestion pas à pas, de la salive à l’estomac.',
  },
  {
    carte: 'le-cerveau', savant: 'santiago-ramon-y-cajal', nom: 'Santiago Ramón y Cajal',
    naissance: 1852, mort: 1934,
    lien: 'Il a dessiné les neurones un par un et montré qu’ils ne se touchent pas tout à fait.',
  },
  {
    carte: 'les-os', savant: 'wilhelm-rontgen', nom: 'Wilhelm Röntgen',
    naissance: 1845, mort: 1923,
    lien: 'Il a trouvé les rayons X — la première image d’os vivants est celle de la main de sa femme.',
  },
  {
    carte: 'levolution', savant: 'jane-goodall', nom: 'Jane Goodall',
    naissance: 1934, mort: null, illustre: true, aRevoir: true,
    lien: 'Elle a vu des chimpanzés fabriquer des outils, ce qui a rapproché l’homme des autres animaux.',
  },

  // ── La physique ─────────────────────────────────────────────────────────
  {
    carte: 'pourquoi-tout-tombe', savant: 'isaac-newton', nom: 'Isaac Newton',
    naissance: 1643, mort: 1727, illustre: true,
    lien: 'Il a compris que la pomme et la Lune tombent pour la même raison.',
  },
  {
    carte: 'les-aimants', savant: 'william-gilbert', nom: 'William Gilbert',
    naissance: 1544, mort: 1603,
    lien: 'Il a montré que la Terre elle-même est un aimant, et c’est pour ça que la boussole marche.',
  },
  {
    carte: 'pourquoi-on-voit-les-couleurs', savant: 'ibn-al-haytham', nom: 'Ibn al-Haytham',
    naissance: 965, mort: 1040, illustre: true,
    lien: 'Il a établi que la lumière entre dans l’œil, et non l’inverse comme on le croyait.',
  },
  {
    carte: 'comment-voyage-le-son', savant: 'marin-mersenne', nom: 'Marin Mersenne',
    naissance: 1588, mort: 1648,
    lien: 'Il a mesuré la vitesse du son, avec un écho et beaucoup de patience.',
  },
  {
    carte: 'lelectricite', savant: 'nikola-tesla', nom: 'Nikola Tesla',
    naissance: 1856, mort: 1943, illustre: true,
    lien: 'Il a imposé le courant alternatif, celui qui arrive aujourd’hui dans les prises.',
  },
  {
    carte: 'le-chaud-et-le-froid', savant: 'lord-kelvin', nom: 'Lord Kelvin',
    naissance: 1824, mort: 1907,
    lien: 'Il a trouvé qu’il existe un froid absolu, en dessous duquel on ne peut pas descendre.',
  },
  {
    carte: 'pourquoi-ca-sarrete', savant: 'guillaume-amontons', nom: 'Guillaume Amontons',
    naissance: 1663, mort: 1705,
    lien: 'Il a énoncé les lois du frottement, ce qui freine tout ce qui glisse.',
  },
  {
    carte: 'les-atomes', savant: 'dmitri-mendeleiev', nom: 'Dmitri Mendeleïev',
    naissance: 1834, mort: 1907, illustre: true,
    lien: 'Il a rangé les atomes dans un tableau, en laissant des cases vides pour ceux qu’on n’avait pas encore trouvés.',
  },
  {
    carte: 'lenergie', savant: 'marie-curie', nom: 'Marie Curie',
    naissance: 1867, mort: 1934, illustre: true,
    lien: 'Elle a découvert que certains atomes libèrent de l’énergie tout seuls : la radioactivité.',
  },
  {
    carte: 'le-poids-et-la-masse', savant: 'henry-cavendish', nom: 'Henry Cavendish',
    naissance: 1731, mort: 1810,
    lien: 'Il a pesé la Terre entière, avec deux boules de plomb et un fil.',
  },

  // ── La chimie ───────────────────────────────────────────────────────────
  {
    carte: 'le-volcan-de-vinaigre', savant: 'joseph-black', nom: 'Joseph Black',
    naissance: 1728, mort: 1799,
    lien: 'Il a identifié le gaz carbonique, celui qui fait mousser le vinaigre sur le bicarbonate.',
  },
  {
    carte: 'les-etats-de-la-matiere', savant: 'johannes-van-der-waals', nom: 'Johannes van der Waals',
    naissance: 1837, mort: 1923,
    lien: 'Il a expliqué comment un gaz devient liquide, par les forces qui attirent les molécules.',
  },
  {
    carte: 'ou-va-le-sucre-dans-leau', savant: 'francois-marie-raoult', nom: 'François-Marie Raoult',
    naissance: 1830, mort: 1901,
    lien: 'Il a mesuré ce que devient l’eau quand on y dissout quelque chose.',
  },
  {
    carte: 'de-quoi-est-fait-lair', savant: 'carl-wilhelm-scheele', nom: 'Carl Wilhelm Scheele',
    naissance: 1742, mort: 1786,
    lien: 'Il a séparé l’air en plusieurs gaz, dont celui qu’on respire, avant tout le monde.',
  },
  {
    carte: 'le-feu', savant: 'antoine-lavoisier', nom: 'Antoine Lavoisier',
    naissance: 1743, mort: 1794,
    lien: 'Il a prouvé que brûler, c’est se combiner à l’oxygène — rien ne se perd, rien ne se crée.',
  },
  {
    carte: 'la-rouille', savant: 'humphry-davy', nom: 'Humphry Davy',
    naissance: 1778, mort: 1829,
    lien: 'Il a protégé les coques des bateaux de la corrosion, en leur donnant un autre métal à ronger.',
  },
  {
    carte: 'pourquoi-le-savon-lave', savant: 'michel-eugene-chevreul', nom: 'Michel Eugène Chevreul',
    naissance: 1786, mort: 1889,
    lien: 'Il a percé la chimie des corps gras, donc celle du savon.',
  },
  {
    carte: 'les-acides-et-les-bases', savant: 'svante-arrhenius', nom: 'Svante Arrhenius',
    naissance: 1859, mort: 1927,
    lien: 'Il a dit ce qu’est un acide : quelque chose qui libère des particules chargées dans l’eau.',
  },
  {
    carte: 'pourquoi-ca-sent', savant: 'linda-buck', nom: 'Linda Buck',
    naissance: 1947, mort: null,
    lien: 'Elle a trouvé les capteurs du nez, toute une famille de détecteurs d’odeurs.',
  },
  {
    carte: 'pourquoi-la-glace-flotte', savant: 'linus-pauling', nom: 'Linus Pauling',
    naissance: 1901, mort: 1994,
    lien: 'Il a décrit comment les molécules d’eau s’accrochent, ce qui rend la glace plus légère que l’eau.',
  },

  // ── Construire ──────────────────────────────────────────────────────────
  {
    carte: 'pourquoi-les-ponts-tiennent', savant: 'gustave-eiffel', nom: 'Gustave Eiffel',
    naissance: 1832, mort: 1923,
    lien: 'Il a bâti des ponts en treillis, où chaque barre tire ou pousse juste ce qu’il faut.',
  },
  {
    carte: 'comment-vole-un-avion', savant: 'leonard-de-vinci', nom: 'Léonard de Vinci',
    naissance: 1452, mort: 1519, illustre: true,
    lien: 'Il a étudié le vol des oiseaux et dessiné des machines volantes quatre siècles trop tôt.',
  },
  {
    carte: 'les-leviers', savant: 'heron-dalexandrie', nom: 'Héron d’Alexandrie',
    naissance: 10, mort: 70,
    lien: 'Il a décrit les machines simples — levier, treuil, coin — et construit des automates avec.',
  },
  {
    carte: 'les-engrenages', savant: 'al-jazari', nom: 'Al-Jazari',
    naissance: 1136, mort: 1206,
    lien: 'Il a dessiné et construit des machines à engrenages d’une précision inouïe pour son temps.',
  },
  {
    carte: 'pourquoi-les-bateaux-flottent', savant: 'simon-stevin', nom: 'Simon Stevin',
    naissance: 1548, mort: 1620,
    lien: 'Il a établi comment l’eau pousse sur ce qu’on y plonge, quelle que soit la forme du récipient.',
  },
  {
    carte: 'les-poulies', savant: 'vitruve', nom: 'Vitruve',
    naissance: -80, mort: -15,
    lien: 'Il a écrit le manuel des machines de chantier : poulies, palans, grues.',
  },
  {
    carte: 'comment-avance-une-fusee', savant: 'constantin-tsiolkovski', nom: 'Constantin Tsiolkovski',
    naissance: 1857, mort: 1935,
    lien: 'Il a écrit l’équation des fusées : on avance en jetant de la matière derrière soi.',
  },
  {
    carte: 'comment-on-freine', savant: 'elisha-otis', nom: 'Elisha Otis',
    naissance: 1811, mort: 1861,
    lien: 'Il a inventé le frein de sécurité, et l’a prouvé en faisant couper le câble sous ses pieds.',
  },
  {
    carte: 'comment-marche-un-frigo', savant: 'carl-von-linde', nom: 'Carl von Linde',
    naissance: 1842, mort: 1934,
    lien: 'Il a construit la première machine à fabriquer du froid, en détendant un gaz.',
  },
  {
    carte: 'le-micro-ondes', savant: 'percy-spencer', nom: 'Percy Spencer',
    naissance: 1894, mort: 1970,
    lien: 'Une barre de chocolat a fondu dans sa poche devant un radar : il a compris pourquoi.',
  },

  // ── Les ordinateurs ─────────────────────────────────────────────────────
  {
    carte: 'comment-compte-un-ordinateur', savant: 'gottfried-leibniz', nom: 'Gottfried Leibniz',
    naissance: 1646, mort: 1716,
    lien: 'Il a inventé le calcul binaire : compter avec des 0 et des 1 seulement.',
  },
  {
    carte: 'comment-marche-internet', savant: 'vinton-cerf', nom: 'Vinton Cerf',
    naissance: 1943, mort: null,
    lien: 'Il a écrit les règles qui permettent à deux réseaux différents de se parler.',
  },
  {
    carte: 'quest-ce-quun-programme', savant: 'ada-lovelace', nom: 'Ada Lovelace',
    naissance: 1815, mort: 1852, illustre: true,
    lien: 'Elle a écrit le tout premier programme, pour une machine qui n’a jamais été construite.',
  },
  {
    carte: 'comment-un-ordinateur-se-souvient', savant: 'grace-hopper', nom: 'Grace Hopper',
    naissance: 1906, mort: 1992, illustre: true, aRevoir: true,
    lien: 'Elle a trouvé le premier « bug » de l’histoire : un vrai papillon coincé dans la machine.',
  },
  {
    carte: 'comment-une-machine-apprend', savant: 'alan-turing', nom: 'Alan Turing',
    naissance: 1912, mort: 1954, illustre: true,
    lien: 'Il a demandé le premier si une machine peut penser, et proposé un test pour le savoir.',
  },
  {
    carte: 'comment-marche-un-ecran', savant: 'george-heilmeier', nom: 'George Heilmeier',
    naissance: 1936, mort: 2014,
    lien: 'Il a fait le premier écran à cristaux liquides, l’ancêtre de tous nos écrans plats.',
  },
  {
    carte: 'les-mots-de-passe', savant: 'whitfield-diffie', nom: 'Whitfield Diffie',
    naissance: 1944, mort: null,
    lien: 'Il a inventé le secret à deux clés : une pour fermer, une autre pour ouvrir.',
  },
  {
    carte: 'pourquoi-une-photo-devient-floue', savant: 'nasir-ahmed', nom: 'Nasir Ahmed',
    naissance: 1940, mort: null,
    lien: 'Il a trouvé la méthode qui compresse les images — et qui les rend floues si on serre trop.',
  },
  {
    carte: 'la-navigation-privee', savant: 'latanya-sweeney', nom: 'Latanya Sweeney',
    naissance: 1959, mort: null,
    lien: 'Elle a démontré qu’on peut reconnaître quelqu’un dans des données prétendues anonymes.',
  },
  {
    carte: 'le-wifi', savant: 'hedy-lamarr', nom: 'Hedy Lamarr',
    naissance: 1914, mort: 2000,
    lien: 'Actrice et inventrice, elle a imaginé le saut de fréquence, ancêtre du wifi.',
  },

  // ── Les nombres ─────────────────────────────────────────────────────────
  {
    carte: 'la-symetrie', savant: 'emmy-noether', nom: 'Emmy Noether',
    naissance: 1882, mort: 1935,
    lien: 'Elle a prouvé que derrière chaque symétrie se cache une chose qui se conserve.',
  },
  {
    carte: 'les-fractales', savant: 'benoit-mandelbrot', nom: 'Benoît Mandelbrot',
    naissance: 1924, mort: 2010,
    lien: 'Il a nommé les fractales, ces formes qui se répètent à toutes les échelles.',
  },
  {
    carte: 'le-hasard', savant: 'blaise-pascal', nom: 'Blaise Pascal',
    naissance: 1623, mort: 1662,
    lien: 'Il a fondé le calcul des probabilités en réfléchissant à un jeu de dés interrompu.',
  },
  {
    carte: 'linfini', savant: 'georg-cantor', nom: 'Georg Cantor',
    naissance: 1845, mort: 1918,
    lien: 'Il a démontré qu’il existe plusieurs infinis, et que certains sont plus grands que d’autres.',
  },
  {
    carte: 'le-zero', savant: 'al-khwarizmi', nom: 'Al-Khwârizmî',
    naissance: 780, mort: 850, illustre: true,
    lien: 'Il a fait connaître le zéro et les chiffres qu’on écrit encore aujourd’hui.',
  },
  {
    carte: 'les-grands-nombres', savant: 'john-napier', nom: 'John Napier',
    naissance: 1550, mort: 1617,
    lien: 'Il a inventé les logarithmes, qui rendent les très grands nombres maniables.',
  },
  {
    carte: 'le-tour-et-la-surface', savant: 'euclide', nom: 'Euclide',
    naissance: -325, mort: -265,
    lien: 'Il a écrit le livre de géométrie qu’on a utilisé pendant deux mille ans.',
  },
  {
    carte: 'les-pourcentages', savant: 'luca-pacioli', nom: 'Luca Pacioli',
    naissance: 1447, mort: 1517,
    lien: 'Il a répandu la comptabilité et le calcul « pour cent » chez les marchands.',
  },
  {
    carte: 'la-moyenne', savant: 'adolphe-quetelet', nom: 'Adolphe Quetelet',
    naissance: 1796, mort: 1874,
    lien: 'Il a appliqué la moyenne aux humains, et inventé l’idée d’« homme moyen ».',
  },
  {
    carte: 'le-paradoxe-des-anniversaires', savant: 'richard-von-mises', nom: 'Richard von Mises',
    naissance: 1883, mort: 1953,
    lien: 'Il a posé le problème des anniversaires, dont la réponse surprend tout le monde.',
  },

  // ── Les animaux ─────────────────────────────────────────────────────────
  {
    carte: 'la-metamorphose-du-papillon', savant: 'maria-sibylla-merian', nom: 'Maria Sibylla Merian',
    naissance: 1647, mort: 1717,
    lien: 'Elle a élevé et peint les chenilles jusqu’au papillon, quand on croyait encore les insectes nés de la boue.',
  },
  {
    carte: 'pourquoi-le-cameleon-change-de-couleur', savant: 'michel-milinkovitch', nom: 'Michel Milinkovitch',
    naissance: 1963, mort: null,
    lien: 'Il a montré que le caméléon ne change pas de pigment : il écarte de minuscules cristaux dans sa peau.',
  },
  {
    carte: 'la-migration-des-oiseaux', savant: 'johannes-thienemann', nom: 'Johannes Thienemann',
    naissance: 1863, mort: 1938,
    lien: 'Il a inventé le baguage des oiseaux, qui a enfin révélé où ils vont.',
  },
  {
    carte: 'lhibernation', savant: 'aristote', nom: 'Aristote',
    naissance: -384, mort: -322, aRevoir: true,
    lien: 'Il a décrit le premier les animaux qui disparaissent tout l’hiver.',
  },
  {
    carte: 'lecholocation-de-la-chauve-souris', savant: 'donald-griffin', nom: 'Donald Griffin',
    naissance: 1915, mort: 2003,
    lien: 'Il a prouvé que les chauves-souris crient trop aigu pour nous, et écoutent l’écho revenir.',
  },
  {
    carte: 'comment-les-poissons-respirent', savant: 'august-krogh', nom: 'August Krogh',
    naissance: 1874, mort: 1949,
    lien: 'Il a expliqué comment l’oxygène passe de l’eau ou de l’air jusque dans le sang.',
  },
  {
    carte: 'pourquoi-les-zebres-ont-des-rayures', savant: 'tim-caro', nom: 'Tim Caro',
    naissance: 1954, mort: null,
    lien: 'Il a habillé des chevaux de rayures pour montrer que les mouches s’y posent moins.',
  },
  {
    carte: 'comment-les-abeilles-font-le-miel', savant: 'karl-von-frisch', nom: 'Karl von Frisch',
    naissance: 1886, mort: 1982,
    lien: 'Il a déchiffré la danse par laquelle une abeille dit aux autres où trouver les fleurs.',
  },
  {
    carte: 'la-toile-de-laraignee', savant: 'jean-henri-fabre', nom: 'Jean-Henri Fabre',
    naissance: 1823, mort: 1915,
    lien: 'Il a passé sa vie à observer les insectes et les araignées chez lui, et à tout noter.',
  },
  {
    carte: 'pourquoi-le-chat-retombe-sur-ses-pattes', savant: 'etienne-jules-marey', nom: 'Étienne-Jules Marey',
    naissance: 1830, mort: 1904,
    lien: 'Il a filmé un chat en train de tomber, image par image, pour voir comment il se retourne.',
  },

  // ── La météo ────────────────────────────────────────────────────────────
  {
    carte: 'les-nuages', savant: 'luke-howard', nom: 'Luke Howard',
    naissance: 1772, mort: 1864,
    lien: 'Il a donné leurs noms aux nuages : cumulus, stratus, cirrus.',
  },
  {
    carte: 'pourquoi-il-fait-plus-froid-en-montagne', savant: 'horace-benedict-de-saussure', nom: 'Horace-Bénédict de Saussure',
    naissance: 1740, mort: 1799,
    lien: 'Il a grimpé au mont Blanc avec ses instruments pour mesurer l’air en altitude.',
  },
  {
    carte: 'la-foudre-et-le-tonnerre', savant: 'benjamin-franklin', nom: 'Benjamin Franklin',
    naissance: 1706, mort: 1790,
    lien: 'Il a montré que la foudre est de l’électricité, et inventé le paratonnerre.',
  },
  {
    carte: 'la-neige', savant: 'wilson-bentley', nom: 'Wilson Bentley',
    naissance: 1865, mort: 1931,
    lien: 'Il a photographié des milliers de flocons et n’en a jamais trouvé deux identiques.',
  },
  {
    carte: 'la-grele', savant: 'tor-bergeron', nom: 'Tor Bergeron',
    naissance: 1891, mort: 1977,
    lien: 'Il a expliqué comment la glace grossit dans un nuage jusqu’à devenir trop lourde.',
  },
  {
    carte: 'le-brouillard', savant: 'john-aitken', nom: 'John Aitken',
    naissance: 1839, mort: 1919,
    lien: 'Il a découvert que l’eau a besoin d’une poussière pour se condenser en gouttelette.',
  },
  {
    carte: 'louragan', savant: 'william-redfield', nom: 'William Redfield',
    naissance: 1789, mort: 1857,
    lien: 'En regardant des arbres couchés dans tous les sens, il a compris que la tempête tourne.',
  },
  {
    carte: 'la-rosee-du-matin', savant: 'charles-wells', nom: 'Charles Wells',
    naissance: 1757, mort: 1817,
    lien: 'Il a écrit l’essai qui explique enfin d’où vient la rosée : l’air qui refroidit la nuit.',
  },
  {
    carte: 'le-givre', savant: 'ukichiro-nakaya', nom: 'Ukichiro Nakaya',
    naissance: 1900, mort: 1962,
    lien: 'Il a fabriqué des cristaux de glace en laboratoire pour comprendre leurs formes.',
  },
  {
    carte: 'la-forme-des-gouttes-de-pluie', savant: 'agnes-pockels', nom: 'Agnes Pockels',
    naissance: 1862, mort: 1935, aRevoir: true,
    lien: 'Dans sa cuisine, sans laboratoire, elle a mesuré la « peau » de l’eau qui arrondit les gouttes.',
  },

  // ── Le son ──────────────────────────────────────────────────────────────
  {
    carte: 'pourquoi-lecho-repond', savant: 'athanasius-kircher', nom: 'Athanasius Kircher',
    naissance: 1602, mort: 1680,
    lien: 'Il a étudié les échos et conçu des salles pour les faire résonner.',
  },
  {
    carte: 'aigu-ou-grave', savant: 'joseph-sauveur', nom: 'Joseph Sauveur',
    naissance: 1653, mort: 1716,
    lien: 'Il a inventé le mot « acoustique » et compté les vibrations qui font un son aigu.',
  },
  {
    carte: 'pourquoi-les-voix-sont-differentes', savant: 'manuel-garcia', nom: 'Manuel García',
    naissance: 1805, mort: 1906,
    lien: 'Chanteur, il a inventé le miroir qui permet de voir ses propres cordes vocales.',
  },
  {
    carte: 'comment-loreille-entend', savant: 'georg-von-bekesy', nom: 'Georg von Békésy',
    naissance: 1899, mort: 1972,
    lien: 'Il a vu comment l’escargot de l’oreille trie les sons, du grave à l’aigu.',
  },
  {
    carte: 'quand-le-bruit-fait-mal', savant: 'alexander-graham-bell', nom: 'Alexander Graham Bell',
    naissance: 1847, mort: 1922,
    lien: 'L’unité qui mesure le bruit, le décibel, porte son nom.',
  },
  {
    carte: 'comment-chante-une-guitare', savant: 'ernst-chladni', nom: 'Ernst Chladni',
    naissance: 1756, mort: 1827,
    lien: 'Il a rendu les vibrations visibles, en saupoudrant du sable sur des plaques qui chantent.',
  },
  {
    carte: 'la-sirene-qui-change', savant: 'christian-doppler', nom: 'Christian Doppler',
    naissance: 1803, mort: 1853,
    lien: 'Il a prédit que le son d’une source qui approche monte, puis descend quand elle s’éloigne.',
  },
  {
    carte: 'ma-voix-enregistree', savant: 'thomas-edison', nom: 'Thomas Edison',
    naissance: 1847, mort: 1931,
    lien: 'Il a enregistré et rejoué une voix humaine pour la première fois.',
  },
  {
    carte: 'les-sons-quon-nentend-pas', savant: 'paul-langevin', nom: 'Paul Langevin',
    naissance: 1872, mort: 1946,
    lien: 'Il a utilisé des sons trop aigus pour l’oreille afin de repérer ce qui se cache sous la mer.',
  },
  {
    carte: 'les-notes-qui-vont-ensemble', savant: 'pythagore', nom: 'Pythagore',
    naissance: -580, mort: -495,
    lien: 'Il a découvert que deux notes s’accordent quand les longueurs de corde sont dans un rapport simple.',
  },

  // ── Les dinosaures ──────────────────────────────────────────────────────
  {
    carte: 'le-puzzle-des-os', savant: 'richard-owen', nom: 'Richard Owen',
    naissance: 1804, mort: 1892,
    lien: 'C’est lui qui a inventé le mot « dinosaure », en assemblant les os retrouvés.',
  },
  {
    carte: 'le-jour-de-lasteroide', savant: 'luis-alvarez', nom: 'Luis Alvarez',
    naissance: 1911, mort: 1988,
    lien: 'Il a trouvé, dans une fine couche d’argile, la trace d’un astéroïde tombé sur la Terre.',
  },
  {
    carte: 'les-oiseaux-sont-des-dinosaures', savant: 'john-ostrom', nom: 'John Ostrom',
    naissance: 1928, mort: 2005,
    lien: 'Il a démontré que les oiseaux descendent des dinosaures, os par os.',
  },
  {
    carte: 'il-y-a-tres-tres-longtemps', savant: 'james-hutton', nom: 'James Hutton',
    naissance: 1726, mort: 1797,
    lien: 'Il a compris que la Terre est immensément vieille, en lisant les roches.',
  },
  {
    carte: 'pourquoi-si-grands', savant: 'othniel-charles-marsh', nom: 'Othniel Charles Marsh',
    naissance: 1831, mort: 1899,
    lien: 'Il a déterré et nommé les plus grands dinosaures, dans une course acharnée avec son rival.',
  },
  {
    carte: 'carnivore-ou-herbivore', savant: 'georges-cuvier', nom: 'Georges Cuvier',
    naissance: 1769, mort: 1832,
    lien: 'Il disait pouvoir reconnaître un animal entier à partir d’une seule dent.',
  },
  {
    carte: 'les-traces-de-pas', savant: 'edward-hitchcock', nom: 'Edward Hitchcock',
    naissance: 1793, mort: 1864,
    lien: 'Il a rassemblé des milliers d’empreintes fossiles, qu’il croyait être celles d’oiseaux géants.',
  },
  {
    carte: 'des-dinosaures-a-plumes', savant: 'xu-xing', nom: 'Xu Xing',
    naissance: 1969, mort: null,
    lien: 'Il a décrit plus de dinosaures à plumes que quiconque.',
  },
  {
    carte: 'pas-tous-des-dinosaures', savant: 'mary-anning', nom: 'Mary Anning',
    naissance: 1799, mort: 1847, illustre: true,
    lien: 'Elle a découvert des reptiles marins et volants — qui ne sont justement pas des dinosaures.',
  },
  {
    carte: 'apres-les-dinosaures', savant: 'edward-drinker-cope', nom: 'Edward Drinker Cope',
    naissance: 1840, mort: 1897,
    lien: 'Il a décrit les mammifères qui ont pris la place laissée par les dinosaures.',
  },

  // ── Le corps ────────────────────────────────────────────────────────────
  {
    carte: 'la-chair-de-poule', savant: 'guillaume-duchenne', nom: 'Guillaume Duchenne',
    naissance: 1806, mort: 1875,
    lien: 'Il a cartographié les petits muscles de la peau et du visage, un par un.',
  },
  {
    carte: 'pourquoi-on-eternue', savant: 'johann-czermak', nom: 'Johann Czermak',
    naissance: 1828, mort: 1873, aRevoir: true,
    lien: 'Il a étudié le réflexe de l’éternuement et ce qui le déclenche.',
  },
  {
    carte: 'a-quoi-servent-les-larmes', savant: 'william-frey', nom: 'William Frey',
    naissance: 1943, mort: null,
    lien: 'Il a comparé les larmes de chagrin et celles d’un oignon : elles ne contiennent pas la même chose.',
  },
  {
    carte: 'la-peau-notre-bouclier', savant: 'marcello-malpighi', nom: 'Marcello Malpighi',
    naissance: 1628, mort: 1694,
    lien: 'Il a vu au microscope que la peau est faite de couches — l’une porte son nom.',
  },
  {
    carte: 'les-empreintes-digitales', savant: 'jan-purkyne', nom: 'Jan Purkyně',
    naissance: 1787, mort: 1869,
    lien: 'Il a classé le premier les dessins du bout des doigts, en neuf familles.',
  },
  {
    carte: 'pourquoi-on-a-mal', savant: 'ronald-melzack', nom: 'Ronald Melzack',
    naissance: 1929, mort: 2019,
    lien: 'Il a expliqué que la douleur passe par une « porte » que le cerveau peut refermer.',
  },
  {
    carte: 'comment-les-muscles-bougent', savant: 'luigi-galvani', nom: 'Luigi Galvani',
    naissance: 1737, mort: 1798,
    lien: 'Il a fait bouger la patte d’une grenouille morte avec de l’électricité.',
  },
  {
    carte: 'comment-on-tient-debout', savant: 'robert-barany', nom: 'Robert Bárány',
    naissance: 1876, mort: 1936,
    lien: 'Il a découvert comment l’oreille interne nous dit où est le haut.',
  },
  {
    carte: 'pourquoi-on-a-deux-yeux', savant: 'charles-wheatstone', nom: 'Charles Wheatstone',
    naissance: 1802, mort: 1875,
    lien: 'Il a inventé le stéréoscope, qui prouve que le relief naît de la différence entre nos deux yeux.',
  },
  {
    carte: 'les-dents-de-lait', savant: 'pierre-fauchard', nom: 'Pierre Fauchard',
    naissance: 1678, mort: 1761,
    lien: 'Il a fondé la dentisterie moderne et décrit la pousse des dents de l’enfant.',
  },

  // ── Les océans ──────────────────────────────────────────────────────────
  {
    carte: 'dou-viennent-les-vagues', savant: 'walter-munk', nom: 'Walter Munk',
    naissance: 1917, mort: 2019,
    lien: 'Il a suivi la houle d’une seule tempête à travers tout le Pacifique.',
  },
  {
    carte: 'les-fleuves-dans-la-mer', savant: 'matthew-fontaine-maury', nom: 'Matthew Fontaine Maury',
    naissance: 1806, mort: 1873,
    lien: 'Il a dressé les cartes des courants marins à partir des carnets de bord des marins.',
  },
  {
    carte: 'pourquoi-il-fait-noir-au-fond', savant: 'william-beebe', nom: 'William Beebe',
    naissance: 1877, mort: 1962,
    lien: 'Enfermé dans une boule d’acier, il est descendu voir le noir absolu et ce qui y vit.',
  },
  {
    carte: 'la-pression-qui-ecrase', savant: 'jacques-piccard', nom: 'Jacques Piccard',
    naissance: 1922, mort: 2008,
    lien: 'Il est descendu au point le plus profond de l’océan, là où l’eau écrase tout.',
  },
  {
    carte: 'le-corail-batisseur', savant: 'charles-darwin', nom: 'Charles Darwin',
    naissance: 1809, mort: 1882, illustre: true, aRevoir: true,
    lien: 'Sa première grande théorie explique comment un atoll se bâtit sur un volcan qui s’enfonce.',
  },
  {
    carte: 'les-animaux-qui-brillent', savant: 'osamu-shimomura', nom: 'Osamu Shimomura',
    naissance: 1928, mort: 2018,
    lien: 'Il a extrait d’une méduse la protéine qui brille en vert.',
  },
  {
    carte: 'les-sources-chaudes-du-fond', savant: 'robert-ballard', nom: 'Robert Ballard',
    naissance: 1942, mort: null,
    lien: 'Il a découvert, au fond de l’océan, des sources brûlantes grouillantes de vie sans soleil.',
  },
  {
    carte: 'le-plancton-minuscule', savant: 'victor-hensen', nom: 'Victor Hensen',
    naissance: 1835, mort: 1924,
    lien: 'Il a inventé le mot « plancton » et le filet pour l’attraper.',
  },
  {
    carte: 'pourquoi-on-flotte-mieux-dans-la-mer', savant: 'archimede', nom: 'Archimède',
    naissance: -287, mort: -212,
    lien: 'Il a trouvé dans son bain la poussée qui nous soulève, d’autant plus forte que l’eau est lourde.',
  },
  {
    carte: 'la-vague-geante', savant: 'fusakichi-omori', nom: 'Fusakichi Omori',
    naissance: 1868, mort: 1923, aRevoir: true,
    lien: 'Il a étudié les séismes japonais et les vagues géantes qu’ils soulèvent.',
  },

  // ── La cuisine ──────────────────────────────────────────────────────────
  {
    carte: 'pourquoi-le-pain-gonfle', savant: 'eduard-buchner', nom: 'Eduard Buchner',
    naissance: 1860, mort: 1917,
    lien: 'Il a montré que la fermentation marche même sans levure vivante : ce sont des molécules qui travaillent.',
  },
  {
    carte: 'pourquoi-ca-dore', savant: 'louis-camille-maillard', nom: 'Louis-Camille Maillard',
    naissance: 1878, mort: 1936,
    lien: 'La réaction qui dore le pain et la viande porte son nom.',
  },
  {
    carte: 'pourquoi-loignon-fait-pleurer', savant: 'eric-block', nom: 'Eric Block',
    naissance: 1942, mort: null,
    lien: 'Il a percé la chimie du soufre de l’oignon et de l’ail.',
  },
  {
    carte: 'pourquoi-le-piment-brule', savant: 'wilbur-scoville', nom: 'Wilbur Scoville',
    naissance: 1865, mort: 1942,
    lien: 'Il a inventé l’échelle qui mesure la force d’un piment.',
  },
  {
    carte: 'pourquoi-le-popcorn-explose', savant: 'emmanuel-virot', nom: 'Emmanuel Virot',
    naissance: 1987, mort: null, aRevoir: true,
    lien: 'Il a filmé le pop-corn à très grande vitesse pour comprendre son saut et son « pop ».',
  },
  {
    carte: 'pourquoi-le-lait-devient-yaourt', savant: 'louis-pasteur', nom: 'Louis Pasteur',
    naissance: 1822, mort: 1895, illustre: true,
    lien: 'Il a montré que ce sont des micro-organismes qui font tourner le lait, et comment les maîtriser.',
  },
  {
    carte: 'pourquoi-loeuf-durcit', savant: 'christian-anfinsen', nom: 'Christian Anfinsen',
    naissance: 1916, mort: 1995,
    lien: 'Il a expliqué comment une protéine se replie — et ce qui arrive quand la chaleur la déplie.',
  },
  {
    carte: 'pourquoi-le-soda-petille', savant: 'joseph-priestley', nom: 'Joseph Priestley',
    naissance: 1733, mort: 1804,
    lien: 'Il a inventé l’eau gazeuse, en faisant passer dans de l’eau le gaz d’une brasserie voisine.',
  },
  {
    carte: 'pourquoi-la-pomme-brunit', savant: 'gabriel-bertrand', nom: 'Gabriel Bertrand',
    naissance: 1867, mort: 1962, aRevoir: true,
    lien: 'Il a découvert les enzymes qui brunissent les végétaux au contact de l’air.',
  },
  {
    carte: 'pourquoi-le-miel-ne-se-perime-pas', savant: 'jonathan-white', nom: 'Jonathan White',
    naissance: 1918, mort: 2001, aRevoir: true,
    lien: 'Il a analysé le miel et trouvé ce qui empêche les microbes d’y vivre.',
  },
];
