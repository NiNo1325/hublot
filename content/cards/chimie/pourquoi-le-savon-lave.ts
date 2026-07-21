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
  },
};
