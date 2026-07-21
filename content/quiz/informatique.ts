import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « Les ordinateurs ».
 *
 * Fil conducteur : une machine ne comprend rien. Elle compte avec deux
 * chiffres, exécute des instructions à la lettre, oublie tout à la coupure du
 * courant, et repère des régularités sans accéder au sens. Les propositions
 * fausses reprennent les images trompeuses — le nuage dans le ciel, l'IA qui
 * saurait ce qu'est un chat.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'comment-compte-un-ordinateur',
    questions: {
      '3-5': [
        {
          id: 'deux-etats',
          question: 'Une petite lampe d’ordinateur, elle peut être comment ?',
          reponses: [
            { texte: 'Allumée ou éteinte', icone: '💡', correcte: true },
            { texte: 'De toutes les couleurs', icone: '🌈' },
          ],
          explication: 'L’ordinateur ne connaît que ces deux choses : allumé, ou éteint.',
        },
      ],
      '6-8': [
        {
          id: 'combien-chiffres',
          question: 'Avec combien de chiffres un ordinateur compte-t-il ?',
          reponses: [
            { texte: 'Deux : zéro et un', icone: '🔢', correcte: true },
            { texte: 'Dix, comme nous', icone: '🖐️' },
            { texte: 'Autant qu’il veut', icone: '♾️' },
          ],
          explication:
            'Chaque interrupteur est ouvert ou fermé. Huit d’entre eux suffisent déjà à écrire deux cent cinquante-six valeurs.',
        },
      ],
      '9-12': [
        {
          id: 'pourquoi-binaire',
          question: 'Pourquoi les ordinateurs utilisent-ils le binaire ?',
          reponses: [
            { texte: 'Distinguer deux états est plus fiable', icone: '✅', correcte: true },
            { texte: 'Parce que c’est plus rapide à calculer', icone: '⚡' },
            { texte: 'Parce qu’on n’a pas trouvé mieux', icone: '🤷' },
          ],
          explication:
            'C’est un choix d’ingénierie : reconnaître « courant » ou « pas de courant » est bien plus sûr que dix niveaux de tension.',
        },
      ],
    },
  },
  {
    cardId: 'comment-marche-internet',
    questions: {
      '3-5': [
        {
          id: 'ou-passent-messages',
          question: 'Par où voyagent tes photos quand tu les envoies ?',
          reponses: [
            { texte: 'Dans de grands câbles', icone: '🔌', correcte: true },
            { texte: 'Dans les nuages du ciel', icone: '☁️' },
          ],
          explication: 'Beaucoup de câbles sont posés tout au fond de la mer.',
        },
      ],
      '6-8': [
        {
          id: 'le-cloud',
          question: 'Le « nuage » où sont rangées tes photos, c’est quoi ?',
          reponses: [
            { texte: 'Des ordinateurs bien réels, dans des bâtiments', icone: '🏢', correcte: true },
            { texte: 'Un nuage dans le ciel', icone: '☁️' },
            { texte: 'Des ondes qui flottent dans l’air', icone: '📡' },
          ],
          explication:
            'Plus de neuf dixièmes du trafic mondial passe par des câbles au fond des océans.',
        },
      ],
      '9-12': [
        {
          id: 'paquets-chemins',
          question: 'Deux paquets d’un même message suivent-ils le même chemin ?',
          reponses: [
            { texte: 'Pas forcément, chaque routeur décide', icone: '🔀', correcte: true },
            { texte: 'Oui, toujours le même trajet', icone: '➡️' },
            { texte: 'Oui, sinon le message serait perdu', icone: '❌' },
          ],
          explication:
            'Aucun routeur ne connaît le trajet complet : la route émerge de décisions locales, et TCP remet les paquets dans l’ordre.',
        },
      ],
    },
  },
  {
    cardId: 'quest-ce-quun-programme',
    questions: {
      '3-5': [
        {
          id: 'ordre-important',
          question: 'Dans une recette, est-ce que l’ordre des étapes compte ?',
          reponses: [
            { texte: 'Oui, beaucoup', icone: '📋', correcte: true },
            { texte: 'Non, on peut tout mélanger', icone: '🔀' },
          ],
          explication: 'Le four avant la farine, et le gâteau est raté !',
        },
      ],
      '6-8': [
        {
          id: 'origine-bug',
          question: 'Quand un programme ne marche pas, d’où vient le problème ?',
          reponses: [
            { texte: 'D’une instruction mal écrite', icone: '✍️', correcte: true },
            { texte: 'L’ordinateur s’est trompé tout seul', icone: '🤖' },
            { texte: 'La machine est fatiguée', icone: '😴' },
          ],
          explication:
            'L’ordinateur applique à la lettre ce qui est écrit : un bug est presque toujours un cas non prévu.',
        },
      ],
      '9-12': [
        {
          id: 'dichotomie',
          question: 'Chercher un mot dans un dictionnaire d’un million d’entrées demande…',
          reponses: [
            { texte: 'Environ vingt essais par dichotomie', icone: '📖', correcte: true },
            { texte: 'Un million d’essais, forcément', icone: '🔢' },
            { texte: 'Toujours le même temps', icone: '⏱️' },
          ],
          explication:
            'Deux algorithmes corrects peuvent être très inégaux : on ne demande pas seulement si un programme marche, mais à quel coût.',
        },
      ],
    },
  },
  {
    cardId: 'comment-un-ordinateur-se-souvient',
    questions: {
      '3-5': [
        {
          id: 'enregistrer',
          question: 'Pourquoi faut-il enregistrer son dessin ?',
          reponses: [
            { texte: 'Sinon il s’efface quand on éteint', icone: '💾', correcte: true },
            { texte: 'Pour qu’il soit plus joli', icone: '🎨' },
          ],
          explication: 'Une des deux mémoires oublie tout dès qu’on coupe le courant.',
        },
      ],
      '6-8': [
        {
          id: 'memoire-vive',
          question: 'Que devient la mémoire vive quand on coupe le courant ?',
          reponses: [
            { texte: 'Elle s’efface entièrement', icone: '🌑', correcte: true },
            { texte: 'Elle garde tout', icone: '🔒' },
            { texte: 'Elle se copie toute seule', icone: '📋' },
          ],
          explication:
            'Elle a besoin d’électricité en permanence. Enregistrer, c’est recopier vers le stockage, qui garde sans alimentation.',
        },
      ],
      '9-12': [
        {
          id: 'hierarchie',
          question: 'Pourquoi ne pas mettre toute la mémoire en mémoire vive ?',
          reponses: [
            { texte: 'La mémoire rapide coûte trop cher', icone: '💰', correcte: true },
            { texte: 'Elle serait trop lente', icone: '🐢' },
            { texte: 'Elle prendrait trop de place', icone: '📦' },
          ],
          explication:
            'La hiérarchie des mémoires est un compromis économique : on garde dans les niveaux rapides ce qui sert le plus souvent.',
        },
      ],
    },
  },
  {
    cardId: 'comment-une-machine-apprend',
    questions: {
      '3-5': [
        {
          id: 'machine-comprend',
          question: 'La machine qui reconnaît les chats, sait-elle ce qu’est un chat ?',
          reponses: [
            { texte: 'Non, elle regarde juste des formes', icone: '🤖', correcte: true },
            { texte: 'Oui, elle en a déjà caressé', icone: '🐱' },
          ],
          explication: 'Elle n’a jamais vu de vrai chat : elle repère des motifs.',
        },
      ],
      '6-8': [
        {
          id: 'apprentissage-methode',
          question: 'Comment une machine apprend-elle à reconnaître un chat ?',
          reponses: [
            { texte: 'En corrigeant ses erreurs sur des milliers d’images', icone: '🔁', correcte: true },
            { texte: 'On lui décrit les moustaches et les oreilles', icone: '📝' },
            { texte: 'Elle devine toute seule du premier coup', icone: '✨' },
          ],
          explication:
            'À chaque erreur, ses réglages internes changent un peu. Répété des millions de fois, cela finit par marcher.',
        },
      ],
      '9-12': [
        {
          id: 'biais-donnees',
          question: 'Un modèle entraîné sur des données biaisées produit quoi ?',
          reponses: [
            { texte: 'Les mêmes biais, avec un air d’objectivité', icone: '⚠️', correcte: true },
            { texte: 'Des résultats neutres, il corrige tout seul', icone: '✅' },
            { texte: 'Des erreurs visibles et faciles à repérer', icone: '🔍' },
          ],
          explication:
            'Le système optimise une corrélation, sans notion de sens : savoir d’où viennent les données compte autant que l’algorithme.',
        },
      ],
    },
  },
  {
    cardId: 'comment-marche-un-ecran',
    questions: {
      '3-5': [
        {
          id: 'ecran-points',
          question: 'Une image sur un écran est faite de quoi ?',
          reponses: [
            { texte: 'De milliers de tout petits points', icone: '🔲', correcte: true },
            { texte: 'D’un seul grand dessin', icone: '🖼️' },
          ],
          explication: 'Les points sont si petits qu’on les prend pour une image entière.',
        },
      ],
      '6-8': [
        {
          id: 'ecran-couleurs',
          question: 'Combien de couleurs de base un pixel utilise-t-il ?',
          reponses: [
            { texte: 'Trois : rouge, vert et bleu', icone: '🔴', correcte: true },
            { texte: 'Toutes les couleurs', icone: '🌈' },
            { texte: 'Une seule', icone: '⚪' },
          ],
          explication:
            'Toutes les autres couleurs sont fabriquées en mélangeant ces trois lumières.',
        },
      ],
      '9-12': [
        {
          id: 'ecran-jaune',
          question: 'Le jaune que tu vois sur un écran, c’est quoi ?',
          reponses: [
            { texte: 'Du rouge et du vert allumés ensemble', icone: '🟡', correcte: true },
            { texte: 'Une vraie lumière jaune', icone: '💡' },
            { texte: 'De la peinture jaune', icone: '🎨' },
          ],
          explication:
            'L’écran n’a pas de jaune : c’est la synthèse additive, ton œil mélange le rouge et le vert.',
        },
      ],
    },
  },
];
