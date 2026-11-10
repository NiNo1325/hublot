import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Confidentialité — Hublot',
  description:
    "Ce que Hublot enregistre, où, et comment l'effacer. Politique de confidentialité.",
};

const CONTACT = 'nicolas.notte@gmail.com';

/**
 * Politique de confidentialité.
 *
 * Obligatoire pour publier une application destinée aux enfants sur le Play
 * Store (Politique Familles) : son URL publique est fournie à la fiche Play, et
 * les Réglages y mènent depuis l'application.
 *
 * Elle doit dire exactement ce que fait le code, ni plus ni moins — c'est elle
 * que Google compare à la section « Sécurité des données ». Toute nouveauté qui
 * fait sortir une information de l'appareil (les notifications l'ont fait) se
 * répercute ici ET dans `docs/play-store/fiche-et-conformite.md`.
 *
 * Les deux langues de l'application sont sur la même page, l'une sous l'autre :
 * la page est lue par des parents et par les relecteurs de Google, et une
 * seule adresse doit suffire à tout le monde.
 */
export default function ConfidentialitePage() {
  const titre = 'font-display text-xl font-semibold';
  const lien = 'underline transition-colors hover:text-soleil';

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="font-display text-3xl font-semibold">Confidentialité</h1>
      <p className="mt-2 text-sm text-craie-douce">
        Dernière mise à jour : 10 novembre 2026 ·{' '}
        <a className={lien} href="#english">
          English version below
        </a>
      </p>

      <section className="mt-8 space-y-4 leading-relaxed" lang="fr">
        <p>
          Hublot est une application qui fait découvrir les sciences aux enfants
          de 3 à 12 ans. Elle est conçue pour respecter la vie privée des
          familles : aucun compte, aucune publicité, aucun outil de suivi ou de
          mesure d&apos;audience.
        </p>

        <h2 className={titre}>Ce que nous ne demandons jamais</h2>
        <p>
          Hublot ne demande ni nom, ni adresse e-mail, ni photo, ni position, ni
          contacts. L&apos;application ne crée pas de profil et ne partage rien
          avec des annonceurs.
        </p>

        <h2 className={titre}>Ce qui reste sur l&apos;appareil</h2>
        <p>
          L&apos;âge choisi, la langue, les cartes écoutées, les étoiles et les
          scores sont enregistrés uniquement sur l&apos;appareil. Ils ne nous
          sont jamais envoyés. Les cartes et les sons téléchargés pour
          l&apos;écoute hors ligne restent eux aussi sur l&apos;appareil. Tout
          cela s&apos;efface depuis les Réglages (« Réinitialiser la
          progression »), ou en désinstallant l&apos;application.
        </p>

        <h2 className={titre}>Notifications (facultatives)</h2>
        <p>
          Les notifications sont désactivées par défaut. Un adulte peut les
          activer dans les Réglages, après une question réservée aux parents.
          Dans ce cas seulement, l&apos;appareil nous transmet un{' '}
          <strong>identifiant technique de notification</strong> (une adresse
          fournie par le service de notifications du navigateur et ses clés de
          chiffrement). Il ne contient ni nom, ni e-mail, et n&apos;est relié à
          aucune autre information.
        </p>
        <p>
          Nous l&apos;utilisons uniquement pour annoncer de nouvelles cartes ou
          une mise à jour. Il est conservé chez notre prestataire de base de
          données (Upstash), transmis de façon chiffrée, et supprimé dès que les
          notifications sont désactivées dans les Réglages. Après une
          désinstallation, il devient inutilisable et est effacé
          automatiquement à l&apos;envoi suivant.
        </p>

        <h2 className={titre}>Hébergement</h2>
        <p>
          L&apos;application est servie par notre hébergeur (Vercel). Comme tout
          serveur web, il traite des données techniques de connexion, dont
          l&apos;adresse IP, le temps de livrer les pages et d&apos;assurer la
          sécurité du service. Nous ne les utilisons pas pour identifier ou
          suivre qui que ce soit.
        </p>

        <h2 className={titre}>Vos droits et la suppression des données</h2>
        <p>
          Un parent peut à tout moment désactiver les notifications, effacer la
          progression ou désinstaller l&apos;application. Pour toute question,
          ou pour demander la suppression d&apos;un identifiant de notification,
          écrivez à{' '}
          <a className={lien} href={`mailto:${CONTACT}`}>
            {CONTACT}
          </a>
          .
        </p>
      </section>

      <hr className="my-10 border-encre-bord" />

      <section id="english" className="space-y-4 leading-relaxed" lang="en">
        <h1 className="font-display text-3xl font-semibold">Privacy</h1>
        <p className="text-sm text-craie-douce">Last updated: 10 November 2026</p>
        <p>
          Hublot is an app that introduces children aged 3 to 12 to science. It
          is designed to respect family privacy: no account, no advertising, no
          tracking or analytics tools.
        </p>

        <h2 className={titre}>What we never ask for</h2>
        <p>
          Hublot does not ask for a name, an email address, a photo, a location
          or contacts. The app builds no profile and shares nothing with
          advertisers.
        </p>

        <h2 className={titre}>What stays on the device</h2>
        <p>
          The chosen age, the language, the cards listened to, stars and scores
          are stored on the device only. They are never sent to us. Cards and
          sounds downloaded for offline listening also stay on the device. All
          of it can be erased from Settings (“Reset progress”) or by
          uninstalling the app.
        </p>

        <h2 className={titre}>Notifications (optional)</h2>
        <p>
          Notifications are off by default. An adult can turn them on in
          Settings, after a question meant for parents. Only then does the
          device send us a <strong>technical notification identifier</strong>{' '}
          (an address issued by the browser&apos;s notification service and its
          encryption keys). It contains no name or email and is not linked to
          any other information.
        </p>
        <p>
          We use it only to announce new cards or an app update. It is stored
          with our database provider (Upstash), sent over an encrypted
          connection, and deleted as soon as notifications are turned off in
          Settings. After an uninstall it stops working and is erased
          automatically at the next send.
        </p>

        <h2 className={titre}>Hosting</h2>
        <p>
          The app is served by our hosting provider (Vercel). Like any web
          server, it processes technical connection data, including the IP
          address, for as long as needed to deliver pages and keep the service
          secure. We do not use it to identify or track anyone.
        </p>

        <h2 className={titre}>Your rights and data deletion</h2>
        <p>
          A parent can turn off notifications, reset progress or uninstall the
          app at any time. For any question, or to ask for a notification
          identifier to be deleted, write to{' '}
          <a className={lien} href={`mailto:${CONTACT}`}>
            {CONTACT}
          </a>
          .
        </p>
      </section>

      <p className="pt-8">
        <Link className={lien} href="/">
          Retour à l&apos;application · Back to the app
        </Link>
      </p>
    </main>
  );
}
