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
    en: {
      title: {
        '3-5': 'What a computer forgets',
        '6-8': 'How a computer remembers',
        '9-12': 'Working memory and storage',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'deux-memoires',
              text: 'A computer has two kinds of memory, just like you: one for right now, one for a long time.',
            },
            {
              id: 'vive',
              text: 'The first one is used while it works. It is very fast, but it keeps nothing once you switch off.',
            },
            {
              id: 'stockage',
              text: 'The second one keeps your drawings and your photos, even when the computer is off all night.',
            },
            {
              id: 'enregistrer',
              text: 'That is why you have to save! If you do not, your work stays in the memory that forgets.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'deux-memoires',
              text: 'A computer uses two very different memories, and muddling them up explains a lot of nasty surprises.',
            },
            {
              id: 'vive',
              text: 'The working memory holds whatever the machine is busy with right now. It is extremely fast, but it needs electricity all the time to hold on to what is in it. Cut the power, and everything is wiped instantly.',
            },
            {
              id: 'stockage',
              text: 'Storage — a hard disk or flash memory — keeps data with no power at all, for years. In exchange it is far slower: that is why the computer copies files from it into the working memory before using them.',
            },
            {
              id: 'enregistrer',
              text: 'When you write a text, at first it exists only in the working memory. Saving means copying it into storage. A power cut before you save makes it all disappear — not because anything broke, but because that memory is simply built that way.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'deux-memoires',
              text: 'Computers arrange their memories in a hierarchy: processor registers, cache memory, random-access memory, storage. The further down you go, the greater the capacity and the lower the speed — by a factor that can reach a million.',
            },
            {
              id: 'vive',
              text: 'Dynamic random-access memory stores each bit in a minuscule capacitor that discharges within a few milliseconds. It therefore has to be refreshed thousands of times a second: that is what makes it volatile, and costly in energy.',
            },
            {
              id: 'stockage',
              text: 'Flash memory traps electrons in an insulated gate, where they stay with no power supply. A hard disk instead orients magnetic domains on a spinning platter. Both keep information with the power off, with retention times of the order of a decade.',
            },
            {
              id: 'enregistrer',
              text: 'This hierarchy is an economic compromise: fast memory is expensive per gigabyte. A well-designed system keeps whatever is used most often in the fast levels — that is the principle of locality, and it is what makes a computer usable despite the slowness of storage.',
            },
          ],
        },
      },
    },
  },
};
