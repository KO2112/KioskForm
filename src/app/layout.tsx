import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://kioskform.co.uk'),
  title: {
    default: 'Modular Kiosks | Retail, Food & Security Solutions',
    template: '%s | Modular Kiosk Solutions'
  },
  description: 'Leading UK manufacturer of modular kiosks and custom kiosk solutions. Interactive and digital kiosks for any business need.',
  keywords: ['modular kiosk', 'UK kiosk manufacturer', 'digital kiosk', 'interactive kiosk', 'custom kiosk solutions'],
  authors: [{ name: 'Your Company Name' }],
  creator: 'Your Company Name',
  publisher: 'Your Company Name',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
    url: 'https://kioskform.co.uk',
    title: 'Modular Kiosks | Retail, Food & Security Solutions',
    description: 'Discover our range of modular kiosks designed and manufactured in the UK. Customizable, versatile, and built to last.',
    siteName: 'Modular Kiosk Solutions',
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
    title: 'Modular Kiosks | Retail, Food & Security Solutions',
    description: 'Discover our range of modular kiosks designed and manufactured in the UK. Customizable, versatile, and built to last.',
    images: ['/images/twitter-image.jpg'],
    creator: '@yourtwitterhandle',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KioskForm",
    "url": "https://kioskform.co.uk",
    "logo": "https://kioskform.co.uk/logo.jpg", // Replace with actual logo URL
    "description": "Premium modular kiosks and portable buildings manufactured in the EU with the highest quality standards.",
    "email": "kioskform@gmail.com",
    "telephone": "07419208820",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UK"
    }
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://kioskform.co.uk",
    "name": "Modular Kiosk Solutions | UK Portable Buildings",
    "description": "Explore custom modular kiosks for retail, food service, security, and more in the UK. Durable, weatherproof designs built for high-traffic commercial areas.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://kioskform.co.uk/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "KioskForm",
    "@id": "https://kioskform.co.uk",
    "url": "https://kioskform.co.uk",
    "telephone": "07419208820",
    "email": "kioskform@gmail.com",
    "description": "Premium modular kiosks and portable buildings manufacturer in the UK. Custom solutions for businesses.",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UK"
    },
    "image": "https://kioskform.co.uk/kiosk2.jpg", // Replace with actual image URL
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-85BK7QZ6R7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-85BK7QZ6R7');
          `}
        </Script>
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}