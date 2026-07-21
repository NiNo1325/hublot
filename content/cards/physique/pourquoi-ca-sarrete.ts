import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : l'intuition spontanée — un objet lancé finit par
 * s'arrêter tout seul, il faut pousser en permanence pour avancer — est
 * l'erreur d'Aristote. Le principe d'inertie inverse la question : ce qui
 * demande une explication n'est pas que le mouvement continue, mais qu'il
 * cesse. Les frottements sont cette explication.
 */
export const card: ScienceCard = {
  id: 'pourquoi-ca-sarrete',
  domainId: 'physique',
  animationId: 'inertie',
  thumbnail: '⚽',
  content: {
    fr: {
      title: {
        '3-5': 'La balle qui ralentit',
        '6-8': 'Pourquoi ça finit par s’arrêter',
        '9-12': 'L’inertie : rien ne s’arrête sans raison',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'lancer',
              text: 'Tu fais rouler une balle sur le sol. Elle avance, elle ralentit, et elle s’arrête.',
            },
            {
              id: 'frottement',
              text: 'Elle ne s’arrête pas toute seule : le sol la freine, et l’air aussi, tout doucement.',
            },
            {
              id: 'glace',
              text: 'Sur la glace, ça freine beaucoup moins. La même balle glisse bien plus loin.',
            },
            {
              id: 'espace',
              text: 'Et dans l’espace, rien ne freine du tout. Ce qu’on lance continue, et continue encore.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'lancer',
              text: 'On croit souvent qu’un objet en mouvement finit toujours par s’arrêter tout seul, et qu’il faut pousser sans arrêt pour avancer. C’est ce que montre la vie de tous les jours — et c’est faux.',
            },
            {
              id: 'frottement',
              text: 'Il faut une cause pour ralentir, exactement comme il en faut une pour accélérer. Ici, cette cause s’appelle le frottement : le sol qui accroche, l’air qui résiste.',
            },
            {
              id: 'glace',
              text: 'Enlève un peu de frottement et la différence saute aux yeux : un palet parcourt trois mètres sur du gravier, des dizaines de mètres sur une patinoire. La poussée du départ était pourtant la même.',
            },
            {
              id: 'espace',
              text: 'Enlève-le complètement, et plus rien n’arrête le mouvement. Les sondes Voyager, lancées en 1977, filent toujours, moteurs éteints depuis des dizaines d’années.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'lancer',
              text: 'L’idée d’Aristote — un corps ne bouge que tant qu’on le pousse — colle si bien à l’expérience quotidienne qu’elle a tenu deux mille ans avant d’être renversée.',
            },
            {
              id: 'frottement',
              text: 'Le principe d’inertie l’a remplacée : sans force extérieure, un corps conserve sa vitesse et sa direction. Ce qui réclame une explication n’est donc pas qu’il continue, mais qu’il s’arrête. La réponse tient dans les frottements — solide contre solide, résistance de l’air — qui sont bel et bien des forces.',
            },
            {
              id: 'glace',
              text: 'Réduis-les, et la conclusion se vérifie à l’œil nu. Une pierre de curling glisse une trentaine de mètres sur la glace ; sur du bitume, la même poussée ne la mènerait pas au bout du bras.',
            },
            {
              id: 'espace',
              text: 'Dans le vide interstellaire, il ne reste presque rien pour freiner. Les sondes Voyager avancent à plus de dix-sept kilomètres par seconde sans avoir rallumé leur moteur principal depuis des décennies : non parce que quelque chose les pousse, mais parce que plus rien ne les retient.',
            },
          ],
        },
      },
    },
  },
};
