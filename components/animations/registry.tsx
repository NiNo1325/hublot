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
};
