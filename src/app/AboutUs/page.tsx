import AboutUsContent from './AboutUsContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Modular Kiosk Solutions - UK Portable Buildings',
  description: 'Learn about Modular Kiosks, a leading UK supplier of premium modular kiosks and portable buildings since 2010, featuring EU-manufactured quality structures.',
  keywords: ['modular kiosk company', 'UK portable buildings', 'about modular kiosks', 'kiosk manufacturing', 'portable building solutions'],
  alternates: {
    canonical: 'https://cabinunits.co.uk/AboutUs',
    languages: {
      'en-GB': 'https://cabinunits.co.uk/AboutUs',
    },
  },
  openGraph: {
    title: 'About Modular Kiosks | UK Portable Building Solutions',
    description: 'Discover our story as the leading provider of high-quality modular kiosks and portable buildings across the UK since 2010.',
    images: [
      {
        url: '/kiosk.jpg',
        width: 1200,
        height: 630,
        alt: 'Modular Kiosk Solutions',
      },
    ],
  }
};

export default function Page() {
  return <AboutUsContent />;
}