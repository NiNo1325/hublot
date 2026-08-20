'use client';

import { useEffect } from 'react';
import { useCartesMaitrisees } from '@/components/cards/useCartesMaitrisees';
import { useCartesVues } from '@/components/cards/useCartesVues';
import { useMeilleursScores } from '@/components/quiz/useMeilleursScores';
import { useMusee } from '@/components/musee/useLiberes';
import {
  planifierSynchro,
  synchroniser,
  synchroniserMaintenant,
  verifierConnexion,
} from '@/lib/sync/client';

/**
 * Le déclencheur de synchronisation, monté une fois pour toute l'app.
 *
 * N'affiche rien. Il regarde la progression avancer et demande un dépôt
 * groupé ; le reste de l'app ignore complètement qu'un compte existe.
 *
 * Sans compte connecté — le cas de toutes les familles au départ — il fait
 * exactement une requête au démarrage, celle qui constate qu'il n'y a pas de
 * session, puis se tait définitivement.
 */
export function Synchronisation() {
  const { cartesVues } = useCartesVues();
  const { cartesMaitrisees } = useCartesMaitrisees();
  const { liberes } = useMusee();
  const { scores } = useMeilleursScores();

  useEffect(() => {
    let vivant = true;
    void verifierConnexion().then((connecte) => {
      if (vivant && connecte) void synchroniser();
    });
    return () => {
      vivant = false;
    };
  }, []);

  /*
    L'app d'un enfant est fermée brutalement bien plus souvent qu'elle n'est
    quittée proprement : on dépose donc dès qu'elle passe en arrière-plan,
    sans attendre le groupage de dix secondes.
  */
  useEffect(() => {
    const surMasquage = () => {
      if (document.visibilityState === 'hidden') synchroniserMaintenant();
    };
    document.addEventListener('visibilitychange', surMasquage);
    return () => document.removeEventListener('visibilitychange', surMasquage);
  }, []);

  const empreinte = `${cartesVues.size}|${cartesMaitrisees.size}|${liberes.length}|${scores.join(',')}`;
  useEffect(() => {
    planifierSynchro();
  }, [empreinte]);

  return null;
}
