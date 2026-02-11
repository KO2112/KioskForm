import SmallKioskContent from './SmallKioskContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Small Modular Kiosk - Ticket & Security Solutions',
  description: 'Fully insulated 143×143cm modular unit perfect for ticket stations, security cabins, and catering applications. Weather-resistant with complete electrical installation.',
  keywords: ['small modular kiosk', 'ticket booth', 'security cabin', 'catering unit', '5ft kiosk', 'portable kiosk'],
  alternates: {
    canonical: 'https://cabinunits.co.uk/products/small-kiosk',
    languages: {
      'en-GB': 'https://cabinunits.co.uk/products/small-kiosk',
    },
  },
  openGraph: {
    title: 'Small Modular Kiosk - Versatile Commercial Solutions',
    description: 'Compact 5ft × 5ft insulated kiosk for ticket booths, security cabins & catering units. Fully equipped with electrical installation & weather-resistant materials.',
    images: [
      {
        url: '/smallkiosk1.jpg',
        width: 1200,
        height: 630,
        alt: 'Small Modular Kiosk',
      },
    ],
  }
};

export default function Page() {
  return <SmallKioskContent />;
}