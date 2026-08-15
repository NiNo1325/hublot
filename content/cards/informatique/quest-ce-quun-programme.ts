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
    en: {
      title: {
        '3-5': 'The recipe computers follow',
        '6-8': 'What a program is',
        '9-12': 'Algorithms and execution',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'recette',
              text: 'A program is a list of orders, like the recipe for a cake: do this, then do that.',
            },
            {
              id: 'ordre',
              text: 'The order matters a lot. If you put the cake in the oven before adding the flour, it does not work.',
            },
            {
              id: 'exact',
              text: 'The computer does exactly what is written. It never guesses what you meant to say.',
            },
            {
              id: 'bug',
              text: 'So when it goes wrong, it is not the computer that made the mistake: the order was badly written.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'recette',
              text: 'An algorithm is a series of precise instructions that solves a problem. A program is that algorithm written in a language the machine can carry out.',
            },
            {
              id: 'ordre',
              text: 'The instructions follow one another in a strict order. You can also ask for a repeat — “do that ten times” — or for a choice — “if the door is shut, then knock”.',
            },
            {
              id: 'exact',
              text: 'The computer applies every instruction to the letter, never reading anything into what you intended. Tell it to move forward when there is a wall in front of it, and it will walk into the wall.',
            },
            {
              id: 'bug',
              text: 'A bug is almost never a breakdown: it is a badly written instruction, or a case nobody had thought of. Programming is mostly learning to describe a task without leaving anything unsaid.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'recette',
              text: 'An algorithm is a finite, unambiguous procedure that, starting from input data, produces a result in a finite number of steps. The idea is centuries older than computing: Euclid’s algorithm dates from antiquity.',
            },
            {
              id: 'ordre',
              text: 'Three structures are enough to express anything: the sequence, the condition and the loop. That result, known as the structured program theorem, means any program can be written with those tools alone.',
            },
            {
              id: 'exact',
              text: 'The processor carries out elementary instructions — add, compare, move a piece of data — billions of times a second. The code you write is translated into that form by a compiler or an interpreter. No layer of the system understands the goal being pursued.',
            },
            {
              id: 'bug',
              text: 'Two correct algorithms can be wildly unequal: looking for a word page by page in a dictionary of a million entries takes up to a million tries, whereas a binary search needs twenty. That is why we ask not only whether a program works, but at what cost.',
            },
          ],
        },
      },
    },
  },
};
