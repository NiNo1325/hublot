import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : distinguer mémoire vive et stockage. C'est ce qui
 * explique pourquoi un travail non enregistré disparaît à la coupure de
 * courant — une expérience que tout le monde a vécue sans en connaître la
 * cause.
 */
export const card: ScienceCard = {
  id: 'comment-un-ordinateur-se-souvient',
  domainId: 'informatique',
  animationId: 'memoire',
  thumbnail: '💾',
  content: {
    fr: {
      title: {
        '3-5': "Ce que l'ordinateur oublie",
        '6-8': "Comment un ordinateur se souvient",
        '9-12': 'Mémoire vive et stockage',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'deux-memoires',
              text: "Un ordinateur a deux sortes de mémoires, comme toi : une pour tout de suite, une pour longtemps.",
            },
            {
              id: 'vive',
              text: "La première sert pendant qu'il travaille. Elle est très rapide, mais elle ne retient rien quand on éteint.",
            },
            {
              id: 'stockage',
              text: "La deuxième garde tes dessins et tes photos, même quand l'ordinateur est éteint toute la nuit.",
            },
            {
              id: 'enregistrer',
              text: "C'est pour ça qu'il faut enregistrer ! Sinon, ton travail reste dans la mémoire qui oublie.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'deux-memoires',
              text: "Un ordinateur utilise deux mémoires très différentes, et confondre les deux explique bien des mauvaises surprises.",
            },
            {
              id: 'vive',
              text: "La mémoire vive contient ce sur quoi la machine travaille en ce moment. Elle est extrêmement rapide, mais elle a besoin d'électricité en permanence pour conserver son contenu. Coupe le courant, et tout s'efface instantanément.",
            },
            {
              id: 'stockage',
              text: "Le stockage — disque dur ou mémoire flash — retient les données sans alimentation, pendant des années. En contrepartie, il est bien plus lent : c'est pourquoi l'ordinateur y recopie les fichiers dans la mémoire vive avant de les utiliser.",
            },
            {
              id: 'enregistrer',
              text: "Quand tu écris un texte, il n'existe d'abord que dans la mémoire vive. Enregistrer, c'est le recopier dans le stockage. Une coupure de courant avant l'enregistrement fait tout disparaître — non par panne, mais parce que cette mémoire-là est ainsi faite.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'deux-memoires',
              text: "Les ordinateurs organisent leurs mémoires en hiérarchie : registres du processeur, mémoire cache, mémoire vive, stockage. Plus on descend, plus la capacité augmente et plus la vitesse chute — d'un facteur pouvant atteindre le million.",
            },
            {
              id: 'vive',
              text: "La mémoire vive dynamique stocke chaque bit dans un minuscule condensateur qui se décharge en quelques millisecondes. Il faut donc la rafraîchir des milliers de fois par seconde : c'est ce qui la rend volatile, et coûteuse en énergie.",
            },
            {
              id: 'stockage',
              text: "La mémoire flash piège des électrons dans une grille isolée, où ils restent sans alimentation. Le disque dur, lui, oriente des domaines magnétiques sur un plateau. Les deux conservent l'information hors tension, avec des durées de rétention de l'ordre de la décennie.",
            },
            {
              id: 'enregistrer',
              text: "Cette hiérarchie est un compromis économique : la mémoire rapide coûte cher au gigaoctet. Un système bien conçu maintient dans les niveaux rapides ce qui sert le plus souvent — c'est le principe de localité, et c'est lui qui rend un ordinateur utilisable malgré la lenteur du stockage.",
            },
          ],
        },
      },
    },
  },
};
