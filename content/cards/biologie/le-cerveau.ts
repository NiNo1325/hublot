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
  },
};
