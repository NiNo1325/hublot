import type { Localise } from '@/lib/types';

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
 * Chaque entrée renvoie à une carte réelle, dont elle emprunte l'emoji et le
 * monde. Elle porte en revanche son propre nom : celui de la découverte, pas
 * celui de la carte. Un test vérifie le rattachement, un autre que les années
 * restent dans des bornes plausibles.
 *
 * Les dates retenues nomment le moment charnière, pas le tâtonnement qui l'a
 * précédé : 1687 pour la gravitation, l'année des *Principia*, et non les
 * vingt ans de calculs de Newton.
 *
 * **Chaque date est celle du savant que le musée donne à la carte**, et non
 * celle de la découverte canonique. La nuance a coûté vingt-cinq corrections :
 * la carte « la neige » appartient à Wilson Bentley, qui photographia un flocon
 * en 1885, et la dater de Kepler (1611) faisait raconter deux histoires
 * différentes à deux jeux voisins. Un test vérifie désormais que l'année tombe
 * dans la vie active du savant.
 */
export interface Invention {
  /** L'identifiant d'une carte du catalogue. */
  carteId: string;
  /** L'année de la découverte ou de l'invention. Négative avant notre ère. */
  annee: number;
  /**
   * Le nom de la découverte, et non le titre de la carte.
   *
   * C'est la différence entre « La neige » et « le flocon à six branches ».
   * Les titres de cartes sont des questions d'enfant — « Respirer »,
   * « Tout tombe par terre » — impossibles à situer sur une frise : ils ne
   * nomment pas un événement. Ici il faut ce qui s'est passé cette année-là.
   */
  nom: Localise<string>;
}

