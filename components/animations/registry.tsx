'use client';

import type { ComponentType } from 'react';
import { CycleDeLEauAnimation } from './CycleDeLEauAnimation';
import { JourEtNuitAnimation } from './JourEtNuitAnimation';
import { PhotosyntheseAnimation } from './PhotosyntheseAnimation';
import { GraviteAnimation } from './GraviteAnimation';
import { ReactionChimiqueAnimation } from './ReactionChimiqueAnimation';
import { StructuresAnimation } from './StructuresAnimation';
import { BinaireAnimation } from './BinaireAnimation';
import { SymetrieAnimation } from './SymetrieAnimation';
import { PhasesLuneAnimation } from './PhasesLuneAnimation';
import { VolcanAnimation } from './VolcanAnimation';
import { CirculationAnimation } from './CirculationAnimation';
import { AimantsAnimation } from './AimantsAnimation';
import { EtatsMatiereAnimation } from './EtatsMatiereAnimation';
import { PortanceAnimation } from './PortanceAnimation';
import { InternetAnimation } from './InternetAnimation';
import { FractalesAnimation } from './FractalesAnimation';

import { SaisonsAnimation } from './SaisonsAnimation';
import { SeismeAnimation } from './SeismeAnimation';
import { MicrobesAnimation } from './MicrobesAnimation';
import { CouleursAnimation } from './CouleursAnimation';
import { DissolutionAnimation } from './DissolutionAnimation';
import { LeviersAnimation } from './LeviersAnimation';
import { AlgorithmeAnimation } from './AlgorithmeAnimation';
import { HasardAnimation } from './HasardAnimation';

import { SonAnimation } from './SonAnimation';
import { EtoilesAnimation } from './EtoilesAnimation';
import { FossilesAnimation } from './FossilesAnimation';
import { SommeilAnimation } from './SommeilAnimation';
import { AirAnimation } from './AirAnimation';
import { EngrenagesAnimation } from './EngrenagesAnimation';
import { MemoireAnimation } from './MemoireAnimation';
import { InfiniAnimation } from './InfiniAnimation';

import { ApesanteurAnimation } from './ApesanteurAnimation';
import { ElectriciteAnimation } from './ElectriciteAnimation';
import { VentAnimation } from './VentAnimation';
import { HerediteAnimation } from './HerediteAnimation';
import { FeuAnimation } from './FeuAnimation';
import { FlottaisonAnimation } from './FlottaisonAnimation';
import { ApprentissageAnimation } from './ApprentissageAnimation';
import { ZeroAnimation } from './ZeroAnimation';

import { MareesAnimation } from './MareesAnimation';
import { TrouNoirAnimation } from './TrouNoirAnimation';
import { RespirationAnimation } from './RespirationAnimation';
import { ChaleurAnimation } from './ChaleurAnimation';
import { RouilleAnimation } from './RouilleAnimation';
import { PouliesAnimation } from './PouliesAnimation';
import { PixelsAnimation } from './PixelsAnimation';
import { GrandsNombresAnimation } from './GrandsNombresAnimation';

import { CielBleuAnimation } from './CielBleuAnimation';
import { EtoilesFilantesAnimation } from './EtoilesFilantesAnimation';
import { DigestionAnimation } from './DigestionAnimation';
import { InertieAnimation } from './InertieAnimation';
import { SavonAnimation } from './SavonAnimation';
import { FuseeAnimation } from './FuseeAnimation';
import { MotDePasseAnimation } from './MotDePasseAnimation';
import { PerimetreAireAnimation } from './PerimetreAireAnimation';

import { SelMerAnimation } from './SelMerAnimation';
import { PlanetesAnimation } from './PlanetesAnimation';
import { CerveauAnimation } from './CerveauAnimation';
import { AtomesAnimation } from './AtomesAnimation';
import { AcideBaseAnimation } from './AcideBaseAnimation';
import { FreinageAnimation } from './FreinageAnimation';
import { ZoomPixelsAnimation } from './ZoomPixelsAnimation';
import { PourcentagesAnimation } from './PourcentagesAnimation';

import { PetroleAnimation } from './PetroleAnimation';
import { FaceLuneAnimation } from './FaceLuneAnimation';
import { OsAnimation } from './OsAnimation';
import { EnergieAnimation } from './EnergieAnimation';
import { OdeursAnimation } from './OdeursAnimation';
import { FrigoAnimation } from './FrigoAnimation';
import { NavigationPriveeAnimation } from './NavigationPriveeAnimation';
import { MoyenneAnimation } from './MoyenneAnimation';
import { SolAnimation } from './SolAnimation';
import { EclipsesAnimation } from './EclipsesAnimation';
import { EvolutionAnimation } from './EvolutionAnimation';
import { PoidsMasseAnimation } from './PoidsMasseAnimation';
import { GlaceFlotteAnimation } from './GlaceFlotteAnimation';
import { MicroOndesAnimation } from './MicroOndesAnimation';
import { WifiAnimation } from './WifiAnimation';
import { AnniversairesAnimation } from './AnniversairesAnimation';

