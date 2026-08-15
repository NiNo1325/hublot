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
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'plume-bille',
            question: 'Why does a feather fall more slowly?',
            reponses: [
              { texte: 'Because the air slows it down', icone: '💨', correcte: true },
              { texte: 'Because it is too light', icone: '🪶' },
            ],
            explication: 'It is the air that slows it down, like a tiny parachute.',
          },
        ],
        '6-8': [
          {
            id: 'lune-marteau',
            question: 'On the Moon, a hammer and a feather dropped together…',
            reponses: [
              { texte: 'Touch the ground at the same time', icone: '🌙', correcte: true },
              { texte: 'The hammer lands well before', icone: '🔨' },
              { texte: 'Do not fall at all', icone: '🚫' },
            ],
            explication:
              'Astronauts checked it in 1971: with no air, everything falls at the same speed.',
          },
        ],
        '9-12': [
          {
            id: 'attraction-reciproque',
            question: 'The Earth pulls on you. Do you pull on the Earth?',
            reponses: [
              { texte: 'Yes, with exactly the same force', icone: '⚖️', correcte: true },
              { texte: 'No, only big objects attract', icone: '🌍' },
              { texte: 'Yes, but millions of times more weakly', icone: '🤏' },
            ],
            explication:
              'The attraction goes both ways and is equal. It is your tiny mass that makes you move, not the Earth.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-aimants',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'canette',
            question: 'Does a magnet stick to a drinks can?',
            reponses: [
              { texte: 'No, it does not hold', icone: '🥤', correcte: true },
              { texte: 'Yes, it is metal', icone: '🧲' },
            ],
            explication: 'A magnet does not pull on every metal: aluminium does not stick.',
          },
        ],
        '6-8': [
          {
            id: 'quels-metaux',
            question: 'Which materials does a magnet attract?',
            reponses: [
              { texte: 'Iron, nickel and cobalt', icone: '🧲', correcte: true },
              { texte: 'Every metal', icone: '🪙' },
              { texte: 'Anything shiny', icone: '✨' },
            ],
            explication:
              'Aluminium and copper do not react: “metal” does not mean “attracted by a magnet”.',
          },
        ],
        '9-12': [
          {
            id: 'couper-aimant',
            question: 'What happens if you cut a magnet in two?',
            reponses: [
              { texte: 'You get two magnets, each with two poles', icone: '🧲', correcte: true },
              { texte: 'You separate the north pole from the south pole', icone: '✂️' },
              { texte: 'It loses its magnetism', icone: '🚫' },
            ],
            explication:
              'A lone pole has never been observed: each piece immediately has a north and a south again.',
          },
        ],
      },
    },
  },
  {
    cardId: 'pourquoi-on-voit-les-couleurs',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'noir-couleur',
            question: 'In complete darkness, can you see colours?',
            reponses: [
              { texte: 'No, there are none left', icone: '🌑', correcte: true },
              { texte: 'Yes, they stay the same', icone: '🌈' },
            ],
            explication: 'Without light, there is no colour at all.',
          },
        ],
        '6-8': [
          {
            id: 'pomme-rouge',
            question: 'Why is an apple red?',
            reponses: [
              { texte: 'It sends back the red and absorbs the rest', icone: '🍎', correcte: true },
              { texte: 'The red is held inside its skin', icone: '🎨' },
              { texte: 'It makes red light of its own', icone: '💡' },
            ],
            explication:
              'The colour is not in the object: it depends on the light it receives and on what it sends back.',
          },
        ],
        '9-12': [
          {
            id: 'arc-en-ciel',
            question: 'What separates the colours in a rainbow?',
            reponses: [
              { texte: 'Each colour is bent by a different angle', icone: '🌈', correcte: true },
              { texte: 'The drops filter out certain colours', icone: '💧' },
              { texte: 'The Sun gives out the colours separately', icone: '☀️' },
            ],
            explication:
              'It is dispersion: the refractive index depends on the wavelength, so the colours come apart.',
          },
        ],
      },
    },
  },
  {
    cardId: 'comment-voyage-le-son',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'son-espace',
            question: 'Can you hear any noise in space?',
            reponses: [
              { texte: 'No, it is silent', icone: '🤫', correcte: true },
              { texte: 'Yes, just like on Earth', icone: '🔊' },
            ],
            explication: 'With no air, nothing can vibrate: there is no sound.',
          },
        ],
        '6-8': [
          {
            id: 'son-besoin',
            question: 'What does sound need in order to travel?',
            reponses: [
              { texte: 'Matter, such as air or water', icone: '💨', correcte: true },
              { texte: 'Nothing, it travels everywhere', icone: '🚀' },
              { texte: 'Light', icone: '💡' },
            ],
            explication:
              'Sound is a vibration of matter. In a vacuum, the explosions in films would be silent.',
          },
        ],
        '9-12': [
          {
            id: 'vitesse-milieu',
            question: 'Where does sound travel fastest?',
            reponses: [
              { texte: 'In steel', icone: '🔩', correcte: true },
              { texte: 'In air', icone: '💨' },
              { texte: 'In a vacuum', icone: '🌌' },
            ],
            explication:
              'The stiffer the material, the faster the sound: more than five thousand metres per second in steel.',
          },
        ],
      },
    },
  },
  {
    cardId: 'lelectricite',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'circuit-coupe',
            question: 'If you cut the wire, what does the bulb do?',
            reponses: [
              { texte: 'It goes out', icone: '🌑', correcte: true },
              { texte: 'It shines brighter', icone: '💡' },
            ],
            explication: 'The current needs a complete loop in order to flow.',
          },
        ],
        '6-8': [
          {
            id: 'vitesse-electrons',
            question: 'How fast do electrons move along a wire?',
            reponses: [
              { texte: 'Very slowly, a few millimetres per second', icone: '🐌', correcte: true },
              { texte: 'At the speed of light', icone: '⚡' },
              { texte: 'At the speed of sound', icone: '🔊' },
            ],
            explication:
              'It is the push that travels fast, not the electrons — like water in a pipe that is already full.',
          },
        ],
        '9-12': [
          {
            id: 'sens-courant',
            question: 'Which way do electrons really flow?',
            reponses: [
              { texte: 'From minus to plus, the opposite of the convention', icone: '🔄', correcte: true },
              { texte: 'From plus to minus, just as the convention says', icone: '➡️' },
              { texte: 'Both ways at once', icone: '↔️' },
            ],
            explication:
              'The conventional direction was fixed before the electron was discovered. It was kept: it changes no calculation.',
          },
        ],
      },
    },
  },
  {
    cardId: 'le-chaud-et-le-froid',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'chocolat-froid',
            question: 'A hot chocolate is left on the table. What happens?',
            reponses: [
              { texte: 'Its heat leaves bit by bit', icone: '☕', correcte: true },
              { texte: 'The cold gets inside it', icone: '❄️' },
            ],
            explication: 'Heat always goes from hot to cold.',
          },
        ],
        '6-8': [
          {
            id: 'manteau-chaleur',
            question: 'Does a coat give you heat?',
            reponses: [
              { texte: 'No, it keeps yours close to you', icone: '🧥', correcte: true },
              { texte: 'Yes, it makes heat', icone: '🔥' },
              { texte: 'Yes, it draws in the sunshine', icone: '☀️' },
            ],
            explication:
              'A coat heats nothing: it traps air and slows down the escape of your own heat.',
          },
        ],
        '9-12': [
          {
            id: 'froid-existe',
            question: 'Is cold a thing that moves about?',
            reponses: [
              { texte: 'No, only heat travels', icone: '➡️', correcte: true },
              { texte: 'Yes, it comes in through the windows', icone: '🪟' },
              { texte: 'Yes, it pushes the heat away', icone: '💨' },
            ],
            explication:
              'Cold is a lack of heat, not an entity: “the cold getting in” turns reality on its head.',
          },
        ],
      },
    },
  },  {
    cardId: 'pourquoi-ca-sarrete',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'balle-sarrete',
            question: 'Why does a rolling ball end up stopping?',
            reponses: [
              { texte: 'The ground and the air slow it down', icone: '🛑', correcte: true },
              { texte: 'It is tired', icone: '😴' },
            ],
            explication: 'It is friction that stops it, not tiredness.',
          },
        ],
        '6-8': [
          {
            id: 'sans-frottement',
            question: 'With no friction at all, what would a thrown object do?',
            reponses: [
              { texte: 'Carry on without ever stopping', icone: '♾️', correcte: true },
              { texte: 'Stop all the same', icone: '🛑' },
              { texte: 'Go faster and faster', icone: '🚀' },
            ],
            explication:
              'With no force to slow it down, an object keeps its speed: that is the principle of inertia.',
          },
        ],
        '9-12': [
          {
            id: 'voyager-moteur',
            question: 'Do the Voyager probes move thanks to their engine?',
            reponses: [
              { texte: 'No: nothing slows them down any more', icone: '🛰️', correcte: true },
              { texte: 'Yes, it runs non-stop', icone: '🔧' },
              { texte: 'Yes, distant stars pull them along', icone: '🌟' },
            ],
            explication:
              'Main engine off for decades: in a vacuum, no noticeable force slows them down.',
          },
        ],
      },
    },
  },  {
    cardId: 'les-atomes',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'atome-dedans',
            question: 'What is there inside an atom?',
            reponses: [
              { texte: 'A tiny bead and a lot of empty space', icone: '⚪', correcte: true },
              { texte: 'It is full, like a pebble', icone: '🪨' },
            ],
            explication: 'An atom is almost entirely empty.',
          },
        ],
        '6-8': [
          {
            id: 'main-table',
            question: 'Why does your hand not go through the table?',
            reponses: [
              { texte: 'Because their electrons push each other away', icone: '⚡', correcte: true },
              { texte: 'Because the table is full of matter', icone: '🧱' },
              { texte: 'Because your hand is too soft', icone: '🖐️' },
            ],
            explication:
              'Both are mostly empty space: what stops them going through each other is a force of repulsion, not filling.',
          },
        ],
        '9-12': [
          {
            id: 'noyau-echelle',
            question: 'If an atom’s nucleus were a marble one centimetre across, the atom would be?',
            reponses: [
              { texte: 'About a kilometre wide', icone: '🏙️', correcte: true },
              { texte: 'About a metre wide', icone: '📏' },
              { texte: 'About ten centimetres wide', icone: '✋' },
            ],
            explication:
              'The nucleus is a hundred thousand times smaller than the atom, while holding more than 99.9% of its mass.',
          },
        ],
      },
    },
  },  {
    cardId: 'lenergie',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'energie-fabrique',
            question: 'Can we make energy?',
            reponses: [
              { texte: 'No, we change its form', icone: '🔄', correcte: true },
              { texte: 'Yes, in power stations', icone: '🏭' },
            ],
            explication: 'Energy is never made: it changes form.',
          },
        ],
        '6-8': [
          {
            id: 'ou-va-energie',
            question: 'Where does the energy we have “used up” go?',
            reponses: [
              { texte: 'It has become scattered heat', icone: '🌡️', correcte: true },
              { texte: 'It has disappeared', icone: '🕳️' },
              { texte: 'It is stored in the wires', icone: '🔌' },
            ],
            explication:
              'It never disappears: it degrades into diffuse heat, too thinned out to be used again.',
          },
        ],
        '9-12': [
          {
            id: 'mouvement-perpetuel',
            question: 'Why is perpetual motion impossible?',
            reponses: [
              { texte: 'Because every conversion degrades the energy', icone: '♻️', correcte: true },
              { texte: 'Because we do not have the right materials yet', icone: '🔧' },
              { texte: 'Because energy ends up disappearing', icone: '🕳️' },
            ],
            explication:
              'The second law forbids it: energy is conserved, but its quality degrades irreversibly.',
          },
        ],
      },
    },
  },  {
    cardId: 'le-poids-et-la-masse',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'lune-leger',
            question: 'On the Moon you jump very high. Why?',
            reponses: [
              { texte: 'The Moon pulls less hard', icone: '🌙', correcte: true },
              { texte: 'You have become smaller', icone: '📉' },
            ],
            explication: 'There is still just as much of you: it is the Moon that pulls six times less hard.',
          },
        ],
        '6-8': [
          {
            id: 'masse-change',
            question: 'Does your mass change if you go to the Moon?',
            reponses: [
              { texte: 'No, it is the same everywhere', icone: '⚖️', correcte: true },
              { texte: 'Yes, it is divided by six', icone: '📉' },
              { texte: 'Yes, it almost disappears', icone: '🕳️' },
            ],
            explication:
              'The mass does not change. It is the weight — the pulling force — that is divided by six.',
          },
        ],
        '9-12': [
          {
            id: 'orbite-gravite',
            question: 'Inside the Space Station, is there still any gravity?',
            reponses: [
              { texte: 'Yes, almost as much as on the ground', icone: '🛰️', correcte: true },
              { texte: 'No, it has disappeared', icone: '🕳️' },
              { texte: 'No, you are too far from the Earth', icone: '📏' },
            ],
            explication:
              'Four hundred kilometres up, it is still 8.7. You float because everything falls together: that is free fall.',
          },
        ],
      },
    },
  },
];
