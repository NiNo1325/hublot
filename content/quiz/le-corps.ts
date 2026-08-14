import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « Le corps ».
 *
 * Idées reçues visées : la chair de poule qui réchaufferait vraiment, le cœur
 * qui s’arrêterait pendant un éternuement, les larmes réservées à la
 * tristesse, la transpiration jugée sale et inutile, les vrais jumeaux aux
 * empreintes identiques, la douleur jugée inutile, le muscle qui « pousserait »
 * pour tendre le bras, l’équilibre géré par les seuls yeux, le second œil pris
 * pour une simple roue de secours, la dent de lait qui tomberait parce
 * qu’abîmée.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'la-chair-de-poule',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'refroidit-vraiment',
            question: 'La chair de poule, ça te réchauffe vraiment ?',
            reponses: [
              { texte: 'Non, presque pas', icone: '🥶', correcte: true },
              { texte: 'Oui, beaucoup', icone: '🔥' },
            ],
            explication:
              'Chez toi, elle ne réchauffe presque pas : ce sont tes poils, trop courts, qui ne piègent pas d’air chaud.',
          },
        ],
        '6-8': [
          {
            id: 'muscles-dressent-poils',
            question: 'À quoi servent les petits muscles sous ta peau quand tu as froid ?',
            reponses: [
              { texte: 'Ils dressent les poils', icone: '🥶', correcte: true },
              { texte: 'Ils réchauffent le sang', icone: '🩸' },
              { texte: 'Ils font trembler les dents', icone: '🦷' },
            ],
            explication:
              'Ils tirent sur chaque poil pour le dresser. Chez les animaux bien poilus, ça isole du froid ; chez toi, c’est surtout un souvenir.',
          },
        ],
        '9-12': [
          {
            id: 'poils-trop-courts',
            question: 'Pourquoi la chair de poule ne nous réchauffe-t-elle presque pas ?',
            reponses: [
              { texte: 'Nos poils sont trop courts et trop rares', icone: '🥶', correcte: true },
              { texte: 'Nos muscles arrecteurs sont trop faibles', icone: '💪' },
              { texte: 'Le froid empêche les poils de se dresser', icone: '❄️' },
            ],
            explication:
              'Chez un animal à fourrure épaisse, les poils dressés emprisonnent une couche d’air isolante. Nos poils, trop courts, ne créent pas cet effet.',
          },
        ],
      },
    },
  },
  {
    cardId: 'pourquoi-on-eternue',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'coeur-continue',
            question: 'Quand tu éternues, ton cœur s’arrête-t-il ?',
            reponses: [
              { texte: 'Non, il continue de battre', icone: '❤️', correcte: true },
              { texte: 'Oui, un tout petit peu', icone: '🛑' },
            ],
            explication: 'Ton cœur continue de battre normalement, même pendant un éternuement.',
          },
        ],
        '6-8': [
          {
            id: 'nez-alerte-corps',
            question: 'Que fait ton corps quand une poussière chatouille ton nez ?',
            reponses: [
              { texte: 'Il expulse l’air très fort pour la chasser', icone: '🤧', correcte: true },
              { texte: 'Il arrête le cœur un instant', icone: '🛑' },
              { texte: 'Il tousse pour se calmer', icone: '😮' },
            ],
            explication:
              'Ton nez alerte ton cerveau, qui commande une expulsion d’air très puissante pour chasser l’intrus. Le cœur, lui, continue de battre sans s’arrêter.',
          },
        ],
        '9-12': [
          {
            id: 'vitesse-eternuement',
            question: 'Que se passe-t-il vraiment dans ton corps pendant un éternuement ?',
            reponses: [
              { texte: 'L’air sort très vite, le cœur continue de battre', icone: '💨', correcte: true },
              { texte: 'Le cœur s’arrête une fraction de seconde', icone: '🛑' },
              { texte: 'L’air sort aussi vite qu’un avion de chasse', icone: '✈️' },
            ],
            explication:
              'L’air peut sortir à plus de cent cinquante kilomètres par heure, mais jamais aussi vite qu’un avion. Et le cœur continue de battre normalement : c’est une idée reçue tenace mais fausse.',
          },
        ],
      },
    },
  },
  {
    cardId: 'a-quoi-servent-les-larmes',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'pleure-pas-que-triste',
            question: 'Pleure-t-on seulement quand on est triste ?',
            reponses: [
              { texte: 'Non, aussi de joie ou de colère', icone: '😊', correcte: true },
              { texte: 'Oui, seulement si on est triste', icone: '😢' },
            ],
            explication: 'Une très forte émotion, même joyeuse, peut aussi faire couler des larmes.',
          },
        ],
        '6-8': [
          {
            id: 'larmes-en-continu',
            question: 'Pourquoi tes yeux fabriquent-ils des larmes même sans pleurer ?',
            reponses: [
              { texte: 'Pour nettoyer et protéger l’œil en continu', icone: '💧', correcte: true },
              { texte: 'Seulement pour montrer qu’on est triste', icone: '😢' },
              { texte: 'Seulement quand un cil te gêne', icone: '👁️' },
            ],
            explication:
              'Tes yeux produisent des larmes en permanence pour rester humides et propres. Un cil ou une émotion forte en font juste couler davantage.',
          },
        ],
        '9-12': [
          {
            id: 'larmes-causes',
            question: 'Quelles situations font couler beaucoup de larmes ?',
            reponses: [
              {
                texte: 'Une irritation ou une émotion forte, triste ou joyeuse',
                icone: '💧',
                correcte: true,
              },
              { texte: 'Seulement la tristesse', icone: '😢' },
              { texte: 'Seulement la poussière dans l’œil', icone: '🌬️' },
            ],
            explication:
              'L’irritation déclenche un réflexe de nettoyage, l’émotion un circuit différent. Dans les deux cas, joie ou tristesse peuvent faire pleurer.',
          },
        ],
      },
    },
  },
  {
    cardId: 'la-peau-notre-bouclier',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'transpirer-utile',
            question: 'Transpirer, c’est sale et ça ne sert à rien ?',
            reponses: [
              { texte: 'Non, ça rafraîchit le corps', icone: '💦', correcte: true },
              { texte: 'Oui, ça ne sert à rien', icone: '🚫' },
            ],
            explication: 'La sueur s’envole dans l’air et emporte un peu de chaleur : ça te rafraîchit.',
          },
        ],
        '6-8': [
          {
            id: 'role-transpiration',
            question: 'À quoi sert vraiment la transpiration ?',
            reponses: [
              { texte: 'À refroidir le corps quand il a chaud', icone: '💦', correcte: true },
              { texte: 'À rien, c’est juste sale', icone: '🚫' },
              { texte: 'À nourrir la peau', icone: '🧴' },
            ],
            explication:
              'En s’évaporant, la sueur absorbe de la chaleur et refroidit la peau : c’est ta climatisation naturelle.',
          },
        ],
        '9-12': [
          {
            id: 'evaporation-refroidit',
            question: 'Pourquoi la sueur qui s’évapore refroidit-elle la peau ?',
            reponses: [
              { texte: 'L’évaporation consomme de la chaleur', icone: '💦', correcte: true },
              { texte: 'La sueur est naturellement froide', icone: '❄️' },
              { texte: 'Elle nettoie la peau en profondeur', icone: '🧼' },
            ],
            explication:
              'Passer de liquide à vapeur demande de l’énergie, puisée dans la chaleur de la peau, qui se refroidit en conséquence.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-empreintes-digitales',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'jumeaux-empreintes',
            question: 'Des jumeaux ont-ils les mêmes empreintes ?',
            reponses: [
              { texte: 'Non, chacun a son propre dessin', icone: '👆', correcte: true },
              { texte: 'Oui, exactement les mêmes', icone: '👯' },
            ],
            explication: 'Même de vrais jumeaux ont des empreintes différentes : chaque dessin est unique.',
          },
        ],
        '6-8': [
          {
            id: 'pourquoi-jumeaux-differents',
            question: 'Pourquoi deux vrais jumeaux n’ont-ils pas les mêmes empreintes ?',
            reponses: [
              { texte: 'De petits hasards de croissance changent le dessin', icone: '🎲', correcte: true },
              { texte: 'Ils ont en fait les mêmes empreintes', icone: '👯' },
              { texte: 'Un jumeau a toujours de plus grandes mains', icone: '✋' },
            ],
            explication:
              'Le motif se forme avant la naissance selon de petits hasards locaux : même avec le même patrimoine génétique, chaque dessin reste unique.',
          },
        ],
        '9-12': [
          {
            id: 'empreintes-pas-que-genes',
            question: 'Pourquoi les empreintes ne sont-elles pas déterminées uniquement par les gènes ?',
            reponses: [
              {
                texte: 'De petits hasards de développement influencent le dessin',
                icone: '🎲',
                correcte: true,
              },
              { texte: 'Elles sont entièrement dues aux gènes', icone: '🧬' },
              { texte: 'Elles changent tout au long de la vie', icone: '🔄' },
            ],
            explication:
              'Le relief se forme in utero sous l’effet de hasards locaux de croissance, pas seulement des gènes : deux vrais jumeaux au patrimoine identique ont donc des empreintes différentes.',
          },
        ],
      },
    },
  },
  {
    cardId: 'pourquoi-on-a-mal',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'douleur-protege',
            question: 'La douleur, c’est juste méchant et inutile ?',
            reponses: [
              { texte: 'Non, elle te protège du danger', icone: '🤕', correcte: true },
              { texte: 'Oui, elle ne sert à rien', icone: '🚫' },
            ],
            explication:
              'La douleur t’avertit d’un danger et fait retirer ta main toute seule : elle te protège.',
          },
        ],
        '6-8': [
          {
            id: 'role-douleur',
            question: 'À quoi sert la sensation de douleur ?',
            reponses: [
              { texte: 'À prévenir d’un danger pour te protéger', icone: '🚨', correcte: true },
              { texte: 'À rien, c’est juste désagréable', icone: '🚫' },
              { texte: 'À montrer que tu es fragile', icone: '😣' },
            ],
            explication:
              'Des capteurs repèrent le danger et envoient un message au cerveau, qui déclenche la douleur et parfois un geste réflexe pour te protéger.',
          },
        ],
        '9-12': [
          {
            id: 'reflexe-avant-douleur',
            question: 'Pourquoi retires-tu la main d’une plaque brûlante avant même de ressentir la douleur ?',
            reponses: [
              {
                texte: 'Un réflexe agit avant que le message atteigne le cerveau',
                icone: '⚡',
                correcte: true,
              },
              { texte: 'La douleur n’existe pas vraiment', icone: '🚫' },
              { texte: 'Le cerveau réagit plus vite que la main', icone: '🧠' },
            ],
            explication:
              'Le réflexe de retrait passe par la moelle épinière, plus rapide qu’un aller-retour jusqu’au cerveau. La douleur, ressentie juste après, protège de blessures plus graves.',
          },
        ],
      },
    },
  },
  {
    cardId: 'comment-les-muscles-bougent',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'muscle-tire-pas-pousse',
            question: 'Un muscle peut-il pousser pour tendre ton bras ?',
            reponses: [
              { texte: 'Non, un muscle sait seulement tirer', icone: '💪', correcte: true },
              { texte: 'Oui, il pousse très fort', icone: '👊' },
            ],
            explication:
              'Un muscle ne fait que tirer. Pour tendre le bras, c’est un autre muscle qui tire de l’autre côté.',
          },
        ],
        '6-8': [
          {
            id: 'tendre-le-bras',
            question: 'Comment ton bras se tend-il après avoir été plié ?',
            reponses: [
              { texte: 'Un autre muscle se contracte et tire à l’opposé', icone: '💪', correcte: true },
              { texte: 'Le même muscle pousse dans l’autre sens', icone: '👊' },
              { texte: 'L’os se redresse tout seul', icone: '🦴' },
            ],
            explication:
              'Un muscle ne peut que tirer, jamais pousser. Il faut donc un deuxième muscle, de l’autre côté, pour retendre le bras.',
          },
        ],
        '9-12': [
          {
            id: 'muscles-en-paires',
            question: 'Pourquoi les muscles du bras fonctionnent-ils toujours par paires ?',
            reponses: [
              {
                texte: 'Un muscle ne peut que se contracter et tirer, jamais pousser',
                icone: '💪',
                correcte: true,
              },
              { texte: 'Un seul muscle suffit à plier et tendre le bras', icone: '1️⃣' },
              { texte: 'C’est pour répartir la fatigue entre les muscles', icone: '😮‍💨' },
            ],
            explication:
              'Comme un muscle contracté ne peut que tirer, il faut un muscle opposé, comme le triceps face au biceps, pour inverser le mouvement.',
          },
        ],
      },
    },
  },
  {
    cardId: 'comment-on-tient-debout',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'equilibre-oreille',
            question: 'Garde-t-on l’équilibre seulement avec les yeux ?',
            reponses: [
              { texte: 'Non, aussi avec un capteur dans l’oreille', icone: '👂', correcte: true },
              { texte: 'Oui, seulement avec les yeux', icone: '👀' },
            ],
            explication: 'Un petit capteur au fond de ton oreille aide aussi ton corps à ne pas tomber.',
          },
        ],
        '6-8': [
          {
            id: 'liquide-oreille-interne',
            question: 'Qu’est-ce qui aide ton corps à garder l’équilibre, même les yeux fermés ?',
            reponses: [
              { texte: 'Un liquide dans des canaux au fond de l’oreille', icone: '👂', correcte: true },
              { texte: 'Rien, sans les yeux on tombe toujours', icone: '👀' },
              { texte: 'Les dents qui se serrent', icone: '🦷' },
            ],
            explication:
              'Le liquide de l’oreille interne bouge avec la tête et prévient le cerveau de ta position, même sans regarder.',
          },
        ],
        '9-12': [
          {
            id: 'vestibule-deregle',
            question: 'Que se passe-t-il quand l’appareil vestibulaire de l’oreille interne se dérègle ?',
            reponses: [
              {
                texte: 'Le cerveau reçoit de fausses informations et on ressent un vertige',
                icone: '🌀',
                correcte: true,
              },
              { texte: 'Rien, seuls les yeux gèrent l’équilibre', icone: '👀' },
              { texte: 'On perd complètement l’audition', icone: '🔇' },
            ],
            explication:
              'L’appareil vestibulaire renseigne en permanence le cerveau sur la position de la tête. Dérégler ce système, par exemple en tournant vite, provoque des vertiges, même les yeux ouverts.',
          },
        ],
      },
    },
  },
  {
    cardId: 'pourquoi-on-a-deux-yeux',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'deux-yeux-relief',
            question: 'Le deuxième œil sert-il juste au cas où l’autre est fermé ?',
            reponses: [
              { texte: 'Non, les deux ensemble voient le relief', icone: '👀', correcte: true },
              { texte: 'Oui, c’est juste une réserve', icone: '🔁' },
            ],
            explication:
              'Tes deux yeux comparent leurs images : c’est ce qui te permet de voir si les choses sont loin ou proches.',
          },
        ],
        '6-8': [
          {
            id: 'objet-qui-saute',
            question: 'Pourquoi un objet proche a-t-il l’air de « sauter » quand tu fermes un œil puis l’autre ?',
            reponses: [
              { texte: 'Chaque œil voit l’objet sous un angle différent', icone: '👀', correcte: true },
              { texte: 'Un œil voit moins bien que l’autre', icone: '😵' },
              { texte: 'C’est juste une illusion sans raison', icone: '❓' },
            ],
            explication:
              'Comme tes yeux sont un peu écartés, chacun capte une image légèrement différente. Ton cerveau compare les deux pour deviner les distances.',
          },
        ],
        '9-12': [
          {
            id: 'disparite-binoculaire',
            question: 'À quoi sert la comparaison des deux images captées par tes yeux ?',
            reponses: [
              {
                texte: 'À calculer la distance des objets et voir en relief',
                icone: '👀',
                correcte: true,
              },
              { texte: 'Le second œil n’est qu’une simple réserve', icone: '🔁' },
              { texte: 'À doubler la netteté de l’image', icone: '🔍' },
            ],
            explication:
              'Le cerveau mesure le décalage entre les deux images, la disparité binoculaire, pour en déduire les distances : c’est la vision en relief, impossible avec un seul œil.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-dents-de-lait',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'dent-pas-abimee',
            question: 'Une dent de lait tombe parce qu’elle est abîmée ?',
            reponses: [
              { texte: 'Non, une grande dent la pousse dessous', icone: '🦷', correcte: true },
              { texte: 'Oui, parce qu’elle est cassée', icone: '💥' },
            ],
            explication:
              'En dessous, une dent définitive pousse et grignote la racine, jusqu’à ce que la petite dent tombe.',
          },
        ],
        '6-8': [
          {
            id: 'pourquoi-dent-tombe',
            question: 'Pourquoi une dent de lait finit-elle par tomber ?',
            reponses: [
              { texte: 'La dent définitive ronge sa racine en poussant', icone: '🦷', correcte: true },
              { texte: 'Parce qu’elle est abîmée', icone: '💥' },
              { texte: 'Parce qu’on mange trop de sucre', icone: '🍬' },
            ],
            explication:
              'Une dent définitive pousse sous la dent de lait et ronge peu à peu sa racine, jusqu’à ce qu’elle se détache.',
          },
        ],
        '9-12': [
          {
            id: 'resorption-racine',
            question: 'Que devient la racine d’une dent de lait avant qu’elle ne tombe ?',
            reponses: [
              {
                texte: 'Elle est résorbée par la dent définitive qui pousse dessous',
                icone: '🦷',
                correcte: true,
              },
              { texte: 'Elle s’abîme à cause du sucre', icone: '🍬' },
              { texte: 'Elle reste intacte jusqu’à la chute', icone: '🦴' },
            ],
            explication:
              'Des cellules spécialisées dissolvent progressivement la racine sous la pression de la dent définitive qui migre vers la surface : la dent de lait tombe une fois privée de racine, pas parce qu’elle serait abîmée.',
          },
        ],
      },
    },
  },
];
