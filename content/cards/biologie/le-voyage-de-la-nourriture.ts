import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : deux idées reçues à la fois. La nourriture ne descend
 * pas parce qu'elle tombe — des muscles la poussent, d'où la possibilité de
 * manger la tête en bas — et l'estomac n'est pas le lieu de la digestion utile :
 * l'absorption se fait dans l'intestin grêle.
 */
export const card: ScienceCard = {
  id: 'le-voyage-de-la-nourriture',
  domainId: 'biologie',
  animationId: 'digestion',
  thumbnail: '🍽️',
  content: {
    fr: {
      title: {
        '3-5': 'Où va ce que tu manges',
        '6-8': 'Le voyage de la nourriture',
        '9-12': 'La digestion, du premier au dernier mètre',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'avaler',
              text: 'Quand tu avales, la nourriture ne tombe pas toute seule : des muscles la poussent, comme on presse un tube de dentifrice.',
            },
            {
              id: 'estomac',
              text: 'Elle arrive dans l’estomac, une poche qui la mélange et l’écrase jusqu’à en faire une bouillie.',
            },
            {
              id: 'intestin',
              text: 'Ensuite, elle passe dans un très long tuyau tout enroulé. C’est là que ton corps prend ce dont il a besoin pour grandir.',
            },
            {
              id: 'sortie',
              text: 'Ce qui ne sert pas continue jusqu’au bout, et sort quand tu vas aux toilettes.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'avaler',
              text: 'Un astronaute peut manger la tête en bas. La nourriture ne descend donc pas parce qu’elle tombe : des muscles la poussent tout au long du tuyau, comme une vague.',
            },
            {
              id: 'estomac',
              text: 'L’estomac n’est pas le bout du voyage, seulement une étape. Il malaxe la nourriture avec un liquide acide et la transforme en bouillie, pendant deux à trois heures.',
            },
            {
              id: 'intestin',
              text: 'Le vrai travail vient après, dans l’intestin grêle : sept mètres de tuyau replié, tapissé de milliers de petits reliefs. C’est là, et presque seulement là, que la nourriture passe dans le sang.',
            },
            {
              id: 'sortie',
              text: 'Le gros intestin récupère ensuite l’eau, et des milliards de bactéries y finissent le travail. Du repas aux toilettes, le voyage dure environ une journée.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'avaler',
              text: 'La déglutition est un réflexe musculaire : l’œsophage propulse les aliments par des ondes de contraction successives, le péristaltisme. La gravité n’y joue aucun rôle — d’où la possibilité de boire couché, ou en apesanteur.',
            },
            {
              id: 'estomac',
              text: 'L’estomac est un broyeur chimique, pas un lieu d’absorption. Acide chlorhydrique et enzymes y attaquent surtout les protéines ; à part l’alcool et quelques médicaments, presque rien n’y passe dans le sang.',
            },
            {
              id: 'intestin',
              text: 'L’absorption a lieu dans l’intestin grêle, long d’environ sept mètres. Villosités et microvillosités y multiplient la surface d’échange jusqu’à une trentaine de mètres carrés, l’équivalent d’une grande pièce. Nutriments et eau franchissent la paroi et rejoignent le sang.',
            },
            {
              id: 'sortie',
              text: 'Le côlon récupère l’eau restante et abrite un microbiote de plusieurs centaines d’espèces, qui digère des fibres que nos propres enzymes ne savent pas couper. Du repas à la sortie, il s’écoule vingt-quatre à quarante-huit heures.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Where your food goes',
        '6-8': 'The journey of your food',
        '9-12': 'Digestion, from the first metre to the last',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'avaler',
              text: 'When you swallow, the food does not fall down on its own: muscles push it, the way you squeeze a tube of toothpaste.',
            },
            {
              id: 'estomac',
              text: 'It lands in your stomach, a pouch that mixes it and squashes it until it turns into mush.',
            },
            {
              id: 'intestin',
              text: 'Then it goes into a very long tube, all curled up. That is where your body takes what it needs to grow.',
            },
            {
              id: 'sortie',
              text: 'Whatever is no use carries on to the end, and comes out when you go to the toilet.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'avaler',
              text: 'An astronaut can eat upside down. So food does not go down because it falls: muscles push it all along the tube, like a wave.',
            },
            {
              id: 'estomac',
              text: 'The stomach is not the end of the journey, only a stop along the way. It kneads the food with an acid liquid and turns it into mush, over two or three hours.',
            },
            {
              id: 'intestin',
              text: 'The real work comes afterwards, in the small intestine: seven metres of folded tube, lined with thousands of tiny bumps. It is there, and almost only there, that food passes into the blood.',
            },
            {
              id: 'sortie',
              text: 'The large intestine then takes back the water, and billions of bacteria finish the job. From the meal to the toilet, the journey lasts about a day.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'avaler',
              text: 'Swallowing is a muscular reflex: the oesophagus drives food along with successive waves of contraction, called peristalsis. Gravity plays no part at all — which is why you can drink lying down, or in weightlessness.',
            },
            {
              id: 'estomac',
              text: 'The stomach is a chemical grinder, not a place of absorption. Hydrochloric acid and enzymes attack mainly the proteins there; apart from alcohol and a few medicines, almost nothing passes into the blood.',
            },
            {
              id: 'intestin',
              text: 'Absorption takes place in the small intestine, about seven metres long. Villi and microvilli multiply the exchange surface up to some thirty square metres, the size of a large room. Nutrients and water cross the wall and join the blood.',
            },
            {
              id: 'sortie',
              text: 'The colon recovers the remaining water and houses a microbiota of several hundred species, which digests fibres our own enzymes cannot cut up. From the meal to the way out, twenty-four to forty-eight hours go by.',
            },
          ],
        },
      },
    },
  },
};
