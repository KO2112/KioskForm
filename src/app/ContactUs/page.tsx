import ContactUsContent from './ContactUsContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Modular Kiosk Solutions - UK Portable Buildings',
  description: 'Get in touch with Modular Kiosks for premium portable buildings and custom kiosk solutions across the UK. Request quotes, custom designs, or technical support.',
  keywords: ['contact modular kiosks', 'UK kiosk manufacturer', 'custom kiosk quote', 'portable building inquiry', 'modular building consultation'],
  alternates: {
    canonical: 'https://kioskform.co.uk/ContactUs',
    languages: {
      'en-GB': 'https://kioskform.co.uk/ContactUs',
    },
  },
  openGraph: {
    title: 'Contact Modular Kiosks | UK Portable Building Solutions',
    description: 'Reach our team for information about premium modular kiosks, custom designs, and quotes for your business requirements.',
    images: [
      {
        url: '/kiosk3.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Modular Kiosk Solutions',
      },
    ],
  }
};

export default function Page() {
  return <ContactUsContent />;
}