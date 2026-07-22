import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « Les nombres ».
 *
 * Deux cartes distinguent le modèle mathématique de son approximation dans le
 * réel — symétrie et fractales. Les deux autres visent des intuitions
 * fausses tenaces : l'erreur du parieur, et la division par zéro prise pour
 * l'infini.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'la-symetrie',
    questions: {
      '3-5': [
        {
          id: 'papillon-ailes',
          question: 'Les deux ailes d’un papillon sont-elles exactement pareilles ?',
          reponses: [
            { texte: 'Presque, mais pas tout à fait', icone: '🦋', correcte: true },
            { texte: 'Oui, exactement identiques', icone: '🪞' },
          ],
          explication: 'De très près, les deux côtés ne sont jamais parfaitement pareils.',
        },
      ],
      '6-8': [
        {
          id: 'flocon-axes',
          question: 'Combien d’axes de symétrie a un flocon de neige ?',
          reponses: [
            { texte: 'Six', icone: '❄️', correcte: true },
            { texte: 'Un seul', icone: '1️⃣' },
            { texte: 'Une infinité', icone: '♾️' },
          ],
          explication:
            'Six, à cause de la façon dont les molécules d’eau s’assemblent en gelant.',
        },
      ],
      '9-12': [
        {
          id: 'symetrie-rotation',
          question: 'Une étoile à cinq branches reste identique après quelle rotation ?',
          reponses: [
            { texte: 'Soixante-douze degrés', icone: '⭐', correcte: true },
            { texte: 'Quarante-cinq degrés', icone: '📐' },
            { texte: 'Cent quatre-vingts degrés', icone: '🔄' },
          ],
          explication:
            'Trois cent soixante divisé par cinq. C’est une symétrie de rotation, distincte de la symétrie axiale.',
        },
      ],
    },
  },
  {
    cardId: 'les-fractales',
    questions: {
      '3-5': [
        {
          id: 'fougere-parties',
          question: 'Sur une fougère, à quoi ressemble une petite feuille ?',
          reponses: [
            { texte: 'À la grande feuille entière', icone: '🌿', correcte: true },
            { texte: 'À rien de particulier', icone: '❓' },
          ],
          explication: 'Chaque partie ressemble au tout : c’est ça, une fractale.',
        },
      ],
      '6-8': [
        {
          id: 'poumons-surface',
          question: 'Pourquoi tes poumons utilisent-ils une forme fractale ?',
          reponses: [
            { texte: 'Pour offrir une énorme surface dans peu de place', icone: '🫁', correcte: true },
            { texte: 'Pour être plus jolis', icone: '🎨' },
            { texte: 'Pour peser moins lourd', icone: '🪶' },
          ],
          explication:
            'Leur surface d’échange est grande comme un terrain de tennis, repliée dans ta poitrine.',
        },
      ],
      '9-12': [
        {
          id: 'longueur-cote',
          question: 'Quelle est la longueur exacte d’une côte maritime ?',
          reponses: [
            { texte: 'Elle dépend de la finesse de la mesure', icone: '📏', correcte: true },
            { texte: 'Une valeur fixe, mesurable une fois pour toutes', icone: '📐' },
            { texte: 'Elle est infinie', icone: '♾️' },
          ],
          explication:
            'Plus la règle est fine, plus le résultat augmente : le littoral n’a pas de longueur unique.',
        },
      ],
    },
  },
  {
    cardId: 'le-hasard',
    questions: {
      '3-5': [
        {
          id: 'piece-memoire',
          question: 'Tu as eu pile cinq fois. La pièce s’en souvient-elle ?',
          reponses: [
            { texte: 'Non, pas du tout', icone: '🪙', correcte: true },
            { texte: 'Oui, alors face va sortir', icone: '🔮' },
          ],
          explication: 'À chaque lancer, pile et face ont la même chance.',
        },
      ],
      '6-8': [
        {
          id: 'erreur-parieur',
          question: 'Après cinq piles, quelle est la chance d’avoir face ?',
          reponses: [
            { texte: 'Une sur deux, comme toujours', icone: '⚖️', correcte: true },
            { texte: 'Plus grande, il faut compenser', icone: '📈' },
            { texte: 'Plus petite, la série continue', icone: '📉' },
          ],
          explication:
            'C’est l’erreur du parieur : chaque lancer est indépendant des précédents.',
        },
      ],
      '9-12': [
        {
          id: 'loi-grands-nombres',
          question: 'Que dit exactement la loi des grands nombres ?',
          reponses: [
            { texte: 'La fréquence relative converge vers la probabilité', icone: '📊', correcte: true },
            { texte: 'L’écart entre piles et faces finit par s’annuler', icone: '⚖️' },
            { texte: 'Le hasard corrige les séries passées', icone: '🔄' },
          ],
          explication:
            'C’est la fréquence qui converge, pas l’écart absolu, lequel a même tendance à croître. Le hasard ne se corrige pas, il se dilue.',
        },
      ],
    },
  },
  {
    cardId: 'linfini',
    questions: {
      '3-5': [
        {
          id: 'dernier-nombre',
          question: 'Existe-t-il un tout dernier nombre ?',
          reponses: [
            { texte: 'Non, on peut toujours ajouter un', icone: '♾️', correcte: true },
            { texte: 'Oui, le plus grand de tous', icone: '🔢' },
          ],
          explication: 'Quel que soit le nombre que tu dis, on peut toujours faire plus grand.',
        },
      ],
      '6-8': [
        {
          id: 'pairs-entiers',
          question: 'Y a-t-il autant de nombres pairs que de nombres entiers ?',
          reponses: [
            { texte: 'Oui, on peut les associer un à un', icone: '🔗', correcte: true },
            { texte: 'Non, deux fois moins', icone: '➗' },
            { texte: 'Non, une infinité de moins', icone: '♾️' },
          ],
          explication:
            'À chaque entier on associe son double, sans en oublier aucun : les deux ensembles ont la même taille.',
        },
      ],
      '9-12': [
        {
          id: 'infinis-tailles',
          question: 'Tous les infinis ont-ils la même taille ?',
          reponses: [
            { texte: 'Non, celui des réels dépasse celui des entiers', icone: '📈', correcte: true },
            { texte: 'Oui, l’infini est l’infini', icone: '♾️' },
            { texte: 'La question n’a pas de sens', icone: '❓' },
          ],
          explication:
            'L’argument diagonal de Cantor le démontre : aucune liste ne peut contenir tous les nombres à virgule entre zéro et un.',
        },
      ],
    },
  },
  {
    cardId: 'le-zero',
    questions: {
      '3-5': [
        {
          id: 'zero-utile',
          question: 'À quoi sert le zéro dans le nombre cent ?',
          reponses: [
            { texte: 'À montrer qu’il n’y a rien à cette place', icone: '0️⃣', correcte: true },
            { texte: 'À rien, c’est décoratif', icone: '🎀' },
          ],
          explication: 'Sans le zéro, on ne pourrait pas écrire cent.',
        },
      ],
      '6-8': [
        {
          id: 'diviser-par-zero',
          question: 'Combien font douze divisé par zéro ?',
          reponses: [
            { texte: 'Il n’y a pas de réponse', icone: '🚫', correcte: true },
            { texte: 'Zéro', icone: '0️⃣' },
            { texte: 'L’infini', icone: '♾️' },
          ],
          explication:
            'Avec des paquets de zéro, on n’atteint jamais douze : la question n’a tout simplement pas de réponse.',
        },
      ],
      '9-12': [
        {
          id: 'zero-histoire',
          question: 'Le zéro comme nombre à part entière est apparu…',
          reponses: [
            { texte: 'En Inde, vers le septième siècle', icone: '🇮🇳', correcte: true },
            { texte: 'Chez les Romains', icone: '🏛️' },
            { texte: 'En Europe, au Moyen Âge', icone: '🏰' },
          ],
          explication:
            'Brahmagupta en énonce les règles en 628. L’Europe le rejettera longtemps avant de l’adopter via les mathématiciens arabes.',
        },
      ],
    },
  },
  {
    cardId: 'les-grands-nombres',
    questions: {
      '3-5': [
        {
          id: 'milliard-plus',
          question: 'Un milliard, c’est plus grand qu’un million ?',
          reponses: [
            { texte: 'Oui, beaucoup plus', icone: '📈', correcte: true },
            { texte: 'Non, c’est pareil', icone: '🟰' },
          ],
          explication: 'Un milliard, c’est mille fois plus grand qu’un million !',
        },
      ],
      '6-8': [
        {
          id: 'million-secondes',
          question: 'Un million de secondes, ça fait à peu près…',
          reponses: [
            { texte: 'Onze jours', icone: '📅', correcte: true },
            { texte: 'Trente-deux ans', icone: '🎂' },
            { texte: 'Une heure', icone: '⏰' },
          ],
          explication: 'Onze jours pour un million ; mais trente-deux ans pour un milliard.',
        },
      ],
      '9-12': [
        {
          id: 'facteur-mille',
          question: 'De combien un milliard dépasse-t-il un million ?',
          reponses: [
            { texte: 'D’un facteur mille', icone: '🔢', correcte: true },
            { texte: 'D’un facteur dix', icone: '🔟' },
            { texte: 'D’un peu seulement', icone: '➕' },
          ],
          explication:
            'Trois ordres de grandeur d’écart : confondre les deux fausse un budget par mille.',
        },
      ],
    },
  },  {
    cardId: 'le-tour-et-la-surface',
    questions: {
      '3-5': [
        {
          id: 'enclos-forme',
          question: 'Même ficelle : quel enclos tient le plus de moutons ?',
          reponses: [
            { texte: 'Un enclos bien rond', icone: '⭕', correcte: true },
            { texte: 'Un enclos long et tout fin', icone: '➖' },
          ],
          explication: 'Plus la forme est ramassée, plus il y a de place à l’intérieur.',
        },
      ],
      '6-8': [
        {
          id: 'meme-tour',
          question: 'Deux champs ont la même longueur de clôture. Ont-ils la même surface ?',
          reponses: [
            { texte: 'Pas forcément', icone: '🤷', correcte: true },
            { texte: 'Oui, toujours', icone: '✅' },
            { texte: 'Oui, si les deux sont des rectangles', icone: '🟦' },
          ],
          explication:
            'Avec vingt mètres de tour : neuf mètres carrés en rectangle allongé, vingt-cinq en carré.',
        },
      ],
      '9-12': [
        {
          id: 'isoperimetrique',
          question: 'À périmètre fixé, quelle forme enferme la plus grande aire ?',
          reponses: [
            { texte: 'Le disque', icone: '⭕', correcte: true },
            { texte: 'Le carré', icone: '⬜' },
            { texte: 'Le rectangle le plus allongé', icone: '▭' },
          ],
          explication:
            'C’est le problème isopérimétrique. Le disque bat toutes les autres formes — d’où la bulle de savon ronde.',
        },
      ],
    },
  },  {
    cardId: 'les-pourcentages',
    questions: {
      '3-5': [
        {
          id: 'moitie-de-quoi',
          question: 'La moitié d’un grand gâteau et la moitié d’un petit, c’est pareil ?',
          reponses: [
            { texte: 'Non, ça dépend du gâteau', icone: '🍰', correcte: true },
            { texte: 'Oui, c’est la même chose', icone: '🟰' },
          ],
          explication: 'Une part n’a de sens que si on sait de quoi elle est la part.',
        },
      ],
      '6-8': [
        {
          id: 'baisse-puis-hausse',
          question: 'Un prix baisse de 50 %, puis remonte de 50 %. Que vaut-il ?',
          reponses: [
            { texte: 'Les trois quarts du prix de départ', icone: '📉', correcte: true },
            { texte: 'Exactement le prix de départ', icone: '🟰' },
            { texte: 'Un quart de plus qu’au départ', icone: '📈' },
          ],
          explication:
            'La hausse s’applique au prix déjà réduit : cent devient cinquante, puis soixante-quinze.',
        },
      ],
      '9-12': [
        {
          id: 'points-pourcentage',
          question: 'Un taux passe de 2 % à 3 %. De combien a-t-il augmenté ?',
          reponses: [
            { texte: 'D’un point, soit de 50 %', icone: '↗️', correcte: true },
            { texte: 'De 1 % seulement', icone: '1️⃣' },
            { texte: 'De 150 %', icone: '📈' },
          ],
          explication:
            'Un point de pourcentage n’est pas un pour cent. Les deux formulations sont exactes — on retient souvent celle qui impressionne.',
        },
      ],
    },
  },  {
    cardId: 'la-moyenne',
    questions: {
      '3-5': [
        {
          id: 'moyenne-geant',
          question: 'Un géant entre dans la classe. La taille moyenne…',
          reponses: [
            { texte: 'grandit d’un coup', icone: '📈', correcte: true },
            { texte: 'ne bouge pas', icone: '🟰' },
          ],
          explication: 'Une seule valeur très différente suffit à déplacer la moyenne.',
        },
      ],
      '6-8': [
        {
          id: 'moyenne-mediane',
          question: 'Dix personnes ont 20 €, une a 1000 €. Que vaut la médiane ?',
          reponses: [
            { texte: '20 €', icone: '🎯', correcte: true },
            { texte: '109 €', icone: '📊' },
            { texte: '1000 €', icone: '💰' },
          ],
          explication:
            'La médiane est la valeur du milieu : elle résiste aux extrêmes, contrairement à la moyenne.',
        },
      ],
      '9-12': [
        {
          id: 'revenu-median',
          question: 'Pourquoi le revenu moyen dépasse-t-il toujours le revenu médian ?',
          reponses: [
            { texte: 'Parce que la distribution est asymétrique vers le haut', icone: '📈', correcte: true },
            { texte: 'Parce qu’on compte mal les bas revenus', icone: '📉' },
            { texte: 'C’est une coïncidence statistique', icone: '🎲' },
          ],
          explication:
            'Les très hauts revenus tirent la moyenne vers le haut sans déplacer la médiane d’un centime.',
        },
      ],
    },
  },  {
    cardId: 'le-paradoxe-des-anniversaires',
    questions: {
      '3-5': [
        {
          id: 'deux-anniversaires',
          question: 'Deux enfants de ta classe, même anniversaire ?',
          reponses: [
            { texte: 'Ça arrive souvent', icone: '🎂', correcte: true },
            { texte: 'C’est presque impossible', icone: '🚫' },
          ],
          explication: 'Il faut comparer tout le monde deux par deux : ça fait beaucoup d’occasions.',
        },
      ],
      '6-8': [
        {
          id: 'combien-personnes',
          question: 'Combien faut-il de personnes pour une chance sur deux ?',
          reponses: [
            { texte: 'Vingt-trois', icone: '🎯', correcte: true },
            { texte: 'Cent quatre-vingts', icone: '💯' },
            { texte: 'Trois cent soixante-cinq', icone: '📅' },
          ],
          explication:
            'Vingt-trois personnes forment deux cent cinquante-trois paires : autant d’occasions de coïncider.',
        },
      ],
      '9-12': [
        {
          id: 'paires-carre',
          question: 'Pourquoi vingt-trois personnes suffisent-elles ?',
          reponses: [
            { texte: 'Le nombre de paires croît comme le carré de l’effectif', icone: '📐', correcte: true },
            { texte: 'Parce que certains jours sont plus fréquents', icone: '📅' },
            { texte: 'Parce que l’année ne fait que 365 jours', icone: '🗓️' },
          ],
          explication:
            'Deux cent cinquante-trois paires à vingt-trois personnes, mille deux cent vingt-cinq à cinquante. L’intuition, elle, raisonne linéairement.',
        },
      ],
    },
  },
];
