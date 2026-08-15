import type { ScienceCard } from '@/lib/types';

export const card: ScienceCard = {
  id: 'les-empreintes-digitales',
  domainId: 'le-corps',
  animationId: 'les-empreintes-digitales',
  thumbnail: '👆',
  content: {
    fr: {
      title: {
        '3-5': 'Le dessin de tes doigts',
        '6-8': 'Les empreintes digitales',
        '9-12': 'Pourquoi tes empreintes sont uniques',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Regarde le bout de tes doigts : il y a plein de petites lignes qui dessinent des tourbillons.',
            },
            {
              id: 'deux',
              text: 'Ce dessin s’est formé avant même que tu ne naisses.',
            },
            {
              id: 'trois',
              text: 'Ces petites lignes t’aident à bien attraper les objets.',
            },
            {
              id: 'quatre',
              text: 'Ton dessin n’existe que sur tes doigts à toi : personne d’autre n’a exactement le même, même pas un jumeau.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Le bout de tes doigts est couvert de fines lignes qui dessinent des boucles, des tourbillons et des arches : ce sont tes empreintes digitales.',
            },
            {
              id: 'deux',
              text: 'Ce motif s’est formé bien avant ta naissance, pendant que tu grandissais dans le ventre de ta maman.',
            },
            {
              id: 'trois',
              text: 'Ces reliefs augmentent le frottement contre les objets : ils t’aident à saisir et à tenir fermement les choses.',
            },
            {
              id: 'quatre',
              text: 'Le dessin exact dépend de petits hasards de croissance : même des vrais jumeaux, qui ont pourtant le même patrimoine génétique, ont des empreintes différentes.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Le bout des doigts porte un relief de crêtes papillaires, organisées en boucles, tourbillons ou arches selon les personnes.',
            },
            {
              id: 'deux',
              text: 'Ce motif se forme durant la vie fœtale, sous l’influence de la pression du liquide amniotique et de la croissance des tissus, à un stade où le moindre hasard local influe sur le dessin final.',
            },
            {
              id: 'trois',
              text: 'Ces crêtes augmentent la friction avec les surfaces et facilitent la préhension des objets.',
            },
            {
              id: 'quatre',
              text: 'Parce qu’elles dépendent de hasards de développement et non uniquement des gènes, les empreintes digitales sont uniques à chaque individu : même deux vrais jumeaux, au patrimoine génétique identique, ont des empreintes différentes.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The pattern on your fingers',
        '6-8': 'Fingerprints',
        '9-12': 'Why your fingerprints are unique',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Look at your fingertips: they are covered in little lines that draw swirls.',
            },
            {
              id: 'deux',
              text: 'This pattern was made before you were even born.',
            },
            {
              id: 'trois',
              text: 'These little lines help you grab hold of things properly.',
            },
            {
              id: 'quatre',
              text: 'Your pattern exists only on your own fingers: nobody else has exactly the same one, not even a twin.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Your fingertips are covered in fine lines that draw loops, whorls and arches: those are your fingerprints.',
            },
            {
              id: 'deux',
              text: 'This pattern formed long before you were born, while you were growing inside your mum’s tummy.',
            },
            {
              id: 'trois',
              text: 'These ridges increase the friction against objects: they help you take hold of things and grip them firmly.',
            },
            {
              id: 'quatre',
              text: 'The exact pattern depends on tiny accidents of growth: even identical twins, who share exactly the same genes, have different fingerprints.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'The fingertips carry a relief of friction ridges, arranged into loops, whorls or arches depending on the person.',
            },
            {
              id: 'deux',
              text: 'This pattern forms during life in the womb, under the influence of the pressure of the amniotic fluid and the growth of the tissues, at a stage where the smallest local chance event shapes the final design.',
            },
            {
              id: 'trois',
              text: 'These ridges increase friction with surfaces and make it easier to grip objects.',
            },
            {
              id: 'quatre',
              text: 'Because they depend on the chance events of development and not on genes alone, fingerprints are unique to each individual: even two identical twins, with exactly the same genes, have different fingerprints.',
            },
          ],
        },
      },
    },
  },
};
