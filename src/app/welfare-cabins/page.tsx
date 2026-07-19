import { Metadata } from 'next';
import WelfareCabinsContent from './content';

export const metadata: Metadata = {
  title: 'Welfare Cabins | Portable Toilet Blocks for Site Welfare UK',
  description:
    'Insulated welfare cabins and portable toilet blocks for construction sites, events and farms. Double and accessible units, ready to connect. Fast UK dispatch.',
  keywords:
    'welfare cabins, welfare units, portable toilet block, site welfare facilities, construction site toilets, disabled toilet block, accessible portable toilet, site welfare UK',
  alternates: {
    canonical: 'https://cabinunits.co.uk/welfare-cabins',
    languages: {
      'en-GB': 'https://cabinunits.co.uk/welfare-cabins',
    },
  },
  openGraph: {
    title: 'Welfare Cabins | Portable Toilet Blocks for Site Welfare UK',
    description:
      'Insulated welfare cabins and portable toilet blocks for construction sites, events and farms. Double and accessible units, ready to connect.',
    url: 'https://cabinunits.co.uk/welfare-cabins',
    siteName: 'CabinUnits',
    images: [
      {
        url: 'https://cabinunits.co.uk/DoubleToilet.png',
        width: 800,
        height: 600,
        alt: 'Portable double toilet welfare block',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welfare Cabins | Portable Toilet Blocks for Site Welfare UK',
    description:
      'Insulated welfare cabins and portable toilet blocks for construction sites, events and farms across the UK.',
    images: ['https://cabinunits.co.uk/DoubleToilet.png'],
  },
};

export default function WelfareCabinsPage() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://cabinunits.co.uk/welfare-cabins",
        "url": "https://cabinunits.co.uk/welfare-cabins",
        "name": "Welfare Cabins | Portable Toilet Blocks for Site Welfare UK",
        "isPartOf": {
          "@id": "https://cabinunits.co.uk/#website"
        },
        "description":
          "Insulated welfare cabins and portable toilet blocks for construction sites, events and farms. Double and accessible units, ready to connect.",
        "breadcrumb": {
          "@id": "https://cabinunits.co.uk/welfare-cabins#breadcrumb"
        },
        "inLanguage": "en-GB"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://cabinunits.co.uk/welfare-cabins#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://cabinunits.co.uk/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Welfare Cabins",
            "item": "https://cabinunits.co.uk/welfare-cabins"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://cabinunits.co.uk/welfare-cabins#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do construction sites legally need welfare facilities?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Under UK health and safety law, sites must provide adequate welfare facilities including toilets and washing points for the number of workers on site. Our welfare cabins are built to help sites meet these requirements quickly."
            }
          },
          {
            "@type": "Question",
            "name": "What's the difference between the double and disabled toilet block?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The double toilet block has two separate cubicles for general use. The disabled toilet block is a single, wheelchair-accessible cubicle with a ramp and grab rails, sized to meet accessibility needs."
            }
          },
          {
            "@type": "Question",
            "name": "Are the welfare cabins ready to connect on delivery?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Both units are pre-wired and pre-plumbed for mains water, waste and electricity, with sensor-controlled LED lighting. A qualified plumber and electrician can connect it the same day it arrives."
            }
          },
          {
            "@type": "Question",
            "name": "What are the delivery and pickup options?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nationwide delivery is available, with cost quoted by postcode. Free in-person pick-up is available from our warehouse at LE13BW, Leicester."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(combinedSchema)
        }}
      />
      <WelfareCabinsContent />
    </>
  );
}