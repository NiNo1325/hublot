import type { VarianteLumi } from '@/components/mascotte/LumiNiveau';
import type { AgeRange, Localise } from '@/lib/types';

/**
 * Les trois niveaux de difficulté, tels que l'enfant les choisit.
 *
 * Le catalogue est écrit depuis toujours en trois versions — la même carte
 * expliquée trois fois, de plus en plus loin — et le quizz tire ses questions
 * dans la version correspondante. Jusqu'ici on demandait l'âge de l'enfant pour
 * choisir à sa place. C'était deux fois maladroit : ça obligeait à faire
 * quitter à une donnée qui décrit un enfant l'appareil dès qu'on sauvegardait,
 * et ça imposait un niveau à un enfant de sept ans qui aurait voulu, ce
 * jour-là, les explications complètes.
 *
 * Le choix lui revient donc. La `tranche` reste l'encodage de stockage et
 * l'index du contenu : rien n'a bougé côté catalogue, seule la façade change.
 *
 * `id` nomme aussi le fichier audio (`public/audio/niveaux/<id>.mp3`).
 */
export interface NiveauDifficulte {
  id: 'simple' | 'curieux' | 'expert';
  tranche: AgeRange;
  /**
   * L'âge de Lumi qui illustre le niveau.
   *
   * Volontairement distinct des rangs : dans le reste de l'app, ce sont les
   * accessoires et le halo de Lumi qui disent la progression gagnée. Ici seule
   * sa maturité change. Deux langages visuels séparés, donc aucune confusion
   * possible entre « j'ai choisi » et « j'ai mérité ».
   */
  variante: VarianteLumi;
  nom: Localise<string>;
  texte: Localise<string>;
}

export const NIVEAUX: NiveauDifficulte[] = [
  {
    id: 'simple',
    tranche: '3-5',
    variante: 'petite',
    nom: { fr: 'Tout simple', en: 'Nice and simple' },
    texte: {
      fr: 'Des explications très courtes, avec des mots de tous les jours.',
      en: 'Very short explanations, using everyday words.',
    },
  },
  {
    id: 'curieux',
    tranche: '6-8',
    variante: 'jeune',
    nom: { fr: 'Curieux', en: 'Curious' },
    texte: {
      fr: 'Un peu plus de détails, et des mots nouveaux expliqués au passage.',
      en: 'A little more detail, with new words explained along the way.',
    },
  },
  {
    id: 'expert',
    tranche: '9-12',
    variante: 'ado',
    nom: { fr: 'Expert', en: 'Expert' },
    texte: {
      fr: 'Les explications complètes, avec les vrais mots des scientifiques.',
      en: 'The full explanations, using the real words scientists use.',
    },
  },
];

/**
 * Ce que Lumi dit sur l'écran de choix, et ce qu'on entend en touchant le
 * haut-parleur.
 *
 * Dit trois choses, parce que ce sont les trois qu'un enfant ne devinerait pas
 * seul : qu'il y a trois niveaux, que le choix change les cartes **et** les
 * questions du quizz, et qu'on peut en changer d'avis. Sans la dernière, un
 * enfant qui se croit enfermé dans son choix n'ose pas essayer plus haut.
 */
export const presentationNiveaux = {
  id: 'presentation',
  texte: {
    fr: 'Choisis ton niveau ! Il y en a trois. Plus tu montes, plus les explications sont longues et les mots savants. Les questions des quizz suivent le même niveau. Et tu peux en changer quand tu veux dans les Réglages.',
    en: 'Choose your level! There are three. The higher you go, the longer the explanations and the bigger the words. The quiz questions follow the same level. And you can change your mind whenever you like in Settings.',
  },
} satisfies { id: string; texte: Localise<string> };
