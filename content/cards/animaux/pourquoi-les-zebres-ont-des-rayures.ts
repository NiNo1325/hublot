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
    en: {
      title: {
        '3-5': 'The zebra’s stripes',
        '6-8': 'Why zebras have stripes',
        '9-12': 'Why zebras have stripes',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'question',
              text: 'The zebra is covered in black and white stripes. But why?',
            },
            {
              id: 'pas-camouflage',
              text: 'It is not to hide: out on the savannah, you can see it very well from far away!',
            },
            {
              id: 'mouches',
              text: 'The stripes bother the little flies that bite: they cannot manage to land on them.',
            },
            {
              id: 'moins-piques',
              text: 'So the zebra gets bitten less. Its stripes are a bit like its own fly spray!',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'question',
              text: 'Why does a zebra wear those black and white stripes that show up so much?',
            },
            {
              id: 'pas-camouflage',
              text: 'For a long time people thought it was to hide in the grass. But on the short grass of the savannah, a striped zebra can be spotted from far away: camouflage does not explain it.',
            },
            {
              id: 'mouches',
              text: 'Scientists have noticed that horseflies — big biting flies — avoid landing on striped surfaces. The stripes throw them off just as they come in to land.',
            },
            {
              id: 'moins-piques',
              text: 'The result: a zebra is bitten far less than a plain-coated horse. And those flies carry diseases. So the stripes are probably above all a protection against bites.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'question',
              text: 'Zebra stripes have puzzled people for a long time. Several explanations have been put forward: camouflage, recognising one another, controlling heat, protection from flies.',
            },
            {
              id: 'pas-camouflage',
              text: 'Camouflage holds up badly: on the open savannah those contrasts make the zebra very visible, and its predators mostly see in shades of grey. That idea is now largely set aside.',
            },
            {
              id: 'mouches',
              text: 'Experiments point towards biting flies. By covering horses in striped coats, researchers found that horseflies slow down, skid and leave again without managing to land: the stripes disturb what they see as they come in.',
            },
            {
              id: 'moins-piques',
              text: 'These horseflies carry diseases that are sometimes fatal. A coat that strongly reduces bites therefore offers a real survival advantage. It is the best-supported hypothesis so far — science has not said its last word, but the stripes act first of all as an anti-fly shield, not a cloak of invisibility.',
            },
          ],
        },
      },
    },
  },
};
