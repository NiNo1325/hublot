'use client';

import type { ScienceCard } from '@/lib/types';
import { savantDeLaCarte } from '@/lib/cles';
import { useT } from '@/components/i18n/useT';

interface InvitationQuestionProps {
  carte: ScienceCard;
  onAccepter: () => void;
  onFermer: () => void;
}

/**
 * L'invitation à répondre, après une carte écoutée.
 *
 * Un bandeau, et non une modale. La différence n'est pas cosmétique : la
 * version précédente barrait tout l'écran après **chaque** carte, si bien
 * qu'enchaîner cinq cartes revenait à franchir cinq murs. L'intention affichée
 * — « l'exploration libre doit rester libre » — était contredite par sa propre
 * forme.
 *
 * Ici, la grille reste vivante derrière : on peut ouvrir la carte suivante sans
 * rien répondre, et sans même fermer le bandeau. Il ne réclame pas d'être
 * traité, il attend. C'est ce qui permet de le laisser proposer une clé sans
 * qu'il devienne un péage.
 *
 * `role="status"` et non `dialog` : rien n'est modal, rien ne capture le focus,
 * et un lecteur d'écran l'annonce sans interrompre ce qui est en cours.
 */
export function InvitationQuestion({ carte, onAccepter, onFermer }: InvitationQuestionProps) {
  const t = useT();
  const savant = savantDeLaCarte(carte.id);

  return (
    <div
      role="status"
      /*
        Posé au-dessus de la barre d'onglets (`bottom-24`), jamais dessus : la
        navigation doit rester atteignable, c'est la contrepartie de ne plus
        bloquer l'écran.
      */
      className="bandeau-invitation pointer-events-none fixed inset-x-0 bottom-24 z-20 flex justify-center px-4"
    >
      {/*
        Fond opaque, et non translucide : les titres des cartes de la grille
        traversaient le bouton et le rendaient illisible. Le flou d'arrière-plan
        ne compensait pas — sur un fond aussi contrasté, il ne fait que salir.
      */}
      <div className="pointer-events-auto flex w-full max-w-sm flex-col gap-3 rounded-3xl border-2 border-soleil bg-encre-clair p-4 shadow-[0_8px_30px_rgba(10,17,34,0.6)]">
        <div className="flex items-start gap-2">
          <p className="min-w-0 flex-1 text-sm leading-snug text-craie-douce">
            <span className="font-display text-soleil">{t('invitation.titre')}</span>{' '}
            {t('invitation.texte')(savant?.nom ?? '')}
          </p>
          <button
            type="button"
            onClick={onFermer}
            aria-label={t('invitation.fermer')}
            className="-mt-1 -mr-1 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-lg text-craie-douce/70 transition-colors hover:bg-encre-bord/40 hover:text-craie"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <button
          type="button"
          onClick={onAccepter}
          className="min-h-12 w-full cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-6 font-display text-lg text-soleil transition-transform hover:scale-[1.02] active:scale-95"
        >
          {t('invitation.oui')}
        </button>
      </div>
    </div>
  );
}
