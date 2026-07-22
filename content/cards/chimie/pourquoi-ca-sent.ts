import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : l'odorat n'est pas un sens à distance. Sentir, c'est
 * toucher — des molécules détachées de l'objet atteignent physiquement la
 * muqueuse nasale. D'où le délai de propagation, l'effet de la chaleur, et
 * l'adaptation qui fait qu'on ne sent plus sa propre maison.
 */
export const card: ScienceCard = {
  id: 'pourquoi-ca-sent',
  domainId: 'chimie',
  animationId: 'odeurs',
  thumbnail: '👃',
  content: {
    fr: {
      title: {
        '3-5': 'Quand ça sent bon',
        '6-8': 'Pourquoi ça sent',
        '9-12': 'L’odorat, un sens chimique',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'molecules',
              text: 'Quand le gâteau sent bon, c’est que des tout petits morceaux de gâteau sont partis dans l’air.',
            },
            {
              id: 'voyage',
              text: 'Ils flottent jusqu’à toi. C’est pour ça que l’odeur met un moment à traverser la pièce.',
            },
            {
              id: 'nez',
              text: 'Ils entrent dans ton nez et chatouillent de minuscules capteurs, qui préviennent ton cerveau.',
            },
            {
              id: 'habitude',
              text: 'Et si tu restes longtemps, tu ne sens plus rien : ton nez s’est habitué.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'molecules',
              text: 'Sentir, ce n’est pas recevoir une image ou un son venus de loin : c’est toucher. Des molécules se sont détachées de l’objet et flottent dans l’air.',
            },
            {
              id: 'voyage',
              text: 'Elles doivent donc voyager jusqu’à toi, portées par les courants d’air. D’où le temps que met une odeur à traverser une pièce — et le fait qu’on sente bien mieux un plat chaud : la chaleur libère beaucoup plus de molécules.',
            },
            {
              id: 'nez',
              text: 'Tout en haut de ton nez, des millions de capteurs les attrapent. Chaque type de capteur reconnaît une forme de molécule, et c’est la combinaison de ceux qui s’activent qui fait l’odeur — un peu comme des lettres forment un mot.',
            },
            {
              id: 'habitude',
              text: 'Au bout de quelques minutes, tu ne sens plus rien : les capteurs cessent de signaler ce qui ne change pas. C’est pourquoi on ne sent jamais l’odeur de sa propre maison, alors que les visiteurs, eux, la remarquent.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'molecules',
              text: 'L’olfaction est un sens chimique, non un sens à distance : les molécules odorantes, volatiles et généralement légères, doivent physiquement atteindre la muqueuse nasale pour être détectées.',
            },
            {
              id: 'voyage',
              text: 'Leur volatilité dépend de la température et de la masse moléculaire, ce qui explique qu’un plat chaud sente plus fort. Leur transport, lui, dépend des mouvements de l’air : une odeur ne se propage pas comme une onde, elle est convectée puis diffusée — d’où sa lenteur comparée au son ou à la lumière.',
            },
            {
              id: 'nez',
              text: 'L’épithélium olfactif porte des neurones équipés de récepteurs, dont environ quatre cents types fonctionnels chez l’humain. Une molécule en active plusieurs à des degrés divers, et c’est ce profil combinatoire que décode le bulbe olfactif : quatre cents récepteurs suffisent ainsi à distinguer un nombre immense d’odeurs. Cette organisation a valu le prix Nobel à Richard Axel et Linda Buck en 2004.',
            },
            {
              id: 'habitude',
              text: 'L’adaptation olfactive est rapide : les récepteurs se désensibilisent en quelques minutes face à un stimulus constant. Le système est fait pour signaler le changement, pas l’état — la même logique qui te fait oublier la sensation de tes vêtements quelques instants après les avoir enfilés.',
            },
          ],
        },
      },
    },
  },
};
