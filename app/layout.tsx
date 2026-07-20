import type { Metadata } from 'next';
import { Fredoka, Atkinson_Hyperlegible } from 'next/font/google';
import './globals.css';

/** Display : rond et joyeux, réservé aux titres et aux gros boutons. */
const fredoka = Fredoka({
  variable: '--font-fredoka',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

/**
 * Corps de texte : dessinée pour la lisibilité, avec des lettres
 * désambiguïsées — un atout réel pour de jeunes lecteurs.
 */
const atkinson = Atkinson_Hyperlegible({
  variable: '--font-atkinson',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Hublot — les sciences pour les curieux',
  description:
    "Des cartes animées et racontées à voix haute pour découvrir les sciences, de 3 à 12 ans.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${fredoka.variable} ${atkinson.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
