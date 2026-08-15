import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : un réfrigérateur ne fabrique pas de froid, il déplace
 * de la chaleur — et à contre-courant du sens spontané, ce qui exige du
 * travail. La carte s'appuie sur « le chaud et le froid », qui a déjà établi
 * que le froid n'est pas une substance, et ajoute ce qu'elle ne dit pas : le
 * paradoxe de la porte ouverte, qui réchauffe la pièce.
 */
export const card: ScienceCard = {
  id: 'comment-marche-un-frigo',
  domainId: 'ingenierie',
  animationId: 'frigo',
  thumbnail: '❄️',
  content: {
    fr: {
      title: {
        '3-5': 'Le frigo qui pousse la chaleur dehors',
        '6-8': 'Comment marche un frigo',
        '9-12': 'La pompe à chaleur et le paradoxe de la porte ouverte',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'pas-de-froid',
              text: 'Un frigo ne fabrique pas de froid. Il enlève la chaleur qui est dedans.',
            },
            {
              id: 'deplacer',
              text: 'Il la prend à l’intérieur, et il la met dehors, dans la cuisine.',
            },
            {
              id: 'grille-chaude',
              text: 'Touche derrière le frigo : c’est tiède ! C’est là que la chaleur ressort.',
            },
            {
              id: 'porte-ouverte',
              text: 'Alors si on laisse la porte ouverte pour rafraîchir la pièce… elle devient plus chaude !',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'pas-de-froid',
              text: 'Le froid n’existe pas comme une substance : il n’y a que de la chaleur, qui se déplace. Un frigo n’en fabrique donc pas — il enlève celle qui se trouve à l’intérieur.',
            },
            {
              id: 'deplacer',
              text: 'Et il fait mieux que cela : il pousse la chaleur dans le mauvais sens. Naturellement, elle va toujours du chaud vers le froid ; le frigo la fait remonter du froid vers le chaud. C’est précisément pour cela qu’il lui faut un moteur et de l’électricité.',
            },
            {
              id: 'grille-chaude',
              text: 'Un gaz est comprimé, ce qui l’échauffe ; il cède alors sa chaleur à la grille située derrière l’appareil — touche-la, elle est tiède. Puis on le laisse se détendre : il devient très froid et repart absorber la chaleur des aliments. Et le cycle recommence, indéfiniment.',
            },
            {
              id: 'porte-ouverte',
              text: 'D’où une conséquence surprenante : laisser la porte du frigo ouverte ne rafraîchit pas la cuisine, cela la réchauffe. Toute la chaleur retirée ressort dans la même pièce, augmentée de celle que produit le moteur.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'pas-de-froid',
              text: 'Un réfrigérateur est une pompe à chaleur. Il ne produit pas de froid — la notion n’a pas de sens physique — il transfère de l’énergie thermique d’une source froide vers une source chaude.',
            },
            {
              id: 'deplacer',
              text: 'Ce transfert va à l’encontre du sens spontané des échanges, que le second principe rendrait impossible sans apport extérieur. D’où le compresseur : le travail fourni est exactement ce qui autorise le transfert à contre-courant. Le rendement se mesure par un coefficient de performance, souvent supérieur à un — ce qui n’a rien d’un miracle, puisque la chaleur n’est pas créée mais déplacée.',
            },
            {
              id: 'grille-chaude',
              text: 'Le cycle exploite les changements d’état d’un fluide frigorigène. Comprimé, il s’échauffe et se condense dans le condenseur arrière en libérant sa chaleur latente. Détendu brutalement, il se refroidit et s’évapore dans l’évaporateur intérieur en absorbant celle des aliments.',
            },
            {
              id: 'porte-ouverte',
              text: 'Le bilan énergétique explique le paradoxe de la porte ouverte : la chaleur extraite est rejetée dans la même pièce, augmentée du travail du compresseur. Le local se réchauffe donc nécessairement. Une climatisation ne refroidit que parce que son condenseur est à l’extérieur — et une pompe à chaleur de chauffage n’est rien d’autre que le même appareil retourné.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The fridge that pushes the heat outside',
        '6-8': 'How a fridge works',
        '9-12': 'The heat pump and the open-door paradox',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'pas-de-froid',
              text: 'A fridge does not make cold. It takes away the heat that is inside.',
            },
            {
              id: 'deplacer',
              text: 'It picks the heat up inside, and it puts it out in the kitchen.',
            },
            {
              id: 'grille-chaude',
              text: 'Touch the back of the fridge: it is warm! That is where the heat comes out.',
            },
            {
              id: 'porte-ouverte',
              text: 'So if you leave the door open to cool the room down… it gets warmer!',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'pas-de-froid',
              text: 'Cold is not a substance: there is only heat, and heat moves about. So a fridge does not make cold — it removes the heat that is inside.',
            },
            {
              id: 'deplacer',
              text: 'And it does better than that: it pushes the heat the wrong way. Left alone, heat always travels from hot to cold; a fridge makes it climb back up from cold to hot. That is exactly why it needs a motor and electricity.',
            },
            {
              id: 'grille-chaude',
              text: 'A gas is squeezed, which warms it up; it then hands its heat over to the grille at the back of the appliance — touch it, it is warm. Then the gas is allowed to expand: it turns very cold and goes back to soak up the heat from the food. And the cycle starts again, over and over.',
            },
            {
              id: 'porte-ouverte',
              text: 'Which leads to a surprising result: leaving the fridge door open does not cool the kitchen down, it warms it up. All the heat taken out comes back into the same room, plus the heat the motor makes.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'pas-de-froid',
              text: 'A refrigerator is a heat pump. It does not produce cold — the idea has no physical meaning — it transfers thermal energy from a cold source to a hot one.',
            },
            {
              id: 'deplacer',
              text: 'That transfer runs against the spontaneous direction of heat exchange, which the second law would make impossible without an outside input. Hence the compressor: the work supplied is exactly what allows the upstream transfer. Efficiency is measured by a coefficient of performance, often greater than one — which is no miracle, since the heat is not created but moved.',
            },
            {
              id: 'grille-chaude',
              text: 'The cycle exploits the changes of state of a refrigerant fluid. Compressed, it heats up and condenses in the rear condenser, releasing its latent heat. Abruptly expanded, it cools down and evaporates in the inner evaporator, absorbing the heat from the food.',
            },
            {
              id: 'porte-ouverte',
              text: 'The energy balance explains the open-door paradox: the heat extracted is dumped into the same room, plus the work done by the compressor. The room therefore has to get warmer. An air conditioner only cools because its condenser sits outside — and a heating heat pump is nothing but the same appliance turned around.',
            },
          ],
        },
      },
    },
  },
};
