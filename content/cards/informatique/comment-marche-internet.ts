import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : le mot « nuage » laisse croire que les données flottent
 * quelque part dans les airs. La réalité est plus intéressante — des câbles au
 * fond des océans et des bâtiments remplis d'ordinateurs — et bien plus facile
 * à se représenter.
 */
export const card: ScienceCard = {
  id: 'comment-marche-internet',
  domainId: 'informatique',
  animationId: 'internet',
  thumbnail: '🌐',
  content: {
    fr: {
      title: {
        '3-5': 'Le voyage des messages',
        '6-8': 'Comment marche Internet',
        '9-12': 'Paquets, réseaux et routage',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'decoupage',
              text: "Quand tu envoies une photo, elle est coupée en tout petits morceaux, comme un puzzle.",
            },
            {
              id: 'voyage',
              text: "Chaque morceau part de son côté et voyage dans de grands câbles, très loin.",
            },
            {
              id: 'cables',
              text: "Beaucoup de ces câbles sont posés tout au fond de la mer, sous l'eau, entre les pays.",
            },
            {
              id: 'reassemblage',
              text: "À l'arrivée, les morceaux se remettent dans le bon ordre, et la photo réapparaît entière.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'decoupage',
              text: "Tout ce que tu envoies est découpé en petits blocs appelés paquets. Chaque paquet porte l'adresse du destinataire et son numéro d'ordre.",
            },
            {
              id: 'voyage',
              text: "Les paquets ne suivent pas forcément le même chemin. Des machines appelées routeurs les orientent, un peu comme des aiguillages de train, en choisissant la route libre.",
            },
            {
              id: 'cables',
              text: "On parle du « nuage », mais rien ne flotte dans le ciel. Plus de quatre-vingt-dix pour cent du trafic mondial passe par des câbles posés au fond des océans, à peine plus épais qu'un tuyau d'arrosage.",
            },
            {
              id: 'reassemblage',
              text: "À l'arrivée, les paquets sont remis dans l'ordre grâce à leur numéro. S'il en manque un, il est redemandé. Tout cela prend quelques centièmes de seconde.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'decoupage',
              text: "Les données sont fragmentées en paquets, chacun muni d'un en-tête contenant adresse source, adresse destination et numéro de séquence. C'est le principe de la commutation de paquets, conçue pour qu'un réseau survive à la panne d'un de ses nœuds.",
            },
            {
              id: 'voyage',
              text: "Les routeurs consultent des tables de routage et transmettent chaque paquet vers le voisin le mieux placé. Aucun ne connaît le trajet complet : la route émerge des décisions locales, et deux paquets d'un même message peuvent emprunter des chemins différents.",
            },
            {
              id: 'cables',
              text: "L'infrastructure est physique : environ un million et demi de kilomètres de câbles sous-marins en fibre optique, où l'information voyage sous forme d'impulsions lumineuses. Le « cloud » désigne des centres de données bien réels, consommant électricité et refroidissement.",
            },
            {
              id: 'reassemblage',
              text: "Le protocole TCP réordonne les paquets, détecte les manquants et les redemande, garantissant l'intégrité du message. La latence reste limitée par la vitesse de la lumière dans la fibre, où elle se propage à environ deux cent mille kilomètres par seconde : il faut une trentaine de millisecondes pour un aller Paris–New York, une soixantaine pour l'aller-retour.",
            },
          ],
        },
      },
    },
  },
};
