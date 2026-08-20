import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Confidentialité — Hublot',
  description:
    'Hublot ne collecte aucune donnée par défaut. Sauvegarde facultative par compte Google. Politique de confidentialité.',
};

/**
 * Politique de confidentialité.
 *
 * Obligatoire pour publier une application destinée aux enfants sur le Play
 * Store (Politique Familles), et son URL publique figure sur la fiche Play.
 *
 * Réécrite le 20 août 2026, à l'arrivée de la sauvegarde par compte Google.
 * La version précédente affirmait qu'aucune donnée n'était collectée et
 * qu'aucun compte n'existait : ce n'est plus vrai dès qu'un parent relie le
 * sien. Le texte décrit donc précisément ce qui est stocké, ce qui ne l'est
 * jamais, et comment tout effacer — chaque phrase doit rester vérifiable dans
 * le code.
 */
export default function ConfidentialitePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="font-display text-3xl font-semibold">Confidentialité</h1>
      <p className="mt-2 text-sm text-craie-douce">Dernière mise à jour : 20 août 2026</p>

      <section className="mt-8 space-y-4 leading-relaxed">
        <p>
          Hublot est une application qui fait découvrir les sciences aux enfants de 3 à 12 ans. Nous
          l&apos;avons conçue pour qu&apos;elle respecte la vie privée des familles.
        </p>

        <h2 className="font-display text-xl font-semibold">Par défaut, rien n&apos;est collecté</h2>
        <p>
          Sans action de votre part, Hublot ne collecte aucune donnée personnelle. Aucun compte
          n&apos;est demandé, aucune inscription, aucune adresse e-mail. La progression de
          l&apos;enfant — cartes écoutées, savants libérés, scores — reste sur l&apos;appareil.
          L&apos;application ne contient aucune publicité et aucun outil de suivi.
        </p>

        <h2 className="font-display text-xl font-semibold">
          La sauvegarde par compte Google, si vous la choisissez
        </h2>
        <p>
          Un parent peut relier un compte Google, depuis Réglages, afin que la progression survive à
          un changement d&apos;appareil. Cette fonction est facultative : tant qu&apos;elle
          n&apos;est pas activée, rien n&apos;est envoyé ni conservé. Elle est protégée par une
          question réservée aux adultes.
        </p>
        <p>Une fois le compte relié, nous conservons uniquement :</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            l&apos;identifiant technique que Google nous transmet pour ce compte — un numéro, qui ne
            révèle ni votre nom ni votre adresse ;
          </li>
          <li>
            la progression de chaque profil : cartes écoutées, cartes réussies, savants libérés,
            meilleurs scores et figure d&apos;avatar.
          </li>
        </ul>

        <h2 className="font-display text-xl font-semibold">Ce que nous ne conservons jamais</h2>
        <p>
          <strong>
            Ni le prénom ni l&apos;âge des enfants ne quittent l&apos;appareil.
          </strong>{' '}
          Ce sont les deux seules informations qui les décriraient : elles sont saisies localement,
          servent à distinguer les profils et à ajuster les explications, et ne sont jamais
          transmises. Ce qui est sauvegardé ne dit rien d&apos;un enfant, seulement quelles cartes
          ont été écoutées.
        </p>
        <p>
          Lorsque vous reliez votre compte, Google nous propose également votre nom, votre adresse
          e-mail et votre photo : ces informations sont ignorées et ne sont écrites nulle part. Nous
          ne conservons aucun historique de navigation, aucune donnée de localisation, aucun
          enregistrement sonore.
        </p>

        <h2 className="font-display text-xl font-semibold">Effacer vos données</h2>
        <p>
          Dans Réglages, ouvrez l&apos;espace parent puis « Effacer la sauvegarde » : tout ce qui est
          conservé pour votre compte est supprimé immédiatement et définitivement. La progression
          reste sur l&apos;appareil, où vous pouvez la réinitialiser séparément.
        </p>
        <p>
          Vous pouvez aussi demander cette suppression par e-mail, à l&apos;adresse ci-dessous, en
          indiquant que vous utilisez Hublot. La marche à suivre complète, y compris si vous avez
          désinstallé l&apos;application, est décrite sur la page{' '}
          <Link className="underline transition-colors hover:text-soleil" href="/suppression">
            Supprimer son compte et ses données
          </Link>
          .
        </p>

        <h2 className="font-display text-xl font-semibold">Fonctionnement hors ligne</h2>
        <p>
          Les cartes et les sons peuvent être enregistrés sur l&apos;appareil pour fonctionner sans
          connexion. Ces données restent sur l&apos;appareil.
        </p>

        <h2 className="font-display text-xl font-semibold">Notifications</h2>
        <p>
          Si vous activez les notifications, votre appareil nous transmet une adresse technique
          d&apos;envoi, conservée pour vous prévenir des nouveautés. Elle ne contient aucune
          information personnelle, et désactiver les notifications la supprime.
        </p>

        <h2 className="font-display text-xl font-semibold">Contact</h2>
        <p>
          Pour toute question :{' '}
          <a
            className="underline transition-colors hover:text-soleil"
            href="mailto:nicolas.notte@gmail.com"
          >
            nicolas.notte@gmail.com
          </a>
          .
        </p>
        <p className="pt-4">
          <Link className="underline transition-colors hover:text-soleil" href="/">
            Retour à l&apos;accueil
          </Link>
        </p>
      </section>
    </main>
  );
}
