import type { MetadataRoute } from 'next';

/**
 * Manifeste d'application installable.
 *
 * Sans lui, ni installation sur l'écran d'accueil, ni mode hors ligne : c'est
 * le préalable au vrai besoin, écouter les cartes en voiture.
 *
 * Android n'affiche l'invite d'installation que si le manifeste fournit des
 * icônes PNG de 192 et 512 pixels — le SVG de l'onglet ne suffit pas. Elles
 * sont rendues depuis le même dessin et vivent dans `public/icones`.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hublot — les sciences pour les curieux',
    short_name: 'Hublot',
    description:
      'Des cartes animées et racontées à voix haute pour découvrir les sciences, de 3 à 12 ans.',
    start_url: '/',
    id: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#0f1b33',
    theme_color: '#0f1b33',
    lang: 'fr',
    categories: ['education', 'kids'],
    icons: [
      { src: '/icones/icone-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icones/icone-512.png', sizes: '512x512', type: 'image/png' },
      /*
        `maskable` autorise Android à recadrer l'icône dans la forme du
        lanceur. Le dessin s'y prête : le hublot est centré et entouré de fond,
        donc rien d'essentiel ne tombe dans la zone rognée.
      */
      {
        src: '/icones/icone-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
