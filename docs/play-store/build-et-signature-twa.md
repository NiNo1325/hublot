# Reconstruire et signer l'AAB (coquille TWA)

Procédure pour produire un `.aab` signé, prêt à importer dans la Play Console.
À suivre à chaque nouvelle version de l'app Android.

> **Règle d'or : ne plus utiliser `bubblewrap build`.**
> Bubblewrap régénère `android/app/build.gradle` à partir de `twa-manifest.json`
> et **efface** les réglages de conformité et de signature décrits ici
> (targetSdk 36, Play Billing 8, `signingConfig`). On construit désormais
> **directement avec Gradle**.

## Contexte : pourquoi ces réglages

Depuis le 31 août 2026, Google Play exige :

1. **Target SDK Android 16 (API 36)** au minimum.
2. **Google Play Billing 8.0.0+** (le pont Digital Goods l'embarque).

Bubblewrap 1.24.1 (la dernière version) génère encore `targetSdkVersion 35` et
tire `com.android.billingclient:billing:7.1.1` via le helper
`com.google.androidbrowserhelper:billing:1.1.0`. On corrige donc à la main dans
`android/app/build.gradle` (fichier **non versionné**, comme tout le projet
Android généré, sauf `twa-manifest.json`).

## Réglages appliqués dans `android/app/build.gradle`

- `targetSdkVersion 36` (au lieu de 35) ; `compileSdkVersion` était déjà 36.
- Bump de `versionCode` / `versionName` à chaque release (miroir de
  `appVersionCode` dans `twa-manifest.json`, lui **versionné**).
- Force le client de facturation par-dessus le helper :
  ```gradle
  implementation 'com.android.billingclient:billing:8.0.0'
  ```
- Signature gérée par Gradle, identifiants lus depuis `android/keystore.properties`
  (voir plus bas). La build sans ce fichier produit un AAB **non signé** (utile
  pour vérifier la conformité sans secret).

> ⚠️ **Play Billing : dette technique connue.** Le helper `billing:1.1.0` appelle
> des API retirées en v8 (`querySkuDetailsAsync`). Forcer le client en 8.0.0 fait
> passer la conformité Play, mais **casserait le flux Digital Goods à l'exécution**.
> Sans effet aujourd'hui car la facturation est **dormante** (freemium pas encore
> implémenté). À traiter au **chantier freemium** : migration v8 du helper si Google
> l'a publiée d'ici là, sinon pont natif. Réf. issue GoogleChrome/android-browser-helper #541.

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

# Play Billing bien surchargé en 8.0.0 ?
./gradlew :app:dependencies --configuration releaseRuntimeClasspath | grep billingclient
# → com.android.billingclient:billing:7.1.1 -> 8.0.0
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
