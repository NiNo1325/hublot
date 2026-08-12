'use client';

import { useEffect, useState } from 'react';

/** Une application liée déclarée au manifeste, telle que renvoyée par le navigateur. */
interface AppLiee {
  platform?: string;
  id?: string;
  version?: string;
}

/**
 * Versions affichées en tout petit en bas de Réglages :
 * - la **version de l'app Google Play** (v3, v4…), lue via
 *   `getInstalledRelatedApps()` quand on tourne dans la TWA installée ;
 * - la **version du build web** (date + commit), toujours présente.
 *
 * Hors de l'app installée (simple navigateur), la version native n'est pas
 * disponible : on l'indique comme « web ».
 */
export function InfoVersion() {
  const [appVersion, setAppVersion] = useState<string | null>(null);
  const [dansApp, setDansApp] = useState(false);

  useEffect(() => {
    const nav = navigator as Navigator & {
      getInstalledRelatedApps?: () => Promise<AppLiee[]>;
    };
    if (!nav.getInstalledRelatedApps) return;
    let vivant = true;
    nav
      .getInstalledRelatedApps()
      .then((apps) => {
        if (!vivant) return;
        const play = apps.find((a) => a.platform === 'play' && a.id === 'com.hublot.app');
        if (play) {
          setDansApp(true);
          if (play.version) setAppVersion(play.version);
        }
      })
      .catch(() => {});
    return () => {
      vivant = false;
    };
  }, []);

  const build = process.env.NEXT_PUBLIC_BUILD;
  const app = appVersion ? `app v${appVersion}` : dansApp ? 'app installée' : 'app : web';

  return (
    <p className="mt-auto self-end text-right text-[10px] leading-relaxed text-craie-douce/50">
      {app} · build {build}
    </p>
  );
}
