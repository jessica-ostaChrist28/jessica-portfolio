import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { siteConfig } from '@/content/site-config';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#090d16',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | Jessica Osta`,
  },
  description: siteConfig.description,
  keywords: [
    'Jessica Osta',
    'AI/ML Engineer',
    'Responsible AI',
    'Generative AI',
    'Machine Learning',
    'AI Ethics',
    'Full-Stack Developer',
    'Academic Portfolio',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
        {/* Skip to Main Content Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sky-500 focus:text-slate-950 focus:font-bold focus:rounded-lg"
        >
          Skip to main content
        </a>

        {/* Global Layout Navigation Header */}
        <Header />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Global Layout Footer */}
        <Footer />
      </body>
    </html>
  );
}
