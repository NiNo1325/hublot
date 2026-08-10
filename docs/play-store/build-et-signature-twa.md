# Reconstruire et signer l'AAB (coquille TWA)

Procédure pour produire un `.aab` signé, prêt à importer dans la Play Console.
À suivre à chaque nouvelle version de l'app Android.

> **Règle d'or : ne plus utiliser `bubblewrap build`.**
> Bubblewrap régénère `android/app/build.gradle` à partir de `twa-manifest.json`
> et **efface** les réglages de conformité et de signature décrits ici
> (targetSdk 36, version de Play Billing épinglée, `signingConfig`). On construit
> désormais **directement avec Gradle**.

## Contexte : pourquoi ces réglages

Depuis le 31 août 2026, Google Play exige :

1. **Target SDK Android 16 (API 36)** au minimum.
2. **Google Play Billing 8.0.0+** (le pont Digital Goods l'embarque).

Bubblewrap 1.24.1 (la dernière version) génère encore `targetSdkVersion 35` et
tire `com.android.billingclient:billing:7.1.1` via le helper
`com.google.androidbrowserhelper:billing:1.1.0`. On corrige `targetSdkVersion`
à la main dans `android/app/build.gradle` (fichier **non versionné**, comme tout
le projet Android généré, sauf `twa-manifest.json`).

> ⚠️ **Play Billing reste en 7.1.1, PAS en 8.0.0.** Voir l'encadré ci-dessous :
> forcer la 8.0.0 fait planter l'application au démarrage. On garde donc la
> 7.1.1 que tire le helper. C'est encore accepté par Play jusqu'au 31 août 2026 ;
> la vraie migration v8 est un préalable du chantier freemium, à finir avant
> cette date.

## Réglages appliqués dans `android/app/build.gradle`

- `targetSdkVersion 36` (au lieu de 35) ; `compileSdkVersion` était déjà 36.
- Bump de `versionCode` / `versionName` à chaque release (miroir de
  `appVersionCode` dans `twa-manifest.json`, lui **versionné**).
- Client de facturation **épinglé sur la 7.1.1**, la version que tire le helper :
  ```gradle
  implementation 'com.android.billingclient:billing:7.1.1'
  ```
- Signature gérée par Gradle, identifiants lus depuis `android/keystore.properties`
  (voir plus bas). La build sans ce fichier produit un AAB **non signé** (utile
  pour vérifier la conformité sans secret).

> ⚠️ **Play Billing : NE PAS forcer la 8.0.0 — elle plante l'app au démarrage.**
> Le helper `billing:1.1.0` enregistre un `DelegationService` dont le `onCreate`
> appelle `enablePendingPurchases()` (sans argument), **méthode supprimée en
> v8.0.0**. Comme ce service s'initialise au lancement, forcer la 8.0.0 fait
> planter l'application dès l'ouverture (`NoSuchMethodError`), **même facturation
> dormante** — c'était le crash de la version 3 (bugreport du 09/08/2026).
> On reste donc en 7.1.1. Google exige la 8.0.0+ au **31 août 2026** : la vraie
> migration (helper compatible v8 s'il sort, sinon pont natif Digital Goods) est
> un **préalable du chantier freemium**, à livrer avant cette date. Réf. issue
> GoogleChrome/android-browser-helper #541.

## `android/keystore.properties` (non versionné)

Ignoré par git (règle `/android/*` du `.gitignore`). Contient le mot de passe de
la **clé d'upload** :

```properties
storePassword=LE_MOT_DE_PASSE_DU_KEYSTORE
keyPassword=LE_MOT_DE_PASSE_DE_LA_CLE
keyAlias=android
storeFile=android.keystore
```

- `storeFile` est résolu **relativement à `android/`** → `android/android.keystore`.
- Souvent `storePassword` et `keyPassword` sont identiques.
- C'est le mot de passe choisi à la création de la clé (premier `bubblewrap`).
  Perdu ? L'app utilise **Play App Signing** : demander une réinitialisation de la
  clé d'upload dans la Play Console (Configuration → Intégrité de l'app), sans
  perdre l'app.

## Construire l'AAB signé

Depuis `android/`, en PowerShell :

```powershell
$env:JAVA_HOME="C:\bwrap\jdk17"; $env:ANDROID_HOME="C:\bwrap\android_sdk"
.\gradlew.bat clean bundleRelease
```

(Chemins JDK/SDK issus de `~/.bubblewrap/config.json`.)

Sortie : **`android/app/build/outputs/bundle/release/app-release.aab`**.

> En cas d'erreur `parseReleaseLocalResources ... NullPointerException` : c'est un
> état incrémental corrompu. Le `clean` du dessus le résout ; sinon relancer.

## Vérifier avant d'importer

Toujours depuis `android/`, avec `JAVA_HOME` positionné :

```bash
# Signature valide ?
"$JAVA_HOME/bin/jarsigner" -verify app/build/outputs/bundle/release/app-release.aab
# → "jar verified."

# targetSdk et versionCode réellement dans le bundle ?
grep -oE 'targetSdkVersion="[0-9]+"|versionCode="[0-9]+"' \
  app/build/intermediates/bundle_manifest/release/*/AndroidManifest.xml

# Play Billing bien en 7.1.1 (surtout PAS 8.0.0, qui crashe au démarrage) ?
./gradlew :app:dependencies --configuration releaseRuntimeClasspath | grep billingclient
# → com.android.billingclient:billing:7.1.1  (sans "-> 8.0.0")
```

Tester le mot de passe du store sans l'exposer, si besoin :

```bash
# écrit la valeur dans un fichier temporaire, teste, supprime
grep '^storePassword=' keystore.properties | sed 's/^storePassword=//' | tr -d '\r\n' > _pw
"$JAVA_HOME/bin/keytool" -list -keystore android.keystore -storepass:file _pw ; rm -f _pw
```

## Importer dans la Play Console

1. **Tester et publier** → créer une version (d'abord **test interne**, comme
   recommandé par Google).
2. Importer `app-release.aab`.
3. Publier, puis promouvoir en **production**.
4. Une fois la version traitée, les avertissements API 36 et Billing 8
   disparaissent.

## Historique des versions

| versionCode | versionName | Date | Notes |
|---|---|---|---|
| 2 | 2 | 2026-07-24 | Première publication (targetSdk 35, Billing 7.1.1) |
| 3 | 3 | 2026-07-29 | Conformité : targetSdk 36 + Play Billing 8.0.0 |
| 4 | 4 | 2026-08-10 | Correctif crash au démarrage : retour à Play Billing 7.1.1 (v8 incompatible avec le helper) |
