import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SplashScreen from '../components/SplashScreen';
import Providers from '../components/Providers';

export const metadata: Metadata = {
  title: 'Ramon Cerqueira — Desenvolvedor Frontend',
  description:
    'Desenvolvimento de sistemas sob medida e soluções integradas para otimizar processos e gerar valor real para o seu negócio.',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  metadataBase: new URL('https://www.seudominio.com'),
  openGraph: {
    title: 'Ramon Cerqueira — Desenvolvedor Frontend',
    description:
      'Criação de interfaces modernas, integrações e automações com foco em performance e qualidade.',
    url: 'https://www.seudominio.com',
    siteName: 'Ramon Cerqueira',
    images: [{ url: '/images/hero-1.jpg', width: 1200, height: 630, alt: 'Portfolio Ramon Cerqueira' }],
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramon Cerqueira — Desenvolvedor Frontend',
    description:
      'Desenvolvimento de sistemas sob medida e soluções integradas.',
    images: ['/images/hero-1.jpg'],
  },
  viewport: { width: 'device-width', initialScale: 1, maximumScale: 1 },
};

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-black text-white`}>
        <Providers>
          <SplashScreen />
          {children}
        </Providers>
      </body>
    </html>
  );
}
