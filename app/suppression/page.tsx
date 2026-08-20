import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Supprimer son compte et ses données — Hublot',
  description:
    'Comment supprimer le compte Google relié à Hublot et effacer la progression sauvegardée.',
};

/**
 * Page de suppression de compte et de données.
 *
 * Exigée par le Play Store pour toute application permettant de créer un
 * compte : l'URL doit être publique, accessible sans connexion, et décrire ce
 * qui est supprimé, ce qui est conservé, et sous quel délai. Son adresse est
 * déposée dans la fiche Play, séparément de la politique de confidentialité.
 *
 * Elle décrit deux chemins, parce qu'un parent qui a désinstallé l'app n'a plus
 * accès au premier — et c'est précisément le cas où il tient le plus à ce que
 * ses données disparaissent.
 */
export default function SuppressionPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="font-display text-3xl font-semibold">
        Supprimer son compte et ses données
      </h1>
      <p className="mt-2 text-sm text-craie-douce">Dernière mise à jour : 20 août 2026</p>

      <section className="mt-8 space-y-4 leading-relaxed">
        <p>
          Hublot ne crée de compte que si un parent relie volontairement son compte Google, depuis
          Réglages, pour que la progression de ses enfants survive à un changement d&apos;appareil.
          Si vous ne l&apos;avez jamais fait, rien n&apos;a jamais été conservé et il n&apos;y a rien
          à supprimer.
        </p>

        <h2 className="font-display text-xl font-semibold">Depuis l&apos;application</h2>
        <p>C&apos;est le chemin le plus rapide, et la suppression est immédiate.</p>
        <ol className="list-decimal space-y-1 pl-6">
          <li>Ouvrez Hublot, puis l&apos;onglet <strong>Réglages</strong>.</li>
          <li>Dans la section <strong>Sauvegarde</strong>, ouvrez l&apos;<strong>espace parent</strong> (une question d&apos;arithmétique en protège l&apos;accès).</li>
          <li>Appuyez sur <strong>« Effacer la sauvegarde »</strong>, puis confirmez.</li>
        </ol>

        <h2 className="font-display text-xl font-semibold">Par e-mail</h2>
        <p>
          Si vous avez désinstallé l&apos;application ou perdu l&apos;accès à l&apos;appareil,
          écrivez à{' '}
          <a
            className="underline transition-colors hover:text-soleil"
            href="mailto:nicolas.notte@gmail.com?subject=Suppression%20de%20mes%20donn%C3%A9es%20Hublot"
          >
            nicolas.notte@gmail.com
          </a>{' '}
          depuis l&apos;adresse du compte Google relié à Hublot, en demandant la suppression de vos
          données. La demande est traitée sous 30 jours au plus, et en pratique bien plus vite.
        </p>

        <h2 className="font-display text-xl font-semibold">Ce qui est supprimé</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>L&apos;identifiant technique du compte Google associé à Hublot.</li>
          <li>
            Toute la progression sauvegardée : cartes écoutées, cartes réussies, savants libérés,
            meilleurs scores, âge et avatar de chaque profil.
          </li>
        </ul>
        <p>
          La suppression est <strong>définitive</strong> et ne conserve aucune copie. Le compte est
          déconnecté dans la foulée.
        </p>

        <h2 className="font-display text-xl font-semibold">Ce qui reste sur votre appareil</h2>
        <p>
          La progression enregistrée localement n&apos;est pas touchée : les enfants continuent de
          jouer sur cet appareil comme avant, simplement sans sauvegarde en ligne. Pour
          l&apos;effacer aussi, utilisez « Réinitialiser la progression » en bas de Réglages, ou
          désinstallez l&apos;application.
        </p>
        <p>
          Rappel : le <strong>prénom des enfants n&apos;a jamais quitté l&apos;appareil</strong>. Il
          n&apos;a donc jamais fait partie de ce qui est conservé en ligne.
        </p>

        <p className="pt-4">
          <Link
            className="underline transition-colors hover:text-soleil"
            href="/confidentialite"
          >
            Politique de confidentialité
          </Link>
          {' · '}
          <Link className="underline transition-colors hover:text-soleil" href="/">
            Retour à l&apos;accueil
          </Link>
        </p>
      </section>
    </main>
  );
}
