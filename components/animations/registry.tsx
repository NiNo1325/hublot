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

import { LaChairDePouleAnimation } from './LaChairDePouleAnimation';
import { PourquoiOnEternueAnimation } from './PourquoiOnEternueAnimation';
import { AQuoiServentLesLarmesAnimation } from './AQuoiServentLesLarmesAnimation';
import { LaPeauNotreBouclierAnimation } from './LaPeauNotreBouclierAnimation';
import { LesEmpreintesDigitalesAnimation } from './LesEmpreintesDigitalesAnimation';
import { PourquoiOnAMalAnimation } from './PourquoiOnAMalAnimation';
import { CommentLesMusclesBougentAnimation } from './CommentLesMusclesBougentAnimation';
import { CommentOnTientDeboutAnimation } from './CommentOnTientDeboutAnimation';
import { PourquoiOnADeuxYeuxAnimation } from './PourquoiOnADeuxYeuxAnimation';
import { LesDentsDeLaitAnimation } from './LesDentsDeLaitAnimation';

import { PourquoiLechoRepondAnimation } from './PourquoiLechoRepondAnimation';
import { AiguOuGraveAnimation } from './AiguOuGraveAnimation';
import { PourquoiLesVoixSontDifferentesAnimation } from './PourquoiLesVoixSontDifferentesAnimation';
import { CommentLoreilleEntendAnimation } from './CommentLoreilleEntendAnimation';
import { QuandLeBruitFaitMalAnimation } from './QuandLeBruitFaitMalAnimation';
import { CommentChanteUneGuitareAnimation } from './CommentChanteUneGuitareAnimation';
import { LaSireneQuiChangeAnimation } from './LaSireneQuiChangeAnimation';
import { MaVoixEnregistreeAnimation } from './MaVoixEnregistreeAnimation';
import { LesSonsQuonNentendPasAnimation } from './LesSonsQuonNentendPasAnimation';
import { LesNotesQuiVontEnsembleAnimation } from './LesNotesQuiVontEnsembleAnimation';

import { LePuzzleDesOsAnimation } from './LePuzzleDesOsAnimation';
import { LeJourDeLasteroideAnimation } from './LeJourDeLasteroideAnimation';
import { LesOiseauxSontDesDinosauresAnimation } from './LesOiseauxSontDesDinosauresAnimation';
import { IlYaTresTresLongtempsAnimation } from './IlYaTresTresLongtempsAnimation';
import { PourquoiSiGrandsAnimation } from './PourquoiSiGrandsAnimation';
import { CarnivoreOuHerbivoreAnimation } from './CarnivoreOuHerbivoreAnimation';
import { LesTracesDePasAnimation } from './LesTracesDePasAnimation';
import { DesDinosauresAPlumesAnimation } from './DesDinosauresAPlumesAnimation';
import { PasTousDesDinosauresAnimation } from './PasTousDesDinosauresAnimation';
import { ApresLesDinosauresAnimation } from './ApresLesDinosauresAnimation';

import { DouViennentLesVaguesAnimation } from './DouViennentLesVaguesAnimation';
import { LesFleuvesDansLaMerAnimation } from './LesFleuvesDansLaMerAnimation';
import { PourquoiIlFaitNoirAuFondAnimation } from './PourquoiIlFaitNoirAuFondAnimation';
import { LaPressionQuiEcraseAnimation } from './LaPressionQuiEcraseAnimation';
import { LeCorailBatisseurAnimation } from './LeCorailBatisseurAnimation';
import { LesAnimauxQuiBrillentAnimation } from './LesAnimauxQuiBrillentAnimation';
import { LesSourcesChaudesDuFondAnimation } from './LesSourcesChaudesDuFondAnimation';
import { LePlanctonMinusculeAnimation } from './LePlanctonMinusculeAnimation';
import { PourquoiOnFlotteMieuxDansLaMerAnimation } from './PourquoiOnFlotteMieuxDansLaMerAnimation';
import { LaVagueGeanteAnimation } from './LaVagueGeanteAnimation';

