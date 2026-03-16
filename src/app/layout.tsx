import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import ThemeRegistry from '@/components/ThemeRegistry';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://vihantourandtravels.com'),
  title: {
    default: 'Vihan Tour and Travels | Premium Car Rental Goa',
    template: '%s | Vihan Tour and Travels',
  },
  description: 'Premium car rental services in Goa Dabolim. Book your ride today easily and explore Goa in style. Affordable rates, 24/7 support, and well-maintained fleet.',
  keywords: ['Goa car rental', 'car hire Goa', 'Dabolim airport taxi', 'rent a car Goa', 'Vihan tour and travels', 'self drive cars Goa', 'taxi service Goa', 'premium cars Goa'],
  authors: [{ name: 'Vihan Tour and Travels' }],
  creator: 'Vihan Tour and Travels',
  publisher: 'Vihan Tour and Travels',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vihan Tour and Travels | Premium Car Rental Goa',
    description: 'Premium car rental services in Goa Dabolim. Affordable rates, 24/7 support, and well-maintained fleet. Book your ride today easily and explore Goa in style.',
    url: 'https://vihantourandtravels.com',
    siteName: 'Vihan Tour and Travels',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', // Replace with an actual high-quality branding image when available
        width: 1200,
        height: 630,
        alt: 'Vihan Tour and Travels - Premium Car Rental in Goa',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vihan Tour and Travels | Premium Car Rental Goa',
    description: 'Premium car rental services in Goa Dabolim. Book your ride today easily and explore Goa in style.',
    images: ['https://images.unsplash.com/photo-1542385151-efd9000785a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'], // Same as OG image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    // Add apple-touch-icon.png and other sizes in public folder when available
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Vihan Tour and Travels',
    description: 'Premium car rental services in Goa Dabolim. Affordable rates, 24/7 support, and well-maintained fleet.',
    url: 'https://vihantourandtravels.com',
    telephone: '+91-XXXXXXXXXX', // WARNING: Please update with the actual contact number
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dabolim',
      addressRegion: 'Goa',
      addressCountry: 'IN',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <Header />
            <main className="flex-grow flex flex-col">
              {children}
            </main>
            <Footer />
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
