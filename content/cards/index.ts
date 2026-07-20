import type { ScienceCard } from '@/lib/types';
import { card as cycleDeLEau } from './sciences-de-la-terre/cycle-de-leau';
import { card as jourEtNuit } from './astronomie/jour-et-nuit';
import { card as commentPoussentLesPlantes } from './biologie/comment-poussent-les-plantes';
import { card as pourquoiToutTombe } from './physique/pourquoi-tout-tombe';
import { card as leVolcanDeVinaigre } from './chimie/le-volcan-de-vinaigre';
import { card as pourquoiLesPontsTiennent } from './ingenierie/pourquoi-les-ponts-tiennent';
import { card as commentCompteUnOrdinateur } from './informatique/comment-compte-un-ordinateur';
import { card as laSymetrie } from './mathematiques/la-symetrie';

/**
 * Catalogue des cartes.
 *
 * Les imports sont explicites plutôt que générés par un scan de dossier : à
 * l'échelle visée (des dizaines de cartes), une liste écrite à la main reste
 * plus simple à lire et vérifiable par le typage, sans étape de build.
 *
 * Pour ajouter une carte : créer le fichier de contenu, enregistrer son
 * animation dans `components/animations/registry.tsx`, puis l'ajouter ici.
 */
export const cards: ScienceCard[] = [
  cycleDeLEau,
  jourEtNuit,
  commentPoussentLesPlantes,
  pourquoiToutTombe,
  leVolcanDeVinaigre,
  pourquoiLesPontsTiennent,
  commentCompteUnOrdinateur,
  laSymetrie,
];
