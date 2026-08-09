import type { ScienceCard } from '@/lib/types';

import { card as cycleDeLEau } from './sciences-de-la-terre/cycle-de-leau';
import { card as lesVolcans } from './sciences-de-la-terre/les-volcans';
import { card as pourquoiLaTerreTremble } from './sciences-de-la-terre/pourquoi-la-terre-tremble';
import { card as lesFossiles } from './sciences-de-la-terre/les-fossiles';
import { card as leVent } from './sciences-de-la-terre/le-vent';
import { card as lesMarees } from './sciences-de-la-terre/les-marees';
import { card as pourquoiLeCielEstBleu } from './sciences-de-la-terre/pourquoi-le-ciel-est-bleu';
import { card as pourquoiLaMerEstSalee } from './sciences-de-la-terre/pourquoi-la-mer-est-salee';
import { card as douVientLePetrole } from './sciences-de-la-terre/dou-vient-le-petrole';
import { card as leSolEstVivant } from './sciences-de-la-terre/le-sol-est-vivant';

import { card as jourEtNuit } from './astronomie/jour-et-nuit';
import { card as lesPhasesDeLaLune } from './astronomie/les-phases-de-la-lune';
import { card as pourquoiIlYADesSaisons } from './astronomie/pourquoi-il-y-a-des-saisons';
import { card as lesEtoiles } from './astronomie/les-etoiles';
import { card as pourquoiLesAstronautesFlottent } from './astronomie/pourquoi-les-astronautes-flottent';
import { card as lesTrousNoirs } from './astronomie/les-trous-noirs';
import { card as lesEtoilesFilantes } from './astronomie/les-etoiles-filantes';
import { card as lesPlanetes } from './astronomie/les-planetes';
import { card as laFaceCacheeDeLaLune } from './astronomie/la-face-cachee-de-la-lune';
import { card as lesEclipses } from './astronomie/les-eclipses';

import { card as commentPoussentLesPlantes } from './biologie/comment-poussent-les-plantes';
import { card as leCoeurEtLeSang } from './biologie/le-coeur-et-le-sang';
import { card as lesMicrobes } from './biologie/les-microbes';
import { card as pourquoiOnDort } from './biologie/pourquoi-on-dort';
import { card as pourquoiOnRessembleASesParents } from './biologie/pourquoi-on-ressemble-a-ses-parents';
import { card as commentOnRespire } from './biologie/comment-on-respire';
import { card as leVoyageDeLaNourriture } from './biologie/le-voyage-de-la-nourriture';
import { card as leCerveau } from './biologie/le-cerveau';
import { card as lesOs } from './biologie/les-os';
import { card as levolution } from './biologie/levolution';

import { card as pourquoiToutTombe } from './physique/pourquoi-tout-tombe';
import { card as lesAimants } from './physique/les-aimants';
import { card as pourquoiOnVoitLesCouleurs } from './physique/pourquoi-on-voit-les-couleurs';
import { card as commentVoyageLeSon } from './physique/comment-voyage-le-son';
import { card as lelectricite } from './physique/lelectricite';
import { card as leChaudEtLeFroid } from './physique/le-chaud-et-le-froid';
import { card as pourquoiCaSarrete } from './physique/pourquoi-ca-sarrete';
import { card as lesAtomes } from './physique/les-atomes';
import { card as lenergie } from './physique/lenergie';
import { card as lePoidsEtLaMasse } from './physique/le-poids-et-la-masse';

import { card as leVolcanDeVinaigre } from './chimie/le-volcan-de-vinaigre';
import { card as lesEtatsDeLaMatiere } from './chimie/les-etats-de-la-matiere';
import { card as ouVaLeSucreDansLeau } from './chimie/ou-va-le-sucre-dans-leau';
import { card as deQuoiEstFaitLair } from './chimie/de-quoi-est-fait-lair';
import { card as leFeu } from './chimie/le-feu';
import { card as laRouille } from './chimie/la-rouille';
import { card as pourquoiLeSavonLave } from './chimie/pourquoi-le-savon-lave';
import { card as lesAcidesEtLesBases } from './chimie/les-acides-et-les-bases';
import { card as pourquoiCaSent } from './chimie/pourquoi-ca-sent';
import { card as pourquoiLaGlaceFlotte } from './chimie/pourquoi-la-glace-flotte';

