import './globals.css';
import type { Metadata } from 'next';
import { Outfit, Roboto } from 'next/font/google';
import WhatsAppButton from '@/components/WhatsAppButton';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kaizu - Automation & Digital Infrastructure',
  description:
    'Transform your operations with cutting-edge automation, intelligence, and digital infrastructure solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${roboto.variable}`}>
      <body className={roboto.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}