import { tw } from '@/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Footer, Header } from '../components';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Apple Summary Slides',
  description:
    'A collection of the "bento" summary slides created by Apple for WWDC and Apple Events',
  keywords:
    'apple, summary, slides, products, events, wwdc, tiles, cards, iphone, ipad, mac, macbook, vision, bento, wrapped',
  authors: [{ name: 'Ricky Zhang' }],
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  other: {
    language: 'English',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={tw(inter.className, 'bg-zinc-100 text-zinc-900')}
    >
      <body className="flex min-h-dvh flex-col">
        <Header />
        <div className="mx-3 grow border-l border-r border-zinc-300 md:mx-10 xl:mx-12 2xl:mx-auto 2xl:w-[1660px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
