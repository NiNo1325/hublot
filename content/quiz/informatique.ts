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
  },  {
    cardId: 'les-mots-de-passe',
    questions: {
      '3-5': [
        {
          id: 'secret-long',
          question: 'Quel mot secret est le plus dur à deviner ?',
          reponses: [
            { texte: 'Chat lune bateau pomme', icone: '🔑', correcte: true },
            { texte: 'Chat', icone: '🐱' },
          ],
          explication: 'Plus le secret est long, plus il est difficile à trouver.',
        },
      ],
      '6-8': [
        {
          id: 'essais-machine',
          question: 'Comment retrouve-t-on un mot de passe qui n’est pas le sien ?',
          reponses: [
            { texte: 'En essayant des milliards de possibilités', icone: '🔁', correcte: true },
            { texte: 'En réfléchissant très fort', icone: '🤔' },
            { texte: 'En le lisant dans l’écran', icone: '👀' },
          ],
          explication:
            'C’est une machine qui essaie, très vite. Tout se joue sur le nombre d’essais nécessaires.',
        },
      ],
      '9-12': [
        {
          id: 'longueur-vs-ruse',
          question: 'Qui résiste le mieux : « Tr0ub4dor&3 » ou quatre mots courants tirés au hasard ?',
          reponses: [
            { texte: 'Les quatre mots', icone: '📏', correcte: true },
            { texte: 'Tr0ub4dor&3, plus compliqué', icone: '🌀' },
            { texte: 'Les deux se valent', icone: '⚖️' },
          ],
          explication:
            'Les substitutions du genre « a » en arobase figurent dans les règles des outils d’attaque. Seule la longueur multiplie vraiment les essais.',
        },
      ],
    },
  },  {
    cardId: 'pourquoi-une-photo-devient-floue',
    questions: {
      '3-5': [
        {
          id: 'photo-carres',
          question: 'Si tu agrandis beaucoup une photo, tu vois quoi ?',
          reponses: [
            { texte: 'Des carrés de couleur', icone: '🟦', correcte: true },
            { texte: 'Des détails cachés', icone: '🔍' },
          ],
          explication: 'La photo est faite de petits carrés. En l’agrandissant, on finit par les voir.',
        },
      ],
      '6-8': [
        {
          id: 'ameliorer-photo',
          question: 'Un logiciel peut-il rendre net un visage flou sur une photo ?',
          reponses: [
            { texte: 'Non, ce détail n’a jamais été enregistré', icone: '🚫', correcte: true },
            { texte: 'Oui, comme dans les films policiers', icone: '🎬' },
            { texte: 'Oui, si l’ordinateur est assez puissant', icone: '💻' },
          ],
          explication:
            'On ne peut pas retrouver ce qui n’a pas été capté : il n’y a tout simplement rien à retrouver.',
        },
      ],
      '9-12': [
        {
          id: 'ia-invente',
          question: 'Une IA rend net un visage flou. Que montre l’image obtenue ?',
          reponses: [
            { texte: 'Un détail plausible, fabriqué', icone: '🎭', correcte: true },
            { texte: 'Le vrai visage, restauré', icone: '🧑' },
            { texte: 'La moyenne des pixels voisins', icone: '➗' },
          ],
          explication:
            'Le modèle invente un détail appris sur d’autres images. Le résultat est une hypothèse, jamais une preuve.',
        },
      ],
    },
  },  {
    cardId: 'la-navigation-privee',
    questions: {
      '3-5': [
        {
          id: 'prive-cache',
          question: 'Le bouton « privé » te rend-il invisible ?',
          reponses: [
            { texte: 'Non, pas vraiment', icone: '👀', correcte: true },
            { texte: 'Oui, complètement', icone: '🫥' },
          ],
          explication: 'Il efface seulement les traces sur cet ordinateur-là.',
        },
      ],
      '6-8': [
        {
          id: 'prive-perimetre',
          question: 'Que cache vraiment la navigation privée ?',
          reponses: [
            { texte: 'Tes traces sur l’appareil que tu utilises', icone: '💻', correcte: true },
            { texte: 'Ta visite au site que tu ouvres', icone: '🌐' },
            { texte: 'Tout, à tout le monde', icone: '🫥' },
          ],
          explication:
            'Elle te protège de la personne qui utilisera l’appareil après toi, pas du réseau.',
        },
      ],
      '9-12': [
        {
          id: 'prive-qui-voit',
          question: 'En navigation privée, qui peut encore te reconnaître ?',
          reponses: [
            { texte: 'Le site, le fournisseur d’accès et l’administrateur réseau', icone: '🛰️', correcte: true },
            { texte: 'Personne, c’est tout le principe', icone: '🚫' },
            { texte: 'Seulement les sites où tu as un compte', icone: '🔑' },
          ],
          explication:
            'Le périmètre est strictement local : adresse IP et empreinte de navigateur restent parfaitement visibles.',
        },
      ],
    },
  },  {
    cardId: 'le-wifi',
    questions: {
      '3-5': [
        {
          id: 'wifi-internet',
          question: 'Le wifi, c’est la même chose qu’internet ?',
          reponses: [
            { texte: 'Non, c’est juste le dernier bout', icone: '📶', correcte: true },
            { texte: 'Oui, c’est pareil', icone: '🟰' },
          ],
          explication: 'Le wifi relie ton appareil à la boîte. Internet, c’est tout ce qui vient après.',
        },
      ],
      '6-8': [
        {
          id: 'wifi-ondes',
          question: 'Le wifi, c’est fait avec quoi ?',
          reponses: [
            { texte: 'Des ondes radio, comme la radio FM', icone: '📻', correcte: true },
            { texte: 'De la lumière qu’on peut voir', icone: '💡' },
            { texte: 'Des fils invisibles', icone: '🧵' },
          ],
          explication:
            'Ce sont des ondes de la même famille que celles de la radio, à une fréquence près.',
        },
      ],
      '9-12': [
        {
          id: 'wifi-lenteur',
          question: 'La connexion rame. Quel est le coupable le plus fréquent ?',
          reponses: [
            { texte: 'Le wifi, partagé entre tous les appareils', icone: '📶', correcte: true },
            { texte: 'L’abonnement internet', icone: '💶' },
            { texte: 'Le site visité', icone: '🌐' },
          ],
          explication:
            'Le wifi est un média partagé : le débit se répartit entre tous les émetteurs à portée, voisins compris.',
        },
      ],
    },
  },
];
