import ContactUsContent from './ContactUsContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Cabin Units | Portable Cabins & Kiosks, Leicester',
  description:
    'Contact Cabin Units for portable cabins, kiosks and welfare units. Call, WhatsApp or message us — Leicester warehouse viewings welcome, UK-wide delivery quoted by postcode.',
  keywords: [
    'contact cabin units',
    'portable cabin quote',
    'kiosk quote UK',
    'cabin units leicester',
    'portable building enquiry',
  ],
  alternates: {
    canonical: 'https://cabinunits.co.uk/ContactUs',
  },
  openGraph: {
    title: 'Contact Cabin Units | Portable Cabins & Kiosks, Leicester',
    description:
      'Call, WhatsApp or message Cabin Units — Leicester warehouse viewings welcome, UK-wide delivery quoted by postcode.',
    images: [
      {
        url: '/kiosk3.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Cabin Units — portable cabins and kiosks',
      },
    ],
  },
};

export default function Page() {
  return <ContactUsContent />;
}