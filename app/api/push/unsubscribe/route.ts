import { NextResponse } from 'next/server';
import { retirerAbonnement } from '@/lib/push/store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Retire l'appareil de la liste des abonnés. */
export async function POST(request: Request) {
  try {
    const { endpoint } = (await request.json()) as { endpoint?: string };
    if (!endpoint) {
      return NextResponse.json({ ok: false, erreur: 'endpoint requis' }, { status: 400 });
    }
    await retirerAbonnement(endpoint);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, erreur: 'stockage indisponible' }, { status: 500 });
  }
}
