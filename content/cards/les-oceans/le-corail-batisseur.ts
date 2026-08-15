import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : le corail n'est ni une plante ni une roche, mais un
 * animal (polype), apparenté aux méduses, qui sécrète un squelette calcaire.
 * Les récifs sont l'accumulation de ces squelettes sur des siècles.
 */
export const card: ScienceCard = {
  id: 'le-corail-batisseur',
  domainId: 'les-oceans',
  animationId: 'le-corail-batisseur',
  thumbnail: '🪸',
  content: {
    fr: {
      title: {
        '3-5': 'Le corail, un petit animal',
        '6-8': 'Le corail, un animal bâtisseur',
        '9-12': 'Le corail, architecte des récifs',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Le corail n’est pas un caillou : c’est un tout petit animal.',
            },
            {
              id: 'deux',
              text: 'Il se fabrique une petite maison dure, comme une coquille.',
            },
            {
              id: 'trois',
              text: 'Des millions de petits coraux vivent collés les uns aux autres.',
            },
            {
              id: 'quatre',
              text: 'Ensemble, ils forment un récif où plein d’animaux marins habitent.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Le corail ressemble à une plante ou à un rocher, mais c’est bien un animal, un cousin miniature de la méduse.',
            },
            {
              id: 'deux',
              text: 'Chaque petit corail fabrique autour de lui une coque dure en calcaire, comme un squelette extérieur.',
            },
            {
              id: 'trois',
              text: 'Des millions de ces minuscules animaux vivent collés les uns aux autres, génération après génération.',
            },
            {
              id: 'quatre',
              text: 'Leurs squelettes empilés forment peu à peu un récif de corail, un immense abri où des milliers d’espèces trouvent nourriture et refuge.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Le corail est un animal, le polype corallien, apparenté aux méduses et aux anémones de mer, et non une plante ni une roche.',
            },
            {
              id: 'deux',
              text: 'Chaque polype sécrète autour de lui un squelette externe en carbonate de calcium, qui reste en place après sa mort.',
            },
            {
              id: 'trois',
              text: 'Des colonies de millions de polypes génétiquement identiques vivent collées, chacune ajoutant sa part au squelette commun.',
            },
            {
              id: 'quatre',
              text: 'Accumulés sur des siècles, ces squelettes forment un récif corallien, une structure qui abrite près d’un quart des espèces marines connues alors qu’elle ne couvre qu’une infime fraction des océans.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Coral, a tiny animal',
        '6-8': 'Coral, an animal that builds',
        '9-12': 'Coral, architect of the reefs',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Coral is not a stone: it is a tiny little animal.',
            },
            {
              id: 'deux',
              text: 'It builds itself a hard little house, like a shell.',
            },
            {
              id: 'trois',
              text: 'Millions of little corals live all stuck together.',
            },
            {
              id: 'quatre',
              text: 'Together they make a reef where lots of sea animals live.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Coral looks like a plant or a rock, but it really is an animal, a tiny cousin of the jellyfish.',
            },
            {
              id: 'deux',
              text: 'Each little coral builds a hard chalky case around itself, like a skeleton worn on the outside.',
            },
            {
              id: 'trois',
              text: 'Millions of these tiny animals live stuck together, generation after generation.',
            },
            {
              id: 'quatre',
              text: 'Their piled-up skeletons slowly build a coral reef, a huge shelter where thousands of species find food and safety.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Coral is an animal, the coral polyp, related to jellyfish and sea anemones, and it is neither a plant nor a rock.',
            },
            {
              id: 'deux',
              text: 'Each polyp secretes an external skeleton of calcium carbonate around itself, which remains in place after the polyp dies.',
            },
            {
              id: 'trois',
              text: 'Colonies of millions of genetically identical polyps live packed together, each adding its share to the shared skeleton.',
            },
            {
              id: 'quatre',
              text: 'Built up over centuries, these skeletons form a coral reef, a structure that shelters nearly a quarter of all known marine species while covering only a minute fraction of the oceans.',
            },
          ],
        },
      },
    },
  },
};
