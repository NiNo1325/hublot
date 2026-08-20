/**
 * Quand l'a-t-on compris ?
 *
 * L'année où l'humanité a découvert — ou construit — ce dont parle une carte.
 * C'est la matière de la frise des découvertes : l'enfant range les cartes
 * qu'il a écoutées dans l'ordre où on les a comprises, et la date ne se révèle
 * qu'après placement, comme pour la frise des savants.
 *
 * **Toutes les cartes n'y figurent pas, et c'est délibéré.** « Pourquoi
 * l'oignon fait pleurer » ou « pourquoi le chat retombe sur ses pattes » sont
 * des phénomènes du quotidien : leur coller une année produirait un chiffre
 * inventé, dans une application où un enfant croira ce qu'on lui montre. On ne
 * garde donc que ce dont la date est établie et attribuable — un traité, une
 * expérience, un brevet, un premier vol.
 *
 * Chaque entrée renvoie à une carte réelle : le titre, l'emoji et le monde en
 * viennent, et rien n'est écrit deux fois. Un test vérifie ce rattachement, un
 * autre que les années restent dans des bornes plausibles.
 *
 * Les dates retenues nomment le moment charnière, pas le tâtonnement qui l'a
 * précédé : 1687 pour la gravitation, l'année des *Principia*, et non les
 * vingt ans de calculs de Newton.
 */
export interface Invention {
  /** L'identifiant d'une carte du catalogue. */
  carteId: string;
  /** L'année de la découverte ou de l'invention. Négative avant notre ère. */
  annee: number;
}