import { MetamorphoseAnimation } from './MetamorphoseAnimation';
import { CameleonAnimation } from './CameleonAnimation';
import { MigrationAnimation } from './MigrationAnimation';
import { HibernationAnimation } from './HibernationAnimation';
import { EcholocationAnimation } from './EcholocationAnimation';
import { BranchiesAnimation } from './BranchiesAnimation';
import { ZebreAnimation } from './ZebreAnimation';
import { MielAnimation } from './MielAnimation';
import { ToileAnimation } from './ToileAnimation';
import { ChatRetombeAnimation } from './ChatRetombeAnimation';
import { NuagesAnimation } from './NuagesAnimation';
import { AltitudeFroidAnimation } from './AltitudeFroidAnimation';
import { FoudreAnimation } from './FoudreAnimation';
import { NeigeAnimation } from './NeigeAnimation';
import { GreleAnimation } from './GreleAnimation';
import { BrouillardAnimation } from './BrouillardAnimation';
import { OuraganAnimation } from './OuraganAnimation';
import { RoseeAnimation } from './RoseeAnimation';
import { GivreAnimation } from './GivreAnimation';
import { GoutteFormeAnimation } from './GoutteFormeAnimation';

import { GenericBeatAnimation } from './GenericBeatAnimation';

export interface CardAnimationProps {
  /** Beat en cours de narration, ou `null` au repos (avant lecture). */
  activeBeatId: string | null;
  isPlaying: boolean;
  prefersReducedMotion: boolean;
}

/**
 * Associe `ScienceCard.animationId` à son composant. Ce découplage permet au
 * contenu (`content/`) de rester des données pures, importables côté serveur
 * sans embarquer de JSX.
 *
 * Une carte dont l'`animationId` manque ici est rattrapée par un test
 * d'intégrité du contenu.
 */
