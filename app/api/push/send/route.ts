import { NextResponse } from 'next/server';
import webpush, { type PushSubscription, WebPushError } from 'web-push';
import { listerAbonnements, retirerAbonnement } from '@/lib/push/store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Envoie une notification à tous les abonnés. Protégée par `PUSH_ADMIN_SECRET`
 * (jamais exposé au client) : c'est un endpoint d'administration, appelé par le
 * script `npm run push` au moment où l'on publie du contenu ou une version.
 *
 * Les abonnements devenus invalides (404/410) sont purgés au passage.
 */
export async function POST(request: Request) {
  const secret = process.env.PUSH_ADMIN_SECRET;
  if (!secret || request.headers.get('x-push-secret') !== secret) {
    return NextResponse.json({ ok: false, erreur: 'non autorisé' }, { status: 401 });
  }

  const { titre, corps, url, icon } = (await request.json()) as {
    titre?: string;
    corps?: string;
    url?: string;
    icon?: string;
  };
  if (!titre) {
    return NextResponse.json({ ok: false, erreur: 'titre requis' }, { status: 400 });
  }

  webpush.setVapidDetails(
    process.env.VAPID_SUBJECT!,
    process.env.VAPID_PUBLIC_KEY!,
    process.env.VAPID_PRIVATE_KEY!,
  );

  const abonnes = await listerAbonnements();
  const charge = JSON.stringify({
    titre,
    corps: corps ?? '',
    url: url ?? '/',
    ...(icon ? { icon } : {}),
  });

  let envoyes = 0;
  let retires = 0;
  await Promise.all(
    abonnes.map(async (abonnement) => {
      try {
        await webpush.sendNotification(abonnement as PushSubscription, charge);
        envoyes += 1;
      } catch (erreur) {
        // Endpoint mort : l'abonnement a expiré ou l'app a été désinstallée.
        if (erreur instanceof WebPushError && (erreur.statusCode === 404 || erreur.statusCode === 410)) {
          await retirerAbonnement(abonnement.endpoint);
          retires += 1;
        }
      }
    }),
  );

  return NextResponse.json({ ok: true, abonnes: abonnes.length, envoyes, retires });
}
