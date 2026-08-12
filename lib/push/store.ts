import { Redis } from '@upstash/redis';

/**
 * Stockage des abonnements aux notifications push, dans Upstash Redis.
 *
 * Un seul hash `push:abonnes` : clé = l'endpoint (unique par appareil/navigateur),
 * valeur = l'abonnement complet. On ne garde rien d'autre — aucune identité, pas
 * de tiers. Le client Redis est créé paresseusement pour que `next build` ne
 * plante pas quand les variables d'env ne sont pas encore posées.
 */
const CLE = 'push:abonnes';

let redis: Redis | null = null;
function client(): Redis {
  if (redis) return redis;
  // L'intégration Upstash du Marketplace Vercel pose `KV_REST_API_URL/TOKEN`
  // (convention KV) ; en local ou ailleurs on accepte aussi les noms natifs
  // `UPSTASH_REDIS_REST_URL/TOKEN`.
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    throw new Error('Redis non configuré (KV_REST_API_URL / KV_REST_API_TOKEN manquants).');
  }
  redis = new Redis({ url, token });
  return redis;
}

export interface AbonnementPush {
  endpoint: string;
  expirationTime?: number | null;
  keys: { p256dh: string; auth: string };
}

export async function ajouterAbonnement(abonnement: AbonnementPush): Promise<void> {
  await client().hset(CLE, { [abonnement.endpoint]: abonnement });
}

export async function retirerAbonnement(endpoint: string): Promise<void> {
  await client().hdel(CLE, endpoint);
}

export async function listerAbonnements(): Promise<AbonnementPush[]> {
  const tout = await client().hgetall<Record<string, AbonnementPush>>(CLE);
  return tout ? Object.values(tout) : [];
}
