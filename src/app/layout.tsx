import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}