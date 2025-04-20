import KioskContent from './KioskContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Modular Kiosks | Ticket Booths & Security Cabins',
  description: 'EU manufactured portable kiosks for ticket booths, security cabins, and commercial applications. Weather-resistant, fully insulated with electrical installation.',
  keywords: ['modular kiosk', 'ticket booth', 'security cabin', 'portable building', 'gatehouse', 'catering unit', 'information point'],
  alternates: {
    canonical: 'https://kioskform.co.uk/kiosks',
    languages: {
      'en-GB': 'https://kioskform.co.uk/kiosks',
    },
  },
  openGraph: {
    title: 'Premium Modular Kiosks - Commercial Portable Buildings',
    description: 'High-quality EU manufactured kiosks in multiple sizes for ticket booths, security points, offices and catering units. Fully insulated with complete electrical installation.',
    images: [
      {
        url: '/kiosks-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Modular Kiosks Collection',
      },
    ],
  }
};

export default function Page() {
  return <KioskContent />;
}