import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : au sens cladistique strict, les oiseaux ne sont pas
 * apparentés aux dinosaures, ils EN sont — un sous-groupe de théropodes ayant
 * survécu à l'extinction du Crétacé-Paléogène.
 */
export const card: ScienceCard = {
  id: 'les-oiseaux-sont-des-dinosaures',
  domainId: 'les-dinosaures',
  animationId: 'les-oiseaux-sont-des-dinosaures',
  thumbnail: '🐦',
  content: {
    fr: {
      title: {
        '3-5': "L'oiseau, un dinosaure",
        '6-8': 'Les oiseaux sont des dinosaures',
        '9-12': 'Les oiseaux, derniers dinosaures vivants',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Il y a longtemps, des petits dinosaures avaient déjà des plumes douces.',
            },
            {
              id: 'deux',
              text: "Certains ont sauté d'arbre en arbre, puis ont appris à planer et à voler.",
            },
            {
              id: 'trois',
              text: 'Quand le gros caillou est tombé du ciel, ces petits dinosaures à plumes ont survécu.',
            },
            {
              id: 'quatre',
              text: "Aujourd'hui, ce sont leurs enfants : les oiseaux que tu vois voler !",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: "Bien avant l'extinction, certains petits dinosaures carnivores portaient déjà des plumes, d'abord pour se tenir chaud.",
            },
            {
              id: 'deux',
              text: 'Chez certaines espèces, ces plumes sont devenues assez grandes pour permettre de planer entre les branches, puis de voler pour de vrai.',
            },
            {
              id: 'trois',
              text: "Ces petits dinosaures à plumes faisaient partie des rares survivants du jour de l'astéroïde, grâce à leur petite taille et à leur capacité à voler loin.",
            },
            {
              id: 'quatre',
              text: "Ils ont continué d'évoluer pendant des millions d'années pour donner tous les oiseaux que l'on connaît aujourd'hui : le moineau comme l'autruche.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: "Dès le Jurassique, des théropodes de petite taille, cousins du redoutable Vélociraptor, arboraient un plumage, d'abord utile pour l'isolation thermique et la parade.",
            },
            {
              id: 'deux',
              text: 'Chez certaines lignées, les plumes asymétriques des membres antérieurs ont progressivement permis le vol plané, puis le vol battu actif.',
            },
            {
              id: 'trois',
              text: "Ces dinosaures aviens de petite taille figuraient parmi les rares survivants de l'extinction Crétacé-Paléogène, contrairement à leurs cousins non aviens de grande taille.",
            },
            {
              id: 'quatre',
              text: "Toute la diversité actuelle des oiseaux, environ dix mille espèces, descend de ces survivants : les oiseaux ne sont pas apparentés aux dinosaures, ils EN sont, au sens cladistique strict.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The bird, a dinosaur',
        '6-8': 'Birds are dinosaurs',
        '9-12': 'Birds, the last living dinosaurs',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'A long time ago, little dinosaurs already had soft feathers.',
            },
            {
              id: 'deux',
              text: 'Some jumped from tree to tree, then learnt to glide and to fly.',
            },
            {
              id: 'trois',
              text: 'When the big rock fell from the sky, these little feathered dinosaurs survived.',
            },
            {
              id: 'quatre',
              text: 'Today, here are their children: the birds you see flying about!',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Long before the extinction, some small meat-eating dinosaurs already wore feathers, at first simply to keep warm.',
            },
            {
              id: 'deux',
              text: 'In certain species, these feathers grew big enough to glide from branch to branch, and then to fly for real.',
            },
            {
              id: 'trois',
              text: 'These small feathered dinosaurs were among the few survivors of the day of the asteroid, thanks to their small size and their ability to fly a long way.',
            },
            {
              id: 'quatre',
              text: 'They kept on evolving for millions of years to give us every bird we know today: the sparrow just as much as the ostrich.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'As early as the Jurassic, small theropods, cousins of the fearsome Velociraptor, sported plumage, useful at first for keeping warm and for display.',
            },
            {
              id: 'deux',
              text: 'In certain lineages, the asymmetrical feathers of the forelimbs gradually made gliding flight possible, and then active flapping flight.',
            },
            {
              id: 'trois',
              text: 'These small avian dinosaurs were among the few survivors of the Cretaceous-Palaeogene extinction, unlike their large non-avian cousins.',
            },
            {
              id: 'quatre',
              text: 'All the diversity of birds today, about ten thousand species, descends from those survivors: birds are not merely related to dinosaurs, they ARE dinosaurs, in the strict cladistic sense.',
            },
          ],
        },
      },
    },
  },
};
