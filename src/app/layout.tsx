import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import CookieBanner from '@/components/CookieBanner';
import './globals.css';
import Script from 'next/script';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://cabinunits.co.uk'),
  authors: [{ name: 'cabinunits' }],
  creator: 'cabinunits',
  publisher: 'cabinunits',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    other: {
      'p:domain_verify': 'fc05add7b67899105eca1b9a17fc580a',
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-GB': '/',
    },
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
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://cabinunits.co.uk',
    siteName: 'cabinunits',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Modular Kiosk Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        {/* Site-wide LocalBusiness schema — single source of truth for the Cabin Units entity */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://cabinunits.co.uk/#organization',
              name: 'Cabin Units',
              url: 'https://cabinunits.co.uk/',
              logo: 'https://cabinunits.co.uk/logo.png',
              image: 'https://cabinunits.co.uk/110x130Kiosk.jpg',
              description:
                'Cabin Units supplies brand new, EU-manufactured portable cabins, kiosks, gatehouses and welfare units from its Leicester warehouse, with UK-wide delivery.',
              telephone: '+447497954779',
              email: 'info@cabinunits.co.uk',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Unit 7D, 66 Friday Street',
                addressLocality: 'Leicester',
                postalCode: 'LE1 3BW',
                addressCountry: 'GB',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 52.6407,
                longitude: -1.1289,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  opens: '08:00',
                  closes: '18:00',
                },
              ],
              priceRange: '££',
              areaServed: { '@type': 'Country', name: 'United Kingdom' },
              sameAs: ['https://maps.google.com/?cid=5673705921598398890'],
            }),
          }}
        />

        {/* Google Consent Mode - Initialize as denied, wait for user consent */}
        <Script
          id="google-consent-mode"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
              });
              
              // Check for stored consent preference
              const storedConsent = localStorage.getItem('cookie-consent');
              if (storedConsent === 'accepted') {
                gtag('consent', 'update', {
                  'analytics_storage': 'granted',
                  'ad_storage': 'granted',
                  'ad_user_data': 'granted',
                  'ad_personalization': 'granted'
                });
              }
            `,
          }}
        />
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SE76KS1HFG"
          strategy="afterInteractive"
        />
        
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10803831945"
          strategy="afterInteractive"
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-10803831945');
          `}
        </Script>

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Google Analytics 4 Configuration
            gtag('config', 'G-SE76KS1HFG', {
              'anonymize_ip': true
            });
            
            // Google Ads Configuration
            gtag('config', 'AW-707974874');
          `}
        </Script>

        {/* Ahrefs Web Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="q4bMMaICqmO5gGF/9IW9hg"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <CookieBanner />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}