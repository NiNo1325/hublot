import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : le squelette de musée est un artefact. Un os est un
 * organe vivant, vascularisé, en remodelage permanent — c'est précisément ce
 * qui lui permet de se ressouder et de se renforcer sous la contrainte.
 * Distinct de la carte sur les fossiles, qui traite de ce qui arrive à l'os
 * après la mort.
 */
export const card: ScienceCard = {
  id: 'les-os',
  domainId: 'biologie',
  animationId: 'os',
  thumbnail: '🩻',
  content: {
    fr: {
      title: {
        '3-5': 'Tes os sont vivants',
        '6-8': 'Les os ne sont pas des cailloux',
        '9-12': 'L’os, un organe en remodelage permanent',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'pas-morts',
              text: 'Tes os ne sont pas des cailloux tout secs. Ils sont vivants, comme le reste de toi.',
            },
            {
              id: 'vivant',
              text: 'Il y a du sang dedans. C’est bien pour ça que ça fait mal quand on en casse un.',
            },
            {
              id: 'moelle',
              text: 'Au milieu, il y a une matière molle qui fabrique ton sang, tous les jours.',
            },
            {
              id: 'reparation',
              text: 'Et un os cassé se répare tout seul. Le plâtre le tient bien droit pendant qu’il se recolle.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'pas-morts',
              text: 'On imagine le squelette comme des morceaux secs et immobiles, à cause des os blanchis qu’on voit dans les musées. En réalité, un os est un organe vivant, parcouru de vaisseaux sanguins et de nerfs.',
            },
            {
              id: 'vivant',
              text: 'Mieux : il se reconstruit sans arrêt. Des cellules démolissent l’os ancien pendant que d’autres en fabriquent du neuf. En une dizaine d’années, la quasi-totalité de ton squelette a été remplacée sans que tu t’en aperçoives.',
            },
            {
              id: 'moelle',
              text: 'À l’intérieur se trouve la moelle osseuse, une usine qui fabrique tes globules rouges et une partie de tes défenses — des milliards de cellules chaque jour.',
            },
            {
              id: 'reparation',
              text: 'C’est parce qu’il est vivant qu’un os cassé se ressoude. Le plâtre ne répare rien : il immobilise pendant que l’os fait le travail. Et un os qu’on sollicite se renforce — d’où la perte osseuse des astronautes, dont le squelette ne porte plus rien.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'pas-morts',
              text: 'Le tissu osseux est un tissu conjonctif vivant, vascularisé et innervé, composé d’une matrice de collagène minéralisée par des cristaux de phosphate de calcium. Le squelette sec des collections est un artefact : de la matrice débarrassée de ses cellules.',
            },
            {
              id: 'vivant',
              text: 'Le remodelage est continu : les ostéoclastes résorbent la matrice ancienne, les ostéoblastes en déposent de la nouvelle. Ce couplage renouvelle environ dix pour cent du squelette par an et sert accessoirement de réserve régulatrice pour la calcémie.',
            },
            {
              id: 'moelle',
              text: 'La moelle osseuse rouge est le siège de l’hématopoïèse : à partir de cellules souches, elle produit chaque jour des centaines de milliards de cellules sanguines. C’est ce qui rend la greffe de moelle possible et efficace.',
            },
            {
              id: 'reparation',
              text: 'La consolidation d’une fracture passe par un hématome, un cal cartilagineux, puis un cal osseux remodelé pendant des mois. La loi de Wolff en résume le principe général : l’os s’adapte aux contraintes mécaniques qu’il subit. D’où la déminéralisation en microgravité, de l’ordre de un pour cent par mois chez les astronautes.',
            },
          ],
        },
      },
    },
  },
};
