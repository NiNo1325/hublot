'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePauseEnArrierePlan } from '@/lib/usePauseEnArrierePlan';

/**
 * Un compte à rebours en secondes, pour le Défi chrono.
 *
 * Le temps se lit sur l'horloge plutôt qu'en additionnant des tics : un
 * intervalle de navigateur dérive, et il est bridé dans un onglet en veille —
 * compter les tics ferait durer la partie bien plus que la minute annoncée.
 * On garde donc l'instant de départ et on en déduit ce qu'il reste.
 *
 * La partie se met en pause dès que l'application passe en arrière-plan. Un
 * enfant que l'on appelle, ou dont le téléphone se verrouille, ne doit pas
 * retrouver une partie perdue : le temps restant est figé, et c'est lui qui
 * reprend la main pour relancer.
 */
export function useCompteARebours(secondes: number) {
  const [restant, setRestant] = useState(secondes);
  const [enMarche, setEnMarche] = useState(false);
  /*
    Une partie a-t-elle commencé ? Sans cela, « il reste zéro seconde » serait
    vrai avant même le premier départ si la durée valait zéro, et surtout on ne
    saurait pas distinguer « pas encore lancé » de « temps écoulé ».
  */
  const [demarre, setDemarre] = useState(false);
  /** Ce qu'il restait au dernier démarrage, et l'instant de ce démarrage. */
  const departRef = useRef({ instant: 0, restant: secondes });

  const arreter = useCallback(() => {
    setEnMarche(false);
  }, []);

  const demarrer = useCallback(() => {
    departRef.current = { instant: Date.now(), restant: departRef.current.restant };
    setDemarre(true);
    setEnMarche(true);
  }, []);

  const reinitialiser = useCallback(() => {
    departRef.current = { instant: 0, restant: secondes };
    setRestant(secondes);
    setDemarre(false);
    setEnMarche(false);
  }, [secondes]);

  useEffect(() => {
    if (!enMarche) return;

    const battre = () => {
      const { instant, restant: base } = departRef.current;
      const ecoule = (Date.now() - instant) / 1000;
      const reste = Math.max(0, base - ecoule);
      setRestant(reste);
      if (reste === 0) {
        departRef.current.restant = 0;
        setEnMarche(false);
      }
    };

    battre();
    // Quatre fois par seconde : l'affichage ne montre que des secondes, mais
    // un intervalle d'une seconde pile fait sauter le chiffre de deux quand
    // le navigateur prend du retard.
    const minuterie = setInterval(battre, 250);
    return () => clearInterval(minuterie);
  }, [enMarche]);

  /*
    Passage en arrière-plan : on fige le temps restant. Sans cela, l'horloge
    continuerait de tourner pendant que l'écran est éteint et la partie serait
    déjà perdue au retour.
  */
  usePauseEnArrierePlan(
    useCallback(() => {
      if (!enMarche) return;
      const { instant, restant: base } = departRef.current;
      const reste = Math.max(0, base - (Date.now() - instant) / 1000);
      departRef.current.restant = reste;
      setRestant(reste);
      setEnMarche(false);
    }, [enMarche]),
  );

  return {
    /** Secondes restantes, arrondies à l'entier supérieur pour l'affichage. */
    restant: Math.ceil(restant),
    enMarche,
    /** Vrai une fois le temps écoulé, et seulement alors. */
    fini: demarre && restant === 0,
    demarrer,
    arreter,
    reinitialiser,
  };
}
