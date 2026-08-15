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
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'deux-etats',
            question: 'A tiny lamp inside a computer: how can it be?',
            reponses: [
              { texte: 'On or off', icone: '💡', correcte: true },
              { texte: 'All the colours', icone: '🌈' },
            ],
            explication: 'A computer knows only those two things: on, or off.',
          },
        ],
        '6-8': [
          {
            id: 'combien-chiffres',
            question: 'How many digits does a computer count with?',
            reponses: [
              { texte: 'Two: zero and one', icone: '🔢', correcte: true },
              { texte: 'Ten, like us', icone: '🖐️' },
              { texte: 'As many as it likes', icone: '♾️' },
            ],
            explication:
              'Each switch is either open or closed. Eight of them are already enough to write two hundred and fifty-six values.',
          },
        ],
        '9-12': [
          {
            id: 'pourquoi-binaire',
            question: 'Why do computers use binary?',
            reponses: [
              { texte: 'Telling two states apart is more reliable', icone: '✅', correcte: true },
              { texte: 'Because it is quicker to calculate with', icone: '⚡' },
              { texte: 'Because nothing better has been found', icone: '🤷' },
            ],
            explication:
              'It is an engineering choice: recognising “current” or “no current” is far safer than ten voltage levels.',
          },
        ],
      },
    },
  },
  {
    cardId: 'comment-marche-internet',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'ou-passent-messages',
            question: 'Where do your photos travel when you send them?',
            reponses: [
              { texte: 'Through big cables', icone: '🔌', correcte: true },
              { texte: 'Through the clouds in the sky', icone: '☁️' },
            ],
            explication: 'Plenty of cables lie right at the bottom of the sea.',
          },
        ],
        '6-8': [
          {
            id: 'le-cloud',
            question: 'The “cloud” where your photos are kept — what is it?',
            reponses: [
              { texte: 'Thoroughly real computers, inside buildings', icone: '🏢', correcte: true },
              { texte: 'A cloud up in the sky', icone: '☁️' },
              { texte: 'Waves floating in the air', icone: '📡' },
            ],
            explication:
              'More than nine tenths of the world’s traffic goes through cables on the ocean floor.',
          },
        ],
        '9-12': [
          {
            id: 'paquets-chemins',
            question: 'Do two packets from the same message follow the same route?',
            reponses: [
              { texte: 'Not necessarily — each router decides', icone: '🔀', correcte: true },
              { texte: 'Yes, always the same journey', icone: '➡️' },
              { texte: 'Yes, or the message would be lost', icone: '❌' },
            ],
            explication:
              'No router knows the full journey: the route emerges from local decisions, and TCP puts the packets back in order.',
          },
        ],
      },
    },
  },
  {
    cardId: 'quest-ce-quun-programme',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'ordre-important',
            question: 'In a recipe, does the order of the steps matter?',
            reponses: [
              { texte: 'Yes, a lot', icone: '📋', correcte: true },
              { texte: 'No, you can mix it all up', icone: '🔀' },
            ],
            explication: 'The oven before the flour, and the cake is ruined!',
          },
        ],
        '6-8': [
          {
            id: 'origine-bug',
            question: 'When a program does not work, where does the problem come from?',
            reponses: [
              { texte: 'From a badly written instruction', icone: '✍️', correcte: true },
              { texte: 'The computer got it wrong on its own', icone: '🤖' },
              { texte: 'The machine is tired', icone: '😴' },
            ],
            explication:
              'A computer applies what is written to the letter: a bug is almost always a case nobody planned for.',
          },
        ],
        '9-12': [
          {
            id: 'dichotomie',
            question: 'Looking up a word in a dictionary of a million entries takes…',
            reponses: [
              { texte: 'About twenty tries with a binary search', icone: '📖', correcte: true },
              { texte: 'A million tries, inevitably', icone: '🔢' },
              { texte: 'Always the same amount of time', icone: '⏱️' },
            ],
            explication:
              'Two correct algorithms can be wildly unequal: we ask not only whether a program works, but at what cost.',
          },
        ],
      },
    },
  },
  {
    cardId: 'comment-un-ordinateur-se-souvient',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'enregistrer',
            question: 'Why do you have to save your drawing?',
            reponses: [
              { texte: 'Or it is wiped when you switch off', icone: '💾', correcte: true },
              { texte: 'To make it prettier', icone: '🎨' },
            ],
            explication: 'One of the two memories forgets everything as soon as the power goes.',
          },
        ],
        '6-8': [
          {
            id: 'memoire-vive',
            question: 'What happens to the working memory when the power is cut?',
            reponses: [
              { texte: 'It is wiped completely', icone: '🌑', correcte: true },
              { texte: 'It keeps everything', icone: '🔒' },
              { texte: 'It copies itself on its own', icone: '📋' },
            ],
            explication:
              'It needs electricity all the time. Saving means copying into storage, which keeps things with no power.',
          },
        ],
        '9-12': [
          {
            id: 'hierarchie',
            question: 'Why not make all of a computer’s memory working memory?',
            reponses: [
              { texte: 'Fast memory costs far too much', icone: '💰', correcte: true },
              { texte: 'It would be too slow', icone: '🐢' },
              { texte: 'It would take up too much room', icone: '📦' },
            ],
            explication:
              'The memory hierarchy is an economic compromise: the fast levels hold whatever is used most often.',
          },
        ],
      },
    },
  },
  {
    cardId: 'comment-une-machine-apprend',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'machine-comprend',
            question: 'The machine that recognises cats — does it know what a cat is?',
            reponses: [
              { texte: 'No, it only looks at shapes', icone: '🤖', correcte: true },
              { texte: 'Yes, it has stroked one before', icone: '🐱' },
            ],
            explication: 'It has never seen a real cat: it spots patterns.',
          },
        ],
        '6-8': [
          {
            id: 'apprentissage-methode',
            question: 'How does a machine learn to recognise a cat?',
            reponses: [
              { texte: 'By correcting its mistakes on thousands of images', icone: '🔁', correcte: true },
              { texte: 'Someone describes the whiskers and ears to it', icone: '📝' },
              { texte: 'It works it out on its own, first time', icone: '✨' },
            ],
            explication:
              'Each time it is wrong, its internal settings shift a little. Repeated millions of times, that ends up working.',
          },
        ],
        '9-12': [
          {
            id: 'biais-donnees',
            question: 'What does a model trained on biased data produce?',
            reponses: [
              { texte: 'The same biases, with an air of objectivity', icone: '⚠️', correcte: true },
              { texte: 'Neutral results — it corrects itself', icone: '✅' },
              { texte: 'Obvious mistakes, easy to spot', icone: '🔍' },
            ],
            explication:
              'The system optimises a correlation, with no notion of meaning: where the data came from counts as much as the algorithm.',
          },
        ],
      },
    },
  },
  {
    cardId: 'comment-marche-un-ecran',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'ecran-points',
            question: 'What is a picture on a screen made of?',
            reponses: [
              { texte: 'Thousands of tiny dots', icone: '🔲', correcte: true },
              { texte: 'One single big drawing', icone: '🖼️' },
            ],
            explication: 'The dots are so small that we take them for a whole picture.',
          },
        ],
        '6-8': [
          {
            id: 'ecran-couleurs',
            question: 'How many basic colours does a pixel use?',
            reponses: [
              { texte: 'Three: red, green and blue', icone: '🔴', correcte: true },
              { texte: 'Every colour there is', icone: '🌈' },
              { texte: 'Just one', icone: '⚪' },
            ],
            explication:
              'Every other colour is made by mixing those three lights.',
          },
        ],
        '9-12': [
          {
            id: 'ecran-jaune',
            question: 'The yellow you see on a screen — what is it?',
            reponses: [
              { texte: 'Red and green lit together', icone: '🟡', correcte: true },
              { texte: 'A genuine yellow light', icone: '💡' },
              { texte: 'Yellow paint', icone: '🎨' },
            ],
            explication:
              'A screen has no yellow: this is additive mixing, and your eye blends the red and the green.',
          },
        ],
      },
    },
  },  {
    cardId: 'les-mots-de-passe',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'secret-long',
            question: 'Which secret word is the hardest to guess?',
            reponses: [
              { texte: 'Cat moon boat apple', icone: '🔑', correcte: true },
              { texte: 'Cat', icone: '🐱' },
            ],
            explication: 'The longer the secret, the harder it is to find.',
          },
        ],
        '6-8': [
          {
            id: 'essais-machine',
            question: 'How does someone find a password that is not theirs?',
            reponses: [
              { texte: 'By trying billions of possibilities', icone: '🔁', correcte: true },
              { texte: 'By thinking very hard', icone: '🤔' },
              { texte: 'By reading it off the screen', icone: '👀' },
            ],
            explication:
              'It is a machine doing the trying, very fast. Everything hangs on how many tries it needs.',
          },
        ],
        '9-12': [
          {
            id: 'longueur-vs-ruse',
            question: 'Which holds out better: “Tr0ub4dor&3” or four common words picked at random?',
            reponses: [
              { texte: 'The four words', icone: '📏', correcte: true },
              { texte: 'Tr0ub4dor&3, it is more complicated', icone: '🌀' },
              { texte: 'They are just as good as each other', icone: '⚖️' },
            ],
            explication:
              'Substitutions like “a” for “@” are built into the rules of cracking tools. Only length really multiplies the tries.',
          },
        ],
      },
    },
  },  {
    cardId: 'pourquoi-une-photo-devient-floue',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'photo-carres',
            question: 'If you make a photo much bigger, what do you see?',
            reponses: [
              { texte: 'Coloured squares', icone: '🟦', correcte: true },
              { texte: 'Hidden little details', icone: '🔍' },
            ],
            explication: 'The photo is made of little squares. Enlarge it and you end up seeing them.',
          },
        ],
        '6-8': [
          {
            id: 'ameliorer-photo',
            question: 'Can software make a blurry face sharp in a photo?',
            reponses: [
              { texte: 'No, that detail was never recorded', icone: '🚫', correcte: true },
              { texte: 'Yes, like in detective films', icone: '🎬' },
              { texte: 'Yes, if the computer is powerful enough', icone: '💻' },
            ],
            explication:
              'You cannot recover what was never captured: there is simply nothing there to recover.',
          },
        ],
        '9-12': [
          {
            id: 'ia-invente',
            question: 'An AI makes a blurry face sharp. What does the resulting image show?',
            reponses: [
              { texte: 'A plausible detail, manufactured', icone: '🎭', correcte: true },
              { texte: 'The real face, restored', icone: '🧑' },
              { texte: 'The average of the neighbouring pixels', icone: '➗' },
            ],
            explication:
              'The model invents a detail learnt from other images. The result is a hypothesis, never a proof.',
          },
        ],
      },
    },
  },  {
    cardId: 'la-navigation-privee',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'prive-cache',
            question: 'Does the “private” button make you invisible?',
            reponses: [
              { texte: 'No, not really', icone: '👀', correcte: true },
              { texte: 'Yes, completely', icone: '🫥' },
            ],
            explication: 'It only rubs out the traces on that one computer.',
          },
        ],
        '6-8': [
          {
            id: 'prive-perimetre',
            question: 'What does private browsing really hide?',
            reponses: [
              { texte: 'Your traces on the device you are using', icone: '💻', correcte: true },
              { texte: 'Your visit to the site you open', icone: '🌐' },
              { texte: 'Everything, from everybody', icone: '🫥' },
            ],
            explication:
              'It protects you from whoever uses the device after you, not from the network.',
          },
        ],
        '9-12': [
          {
            id: 'prive-qui-voit',
            question: 'In private browsing, who can still recognise you?',
            reponses: [
              { texte: 'The site, your internet provider and the network administrator', icone: '🛰️', correcte: true },
              { texte: 'Nobody, that is the whole point', icone: '🚫' },
              { texte: 'Only the sites where you have an account', icone: '🔑' },
            ],
            explication:
              'Its reach is strictly local: your IP address and browser fingerprint stay perfectly visible.',
          },
        ],
      },
    },
  },  {
    cardId: 'le-wifi',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'wifi-internet',
            question: 'Is Wi-Fi the same thing as the internet?',
            reponses: [
              { texte: 'No, it is just the last bit', icone: '📶', correcte: true },
              { texte: 'Yes, they are the same', icone: '🟰' },
            ],
            explication: 'Wi-Fi links your device to the box. The internet is everything that comes after.',
          },
        ],
        '6-8': [
          {
            id: 'wifi-ondes',
            question: 'What is Wi-Fi made of?',
            reponses: [
              { texte: 'Radio waves, like FM radio', icone: '📻', correcte: true },
              { texte: 'Light that we can see', icone: '💡' },
              { texte: 'Invisible wires', icone: '🧵' },
            ],
            explication:
              'They are waves from the same family as radio waves, give or take the frequency.',
          },
        ],
        '9-12': [
          {
            id: 'wifi-lenteur',
            question: 'The connection is crawling. What is the most likely culprit?',
            reponses: [
              { texte: 'The Wi-Fi, shared between every device', icone: '📶', correcte: true },
              { texte: 'The internet subscription', icone: '💶' },
              { texte: 'The site being visited', icone: '🌐' },
            ],
            explication:
              'Wi-Fi is a shared medium: the throughput is split between every transmitter within range, neighbours included.',
          },
        ],
      },
    },
  },
];
