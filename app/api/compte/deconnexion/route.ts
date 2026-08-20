import { NextResponse } from 'next/server';
import { fermerSession } from '@/lib/compte/requete';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Ferme la session.
 *
 * N'efface rien : la progression déposée reste, et sera retrouvée à la
 * prochaine connexion. Pour tout supprimer, c'est `DELETE /api/compte`.
 */
export async function POST() {
  await fermerSession();
  return NextResponse.json({ ok: true });
}
