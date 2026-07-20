import type { ScienceCard } from '@/lib/types';

import { card as cycleDeLEau } from './sciences-de-la-terre/cycle-de-leau';
import { card as lesVolcans } from './sciences-de-la-terre/les-volcans';

import { card as jourEtNuit } from './astronomie/jour-et-nuit';
import { card as lesPhasesDeLaLune } from './astronomie/les-phases-de-la-lune';

import { card as commentPoussentLesPlantes } from './biologie/comment-poussent-les-plantes';
import { card as leCoeurEtLeSang } from './biologie/le-coeur-et-le-sang';

import { card as pourquoiToutTombe } from './physique/pourquoi-tout-tombe';
import { card as lesAimants } from './physique/les-aimants';

import { card as leVolcanDeVinaigre } from './chimie/le-volcan-de-vinaigre';
import { card as lesEtatsDeLaMatiere } from './chimie/les-etats-de-la-matiere';

import { card as pourquoiLesPontsTiennent } from './ingenierie/pourquoi-les-ponts-tiennent';
import { card as commentVoleUnAvion } from './ingenierie/comment-vole-un-avion';

import { card as commentCompteUnOrdinateur } from './informatique/comment-compte-un-ordinateur';
import { card as commentMarcheInternet } from './informatique/comment-marche-internet';

import { card as laSymetrie } from './mathematiques/la-symetrie';
import { card as lesFractales } from './mathematiques/les-fractales';

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
  jourEtNuit,
  lesPhasesDeLaLune,
  commentPoussentLesPlantes,
  leCoeurEtLeSang,
  pourquoiToutTombe,
  lesAimants,
  leVolcanDeVinaigre,
  lesEtatsDeLaMatiere,
  pourquoiLesPontsTiennent,
  commentVoleUnAvion,
  commentCompteUnOrdinateur,
  commentMarcheInternet,
  laSymetrie,
  lesFractales,
];
