import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : un squelette de dinosaure exposé est presque toujours
 * incomplet. Les os manquants sont estimés par comparaison anatomique avec des
 * espèces proches, notamment les oiseaux et les crocodiles actuels.
 */
export const card: ScienceCard = {
  id: 'le-puzzle-des-os',
  domainId: 'les-dinosaures',
  animationId: 'le-puzzle-des-os',
  thumbnail: '🦴',
  content: {
    fr: {
      title: {
        '3-5': 'Le jeu des os',
        '6-8': 'Le puzzle des os',
        '9-12': "Reconstituer un squelette de dinosaure",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: "Des chercheurs creusent la terre et trouvent de vieux os cachés dans la roche.",
            },
            {
              id: 'deux',
              text: "Ils nettoient chaque os tout doucement, puis les assemblent comme un grand puzzle.",
            },
            {
              id: 'trois',
              text: "Il manque des morceaux ! Alors on regarde les animaux d'aujourd'hui pour deviner ce qui manque.",
            },
            {
              id: 'quatre',
              text: "Puis on imagine ses muscles, sa peau et comment il se tenait debout.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: "Des paléontologues creusent patiemment la roche et y découvrent des os très anciens, parfois vieux de millions d'années.",
            },
            {
              id: 'deux',
              text: "En laboratoire, chaque os est nettoyé avec précaution, puis les scientifiques essaient de les assembler comme les pièces d'un immense puzzle.",
            },
            {
              id: 'trois',
              text: "Comme il manque presque toujours des morceaux, les scientifiques comparent avec le squelette d'animaux actuels, comme les oiseaux ou les crocodiles, pour combler les vides.",
            },
            {
              id: 'quatre',
              text: "Enfin, on imagine les muscles, la peau et la posture, pour redonner vie à un animal disparu depuis des millions d'années.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: "Les paléontologues fouillent des couches de roche sédimentaire à la recherche d'ossements fossilisés, un travail de terrain qui peut prendre des semaines.",
            },
            {
              id: 'deux',
              text: "Une fois dégagés et consolidés, les ossements sont catalogués puis assemblés en s'appuyant sur l'anatomie comparée, car un squelette complet est rarissime.",
            },
            {
              id: 'trois',
              text: "Les os manquants sont estimés par comparaison avec des espèces proches, dont les oiseaux et les crocodiles, les plus proches parents vivants des dinosaures.",
            },
            {
              id: 'quatre',
              text: "Restent à reconstituer muscles, tissus et posture, une étape plus incertaine qui explique pourquoi l'apparence d'une même espèce évolue selon les découvertes.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The bone game',
        '6-8': 'The bone jigsaw',
        '9-12': 'Rebuilding a dinosaur skeleton',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Scientists dig into the ground and find old bones hidden in the rock.',
            },
            {
              id: 'deux',
              text: 'They clean each bone very gently, then fit them together like a big jigsaw.',
            },
            {
              id: 'trois',
              text: 'Some pieces are missing! So we look at animals today to guess what is missing.',
            },
            {
              id: 'quatre',
              text: 'Then we imagine its muscles, its skin, and how it stood up.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Palaeontologists dig patiently into the rock and find very old bones there, sometimes millions of years old.',
            },
            {
              id: 'deux',
              text: 'In the laboratory, each bone is cleaned with great care, and then the scientists try to fit them together like the pieces of an enormous jigsaw.',
            },
            {
              id: 'trois',
              text: 'Since pieces are nearly always missing, the scientists compare them with the skeletons of animals alive today, such as birds or crocodiles, to fill the gaps.',
            },
            {
              id: 'quatre',
              text: 'Finally, we picture the muscles, the skin and the posture, to bring back to life an animal that vanished millions of years ago.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Palaeontologists search layers of sedimentary rock for fossilised bones, fieldwork that can take weeks.',
            },
            {
              id: 'deux',
              text: 'Once freed from the rock and stabilised, the bones are catalogued and then assembled using comparative anatomy, because a complete skeleton is extremely rare.',
            },
            {
              id: 'trois',
              text: 'The missing bones are estimated by comparison with closely related species, among them birds and crocodiles, the nearest living relatives of the dinosaurs.',
            },
            {
              id: 'quatre',
              text: 'Muscles, tissues and posture remain to be reconstructed, a far more uncertain stage that explains why the appearance of a single species keeps changing as new discoveries are made.',
            },
          ],
        },
      },
    },
  },
};
