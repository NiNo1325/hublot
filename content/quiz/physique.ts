import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « La physique ».
 *
 * Les propositions fausses sont les intuitions courantes que les cartes
 * démentent : les objets lourds qui tomberaient plus vite, les aimants qui
 * attireraient tous les métaux, la couleur contenue dans l'objet, le son qui
 * voyagerait dans le vide.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'pourquoi-tout-tombe',
    questions: {
      '3-5': [
        {
          id: 'plume-bille',
          question: 'Pourquoi une plume tombe-t-elle plus lentement ?',
          reponses: [
            { texte: "Parce que l'air la freine", icone: '💨', correcte: true },
            { texte: 'Parce qu’elle est trop légère', icone: '🪶' },
          ],
          explication: "C'est l'air qui la ralentit, comme un petit parachute.",
        },
      ],
      '6-8': [
        {
          id: 'lune-marteau',
          question: 'Sur la Lune, un marteau et une plume lâchés ensemble…',
          reponses: [
            { texte: 'Touchent le sol en même temps', icone: '🌙', correcte: true },
            { texte: 'Le marteau arrive largement avant', icone: '🔨' },
            { texte: 'Ne tombent pas du tout', icone: '🚫' },
          ],
          explication:
            'Des astronautes l’ont vérifié en 1971 : sans air, tout tombe à la même vitesse.',
        },
      ],
      '9-12': [
        {
          id: 'attraction-reciproque',
          question: 'La Terre t’attire. Est-ce que tu attires la Terre ?',
          reponses: [
            { texte: 'Oui, avec exactement la même force', icone: '⚖️', correcte: true },
            { texte: 'Non, seuls les gros objets attirent', icone: '🌍' },
            { texte: 'Oui, mais des millions de fois moins fort', icone: '🤏' },
          ],
          explication:
            'L’attraction est réciproque et égale. C’est ta masse minuscule qui fait que tu bouges, pas la Terre.',
        },
      ],
    },
  },
  {
    cardId: 'les-aimants',
    questions: {
      '3-5': [
        {
          id: 'canette',
          question: 'Un aimant colle-t-il sur une canette de boisson ?',
          reponses: [
            { texte: 'Non, il ne tient pas', icone: '🥤', correcte: true },
            { texte: 'Oui, c’est du métal', icone: '🧲' },
          ],
          explication: 'L’aimant n’attire pas tous les métaux : l’aluminium ne colle pas.',
        },
      ],
      '6-8': [
        {
          id: 'quels-metaux',
          question: 'Quels matériaux un aimant attire-t-il ?',
          reponses: [
            { texte: 'Le fer, le nickel et le cobalt', icone: '🧲', correcte: true },
            { texte: 'Tous les métaux', icone: '🪙' },
            { texte: 'Tout ce qui brille', icone: '✨' },
          ],
          explication:
            'L’aluminium et le cuivre ne réagissent pas : « métal » ne veut pas dire « attiré par un aimant ».',
        },
      ],
      '9-12': [
        {
          id: 'couper-aimant',
          question: 'Que se passe-t-il si on coupe un aimant en deux ?',
          reponses: [
            { texte: 'On obtient deux aimants à deux pôles', icone: '🧲', correcte: true },
            { texte: 'On sépare le pôle nord du pôle sud', icone: '✂️' },
            { texte: 'Il perd son magnétisme', icone: '🚫' },
          ],
          explication:
            'On n’a jamais observé de pôle isolé : chaque morceau retrouve aussitôt un nord et un sud.',
        },
      ],
    },
  },
  {
    cardId: 'pourquoi-on-voit-les-couleurs',
    questions: {
      '3-5': [
        {
          id: 'noir-couleur',
          question: 'Dans le noir complet, vois-tu les couleurs ?',
          reponses: [
            { texte: 'Non, il n’y en a plus', icone: '🌑', correcte: true },
            { texte: 'Oui, elles restent pareilles', icone: '🌈' },
          ],
          explication: 'Sans lumière, il n’y a pas de couleur du tout.',
        },
      ],
      '6-8': [
        {
          id: 'pomme-rouge',
          question: 'Pourquoi une pomme est-elle rouge ?',
          reponses: [
            { texte: 'Elle renvoie le rouge et absorbe le reste', icone: '🍎', correcte: true },
            { texte: 'Le rouge est contenu dans sa peau', icone: '🎨' },
            { texte: 'Elle fabrique de la lumière rouge', icone: '💡' },
          ],
          explication:
            'La couleur n’est pas dans l’objet : elle dépend de la lumière reçue et de ce qu’il renvoie.',
        },
      ],
      '9-12': [
        {
          id: 'arc-en-ciel',
          question: 'Qu’est-ce qui sépare les couleurs dans un arc-en-ciel ?',
          reponses: [
            { texte: 'Chaque couleur est déviée d’un angle différent', icone: '🌈', correcte: true },
            { texte: 'Les gouttes filtrent certaines couleurs', icone: '💧' },
            { texte: 'Le Soleil émet les couleurs séparément', icone: '☀️' },
          ],
          explication:
            'C’est la dispersion : l’indice de réfraction dépend de la longueur d’onde, d’où la séparation.',
        },
      ],
    },
  },
  {
    cardId: 'comment-voyage-le-son',
    questions: {
      '3-5': [
        {
          id: 'son-espace',
          question: 'Entend-on du bruit dans l’espace ?',
          reponses: [
            { texte: 'Non, c’est le silence', icone: '🤫', correcte: true },
            { texte: 'Oui, comme sur Terre', icone: '🔊' },
          ],
          explication: 'Sans air, rien ne peut vibrer : il n’y a aucun son.',
        },
      ],
      '6-8': [
        {
          id: 'son-besoin',
          question: 'De quoi le son a-t-il besoin pour voyager ?',
          reponses: [
            { texte: 'De matière, comme l’air ou l’eau', icone: '💨', correcte: true },
            { texte: 'De rien, il voyage partout', icone: '🚀' },
            { texte: 'De lumière', icone: '💡' },
          ],
          explication:
            'Le son est une vibration de la matière. Dans le vide, les explosions des films seraient silencieuses.',
        },
      ],
      '9-12': [
        {
          id: 'vitesse-milieu',
          question: 'Où le son va-t-il le plus vite ?',
          reponses: [
            { texte: 'Dans l’acier', icone: '🔩', correcte: true },
            { texte: 'Dans l’air', icone: '💨' },
            { texte: 'Dans le vide', icone: '🌌' },
          ],
          explication:
            'Plus le milieu est rigide, plus le son est rapide : plus de cinq mille mètres par seconde dans l’acier.',
        },
      ],
    },
  },
  {
    cardId: 'lelectricite',
    questions: {
      '3-5': [
        {
          id: 'circuit-coupe',
          question: 'Si on coupe le fil, que fait l’ampoule ?',
          reponses: [
            { texte: 'Elle s’éteint', icone: '🌑', correcte: true },
            { texte: 'Elle brille plus fort', icone: '💡' },
          ],
          explication: 'Le courant a besoin d’une boucle complète pour circuler.',
        },
      ],
      '6-8': [
        {
          id: 'vitesse-electrons',
          question: 'À quelle vitesse les électrons avancent-ils dans un fil ?',
          reponses: [
            { texte: 'Très lentement, quelques millimètres par seconde', icone: '🐌', correcte: true },
            { texte: 'À la vitesse de la lumière', icone: '⚡' },
            { texte: 'À la vitesse du son', icone: '🔊' },
          ],
          explication:
            'C’est la poussée qui se transmet vite, pas les électrons — comme l’eau d’un tuyau déjà plein.',
        },
      ],
      '9-12': [
        {
          id: 'sens-courant',
          question: 'Dans quel sens les électrons circulent-ils vraiment ?',
          reponses: [
            { texte: 'Du moins vers le plus, à l’inverse de la convention', icone: '🔄', correcte: true },
            { texte: 'Du plus vers le moins, comme la convention', icone: '➡️' },
            { texte: 'Dans les deux sens à la fois', icone: '↔️' },
          ],
          explication:
            'Le sens conventionnel a été fixé avant la découverte de l’électron. On l’a gardé : il ne change aucun calcul.',
        },
      ],
    },
  },
  {
    cardId: 'le-chaud-et-le-froid',
    questions: {
      '3-5': [
        {
          id: 'chocolat-froid',
          question: 'Un chocolat chaud posé sur la table, que se passe-t-il ?',
          reponses: [
            { texte: 'Sa chaleur s’en va peu à peu', icone: '☕', correcte: true },
            { texte: 'Le froid entre dedans', icone: '❄️' },
          ],
          explication: 'La chaleur va toujours du chaud vers le froid.',
        },
      ],
      '6-8': [
        {
          id: 'manteau-chaleur',
          question: 'Un manteau te donne-t-il de la chaleur ?',
          reponses: [
            { texte: 'Non, il garde la tienne près de toi', icone: '🧥', correcte: true },
            { texte: 'Oui, il fabrique de la chaleur', icone: '🔥' },
            { texte: 'Oui, il attire le soleil', icone: '☀️' },
          ],
          explication:
            'Un manteau ne chauffe rien : il emprisonne de l’air et ralentit la fuite de ta chaleur.',
        },
      ],
      '9-12': [
        {
          id: 'froid-existe',
          question: 'Le froid est-il une chose qui se déplace ?',
          reponses: [
            { texte: 'Non, seule la chaleur voyage', icone: '➡️', correcte: true },
            { texte: 'Oui, il entre par les fenêtres', icone: '🪟' },
            { texte: 'Oui, il pousse la chaleur', icone: '💨' },
          ],
          explication:
            'Le froid est un manque de chaleur, pas une entité : « le froid qui entre » inverse la réalité.',
        },
      ],
    },
  },  {
    cardId: 'pourquoi-ca-sarrete',
    questions: {
      '3-5': [
        {
          id: 'balle-sarrete',
          question: 'Pourquoi la balle qui roule finit par s’arrêter ?',
          reponses: [
            { texte: 'Le sol et l’air la freinent', icone: '🛑', correcte: true },
            { texte: 'Elle est fatiguée', icone: '😴' },
          ],
          explication: 'Ce sont les frottements qui l’arrêtent, pas la fatigue.',
        },
      ],
      '6-8': [
        {
          id: 'sans-frottement',
          question: 'Sans aucun frottement, que ferait un objet lancé ?',
          reponses: [
            { texte: 'Il continuerait sans jamais s’arrêter', icone: '♾️', correcte: true },
            { texte: 'Il s’arrêterait quand même', icone: '🛑' },
            { texte: 'Il irait de plus en plus vite', icone: '🚀' },
          ],
          explication:
            'Sans force pour le freiner, un objet conserve sa vitesse : c’est le principe d’inertie.',
        },
      ],
      '9-12': [
        {
          id: 'voyager-moteur',
          question: 'Les sondes Voyager avancent-elles grâce à leur moteur ?',
          reponses: [
            { texte: 'Non : plus rien ne les freine', icone: '🛰️', correcte: true },
            { texte: 'Oui, il tourne en permanence', icone: '🔧' },
            { texte: 'Oui, elles sont attirées par les étoiles lointaines', icone: '🌟' },
          ],
          explication:
            'Moteur principal éteint depuis des décennies : dans le vide, aucune force notable ne les ralentit.',
        },
      ],
    },
  },  {
    cardId: 'les-atomes',
    questions: {
      '3-5': [
        {
          id: 'atome-dedans',
          question: 'Qu’y a-t-il à l’intérieur d’un atome ?',
          reponses: [
            { texte: 'Une petite bille et beaucoup de vide', icone: '⚪', correcte: true },
            { texte: 'C’est plein, comme un caillou', icone: '🪨' },
          ],
          explication: 'Un atome est presque entièrement vide.',
        },
      ],
      '6-8': [
        {
          id: 'main-table',
          question: 'Pourquoi ta main ne traverse-t-elle pas la table ?',
          reponses: [
            { texte: 'Parce que leurs électrons se repoussent', icone: '⚡', correcte: true },
            { texte: 'Parce que la table est pleine de matière', icone: '🧱' },
            { texte: 'Parce que la main est trop molle', icone: '🖐️' },
          ],
          explication:
            'Les deux sont surtout du vide : ce qui les empêche de se traverser est une force de répulsion, pas un remplissage.',
        },
      ],
      '9-12': [
        {
          id: 'noyau-echelle',
          question: 'Si le noyau d’un atome était une bille d’un centimètre, l’atome ferait ?',
          reponses: [
            { texte: 'Environ un kilomètre', icone: '🏙️', correcte: true },
            { texte: 'Environ un mètre', icone: '📏' },
            { texte: 'Environ dix centimètres', icone: '✋' },
          ],
          explication:
            'Le noyau est cent mille fois plus petit que l’atome, tout en concentrant plus de 99,9 % de sa masse.',
        },
      ],
    },
  },  {
    cardId: 'lenergie',
    questions: {
      '3-5': [
        {
          id: 'energie-fabrique',
          question: 'Peut-on fabriquer de l’énergie ?',
          reponses: [
            { texte: 'Non, on la change de forme', icone: '🔄', correcte: true },
            { texte: 'Oui, dans les centrales', icone: '🏭' },
          ],
          explication: 'L’énergie ne se fabrique pas : elle change de forme.',
        },
      ],
      '6-8': [
        {
          id: 'ou-va-energie',
          question: 'Où va l’énergie qu’on a « consommée » ?',
          reponses: [
            { texte: 'Elle est devenue de la chaleur dispersée', icone: '🌡️', correcte: true },
            { texte: 'Elle a disparu', icone: '🕳️' },
            { texte: 'Elle est stockée dans les fils', icone: '🔌' },
          ],
          explication:
            'Elle ne disparaît jamais : elle se dégrade en chaleur diffuse, trop diluée pour resservir.',
        },
      ],
      '9-12': [
        {
          id: 'mouvement-perpetuel',
          question: 'Pourquoi le mouvement perpétuel est-il impossible ?',
          reponses: [
            { texte: 'Parce que chaque conversion dégrade l’énergie', icone: '♻️', correcte: true },
            { texte: 'Parce qu’on n’a pas encore les bons matériaux', icone: '🔧' },
            { texte: 'Parce que l’énergie finit par disparaître', icone: '🕳️' },
          ],
          explication:
            'Le second principe l’interdit : l’énergie se conserve, mais sa qualité se dégrade irréversiblement.',
        },
      ],
    },
  },  {
    cardId: 'le-poids-et-la-masse',
    questions: {
      '3-5': [
        {
          id: 'lune-leger',
          question: 'Sur la Lune, tu sautes très haut. Pourquoi ?',
          reponses: [
            { texte: 'La Lune tire moins fort', icone: '🌙', correcte: true },
            { texte: 'Tu es devenu plus petit', icone: '📉' },
          ],
          explication: 'Il y a toujours autant de toi : c’est la Lune qui tire six fois moins fort.',
        },
      ],
      '6-8': [
        {
          id: 'masse-change',
          question: 'Ta masse change-t-elle si tu vas sur la Lune ?',
          reponses: [
            { texte: 'Non, elle est la même partout', icone: '⚖️', correcte: true },
            { texte: 'Oui, elle est divisée par six', icone: '📉' },
            { texte: 'Oui, elle disparaît presque', icone: '🕳️' },
          ],
          explication:
            'La masse ne change pas. C’est le poids — la force d’attraction — qui est divisé par six.',
        },
      ],
      '9-12': [
        {
          id: 'orbite-gravite',
          question: 'Dans la Station spatiale, y a-t-il encore de la gravité ?',
          reponses: [
            { texte: 'Oui, presque autant qu’au sol', icone: '🛰️', correcte: true },
            { texte: 'Non, elle a disparu', icone: '🕳️' },
            { texte: 'Non, on est trop loin de la Terre', icone: '📏' },
          ],
          explication:
            'À quatre cents kilomètres, elle vaut encore 8,7. On flotte parce que tout tombe ensemble : c’est la chute libre.',
        },
      ],
    },
  },
];
