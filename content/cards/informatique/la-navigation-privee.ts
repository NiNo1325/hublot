import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : le mode privé ne rend pas anonyme. Son périmètre est
 * strictement local — il n'écrit rien sur l'appareil — et il ne change
 * absolument rien à ce que voient le site, le fournisseur d'accès ou
 * l'administrateur du réseau. C'est un nom qui promet bien plus que la
 * fonctionnalité ne tient.
 */
export const card: ScienceCard = {
  id: 'la-navigation-privee',
  domainId: 'informatique',
  animationId: 'navigation-privee',
  thumbnail: '🕵️',
  content: {
    fr: {
      title: {
        '3-5': 'Se cacher sur un ordinateur',
        '6-8': 'Ce que cache vraiment la navigation privée',
        '9-12': 'Mode privé : un périmètre strictement local',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'promesse',
              text: 'Sur un ordinateur, il existe un bouton qui promet de te cacher.',
            },
            {
              id: 'local',
              text: 'En vrai, il efface seulement les traces sur cet ordinateur-là. Rien d’autre.',
            },
            {
              id: 'qui-voit',
              text: 'Les gens qui s’occupent du site, eux, te voient toujours arriver.',
            },
            {
              id: 'vraiment',
              text: 'Sur internet, on n’est jamais vraiment invisible. C’est bon à savoir.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'promesse',
              text: 'Le mode « navigation privée » porte un nom qui promet énormément. Ce qu’il fait est bien plus modeste.',
            },
            {
              id: 'local',
              text: 'Ce qu’il fait vraiment : ne rien garder sur l’appareil que tu utilises — ni historique, ni recherches, ni cookies. Autrement dit, il cache ta navigation aux autres personnes qui se servent du même ordinateur. C’est utile, et c’est tout.',
            },
            {
              id: 'qui-voit',
              text: 'Ce qu’il ne fait pas : te rendre invisible. Le site que tu visites te voit exactement comme d’habitude. Celui qui te fournit internet aussi. Et si tu es sur le réseau d’une école, la personne qui l’administre également.',
            },
            {
              id: 'vraiment',
              text: 'Le nom trompe tant de monde que beaucoup l’utilisent en se croyant anonymes. La bonne façon d’y penser : il te protège de la personne qui s’assiéra devant l’écran après toi, pas du reste d’internet.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'promesse',
              text: 'Le mode privé — « incognito » selon les navigateurs — est sans doute la fonction la plus mal comprise des navigateurs. Des études ont montré qu’une majorité d’utilisateurs lui prêtent des protections qu’il n’offre pas.',
            },
            {
              id: 'local',
              text: 'Son périmètre est strictement local : la session n’écrit ni historique, ni cookies persistants, ni données de formulaire sur la machine, et tout est jeté à la fermeture. Rien de plus.',
            },
            {
              id: 'qui-voit',
              text: 'Restent parfaitement visibles : le site visité, qui reçoit ton adresse IP et peut te reconnaître par l’empreinte de ton navigateur ; le fournisseur d’accès, qui voit au minimum les domaines contactés ; l’administrateur du réseau ; et tout service auquel tu te connectes pendant la session, qui t’identifie alors nommément.',
            },
            {
              id: 'vraiment',
              text: 'L’anonymat réel suppose d’autres moyens — un relais masquant l’adresse, VPN ou réseau Tor — et demeure imparfait : l’empreinte du navigateur et les habitudes de navigation suffisent souvent à ré-identifier quelqu’un. Retiens le périmètre exact : le mode privé protège de la personne qui utilisera l’appareil après toi, pas du réseau.',
            },
          ],
        },
      },
    },
  },
};
