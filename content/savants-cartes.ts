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
export interface CarteTenue {
  /** Identifiant de carte, dans `content/cards.ts`. */
  id: string;
  /** Ce que le savant a réellement fait sur ce sujet précis. */
  lien: string;
}

export interface SavantPrisonnier {
  /** Slug : nommera aussi son illustration, `public/images/wall-of-fame/<id>.webp`. */
  id: string;
  nom: string;
  naissance: number;
  /** `null` pour une personne vivante. Négatif avant notre ère. */
  mort: number | null;
  /** Les cartes dont il est le savant. Au moins une. */
  cartes: CarteTenue[];
  /** Le rattachement mérite une relecture. */
  aRevoir?: boolean;
}

export const savantsPrisonniers: SavantPrisonnier[] = [
  // ── Les grandes figures, qui tiennent plusieurs cellules ─────────────────
  {
    id: 'archimede', nom: 'Archimède', naissance: -287, mort: -212,
    cartes: [
      { id: 'les-leviers', lien: 'Il a énoncé la loi du levier — « donnez-moi un point d’appui et je soulèverai le monde ».' },
      { id: 'les-poulies', lien: 'Il aurait tiré un navire chargé à lui seul, avec un jeu de poulies.' },
      { id: 'pourquoi-les-bateaux-flottent', lien: 'Il a trouvé la poussée qui soulève tout corps plongé dans l’eau.' },
      { id: 'pourquoi-on-flotte-mieux-dans-la-mer', lien: 'Sa poussée est d’autant plus forte que l’eau est lourde — et l’eau salée l’est.' },
      { id: 'les-grands-nombres', lien: 'Il a écrit un livre entier pour compter les grains de sable de l’univers.' },
    ],
  },
  {
    id: 'isaac-newton', nom: 'Isaac Newton', naissance: 1643, mort: 1727,
    cartes: [
      { id: 'pourquoi-tout-tombe', lien: 'Il a compris que la pomme et la Lune tombent pour la même raison.' },
      { id: 'les-marees', lien: 'Sa gravitation explique que la Lune tire sur les océans.' },
      { id: 'pourquoi-ca-sarrete', lien: 'Ses lois du mouvement disent qu’un objet ne s’arrête que si quelque chose le freine.' },
      { id: 'le-poids-et-la-masse', lien: 'Il a séparé le poids, qui dépend de l’endroit, et la masse, qui ne change jamais.' },
    ],
  },
  {
    id: 'galilee', nom: 'Galilée', naissance: 1564, mort: 1642,
    cartes: [
      { id: 'les-phases-de-la-lune', lien: 'Il a dessiné la Lune à la lunette, ses cratères et ses phases, nuit après nuit.' },
      { id: 'les-planetes', lien: 'Il a vu que Jupiter a des lunes : tout ne tourne donc pas autour de la Terre.' },
    ],
  },
  {
    id: 'louis-pasteur', nom: 'Louis Pasteur', naissance: 1822, mort: 1895,
    cartes: [
      { id: 'pourquoi-le-lait-devient-yaourt', lien: 'Il a montré que ce sont des micro-organismes qui font tourner le lait, et comment les maîtriser.' },
    ],
  },
  {
    id: 'charles-darwin', nom: 'Charles Darwin', naissance: 1809, mort: 1882,
    cartes: [
      { id: 'levolution', lien: 'Il a expliqué comment les espèces se transforment lentement, génération après génération.' },
      { id: 'le-corail-batisseur', lien: 'Sa première grande théorie explique comment un atoll se bâtit sur un volcan qui s’enfonce.' },
    ],
  },
  {
    id: 'nikola-tesla', nom: 'Nikola Tesla', naissance: 1856, mort: 1943,
    cartes: [
      { id: 'lelectricite', lien: 'Il a imposé le courant alternatif, celui qui arrive aujourd’hui dans les prises.' },
      { id: 'les-aimants', lien: 'Ses moteurs tournent grâce à un champ magnétique qui tourne aussi.' },
    ],
  },
  {
    id: 'ibn-al-haytham', nom: 'Ibn al-Haytham', naissance: 965, mort: 1040,
    cartes: [
      { id: 'pourquoi-on-voit-les-couleurs', lien: 'Il a établi que la lumière entre dans l’œil, et non l’inverse comme on le croyait.' },
      { id: 'pourquoi-on-a-deux-yeux', lien: 'Il a étudié le premier ce que voient nos deux yeux à la fois.' },
    ],
  },
  {
    id: 'albert-einstein', nom: 'Albert Einstein', naissance: 1879, mort: 1955,
    cartes: [
      { id: 'les-eclipses', lien: 'C’est pendant une éclipse qu’on a vérifié sa théorie : la lumière des étoiles se courbe près du Soleil.' },
      { id: 'lenergie', lien: 'Il a écrit l’équation qui relie l’énergie et la masse.' },
    ],
  },
  {
    id: 'katherine-johnson', nom: 'Katherine Johnson', naissance: 1918, mort: 2020,
    cartes: [
      { id: 'pourquoi-les-astronautes-flottent', lien: 'Elle a calculé à la main les trajectoires qui mettent une capsule en orbite, donc en chute libre.' },
      { id: 'comment-avance-une-fusee', lien: 'Ses calculs disaient quand allumer et couper les moteurs, à la seconde près.' },
    ],
  },
  {
    id: 'mary-anning', nom: 'Mary Anning', naissance: 1799, mort: 1847,
    cartes: [
      { id: 'les-fossiles', lien: 'Elle a passé sa vie à extraire des fossiles de la falaise, et à les reconnaître mieux que les savants.' },
      { id: 'pas-tous-des-dinosaures', lien: 'Elle a découvert des reptiles marins et volants — qui ne sont justement pas des dinosaures.' },
    ],
  },

  // ── Les sciences de la Terre ─────────────────────────────────────────────
  {
    id: 'pierre-perrault', nom: 'Pierre Perrault', naissance: 1611, mort: 1680,
    cartes: [{ id: 'cycle-de-leau', lien: 'Il a mesuré la pluie tombée sur un bassin et prouvé qu’elle suffit à faire couler les rivières.' }],
  },
  {
    id: 'haroun-tazieff', nom: 'Haroun Tazieff', naissance: 1914, mort: 1998,
    cartes: [{ id: 'les-volcans', lien: 'Il est descendu filmer les volcans en éruption, au plus près de la lave.' }],
  },
  {
    id: 'inge-lehmann', nom: 'Inge Lehmann', naissance: 1888, mort: 1993,
    cartes: [
      { id: 'pourquoi-la-terre-tremble', lien: 'En écoutant les séismes traverser la Terre, elle a découvert qu’elle a une graine solide au centre.' },
      { id: 'la-vague-geante', lien: 'Ce sont les séismes qu’elle étudiait qui soulèvent les vagues géantes.' },
    ],
  },
  {
    id: 'gaspard-gustave-coriolis', nom: 'Gaspard-Gustave Coriolis', naissance: 1792, mort: 1843,
    cartes: [
      { id: 'le-vent', lien: 'Il a décrit la force qui dévie les vents parce que la Terre tourne sous eux.' },
      { id: 'louragan', lien: 'C’est cette même force qui fait tourner les ouragans, et toujours dans le même sens.' },
    ],
  },
  {
    id: 'lord-rayleigh', nom: 'Lord Rayleigh', naissance: 1842, mort: 1919,
    cartes: [
      { id: 'pourquoi-le-ciel-est-bleu', lien: 'Il a calculé pourquoi l’air disperse le bleu plus que le rouge — cette diffusion porte son nom.' },
      { id: 'la-forme-des-gouttes-de-pluie', lien: 'Il a expliqué comment un filet d’eau se coupe en gouttes bien rondes.' },
    ],
  },
  {
    id: 'edmond-halley', nom: 'Edmond Halley', naissance: 1656, mort: 1742,
    cartes: [
      { id: 'pourquoi-la-mer-est-salee', lien: 'Il a proposé de peser le sel des mers pour deviner depuis combien de temps les fleuves s’y déversent.' },
      { id: 'les-etoiles-filantes', lien: 'Il a compris que les comètes reviennent — et ce sont leurs poussières qui filent dans le ciel.' },
    ],
  },
  {
    id: 'mikhail-lomonossov', nom: 'Mikhaïl Lomonossov', naissance: 1711, mort: 1765,
    cartes: [{ id: 'dou-vient-le-petrole', lien: 'Il a soutenu, bien avant les autres, que le pétrole vient de restes d’êtres vivants enfouis.' }],
  },
  {
    id: 'selman-waksman', nom: 'Selman Waksman', naissance: 1888, mort: 1973,
    cartes: [{ id: 'le-sol-est-vivant', lien: 'Il a fouillé la vie microscopique du sol et en a tiré des antibiotiques.' }],
  },

  // ── L'espace ─────────────────────────────────────────────────────────────
  {
    id: 'nicolas-copernic', nom: 'Nicolas Copernic', naissance: 1473, mort: 1543,
    cartes: [{ id: 'jour-et-nuit', lien: 'Il a osé dire que c’est la Terre qui tourne, et non le Soleil qui en fait le tour.' }],
  },
  {
    id: 'milutin-milankovic', nom: 'Milutin Milanković', naissance: 1879, mort: 1958,
    cartes: [{ id: 'pourquoi-il-y-a-des-saisons', lien: 'Il a calculé comment l’inclinaison de la Terre règle les saisons et les glaciations.' }],
  },
  {
    id: 'cecilia-payne', nom: 'Cecilia Payne-Gaposchkin', naissance: 1900, mort: 1979,
    cartes: [{ id: 'les-etoiles', lien: 'Elle a découvert que les étoiles sont faites d’hydrogène — personne ne voulait la croire.' }],
  },
  {
    id: 'stephen-hawking', nom: 'Stephen Hawking', naissance: 1942, mort: 2018,
    cartes: [{ id: 'les-trous-noirs', lien: 'Il a montré qu’un trou noir n’est pas tout à fait noir : il s’évapore lentement.' }],
  },
  {
    id: 'serguei-korolev', nom: 'Sergueï Korolev', naissance: 1907, mort: 1966,
    cartes: [{ id: 'la-face-cachee-de-la-lune', lien: 'Il a conçu la sonde qui a photographié pour la première fois la face cachée de la Lune.' }],
  },

  // ── Le vivant et le corps ────────────────────────────────────────────────
  {
    id: 'jan-baptist-van-helmont', nom: 'Jan Baptist van Helmont', naissance: 1580, mort: 1644,
    cartes: [{ id: 'comment-poussent-les-plantes', lien: 'Il a pesé un saule et sa terre pendant cinq ans pour savoir d’où venait le bois.' }],
  },
  {
    id: 'william-harvey', nom: 'William Harvey', naissance: 1578, mort: 1657,
    cartes: [{ id: 'le-coeur-et-le-sang', lien: 'Il a montré que le sang tourne en boucle, poussé par le cœur.' }],
  },
  {
    id: 'alexander-fleming', nom: 'Alexander Fleming', naissance: 1881, mort: 1955,
    cartes: [{ id: 'les-microbes', lien: 'Une moisissure tombée par hasard dans sa boîte tuait les microbes : la pénicilline.' }],
  },
  {
    id: 'nathaniel-kleitman', nom: 'Nathaniel Kleitman', naissance: 1895, mort: 1999,
    cartes: [{ id: 'pourquoi-on-dort', lien: 'Il a découvert le sommeil où les yeux bougent sous les paupières, celui des rêves.' }],
  },
  {
    id: 'rosalind-franklin', nom: 'Rosalind Franklin', naissance: 1920, mort: 1958,
    cartes: [{ id: 'pourquoi-on-ressemble-a-ses-parents', lien: 'Sa photographie de l’ADN a révélé sa forme en double hélice.' }],
  },
  {
    id: 'john-scott-haldane', nom: 'John Scott Haldane', naissance: 1860, mort: 1936,
    cartes: [
      { id: 'comment-on-respire', lien: 'Il a compris que c’est le gaz carbonique, et non le manque d’air, qui commande la respiration.' },
      { id: 'comment-les-poissons-respirent', lien: 'Il a étudié comment l’oxygène passe de l’eau ou de l’air jusque dans le sang.' },
    ],
  },
  {
    id: 'ivan-pavlov', nom: 'Ivan Pavlov', naissance: 1849, mort: 1936,
    cartes: [{ id: 'le-voyage-de-la-nourriture', lien: 'Il a étudié la digestion pas à pas, de la salive à l’estomac.' }],
  },
  {
    id: 'santiago-ramon-y-cajal', nom: 'Santiago Ramón y Cajal', naissance: 1852, mort: 1934,
    cartes: [{ id: 'le-cerveau', lien: 'Il a dessiné les neurones un par un et montré qu’ils ne se touchent pas tout à fait.' }],
  },
  {
    id: 'marie-curie', nom: 'Marie Curie', naissance: 1867, mort: 1934,
    cartes: [{ id: 'les-os', lien: 'Elle a fait rouler des voitures de radiographie jusqu’au front, pour voir les os à travers la peau.' }],
  },
  {
    id: 'dmitri-mendeleiev', nom: 'Dmitri Mendeleïev', naissance: 1834, mort: 1907,
    cartes: [{ id: 'les-atomes', lien: 'Il a rangé les atomes dans un tableau, en laissant des cases vides pour ceux qu’on n’avait pas encore trouvés.' }],
  },
  {
    id: 'luigi-galvani', nom: 'Luigi Galvani', naissance: 1737, mort: 1798,
    cartes: [
      { id: 'comment-les-muscles-bougent', lien: 'Il a fait bouger la patte d’une grenouille morte avec de l’électricité.' },
      { id: 'la-chair-de-poule', lien: 'Ce sont de minuscules muscles, comme ceux qu’il étudiait, qui hérissent les poils.' },
    ],
  },
  {
    id: 'aristote', nom: 'Aristote', naissance: -384, mort: -322, aRevoir: true,
    cartes: [
      { id: 'lhibernation', lien: 'Il a décrit le premier les animaux qui disparaissent tout l’hiver.' },
      { id: 'pourquoi-on-eternue', lien: 'Il a consacré tout un chapitre à l’éternuement, qu’il tenait pour un bon présage.' },
    ],
  },
  {
    id: 'william-frey', nom: 'William Frey', naissance: 1943, mort: null,
    cartes: [{ id: 'a-quoi-servent-les-larmes', lien: 'Il a comparé les larmes de chagrin et celles d’un oignon : elles ne contiennent pas la même chose.' }],
  },
  {
    id: 'marcello-malpighi', nom: 'Marcello Malpighi', naissance: 1628, mort: 1694,
    cartes: [{ id: 'la-peau-notre-bouclier', lien: 'Il a vu au microscope que la peau est faite de couches — l’une porte son nom.' }],
  },
  {
    id: 'jan-purkyne', nom: 'Jan Purkyně', naissance: 1787, mort: 1869,
    cartes: [{ id: 'les-empreintes-digitales', lien: 'Il a classé le premier les dessins du bout des doigts, en neuf familles.' }],
  },
  {
    id: 'ronald-melzack', nom: 'Ronald Melzack', naissance: 1929, mort: 2019,
    cartes: [{ id: 'pourquoi-on-a-mal', lien: 'Il a expliqué que la douleur passe par une « porte » que le cerveau peut refermer.' }],
  },
  {
    id: 'robert-barany', nom: 'Robert Bárány', naissance: 1876, mort: 1936,
    cartes: [{ id: 'comment-on-tient-debout', lien: 'Il a découvert comment l’oreille interne nous dit où est le haut.' }],
  },
  {
    id: 'pierre-fauchard', nom: 'Pierre Fauchard', naissance: 1678, mort: 1761,
    cartes: [{ id: 'les-dents-de-lait', lien: 'Il a fondé la dentisterie moderne et décrit la pousse des dents de l’enfant.' }],
  },

  // ── La physique et la chimie ─────────────────────────────────────────────
  {
    id: 'marin-mersenne', nom: 'Marin Mersenne', naissance: 1588, mort: 1648,
    cartes: [
      { id: 'comment-voyage-le-son', lien: 'Il a mesuré la vitesse du son, avec un écho et beaucoup de patience.' },
      { id: 'pourquoi-lecho-repond', lien: 'C’est en chronométrant des échos qu’il a fait cette mesure.' },
    ],
  },
  {
    id: 'lord-kelvin', nom: 'Lord Kelvin', naissance: 1824, mort: 1907,
    cartes: [
      { id: 'le-chaud-et-le-froid', lien: 'Il a trouvé qu’il existe un froid absolu, en dessous duquel on ne peut pas descendre.' },
      { id: 'les-etats-de-la-matiere', lien: 'C’est la température qui fait passer la matière du solide au liquide et au gaz.' },
    ],
  },
  {
    id: 'antoine-lavoisier', nom: 'Antoine Lavoisier', naissance: 1743, mort: 1794,
    cartes: [
      { id: 'le-feu', lien: 'Il a prouvé que brûler, c’est se combiner à l’oxygène — rien ne se perd, rien ne se crée.' },
      { id: 'de-quoi-est-fait-lair', lien: 'Il a nommé l’oxygène et l’azote, les deux gaz principaux de l’air.' },
    ],
  },
  {
    id: 'joseph-priestley', nom: 'Joseph Priestley', naissance: 1733, mort: 1804,
    cartes: [
      { id: 'pourquoi-le-soda-petille', lien: 'Il a inventé l’eau gazeuse, en faisant passer dans de l’eau le gaz d’une brasserie voisine.' },
      { id: 'le-volcan-de-vinaigre', lien: 'C’est le même gaz qu’il capturait qui fait mousser le vinaigre sur le bicarbonate.' },
    ],
  },
  {
    id: 'svante-arrhenius', nom: 'Svante Arrhenius', naissance: 1859, mort: 1927,
    cartes: [
      { id: 'les-acides-et-les-bases', lien: 'Il a dit ce qu’est un acide : quelque chose qui libère des particules chargées dans l’eau.' },
      { id: 'ou-va-le-sucre-dans-leau', lien: 'Il a expliqué ce que deviennent les molécules quand elles se dissolvent.' },
    ],
  },
  {
    id: 'humphry-davy', nom: 'Humphry Davy', naissance: 1778, mort: 1829,
    cartes: [{ id: 'la-rouille', lien: 'Il a protégé les coques des bateaux de la corrosion, en leur donnant un autre métal à ronger.' }],
  },
  {
    id: 'michel-eugene-chevreul', nom: 'Michel Eugène Chevreul', naissance: 1786, mort: 1889,
    cartes: [{ id: 'pourquoi-le-savon-lave', lien: 'Il a percé la chimie des corps gras, donc celle du savon.' }],
  },
  {
    id: 'linda-buck', nom: 'Linda Buck', naissance: 1947, mort: null,
    cartes: [{ id: 'pourquoi-ca-sent', lien: 'Elle a trouvé les capteurs du nez, toute une famille de détecteurs d’odeurs.' }],
  },
  {
    id: 'linus-pauling', nom: 'Linus Pauling', naissance: 1901, mort: 1994,
    cartes: [{ id: 'pourquoi-la-glace-flotte', lien: 'Il a décrit comment les molécules d’eau s’accrochent, ce qui rend la glace plus légère que l’eau.' }],
  },

  // ── Construire ───────────────────────────────────────────────────────────
  {
    id: 'gustave-eiffel', nom: 'Gustave Eiffel', naissance: 1832, mort: 1923,
    cartes: [{ id: 'pourquoi-les-ponts-tiennent', lien: 'Il a bâti des ponts en treillis, où chaque barre tire ou pousse juste ce qu’il faut.' }],
  },
  {
    id: 'leonard-de-vinci', nom: 'Léonard de Vinci', naissance: 1452, mort: 1519,
    cartes: [{ id: 'comment-vole-un-avion', lien: 'Il a étudié le vol des oiseaux et dessiné des machines volantes quatre siècles trop tôt.' }],
  },
  {
    id: 'al-jazari', nom: 'Al-Jazari', naissance: 1136, mort: 1206,
    cartes: [{ id: 'les-engrenages', lien: 'Il a dessiné et construit des machines à engrenages d’une précision inouïe pour son temps.' }],
  },
  {
    id: 'elisha-otis', nom: 'Elisha Otis', naissance: 1811, mort: 1861,
    cartes: [{ id: 'comment-on-freine', lien: 'Il a inventé le frein de sécurité, et l’a prouvé en faisant couper le câble sous ses pieds.' }],
  },
  {
    id: 'carl-von-linde', nom: 'Carl von Linde', naissance: 1842, mort: 1934,
    cartes: [{ id: 'comment-marche-un-frigo', lien: 'Il a construit la première machine à fabriquer du froid, en détendant un gaz.' }],
  },
  {
    id: 'percy-spencer', nom: 'Percy Spencer', naissance: 1894, mort: 1970,
    cartes: [{ id: 'le-micro-ondes', lien: 'Une barre de chocolat a fondu dans sa poche devant un radar : il a compris pourquoi.' }],
  },
  {
    id: 'denis-papin', nom: 'Denis Papin', naissance: 1647, mort: 1713,
    cartes: [{ id: 'pourquoi-le-popcorn-explose', lien: 'Il a inventé la marmite sous pression : c’est la vapeur enfermée qui fait tout sauter.' }],
  },

  // ── Les ordinateurs ──────────────────────────────────────────────────────
  {
    id: 'gottfried-leibniz', nom: 'Gottfried Leibniz', naissance: 1646, mort: 1716,
    cartes: [{ id: 'comment-compte-un-ordinateur', lien: 'Il a inventé le calcul binaire : compter avec des 0 et des 1 seulement.' }],
  },
  {
    id: 'vinton-cerf', nom: 'Vinton Cerf', naissance: 1943, mort: null,
    cartes: [{ id: 'comment-marche-internet', lien: 'Il a écrit les règles qui permettent à deux réseaux différents de se parler.' }],
  },
  {
    id: 'ada-lovelace', nom: 'Ada Lovelace', naissance: 1815, mort: 1852,
    cartes: [{ id: 'quest-ce-quun-programme', lien: 'Elle a écrit le tout premier programme, pour une machine qui n’a jamais été construite.' }],
  },
  {
    id: 'grace-hopper', nom: 'Grace Hopper', naissance: 1906, mort: 1992, aRevoir: true,
    cartes: [{ id: 'comment-un-ordinateur-se-souvient', lien: 'Elle a trouvé le premier « bug » de l’histoire : un vrai papillon coincé dans la machine.' }],
  },
  {
    id: 'alan-turing', nom: 'Alan Turing', naissance: 1912, mort: 1954,
    cartes: [{ id: 'comment-une-machine-apprend', lien: 'Il a demandé le premier si une machine peut penser, et proposé un test pour le savoir.' }],
  },
  {
    id: 'george-heilmeier', nom: 'George Heilmeier', naissance: 1936, mort: 2014,
    cartes: [{ id: 'comment-marche-un-ecran', lien: 'Il a fait le premier écran à cristaux liquides, l’ancêtre de tous nos écrans plats.' }],
  },
  {
    id: 'whitfield-diffie', nom: 'Whitfield Diffie', naissance: 1944, mort: null,
    cartes: [{ id: 'les-mots-de-passe', lien: 'Il a inventé le secret à deux clés : une pour fermer, une autre pour ouvrir.' }],
  },
  {
    id: 'nasir-ahmed', nom: 'Nasir Ahmed', naissance: 1940, mort: null,
    cartes: [{ id: 'pourquoi-une-photo-devient-floue', lien: 'Il a trouvé la méthode qui compresse les images — et qui les rend floues si on serre trop.' }],
  },
  {
    id: 'latanya-sweeney', nom: 'Latanya Sweeney', naissance: 1959, mort: null,
    cartes: [{ id: 'la-navigation-privee', lien: 'Elle a démontré qu’on peut reconnaître quelqu’un dans des données prétendues anonymes.' }],
  },
  {
    id: 'hedy-lamarr', nom: 'Hedy Lamarr', naissance: 1914, mort: 2000,
    cartes: [{ id: 'le-wifi', lien: 'Actrice et inventrice, elle a imaginé le saut de fréquence, ancêtre du wifi.' }],
  },

  // ── Les nombres ──────────────────────────────────────────────────────────
  {
    id: 'emmy-noether', nom: 'Emmy Noether', naissance: 1882, mort: 1935,
    cartes: [{ id: 'la-symetrie', lien: 'Elle a prouvé que derrière chaque symétrie se cache une chose qui se conserve.' }],
  },
  {
    id: 'benoit-mandelbrot', nom: 'Benoît Mandelbrot', naissance: 1924, mort: 2010,
    cartes: [{ id: 'les-fractales', lien: 'Il a nommé les fractales, ces formes qui se répètent à toutes les échelles.' }],
  },
  {
    id: 'blaise-pascal', nom: 'Blaise Pascal', naissance: 1623, mort: 1662,
    cartes: [
      { id: 'le-hasard', lien: 'Il a fondé le calcul des probabilités en réfléchissant à un jeu de dés interrompu.' },
      { id: 'le-paradoxe-des-anniversaires', lien: 'C’est son calcul des probabilités qui donne la réponse, et elle surprend tout le monde.' },
    ],
  },
  {
    id: 'georg-cantor', nom: 'Georg Cantor', naissance: 1845, mort: 1918,
    cartes: [{ id: 'linfini', lien: 'Il a démontré qu’il existe plusieurs infinis, et que certains sont plus grands que d’autres.' }],
  },
  {
    id: 'al-khwarizmi', nom: 'Al-Khwârizmî', naissance: 780, mort: 850,
    cartes: [{ id: 'le-zero', lien: 'Il a fait connaître le zéro et les chiffres qu’on écrit encore aujourd’hui.' }],
  },
  {
    id: 'euclide', nom: 'Euclide', naissance: -325, mort: -265,
    cartes: [{ id: 'le-tour-et-la-surface', lien: 'Il a écrit le livre de géométrie qu’on a utilisé pendant deux mille ans.' }],
  },
  {
    id: 'adolphe-quetelet', nom: 'Adolphe Quetelet', naissance: 1796, mort: 1874,
    cartes: [
      { id: 'la-moyenne', lien: 'Il a appliqué la moyenne aux humains, et inventé l’idée d’« homme moyen ».' },
      { id: 'les-pourcentages', lien: 'Il a répandu l’habitude de compter les gens en parts de cent.' },
    ],
  },

  // ── Les animaux ──────────────────────────────────────────────────────────
  {
    id: 'maria-sibylla-merian', nom: 'Maria Sibylla Merian', naissance: 1647, mort: 1717,
    cartes: [{ id: 'la-metamorphose-du-papillon', lien: 'Elle a élevé et peint les chenilles jusqu’au papillon, quand on croyait encore les insectes nés de la boue.' }],
  },
  {
    id: 'michel-milinkovitch', nom: 'Michel Milinkovitch', naissance: 1963, mort: null,
    cartes: [{ id: 'pourquoi-le-cameleon-change-de-couleur', lien: 'Il a montré que le caméléon ne change pas de pigment : il écarte de minuscules cristaux dans sa peau.' }],
  },
  {
    id: 'johannes-thienemann', nom: 'Johannes Thienemann', naissance: 1863, mort: 1938,
    cartes: [{ id: 'la-migration-des-oiseaux', lien: 'Il a inventé le baguage des oiseaux, qui a enfin révélé où ils vont.' }],
  },
  {
    id: 'donald-griffin', nom: 'Donald Griffin', naissance: 1915, mort: 2003,
    cartes: [
      { id: 'lecholocation-de-la-chauve-souris', lien: 'Il a prouvé que les chauves-souris crient trop aigu pour nous, et écoutent l’écho revenir.' },
      { id: 'les-sons-quon-nentend-pas', lien: 'C’est lui qui a montré que des sons existent au-dessus de notre oreille.' },
    ],
  },
  {
    id: 'tim-caro', nom: 'Tim Caro', naissance: 1954, mort: null,
    cartes: [{ id: 'pourquoi-les-zebres-ont-des-rayures', lien: 'Il a habillé des chevaux de rayures pour montrer que les mouches s’y posent moins.' }],
  },
  {
    id: 'karl-von-frisch', nom: 'Karl von Frisch', naissance: 1886, mort: 1982,
    cartes: [
      { id: 'comment-les-abeilles-font-le-miel', lien: 'Il a déchiffré la danse par laquelle une abeille dit aux autres où trouver les fleurs.' },
      { id: 'pourquoi-le-miel-ne-se-perime-pas', lien: 'Il a étudié toute la vie de la ruche, jusqu’à ce que les abeilles font du nectar.' },
    ],
  },
  {
    id: 'jean-henri-fabre', nom: 'Jean-Henri Fabre', naissance: 1823, mort: 1915,
    cartes: [{ id: 'la-toile-de-laraignee', lien: 'Il a passé sa vie à observer les insectes et les araignées chez lui, et à tout noter.' }],
  },
  {
    id: 'etienne-jules-marey', nom: 'Étienne-Jules Marey', naissance: 1830, mort: 1904,
    cartes: [{ id: 'pourquoi-le-chat-retombe-sur-ses-pattes', lien: 'Il a filmé un chat en train de tomber, image par image, pour voir comment il se retourne.' }],
  },

  // ── La météo ─────────────────────────────────────────────────────────────
  {
    id: 'luke-howard', nom: 'Luke Howard', naissance: 1772, mort: 1864,
    cartes: [{ id: 'les-nuages', lien: 'Il a donné leurs noms aux nuages : cumulus, stratus, cirrus.' }],
  },
  {
    id: 'horace-benedict-de-saussure', nom: 'Horace-Bénédict de Saussure', naissance: 1740, mort: 1799,
    cartes: [{ id: 'pourquoi-il-fait-plus-froid-en-montagne', lien: 'Il a grimpé au mont Blanc avec ses instruments pour mesurer l’air en altitude.' }],
  },
  {
    id: 'benjamin-franklin', nom: 'Benjamin Franklin', naissance: 1706, mort: 1790,
    cartes: [{ id: 'la-foudre-et-le-tonnerre', lien: 'Il a montré que la foudre est de l’électricité, et inventé le paratonnerre.' }],
  },
  {
    id: 'wilson-bentley', nom: 'Wilson Bentley', naissance: 1865, mort: 1931,
    cartes: [
      { id: 'la-neige', lien: 'Il a photographié des milliers de flocons et n’en a jamais trouvé deux identiques.' },
      { id: 'le-givre', lien: 'Ses photographies montrent aussi les cristaux qui se forment sur les vitres.' },
    ],
  },
  {
    id: 'tor-bergeron', nom: 'Tor Bergeron', naissance: 1891, mort: 1977,
    cartes: [{ id: 'la-grele', lien: 'Il a expliqué comment la glace grossit dans un nuage jusqu’à devenir trop lourde.' }],
  },
  {
    id: 'john-aitken', nom: 'John Aitken', naissance: 1839, mort: 1919,
    cartes: [
      { id: 'le-brouillard', lien: 'Il a découvert que l’eau a besoin d’une poussière pour se condenser en gouttelette.' },
      { id: 'la-rosee-du-matin', lien: 'C’est le même refroidissement qui dépose la rosée sur l’herbe au petit matin.' },
    ],
  },

  // ── Le son ───────────────────────────────────────────────────────────────
  {
    id: 'ernst-chladni', nom: 'Ernst Chladni', naissance: 1756, mort: 1827,
    cartes: [
      { id: 'comment-chante-une-guitare', lien: 'Il a rendu les vibrations visibles, en saupoudrant du sable sur des plaques qui chantent.' },
      { id: 'aigu-ou-grave', lien: 'Ses figures montrent qu’un son aigu fait vibrer la matière plus vite.' },
    ],
  },
  {
    id: 'manuel-garcia', nom: 'Manuel García', naissance: 1805, mort: 1906,
    cartes: [{ id: 'pourquoi-les-voix-sont-differentes', lien: 'Chanteur, il a inventé le miroir qui permet de voir ses propres cordes vocales.' }],
  },
  {
    id: 'georg-von-bekesy', nom: 'Georg von Békésy', naissance: 1899, mort: 1972,
    cartes: [{ id: 'comment-loreille-entend', lien: 'Il a vu comment l’escargot de l’oreille trie les sons, du grave à l’aigu.' }],
  },
  {
    id: 'alexander-graham-bell', nom: 'Alexander Graham Bell', naissance: 1847, mort: 1922,
    cartes: [{ id: 'quand-le-bruit-fait-mal', lien: 'L’unité qui mesure le bruit, le décibel, porte son nom.' }],
  },
  {
    id: 'christian-doppler', nom: 'Christian Doppler', naissance: 1803, mort: 1853,
    cartes: [{ id: 'la-sirene-qui-change', lien: 'Il a prédit que le son d’une source qui approche monte, puis descend quand elle s’éloigne.' }],
  },
  {
    id: 'thomas-edison', nom: 'Thomas Edison', naissance: 1847, mort: 1931,
    cartes: [{ id: 'ma-voix-enregistree', lien: 'Il a enregistré et rejoué une voix humaine pour la première fois.' }],
  },
  {
    id: 'pythagore', nom: 'Pythagore', naissance: -580, mort: -495,
    cartes: [{ id: 'les-notes-qui-vont-ensemble', lien: 'Il a découvert que deux notes s’accordent quand les longueurs de corde sont dans un rapport simple.' }],
  },

  // ── Les dinosaures ───────────────────────────────────────────────────────
  {
    id: 'richard-owen', nom: 'Richard Owen', naissance: 1804, mort: 1892,
    cartes: [
      { id: 'le-puzzle-des-os', lien: 'C’est lui qui a inventé le mot « dinosaure », en assemblant les os retrouvés.' },
      { id: 'pourquoi-si-grands', lien: 'Il a décrit ces reptiles d’une taille qu’on n’imaginait pas possible.' },
    ],
  },
  {
    id: 'luis-alvarez', nom: 'Luis Alvarez', naissance: 1911, mort: 1988,
    cartes: [{ id: 'le-jour-de-lasteroide', lien: 'Il a trouvé, dans une fine couche d’argile, la trace d’un astéroïde tombé sur la Terre.' }],
  },
  {
    id: 'john-ostrom', nom: 'John Ostrom', naissance: 1928, mort: 2005,
    cartes: [{ id: 'les-oiseaux-sont-des-dinosaures', lien: 'Il a démontré que les oiseaux descendent des dinosaures, os par os.' }],
  },
  {
    id: 'james-hutton', nom: 'James Hutton', naissance: 1726, mort: 1797,
    cartes: [{ id: 'il-y-a-tres-tres-longtemps', lien: 'Il a compris que la Terre est immensément vieille, en lisant les roches.' }],
  },
  {
    id: 'georges-cuvier', nom: 'Georges Cuvier', naissance: 1769, mort: 1832,
    cartes: [
      { id: 'carnivore-ou-herbivore', lien: 'Il disait pouvoir reconnaître un animal entier à partir d’une seule dent.' },
      { id: 'apres-les-dinosaures', lien: 'Il a prouvé que des espèces entières, comme le mammouth, ont bel et bien disparu.' },
    ],
  },
  {
    id: 'edward-hitchcock', nom: 'Edward Hitchcock', naissance: 1793, mort: 1864,
    cartes: [{ id: 'les-traces-de-pas', lien: 'Il a rassemblé des milliers d’empreintes fossiles, qu’il croyait être celles d’oiseaux géants.' }],
  },
  {
    id: 'xu-xing', nom: 'Xu Xing', naissance: 1969, mort: null,
    cartes: [{ id: 'des-dinosaures-a-plumes', lien: 'Il a décrit plus de dinosaures à plumes que quiconque.' }],
  },

  // ── Les océans ───────────────────────────────────────────────────────────
  {
    id: 'walter-munk', nom: 'Walter Munk', naissance: 1917, mort: 2019,
    cartes: [{ id: 'dou-viennent-les-vagues', lien: 'Il a suivi la houle d’une seule tempête à travers tout le Pacifique.' }],
  },
  {
    id: 'matthew-fontaine-maury', nom: 'Matthew Fontaine Maury', naissance: 1806, mort: 1873,
    cartes: [{ id: 'les-fleuves-dans-la-mer', lien: 'Il a dressé les cartes des courants marins à partir des carnets de bord des marins.' }],
  },
  {
    id: 'william-beebe', nom: 'William Beebe', naissance: 1877, mort: 1962,
    cartes: [
      { id: 'pourquoi-il-fait-noir-au-fond', lien: 'Enfermé dans une boule d’acier, il est descendu voir le noir absolu et ce qui y vit.' },
      { id: 'la-pression-qui-ecrase', lien: 'Sa boule d’acier avait des parois énormes, pour résister à l’eau qui écrase.' },
    ],
  },
  {
    id: 'osamu-shimomura', nom: 'Osamu Shimomura', naissance: 1928, mort: 2018,
    cartes: [{ id: 'les-animaux-qui-brillent', lien: 'Il a extrait d’une méduse la protéine qui brille en vert.' }],
  },
  {
    id: 'robert-ballard', nom: 'Robert Ballard', naissance: 1942, mort: null,
    cartes: [{ id: 'les-sources-chaudes-du-fond', lien: 'Il a découvert, au fond de l’océan, des sources brûlantes grouillantes de vie sans soleil.' }],
  },
  {
    id: 'victor-hensen', nom: 'Victor Hensen', naissance: 1835, mort: 1924,
    cartes: [{ id: 'le-plancton-minuscule', lien: 'Il a inventé le mot « plancton » et le filet pour l’attraper.' }],
  },

  // ── La cuisine ───────────────────────────────────────────────────────────
  {
    id: 'eduard-buchner', nom: 'Eduard Buchner', naissance: 1860, mort: 1917,
    cartes: [
      { id: 'pourquoi-le-pain-gonfle', lien: 'Il a montré que la fermentation marche même sans levure vivante : ce sont des molécules qui travaillent.' },
      { id: 'pourquoi-la-pomme-brunit', lien: 'Ce sont les mêmes molécules travailleuses, les enzymes, qui brunissent la pomme.' },
    ],
  },
  {
    id: 'louis-camille-maillard', nom: 'Louis-Camille Maillard', naissance: 1878, mort: 1936,
    cartes: [{ id: 'pourquoi-ca-dore', lien: 'La réaction qui dore le pain et la viande porte son nom.' }],
  },
  {
    id: 'eric-block', nom: 'Eric Block', naissance: 1942, mort: null,
    cartes: [{ id: 'pourquoi-loignon-fait-pleurer', lien: 'Il a percé la chimie du soufre de l’oignon et de l’ail.' }],
  },
  {
    id: 'wilbur-scoville', nom: 'Wilbur Scoville', naissance: 1865, mort: 1942,
    cartes: [{ id: 'pourquoi-le-piment-brule', lien: 'Il a inventé l’échelle qui mesure la force d’un piment.' }],
  },
  {
    id: 'christian-anfinsen', nom: 'Christian Anfinsen', naissance: 1916, mort: 1995,
    cartes: [{ id: 'pourquoi-loeuf-durcit', lien: 'Il a expliqué comment une protéine se replie — et ce qui arrive quand la chaleur la déplie.' }],
  },
];
