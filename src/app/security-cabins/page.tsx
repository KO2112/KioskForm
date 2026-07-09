import { Metadata } from 'next';
import SecurityCabinsContent from './content';

export const metadata: Metadata = {
  title: 'Security Cabins | Insulated Portable Security kiosks UK | CabinUnits',
  description:
    'Insulated, fully wired security cabins for construction sites, car parks, warehouses, retail and events. Forklift-ready, dispatched fast across the UK.',
  keywords:
    'security cabin, security cabins UK, portable security cabin, security hut, security kiosk, insulated security cabin, site security cabin, guard cabin',
  alternates: {
    canonical: 'https://cabinunits.co.uk/security-cabins',
    languages: {
      'en-GB': 'https://cabinunits.co.uk/security-cabins',
    },
  },
  openGraph: {
    title: 'Security Cabins | Insulated Portable Security kiosks UK',
    description:
      'Insulated, fully wired security cabins for construction sites, car parks, warehouses, retail and events. Forklift-ready, dispatched fast across the UK.',
    url: 'https://cabinunits.co.uk/security-cabins',
    siteName: 'CabinUnits',
    images: [
      {
        url: 'https://cabinunits.co.uk/150x210%20Kiosk.jpg',
        width: 800,
        height: 600,
        alt: 'Insulated portable security cabin',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security Cabins | Insulated Portable Security kiosks UK',
    description:
      'Insulated, fully wired security cabins for construction sites, car parks, warehouses, retail and events across the UK.',
    images: ['https://cabinunits.co.uk/150x210%20Kiosk.jpg'],
  },
};

export default function SecurityCabinsPage() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://cabinunits.co.uk/security-cabins",
        "url": "https://cabinunits.co.uk/security-cabins",
        "name": "Security Cabins | Insulated Portable Security kiosks UK | CabinUnits",
        "isPartOf": {
          "@id": "https://cabinunits.co.uk/#website"
        },
        "description":
          "Insulated, fully wired security cabins for construction sites, car parks, warehouses, retail and events. Forklift-ready, dispatched fast across the UK.",
        "breadcrumb": {
          "@id": "https://cabinunits.co.uk/security-cabins#breadcrumb"
        },
        "inLanguage": "en-GB"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://cabinunits.co.uk/security-cabins#breadcrumb",
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
            "name": "Kiosks",
            "item": "https://cabinunits.co.uk/kiosks"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Security Cabins",
            "item": "https://cabinunits.co.uk/security-cabins"
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Security Cabin Range",
        "description":
          "Insulated, fully wired modular security cabins in 110x130cm, 110x150cm and 150x210cm sizes, built for construction sites, car parks, warehouses and events.",
        "image": [
          "https://cabinunits.co.uk/110x130Kiosk.jpg",
          "https://cabinunits.co.uk/110x150.jpg",
          "https://cabinunits.co.uk/150x210%20Kiosk.jpg"
        ],
        "brand": {
          "@type": "Brand",
          "name": "CabinUnits"
        },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "1799",
          "highPrice": "1999",
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock",
          "url": "https://cabinunits.co.uk/security-cabins"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://cabinunits.co.uk/security-cabins#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a security cabin used for?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A security cabin is a compact, insulated structure used to give security staff, gatekeepers or attendants a secure, weatherproof base to work from. They're used for access control, visitor sign-in, monitoring entrances, and general site security across construction, retail, industrial, and event locations."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need planning permission for a security cabin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most temporary or relocatable security cabins used on a site you already operate don't require planning permission, but this depends on how long it stays in place and your local authority's rules. If you're unsure, we'd recommend checking with your local planning office before installation."
            }
          },
          {
            "@type": "Question",
            "name": "Are the cabins ready to use on delivery?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every cabin is supplied brand new, fully insulated, and pre-wired with an internal fuse box and external site socket. You'll need a qualified electrician to connect to your power supply, but no further fit-out work is required."
            }
          },
          {
            "@type": "Question",
            "name": "Can a security cabin be moved once it's on site?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All our cabins are built with forklift pockets in the base, so they can be repositioned or relocated as your site or requirements change."
            }
          },
          {
            "@type": "Question",
            "name": "What sizes are available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our standard range covers 110x130cm, 110x150cm and 150x210cm cabins, suiting anything from a compact single-person checkpoint to a larger, fully equipped entrance station. Custom sizing is available if none of our standard options fit your site."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <SecurityCabinsContent />
    </>
  );
}