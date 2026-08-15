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
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'papillon-ailes',
            question: 'Are a butterfly’s two wings exactly the same?',
            reponses: [
              { texte: 'Almost, but not quite', icone: '🦋', correcte: true },
              { texte: 'Yes, exactly identical', icone: '🪞' },
            ],
            explication: 'Very close up, the two sides are never perfectly the same.',
          },
        ],
        '6-8': [
          {
            id: 'flocon-axes',
            question: 'How many axes of symmetry does a snowflake have?',
            reponses: [
              { texte: 'Six', icone: '❄️', correcte: true },
              { texte: 'Only one', icone: '1️⃣' },
              { texte: 'An infinite number', icone: '♾️' },
            ],
            explication:
              'Six, because of the way water molecules lock together as they freeze.',
          },
        ],
        '9-12': [
          {
            id: 'symetrie-rotation',
            question: 'A five-pointed star looks unchanged after a turn of how much?',
            reponses: [
              { texte: 'Seventy-two degrees', icone: '⭐', correcte: true },
              { texte: 'Forty-five degrees', icone: '📐' },
              { texte: 'One hundred and eighty degrees', icone: '🔄' },
            ],
            explication:
              'Three hundred and sixty divided by five. That is rotational symmetry, quite distinct from reflection symmetry.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-fractales',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'fougere-parties',
            question: 'On a fern, what does one little leaf look like?',
            reponses: [
              { texte: 'The whole big leaf', icone: '🌿', correcte: true },
              { texte: 'Nothing in particular', icone: '❓' },
            ],
            explication: 'Every part looks like the whole: that is what a fractal is.',
          },
        ],
        '6-8': [
          {
            id: 'poumons-surface',
            question: 'Why do your lungs use a fractal shape?',
            reponses: [
              { texte: 'To offer a huge surface in very little space', icone: '🫁', correcte: true },
              { texte: 'To look prettier', icone: '🎨' },
              { texte: 'To weigh less', icone: '🪶' },
            ],
            explication:
              'Their exchange surface is as big as a tennis court, folded up inside your chest.',
          },
        ],
        '9-12': [
          {
            id: 'longueur-cote',
            question: 'What is the exact length of a coastline?',
            reponses: [
              { texte: 'It depends on how fine the measurement is', icone: '📏', correcte: true },
              { texte: 'A fixed value, measurable once and for all', icone: '📐' },
              { texte: 'It is infinite', icone: '♾️' },
            ],
            explication:
              'The finer the ruler, the larger the result: a coastline has no single length.',
          },
        ],
      },
    },
  },
  {
    cardId: 'le-hasard',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'piece-memoire',
            question: 'You got heads five times. Does the coin remember?',
            reponses: [
              { texte: 'No, not at all', icone: '🪙', correcte: true },
              { texte: 'Yes, so tails will come up', icone: '🔮' },
            ],
            explication: 'On every toss, heads and tails have the same chance.',
          },
        ],
        '6-8': [
          {
            id: 'erreur-parieur',
            question: 'After five heads, what is the chance of getting tails?',
            reponses: [
              { texte: 'One in two, as always', icone: '⚖️', correcte: true },
              { texte: 'Bigger, it has to even out', icone: '📈' },
              { texte: 'Smaller, the run carries on', icone: '📉' },
            ],
            explication:
              'That is the gambler’s fallacy: every toss is independent of the ones before.',
          },
        ],
        '9-12': [
          {
            id: 'loi-grands-nombres',
            question: 'What exactly does the law of large numbers say?',
            reponses: [
              { texte: 'The relative frequency converges towards the probability', icone: '📊', correcte: true },
              { texte: 'The gap between heads and tails ends up cancelling out', icone: '⚖️' },
              { texte: 'Chance corrects the runs that came before', icone: '🔄' },
            ],
            explication:
              'It is the frequency that converges, not the absolute gap, which actually tends to grow. Chance does not correct itself, it dilutes itself.',
          },
        ],
      },
    },
  },
  {
    cardId: 'linfini',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'dernier-nombre',
            question: 'Is there a very last number?',
            reponses: [
              { texte: 'No, you can always add one', icone: '♾️', correcte: true },
              { texte: 'Yes, the biggest one of all', icone: '🔢' },
            ],
            explication: 'Whatever number you say, you can always go bigger.',
          },
        ],
        '6-8': [
          {
            id: 'pairs-entiers',
            question: 'Are there as many even numbers as whole numbers?',
            reponses: [
              { texte: 'Yes, you can match them one to one', icone: '🔗', correcte: true },
              { texte: 'No, half as many', icone: '➗' },
              { texte: 'No, infinitely fewer', icone: '♾️' },
            ],
            explication:
              'Each whole number is matched with its double, missing none: the two sets are the same size.',
          },
        ],
        '9-12': [
          {
            id: 'infinis-tailles',
            question: 'Are all infinities the same size?',
            reponses: [
              { texte: 'No, the reals outnumber the whole numbers', icone: '📈', correcte: true },
              { texte: 'Yes, infinity is infinity', icone: '♾️' },
              { texte: 'The question makes no sense', icone: '❓' },
            ],
            explication:
              'Cantor’s diagonal argument proves it: no list can contain every decimal number between zero and one.',
          },
        ],
      },
    },
  },
  {
    cardId: 'le-zero',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'zero-utile',
            question: 'What is the zero for in the number one hundred?',
            reponses: [
              { texte: 'To show there is nothing in that place', icone: '0️⃣', correcte: true },
              { texte: 'Nothing, it is just for decoration', icone: '🎀' },
            ],
            explication: 'Without the zero, we could not write a hundred.',
          },
        ],
        '6-8': [
          {
            id: 'diviser-par-zero',
            question: 'What is twelve divided by zero?',
            reponses: [
              { texte: 'There is no answer', icone: '🚫', correcte: true },
              { texte: 'Zero', icone: '0️⃣' },
              { texte: 'Infinity', icone: '♾️' },
            ],
            explication:
              'With packs of zero, you never reach twelve: the question simply has no answer.',
          },
        ],
        '9-12': [
          {
            id: 'zero-histoire',
            question: 'Zero as a number in its own right appeared…',
            reponses: [
              { texte: 'In India, around the seventh century', icone: '🇮🇳', correcte: true },
              { texte: 'With the Romans', icone: '🏛️' },
              { texte: 'In Europe, in the Middle Ages', icone: '🏰' },
            ],
            explication:
              'Brahmagupta set out its rules in 628. Europe rejected it for a long time before adopting it through Arab mathematicians.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-grands-nombres',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'milliard-plus',
            question: 'Is a billion bigger than a million?',
            reponses: [
              { texte: 'Yes, much bigger', icone: '📈', correcte: true },
              { texte: 'No, it is the same', icone: '🟰' },
            ],
            explication: 'A billion is a thousand times bigger than a million!',
          },
        ],
        '6-8': [
          {
            id: 'million-secondes',
            question: 'A million seconds is roughly…',
            reponses: [
              { texte: 'Eleven days', icone: '📅', correcte: true },
              { texte: 'Thirty-two years', icone: '🎂' },
              { texte: 'One hour', icone: '⏰' },
            ],
            explication: 'Eleven days for a million; but thirty-two years for a billion.',
          },
        ],
        '9-12': [
          {
            id: 'facteur-mille',
            question: 'By how much does a billion exceed a million?',
            reponses: [
              { texte: 'By a factor of a thousand', icone: '🔢', correcte: true },
              { texte: 'By a factor of ten', icone: '🔟' },
              { texte: 'By only a little', icone: '➕' },
            ],
            explication:
              'Three orders of magnitude apart: confusing the two throws a budget out by a thousand.',
          },
        ],
      },
    },
  },  {
    cardId: 'le-tour-et-la-surface',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'enclos-forme',
            question: 'Same string: which pen holds the most sheep?',
            reponses: [
              { texte: 'A nice round pen', icone: '⭕', correcte: true },
              { texte: 'A long, very thin pen', icone: '➖' },
            ],
            explication: 'The more compact the shape, the more room there is inside.',
          },
        ],
        '6-8': [
          {
            id: 'meme-tour',
            question: 'Two fields have the same length of fence. Do they have the same area?',
            reponses: [
              { texte: 'Not necessarily', icone: '🤷', correcte: true },
              { texte: 'Yes, always', icone: '✅' },
              { texte: 'Yes, if both are rectangles', icone: '🟦' },
            ],
            explication:
              'With twenty metres of fence: nine square metres as a long rectangle, twenty-five as a square.',
          },
        ],
        '9-12': [
          {
            id: 'isoperimetrique',
            question: 'For a fixed perimeter, which shape encloses the largest area?',
            reponses: [
              { texte: 'The disc', icone: '⭕', correcte: true },
              { texte: 'The square', icone: '⬜' },
              { texte: 'The longest, thinnest rectangle', icone: '▭' },
            ],
            explication:
              'This is the isoperimetric problem. The disc beats every other shape — hence the round soap bubble.',
          },
        ],
      },
    },
  },  {
    cardId: 'les-pourcentages',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'moitie-de-quoi',
            question: 'Is half a big cake the same as half a small one?',
            reponses: [
              { texte: 'No, it depends on the cake', icone: '🍰', correcte: true },
              { texte: 'Yes, it is the same thing', icone: '🟰' },
            ],
            explication: 'A share only means something if you know what it is a share of.',
          },
        ],
        '6-8': [
          {
            id: 'baisse-puis-hausse',
            question: 'A price falls by 50 %, then rises by 50 %. What is it worth?',
            reponses: [
              { texte: 'Three quarters of the starting price', icone: '📉', correcte: true },
              { texte: 'Exactly the starting price', icone: '🟰' },
              { texte: 'A quarter more than at the start', icone: '📈' },
            ],
            explication:
              'The rise applies to the price that has already come down: a hundred becomes fifty, then seventy-five.',
          },
        ],
        '9-12': [
          {
            id: 'points-pourcentage',
            question: 'A rate goes from 2 % to 3 %. By how much has it risen?',
            reponses: [
              { texte: 'By one point, that is by 50 %', icone: '↗️', correcte: true },
              { texte: 'By 1 % only', icone: '1️⃣' },
              { texte: 'By 150 %', icone: '📈' },
            ],
            explication:
              'A percentage point is not a per cent. Both statements are exact — people usually remember the one that impresses more.',
          },
        ],
      },
    },
  },  {
    cardId: 'la-moyenne',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'moyenne-geant',
            question: 'A giant walks into the class. The average height…',
            reponses: [
              { texte: 'jumps up all at once', icone: '📈', correcte: true },
              { texte: 'does not move', icone: '🟰' },
            ],
            explication: 'One single very different value is enough to shift the average.',
          },
        ],
        '6-8': [
          {
            id: 'moyenne-mediane',
            question: 'Ten people have 20 €, one has 1000 €. What is the median?',
            reponses: [
              { texte: '20 €', icone: '🎯', correcte: true },
              { texte: '109 €', icone: '📊' },
              { texte: '1000 €', icone: '💰' },
            ],
            explication:
              'The median is the middle value: it resists extremes, unlike the average.',
          },
        ],
        '9-12': [
          {
            id: 'revenu-median',
            question: 'Why is the mean income always higher than the median income?',
            reponses: [
              { texte: 'Because the distribution is skewed towards the top', icone: '📈', correcte: true },
              { texte: 'Because low incomes are badly counted', icone: '📉' },
              { texte: 'It is a statistical coincidence', icone: '🎲' },
            ],
            explication:
              'Very high incomes pull the mean upwards without moving the median by a single penny.',
          },
        ],
      },
    },
  },  {
    cardId: 'le-paradoxe-des-anniversaires',
    questions: {
      fr: {
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
            question: 'Dans un groupe, combien faut-il de personnes pour avoir une chance sur deux que deux d’entre elles aient le même anniversaire ?',
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
            question: 'Pourquoi, dans un groupe de vingt-trois personnes, deux ont-elles souvent le même anniversaire ?',
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
      en: {
        '3-5': [
          {
            id: 'deux-anniversaires',
            question: 'Two children in your class, the same birthday?',
            reponses: [
              { texte: 'It happens quite often', icone: '🎂', correcte: true },
              { texte: 'It is almost impossible', icone: '🚫' },
            ],
            explication: 'You have to compare everybody two by two: that makes a lot of chances.',
          },
        ],
        '6-8': [
          {
            id: 'combien-personnes',
            question: 'In a group, how many people do you need for a one in two chance that two of them have the same birthday?',
            reponses: [
              { texte: 'Twenty-three', icone: '🎯', correcte: true },
              { texte: 'One hundred and eighty', icone: '💯' },
              { texte: 'Three hundred and sixty-five', icone: '📅' },
            ],
            explication:
              'Twenty-three people form two hundred and fifty-three pairs: that many chances to coincide.',
          },
        ],
        '9-12': [
          {
            id: 'paires-carre',
            question: 'Why do two people in a group of twenty-three often have the same birthday?',
            reponses: [
              { texte: 'The number of pairs grows as the square of the group size', icone: '📐', correcte: true },
              { texte: 'Because some days of the year are more common', icone: '📅' },
              { texte: 'Because the year is only 365 days long', icone: '🗓️' },
            ],
            explication:
              'Two hundred and fifty-three pairs at twenty-three people, one thousand two hundred and twenty-five at fifty. Our intuition, though, reasons linearly.',
          },
        ],
      },
    },
  },
];
