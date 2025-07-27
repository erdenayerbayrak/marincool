import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marincool - Premium Marin Klima Sistemleri | Türkiye",
  description: "Marincool olarak VRF, Chiller ve Monoblok marin klima sistemleri ile yat sahiplerine profesyonel klima çözümleri sunuyoruz. Muğla merkezli uzman marin klima servisi.",
  keywords: "marin klima sistemleri, yat kliması, tekne klima servisi, Marincool, VRF marin klima, Chiller marin klima, Monoblok klima, Muğla marin klima",
  authors: [{ name: "Marincool" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://marincool.com",
    languages: {
      'tr': 'https://marincool.com/tr',
      'en': 'https://marincool.com/en',
    },
  },
  verification: {
    google: 'please-add-your-google-search-console-verification-code',
    other: {
      'msvalidate.01': 'please-add-bing-webmaster-verification-code',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://marincool.com',
    siteName: 'Marincool',
    title: 'Marincool - Premium Marin Klima Sistemleri',
    description: 'Türkiye\'nin lider marin klima uzmanı. VRF, Chiller ve Monoblok sistemlerle profesyonel yacht climate solutions.',
    images: [{
      url: 'https://marincool.com/images/anasayfa1.jpg',
      width: 1200,
      height: 630,
      alt: 'Marincool Marine Air Conditioning Systems',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marincool - Premium Marin Klima Sistemleri',
    description: 'Türkiye\'nin lider marin klima uzmanı. Profesyonel yacht climate solutions.',
    images: ['https://marincool.com/images/marincool-twitter-card.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//wa.me" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        
        {/* Performance hints */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        
        {/* Scroll performance optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="antialiased">
        {children}
        
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/images/marincool-logo.png" />
        <link rel="preload" as="image" href="/images/anasayfa1.jpg" />
      </body>
    </html>
  );
}