import { card as pourquoiLesPontsTiennent } from './ingenierie/pourquoi-les-ponts-tiennent';
import { card as commentVoleUnAvion } from './ingenierie/comment-vole-un-avion';
import { card as lesLeviers } from './ingenierie/les-leviers';
import { card as lesEngrenages } from './ingenierie/les-engrenages';
import { card as pourquoiLesBateauxFlottent } from './ingenierie/pourquoi-les-bateaux-flottent';
import { card as lesPoulies } from './ingenierie/les-poulies';
import { card as commentAvanceUneFusee } from './ingenierie/comment-avance-une-fusee';
import { card as commentOnFreine } from './ingenierie/comment-on-freine';
import { card as commentMarcheUnFrigo } from './ingenierie/comment-marche-un-frigo';
import { card as leMicroOndes } from './ingenierie/le-micro-ondes';

import { card as commentCompteUnOrdinateur } from './informatique/comment-compte-un-ordinateur';
import { card as commentMarcheInternet } from './informatique/comment-marche-internet';
import { card as questCeQuunProgramme } from './informatique/quest-ce-quun-programme';
import { card as commentUnOrdinateurSeSouvient } from './informatique/comment-un-ordinateur-se-souvient';
import { card as commentUneMachineApprend } from './informatique/comment-une-machine-apprend';
import { card as commentMarcheUnEcran } from './informatique/comment-marche-un-ecran';
import { card as lesMotsDePasse } from './informatique/les-mots-de-passe';
import { card as pourquoiUnePhotoDevientFloue } from './informatique/pourquoi-une-photo-devient-floue';
import { card as laNavigationPrivee } from './informatique/la-navigation-privee';
import { card as leWifi } from './informatique/le-wifi';

import { card as laSymetrie } from './mathematiques/la-symetrie';
import { card as lesFractales } from './mathematiques/les-fractales';
import { card as leHasard } from './mathematiques/le-hasard';
import { card as linfini } from './mathematiques/linfini';
import { card as leZero } from './mathematiques/le-zero';
import { card as lesGrandsNombres } from './mathematiques/les-grands-nombres';
import { card as leTourEtLaSurface } from './mathematiques/le-tour-et-la-surface';
import { card as lesPourcentages } from './mathematiques/les-pourcentages';
import { card as laMoyenne } from './mathematiques/la-moyenne';
import { card as leParadoxeDesAnniversaires } from './mathematiques/le-paradoxe-des-anniversaires';

import { card as laMetamorphoseDuPapillon } from './animaux/la-metamorphose-du-papillon';
import { card as pourquoiLeCameleonChangeDeCouleur } from './animaux/pourquoi-le-cameleon-change-de-couleur';
import { card as laMigrationDesOiseaux } from './animaux/la-migration-des-oiseaux';
import { card as lhibernation } from './animaux/lhibernation';
import { card as lecholocationDeLaChauveSouris } from './animaux/lecholocation-de-la-chauve-souris';
import { card as commentLesPoissonsRespirent } from './animaux/comment-les-poissons-respirent';
import { card as pourquoiLesZebresOntDesRayures } from './animaux/pourquoi-les-zebres-ont-des-rayures';
import { card as commentLesAbeillesFontLeMiel } from './animaux/comment-les-abeilles-font-le-miel';
import { card as laToileDeLaraignee } from './animaux/la-toile-de-laraignee';
import { card as pourquoiLeChatRetombeSurSesPattes } from './animaux/pourquoi-le-chat-retombe-sur-ses-pattes';

import { card as lesNuages } from './meteo/les-nuages';
import { card as pourquoiIlFaitPlusFroidEnMontagne } from './meteo/pourquoi-il-fait-plus-froid-en-montagne';
import { card as laFoudreEtLeTonnerre } from './meteo/la-foudre-et-le-tonnerre';
import { card as laNeige } from './meteo/la-neige';
import { card as laGrele } from './meteo/la-grele';
import { card as leBrouillard } from './meteo/le-brouillard';
import { card as louragan } from './meteo/louragan';
import { card as laRoseeDuMatin } from './meteo/la-rosee-du-matin';
import { card as leGivre } from './meteo/le-givre';
import { card as laFormeDesGouttesDePluie } from './meteo/la-forme-des-gouttes-de-pluie';

import { card as pourquoiLechoRepond } from './le-son/pourquoi-lecho-repond';
import { card as aiguOuGrave } from './le-son/aigu-ou-grave';
import { card as pourquoiLesVoixSontDifferentes } from './le-son/pourquoi-les-voix-sont-differentes';
import { card as commentLoreilleEntend } from './le-son/comment-loreille-entend';
import { card as quandLeBruitFaitMal } from './le-son/quand-le-bruit-fait-mal';
import { card as commentChanteUneGuitare } from './le-son/comment-chante-une-guitare';
import { card as laSireneQuiChange } from './le-son/la-sirene-qui-change';
import { card as maVoixEnregistree } from './le-son/ma-voix-enregistree';
import { card as lesSonsQuonNentendPas } from './le-son/les-sons-quon-nentend-pas';
import { card as lesNotesQuiVontEnsemble } from './le-son/les-notes-qui-vont-ensemble';

