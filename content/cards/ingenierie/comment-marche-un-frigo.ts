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
  },
};
