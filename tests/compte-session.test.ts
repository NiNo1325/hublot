import { SignJWT, createLocalJWKSet, exportJWK, generateKeyPair } from 'jose';
import { beforeEach, describe, expect, it } from 'vitest';
import { DUREE_SESSION_S, lireSession, signerSession } from '@/lib/compte/session';
import { EMETTEURS_GOOGLE, verifierJetonGoogle } from '@/lib/compte/google';

const SECRET = 'un-secret-de-test-suffisamment-long-pour-hs256';

describe('session du parent', () => {
  beforeEach(() => {
    process.env.SESSION_SECRET = SECRET;
  });

  it('fait l’aller-retour sur l’identifiant du compte', async () => {
    const jeton = await signerSession('sub-google-123');
    expect(await lireSession(jeton)).toBe('sub-google-123');
  });

  it('refuse un jeton falsifié', async () => {
    const jeton = await signerSession('sub-google-123');
    const falsifie = `${jeton.slice(0, -3)}abc`;
    expect(await lireSession(falsifie)).toBeNull();
  });

  it('refuse un jeton signé avec un autre secret', async () => {
    const jeton = await signerSession('sub-google-123');
    process.env.SESSION_SECRET = 'un-autre-secret-tout-aussi-long-mais-different';
    expect(await lireSession(jeton)).toBeNull();
  });

  it('refuse un cookie absent ou vide', async () => {
    expect(await lireSession(undefined)).toBeNull();
    expect(await lireSession('')).toBeNull();
  });

  it('refuse un jeton expiré', async () => {
    const passe = Math.floor(Date.now() / 1000) - 10;
    const expire = await new SignJWT({ sub: 'x' })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime(passe)
      .sign(new TextEncoder().encode(SECRET));
    expect(await lireSession(expire)).toBeNull();
  });

  /*
    Sans secret configuré, aucune session ne peut être vérifiée. On rend `null`
    plutôt que de laisser passer : une variable d'environnement oubliée au
    déploiement doit déconnecter tout le monde, jamais ouvrir la porte.
  */
  it('ne reconnaît aucune session quand le secret manque', async () => {
    const jeton = await signerSession('sub-google-123');
    delete process.env.SESSION_SECRET;
    expect(await lireSession(jeton)).toBeNull();
  });

  it('dure assez longtemps pour ne pas redemander la connexion chaque semaine', () => {
    expect(DUREE_SESSION_S).toBeGreaterThanOrEqual(60 * 60 * 24 * 30);
  });
});

describe('vérification du jeton Google', () => {
  const AUDIENCE = 'client-id-de-test.apps.googleusercontent.com';

  async function jeuDeCles() {
    const { publicKey, privateKey } = await generateKeyPair('RS256', { extractable: true });
    const jwk = await exportJWK(publicKey);
    jwk.kid = 'test';
    jwk.alg = 'RS256';
    return { privateKey, jwks: createLocalJWKSet({ keys: [jwk] }) };
  }

  async function jeton(
    privateKey: CryptoKey,
    charge: Record<string, unknown>,
    emetteur = 'https://accounts.google.com',
  ) {
    return new SignJWT(charge)
      .setProtectedHeader({ alg: 'RS256', kid: 'test' })
      .setIssuer(emetteur)
      .setAudience(AUDIENCE)
      .setExpirationTime('1h')
      .sign(privateKey);
  }

  it('accepte un jeton valide et n’en retient que le `sub`', async () => {
    const { privateKey, jwks } = await jeuDeCles();
    const j = await jeton(privateKey, {
      sub: '10769150350006150715113082367',
      email: 'parent@example.com',
      name: 'Un Parent',
      picture: 'https://example.com/photo.jpg',
    });
    const resultat = await verifierJetonGoogle(j, { jwks, audience: AUDIENCE });
    expect(resultat).toBe('10769150350006150715113082367');
  });

  it('refuse un jeton destiné à une autre application', async () => {
    const { privateKey, jwks } = await jeuDeCles();
    const j = await jeton(privateKey, { sub: 'x' });
    expect(await verifierJetonGoogle(j, { jwks, audience: 'une-autre-app' })).toBeNull();
  });

  it('refuse un jeton d’un émetteur inattendu', async () => {
    const { privateKey, jwks } = await jeuDeCles();
    const j = await jeton(privateKey, { sub: 'x' }, 'https://malveillant.example');
    expect(await verifierJetonGoogle(j, { jwks, audience: AUDIENCE })).toBeNull();
  });

  it('refuse un jeton signé par une autre clé', async () => {
    const { privateKey } = await jeuDeCles();
    const autre = await jeuDeCles();
    const j = await jeton(privateKey, { sub: 'x' });
    expect(await verifierJetonGoogle(j, { jwks: autre.jwks, audience: AUDIENCE })).toBeNull();
  });

  it('refuse un jeton sans `sub`', async () => {
    const { privateKey, jwks } = await jeuDeCles();
    const j = await jeton(privateKey, { email: 'parent@example.com' });
    expect(await verifierJetonGoogle(j, { jwks, audience: AUDIENCE })).toBeNull();
  });

  it('refuse n’importe quoi qui ne soit pas un jeton', async () => {
    const { jwks } = await jeuDeCles();
    expect(await verifierJetonGoogle('pas-un-jwt', { jwks, audience: AUDIENCE })).toBeNull();
    expect(await verifierJetonGoogle('', { jwks, audience: AUDIENCE })).toBeNull();
  });

  it('accepte les deux formes d’émetteur que Google utilise', () => {
    expect(EMETTEURS_GOOGLE).toContain('https://accounts.google.com');
    expect(EMETTEURS_GOOGLE).toContain('accounts.google.com');
  });
});
