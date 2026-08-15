import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : ptérosaures et plésiosaures ne sont pas des dinosaures.
 * Le critère décisif est anatomique — la structure de l'articulation de la
 * hanche, propre au groupe des dinosaures — et non la taille ni l'époque.
 */
export const card: ScienceCard = {
  id: 'pas-tous-des-dinosaures',
  domainId: 'les-dinosaures',
  animationId: 'pas-tous-des-dinosaures',
  thumbnail: '🐊',
  content: {
    fr: {
      title: {
        '3-5': "Ce n'est pas un dinosaure !",
        '6-8': 'Pas tous des dinosaures !',
        '9-12': 'Ptérosaures et plésiosaures : de proches cousins, pas des dinosaures',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Le ptérosaure volait dans le ciel avec de grandes ailes de peau.',
            },
            {
              id: 'deux',
              text: 'Le plésiosaure, lui, nageait dans la mer avec un très long cou.',
            },
            {
              id: 'trois',
              text: 'Leurs squelettes ne ressemblent pas à ceux des dinosaures.',
            },
            {
              id: 'quatre',
              text: 'Ce sont des cousins des dinosaures, mais pas des dinosaures !',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: "Le ptérosaure volait grâce à une grande aile de peau tendue entre son corps et un doigt très allongé.",
            },
            {
              id: 'deux',
              text: "Le plésiosaure, lui, vivait dans l'océan et nageait avec quatre grandes nageoires et, pour certaines espèces, un cou immense.",
            },
            {
              id: 'trois',
              text: "En regardant leur squelette, les scientifiques voient tout de suite qu'il est très différent de celui des dinosaures, notamment au niveau des hanches.",
            },
            {
              id: 'quatre',
              text: 'Le ptérosaure et le plésiosaure sont des reptiles qui ont vécu à la même époque que les dinosaures, mais ce sont leurs cousins, pas des dinosaures.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: "Les ptérosaures forment un groupe de reptiles volants dont l'aile membraneuse est soutenue par un quatrième doigt démesurément allongé, une solution anatomique propre à ce groupe.",
            },
            {
              id: 'deux',
              text: "Les plésiosaures sont des reptiles marins, munis de quatre nageoires en forme de rame et, chez certaines espèces, d'un cou comptant plus de soixante-dix vertèbres.",
            },
            {
              id: 'trois',
              text: "Le critère qui définit les dinosaures repose notamment sur la structure de l'articulation de la hanche, absente chez les ptérosaures comme chez les plésiosaures : ils appartiennent à des groupes de reptiles distincts.",
            },
            {
              id: 'quatre',
              text: 'Ptérosaures et plésiosaures sont des reptiles contemporains des dinosaures, unis à eux par un ancêtre commun lointain, mais ce ne sont pas des dinosaures au sens scientifique strict.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'That one is not a dinosaur!',
        '6-8': 'Not all of them are dinosaurs!',
        '9-12': 'Pterosaurs and plesiosaurs: close cousins, not dinosaurs',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'The pterosaur flew in the sky with big wings made of skin.',
            },
            {
              id: 'deux',
              text: 'The plesiosaur swam in the sea with a very long neck.',
            },
            {
              id: 'trois',
              text: 'Their skeletons do not look like the skeletons of dinosaurs.',
            },
            {
              id: 'quatre',
              text: 'They are cousins of the dinosaurs, but not dinosaurs!',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'The pterosaur flew thanks to a great wing of skin stretched between its body and one enormously long finger.',
            },
            {
              id: 'deux',
              text: 'The plesiosaur, for its part, lived in the ocean and swam with four large flippers and, in some species, a huge neck.',
            },
            {
              id: 'trois',
              text: 'Looking at their skeletons, scientists see straight away that they are very different from those of the dinosaurs, especially around the hips.',
            },
            {
              id: 'quatre',
              text: 'The pterosaur and the plesiosaur are reptiles that lived at the same time as the dinosaurs, but they are their cousins, not dinosaurs.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Pterosaurs form a group of flying reptiles whose membrane wing is held out by a fourth finger of extraordinary length, an anatomical solution unique to the group.',
            },
            {
              id: 'deux',
              text: 'Plesiosaurs are marine reptiles fitted with four paddle-shaped flippers and, in some species, a neck of more than seventy vertebrae.',
            },
            {
              id: 'trois',
              text: 'The criterion that defines the dinosaurs rests above all on the structure of the hip joint, which neither pterosaurs nor plesiosaurs possess: they belong to separate reptile groups.',
            },
            {
              id: 'quatre',
              text: 'Pterosaurs and plesiosaurs are reptiles contemporary with the dinosaurs, joined to them by a distant common ancestor, but they are not dinosaurs in the strict scientific sense.',
            },
          ],
        },
      },
    },
  },
};
