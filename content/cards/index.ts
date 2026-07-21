import type { ScienceCard } from '@/lib/types';

import { card as cycleDeLEau } from './sciences-de-la-terre/cycle-de-leau';
import { card as lesVolcans } from './sciences-de-la-terre/les-volcans';
import { card as pourquoiLaTerreTremble } from './sciences-de-la-terre/pourquoi-la-terre-tremble';
import { card as lesFossiles } from './sciences-de-la-terre/les-fossiles';
import { card as leVent } from './sciences-de-la-terre/le-vent';
import { card as lesMarees } from './sciences-de-la-terre/les-marees';
import { card as pourquoiLeCielEstBleu } from './sciences-de-la-terre/pourquoi-le-ciel-est-bleu';

import { card as jourEtNuit } from './astronomie/jour-et-nuit';
import { card as lesPhasesDeLaLune } from './astronomie/les-phases-de-la-lune';
import { card as pourquoiIlYADesSaisons } from './astronomie/pourquoi-il-y-a-des-saisons';
import { card as lesEtoiles } from './astronomie/les-etoiles';
import { card as pourquoiLesAstronautesFlottent } from './astronomie/pourquoi-les-astronautes-flottent';
import { card as lesTrousNoirs } from './astronomie/les-trous-noirs';
import { card as lesEtoilesFilantes } from './astronomie/les-etoiles-filantes';

import { card as commentPoussentLesPlantes } from './biologie/comment-poussent-les-plantes';
import { card as leCoeurEtLeSang } from './biologie/le-coeur-et-le-sang';
import { card as lesMicrobes } from './biologie/les-microbes';
import { card as pourquoiOnDort } from './biologie/pourquoi-on-dort';
import { card as pourquoiOnRessembleASesParents } from './biologie/pourquoi-on-ressemble-a-ses-parents';
import { card as commentOnRespire } from './biologie/comment-on-respire';
import { card as leVoyageDeLaNourriture } from './biologie/le-voyage-de-la-nourriture';

import { card as pourquoiToutTombe } from './physique/pourquoi-tout-tombe';
import { card as lesAimants } from './physique/les-aimants';
import { card as pourquoiOnVoitLesCouleurs } from './physique/pourquoi-on-voit-les-couleurs';
import { card as commentVoyageLeSon } from './physique/comment-voyage-le-son';
import { card as lelectricite } from './physique/lelectricite';
import { card as leChaudEtLeFroid } from './physique/le-chaud-et-le-froid';
import { card as pourquoiCaSarrete } from './physique/pourquoi-ca-sarrete';

import { card as leVolcanDeVinaigre } from './chimie/le-volcan-de-vinaigre';
import { card as lesEtatsDeLaMatiere } from './chimie/les-etats-de-la-matiere';
import { card as ouVaLeSucreDansLeau } from './chimie/ou-va-le-sucre-dans-leau';
import { card as deQuoiEstFaitLair } from './chimie/de-quoi-est-fait-lair';
import { card as leFeu } from './chimie/le-feu';
import { card as laRouille } from './chimie/la-rouille';
import { card as pourquoiLeSavonLave } from './chimie/pourquoi-le-savon-lave';

import { card as pourquoiLesPontsTiennent } from './ingenierie/pourquoi-les-ponts-tiennent';
import { card as commentVoleUnAvion } from './ingenierie/comment-vole-un-avion';
import { card as lesLeviers } from './ingenierie/les-leviers';
import { card as lesEngrenages } from './ingenierie/les-engrenages';
import { card as pourquoiLesBateauxFlottent } from './ingenierie/pourquoi-les-bateaux-flottent';
import { card as lesPoulies } from './ingenierie/les-poulies';
import { card as commentAvanceUneFusee } from './ingenierie/comment-avance-une-fusee';

import { card as commentCompteUnOrdinateur } from './informatique/comment-compte-un-ordinateur';
import { card as commentMarcheInternet } from './informatique/comment-marche-internet';
import { card as questCeQuunProgramme } from './informatique/quest-ce-quun-programme';
import { card as commentUnOrdinateurSeSouvient } from './informatique/comment-un-ordinateur-se-souvient';
import { card as commentUneMachineApprend } from './informatique/comment-une-machine-apprend';
import { card as commentMarcheUnEcran } from './informatique/comment-marche-un-ecran';
import { card as lesMotsDePasse } from './informatique/les-mots-de-passe';

import { card as laSymetrie } from './mathematiques/la-symetrie';
import { card as lesFractales } from './mathematiques/les-fractales';
import { card as leHasard } from './mathematiques/le-hasard';
import { card as linfini } from './mathematiques/linfini';
import { card as leZero } from './mathematiques/le-zero';
import { card as lesGrandsNombres } from './mathematiques/les-grands-nombres';
import { card as leTourEtLaSurface } from './mathematiques/le-tour-et-la-surface';

/**
 * Catalogue des cartes, groupées par domaine.
 *
 * Les imports sont explicites plutôt que générés par un scan de dossier : à
 * l'échelle visée (des dizaines de cartes), une liste écrite à la main reste
 * plus simple à lire et vérifiable par le typage, sans étape de build.
 *
 * Pour ajouter une carte : créer le fichier de contenu, enregistrer son
 * animation dans `components/animations/registry.tsx`, puis l'ajouter ici et
 * lancer `npm run audio`.
 */
export const cards: ScienceCard[] = [
  cycleDeLEau,
  lesVolcans,
  pourquoiLaTerreTremble,
  lesFossiles,
  leVent,
  lesMarees,
  pourquoiLeCielEstBleu,
  jourEtNuit,
  lesPhasesDeLaLune,
  pourquoiIlYADesSaisons,
  lesEtoiles,
  pourquoiLesAstronautesFlottent,
  lesTrousNoirs,
  lesEtoilesFilantes,
  commentPoussentLesPlantes,
  leCoeurEtLeSang,
  lesMicrobes,
  pourquoiOnDort,
  pourquoiOnRessembleASesParents,
  commentOnRespire,
  leVoyageDeLaNourriture,
  pourquoiToutTombe,
  lesAimants,
  pourquoiOnVoitLesCouleurs,
  commentVoyageLeSon,
  lelectricite,
  leChaudEtLeFroid,
  pourquoiCaSarrete,
  leVolcanDeVinaigre,
  lesEtatsDeLaMatiere,
  ouVaLeSucreDansLeau,
  deQuoiEstFaitLair,
  leFeu,
  laRouille,
  pourquoiLeSavonLave,
  pourquoiLesPontsTiennent,
  commentVoleUnAvion,
  lesLeviers,
  lesEngrenages,
  pourquoiLesBateauxFlottent,
  lesPoulies,
  commentAvanceUneFusee,
  commentCompteUnOrdinateur,
  commentMarcheInternet,
  questCeQuunProgramme,
  commentUnOrdinateurSeSouvient,
  commentUneMachineApprend,
  commentMarcheUnEcran,
  lesMotsDePasse,
  laSymetrie,
  lesFractales,
  leHasard,
  linfini,
  leZero,
  lesGrandsNombres,
  leTourEtLaSurface,
];
