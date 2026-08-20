'use client';

import { useState, type ReactNode } from 'react';
import { useT } from '@/components/i18n/useT';

/**
 * Le passage réservé aux adultes.
 *
 * La Politique Familles du Play Store exige qu'une app pour enfants protège
 * ses fonctions d'adulte — ici, lier un compte Google et effacer des données —
 * par un obstacle qu'un jeune enfant ne franchit pas seul.
 *
 * Une multiplication à saisir, et non un choix parmi quatre : à une chance sur
 * quatre, un enfant qui tapote finit toujours par passer, et la porte n'en
 * serait plus une.
 */
export function PorteParentale({ children }: { children: ReactNode }) {
  const t = useT();
  const [ouverte, setOuverte] = useState(false);
  const [question, setQuestion] = useState<{ a: number; b: number } | null>(null);
  const [saisie, setSaisie] = useState('');
  const [rate, setRate] = useState(false);

  /*
    La question est tirée à l'ouverture, dans le gestionnaire de clic : un
    `Math.random` pendant le rendu produirait un résultat instable au moindre
    re-rendu — la question changerait sous les doigts du parent en train d'y
    répondre — et le compilateur React le refuse à juste titre.
  */
  if (ouverte) return <>{children}</>;

  if (!question) {
    return (
      <button
        type="button"
        onClick={() =>
          setQuestion({
            a: 6 + Math.floor(Math.random() * 4),
            b: 6 + Math.floor(Math.random() * 4),
          })
        }
        className="flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-encre-bord/30"
      >
        <span aria-hidden="true">🔒</span>
        <span className="flex-1 text-craie">{t('compte.espace-parent')}</span>
        <span aria-hidden="true" className="text-lg leading-none text-craie-douce">
          ›
        </span>
      </button>
    );
  }

  return (
    <form
      className="flex flex-col gap-3 px-5 py-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (Number(saisie) === question.a * question.b) {
          setOuverte(true);
          return;
        }
        setRate(true);
        setSaisie('');
      }}
    >
      <label className="text-sm text-craie-douce" htmlFor="porte-parentale">
        {t('compte.porte.consigne')(question.a, question.b)}
      </label>
      <div className="flex gap-2">
        <input
          id="porte-parentale"
          type="number"
          inputMode="numeric"
          autoFocus
          value={saisie}
          onChange={(e) => {
            setSaisie(e.target.value);
            setRate(false);
          }}
          className="min-h-12 w-28 rounded-2xl border-2 border-encre-bord bg-encre-clair px-4 text-craie"
        />
        <button
          type="submit"
          className="min-h-12 cursor-pointer rounded-2xl border-2 border-encre-bord bg-encre-clair px-5 text-craie transition-colors hover:border-soleil"
        >
          {t('compte.porte.valider')}
        </button>
      </div>
      {rate && <p className="text-sm text-soleil">{t('compte.porte.rate')}</p>}
    </form>
  );
}