export const animationRegistry: Record<string, ComponentType<CardAnimationProps>> = {
  'cycle-de-leau': CycleDeLEauAnimation,
  'jour-et-nuit': JourEtNuitAnimation,
  photosynthese: PhotosyntheseAnimation,
  gravite: GraviteAnimation,
  'reaction-chimique': ReactionChimiqueAnimation,
  structures: StructuresAnimation,
  binaire: BinaireAnimation,
  symetrie: SymetrieAnimation,
  'phases-lune': PhasesLuneAnimation,
  volcan: VolcanAnimation,
  circulation: CirculationAnimation,
  aimants: AimantsAnimation,
  'etats-matiere': EtatsMatiereAnimation,
  portance: PortanceAnimation,
  internet: InternetAnimation,
  fractales: FractalesAnimation,
  saisons: SaisonsAnimation,
  seisme: SeismeAnimation,
  microbes: MicrobesAnimation,
  couleurs: CouleursAnimation,
  dissolution: DissolutionAnimation,
  leviers: LeviersAnimation,
  algorithme: AlgorithmeAnimation,
  hasard: HasardAnimation,
  son: SonAnimation,
  etoiles: EtoilesAnimation,
  fossiles: FossilesAnimation,
  sommeil: SommeilAnimation,
  air: AirAnimation,
  engrenages: EngrenagesAnimation,
  memoire: MemoireAnimation,
  infini: InfiniAnimation,
  apesanteur: ApesanteurAnimation,
  electricite: ElectriciteAnimation,
  vent: VentAnimation,
  heredite: HerediteAnimation,
  feu: FeuAnimation,
  flottaison: FlottaisonAnimation,
  apprentissage: ApprentissageAnimation,
  zero: ZeroAnimation,
  marees: MareesAnimation,
  'trou-noir': TrouNoirAnimation,
  respiration: RespirationAnimation,
  chaleur: ChaleurAnimation,
  rouille: RouilleAnimation,
  poulies: PouliesAnimation,
  pixels: PixelsAnimation,
  'grands-nombres': GrandsNombresAnimation,
  'ciel-bleu': CielBleuAnimation,
  'etoiles-filantes': EtoilesFilantesAnimation,
  digestion: DigestionAnimation,
  inertie: InertieAnimation,
  savon: SavonAnimation,
  fusee: FuseeAnimation,
  'mot-de-passe': MotDePasseAnimation,
  'perimetre-aire': PerimetreAireAnimation,
  'sel-mer': SelMerAnimation,
  planetes: PlanetesAnimation,
  cerveau: CerveauAnimation,
  atomes: AtomesAnimation,
  'acide-base': AcideBaseAnimation,
  freinage: FreinageAnimation,
  'zoom-pixels': ZoomPixelsAnimation,
  pourcentages: PourcentagesAnimation,
  petrole: PetroleAnimation,
  'face-lune': FaceLuneAnimation,
  os: OsAnimation,
  energie: EnergieAnimation,
  odeurs: OdeursAnimation,
  frigo: FrigoAnimation,
  'navigation-privee': NavigationPriveeAnimation,
  moyenne: MoyenneAnimation,
  sol: SolAnimation,
  eclipses: EclipsesAnimation,
  evolution: EvolutionAnimation,
  'poids-masse': PoidsMasseAnimation,
  'glace-flotte': GlaceFlotteAnimation,
  'micro-ondes': MicroOndesAnimation,
  wifi: WifiAnimation,
  anniversaires: AnniversairesAnimation,
  metamorphose: MetamorphoseAnimation,
  cameleon: CameleonAnimation,
  migration: MigrationAnimation,
  hibernation: HibernationAnimation,
  echolocation: EcholocationAnimation,
  branchies: BranchiesAnimation,
  zebre: ZebreAnimation,
  miel: MielAnimation,
  toile: ToileAnimation,
  'chat-retombe': ChatRetombeAnimation,
  nuages: NuagesAnimation,
  'altitude-froid': AltitudeFroidAnimation,
  foudre: FoudreAnimation,
  neige: NeigeAnimation,
  grele: GreleAnimation,
  brouillard: BrouillardAnimation,
  ouragan: OuraganAnimation,
  rosee: RoseeAnimation,
  givre: GivreAnimation,
  'goutte-forme': GoutteFormeAnimation,

  /*
    Cinq nouveaux domaines (le son, les dinosaures, le corps, les océans, la
    cuisine). En attendant d'éventuelles animations sur mesure, chaque carte
    utilise l'animation générique, différenciée par son emoji et la teinte de
    son domaine, et pilotée par ses quatre beats.
  */
  // Le son
  'pourquoi-lecho-repond': (p) => <GenericBeatAnimation {...p} emoji="📣" accent="#e879f9" />,
  'aigu-ou-grave': (p) => <GenericBeatAnimation {...p} emoji="🎚️" accent="#e879f9" />,
  'pourquoi-les-voix-sont-differentes': (p) => <GenericBeatAnimation {...p} emoji="🗣️" accent="#e879f9" />,
  'comment-loreille-entend': (p) => <GenericBeatAnimation {...p} emoji="👂" accent="#e879f9" />,
  'quand-le-bruit-fait-mal': (p) => <GenericBeatAnimation {...p} emoji="🔇" accent="#e879f9" />,
  'comment-chante-une-guitare': (p) => <GenericBeatAnimation {...p} emoji="🎸" accent="#e879f9" />,
  'la-sirene-qui-change': (p) => <GenericBeatAnimation {...p} emoji="🚑" accent="#e879f9" />,
  'ma-voix-enregistree': (p) => <GenericBeatAnimation {...p} emoji="🎙️" accent="#e879f9" />,
  'les-sons-quon-nentend-pas': (p) => <GenericBeatAnimation {...p} emoji="🐶" accent="#e879f9" />,
  'les-notes-qui-vont-ensemble': (p) => <GenericBeatAnimation {...p} emoji="🎹" accent="#e879f9" />,
  // Les dinosaures
  'le-puzzle-des-os': (p) => <GenericBeatAnimation {...p} emoji="🦴" accent="#c8a97e" />,
  'le-jour-de-lasteroide': (p) => <GenericBeatAnimation {...p} emoji="☄️" accent="#c8a97e" />,
  'les-oiseaux-sont-des-dinosaures': (p) => <GenericBeatAnimation {...p} emoji="🐦" accent="#c8a97e" />,
  'il-y-a-tres-tres-longtemps': (p) => <GenericBeatAnimation {...p} emoji="⏳" accent="#c8a97e" />,
  'pourquoi-si-grands': (p) => <GenericBeatAnimation {...p} emoji="🦕" accent="#c8a97e" />,
  'carnivore-ou-herbivore': (p) => <GenericBeatAnimation {...p} emoji="🥩" accent="#c8a97e" />,
  'les-traces-de-pas': (p) => <GenericBeatAnimation {...p} emoji="👣" accent="#c8a97e" />,
  'des-dinosaures-a-plumes': (p) => <GenericBeatAnimation {...p} emoji="🪶" accent="#c8a97e" />,
  'pas-tous-des-dinosaures': (p) => <GenericBeatAnimation {...p} emoji="🐊" accent="#c8a97e" />,
  'apres-les-dinosaures': (p) => <GenericBeatAnimation {...p} emoji="🦣" accent="#c8a97e" />,
  // Le corps
  'la-chair-de-poule': (p) => <GenericBeatAnimation {...p} emoji="🥶" accent="#f9a8d4" />,
  'pourquoi-on-eternue': (p) => <GenericBeatAnimation {...p} emoji="🤧" accent="#f9a8d4" />,
  'a-quoi-servent-les-larmes': (p) => <GenericBeatAnimation {...p} emoji="😢" accent="#f9a8d4" />,
  'la-peau-notre-bouclier': (p) => <GenericBeatAnimation {...p} emoji="💦" accent="#f9a8d4" />,
  'les-empreintes-digitales': (p) => <GenericBeatAnimation {...p} emoji="👆" accent="#f9a8d4" />,
  'pourquoi-on-a-mal': (p) => <GenericBeatAnimation {...p} emoji="🤕" accent="#f9a8d4" />,
  'comment-les-muscles-bougent': (p) => <GenericBeatAnimation {...p} emoji="💪" accent="#f9a8d4" />,
  'comment-on-tient-debout': (p) => <GenericBeatAnimation {...p} emoji="🤸" accent="#f9a8d4" />,
  'pourquoi-on-a-deux-yeux': (p) => <GenericBeatAnimation {...p} emoji="👀" accent="#f9a8d4" />,
  'les-dents-de-lait': (p) => <GenericBeatAnimation {...p} emoji="🦷" accent="#f9a8d4" />,
  // Les océans
  'dou-viennent-les-vagues': (p) => <GenericBeatAnimation {...p} emoji="🏄" accent="#60a5fa" />,
  'les-fleuves-dans-la-mer': (p) => <GenericBeatAnimation {...p} emoji="🔄" accent="#60a5fa" />,
  'pourquoi-il-fait-noir-au-fond': (p) => <GenericBeatAnimation {...p} emoji="🔦" accent="#60a5fa" />,
  'la-pression-qui-ecrase': (p) => <GenericBeatAnimation {...p} emoji="🤿" accent="#60a5fa" />,
  'le-corail-batisseur': (p) => <GenericBeatAnimation {...p} emoji="🪸" accent="#60a5fa" />,
  'les-animaux-qui-brillent': (p) => <GenericBeatAnimation {...p} emoji="✨" accent="#60a5fa" />,
  'les-sources-chaudes-du-fond': (p) => <GenericBeatAnimation {...p} emoji="♨️" accent="#60a5fa" />,
  'le-plancton-minuscule': (p) => <GenericBeatAnimation {...p} emoji="🦠" accent="#60a5fa" />,
  'pourquoi-on-flotte-mieux-dans-la-mer': (p) => <GenericBeatAnimation {...p} emoji="🏊" accent="#60a5fa" />,
  'la-vague-geante': (p) => <GenericBeatAnimation {...p} emoji="🌊" accent="#60a5fa" />,
  // La cuisine
  'pourquoi-le-pain-gonfle': (p) => <GenericBeatAnimation {...p} emoji="🍞" accent="#fde047" />,
  'pourquoi-ca-dore': (p) => <GenericBeatAnimation {...p} emoji="🍗" accent="#fde047" />,
  'pourquoi-loignon-fait-pleurer': (p) => <GenericBeatAnimation {...p} emoji="🧅" accent="#fde047" />,
  'pourquoi-le-piment-brule': (p) => <GenericBeatAnimation {...p} emoji="🌶️" accent="#fde047" />,
  'pourquoi-le-popcorn-explose': (p) => <GenericBeatAnimation {...p} emoji="🍿" accent="#fde047" />,
  'pourquoi-le-lait-devient-yaourt': (p) => <GenericBeatAnimation {...p} emoji="🥛" accent="#fde047" />,
  'pourquoi-loeuf-durcit': (p) => <GenericBeatAnimation {...p} emoji="🥚" accent="#fde047" />,
  'pourquoi-le-soda-petille': (p) => <GenericBeatAnimation {...p} emoji="🥤" accent="#fde047" />,
  'pourquoi-la-pomme-brunit': (p) => <GenericBeatAnimation {...p} emoji="🍎" accent="#fde047" />,
  'pourquoi-le-miel-ne-se-perime-pas': (p) => <GenericBeatAnimation {...p} emoji="🍯" accent="#fde047" />,
};