export const inventions: Invention[] = [
  // ── Antiquité ────────────────────────────────────────────────────────────
  { carteId: 'les-notes-qui-vont-ensemble', annee: -530 }, // Pythagore, les rapports de cordes
  { carteId: 'les-leviers', annee: -250 }, // Archimède, De l'équilibre des plans
  { carteId: 'pourquoi-les-bateaux-flottent', annee: -250 }, // Archimède, Des corps flottants
  { carteId: 'le-zero', annee: 628 }, // Brahmagupta lui donne ses règles de calcul

  // ── Renaissance et grand siècle ──────────────────────────────────────────
  { carteId: 'jour-et-nuit', annee: 1543 }, // Copernic, De revolutionibus
  { carteId: 'les-planetes', annee: 1609 }, // Kepler, Astronomia nova
  { carteId: 'les-aimants', annee: 1600 }, // Gilbert, De Magnete
  { carteId: 'la-neige', annee: 1611 }, // Kepler, L'Étrenne ou la neige sexangulaire
  { carteId: 'le-coeur-et-le-sang', annee: 1628 }, // Harvey décrit la circulation
  { carteId: 'pourquoi-ca-sarrete', annee: 1638 }, // Galilée, Discours sur deux sciences nouvelles
  { carteId: 'la-pression-qui-ecrase', annee: 1648 }, // Pascal, expérience du Puy de Dôme
  { carteId: 'le-hasard', annee: 1654 }, // Pascal et Fermat fondent le calcul des probabilités
  { carteId: 'comment-voyage-le-son', annee: 1660 }, // Boyle : pas de son dans le vide
  { carteId: 'pourquoi-on-voit-les-couleurs', annee: 1666 }, // Newton décompose la lumière au prisme
  { carteId: 'les-fossiles', annee: 1669 }, // Sténon, principes de la stratigraphie
  { carteId: 'les-microbes', annee: 1676 }, // Leeuwenhoek observe les « animalcules »
  { carteId: 'pourquoi-tout-tombe', annee: 1687 }, // Newton, Principia
  { carteId: 'les-marees', annee: 1687 }, // Newton explique les marées par l'attraction
  { carteId: 'comment-compte-un-ordinateur', annee: 1703 }, // Leibniz, l'arithmétique binaire

  // ── Lumières ─────────────────────────────────────────────────────────────
  { carteId: 'la-foudre-et-le-tonnerre', annee: 1752 }, // Franklin et le cerf-volant
  { carteId: 'les-fleuves-dans-la-mer', annee: 1770 }, // Franklin cartographie le Gulf Stream
  { carteId: 'de-quoi-est-fait-lair', annee: 1774 }, // Priestley isole l'oxygène
  { carteId: 'le-feu', annee: 1777 }, // Lavoisier explique la combustion
  { carteId: 'comment-on-respire', annee: 1777 }, // Lavoisier, la respiration est une combustion
  { carteId: 'comment-poussent-les-plantes', annee: 1779 }, // Ingenhousz découvre la photosynthèse
  { carteId: 'ou-va-le-sucre-dans-leau', annee: 1789 }, // Lavoisier, conservation de la masse
  { carteId: 'lelectricite', annee: 1800 }, // Volta, la pile
  { carteId: 'les-nuages', annee: 1803 }, // Howard nomme et classe les nuages

  // ── Dix-neuvième siècle ──────────────────────────────────────────────────
  { carteId: 'la-migration-des-oiseaux', annee: 1822 }, // La cigogne à la flèche de Rossten
  { carteId: 'le-puzzle-des-os', annee: 1824 }, // Buckland décrit le Megalosaurus
  { carteId: 'les-etoiles', annee: 1838 }, // Bessel mesure la première parallaxe stellaire
  { carteId: 'pourquoi-on-a-deux-yeux', annee: 1838 }, // Wheatstone et le stéréoscope
  { carteId: 'la-sirene-qui-change', annee: 1842 }, // Doppler, sur la lumière colorée des astres
  { carteId: 'lenergie', annee: 1847 }, // Helmholtz énonce la conservation de l'énergie
  { carteId: 'pourquoi-le-lait-devient-yaourt', annee: 1857 }, // Pasteur, la fermentation lactique
  { carteId: 'levolution', annee: 1859 }, // Darwin, L'Origine des espèces
  { carteId: 'les-oiseaux-sont-des-dinosaures', annee: 1861 }, // Archaeopteryx
  { carteId: 'pourquoi-on-ressemble-a-ses-parents', annee: 1866 }, // Mendel et ses petits pois
  { carteId: 'pourquoi-le-ciel-est-bleu', annee: 1871 }, // Rayleigh explique la diffusion
  { carteId: 'linfini', annee: 1874 }, // Cantor démontre qu'il y a plusieurs infinis
  { carteId: 'les-sons-quon-nentend-pas', annee: 1876 }, // Le sifflet de Galton révèle les ultrasons
  { carteId: 'comment-marche-un-frigo', annee: 1876 }, // Linde, la machine frigorifique
  { carteId: 'le-plancton-minuscule', annee: 1887 }, // Hensen nomme le plancton
  { carteId: 'les-empreintes-digitales', annee: 1892 }, // Vucetich, première identification
  { carteId: 'pourquoi-le-chat-retombe-sur-ses-pattes', annee: 1894 }, // Marey, la chronophotographie
  { carteId: 'comment-marche-un-ecran', annee: 1897 }, // Braun, le tube cathodique

  // ── Vingtième siècle ─────────────────────────────────────────────────────
  { carteId: 'comment-vole-un-avion', annee: 1903 }, // Le premier vol des frères Wright
  { carteId: 'les-acides-et-les-bases', annee: 1909 }, // Sørensen invente l'échelle de pH
  { carteId: 'les-atomes', annee: 1911 }, // Rutherford découvre le noyau
  { carteId: 'pourquoi-ca-dore', annee: 1912 }, // Maillard décrit sa réaction
  { carteId: 'pourquoi-la-terre-tremble', annee: 1912 }, // Wegener, la dérive des continents
  { carteId: 'les-trous-noirs', annee: 1916 }, // Schwarzschild résout les équations d'Einstein
  { carteId: 'comment-avance-une-fusee', annee: 1926 }, // Goddard, première fusée à carburant liquide
  { carteId: 'lecholocation-de-la-chauve-souris', annee: 1938 }, // Griffin nomme l'écholocation
  { carteId: 'le-micro-ondes', annee: 1945 }, // Spencer découvre le chauffage par micro-ondes
  { carteId: 'comment-les-muscles-bougent', annee: 1954 }, // Huxley, les filaments glissants
  { carteId: 'comment-une-machine-apprend', annee: 1957 }, // Rosenblatt, le perceptron
  { carteId: 'pourquoi-les-astronautes-flottent', annee: 1957 }, // Spoutnik, la satellisation
  { carteId: 'la-face-cachee-de-la-lune', annee: 1959 }, // Luna 3 photographie l'autre face
  { carteId: 'les-mots-de-passe', annee: 1961 }, // Le premier mot de passe informatique, au MIT
  { carteId: 'comment-marche-internet', annee: 1969 }, // ARPANET relie ses premiers nœuds
  { carteId: 'les-fractales', annee: 1975 }, // Mandelbrot nomme les fractales
  { carteId: 'les-sources-chaudes-du-fond', annee: 1977 }, // Les cheminées des Galápagos
  { carteId: 'le-jour-de-lasteroide', annee: 1980 }, // Alvarez et l'iridium
  { carteId: 'le-wifi', annee: 1997 }, // La norme 802.11
  { carteId: 'des-dinosaures-a-plumes', annee: 2010 }, // Les mélanosomes révèlent les couleurs
];
