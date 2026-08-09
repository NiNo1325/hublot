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
  },
};
