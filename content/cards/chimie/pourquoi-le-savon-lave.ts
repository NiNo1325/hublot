import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : le savon ne « tue » ni ne dissout la saleté. C'est un
 * intermédiaire entre deux choses qui se repoussent — une molécule à deux
 * bouts, l'un qui aime l'eau, l'autre le gras. La nuance pour les grands : sur
 * les virus enveloppés, il fait bel et bien plus que décrocher.
 */
export const card: ScienceCard = {
  id: 'pourquoi-le-savon-lave',
  domainId: 'chimie',
  animationId: 'savon',
  thumbnail: '🧼',
  content: {
    fr: {
      title: {
        '3-5': 'Le savon et les mains sales',
        '6-8': 'Pourquoi le savon lave',
        '9-12': 'Le savon : une molécule à deux bouts',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'gras',
              text: 'Tes mains sont pleines de gras. Tu les passes sous l’eau : l’eau glisse dessus, et le gras reste.',
            },
            {
              id: 'deux-bouts',
              text: 'Le savon, lui, a un secret. Chacun de ses tout petits morceaux aime l’eau d’un côté, et le gras de l’autre.',
            },
            {
              id: 'entourer',
              text: 'Alors ils viennent entourer la tache de gras et l’attrapent de tous les côtés.',
            },
            {
              id: 'emporter',
              text: 'L’eau peut enfin l’emporter. Le savon n’a rien tué : il a décollé la saleté.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'gras',
              text: 'L’eau seule n’enlève pas le gras : les deux ne se mélangent pas, comme l’huile et le vinaigre qu’on secoue et qui se séparent aussitôt.',
            },
            {
              id: 'deux-bouts',
              text: 'Une molécule de savon a deux extrémités opposées : une tête qui adore l’eau, une longue queue qui adore le gras. C’est cette double nature qui fait tout le travail.',
            },
            {
              id: 'entourer',
              text: 'Les queues plongent dans la goutte de gras, les têtes restent tournées vers l’eau. La saleté se retrouve enfermée dans une bulle minuscule, aimée de l’eau tout autour.',
            },
            {
              id: 'emporter',
              text: 'Le rinçage emporte ces bulles, et la graisse avec. Le savon n’a rien détruit : il a servi d’intermédiaire entre deux choses qui se repoussent.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'gras',
              text: 'L’eau est une molécule polaire, les graisses ne le sont pas : elles ne s’attirent pas, et l’eau contourne le gras au lieu de le dissoudre. Frotter plus fort n’y change rien.',
            },
            {
              id: 'deux-bouts',
              text: 'Un savon est un tensioactif : une longue chaîne carbonée hydrophobe terminée par une tête ionique hydrophile. La même molécule est donc à l’aise dans les deux milieux à la fois.',
            },
            {
              id: 'entourer',
              text: 'Au-delà d’une certaine concentration, ces molécules s’organisent spontanément en micelles : les queues emprisonnent la gouttelette de graisse, les têtes forment une surface que l’eau accepte. La saleté devient transportable.',
            },
            {
              id: 'emporter',
              text: 'Le rinçage évacue les micelles. Le savon n’a donc rien tué ni dissous — il a abaissé la tension entre l’eau et le gras. Face aux virus enveloppés, en revanche, il fait davantage : leur enveloppe étant elle aussi grasse, il la désagrège.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Soap and dirty hands',
        '6-8': 'Why soap cleans',
        '9-12': 'Soap: a molecule with two ends',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'gras',
              text: 'Your hands are covered in grease. You hold them under the water: the water slides off, and the grease stays.',
            },
            {
              id: 'deux-bouts',
              text: 'Soap has a secret. Each of its tiny little bits loves water on one side, and grease on the other.',
            },
            {
              id: 'entourer',
              text: 'So they come and surround the greasy patch and grab it from every side.',
            },
            {
              id: 'emporter',
              text: 'Now the water can carry it away. The soap has killed nothing: it has unstuck the dirt.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'gras',
              text: 'Water on its own does not remove grease: the two do not mix, like the oil and vinegar you shake up and which separate again at once.',
            },
            {
              id: 'deux-bouts',
              text: 'A soap molecule has two opposite ends: a head that adores water, and a long tail that adores grease. It is this double nature that does all the work.',
            },
            {
              id: 'entourer',
              text: 'The tails dive into the drop of grease, and the heads stay turned towards the water. The dirt ends up shut inside a tiny bubble, loved by the water all around it.',
            },
            {
              id: 'emporter',
              text: 'Rinsing carries these bubbles off, and the grease with them. The soap has destroyed nothing: it has acted as a go-between for two things that push each other away.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'gras',
              text: 'Water is a polar molecule, fats are not: they do not attract one another, and water flows around grease instead of dissolving it. Rubbing harder changes nothing.',
            },
            {
              id: 'deux-bouts',
              text: 'A soap is a surfactant: a long hydrophobic carbon chain ending in a hydrophilic ionic head. The same molecule is therefore at home in both environments at once.',
            },
            {
              id: 'entourer',
              text: 'Above a certain concentration, these molecules organise themselves spontaneously into micelles: the tails imprison the droplet of grease, the heads form a surface that water accepts. The dirt becomes something the water can carry.',
            },
            {
              id: 'emporter',
              text: 'Rinsing flushes the micelles away. So the soap has killed nothing and dissolved nothing — it has lowered the tension between water and grease. Against enveloped viruses, however, it does more: their envelope is greasy too, so it breaks it apart.',
            },
          ],
        },
      },
    },
  },
};
