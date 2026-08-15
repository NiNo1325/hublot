import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « Les océans ».
 *
 * Idées reçues visées : la vague qui transporterait l'eau jusqu'à la plage,
 * la mer immobile hors des vagues, le fond éclairé dès lors que le Soleil
 * brille, l'air en réserve qui suffirait à plonger sans limite, le corail pris
 * pour une plante ou un rocher, la lumière qui viendrait forcément de
 * l'électricité ou du feu, la vie qui dépendrait toujours du Soleil, l'oxygène
 * qui viendrait uniquement des arbres, la flottaison identique dans toute eau,
 * et le tsunami confondu avec une marée ou une vague de vent.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'dou-viennent-les-vagues',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'vague-transporte-eau',
            question: 'La vague pousse-t-elle l’eau jusqu’à la plage ?',
            reponses: [
              { texte: 'Non, l’eau reste sur place', icone: '🌊', correcte: true },
              { texte: 'Oui, elle l’amène jusqu’au sable', icone: '🏖️' },
            ],
            explication:
              'Ce n’est pas l’eau qui avance mais le mouvement, comme une ola dans un stade.',
          },
        ],
        '6-8': [
          {
            id: 'vague-mouvement-voyage',
            question: 'Quand une vague arrive à la plage, qu’est-ce qui a vraiment parcouru le chemin ?',
            reponses: [
              { texte: 'Le mouvement, pas l’eau elle-même', icone: '🔄', correcte: true },
              { texte: 'L’eau elle-même, depuis le large', icone: '💧' },
              { texte: 'Le vent qui pousse l’eau devant lui', icone: '🌬️' },
            ],
            explication:
              'Chaque goutte tourne sur elle-même : c’est l’énergie qui voyage, pas la masse d’eau depuis le large.',
          },
        ],
        '9-12': [
          {
            id: 'vague-trajectoire-orbitale',
            question: 'Une vague traverse l’océan sur des centaines de kilomètres. Que fait l’eau ?',
            reponses: [
              { texte: 'Elle décrit un cercle presque sur place', icone: '🔄', correcte: true },
              { texte: 'Elle est transportée jusqu’au rivage', icone: '🌊' },
              { texte: 'Elle s’évapore en cours de route', icone: '💨' },
            ],
            explication:
              'Seule l’énergie se propage : chaque particule d’eau reste, en moyenne, au même endroit, suivant une trajectoire orbitale.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'vague-transporte-eau',
            question: 'Does the wave push the water all the way to the beach?',
            reponses: [
              { texte: 'No, the water stays where it is', icone: '🌊', correcte: true },
              { texte: 'Yes, it carries it to the sand', icone: '🏖️' },
            ],
            explication:
              'It is not the water that moves along but the movement, like a Mexican wave in a stadium.',
          },
        ],
        '6-8': [
          {
            id: 'vague-mouvement-voyage',
            question: 'When a wave reaches the beach, what has really made the journey?',
            reponses: [
              { texte: 'The movement, not the water itself', icone: '🔄', correcte: true },
              { texte: 'The water itself, all the way from the open sea', icone: '💧' },
              { texte: 'The wind, pushing the water along in front of it', icone: '🌬️' },
            ],
            explication:
              'Each drop turns round on the spot: it is the energy that travels, not a mass of water from out at sea.',
          },
        ],
        '9-12': [
          {
            id: 'vague-trajectoire-orbitale',
            question: 'A wave crosses hundreds of kilometres of ocean. What does the water do?',
            reponses: [
              { texte: 'It traces a circle almost on the spot', icone: '🔄', correcte: true },
              { texte: 'It is carried all the way to the shore', icone: '🌊' },
              { texte: 'It evaporates along the way', icone: '💨' },
            ],
            explication:
              'Only the energy travels: each particle of water stays, on average, in the same place, following an orbital path.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-fleuves-dans-la-mer',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'mer-bouge-sans-vague',
            question: 'Entre les vagues, l’eau de la mer bouge-t-elle ?',
            reponses: [
              { texte: 'Oui, tout doucement', icone: '🔄', correcte: true },
              { texte: 'Non, elle est toujours immobile', icone: '🧊' },
            ],
            explication: 'De grands courants invisibles font voyager l’eau tout autour de la Terre.',
          },
        ],
        '6-8': [
          {
            id: 'courant-marin-definition',
            question: 'Qu’est-ce qu’un courant marin ?',
            reponses: [
              { texte: 'Un grand fleuve d’eau qui bouge dans l’océan', icone: '🔄', correcte: true },
              { texte: 'De l’eau complètement immobile', icone: '🧊' },
              { texte: 'Une vague qui ne s’arrête jamais', icone: '🌊' },
            ],
            explication:
              'Même loin des vagues, l’eau des océans circule sans cesse, entraînée par la chaleur et le froid.',
          },
        ],
        '9-12': [
          {
            id: 'eau-froide-plonge',
            question: 'Pourquoi l’eau froide plonge-t-elle vers le fond près des pôles ?',
            reponses: [
              { texte: 'Parce qu’elle devient plus dense en refroidissant', icone: '🌡️', correcte: true },
              { texte: 'Parce que les pôles aspirent l’eau', icone: '⬇️' },
              { texte: 'Parce que la mer y est immobile', icone: '🧊' },
            ],
            explication:
              'En refroidissant, l’eau devient plus lourde et plonge, entraînant une circulation à l’échelle du globe.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'mer-bouge-sans-vague',
            question: 'Between the waves, does the water of the sea move?',
            reponses: [
              { texte: 'Yes, very gently', icone: '🔄', correcte: true },
              { texte: 'No, it always stays still', icone: '🧊' },
            ],
            explication: 'Great invisible currents carry the water all the way around the Earth.',
          },
        ],
        '6-8': [
          {
            id: 'courant-marin-definition',
            question: 'What is an ocean current?',
            reponses: [
              { texte: 'A great river of water moving through the ocean', icone: '🔄', correcte: true },
              { texte: 'Water that is completely still', icone: '🧊' },
              { texte: 'A wave that never stops', icone: '🌊' },
            ],
            explication:
              'Even far from the waves, the water of the oceans is always on the move, driven by heat and cold.',
          },
        ],
        '9-12': [
          {
            id: 'eau-froide-plonge',
            question: 'Why does cold water sink towards the bottom near the poles?',
            reponses: [
              { texte: 'Because it becomes denser as it cools', icone: '🌡️', correcte: true },
              { texte: 'Because the poles suck the water down', icone: '⬇️' },
              { texte: 'Because the sea there is motionless', icone: '🧊' },
            ],
            explication:
              'As it cools, the water becomes heavier and sinks, driving a circulation on a global scale.',
          },
        ],
      },
    },
  },
  {
    cardId: 'pourquoi-il-fait-noir-au-fond',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'fond-clair-plein-jour',
            question: 'Tout en bas de la mer, en plein jour, fait-il clair ?',
            reponses: [
              { texte: 'Non, il fait tout noir', icone: '🌑', correcte: true },
              { texte: 'Oui, comme à la surface', icone: '☀️' },
            ],
            explication: 'La lumière du Soleil ne descend pas si loin : elle disparaît en chemin.',
          },
        ],
        '6-8': [
          {
            id: 'noir-au-fond-midi',
            question: 'Pourquoi fait-il noir tout au fond de l’océan, même en plein midi ?',
            reponses: [
              { texte: 'L’eau absorbe peu à peu toute la lumière', icone: '🔦', correcte: true },
              { texte: 'Le Soleil n’éclaire jamais la mer', icone: '⛔' },
              { texte: 'Il fait toujours clair, comme à la surface', icone: '☀️' },
            ],
            explication:
              'Chaque mètre d’eau filtre un peu plus la lumière, jusqu’à ce qu’il n’en reste plus du tout.',
          },
        ],
        '9-12': [
          {
            id: 'couleur-disparait-premiere',
            question: 'Quelle couleur de la lumière disparaît en premier sous l’eau ?',
            reponses: [
              { texte: 'Le rouge', icone: '🔴', correcte: true },
              { texte: 'Le bleu', icone: '🔵' },
              { texte: 'Toutes en même temps', icone: '🌈' },
            ],
            explication:
              'Le rouge est absorbé dès les premiers mètres ; le bleu pénètre bien plus profond, d’où la couleur des abysses.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'fond-clair-plein-jour',
            question: 'Right at the bottom of the sea, in broad daylight, is it light?',
            reponses: [
              { texte: 'No, it is pitch dark', icone: '🌑', correcte: true },
              { texte: 'Yes, just like at the surface', icone: '☀️' },
            ],
            explication: 'The light of the Sun does not reach that far down: it fades away on the way.',
          },
        ],
        '6-8': [
          {
            id: 'noir-au-fond-midi',
            question: 'Why is it dark at the bottom of the ocean, even at midday?',
            reponses: [
              { texte: 'The water absorbs all the light little by little', icone: '🔦', correcte: true },
              { texte: 'The Sun never lights up the sea', icone: '⛔' },
              { texte: 'It is always light, just as at the surface', icone: '☀️' },
            ],
            explication:
              'Each metre of water filters out a little more of the light, until none of it is left.',
          },
        ],
        '9-12': [
          {
            id: 'couleur-disparait-premiere',
            question: 'Which colour of light disappears first underwater?',
            reponses: [
              { texte: 'Red', icone: '🔴', correcte: true },
              { texte: 'Blue', icone: '🔵' },
              { texte: 'All of them at the same time', icone: '🌈' },
            ],
            explication:
              'Red is absorbed within the very first metres; blue travels far deeper, which is where the colour of the abyss comes from.',
          },
        ],
      },
    },
  },
  {
    cardId: 'la-pression-qui-ecrase',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'eau-ecrase-fort',
            question: 'Tout en bas de la mer, l’eau écrase-t-elle fort ?',
            reponses: [
              { texte: 'Oui, très fort', icone: '🤏', correcte: true },
              { texte: 'Non, pas du tout', icone: '🙅' },
            ],
            explication: 'Il y a tellement d’eau au-dessus que ça pousse énormément.',
          },
        ],
        '6-8': [
          {
            id: 'sous-marin-solide',
            question: 'Pourquoi faut-il un sous-marin très solide pour aller très profond ?',
            reponses: [
              { texte: 'Parce que le poids de l’eau écrase', icone: '🤿', correcte: true },
              { texte: 'Parce qu’il fait trop froid', icone: '❄️' },
              { texte: 'Parce qu’il n’y a pas assez d’air', icone: '💨' },
            ],
            explication:
              'Ce n’est pas l’air qui manque, c’est le poids énorme de toute l’eau au-dessus qui écrase.',
          },
        ],
        '9-12': [
          {
            id: 'plongeur-air-suffisant',
            question: 'Un plongeur avec assez d’air pourrait-il descendre à mille mètres sans protection ?',
            reponses: [
              { texte: 'Non, la pression l’écraserait', icone: '🤿', correcte: true },
              { texte: 'Oui, s’il a assez d’air', icone: '💨' },
              { texte: 'Oui, s’il retient sa respiration', icone: '🫁' },
            ],
            explication:
              'La pression de l’eau écrase le corps quelle que soit la quantité d’air disponible : il faut une structure rigide, pas juste de l’air.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'eau-ecrase-fort',
            question: 'Right at the bottom of the sea, does the water squash hard?',
            reponses: [
              { texte: 'Yes, very hard', icone: '🤏', correcte: true },
              { texte: 'No, not at all', icone: '🙅' },
            ],
            explication: 'There is so much water above that it pushes down enormously.',
          },
        ],
        '6-8': [
          {
            id: 'sous-marin-solide',
            question: 'Why do you need a very strong submarine to go really deep?',
            reponses: [
              { texte: 'Because the weight of the water crushes', icone: '🤿', correcte: true },
              { texte: 'Because it is too cold', icone: '❄️' },
              { texte: 'Because there is not enough air', icone: '💨' },
            ],
            explication:
              'It is not air that runs short, it is the enormous weight of all the water above that crushes.',
          },
        ],
        '9-12': [
          {
            id: 'plongeur-air-suffisant',
            question: 'Could a diver with enough air go down to a thousand metres unprotected?',
            reponses: [
              { texte: 'No, the pressure would crush them', icone: '🤿', correcte: true },
              { texte: 'Yes, if they have enough air', icone: '💨' },
              { texte: 'Yes, if they hold their breath', icone: '🫁' },
            ],
            explication:
              'Water pressure crushes the body whatever amount of air is available: what is needed is a rigid structure, not simply air.',
          },
        ],
      },
    },
  },
  {
    cardId: 'le-corail-batisseur',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'corail-caillou',
            question: 'Le corail, est-ce un caillou ?',
            reponses: [
              { texte: 'Non, un petit animal', icone: '🪸', correcte: true },
              { texte: 'Oui, un caillou', icone: '🪨' },
            ],
            explication: 'Le corail est bien vivant : c’est un tout petit animal.',
          },
        ],
        '6-8': [
          {
            id: 'corail-nature',
            question: 'Qu’est-ce que le corail ?',
            reponses: [
              { texte: 'Un animal qui fabrique une coque dure', icone: '🪸', correcte: true },
              { texte: 'Une plante marine', icone: '🌿' },
              { texte: 'Un rocher qui pousse', icone: '🪨' },
            ],
            explication:
              'Le corail est un animal, cousin de la méduse, qui construit son propre squelette calcaire.',
          },
        ],
        '9-12': [
          {
            id: 'recif-composition',
            question: 'Un récif corallien est fait de quoi ?',
            reponses: [
              { texte: 'De squelettes calcaires accumulés par des animaux', icone: '🪸', correcte: true },
              { texte: 'De roche volcanique refroidie', icone: '🌋' },
              { texte: 'D’algues pétrifiées', icone: '🌿' },
            ],
            explication:
              'Les polypes coralliens sécrètent un squelette de calcaire qui s’accumule sur des siècles pour former le récif.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'corail-caillou',
            question: 'Is coral a stone?',
            reponses: [
              { texte: 'No, a tiny animal', icone: '🪸', correcte: true },
              { texte: 'Yes, a stone', icone: '🪨' },
            ],
            explication: 'Coral is very much alive: it is a tiny little animal.',
          },
        ],
        '6-8': [
          {
            id: 'corail-nature',
            question: 'What is coral?',
            reponses: [
              { texte: 'An animal that builds a hard case', icone: '🪸', correcte: true },
              { texte: 'A sea plant', icone: '🌿' },
              { texte: 'A rock that grows', icone: '🪨' },
            ],
            explication:
              'Coral is an animal, a cousin of the jellyfish, that builds its own chalky skeleton.',
          },
        ],
        '9-12': [
          {
            id: 'recif-composition',
            question: 'What is a coral reef made of?',
            reponses: [
              { texte: 'Chalky skeletons built up by animals', icone: '🪸', correcte: true },
              { texte: 'Cooled volcanic rock', icone: '🌋' },
              { texte: 'Petrified seaweed', icone: '🌿' },
            ],
            explication:
              'Coral polyps secrete a skeleton of calcium carbonate that builds up over centuries to form the reef.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-animaux-qui-brillent',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'lampe-electrique',
            question: 'Ces animaux allument-ils une vraie lampe électrique ?',
            reponses: [
              { texte: 'Non, la lumière vient de leur corps', icone: '✨', correcte: true },
              { texte: 'Oui, une lampe électrique', icone: '🔦' },
            ],
            explication: 'Leur corps fabrique lui-même la lumière, grâce à une réaction chimique.',
          },
        ],
        '6-8': [
          {
            id: 'origine-lumiere-animale',
            question: 'D’où vient la lumière des animaux qui brillent au fond de la mer ?',
            reponses: [
              { texte: 'D’une réaction chimique dans leur corps', icone: '✨', correcte: true },
              { texte: 'D’une pile électrique', icone: '🔋' },
              { texte: 'Du reflet du Soleil', icone: '☀️' },
            ],
            explication:
              'C’est une lumière froide, produite chimiquement, sans électricité ni flamme.',
          },
        ],
        '9-12': [
          {
            id: 'bioluminescence-chaleur',
            question: 'La lumière produite par bioluminescence dégage-t-elle de la chaleur ?',
            reponses: [
              { texte: 'Non, presque pas, contrairement à une ampoule', icone: '💡', correcte: true },
              { texte: 'Oui, autant qu’une flamme', icone: '🔥' },
              { texte: 'Oui, mais seulement sous l’eau', icone: '🌊' },
            ],
            explication:
              'La réaction chimique convertit l’essentiel de son énergie en lumière plutôt qu’en chaleur : on parle de lumière froide.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'lampe-electrique',
            question: 'Do these animals switch on a real electric torch?',
            reponses: [
              { texte: 'No, the light comes from their body', icone: '✨', correcte: true },
              { texte: 'Yes, an electric torch', icone: '🔦' },
            ],
            explication: 'Their body makes the light itself, thanks to a chemical reaction.',
          },
        ],
        '6-8': [
          {
            id: 'origine-lumiere-animale',
            question: 'Where does the light of the glowing animals of the deep sea come from?',
            reponses: [
              { texte: 'From a chemical reaction in their body', icone: '✨', correcte: true },
              { texte: 'From an electric battery', icone: '🔋' },
              { texte: 'From the reflection of the Sun', icone: '☀️' },
            ],
            explication:
              'It is a cold light, made chemically, with no electricity and no flame.',
          },
        ],
        '9-12': [
          {
            id: 'bioluminescence-chaleur',
            question: 'Does the light produced by bioluminescence give off heat?',
            reponses: [
              { texte: 'No, almost none, unlike a light bulb', icone: '💡', correcte: true },
              { texte: 'Yes, as much as a flame', icone: '🔥' },
              { texte: 'Yes, but only underwater', icone: '🌊' },
            ],
            explication:
              'The chemical reaction turns almost all of its energy into light rather than heat: this is what we call cold light.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-sources-chaudes-du-fond',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'vie-sans-soleil',
            question: 'Tout en bas de la mer, y a-t-il de la vie sans Soleil ?',
            reponses: [
              { texte: 'Oui, près des cheminées chaudes', icone: '♨️', correcte: true },
              { texte: 'Non, rien ne vit sans Soleil', icone: '🚫' },
            ],
            explication:
              'Près de ces sources chaudes, des bactéries et des animaux vivent très bien sans lumière.',
          },
        ],
        '6-8': [
          {
            id: 'bacteries-cheminee-nourriture',
            question: 'Comment les bactéries des cheminées chaudes se nourrissent-elles, sans lumière ?',
            reponses: [
              { texte: 'Grâce aux minéraux de l’eau chaude', icone: '♨️', correcte: true },
              { texte: 'Elles ne mangent pas du tout', icone: '⛔' },
              { texte: 'Elles attendent la lumière du Soleil', icone: '☀️' },
            ],
            explication:
              'Elles transforment l’énergie chimique des minéraux, sans avoir besoin de photosynthèse.',
          },
        ],
        '9-12': [
          {
            id: 'toute-vie-depend-soleil',
            question: 'Toute vie sur Terre dépend-elle du Soleil pour se nourrir ?',
            reponses: [
              { texte: 'Non, certains écosystèmes vivent de chimie pure', icone: '♨️', correcte: true },
              { texte: 'Oui, sans exception', icone: '☀️' },
              { texte: 'Non, mais seules les plantes échappent à la règle', icone: '🌿' },
            ],
            explication:
              'Autour des cheminées hydrothermales, des bactéries chimiosynthétiques tirent leur énergie des minéraux, indépendamment du Soleil.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'vie-sans-soleil',
            question: 'Right at the bottom of the sea, is there life without the Sun?',
            reponses: [
              { texte: 'Yes, near the hot chimneys', icone: '♨️', correcte: true },
              { texte: 'No, nothing lives without the Sun', icone: '🚫' },
            ],
            explication:
              'Near these hot springs, bacteria and animals live perfectly well without any light.',
          },
        ],
        '6-8': [
          {
            id: 'bacteries-cheminee-nourriture',
            question: 'How do the bacteria of the hot vents feed themselves, with no light?',
            reponses: [
              { texte: 'Thanks to the minerals in the hot water', icone: '♨️', correcte: true },
              { texte: 'They do not eat at all', icone: '⛔' },
              { texte: 'They wait for the light of the Sun', icone: '☀️' },
            ],
            explication:
              'They turn the chemical energy of the minerals into food, with no need for photosynthesis.',
          },
        ],
        '9-12': [
          {
            id: 'toute-vie-depend-soleil',
            question: 'Does all life on Earth depend on the Sun for its food?',
            reponses: [
              { texte: 'No, some ecosystems live on pure chemistry', icone: '♨️', correcte: true },
              { texte: 'Yes, without exception', icone: '☀️' },
              { texte: 'No, but only plants escape the rule', icone: '🌿' },
            ],
            explication:
              'Around hydrothermal vents, chemosynthetic bacteria draw their energy from minerals, quite independently of the Sun.',
          },
        ],
      },
    },
  },
  {
    cardId: 'le-plancton-minuscule',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'air-vient-de',
            question: 'D’où vient une grande partie de l’air qu’on respire ?',
            reponses: [
              { texte: 'Du plancton dans la mer', icone: '🦠', correcte: true },
              { texte: 'Seulement des arbres', icone: '🌳' },
            ],
            explication: 'Le plancton fabrique lui aussi beaucoup de l’air que tu respires.',
          },
        ],
        '6-8': [
          {
            id: 'oxygene-plus-grande-partie',
            question: 'Qui fabrique la plus grande partie de l’oxygène de l’air ?',
            reponses: [
              { texte: 'Le plancton des océans', icone: '🦠', correcte: true },
              { texte: 'Seulement les arbres', icone: '🌳' },
              { texte: 'Seulement les poissons', icone: '🐟' },
            ],
            explication:
              'Le phytoplancton produit plus de la moitié de l’oxygène que nous respirons, autant ou plus que toutes les forêts.',
          },
        ],
        '9-12': [
          {
            id: 'oxygene-atmospherique-source',
            question: 'Quelle affirmation est correcte à propos de l’oxygène atmosphérique ?',
            reponses: [
              { texte: 'Le phytoplancton en produit la majeure partie', icone: '🦠', correcte: true },
              { texte: 'Il vient uniquement des forêts', icone: '🌳' },
              { texte: 'Il est produit uniquement par les océans profonds', icone: '🌊' },
            ],
            explication:
              'Le phytoplancton océanique produirait entre la moitié et les deux tiers de l’oxygène atmosphérique, davantage que l’ensemble des forêts terrestres.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'air-vient-de',
            question: 'Where does a big part of the air we breathe come from?',
            reponses: [
              { texte: 'From the plankton in the sea', icone: '🦠', correcte: true },
              { texte: 'Only from the trees', icone: '🌳' },
            ],
            explication: 'Plankton makes a great deal of the air you breathe too.',
          },
        ],
        '6-8': [
          {
            id: 'oxygene-plus-grande-partie',
            question: 'Who makes the biggest part of the oxygen in the air?',
            reponses: [
              { texte: 'The plankton of the oceans', icone: '🦠', correcte: true },
              { texte: 'Only the trees', icone: '🌳' },
              { texte: 'Only the fish', icone: '🐟' },
            ],
            explication:
              'Phytoplankton produces more than half of the oxygen we breathe, as much as all the forests or more.',
          },
        ],
        '9-12': [
          {
            id: 'oxygene-atmospherique-source',
            question: 'Which statement about atmospheric oxygen is correct?',
            reponses: [
              { texte: 'Phytoplankton produces most of it', icone: '🦠', correcte: true },
              { texte: 'It comes only from forests', icone: '🌳' },
              { texte: 'It is produced only by the deep oceans', icone: '🌊' },
            ],
            explication:
              'Ocean phytoplankton is thought to produce between half and two thirds of atmospheric oxygen, more than all the forests on land put together.',
          },
        ],
      },
    },
  },
  {
    cardId: 'pourquoi-on-flotte-mieux-dans-la-mer',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'flotte-pareil-bain',
            question: 'Flotte-t-on pareil dans la mer et dans le bain ?',
            reponses: [
              { texte: 'Non, mieux dans la mer', icone: '🏊', correcte: true },
              { texte: 'Oui, exactement pareil', icone: '🟰' },
            ],
            explication: 'L’eau de mer, salée, porte un peu plus fort qu’une eau sans sel.',
          },
        ],
        '6-8': [
          {
            id: 'flotte-mieux-mer-piscine',
            question: 'Pourquoi flotte-t-on plus facilement dans la mer que dans une piscine ?',
            reponses: [
              { texte: 'Parce que l’eau salée est plus dense', icone: '🧂', correcte: true },
              { texte: 'Parce que la mer est plus froide', icone: '❄️' },
              { texte: 'Parce qu’on flotte pareil partout', icone: '🟰' },
            ],
            explication:
              'Le sel rend l’eau plus lourde à volume égal, ce qui pousse davantage le corps vers le haut.',
          },
        ],
        '9-12': [
          {
            id: 'mer-morte-flottaison',
            question: 'Pourquoi flotte-t-on presque sans effort dans la mer Morte ?',
            reponses: [
              { texte: 'Sa très forte salinité la rend extrêmement dense', icone: '🧂', correcte: true },
              { texte: 'L’eau y est plus chaude qu’ailleurs', icone: '🌡️' },
              { texte: 'On flotte pareil dans toute eau, salée ou non', icone: '🟰' },
            ],
            explication:
              'Plus l’eau est dense, plus la poussée d’Archimède est forte : à trente pour cent de sel, cette poussée devient presque suffisante à elle seule.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'flotte-pareil-bain',
            question: 'Do you float the same in the sea and in the bath?',
            reponses: [
              { texte: 'No, better in the sea', icone: '🏊', correcte: true },
              { texte: 'Yes, exactly the same', icone: '🟰' },
            ],
            explication: 'Sea water is salty, and it holds you up a little better than water with no salt.',
          },
        ],
        '6-8': [
          {
            id: 'flotte-mieux-mer-piscine',
            question: 'Why do you float more easily in the sea than in a swimming pool?',
            reponses: [
              { texte: 'Because salt water is denser', icone: '🧂', correcte: true },
              { texte: 'Because the sea is colder', icone: '❄️' },
              { texte: 'Because you float the same everywhere', icone: '🟰' },
            ],
            explication:
              'Salt makes water heavier for the same amount, so it pushes the body upwards harder.',
          },
        ],
        '9-12': [
          {
            id: 'mer-morte-flottaison',
            question: 'Why do you float almost effortlessly in the Dead Sea?',
            reponses: [
              { texte: 'Its very high salinity makes it extremely dense', icone: '🧂', correcte: true },
              { texte: 'The water there is warmer than elsewhere', icone: '🌡️' },
              { texte: 'You float the same in any water, salty or not', icone: '🟰' },
            ],
            explication:
              'The denser the water, the stronger the upthrust: at thirty per cent salt, that push alone is almost enough on its own.',
          },
        ],
      },
    },
  },
  {
    cardId: 'la-vague-geante',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'tsunami-vague-vent',
            question: 'Un tsunami, est-ce une simple grosse vague de vent ?',
            reponses: [
              { texte: 'Non, ça vient d’un séisme', icone: '🌍', correcte: true },
              { texte: 'Oui, une vague de vent', icone: '🌬️' },
            ],
            explication: 'Un tsunami naît d’un tremblement de terre sous l’océan, pas du vent.',
          },
        ],
        '6-8': [
          {
            id: 'tsunami-declencheur',
            question: 'Qu’est-ce qui déclenche le plus souvent un tsunami ?',
            reponses: [
              { texte: 'Un séisme sous-marin', icone: '🌍', correcte: true },
              { texte: 'Une grosse tempête de vent', icone: '🌬️' },
              { texte: 'Une pluie très forte', icone: '🌧️' },
            ],
            explication:
              'Le sol qui bouge brutalement au fond de l’océan déplace une masse d’eau énorme, bien plus qu’un simple coup de vent.',
          },
        ],
        '9-12': [
          {
            id: 'tsunami-vs-vague-vent',
            question: 'En quoi un tsunami diffère-t-il d’une vague formée par le vent ?',
            reponses: [
              { texte: 'Il déplace toute la colonne d’eau, pas que la surface', icone: '🌍', correcte: true },
              { texte: 'Il est toujours plus lent', icone: '🐢' },
              { texte: 'Il ne se produit que pendant les tempêtes', icone: '🌬️' },
            ],
            explication:
              'Une vague de vent n’agite que la surface ; un tsunami, né d’un séisme, met en mouvement l’océan sur toute sa profondeur.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'tsunami-vague-vent',
            question: 'Is a tsunami just a big wave made by the wind?',
            reponses: [
              { texte: 'No, it comes from an earthquake', icone: '🌍', correcte: true },
              { texte: 'Yes, a wind wave', icone: '🌬️' },
            ],
            explication: 'A tsunami is born from an earthquake under the ocean, not from the wind.',
          },
        ],
        '6-8': [
          {
            id: 'tsunami-declencheur',
            question: 'What sets off a tsunami most of the time?',
            reponses: [
              { texte: 'An undersea earthquake', icone: '🌍', correcte: true },
              { texte: 'A big wind storm', icone: '🌬️' },
              { texte: 'Very heavy rain', icone: '🌧️' },
            ],
            explication:
              'Ground moving suddenly at the bottom of the ocean shifts an enormous mass of water, far more than a gust of wind ever could.',
          },
        ],
        '9-12': [
          {
            id: 'tsunami-vs-vague-vent',
            question: 'How does a tsunami differ from a wave formed by the wind?',
            reponses: [
              { texte: 'It moves the whole column of water, not just the surface', icone: '🌍', correcte: true },
              { texte: 'It is always slower', icone: '🐢' },
              { texte: 'It only happens during storms', icone: '🌬️' },
            ],
            explication:
              'A wind wave only stirs the surface; a tsunami, born from an earthquake, sets the ocean in motion over its whole depth.',
          },
        ],
      },
    },
  },
];
