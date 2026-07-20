import type { ScienceCard } from '@/lib/types';
import { card as cycleDeLEau } from './sciences-de-la-terre/cycle-de-leau';

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
export const cards: ScienceCard[] = [cycleDeLEau];
