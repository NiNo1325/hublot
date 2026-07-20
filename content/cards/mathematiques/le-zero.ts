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
  },
};