import { card as lePuzzleDesOs } from './les-dinosaures/le-puzzle-des-os';
import { card as leJourDeLasteroide } from './les-dinosaures/le-jour-de-lasteroide';
import { card as lesOiseauxSontDesDinosaures } from './les-dinosaures/les-oiseaux-sont-des-dinosaures';
import { card as ilYaTresTresLongtemps } from './les-dinosaures/il-y-a-tres-tres-longtemps';
import { card as pourquoiSiGrands } from './les-dinosaures/pourquoi-si-grands';
import { card as carnivoreOuHerbivore } from './les-dinosaures/carnivore-ou-herbivore';
import { card as lesTracesDePas } from './les-dinosaures/les-traces-de-pas';
import { card as desDinosauresAPlumes } from './les-dinosaures/des-dinosaures-a-plumes';
import { card as pasTousDesDinosaures } from './les-dinosaures/pas-tous-des-dinosaures';
import { card as apresLesDinosaures } from './les-dinosaures/apres-les-dinosaures';

import { card as laChairDePoule } from './le-corps/la-chair-de-poule';
import { card as pourquoiOnEternue } from './le-corps/pourquoi-on-eternue';
import { card as aQuoiServentLesLarmes } from './le-corps/a-quoi-servent-les-larmes';
import { card as laPeauNotreBouclier } from './le-corps/la-peau-notre-bouclier';
import { card as lesEmpreintesDigitales } from './le-corps/les-empreintes-digitales';
import { card as pourquoiOnAMal } from './le-corps/pourquoi-on-a-mal';
import { card as commentLesMusclesBougent } from './le-corps/comment-les-muscles-bougent';
import { card as commentOnTientDebout } from './le-corps/comment-on-tient-debout';
import { card as pourquoiOnADeuxYeux } from './le-corps/pourquoi-on-a-deux-yeux';
import { card as lesDentsDeLait } from './le-corps/les-dents-de-lait';

import { card as douViennentLesVagues } from './les-oceans/dou-viennent-les-vagues';
import { card as lesFleuvesDansLaMer } from './les-oceans/les-fleuves-dans-la-mer';
import { card as pourquoiIlFaitNoirAuFond } from './les-oceans/pourquoi-il-fait-noir-au-fond';
import { card as laPressionQuiEcrase } from './les-oceans/la-pression-qui-ecrase';
import { card as leCorailBatisseur } from './les-oceans/le-corail-batisseur';
import { card as lesAnimauxQuiBrillent } from './les-oceans/les-animaux-qui-brillent';
import { card as lesSourcesChaudesDuFond } from './les-oceans/les-sources-chaudes-du-fond';
import { card as lePlanctonMinuscule } from './les-oceans/le-plancton-minuscule';
import { card as pourquoiOnFlotteMieuxDansLaMer } from './les-oceans/pourquoi-on-flotte-mieux-dans-la-mer';
import { card as laVagueGeante } from './les-oceans/la-vague-geante';

