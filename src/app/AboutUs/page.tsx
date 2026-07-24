import AboutUsContent from './AboutUsContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Cabin Units | Portable Cabins & Kiosks, Leicester UK',
  description:
    'Cabin Units supplies brand new, EU-manufactured portable cabins, kiosks and welfare units from our Leicester warehouse — insulated, pre-wired and delivered across the UK.',
  keywords: [
    'about cabin units',
    'cabin units leicester',
    'portable cabin supplier UK',
    'modular kiosk supplier',
    'portable buildings Leicester',
  ],
  alternates: {
    canonical: 'https://cabinunits.co.uk/AboutUs',
  },
  openGraph: {
    title: 'About Cabin Units | Portable Cabins & Kiosks, Leicester UK',
    description:
      'Brand new, EU-manufactured portable cabins and kiosks, supplied from Leicester and delivered across the UK.',
    images: [
      {
        url: '/kiosk.jpg',
        width: 1200,
        height: 630,
        alt: 'Cabin Units portable cabin outside the Leicester warehouse',
      },
    ],
  },
};

export default function Page() {
  return <AboutUsContent />;
}