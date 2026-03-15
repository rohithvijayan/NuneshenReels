import type {Metadata} from 'next';
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
  title: 'Nuneshan',
  description: 'Nuneshan Landing Page',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ml" className={`${inter.variable} ${anekMalayalam.variable}`}>
      <body className="font-sans antialiased bg-black text-white" suppressHydrationWarning>{children}</body>
    </html>
  );
}
