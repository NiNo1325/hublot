import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : deux neuromythes parmi les plus tenaces. On n'utilise
 * pas dix pour cent de son cerveau — l'argument énergétique suffit à le
 * réfuter — et personne n'est « cerveau gauche » ou « cerveau droit ». Ce qui
 * est vrai, et plus intéressant, c'est la plasticité.
 */
export const card: ScienceCard = {
  id: 'le-cerveau',
  domainId: 'biologie',
  animationId: 'cerveau',
  thumbnail: '🧠',
  content: {
    fr: {
      title: {
        '3-5': 'Ce qu’il y a dans ta tête',
        '6-8': 'Le cerveau et ses fausses légendes',
        '9-12': 'Le cerveau : deux neuromythes et un fait',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'dix-pour-cent',
              text: 'Ton cerveau est dans ta tête. Il travaille tout le temps, même pendant que tu dors.',
            },
            {
              id: 'partout',
              text: 'Tu ne t’en sers pas juste un petit bout : tu t’en sers en entier, toute la journée.',
            },
            {
              id: 'gauche-droite',
              text: 'Il a deux moitiés, mais elles travaillent ensemble, comme tes deux mains.',
            },
            {
              id: 'plasticite',
              text: 'Et quand tu apprends, il change un peu à l’intérieur. C’est pour ça qu’à force d’essayer, ça finit par marcher.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'dix-pour-cent',
              text: 'On répète souvent qu’on n’utiliserait que dix pour cent de son cerveau. C’est faux, et ça ne l’a jamais été.',
            },
            {
              id: 'partout',
              text: 'Les appareils qui observent le cerveau montrent l’inverse : toutes les régions s’activent, selon le moment et la tâche. Et voici l’argument imparable : ton cerveau consomme un cinquième de ton énergie. Un corps n’entretiendrait jamais un organe aussi coûteux s’il en gaspillait les neuf dixièmes.',
            },
            {
              id: 'gauche-droite',
              text: 'Autre légende : les gens « cerveau gauche », logiques, et les gens « cerveau droit », créatifs. Les deux moitiés ont bien leurs spécialités, mais elles s’échangent des informations en permanence. Personne n’utilise une moitié plus que l’autre.',
            },
            {
              id: 'plasticite',
              text: 'Ce qui est vrai est plus intéressant : le cerveau se transforme quand on apprend. Les connexions qui servent se renforcent, les autres s’effacent. Apprendre, ce n’est pas remplir un réservoir, c’est modifier un réseau.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'dix-pour-cent',
              text: 'Le mythe des dix pour cent est sans doute le neuromythe le plus répandu. Aucune étude ne l’a jamais soutenu ; il vient d’une déformation de propos anciens sur les neurones dits silencieux.',
            },
            {
              id: 'partout',
              text: 'L’imagerie fonctionnelle met en évidence une activité dans l’ensemble de l’encéphale au fil d’une journée. Un chiffre clôt le débat : le cerveau représente deux pour cent de la masse du corps et consomme environ vingt pour cent de son énergie au repos. Une telle dépense pour neuf dixièmes d’organe inutile serait une aberration évolutive — et toute lésion, même limitée, entraîne un déficit.',
            },
            {
              id: 'gauche-droite',
              text: 'La latéralisation existe bel et bien : le langage est majoritairement traité à gauche chez la plupart des droitiers. Mais elle ne fonde aucune typologie de personnalité. Une étude portant sur plus de mille cerveaux n’a trouvé aucun individu à dominance globale droite ou gauche.',
            },
            {
              id: 'plasticite',
              text: 'Le fait solide, c’est la plasticité : les synapses se renforcent ou disparaissent selon l’usage, tout au long de la vie. Chez les chauffeurs de taxi londoniens, qui mémorisent des milliers de rues, l’hippocampe postérieur — impliqué dans la mémoire spatiale — est mesurablement plus développé, et d’autant plus que l’expérience est longue.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'What is inside your head',
        '6-8': 'The brain and the tales told about it',
        '9-12': 'The brain: two neuromyths and one fact',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'dix-pour-cent',
              text: 'Your brain is inside your head. It works all the time, even while you are asleep.',
            },
            {
              id: 'partout',
              text: 'You do not use just a little bit of it: you use all of it, all day long.',
            },
            {
              id: 'gauche-droite',
              text: 'It has two halves, but they work together, like your two hands.',
            },
            {
              id: 'plasticite',
              text: 'And when you learn, it changes a little inside. That is why, when you keep trying, it ends up working.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'dix-pour-cent',
              text: 'People often repeat that we only use ten per cent of our brain. That is false, and it never was true.',
            },
            {
              id: 'partout',
              text: 'The machines that watch the brain show the opposite: every region lights up, depending on the moment and the task. And here is the argument that settles it: your brain uses a fifth of your energy. A body would never keep up an organ that expensive if it wasted nine tenths of it.',
            },
            {
              id: 'gauche-droite',
              text: 'Another legend: “left-brained” people, who are logical, and “right-brained” people, who are creative. The two halves really do have their specialities, but they swap information the whole time. Nobody uses one half more than the other.',
            },
            {
              id: 'plasticite',
              text: 'What is true is far more interesting: the brain reshapes itself when you learn. The connections you use grow stronger, the others fade away. Learning is not filling a tank, it is changing a network.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'dix-pour-cent',
              text: 'The ten per cent myth is probably the most widespread neuromyth of all. No study has ever supported it; it comes from a distortion of old remarks about so-called silent neurons.',
            },
            {
              id: 'partout',
              text: 'Functional imaging shows activity right across the brain over the course of a day. One figure closes the debate: the brain accounts for two per cent of body mass and uses about twenty per cent of its energy at rest. Such an outlay for an organ that was nine tenths useless would be an evolutionary absurdity — and any injury, however small, causes a deficit.',
            },
            {
              id: 'gauche-droite',
              text: 'Lateralisation is entirely real: language is handled mainly on the left in most right-handed people. But it is no basis for sorting people into types. A study of more than a thousand brains found not one individual with an overall left or right dominance.',
            },
            {
              id: 'plasticite',
              text: 'The solid fact is plasticity: synapses strengthen or vanish according to use, throughout life. In London taxi drivers, who memorise thousands of streets, the posterior hippocampus — involved in spatial memory — is measurably larger, and the longer they have driven, the larger it is.',
            },
          ],
        },
      },
    },
  },
};
