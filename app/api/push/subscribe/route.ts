import { NextResponse } from 'next/server';
import { ajouterAbonnement, type AbonnementPush } from '@/lib/push/store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Enregistre l'appareil pour recevoir les notifications. */
export async function POST(request: Request) {
  try {
    const abonnement = (await request.json()) as AbonnementPush;
    if (!abonnement?.endpoint || !abonnement?.keys?.p256dh || !abonnement?.keys?.auth) {
      return NextResponse.json({ ok: false, erreur: 'abonnement invalide' }, { status: 400 });
    }
    await ajouterAbonnement(abonnement);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, erreur: 'stockage indisponible' }, { status: 500 });
  }
}