import { card as pourquoiLePainGonfle } from './la-cuisine/pourquoi-le-pain-gonfle';
import { card as pourquoiCaDore } from './la-cuisine/pourquoi-ca-dore';
import { card as pourquoiLoignonFaitPleurer } from './la-cuisine/pourquoi-loignon-fait-pleurer';
import { card as pourquoiLePimentBrule } from './la-cuisine/pourquoi-le-piment-brule';
import { card as pourquoiLePopcornExplose } from './la-cuisine/pourquoi-le-popcorn-explose';
import { card as pourquoiLeLaitDevientYaourt } from './la-cuisine/pourquoi-le-lait-devient-yaourt';
import { card as pourquoiLoeufDurcit } from './la-cuisine/pourquoi-loeuf-durcit';
import { card as pourquoiLeSodaPetille } from './la-cuisine/pourquoi-le-soda-petille';
import { card as pourquoiLaPommeBrunit } from './la-cuisine/pourquoi-la-pomme-brunit';
import { card as pourquoiLeMielNeSePerimePas } from './la-cuisine/pourquoi-le-miel-ne-se-perime-pas';

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
  pourquoiLaMerEstSalee,
  douVientLePetrole,
  leSolEstVivant,
  jourEtNuit,
  lesPhasesDeLaLune,
  pourquoiIlYADesSaisons,
  lesEtoiles,
  pourquoiLesAstronautesFlottent,
  lesTrousNoirs,
  lesEtoilesFilantes,
  lesPlanetes,
  laFaceCacheeDeLaLune,
  lesEclipses,
  commentPoussentLesPlantes,
  leCoeurEtLeSang,
  lesMicrobes,
  pourquoiOnDort,
  pourquoiOnRessembleASesParents,
  commentOnRespire,
  leVoyageDeLaNourriture,
  leCerveau,
  lesOs,
  levolution,
  pourquoiToutTombe,
  lesAimants,
  pourquoiOnVoitLesCouleurs,
  commentVoyageLeSon,
  lelectricite,
  leChaudEtLeFroid,
  pourquoiCaSarrete,
  lesAtomes,
  lenergie,
  lePoidsEtLaMasse,
  leVolcanDeVinaigre,
  lesEtatsDeLaMatiere,
  ouVaLeSucreDansLeau,
  deQuoiEstFaitLair,
  leFeu,
  laRouille,
  pourquoiLeSavonLave,
  lesAcidesEtLesBases,
  pourquoiCaSent,
  pourquoiLaGlaceFlotte,
  pourquoiLesPontsTiennent,
  commentVoleUnAvion,
  lesLeviers,
  lesEngrenages,
  pourquoiLesBateauxFlottent,
  lesPoulies,
  commentAvanceUneFusee,
  commentOnFreine,
  commentMarcheUnFrigo,
  leMicroOndes,
  commentCompteUnOrdinateur,
  commentMarcheInternet,
  questCeQuunProgramme,
  commentUnOrdinateurSeSouvient,
  commentUneMachineApprend,
  commentMarcheUnEcran,
  lesMotsDePasse,
  pourquoiUnePhotoDevientFloue,
  laNavigationPrivee,
  leWifi,
  laSymetrie,
  lesFractales,
  leHasard,
  linfini,
  leZero,
  lesGrandsNombres,
  leTourEtLaSurface,
  lesPourcentages,
  laMoyenne,
  leParadoxeDesAnniversaires,
  laMetamorphoseDuPapillon,
  pourquoiLeCameleonChangeDeCouleur,
  laMigrationDesOiseaux,
  lhibernation,
  lecholocationDeLaChauveSouris,
  commentLesPoissonsRespirent,
  pourquoiLesZebresOntDesRayures,
  commentLesAbeillesFontLeMiel,
  laToileDeLaraignee,
  pourquoiLeChatRetombeSurSesPattes,
  lesNuages,
  pourquoiIlFaitPlusFroidEnMontagne,
  laFoudreEtLeTonnerre,
  laNeige,
  laGrele,
  leBrouillard,
  louragan,
  laRoseeDuMatin,
  leGivre,
  laFormeDesGouttesDePluie,
  pourquoiLechoRepond,
  aiguOuGrave,
  pourquoiLesVoixSontDifferentes,
  commentLoreilleEntend,
  quandLeBruitFaitMal,
  commentChanteUneGuitare,
  laSireneQuiChange,
  maVoixEnregistree,
  lesSonsQuonNentendPas,
  lesNotesQuiVontEnsemble,
  lePuzzleDesOs,
  leJourDeLasteroide,
  lesOiseauxSontDesDinosaures,
  ilYaTresTresLongtemps,
  pourquoiSiGrands,
  carnivoreOuHerbivore,
  lesTracesDePas,
  desDinosauresAPlumes,
  pasTousDesDinosaures,
  apresLesDinosaures,
  laChairDePoule,
  pourquoiOnEternue,
  aQuoiServentLesLarmes,
  laPeauNotreBouclier,
  lesEmpreintesDigitales,
  pourquoiOnAMal,
  commentLesMusclesBougent,
  commentOnTientDebout,
  pourquoiOnADeuxYeux,
  lesDentsDeLait,
  douViennentLesVagues,
  lesFleuvesDansLaMer,
  pourquoiIlFaitNoirAuFond,
  laPressionQuiEcrase,
  leCorailBatisseur,
  lesAnimauxQuiBrillent,
  lesSourcesChaudesDuFond,
  lePlanctonMinuscule,
  pourquoiOnFlotteMieuxDansLaMer,
  laVagueGeante,
  pourquoiLePainGonfle,
  pourquoiCaDore,
  pourquoiLoignonFaitPleurer,
  pourquoiLePimentBrule,
  pourquoiLePopcornExplose,
  pourquoiLeLaitDevientYaourt,
  pourquoiLoeufDurcit,
  pourquoiLeSodaPetille,
  pourquoiLaPommeBrunit,
  pourquoiLeMielNeSePerimePas,
];
