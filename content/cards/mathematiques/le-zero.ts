import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : diviser par zéro n'est pas « égal à l'infini », c'est
 * une opération sans résultat défini. Et le zéro n'a rien d'évident — il a
 * fallu des millénaires pour l'inventer, ce qui en dit long sur sa profondeur.
 */
export const card: ScienceCard = {
  id: 'le-zero',
  domainId: 'mathematiques',
  animationId: 'zero',
  thumbnail: '0️⃣',
  content: {
    fr: {
      title: {
        '3-5': 'Le nombre de rien',
        '6-8': 'Le zéro',
        '9-12': 'Zéro, position et division',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'rien',
              text: "Zéro, c'est le nombre qui veut dire « il n'y en a pas du tout ».",
            },
            {
              id: 'place',
              text: "Mais il sert aussi à écrire les grands nombres. Sans lui, on ne pourrait pas écrire cent.",
            },
            {
              id: 'invention',
              text: "Les gens ont compté pendant très très longtemps avant d'avoir l'idée du zéro.",
            },
            {
              id: 'division',
              text: "Et il fait des choses bizarres : partager des bonbons entre zéro enfant, ça ne veut rien dire.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'rien',
              text: "Le zéro joue deux rôles distincts. Il désigne une quantité nulle, et il marque une place vide dans l'écriture d'un nombre.",
            },
            {
              id: 'place',
              text: "C'est ce second rôle qui a tout changé. Dans 105, le zéro indique qu'il n'y a aucune dizaine. Sans lui, impossible de distinguer 15 de 105 autrement que par un espace ambigu.",
            },
            {
              id: 'invention',
              text: "Les Romains n'avaient pas de zéro, ce qui rendait leurs calculs très laborieux — essaie de multiplier XLVII par XIX. Le zéro comme nombre est apparu en Inde vers le cinquième siècle, puis a gagné l'Europe via les mathématiciens arabes.",
            },
            {
              id: 'division',
              text: "Diviser par zéro est impossible. Diviser douze par trois, c'est demander combien de paquets de trois on peut faire. Avec des paquets de zéro, on n'atteint jamais douze, quel que soit leur nombre. Ce n'est donc pas « l'infini » : la question n'a simplement pas de réponse.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'rien',
              text: "Le zéro est l'élément neutre de l'addition : ajouter zéro ne change rien. Il est aussi absorbant pour la multiplication, puisque tout nombre multiplié par zéro donne zéro.",
            },
            {
              id: 'place',
              text: "La numération de position exige un symbole pour les rangs vides. C'est elle qui rend possibles les algorithmes de calcul posé que tu utilises — impensables en chiffres romains, faute de structure positionnelle.",
            },
            {
              id: 'invention',
              text: "Brahmagupta, en 628, est le premier à traiter le zéro comme un nombre à part entière et à énoncer ses règles de calcul. L'Europe l'a longtemps rejeté, y voyant une notion suspecte ; Fibonacci contribue à l'imposer au treizième siècle.",
            },
            {
              id: 'division',
              text: "La division par zéro n'est pas définie, et non « infinie ». La raison est structurelle : diviser par a revient à multiplier par l'inverse de a, or zéro n'admet aucun inverse. Lui en attribuer un rendrait l'arithmétique contradictoire — on pourrait alors démontrer que 1 égale 2. C'est un bon exemple de règle qui n'est pas arbitraire, mais nécessaire à la cohérence de l'ensemble.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The number for nothing',
        '6-8': 'Zero',
        '9-12': 'Zero: place value and division',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'rien',
              text: 'Zero is the number that means “there are none at all”.',
            },
            {
              id: 'place',
              text: 'But it also helps us write big numbers. Without it, we could not write a hundred.',
            },
            {
              id: 'invention',
              text: 'People counted for a very, very long time before anyone had the idea of zero.',
            },
            {
              id: 'division',
              text: 'And it does odd things: sharing sweets between zero children does not mean anything.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'rien',
              text: 'Zero plays two different roles. It stands for a quantity of nothing, and it marks an empty place in the writing of a number.',
            },
            {
              id: 'place',
              text: 'It is the second role that changed everything. In 105, the zero shows that there are no tens. Without it, there would be no way to tell 15 from 105 except by an ambiguous gap.',
            },
            {
              id: 'invention',
              text: 'The Romans had no zero, which made their sums very laborious — try multiplying XLVII by XIX. Zero as a number appeared in India around the fifth century, then reached Europe through Arab mathematicians.',
            },
            {
              id: 'division',
              text: 'Dividing by zero is impossible. Dividing twelve by three means asking how many packs of three you can make. With packs of zero, you never reach twelve, however many you take. So it is not “infinity”: the question simply has no answer.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'rien',
              text: 'Zero is the identity element of addition: adding zero changes nothing. It is also absorbing for multiplication, since any number multiplied by zero gives zero.',
            },
            {
              id: 'place',
              text: 'Place-value notation needs a symbol for empty columns. It is what makes possible the written methods of calculation you use — unthinkable in Roman numerals, which have no positional structure.',
            },
            {
              id: 'invention',
              text: 'Brahmagupta, in 628, was the first to treat zero as a number in its own right and to state its rules of calculation. Europe long rejected it as a suspect notion; Fibonacci helped establish it in the thirteenth century.',
            },
            {
              id: 'division',
              text: 'Division by zero is undefined, not “infinite”. The reason is structural: dividing by a amounts to multiplying by the inverse of a, and zero has no inverse. Giving it one would make arithmetic contradictory — you could then prove that 1 equals 2. It is a good example of a rule that is not arbitrary, but necessary for the whole system to hold together.',
            },
          ],
        },
      },
    },
  },
};
