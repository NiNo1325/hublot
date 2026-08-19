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
      { id: 'les-leviers', lien: { fr: 'Il a énoncé la loi du levier — « donnez-moi un point d’appui et je soulèverai le monde ».', en: 'He stated the law of the lever — “give me a place to stand and I will lift the world”.' } },
      { id: 'les-poulies', lien: { fr: 'Il aurait tiré un navire chargé à lui seul, avec un jeu de poulies.', en: 'He is said to have pulled a loaded ship on his own, with a set of pulleys.' } },
      { id: 'pourquoi-les-bateaux-flottent', lien: { fr: 'Il a trouvé la poussée qui soulève tout corps plongé dans l’eau.', en: 'He found the upward push that lifts any object placed in water.' } },
      { id: 'pourquoi-on-flotte-mieux-dans-la-mer', lien: { fr: 'Sa poussée est d’autant plus forte que l’eau est lourde — et l’eau salée l’est.', en: 'His push is all the stronger when the water is heavy — and salt water is.' } },
      { id: 'les-grands-nombres', lien: { fr: 'Il a écrit un livre entier pour compter les grains de sable de l’univers.', en: 'He wrote a whole book to count the grains of sand in the universe.' } },
    ],
  },
  {
    id: 'isaac-newton', nom: 'Isaac Newton', naissance: 1643, mort: 1727,
    cartes: [
      { id: 'pourquoi-tout-tombe', lien: { fr: 'Il a compris que la pomme et la Lune tombent pour la même raison.', en: 'He understood that the apple and the Moon fall for the very same reason.' } },
      { id: 'les-marees', lien: { fr: 'Sa gravitation explique que la Lune tire sur les océans.', en: 'His gravitation explains that the Moon pulls on the oceans.' } },
      { id: 'pourquoi-ca-sarrete', lien: { fr: 'Ses lois du mouvement disent qu’un objet ne s’arrête que si quelque chose le freine.', en: 'His laws of motion say that an object only stops if something slows it down.' } },
      { id: 'le-poids-et-la-masse', lien: { fr: 'Il a séparé le poids, qui dépend de l’endroit, et la masse, qui ne change jamais.', en: 'He separated weight, which depends on where you are, from mass, which never changes.' } },
    ],
  },
  {
    id: 'galilee', nom: 'Galilée', naissance: 1564, mort: 1642,
    cartes: [
      { id: 'les-phases-de-la-lune', lien: { fr: 'Il a dessiné la Lune à la lunette, ses cratères et ses phases, nuit après nuit.', en: 'He drew the Moon through his telescope, its craters and its phases, night after night.' } },
      { id: 'les-planetes', lien: { fr: 'Il a vu que Jupiter a des lunes : tout ne tourne donc pas autour de la Terre.', en: 'He saw that Jupiter has moons: so not everything turns around the Earth.' } },
    ],
  },
  {
    id: 'louis-pasteur', nom: 'Louis Pasteur', naissance: 1822, mort: 1895,
    cartes: [
      { id: 'pourquoi-le-lait-devient-yaourt', lien: { fr: 'Il a montré que ce sont des micro-organismes qui font tourner le lait, et comment les maîtriser.', en: 'He showed that tiny living things turn the milk, and how to tame them.' } },
    ],
  },
  {
    id: 'charles-darwin', nom: 'Charles Darwin', naissance: 1809, mort: 1882,
    cartes: [
      { id: 'levolution', lien: { fr: 'Il a expliqué comment les espèces se transforment lentement, génération après génération.', en: 'He explained how species slowly change, generation after generation.' } },
      { id: 'le-corail-batisseur', lien: { fr: 'Sa première grande théorie explique comment un atoll se bâtit sur un volcan qui s’enfonce.', en: 'His first great theory explains how an atoll builds itself on a sinking volcano.' } },
    ],
  },
  {
    id: 'nikola-tesla', nom: 'Nikola Tesla', naissance: 1856, mort: 1943,
    cartes: [
      { id: 'lelectricite', lien: { fr: 'Il a imposé le courant alternatif, celui qui arrive aujourd’hui dans les prises.', en: 'He made alternating current win — the one that reaches our sockets today.' } },
      { id: 'les-aimants', lien: { fr: 'Ses moteurs tournent grâce à un champ magnétique qui tourne aussi.', en: 'His motors turn thanks to a magnetic field that turns as well.' } },
    ],
  },
  {
    id: 'ibn-al-haytham', nom: 'Ibn al-Haytham', naissance: 965, mort: 1040,
    cartes: [
      { id: 'pourquoi-on-voit-les-couleurs', lien: { fr: 'Il a établi que la lumière entre dans l’œil, et non l’inverse comme on le croyait.', en: 'He established that light enters the eye, and not the other way round as people believed.' } },
      { id: 'pourquoi-on-a-deux-yeux', lien: { fr: 'Il a étudié le premier ce que voient nos deux yeux à la fois.', en: 'He was the first to study what our two eyes see at the same time.' } },
    ],
  },
  {
    id: 'albert-einstein', nom: 'Albert Einstein', naissance: 1879, mort: 1955,
    cartes: [
      { id: 'les-eclipses', lien: { fr: 'C’est pendant une éclipse qu’on a vérifié sa théorie : la lumière des étoiles se courbe près du Soleil.', en: 'It was during an eclipse that his theory was checked: starlight bends near the Sun.' } },
      { id: 'lenergie', lien: { fr: 'Il a écrit l’équation qui relie l’énergie et la masse.', en: 'He wrote the equation that ties energy to mass.' } },
    ],
  },
  {
    id: 'katherine-johnson', nom: 'Katherine Johnson', naissance: 1918, mort: 2020,
    cartes: [
      { id: 'pourquoi-les-astronautes-flottent', lien: { fr: 'Elle a calculé à la main les trajectoires qui mettent une capsule en orbite, donc en chute libre.', en: 'She worked out by hand the paths that put a capsule in orbit, and so in free fall.' } },
      { id: 'comment-avance-une-fusee', lien: { fr: 'Ses calculs disaient quand allumer et couper les moteurs, à la seconde près.', en: 'Her calculations said when to fire and cut the engines, to the second.' } },
    ],
  },
  {
    id: 'mary-anning', nom: 'Mary Anning', naissance: 1799, mort: 1847,
    cartes: [
      { id: 'les-fossiles', lien: { fr: 'Elle a passé sa vie à extraire des fossiles de la falaise, et à les reconnaître mieux que les savants.', en: 'She spent her life pulling fossils out of the cliff, and knowing them better than the scholars.' } },
      { id: 'pas-tous-des-dinosaures', lien: { fr: 'Elle a découvert des reptiles marins et volants — qui ne sont justement pas des dinosaures.', en: 'She found sea and flying reptiles — which are precisely not dinosaurs.' } },
    ],
  },

  // ── Les sciences de la Terre ─────────────────────────────────────────────
  {
    id: 'pierre-perrault', nom: 'Pierre Perrault', naissance: 1611, mort: 1680,
    cartes: [{ id: 'cycle-de-leau', lien: { fr: 'Il a mesuré la pluie tombée sur un bassin et prouvé qu’elle suffit à faire couler les rivières.', en: 'He measured the rain falling on a valley and proved it is enough to keep the rivers flowing.' } }],
  },
  {
    id: 'haroun-tazieff', nom: 'Haroun Tazieff', naissance: 1914, mort: 1998,
    cartes: [{ id: 'les-volcans', lien: { fr: 'Il est descendu filmer les volcans en éruption, au plus près de la lave.', en: 'He climbed down to film erupting volcanoes, as close to the lava as he could get.' } }],
  },
  {
    id: 'inge-lehmann', nom: 'Inge Lehmann', naissance: 1888, mort: 1993,
    cartes: [
      { id: 'pourquoi-la-terre-tremble', lien: { fr: 'En écoutant les séismes traverser la Terre, elle a découvert qu’elle a une graine solide au centre.', en: 'By listening to earthquakes crossing the Earth, she discovered it has a solid seed at its centre.' } },
      { id: 'la-vague-geante', lien: { fr: 'Ce sont les séismes qu’elle étudiait qui soulèvent les vagues géantes.', en: 'The earthquakes she studied are the very ones that raise giant waves.' } },
    ],
  },
  {
    id: 'gaspard-gustave-coriolis', nom: 'Gaspard-Gustave Coriolis', naissance: 1792, mort: 1843,
    cartes: [
      { id: 'le-vent', lien: { fr: 'Il a décrit la force qui dévie les vents parce que la Terre tourne sous eux.', en: 'He described the force that bends the winds because the Earth turns beneath them.' } },
      { id: 'louragan', lien: { fr: 'C’est cette même force qui fait tourner les ouragans, et toujours dans le même sens.', en: 'That same force is what makes hurricanes spin, always the same way round.' } },
    ],
  },
  {
    id: 'lord-rayleigh', nom: 'Lord Rayleigh', naissance: 1842, mort: 1919,
    cartes: [
      { id: 'pourquoi-le-ciel-est-bleu', lien: { fr: 'Il a calculé pourquoi l’air disperse le bleu plus que le rouge — cette diffusion porte son nom.', en: 'He calculated why air scatters blue more than red — that scattering carries his name.' } },
      { id: 'la-forme-des-gouttes-de-pluie', lien: { fr: 'Il a expliqué comment un filet d’eau se coupe en gouttes bien rondes.', en: 'He explained how a thread of water breaks into nicely round drops.' } },
    ],
  },
  {
    id: 'edmond-halley', nom: 'Edmond Halley', naissance: 1656, mort: 1742,
    cartes: [
      { id: 'pourquoi-la-mer-est-salee', lien: { fr: 'Il a proposé de peser le sel des mers pour deviner depuis combien de temps les fleuves s’y déversent.', en: 'He suggested weighing the salt of the seas to guess how long the rivers have poured into them.' } },
      { id: 'les-etoiles-filantes', lien: { fr: 'Il a compris que les comètes reviennent — et ce sont leurs poussières qui filent dans le ciel.', en: 'He understood that comets come back — and it is their dust that streaks across the sky.' } },
    ],
  },
  {
    id: 'mikhail-lomonossov', nom: 'Mikhaïl Lomonossov', naissance: 1711, mort: 1765,
    cartes: [{ id: 'dou-vient-le-petrole', lien: { fr: 'Il a soutenu, bien avant les autres, que le pétrole vient de restes d’êtres vivants enfouis.', en: 'He argued, long before anyone else, that oil comes from buried remains of living things.' } }],
  },
  {
    id: 'selman-waksman', nom: 'Selman Waksman', naissance: 1888, mort: 1973,
    cartes: [{ id: 'le-sol-est-vivant', lien: { fr: 'Il a fouillé la vie microscopique du sol et en a tiré des antibiotiques.', en: 'He dug into the tiny life of the soil and drew antibiotics from it.' } }],
  },

  // ── L'espace ─────────────────────────────────────────────────────────────
  {
    id: 'nicolas-copernic', nom: 'Nicolas Copernic', naissance: 1473, mort: 1543,
    cartes: [{ id: 'jour-et-nuit', lien: { fr: 'Il a osé dire que c’est la Terre qui tourne, et non le Soleil qui en fait le tour.', en: 'He dared to say that it is the Earth that turns, and not the Sun that goes round it.' } }],
  },
  {
    id: 'milutin-milankovic', nom: 'Milutin Milanković', naissance: 1879, mort: 1958,
    cartes: [{ id: 'pourquoi-il-y-a-des-saisons', lien: { fr: 'Il a calculé comment l’inclinaison de la Terre règle les saisons et les glaciations.', en: 'He calculated how the tilt of the Earth sets the seasons and the ice ages.' } }],
  },
  {
    id: 'cecilia-payne', nom: 'Cecilia Payne-Gaposchkin', naissance: 1900, mort: 1979,
    cartes: [{ id: 'les-etoiles', lien: { fr: 'Elle a découvert que les étoiles sont faites d’hydrogène — personne ne voulait la croire.', en: 'She discovered that stars are made of hydrogen — nobody wanted to believe her.' } }],
  },
  {
    id: 'stephen-hawking', nom: 'Stephen Hawking', naissance: 1942, mort: 2018,
    cartes: [{ id: 'les-trous-noirs', lien: { fr: 'Il a montré qu’un trou noir n’est pas tout à fait noir : il s’évapore lentement.', en: 'He showed that a black hole is not quite black: it slowly evaporates.' } }],
  },
  {
    id: 'serguei-korolev', nom: 'Sergueï Korolev', naissance: 1907, mort: 1966,
    cartes: [{ id: 'la-face-cachee-de-la-lune', lien: { fr: 'Il a conçu la sonde qui a photographié pour la première fois la face cachée de la Lune.', en: 'He designed the probe that first photographed the far side of the Moon.' } }],
  },

  // ── Le vivant et le corps ────────────────────────────────────────────────
  {
    id: 'jan-baptist-van-helmont', nom: 'Jan Baptist van Helmont', naissance: 1580, mort: 1644,
    cartes: [{ id: 'comment-poussent-les-plantes', lien: { fr: 'Il a pesé un saule et sa terre pendant cinq ans pour savoir d’où venait le bois.', en: 'He weighed a willow and its soil for five years, to find out where the wood came from.' } }],
  },
  {
    id: 'william-harvey', nom: 'William Harvey', naissance: 1578, mort: 1657,
    cartes: [{ id: 'le-coeur-et-le-sang', lien: { fr: 'Il a montré que le sang tourne en boucle, poussé par le cœur.', en: 'He showed that blood travels in a loop, pushed along by the heart.' } }],
  },
  {
    id: 'alexander-fleming', nom: 'Alexander Fleming', naissance: 1881, mort: 1955,
    cartes: [{ id: 'les-microbes', lien: { fr: 'Une moisissure tombée par hasard dans sa boîte tuait les microbes : la pénicilline.', en: 'A mould that landed by chance in his dish was killing the germs: penicillin.' } }],
  },
  {
    id: 'nathaniel-kleitman', nom: 'Nathaniel Kleitman', naissance: 1895, mort: 1999,
    cartes: [{ id: 'pourquoi-on-dort', lien: { fr: 'Il a découvert le sommeil où les yeux bougent sous les paupières, celui des rêves.', en: 'He discovered the sleep where the eyes move under the eyelids — the sleep of dreams.' } }],
  },
  {
    id: 'rosalind-franklin', nom: 'Rosalind Franklin', naissance: 1920, mort: 1958,
    cartes: [{ id: 'pourquoi-on-ressemble-a-ses-parents', lien: { fr: 'Sa photographie de l’ADN a révélé sa forme en double hélice.', en: 'Her photograph of DNA revealed its double helix shape.' } }],
  },
  {
    id: 'john-scott-haldane', nom: 'John Scott Haldane', naissance: 1860, mort: 1936,
    cartes: [
      { id: 'comment-on-respire', lien: { fr: 'Il a compris que c’est le gaz carbonique, et non le manque d’air, qui commande la respiration.', en: 'He understood that it is carbon dioxide, not the lack of air, that commands our breathing.' } },
      { id: 'comment-les-poissons-respirent', lien: { fr: 'Il a étudié comment l’oxygène passe de l’eau ou de l’air jusque dans le sang.', en: 'He studied how oxygen passes from water or air right into the blood.' } },
    ],
  },
  {
    id: 'ivan-pavlov', nom: 'Ivan Pavlov', naissance: 1849, mort: 1936,
    cartes: [{ id: 'le-voyage-de-la-nourriture', lien: { fr: 'Il a étudié la digestion pas à pas, de la salive à l’estomac.', en: 'He studied digestion step by step, from saliva to stomach.' } }],
  },
  {
    id: 'santiago-ramon-y-cajal', nom: 'Santiago Ramón y Cajal', naissance: 1852, mort: 1934,
    cartes: [{ id: 'le-cerveau', lien: { fr: 'Il a dessiné les neurones un par un et montré qu’ils ne se touchent pas tout à fait.', en: 'He drew neurons one by one and showed that they do not quite touch.' } }],
  },
  {
    id: 'marie-curie', nom: 'Marie Curie', naissance: 1867, mort: 1934,
    cartes: [{ id: 'les-os', lien: { fr: 'Elle a fait rouler des voitures de radiographie jusqu’au front, pour voir les os à travers la peau.', en: 'She drove X-ray cars all the way to the front line, to see bones through the skin.' } }],
  },
  {
    id: 'dmitri-mendeleiev', nom: 'Dmitri Mendeleïev', naissance: 1834, mort: 1907,
    cartes: [{ id: 'les-atomes', lien: { fr: 'Il a rangé les atomes dans un tableau, en laissant des cases vides pour ceux qu’on n’avait pas encore trouvés.', en: 'He arranged the atoms in a table, leaving empty boxes for those not yet found.' } }],
  },
  {
    id: 'luigi-galvani', nom: 'Luigi Galvani', naissance: 1737, mort: 1798,
    cartes: [
      { id: 'comment-les-muscles-bougent', lien: { fr: 'Il a fait bouger la patte d’une grenouille morte avec de l’électricité.', en: 'He made a dead frog’s leg move with electricity.' } },
      { id: 'la-chair-de-poule', lien: { fr: 'Ce sont de minuscules muscles, comme ceux qu’il étudiait, qui hérissent les poils.', en: 'It is tiny muscles, like the ones he studied, that make the hairs stand up.' } },
    ],
  },
  {
    id: 'aristote', nom: 'Aristote', naissance: -384, mort: -322, aRevoir: true,
    cartes: [
      { id: 'lhibernation', lien: { fr: 'Il a décrit le premier les animaux qui disparaissent tout l’hiver.', en: 'He was the first to describe the animals that vanish for the whole winter.' } },
      { id: 'pourquoi-on-eternue', lien: { fr: 'Il a consacré tout un chapitre à l’éternuement, qu’il tenait pour un bon présage.', en: 'He devoted a whole chapter to sneezing, which he took for a good omen.' } },
    ],
  },
  {
    id: 'william-frey', nom: 'William Frey', naissance: 1943, mort: null,
    cartes: [{ id: 'a-quoi-servent-les-larmes', lien: { fr: 'Il a comparé les larmes de chagrin et celles d’un oignon : elles ne contiennent pas la même chose.', en: 'He compared tears of sadness with onion tears: they do not contain the same things.' } }],
  },
  {
    id: 'marcello-malpighi', nom: 'Marcello Malpighi', naissance: 1628, mort: 1694,
    cartes: [{ id: 'la-peau-notre-bouclier', lien: { fr: 'Il a vu au microscope que la peau est faite de couches — l’une porte son nom.', en: 'Under the microscope he saw that skin is made of layers — one of them bears his name.' } }],
  },
  {
    id: 'jan-purkyne', nom: 'Jan Purkyně', naissance: 1787, mort: 1869,
    cartes: [{ id: 'les-empreintes-digitales', lien: { fr: 'Il a classé le premier les dessins du bout des doigts, en neuf familles.', en: 'He was the first to sort the patterns on our fingertips, into nine families.' } }],
  },
  {
    id: 'ronald-melzack', nom: 'Ronald Melzack', naissance: 1929, mort: 2019,
    cartes: [{ id: 'pourquoi-on-a-mal', lien: { fr: 'Il a expliqué que la douleur passe par une « porte » que le cerveau peut refermer.', en: 'He explained that pain passes through a “gate” the brain can close.' } }],
  },
  {
    id: 'robert-barany', nom: 'Robert Bárány', naissance: 1876, mort: 1936,
    cartes: [{ id: 'comment-on-tient-debout', lien: { fr: 'Il a découvert comment l’oreille interne nous dit où est le haut.', en: 'He discovered how the inner ear tells us which way is up.' } }],
  },
  {
    id: 'pierre-fauchard', nom: 'Pierre Fauchard', naissance: 1678, mort: 1761,
    cartes: [{ id: 'les-dents-de-lait', lien: { fr: 'Il a fondé la dentisterie moderne et décrit la pousse des dents de l’enfant.', en: 'He founded modern dentistry and described how a child’s teeth come through.' } }],
  },

  // ── La physique et la chimie ─────────────────────────────────────────────
  {
    id: 'marin-mersenne', nom: 'Marin Mersenne', naissance: 1588, mort: 1648,
    cartes: [
      { id: 'comment-voyage-le-son', lien: { fr: 'Il a mesuré la vitesse du son, avec un écho et beaucoup de patience.', en: 'He measured the speed of sound, with an echo and a great deal of patience.' } },
      { id: 'pourquoi-lecho-repond', lien: { fr: 'C’est en chronométrant des échos qu’il a fait cette mesure.', en: 'It was by timing echoes that he made that measurement.' } },
    ],
  },
  {
    id: 'lord-kelvin', nom: 'Lord Kelvin', naissance: 1824, mort: 1907,
    cartes: [
      { id: 'le-chaud-et-le-froid', lien: { fr: 'Il a trouvé qu’il existe un froid absolu, en dessous duquel on ne peut pas descendre.', en: 'He found that there is an absolute cold, below which you cannot go.' } },
      { id: 'les-etats-de-la-matiere', lien: { fr: 'C’est la température qui fait passer la matière du solide au liquide et au gaz.', en: 'It is temperature that takes matter from solid to liquid to gas.' } },
    ],
  },
  {
    id: 'antoine-lavoisier', nom: 'Antoine Lavoisier', naissance: 1743, mort: 1794,
    cartes: [
      { id: 'le-feu', lien: { fr: 'Il a prouvé que brûler, c’est se combiner à l’oxygène — rien ne se perd, rien ne se crée.', en: 'He proved that burning means joining with oxygen — nothing is lost, nothing is created.' } },
      { id: 'de-quoi-est-fait-lair', lien: { fr: 'Il a nommé l’oxygène et l’azote, les deux gaz principaux de l’air.', en: 'He named oxygen and nitrogen, the two main gases of the air.' } },
    ],
  },
  {
    id: 'joseph-priestley', nom: 'Joseph Priestley', naissance: 1733, mort: 1804,
    cartes: [
      { id: 'pourquoi-le-soda-petille', lien: { fr: 'Il a inventé l’eau gazeuse, en faisant passer dans de l’eau le gaz d’une brasserie voisine.', en: 'He invented fizzy water, by running the gas from a nearby brewery through it.' } },
      { id: 'le-volcan-de-vinaigre', lien: { fr: 'C’est le même gaz qu’il capturait qui fait mousser le vinaigre sur le bicarbonate.', en: 'It is the same gas he captured that makes vinegar foam up on bicarbonate.' } },
    ],
  },
  {
    id: 'svante-arrhenius', nom: 'Svante Arrhenius', naissance: 1859, mort: 1927,
    cartes: [
      { id: 'les-acides-et-les-bases', lien: { fr: 'Il a dit ce qu’est un acide : quelque chose qui libère des particules chargées dans l’eau.', en: 'He said what an acid is: something that releases charged particles into water.' } },
      { id: 'ou-va-le-sucre-dans-leau', lien: { fr: 'Il a expliqué ce que deviennent les molécules quand elles se dissolvent.', en: 'He explained what becomes of molecules when they dissolve.' } },
    ],
  },
  {
    id: 'humphry-davy', nom: 'Humphry Davy', naissance: 1778, mort: 1829,
    cartes: [{ id: 'la-rouille', lien: { fr: 'Il a protégé les coques des bateaux de la corrosion, en leur donnant un autre métal à ronger.', en: 'He protected ships’ hulls from rust, by giving them another metal to eat away.' } }],
  },
  {
    id: 'michel-eugene-chevreul', nom: 'Michel Eugène Chevreul', naissance: 1786, mort: 1889,
    cartes: [{ id: 'pourquoi-le-savon-lave', lien: { fr: 'Il a percé la chimie des corps gras, donc celle du savon.', en: 'He cracked the chemistry of fats, and therefore of soap.' } }],
  },
  {
    id: 'linda-buck', nom: 'Linda Buck', naissance: 1947, mort: null,
    cartes: [{ id: 'pourquoi-ca-sent', lien: { fr: 'Elle a trouvé les capteurs du nez, toute une famille de détecteurs d’odeurs.', en: 'She found the sensors in the nose, a whole family of smell detectors.' } }],
  },
  {
    id: 'linus-pauling', nom: 'Linus Pauling', naissance: 1901, mort: 1994,
    cartes: [{ id: 'pourquoi-la-glace-flotte', lien: { fr: 'Il a décrit comment les molécules d’eau s’accrochent, ce qui rend la glace plus légère que l’eau.', en: 'He described how water molecules hook together, which makes ice lighter than water.' } }],
  },

  // ── Construire ───────────────────────────────────────────────────────────
  {
    id: 'gustave-eiffel', nom: 'Gustave Eiffel', naissance: 1832, mort: 1923,
    cartes: [{ id: 'pourquoi-les-ponts-tiennent', lien: { fr: 'Il a bâti des ponts en treillis, où chaque barre tire ou pousse juste ce qu’il faut.', en: 'He built lattice bridges, where every bar pulls or pushes just as much as it should.' } }],
  },
  {
    id: 'leonard-de-vinci', nom: 'Léonard de Vinci', naissance: 1452, mort: 1519,
    cartes: [{ id: 'comment-vole-un-avion', lien: { fr: 'Il a étudié le vol des oiseaux et dessiné des machines volantes quatre siècles trop tôt.', en: 'He studied the flight of birds and drew flying machines four centuries too early.' } }],
  },
  {
    id: 'al-jazari', nom: 'Al-Jazari', naissance: 1136, mort: 1206,
    cartes: [{ id: 'les-engrenages', lien: { fr: 'Il a dessiné et construit des machines à engrenages d’une précision inouïe pour son temps.', en: 'He drew and built geared machines of a precision unheard of in his time.' } }],
  },
  {
    id: 'elisha-otis', nom: 'Elisha Otis', naissance: 1811, mort: 1861,
    cartes: [{ id: 'comment-on-freine', lien: { fr: 'Il a inventé le frein de sécurité, et l’a prouvé en faisant couper le câble sous ses pieds.', en: 'He invented the safety brake, and proved it by having the cable cut under his feet.' } }],
  },
  {
    id: 'carl-von-linde', nom: 'Carl von Linde', naissance: 1842, mort: 1934,
    cartes: [{ id: 'comment-marche-un-frigo', lien: { fr: 'Il a construit la première machine à fabriquer du froid, en détendant un gaz.', en: 'He built the first machine that makes cold, by letting a gas expand.' } }],
  },
  {
    id: 'percy-spencer', nom: 'Percy Spencer', naissance: 1894, mort: 1970,
    cartes: [{ id: 'le-micro-ondes', lien: { fr: 'Une barre de chocolat a fondu dans sa poche devant un radar : il a compris pourquoi.', en: 'A chocolate bar melted in his pocket in front of a radar: he understood why.' } }],
  },
  {
    id: 'denis-papin', nom: 'Denis Papin', naissance: 1647, mort: 1713,
    cartes: [{ id: 'pourquoi-le-popcorn-explose', lien: { fr: 'Il a inventé la marmite sous pression : c’est la vapeur enfermée qui fait tout sauter.', en: 'He invented the pressure pot: it is the trapped steam that makes everything burst.' } }],
  },

  // ── Les ordinateurs ──────────────────────────────────────────────────────
  {
    id: 'gottfried-leibniz', nom: 'Gottfried Leibniz', naissance: 1646, mort: 1716,
    cartes: [{ id: 'comment-compte-un-ordinateur', lien: { fr: 'Il a inventé le calcul binaire : compter avec des 0 et des 1 seulement.', en: 'He invented binary counting: counting with nothing but 0s and 1s.' } }],
  },
  {
    id: 'vinton-cerf', nom: 'Vinton Cerf', naissance: 1943, mort: null,
    cartes: [{ id: 'comment-marche-internet', lien: { fr: 'Il a écrit les règles qui permettent à deux réseaux différents de se parler.', en: 'He wrote the rules that let two different networks talk to each other.' } }],
  },
  {
    id: 'ada-lovelace', nom: 'Ada Lovelace', naissance: 1815, mort: 1852,
    cartes: [{ id: 'quest-ce-quun-programme', lien: { fr: 'Elle a écrit le tout premier programme, pour une machine qui n’a jamais été construite.', en: 'She wrote the very first program, for a machine that was never built.' } }],
  },
  {
    id: 'grace-hopper', nom: 'Grace Hopper', naissance: 1906, mort: 1992, aRevoir: true,
    cartes: [{ id: 'comment-un-ordinateur-se-souvient', lien: { fr: 'Elle a trouvé le premier « bug » de l’histoire : un vrai papillon coincé dans la machine.', en: 'She found the first “bug” in history: a real moth stuck inside the machine.' } }],
  },
  {
    id: 'alan-turing', nom: 'Alan Turing', naissance: 1912, mort: 1954,
    cartes: [{ id: 'comment-une-machine-apprend', lien: { fr: 'Il a demandé le premier si une machine peut penser, et proposé un test pour le savoir.', en: 'He was the first to ask whether a machine can think, and offered a test to find out.' } }],
  },
  {
    id: 'george-heilmeier', nom: 'George Heilmeier', naissance: 1936, mort: 2014,
    cartes: [{ id: 'comment-marche-un-ecran', lien: { fr: 'Il a fait le premier écran à cristaux liquides, l’ancêtre de tous nos écrans plats.', en: 'He made the first liquid crystal display, ancestor of all our flat screens.' } }],
  },
  {
    id: 'whitfield-diffie', nom: 'Whitfield Diffie', naissance: 1944, mort: null,
    cartes: [{ id: 'les-mots-de-passe', lien: { fr: 'Il a inventé le secret à deux clés : une pour fermer, une autre pour ouvrir.', en: 'He invented the two-key secret: one to lock, another to open.' } }],
  },
  {
    id: 'nasir-ahmed', nom: 'Nasir Ahmed', naissance: 1940, mort: null,
    cartes: [{ id: 'pourquoi-une-photo-devient-floue', lien: { fr: 'Il a trouvé la méthode qui compresse les images — et qui les rend floues si on serre trop.', en: 'He found the method that squeezes images — and blurs them if you squeeze too hard.' } }],
  },
  {
    id: 'latanya-sweeney', nom: 'Latanya Sweeney', naissance: 1959, mort: null,
    cartes: [{ id: 'la-navigation-privee', lien: { fr: 'Elle a démontré qu’on peut reconnaître quelqu’un dans des données prétendues anonymes.', en: 'She showed that you can recognise someone inside data claimed to be anonymous.' } }],
  },
  {
    id: 'hedy-lamarr', nom: 'Hedy Lamarr', naissance: 1914, mort: 2000,
    cartes: [{ id: 'le-wifi', lien: { fr: 'Actrice et inventrice, elle a imaginé le saut de fréquence, ancêtre du wifi.', en: 'An actress and an inventor, she imagined frequency hopping, the ancestor of wifi.' } }],
  },

  // ── Les nombres ──────────────────────────────────────────────────────────
  {
    id: 'emmy-noether', nom: 'Emmy Noether', naissance: 1882, mort: 1935,
    cartes: [{ id: 'la-symetrie', lien: { fr: 'Elle a prouvé que derrière chaque symétrie se cache une chose qui se conserve.', en: 'She proved that behind every symmetry hides something that is preserved.' } }],
  },
  {
    id: 'benoit-mandelbrot', nom: 'Benoît Mandelbrot', naissance: 1924, mort: 2010,
    cartes: [{ id: 'les-fractales', lien: { fr: 'Il a nommé les fractales, ces formes qui se répètent à toutes les échelles.', en: 'He named fractals, those shapes that repeat at every scale.' } }],
  },
  {
    id: 'blaise-pascal', nom: 'Blaise Pascal', naissance: 1623, mort: 1662,
    cartes: [
      { id: 'le-hasard', lien: { fr: 'Il a fondé le calcul des probabilités en réfléchissant à un jeu de dés interrompu.', en: 'He founded the study of probability while thinking about an interrupted dice game.' } },
      { id: 'le-paradoxe-des-anniversaires', lien: { fr: 'C’est son calcul des probabilités qui donne la réponse, et elle surprend tout le monde.', en: 'It is his probability calculus that gives the answer, and it surprises everyone.' } },
    ],
  },
  {
    id: 'georg-cantor', nom: 'Georg Cantor', naissance: 1845, mort: 1918,
    cartes: [{ id: 'linfini', lien: { fr: 'Il a démontré qu’il existe plusieurs infinis, et que certains sont plus grands que d’autres.', en: 'He proved that there are several infinities, and that some are bigger than others.' } }],
  },
  {
    id: 'al-khwarizmi', nom: 'Al-Khwârizmî', naissance: 780, mort: 850,
    cartes: [{ id: 'le-zero', lien: { fr: 'Il a fait connaître le zéro et les chiffres qu’on écrit encore aujourd’hui.', en: 'He made the zero known, along with the digits we still write today.' } }],
  },
  {
    id: 'euclide', nom: 'Euclide', naissance: -325, mort: -265,
    cartes: [{ id: 'le-tour-et-la-surface', lien: { fr: 'Il a écrit le livre de géométrie qu’on a utilisé pendant deux mille ans.', en: 'He wrote the geometry book that was used for two thousand years.' } }],
  },
  {
    id: 'adolphe-quetelet', nom: 'Adolphe Quetelet', naissance: 1796, mort: 1874,
    cartes: [
      { id: 'la-moyenne', lien: { fr: 'Il a appliqué la moyenne aux humains, et inventé l’idée d’« homme moyen ».', en: 'He applied the average to human beings, and invented the idea of the “average man”.' } },
      { id: 'les-pourcentages', lien: { fr: 'Il a répandu l’habitude de compter les gens en parts de cent.', en: 'He spread the habit of counting people in parts of a hundred.' } },
    ],
  },

  // ── Les animaux ──────────────────────────────────────────────────────────
  {
    id: 'maria-sibylla-merian', nom: 'Maria Sibylla Merian', naissance: 1647, mort: 1717,
    cartes: [{ id: 'la-metamorphose-du-papillon', lien: { fr: 'Elle a élevé et peint les chenilles jusqu’au papillon, quand on croyait encore les insectes nés de la boue.', en: 'She raised and painted caterpillars all the way to the butterfly, when insects were still thought to be born from mud.' } }],
  },
  {
    id: 'michel-milinkovitch', nom: 'Michel Milinkovitch', naissance: 1963, mort: null,
    cartes: [{ id: 'pourquoi-le-cameleon-change-de-couleur', lien: { fr: 'Il a montré que le caméléon ne change pas de pigment : il écarte de minuscules cristaux dans sa peau.', en: 'He showed that the chameleon does not change pigment: it spreads tiny crystals in its skin.' } }],
  },
  {
    id: 'johannes-thienemann', nom: 'Johannes Thienemann', naissance: 1863, mort: 1938,
    cartes: [{ id: 'la-migration-des-oiseaux', lien: { fr: 'Il a inventé le baguage des oiseaux, qui a enfin révélé où ils vont.', en: 'He invented bird ringing, which finally revealed where they go.' } }],
  },
  {
    id: 'donald-griffin', nom: 'Donald Griffin', naissance: 1915, mort: 2003,
    cartes: [
      { id: 'lecholocation-de-la-chauve-souris', lien: { fr: 'Il a prouvé que les chauves-souris crient trop aigu pour nous, et écoutent l’écho revenir.', en: 'He proved that bats shriek too high for us, and listen for the echo coming back.' } },
      { id: 'les-sons-quon-nentend-pas', lien: { fr: 'C’est lui qui a montré que des sons existent au-dessus de notre oreille.', en: 'He is the one who showed that sounds exist above our hearing.' } },
    ],
  },
  {
    id: 'tim-caro', nom: 'Tim Caro', naissance: 1954, mort: null,
    cartes: [{ id: 'pourquoi-les-zebres-ont-des-rayures', lien: { fr: 'Il a habillé des chevaux de rayures pour montrer que les mouches s’y posent moins.', en: 'He dressed horses in stripes to show that flies land on them less.' } }],
  },
  {
    id: 'karl-von-frisch', nom: 'Karl von Frisch', naissance: 1886, mort: 1982,
    cartes: [
      { id: 'comment-les-abeilles-font-le-miel', lien: { fr: 'Il a déchiffré la danse par laquelle une abeille dit aux autres où trouver les fleurs.', en: 'He decoded the dance by which a bee tells the others where to find flowers.' } },
      { id: 'pourquoi-le-miel-ne-se-perime-pas', lien: { fr: 'Il a étudié toute la vie de la ruche, jusqu’à ce que les abeilles font du nectar.', en: 'He studied the whole life of the hive, right down to what bees do with nectar.' } },
    ],
  },
  {
    id: 'jean-henri-fabre', nom: 'Jean-Henri Fabre', naissance: 1823, mort: 1915,
    cartes: [{ id: 'la-toile-de-laraignee', lien: { fr: 'Il a passé sa vie à observer les insectes et les araignées chez lui, et à tout noter.', en: 'He spent his life watching insects and spiders at home, and writing everything down.' } }],
  },
  {
    id: 'etienne-jules-marey', nom: 'Étienne-Jules Marey', naissance: 1830, mort: 1904,
    cartes: [{ id: 'pourquoi-le-chat-retombe-sur-ses-pattes', lien: { fr: 'Il a filmé un chat en train de tomber, image par image, pour voir comment il se retourne.', en: 'He filmed a falling cat, frame by frame, to see how it turns itself over.' } }],
  },

  // ── La météo ─────────────────────────────────────────────────────────────
  {
    id: 'luke-howard', nom: 'Luke Howard', naissance: 1772, mort: 1864,
    cartes: [{ id: 'les-nuages', lien: { fr: 'Il a donné leurs noms aux nuages : cumulus, stratus, cirrus.', en: 'He gave the clouds their names: cumulus, stratus, cirrus.' } }],
  },
  {
    id: 'horace-benedict-de-saussure', nom: 'Horace-Bénédict de Saussure', naissance: 1740, mort: 1799,
    cartes: [{ id: 'pourquoi-il-fait-plus-froid-en-montagne', lien: { fr: 'Il a grimpé au mont Blanc avec ses instruments pour mesurer l’air en altitude.', en: 'He climbed Mont Blanc with his instruments to measure the air high up.' } }],
  },
  {
    id: 'benjamin-franklin', nom: 'Benjamin Franklin', naissance: 1706, mort: 1790,
    cartes: [{ id: 'la-foudre-et-le-tonnerre', lien: { fr: 'Il a montré que la foudre est de l’électricité, et inventé le paratonnerre.', en: 'He showed that lightning is electricity, and invented the lightning rod.' } }],
  },
  {
    id: 'wilson-bentley', nom: 'Wilson Bentley', naissance: 1865, mort: 1931,
    cartes: [
      { id: 'la-neige', lien: { fr: 'Il a photographié des milliers de flocons et n’en a jamais trouvé deux identiques.', en: 'He photographed thousands of snowflakes and never found two alike.' } },
      { id: 'le-givre', lien: { fr: 'Ses photographies montrent aussi les cristaux qui se forment sur les vitres.', en: 'His photographs also show the crystals that form on windowpanes.' } },
    ],
  },
  {
    id: 'tor-bergeron', nom: 'Tor Bergeron', naissance: 1891, mort: 1977,
    cartes: [{ id: 'la-grele', lien: { fr: 'Il a expliqué comment la glace grossit dans un nuage jusqu’à devenir trop lourde.', en: 'He explained how ice grows inside a cloud until it becomes too heavy.' } }],
  },
  {
    id: 'john-aitken', nom: 'John Aitken', naissance: 1839, mort: 1919,
    cartes: [
      { id: 'le-brouillard', lien: { fr: 'Il a découvert que l’eau a besoin d’une poussière pour se condenser en gouttelette.', en: 'He discovered that water needs a speck of dust to condense into a droplet.' } },
      { id: 'la-rosee-du-matin', lien: { fr: 'C’est le même refroidissement qui dépose la rosée sur l’herbe au petit matin.', en: 'It is the same cooling that lays dew on the grass in the early morning.' } },
    ],
  },

  // ── Le son ───────────────────────────────────────────────────────────────
  {
    id: 'ernst-chladni', nom: 'Ernst Chladni', naissance: 1756, mort: 1827,
    cartes: [
      { id: 'comment-chante-une-guitare', lien: { fr: 'Il a rendu les vibrations visibles, en saupoudrant du sable sur des plaques qui chantent.', en: 'He made vibrations visible, by sprinkling sand on plates that sing.' } },
      { id: 'aigu-ou-grave', lien: { fr: 'Ses figures montrent qu’un son aigu fait vibrer la matière plus vite.', en: 'His figures show that a high sound makes matter vibrate faster.' } },
    ],
  },
  {
    id: 'manuel-garcia', nom: 'Manuel García', naissance: 1805, mort: 1906,
    cartes: [{ id: 'pourquoi-les-voix-sont-differentes', lien: { fr: 'Chanteur, il a inventé le miroir qui permet de voir ses propres cordes vocales.', en: 'A singer himself, he invented the mirror that lets you see your own vocal cords.' } }],
  },
  {
    id: 'georg-von-bekesy', nom: 'Georg von Békésy', naissance: 1899, mort: 1972,
    cartes: [{ id: 'comment-loreille-entend', lien: { fr: 'Il a vu comment l’escargot de l’oreille trie les sons, du grave à l’aigu.', en: 'He saw how the snail of the ear sorts sounds, from low to high.' } }],
  },
  {
    id: 'alexander-graham-bell', nom: 'Alexander Graham Bell', naissance: 1847, mort: 1922,
    cartes: [{ id: 'quand-le-bruit-fait-mal', lien: { fr: 'L’unité qui mesure le bruit, le décibel, porte son nom.', en: 'The unit that measures noise, the decibel, carries his name.' } }],
  },
  {
    id: 'christian-doppler', nom: 'Christian Doppler', naissance: 1803, mort: 1853,
    cartes: [{ id: 'la-sirene-qui-change', lien: { fr: 'Il a prédit que le son d’une source qui approche monte, puis descend quand elle s’éloigne.', en: 'He predicted that the sound of an approaching source rises, then falls as it moves away.' } }],
  },
  {
    id: 'thomas-edison', nom: 'Thomas Edison', naissance: 1847, mort: 1931,
    cartes: [{ id: 'ma-voix-enregistree', lien: { fr: 'Il a enregistré et rejoué une voix humaine pour la première fois.', en: 'He recorded and played back a human voice for the very first time.' } }],
  },
  {
    id: 'pythagore', nom: 'Pythagore', naissance: -580, mort: -495,
    cartes: [{ id: 'les-notes-qui-vont-ensemble', lien: { fr: 'Il a découvert que deux notes s’accordent quand les longueurs de corde sont dans un rapport simple.', en: 'He discovered that two notes agree when the string lengths are in a simple ratio.' } }],
  },

  // ── Les dinosaures ───────────────────────────────────────────────────────
  {
    id: 'richard-owen', nom: 'Richard Owen', naissance: 1804, mort: 1892,
    cartes: [
      { id: 'le-puzzle-des-os', lien: { fr: 'C’est lui qui a inventé le mot « dinosaure », en assemblant les os retrouvés.', en: 'He is the one who invented the word “dinosaur”, by piecing the found bones together.' } },
      { id: 'pourquoi-si-grands', lien: { fr: 'Il a décrit ces reptiles d’une taille qu’on n’imaginait pas possible.', en: 'He described these reptiles of a size nobody had imagined possible.' } },
    ],
  },
  {
    id: 'luis-alvarez', nom: 'Luis Alvarez', naissance: 1911, mort: 1988,
    cartes: [{ id: 'le-jour-de-lasteroide', lien: { fr: 'Il a trouvé, dans une fine couche d’argile, la trace d’un astéroïde tombé sur la Terre.', en: 'He found, in a thin layer of clay, the trace of an asteroid that struck the Earth.' } }],
  },
  {
    id: 'john-ostrom', nom: 'John Ostrom', naissance: 1928, mort: 2005,
    cartes: [{ id: 'les-oiseaux-sont-des-dinosaures', lien: { fr: 'Il a démontré que les oiseaux descendent des dinosaures, os par os.', en: 'He proved that birds descend from dinosaurs, bone by bone.' } }],
  },
  {
    id: 'james-hutton', nom: 'James Hutton', naissance: 1726, mort: 1797,
    cartes: [{ id: 'il-y-a-tres-tres-longtemps', lien: { fr: 'Il a compris que la Terre est immensément vieille, en lisant les roches.', en: 'He understood that the Earth is immensely old, by reading the rocks.' } }],
  },
  {
    id: 'georges-cuvier', nom: 'Georges Cuvier', naissance: 1769, mort: 1832,
    cartes: [
      { id: 'carnivore-ou-herbivore', lien: { fr: 'Il disait pouvoir reconnaître un animal entier à partir d’une seule dent.', en: 'He claimed he could recognise a whole animal from a single tooth.' } },
      { id: 'apres-les-dinosaures', lien: { fr: 'Il a prouvé que des espèces entières, comme le mammouth, ont bel et bien disparu.', en: 'He proved that whole species, like the mammoth, really have disappeared.' } },
    ],
  },
  {
    id: 'edward-hitchcock', nom: 'Edward Hitchcock', naissance: 1793, mort: 1864,
    cartes: [{ id: 'les-traces-de-pas', lien: { fr: 'Il a rassemblé des milliers d’empreintes fossiles, qu’il croyait être celles d’oiseaux géants.', en: 'He gathered thousands of fossil footprints, which he believed belonged to giant birds.' } }],
  },
  {
    id: 'xu-xing', nom: 'Xu Xing', naissance: 1969, mort: null,
    cartes: [{ id: 'des-dinosaures-a-plumes', lien: { fr: 'Il a décrit plus de dinosaures à plumes que quiconque.', en: 'He has described more feathered dinosaurs than anyone else.' } }],
  },

  // ── Les océans ───────────────────────────────────────────────────────────
  {
    id: 'walter-munk', nom: 'Walter Munk', naissance: 1917, mort: 2019,
    cartes: [{ id: 'dou-viennent-les-vagues', lien: { fr: 'Il a suivi la houle d’une seule tempête à travers tout le Pacifique.', en: 'He followed the swell of a single storm right across the Pacific.' } }],
  },
  {
    id: 'matthew-fontaine-maury', nom: 'Matthew Fontaine Maury', naissance: 1806, mort: 1873,
    cartes: [{ id: 'les-fleuves-dans-la-mer', lien: { fr: 'Il a dressé les cartes des courants marins à partir des carnets de bord des marins.', en: 'He drew the charts of ocean currents from sailors’ logbooks.' } }],
  },
  {
    id: 'william-beebe', nom: 'William Beebe', naissance: 1877, mort: 1962,
    cartes: [
      { id: 'pourquoi-il-fait-noir-au-fond', lien: { fr: 'Enfermé dans une boule d’acier, il est descendu voir le noir absolu et ce qui y vit.', en: 'Shut inside a steel ball, he went down to see the absolute dark and what lives in it.' } },
      { id: 'la-pression-qui-ecrase', lien: { fr: 'Sa boule d’acier avait des parois énormes, pour résister à l’eau qui écrase.', en: 'His steel ball had enormous walls, to resist the water that crushes everything.' } },
    ],
  },
  {
    id: 'osamu-shimomura', nom: 'Osamu Shimomura', naissance: 1928, mort: 2018,
    cartes: [{ id: 'les-animaux-qui-brillent', lien: { fr: 'Il a extrait d’une méduse la protéine qui brille en vert.', en: 'He extracted from a jellyfish the protein that glows green.' } }],
  },
  {
    id: 'robert-ballard', nom: 'Robert Ballard', naissance: 1942, mort: null,
    cartes: [{ id: 'les-sources-chaudes-du-fond', lien: { fr: 'Il a découvert, au fond de l’océan, des sources brûlantes grouillantes de vie sans soleil.', en: 'He discovered, at the bottom of the ocean, boiling springs teeming with life without any sun.' } }],
  },
  {
    id: 'victor-hensen', nom: 'Victor Hensen', naissance: 1835, mort: 1924,
    cartes: [{ id: 'le-plancton-minuscule', lien: { fr: 'Il a inventé le mot « plancton » et le filet pour l’attraper.', en: 'He invented the word “plankton”, and the net for catching it.' } }],
  },

  // ── La cuisine ───────────────────────────────────────────────────────────
  {
    id: 'eduard-buchner', nom: 'Eduard Buchner', naissance: 1860, mort: 1917,
    cartes: [
      { id: 'pourquoi-le-pain-gonfle', lien: { fr: 'Il a montré que la fermentation marche même sans levure vivante : ce sont des molécules qui travaillent.', en: 'He showed that fermentation works even without living yeast: it is molecules doing the work.' } },
      { id: 'pourquoi-la-pomme-brunit', lien: { fr: 'Ce sont les mêmes molécules travailleuses, les enzymes, qui brunissent la pomme.', en: 'It is those same hard-working molecules, the enzymes, that brown the apple.' } },
    ],
  },
  {
    id: 'louis-camille-maillard', nom: 'Louis-Camille Maillard', naissance: 1878, mort: 1936,
    cartes: [{ id: 'pourquoi-ca-dore', lien: { fr: 'La réaction qui dore le pain et la viande porte son nom.', en: 'The reaction that browns bread and meat carries his name.' } }],
  },
  {
    id: 'eric-block', nom: 'Eric Block', naissance: 1942, mort: null,
    cartes: [{ id: 'pourquoi-loignon-fait-pleurer', lien: { fr: 'Il a percé la chimie du soufre de l’oignon et de l’ail.', en: 'He cracked the sulfur chemistry of the onion and of garlic.' } }],
  },
  {
    id: 'wilbur-scoville', nom: 'Wilbur Scoville', naissance: 1865, mort: 1942,
    cartes: [{ id: 'pourquoi-le-piment-brule', lien: { fr: 'Il a inventé l’échelle qui mesure la force d’un piment.', en: 'He invented the scale that measures how strong a chilli is.' } }],
  },
  {
    id: 'christian-anfinsen', nom: 'Christian Anfinsen', naissance: 1916, mort: 1995,
    cartes: [{ id: 'pourquoi-loeuf-durcit', lien: { fr: 'Il a expliqué comment une protéine se replie — et ce qui arrive quand la chaleur la déplie.', en: 'He explained how a protein folds — and what happens when heat unfolds it.' } }],
  },
];
