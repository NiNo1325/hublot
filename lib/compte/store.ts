import { Redis } from '@upstash/redis';
import { blocVide, type BlocProgression } from '@/lib/sync/fusion';
import { lireBloc } from '@/lib/sync/validation';

/**
 * La sauvegarde de progression d'un compte, dans Upstash Redis.
 *
 * Une clé par compte : `progression:<sub>`, où `sub` est l'identifiant Google
 * pseudonyme du parent. La valeur ne contient ni prénom, ni e-mail, ni nom —
 * seulement des identifiants de profil opaques, des avatars et des listes de
 * cartes.
 *
 * Client créé paresseusement, comme pour les abonnements push : `next build`
 * ne doit pas échouer là où les variables d'env ne sont pas encore posées.
 */
let redis: Redis | null = null;

function client(): Redis {
  if (redis) return redis;
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    throw new Error('Redis non configuré (KV_REST_API_URL / KV_REST_API_TOKEN manquants).');
  }
  redis = new Redis({ url, token });
  return redis;
}

function cle(sub: string): string {
  return `progression:${sub}`;
}

/**
 * La progression stockée pour un compte.
 *
 * Repasse par `lireBloc` : ce qui sort du stockage est traité avec la même
 * défiance que ce qui vient du réseau, car une version future de l'app pourrait
 * y avoir écrit une forme différente.
 */
export async function lireProgression(sub: string): Promise<BlocProgression> {
  const brut = await client().get<unknown>(cle(sub));
  return brut ? lireBloc(brut) : blocVide();
}

export async function ecrireProgression(sub: string, bloc: BlocProgression): Promise<void> {
  await client().set(cle(sub), bloc);
}

/** Efface tout ce que le compte a déposé. Exigé par le Play Store, et de bon sens. */
export async function effacerProgression(sub: string): Promise<void> {
  await client().del(cle(sub));
}
