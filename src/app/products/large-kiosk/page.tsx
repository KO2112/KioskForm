import LargeKioskContent from './LargeKioskContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Large Modular Kiosk - Portable Ticket Booth & Security Cabin',
  description: 'Fully insulated 218×143cm modular unit ideal for gatehouse, carpark attendants, ticket kiosks, security cabins & catering applications. Complete with electrical installation & weather-resistant materials.',
  keywords: ['large modular kiosk', 'ticket booth', 'security cabin', 'portable cabin', 'gatehouse', 'carpark hut', 'catering unit'],
  alternates: {
    canonical: 'https://kioskform.co.uk/products/large-kiosk',
    languages: {
      'en-GB': 'https://kioskform.co.uk/products/large-kiosk',
    },
  },
  openGraph: {
    title: 'Large Modular Kiosk - Versatile Commercial Solutions',
    description: 'Spacious 218×143cm insulated kiosk for ticket booths, security cabins, offices & catering units. Fully equipped with electrical installation & weather-resistant materials.',
    images: [
      {
        url: '/largekiosk1.jpg',
        width: 1200,
        height: 630,
        alt: 'Large Modular Kiosk',
      },
    ],
  }
};

export default function Page() {
  return <LargeKioskContent />;
}