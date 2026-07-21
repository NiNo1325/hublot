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
  },
};
