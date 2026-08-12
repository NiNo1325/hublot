import type { NextConfig } from 'next';
import { execSync } from 'node:child_process';

/**
 * Version du build, affichée en tout petit dans Réglages : date + hash du commit
 * déployé, pour savoir sans ambiguïté quelle version tourne. Sur Vercel, le
 * commit vient de `VERCEL_GIT_COMMIT_SHA` ; en local, on lit git ; à défaut,
 * « local ». Calculée au build, inlinée côté client via `NEXT_PUBLIC_BUILD`.
 */
function versionBuild(): string {
  let sha = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? '';
  if (!sha) {
    try {
      sha = execSync('git rev-parse --short HEAD').toString().trim();
    } catch {
      sha = 'local';
    }
  }
  const date = new Date().toISOString().slice(0, 10);
  return `${date} · ${sha}`;
}

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BUILD: versionBuild(),
  },
};

export default nextConfig;
