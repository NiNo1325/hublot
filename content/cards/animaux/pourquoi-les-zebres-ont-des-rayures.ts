import type { ScienceCard } from '@/lib/types';

/**
 * Idée reçue corrigée : « les rayures servent à se camoufler dans les hautes
 * herbes ». En réalité, un zèbre rayé se remarque de loin dans la savane. L'
 * hypothèse la mieux étayée aujourd'hui : les rayures gênent les mouches
 * piqueuses (taons), qui se posent beaucoup moins sur un pelage rayé.
 */
export const card: ScienceCard = {
  id: 'pourquoi-les-zebres-ont-des-rayures',
  domainId: 'animaux',
  animationId: 'zebre',
  thumbnail: '🦓',
  content: {
    fr: {
      title: {
        '3-5': 'Les rayures du zèbre',
        '6-8': 'Pourquoi les zèbres ont des rayures',
        '9-12': 'Pourquoi les zèbres ont des rayures',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'question',
              text: 'Le zèbre est tout rayé de noir et de blanc. Mais pourquoi ?',
            },
            {
              id: 'pas-camouflage',
              text: 'Ce n’est pas pour se cacher : dans la savane, on le voit très bien de loin !',
            },
            {
              id: 'mouches',
              text: 'Les rayures gênent les petites mouches qui piquent : elles n’arrivent pas à se poser dessus.',
            },
            {
              id: 'moins-piques',
              text: 'Alors le zèbre est moins piqué. Ses rayures, c’est un peu son anti-moustique !',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'question',
              text: 'Pourquoi un zèbre porte-t-il ces rayures noires et blanches si voyantes ?',
            },
            {
              id: 'pas-camouflage',
              text: 'On a longtemps cru que c’était pour se camoufler dans les herbes. Mais dans la savane rase, un zèbre rayé se repère de loin : le camouflage n’explique pas.',
            },
            {
              id: 'mouches',
              text: 'Les scientifiques ont observé que les taons — de grosses mouches piqueuses — évitent de se poser sur les surfaces rayées. Les rayures les déboussolent au moment d’atterrir.',
            },
            {
              id: 'moins-piques',
              text: 'Résultat : un zèbre est bien moins piqué qu’un cheval uni. Or ces mouches transmettent des maladies. Les rayures seraient donc surtout une protection contre les piqûres.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'question',
              text: 'Les rayures du zèbre intriguent depuis longtemps. Plusieurs explications ont été proposées : camouflage, reconnaissance entre individus, régulation de la chaleur, protection contre les mouches.',
            },
            {
              id: 'pas-camouflage',
              text: 'Le camouflage tient mal : dans la savane ouverte, ces contrastes rendent le zèbre très visible, et ses prédateurs voient surtout en nuances de gris. Cette piste est aujourd’hui largement écartée.',
            },
            {
              id: 'mouches',
              text: 'Les expériences convergent vers les mouches piqueuses. En recouvrant des chevaux de robes rayées, les chercheurs ont constaté que les taons ralentissent, dérapent et repartent sans réussir à se poser : les rayures perturbent leur perception à l’atterrissage.',
            },
            {
              id: 'moins-piques',
              text: 'Ces taons transmettent des maladies parfois mortelles. Un pelage qui réduit fortement les piqûres offre donc un vrai avantage de survie. C’est l’hypothèse la mieux étayée à ce jour — la science n’a pas dit son dernier mot, mais les rayures servent d’abord de bouclier anti-mouches, pas de cape d’invisibilité.',
            },
          ],
        },
      },
    },
  },
};
