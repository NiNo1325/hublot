import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : un ordinateur n'« essaie » pas de comprendre et ne fait
 * pas d'erreurs de lui-même. Il exécute exactement ce qui est écrit — un bug
 * est une instruction mal formulée, pas une défaillance de la machine.
 */
export const card: ScienceCard = {
  id: 'quest-ce-quun-programme',
  domainId: 'informatique',
  animationId: 'algorithme',
  thumbnail: '📋',
  content: {
    fr: {
      title: {
        '3-5': 'La recette des ordinateurs',
        '6-8': "Qu'est-ce qu'un programme",
        '9-12': 'Algorithmes et exécution',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'recette',
              text: "Un programme, c'est une liste d'ordres, comme la recette d'un gâteau : fais ceci, puis cela.",
            },
            {
              id: 'ordre',
              text: "L'ordre compte beaucoup. Si tu mets le gâteau au four avant d'ajouter la farine, ça ne marche pas.",
            },
            {
              id: 'exact',
              text: "L'ordinateur fait exactement ce qui est écrit. Il ne devine jamais ce que tu voulais dire.",
            },
            {
              id: 'bug',
              text: "Alors quand ça ne marche pas, ce n'est pas lui qui s'est trompé : c'est l'ordre qui était mal écrit.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'recette',
              text: "Un algorithme est une suite d'instructions précises qui résout un problème. Un programme, c'est cet algorithme écrit dans un langage que la machine peut exécuter.",
            },
            {
              id: 'ordre',
              text: "Les instructions s'enchaînent dans un ordre strict. On peut aussi demander de répéter — « recommence dix fois » — ou de choisir — « si la porte est fermée, alors frappe ».",
            },
            {
              id: 'exact',
              text: "L'ordinateur applique chaque instruction à la lettre, sans jamais interpréter l'intention. Dis-lui d'avancer alors qu'un mur se trouve devant, il avancera dans le mur.",
            },
            {
              id: 'bug',
              text: "Un bug n'est presque jamais une panne : c'est une instruction mal écrite, ou un cas que personne n'avait prévu. Programmer, c'est surtout apprendre à décrire une tâche sans laisser le moindre sous-entendu.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'recette',
              text: "Un algorithme est une procédure finie et non ambiguë qui, à partir de données d'entrée, produit un résultat en un nombre fini d'étapes. La notion précède l'informatique de plusieurs siècles : l'algorithme d'Euclide date de l'Antiquité.",
            },
            {
              id: 'ordre',
              text: "Trois structures suffisent à tout exprimer : la séquence, la condition et la boucle. Ce résultat, appelé théorème de la programmation structurée, signifie que n'importe quel programme peut s'écrire avec ces seuls outils.",
            },
            {
              id: 'exact',
              text: "Le processeur exécute des instructions élémentaires — additionner, comparer, déplacer une donnée — à raison de milliards par seconde. Le code que tu écris est traduit en cette forme par un compilateur ou un interpréteur. Aucune couche de ce système ne comprend le but poursuivi.",
            },
            {
              id: 'bug',
              text: "Deux algorithmes corrects peuvent être très inégaux : chercher un mot page par page dans un dictionnaire d'un million d'entrées demande jusqu'à un million d'essais, alors qu'une recherche par dichotomie en exige vingt. C'est pourquoi on ne se demande pas seulement si un programme fonctionne, mais à quel coût.",
            },
          ],
        },
      },
    },
  },
};