export const inventions: Invention[] = [
  // ── Antiquité ────────────────────────────────────────────────────────────
  {
    carteId: 'les-notes-qui-vont-ensemble',
    annee: -530,
    nom: { fr: 'La gamme musicale', en: 'The musical scale' },
  }, // Pythagore, les rapports de cordes
  {
    carteId: 'les-leviers',
    annee: -250,
    nom: { fr: 'Le levier', en: 'The lever' },
  }, // Archimède, De l'équilibre des plans
  {
    carteId: 'pourquoi-les-bateaux-flottent',
    annee: -250,
    nom: { fr: 'La poussée d’Archimède', en: 'Archimedes’ principle' },
  }, // Archimède, Des corps flottants
  {
    carteId: 'le-zero',
    annee: 825,
    nom: { fr: 'Le zéro venu d’Inde', en: 'Zero, brought from India' },
  }, // Al-Khwârizmî fait connaître les chiffres indiens

  // ── Renaissance et grand siècle ──────────────────────────────────────────
  {
    carteId: 'jour-et-nuit',
    annee: 1543,
    nom: { fr: 'La Terre tourne', en: 'The Earth turns' },
  }, // Copernic, De revolutionibus
  {
    carteId: 'les-planetes',
    annee: 1609,
    nom: { fr: 'Les orbites des planètes', en: 'Planetary orbits' },
  }, // Kepler, Astronomia nova
  {
    carteId: 'les-aimants',
    annee: 1882,
    nom: { fr: 'Le champ magnétique tournant', en: 'The rotating magnetic field' },
  }, // Tesla, l'idée qui donnera le moteur
  {
    carteId: 'la-neige',
    annee: 1885,
    nom: { fr: 'La première photo d’un flocon', en: 'The first photo of a snowflake' },
  }, // Bentley photographie un flocon au microscope
  {
    carteId: 'le-coeur-et-le-sang',
    annee: 1628,
    nom: { fr: 'La circulation du sang', en: 'Blood circulation' },
  }, // Harvey décrit la circulation
  {
    carteId: 'pourquoi-ca-sarrete',
    annee: 1687,
    nom: { fr: 'L’inertie', en: 'Inertia' },
  }, // Newton, première loi du mouvement
  {
    carteId: 'la-pression-qui-ecrase',
    annee: 1934,
    nom: { fr: 'La plongée en bathysphère', en: 'The bathysphere dive' },
  }, // Beebe descend à 923 mètres
  {
    carteId: 'le-hasard',
    annee: 1654,
    nom: { fr: 'Le calcul des probabilités', en: 'Probability' },
  }, // Pascal et Fermat fondent le calcul des probabilités
  {
    carteId: 'comment-voyage-le-son',
    annee: 1636,
    nom: { fr: 'La vitesse du son mesurée', en: 'The speed of sound measured' },
  }, // Mersenne, Harmonie universelle
  {
    carteId: 'pourquoi-on-voit-les-couleurs',
    annee: 1021,
    nom: { fr: 'Le traité d’optique', en: 'The Book of Optics' },
  }, // Ibn al-Haytham fonde l'optique
  {
    carteId: 'les-fossiles',
    annee: 1811,
    nom: { fr: 'Le premier ichtyosaure', en: 'The first ichthyosaur' },
  }, // Mary Anning, à Lyme Regis
  {
    carteId: 'les-microbes',
    annee: 1928,
    nom: { fr: 'La pénicilline', en: 'Penicillin' },
  }, // Fleming et sa boîte oubliée
  {
    carteId: 'pourquoi-tout-tombe',
    annee: 1687,
    nom: { fr: 'La gravitation', en: 'Gravitation' },
  }, // Newton, Principia
  {
    carteId: 'les-marees',
    annee: 1687,
    nom: { fr: 'La Lune fait les marées', en: 'The Moon makes the tides' },
  }, // Newton explique les marées par l'attraction
  {
    carteId: 'comment-compte-un-ordinateur',
    annee: 1703,
    nom: { fr: 'Le calcul binaire', en: 'Binary arithmetic' },
  }, // Leibniz, l'arithmétique binaire

  // ── Lumières ─────────────────────────────────────────────────────────────
  {
    carteId: 'la-foudre-et-le-tonnerre',
    annee: 1752,
    nom: { fr: 'Le paratonnerre', en: 'The lightning rod' },
  }, // Franklin et le cerf-volant
  {
    carteId: 'les-fleuves-dans-la-mer',
    annee: 1855,
    nom: { fr: 'La carte des courants', en: 'The map of the currents' },
  }, // Maury, Physical Geography of the Sea
  {
    carteId: 'de-quoi-est-fait-lair',
    annee: 1774,
    nom: { fr: 'L’oxygène', en: 'Oxygen' },
  }, // Priestley isole l'oxygène
  {
    carteId: 'le-feu',
    annee: 1777,
    nom: { fr: 'La combustion', en: 'Combustion' },
  }, // Lavoisier explique la combustion
  {
    carteId: 'comment-on-respire',
    annee: 1905,
    nom: { fr: 'Le gaz qui fait respirer', en: 'The gas that drives breathing' },
  }, // Haldane : c'est le CO2 qui commande
  {
    carteId: 'comment-poussent-les-plantes',
    annee: 1648,
    nom: { fr: 'L’expérience du saule', en: 'The willow experiment' },
  }, // Van Helmont pèse son arbre pendant cinq ans
  {
    carteId: 'ou-va-le-sucre-dans-leau',
    annee: 1887,
    nom: { fr: 'La dissolution expliquée', en: 'Dissolving explained' },
  }, // Arrhenius et la dissociation
  {
    carteId: 'lelectricite',
    annee: 1888,
    nom: { fr: 'Le courant alternatif', en: 'Alternating current' },
  }, // Tesla et son moteur
  {
    carteId: 'les-nuages',
    annee: 1803,
    nom: { fr: 'Le nom des nuages', en: 'Naming the clouds' },
  }, // Howard nomme et classe les nuages

  // ── Dix-neuvième siècle ──────────────────────────────────────────────────
  {
    carteId: 'la-migration-des-oiseaux',
    annee: 1903,
    nom: { fr: 'Le baguage des oiseaux', en: 'Bird ringing' },
  }, // Thienemann bague à Rossitten
  {
    carteId: 'le-puzzle-des-os',
    annee: 1824,
    nom: { fr: 'Le premier dinosaure', en: 'The first dinosaur' },
  }, // Buckland décrit le Megalosaurus
  {
    carteId: 'les-etoiles',
    annee: 1925,
    nom: { fr: 'De quoi sont faites les étoiles', en: 'What stars are made of' },
  }, // Cecilia Payne : surtout de l'hydrogène
  {
    carteId: 'la-sirene-qui-change',
    annee: 1842,
    nom: { fr: 'L’effet Doppler', en: 'The Doppler effect' },
  }, // Doppler, sur la lumière colorée des astres
  {
    carteId: 'lenergie',
    annee: 1905,
    nom: { fr: 'L’énergie et la masse', en: 'Energy and mass' },
  }, // Einstein, E=mc²
  {
    carteId: 'pourquoi-le-lait-devient-yaourt',
    annee: 1857,
    nom: { fr: 'La fermentation', en: 'Fermentation' },
  }, // Pasteur, la fermentation lactique
  {
    carteId: 'levolution',
    annee: 1859,
    nom: { fr: 'L’évolution', en: 'Evolution' },
  }, // Darwin, L'Origine des espèces
  {
    carteId: 'les-oiseaux-sont-des-dinosaures',
    annee: 1969,
    nom: { fr: 'L’oiseau vient du dinosaure', en: 'Birds come from dinosaurs' },
  }, // Ostrom décrit Deinonychus
  {
    carteId: 'pourquoi-on-ressemble-a-ses-parents',
    annee: 1952,
    nom: { fr: 'La photo 51 de l’ADN', en: 'Photo 51 of DNA' },
  }, // Rosalind Franklin
  {
    carteId: 'pourquoi-le-ciel-est-bleu',
    annee: 1871,
    nom: { fr: 'La diffusion de la lumière', en: 'The scattering of light' },
  }, // Rayleigh explique la diffusion
  {
    carteId: 'linfini',
    annee: 1874,
    nom: { fr: 'Plusieurs infinis', en: 'More than one infinity' },
  }, // Cantor démontre qu'il y a plusieurs infinis
  {
    carteId: 'comment-marche-un-frigo',
    annee: 1876,
    nom: { fr: 'Le réfrigérateur', en: 'The refrigerator' },
  }, // Linde, la machine frigorifique
  {
    carteId: 'le-plancton-minuscule',
    annee: 1887,
    nom: { fr: 'Le plancton', en: 'Plankton' },
  }, // Hensen nomme le plancton
  {
    carteId: 'les-empreintes-digitales',
    annee: 1823,
    nom: { fr: 'Le dessin des doigts classé', en: 'Fingerprint patterns classified' },
  }, // Purkyně décrit neuf motifs
  {
    carteId: 'pourquoi-le-chat-retombe-sur-ses-pattes',
    annee: 1894,
    nom: { fr: 'La chute du chat filmée', en: 'The falling cat, filmed' },
  }, // Marey, la chronophotographie
  {
    carteId: 'comment-marche-un-ecran',
    annee: 1968,
    nom: { fr: 'L’écran à cristaux liquides', en: 'The liquid-crystal screen' },
  }, // Heilmeier fait le premier LCD

  // ── Vingtième siècle ─────────────────────────────────────────────────────
  {
    carteId: 'comment-vole-un-avion',
    annee: 1505,
    nom: { fr: 'Le codex du vol', en: 'The codex on flight' },
  }, // Léonard, Codex sur le vol des oiseaux
  {
    carteId: 'les-acides-et-les-bases',
    annee: 1909,
    nom: { fr: 'L’échelle de pH', en: 'The pH scale' },
  }, // Sørensen invente l'échelle de pH
  {
    carteId: 'les-atomes',
    annee: 1911,
    nom: { fr: 'Le noyau de l’atome', en: 'The atomic nucleus' },
  }, // Rutherford découvre le noyau
  {
    carteId: 'pourquoi-ca-dore',
    annee: 1912,
    nom: { fr: 'La réaction de Maillard', en: 'The Maillard reaction' },
  }, // Maillard décrit sa réaction
  {
    carteId: 'pourquoi-la-terre-tremble',
    annee: 1912,
    nom: { fr: 'La dérive des continents', en: 'Continental drift' },
  }, // Wegener, la dérive des continents
  {
    carteId: 'les-trous-noirs',
    annee: 1974,
    nom: { fr: 'Le rayonnement de Hawking', en: 'Hawking radiation' },
  }, // Hawking : les trous noirs s'évaporent
  {
    carteId: 'comment-avance-une-fusee',
    annee: 1962,
    nom: { fr: 'Les calculs de l’orbite', en: 'The orbit calculations' },
  }, // Katherine Johnson vérifie le vol de Glenn
  {
    carteId: 'lecholocation-de-la-chauve-souris',
    annee: 1938,
    nom: { fr: 'L’écholocation', en: 'Echolocation' },
  }, // Griffin nomme l'écholocation
  {
    carteId: 'le-micro-ondes',
    annee: 1945,
    nom: { fr: 'Le four à micro-ondes', en: 'The microwave oven' },
  }, // Spencer découvre le chauffage par micro-ondes
  {
    carteId: 'comment-les-muscles-bougent',
    annee: 1791,
    nom: { fr: 'L’électricité du muscle', en: 'Electricity in muscle' },
  }, // Galvani et la grenouille
  {
    carteId: 'comment-une-machine-apprend',
    annee: 1957,
    nom: { fr: 'La machine qui apprend', en: 'The learning machine' },
  }, // Rosenblatt, le perceptron
  {
    carteId: 'pourquoi-les-astronautes-flottent',
    annee: 1957,
    nom: { fr: 'Le premier satellite', en: 'The first satellite' },
  }, // Spoutnik, la satellisation
  {
    carteId: 'la-face-cachee-de-la-lune',
    annee: 1959,
    nom: { fr: 'La face cachée de la Lune', en: 'The far side of the Moon' },
  }, // Luna 3 photographie l'autre face
  {
    carteId: 'les-mots-de-passe',
    annee: 1961,
    nom: { fr: 'Le mot de passe', en: 'The password' },
  }, // Le premier mot de passe informatique, au MIT
  {
    carteId: 'comment-marche-internet',
    annee: 1969,
    nom: { fr: 'Internet', en: 'The internet' },
  }, // ARPANET relie ses premiers nœuds
  {
    carteId: 'les-fractales',
    annee: 1975,
    nom: { fr: 'Les fractales', en: 'Fractals' },
  }, // Mandelbrot nomme les fractales
  {
    carteId: 'les-sources-chaudes-du-fond',
    annee: 1977,
    nom: { fr: 'La vie sans Soleil', en: 'Life without sunlight' },
  }, // Les cheminées des Galápagos
  {
    carteId: 'le-jour-de-lasteroide',
    annee: 1980,
    nom: { fr: 'L’astéroïde des dinosaures', en: 'The dinosaur asteroid' },
  }, // Alvarez et l'iridium
  {
    carteId: 'le-wifi',
    annee: 1997,
    nom: { fr: 'Le wifi', en: 'Wi-Fi' },
  }, // La norme 802.11
  {
    carteId: 'des-dinosaures-a-plumes',
    annee: 2010,
    nom: { fr: 'La couleur des dinosaures', en: 'The colour of dinosaurs' },
  }, // Les mélanosomes révèlent les couleurs
];
