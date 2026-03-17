import type { Metadata } from 'next';
import { Anek_Malayalam, Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const anekMalayalam = Anek_Malayalam({
  subsets: ['malayalam', 'latin'],
  variable: '--font-anek-malayalam',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nuneshan - Exposing Political Lies in Kerala',
  description: 'Explore the reels of Nuneshan, dedicated to unmasking political lies and bringing truth to light through engaging short-form videos.',
  metadataBase: new URL('https://nuneshan.com'), // Replace with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nuneshan - Exposing Political Lies in Kerala',
    description: 'Explore the reels of Nuneshan, dedicated to unmasking political lies and bringing truth to light.',
    url: 'https://nuneshan.com',
    siteName: 'Nuneshan',
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 600,
        alt: 'Nuneshan Logo',
      },
    ],
    locale: 'ml_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nuneshan - Exposing Political Lies in Kerala',
    description: 'Explore the reels of Nuneshan, dedicated to unmasking political lies.',
    images: ['/logo.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ml" className={`${inter.variable} ${anekMalayalam.variable}`}>
      <body className="font-sans antialiased bg-black text-white" suppressHydrationWarning>{children}</body>
    </html>
  );
}
