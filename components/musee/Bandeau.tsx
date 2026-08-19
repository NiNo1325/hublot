'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { ProchaineAction } from '@/lib/prochaine-action';
import { prixSavant } from '@/lib/cles';
import { useT } from '@/components/i18n/useT';

interface BandeauProps {
  /** Le récit se raconte tant que personne n'a été délivré. */
  raconter: boolean;
  /** Le temps du récit affiché (déjà localisé). */
  texteRecit: string;
  enLecture: boolean;
  onEcouter: () => void;
  onArreter: () => void;
  /** L'état, une fois le récit passé. */
  cles: number;
  delivres: number;
  total: number;
  action: ProchaineAction;
  /** Emmène à la cellule proposée, sur le mur juste en dessous. */
  onAllerAuSavant: (id: string) => void;
}

/**
 * Le bandeau d'accueil du musée.
 *
 * Il change de rôle une fois dans la partie, et c'est tout son intérêt.
 *
 * Tant que personne n'a été délivré, il **raconte** : l'enfant a besoin du
 * pourquoi avant du quoi. Dès la première délivrance, la boucle est comprise, et
 * répéter « Coucou, moi c'est Lumi ! » au dixième lancement devient du bruit —
 * il devient alors un **état des lieux** : les deux monnaies, le compte de
 * délivrés, et une seule chose à faire.
 *
 * Une action, jamais trois. C'est ce qui distingue un guide d'un menu, et c'est
 * la leçon des écrans qu'on a supprimés ici : proposer trois chemins à un enfant
 * de cinq ans, c'est lui demander d'arbitrer au lieu de l'emmener.
 */
export function Bandeau({
  raconter,
  texteRecit,
  enLecture,
  onEcouter,
  onArreter,
  cles,
  delivres,
  total,
  action,
  onAllerAuSavant,
}: BandeauProps) {
  const router = useRouter();
  const t = useT();

  const boutonEcoute = (
    <button
      type="button"
      onClick={() => (enLecture ? onArreter() : onEcouter())}
      className="flex min-h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-soleil bg-soleil/10 px-6 font-display text-lg text-soleil transition-transform hover:scale-[1.02] active:scale-95"
    >
      <span aria-hidden="true">{enLecture ? '⏸' : '🔊'}</span>
      {enLecture ? t('histoire.arreter') : t('histoire.ecouter')}
    </button>
  );

  if (raconter) {
    return (
      <div className="flex w-full max-w-md flex-col items-center gap-3 rounded-3xl border-2 border-soleil/40 bg-soleil/5 p-4">
        <p aria-live="polite" className="text-base leading-relaxed text-craie-douce">
          {texteRecit}
        </p>
        <div className="flex w-full flex-col items-stretch gap-2">
          {boutonEcoute}
          {/*
            Ici, le lien ne promet pas une explication de plus : le bandeau vient
            d'en proposer une, et la page d'histoire ouvre le même récit, lu par
            la même voix. Ce qu'elle apporte, c'est le texte entier plutôt qu'un
            temps sur six — c'est donc cela qu'il faut annoncer.
          */}
          <Link
            href="/musee/histoire"
            className="flex min-h-12 items-center justify-center rounded-full border-2 border-encre-bord px-5 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
          >
            {t('musee.lire-histoire')}
          </Link>
        </div>
      </div>
    );
  }

  /* L'action proposée, et ce qu'elle déclenche. */
  const libelle =
    action.type === 'delivrer'
      ? t('action.delivrer')(action.savant.nom, prixSavant(action.savant))
      : action.type === 'repondre'
        ? t('action.repondre')(action.combien)
        : action.type === 'ecouter'
          ? t('action.ecouter')(action.combien)
          : t('action.complet');

  const aller = () => {
    if (action.type === 'delivrer') onAllerAuSavant(action.savant.id);
    else if (action.type === 'repondre') router.push('/joue/quizz');
    else if (action.type === 'ecouter') router.push('/decouvrir');
  };

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3 rounded-3xl border-2 border-encre-bord bg-encre-clair p-4">
      {/* Les deux monnaies et le compte : tout l'état en une ligne. */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-display text-lg">
        <span className="text-soleil">
          {cles} <span aria-hidden="true">🔑</span>
        </span>
        <span className="text-craie">{t('musee.compte')(delivres, total)}</span>
      </div>

      {action.type === 'complet' ? (
        <p className="text-center font-display text-base text-soleil">{libelle}</p>
      ) : (
        <button
          type="button"
          onClick={aller}
          className="min-h-14 w-full cursor-pointer rounded-2xl border-2 border-soleil bg-soleil/10 px-5 py-3 font-display text-base leading-snug text-soleil transition-transform hover:scale-[1.02] active:scale-95"
        >
          {libelle}
        </button>
      )}

      {/*
        L'histoire de Lumi, en grand et non plus en petits caractères. Il n'y a
        pas d'écran d'accueil où la raconter : ce bouton est le seul endroit d'où
        l'on peut réentendre pourquoi les savants sont enfermés, et un lien
        souligné en bas de bandeau ne se voit pas.
      */}
      <Link
        href="/musee/histoire"
        className="flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl border-2 border-soleil/50 bg-soleil/5 px-5 font-display text-base text-soleil transition-transform hover:scale-[1.02] active:scale-95"
      >
        <span aria-hidden="true" className="text-xl">
          📖
        </span>
        {t('musee.vers-histoire')}
      </Link>
    </div>
  );
}
