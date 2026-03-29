import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import ThemeRegistry from '@/components/ThemeRegistry';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://vihanrentals.in'),
  title: {
    default: 'Vihan Tour and Travels | Best Car Rental Service in Goa',
    template: '%s | Vihan Tour and Travels Goa',
  },
  description: 'Book premium car rental services in Goa with Vihan Rentals. Affordable self-drive and chauffeur-driven cars at Dabolim & Mopa Airport. 24/7 support and well-maintained fleet.',
  keywords: ['Goa car rental', 'car hire Goa', 'Dabolim airport taxi', 'rent a car Goa', 'Vihan rentals Goa', 'self drive cars Goa', 'taxi service Goa', 'premium car rental Goa', 'Mopa airport car rental', 'luxury car hire Goa', 'cheap car rental Goa'],
  authors: [{ name: 'Vihan Rentals' }],
  creator: 'Vihan Rentals',
  publisher: 'Vihan Rentals',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://vihanrentals.in',
  },
  openGraph: {
    title: 'Vihan Rentals | Premium Car Rental Goa',
    description: 'Premium car rental services in Goa Dabolim. Affordable rates, 24/7 support, and well-maintained fleet. Book your ride today easily and explore Goa in style.',
    url: 'https://vihanrentals.in',
    siteName: 'Vihan Rentals',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vihan Rentals - Premium Car Rental in Goa',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vihan Tour and Travels | Premium Car Rental Goa',
    description: 'Premium car rental services in Goa Dabolim. Book your ride today easily and explore Goa in style.',
    images: ['/og-image.png'],
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
    '@type': 'AutoRental',
    name: 'Vihan Rentals',
    description: 'Premium car rental services in Goa. Affordable rates, 24/7 support, and wide range of well-maintained vehicles including hatchbacks, SUVs and luxury cars.',
    url: 'https://vihanrentals.in',
    telephone: '+91-9765460182',
    image: 'https://vihanrentals.in/og-image.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Umiya Habitat',
      addressLocality: 'Dabolim',
      addressRegion: 'Goa',
      postalCode: '403801',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '15.3855',
      longitude: '73.8647'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    },
    sameAs: [
      'https://www.facebook.com/vihanrentals',
      'https://www.instagram.com/vihanrentals'
    ]
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