import { PourquoiLePainGonfleAnimation } from './PourquoiLePainGonfleAnimation';
import { PourquoiCaDoreAnimation } from './PourquoiCaDoreAnimation';
import { PourquoiLoignonFaitPleurerAnimation } from './PourquoiLoignonFaitPleurerAnimation';
import { PourquoiLePimentBruleAnimation } from './PourquoiLePimentBruleAnimation';
import { PourquoiLePopcornExploseAnimation } from './PourquoiLePopcornExploseAnimation';
import { PourquoiLeLaitDevientYaourtAnimation } from './PourquoiLeLaitDevientYaourtAnimation';
import { PourquoiLoeufDurcitAnimation } from './PourquoiLoeufDurcitAnimation';
import { PourquoiLeSodaPetilleAnimation } from './PourquoiLeSodaPetilleAnimation';
import { PourquoiLaPommeBrunitAnimation } from './PourquoiLaPommeBrunitAnimation';
import { PourquoiLeMielNeSePerimePasAnimation } from './PourquoiLeMielNeSePerimePasAnimation';

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
    cuisine), chacun avec ses animations sur mesure, pilotées par les quatre
    beats standard.
  */
  // Le son
  'pourquoi-lecho-repond': PourquoiLechoRepondAnimation,
  'aigu-ou-grave': AiguOuGraveAnimation,
  'pourquoi-les-voix-sont-differentes': PourquoiLesVoixSontDifferentesAnimation,
  'comment-loreille-entend': CommentLoreilleEntendAnimation,
  'quand-le-bruit-fait-mal': QuandLeBruitFaitMalAnimation,
  'comment-chante-une-guitare': CommentChanteUneGuitareAnimation,
  'la-sirene-qui-change': LaSireneQuiChangeAnimation,
  'ma-voix-enregistree': MaVoixEnregistreeAnimation,
  'les-sons-quon-nentend-pas': LesSonsQuonNentendPasAnimation,
  'les-notes-qui-vont-ensemble': LesNotesQuiVontEnsembleAnimation,
  // Les dinosaures
  'le-puzzle-des-os': LePuzzleDesOsAnimation,
  'le-jour-de-lasteroide': LeJourDeLasteroideAnimation,
  'les-oiseaux-sont-des-dinosaures': LesOiseauxSontDesDinosauresAnimation,
  'il-y-a-tres-tres-longtemps': IlYaTresTresLongtempsAnimation,
  'pourquoi-si-grands': PourquoiSiGrandsAnimation,
  'carnivore-ou-herbivore': CarnivoreOuHerbivoreAnimation,
  'les-traces-de-pas': LesTracesDePasAnimation,
  'des-dinosaures-a-plumes': DesDinosauresAPlumesAnimation,
  'pas-tous-des-dinosaures': PasTousDesDinosauresAnimation,
  'apres-les-dinosaures': ApresLesDinosauresAnimation,
  // Le corps
  'la-chair-de-poule': LaChairDePouleAnimation,
  'pourquoi-on-eternue': PourquoiOnEternueAnimation,
  'a-quoi-servent-les-larmes': AQuoiServentLesLarmesAnimation,
  'la-peau-notre-bouclier': LaPeauNotreBouclierAnimation,
  'les-empreintes-digitales': LesEmpreintesDigitalesAnimation,
  'pourquoi-on-a-mal': PourquoiOnAMalAnimation,
  'comment-les-muscles-bougent': CommentLesMusclesBougentAnimation,
  'comment-on-tient-debout': CommentOnTientDeboutAnimation,
  'pourquoi-on-a-deux-yeux': PourquoiOnADeuxYeuxAnimation,
  'les-dents-de-lait': LesDentsDeLaitAnimation,
  // Les océans
  'dou-viennent-les-vagues': DouViennentLesVaguesAnimation,
  'les-fleuves-dans-la-mer': LesFleuvesDansLaMerAnimation,
  'pourquoi-il-fait-noir-au-fond': PourquoiIlFaitNoirAuFondAnimation,
  'la-pression-qui-ecrase': LaPressionQuiEcraseAnimation,
  'le-corail-batisseur': LeCorailBatisseurAnimation,
  'les-animaux-qui-brillent': LesAnimauxQuiBrillentAnimation,
  'les-sources-chaudes-du-fond': LesSourcesChaudesDuFondAnimation,
  'le-plancton-minuscule': LePlanctonMinusculeAnimation,
  'pourquoi-on-flotte-mieux-dans-la-mer': PourquoiOnFlotteMieuxDansLaMerAnimation,
  'la-vague-geante': LaVagueGeanteAnimation,
  // La cuisine
  'pourquoi-le-pain-gonfle': PourquoiLePainGonfleAnimation,
  'pourquoi-ca-dore': PourquoiCaDoreAnimation,
  'pourquoi-loignon-fait-pleurer': PourquoiLoignonFaitPleurerAnimation,
  'pourquoi-le-piment-brule': PourquoiLePimentBruleAnimation,
  'pourquoi-le-popcorn-explose': PourquoiLePopcornExploseAnimation,
  'pourquoi-le-lait-devient-yaourt': PourquoiLeLaitDevientYaourtAnimation,
  'pourquoi-loeuf-durcit': PourquoiLoeufDurcitAnimation,
  'pourquoi-le-soda-petille': PourquoiLeSodaPetilleAnimation,
  'pourquoi-la-pomme-brunit': PourquoiLaPommeBrunitAnimation,
  'pourquoi-le-miel-ne-se-perime-pas': PourquoiLeMielNeSePerimePasAnimation,
};
