import { Metadata } from 'next';
import WelfareCabinsContent from './content';

export const metadata: Metadata = {
  title: 'Welfare Units | Portable Toilet Blocks for Site Welfare UK',
  description:
    'Insulated welfare units and portable toilet blocks for construction sites, events and farms. Double and accessible options, ready to connect. Fast UK dispatch.',
  keywords:
    'welfare unit, welfare units UK, welfare cabin, portable toilet block, site toilet for sale, site welfare facilities, construction site welfare unit, disabled toilet block, accessible portable toilet',
  alternates: {
    canonical: 'https://cabinunits.co.uk/welfare-cabins',
  },
  openGraph: {
    title: 'Welfare Units | Portable Toilet Blocks for Site Welfare UK',
    description:
      'Insulated welfare units and portable toilet blocks for construction sites, events and farms. Double and accessible options, ready to connect.',
    url: 'https://cabinunits.co.uk/welfare-cabins',
    siteName: 'CabinUnits',
    images: [
      {
        url: 'https://cabinunits.co.uk/DoubleToilet.png',
        width: 800,
        height: 600,
        alt: 'Portable double toilet welfare unit',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welfare Units | Portable Toilet Blocks for Site Welfare UK',
    description:
      'Insulated welfare units and portable toilet blocks for construction sites, events and farms across the UK.',
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
        "name": "Welfare Units | Portable Toilet Blocks for Site Welfare UK",
        "isPartOf": {
          "@id": "https://cabinunits.co.uk/#website"
        },
        "description":
          "Insulated welfare units and portable toilet blocks for construction sites, events and farms. Double and accessible options, ready to connect.",
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
            "name": "Welfare Units",
            "item": "https://cabinunits.co.uk/welfare-cabins"
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://cabinunits.co.uk/welfare-cabins#itemlist",
        "name": "Welfare units and portable toilet blocks",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Product",
              "name": "Portable Double Toilet Block",
              "url": "https://cabinunits.co.uk/products/Portable-Double-Toilet-Block",
              "image": "https://cabinunits.co.uk/DoubleToilet.png",
              "description": "Two-cubicle insulated welfare unit, pre-wired and pre-plumbed for mains water, waste and electricity.",
              "brand": { "@type": "Brand", "name": "Cabin Units" },
              "offers": {
                "@type": "Offer",
                "price": "2699.99",
                "priceCurrency": "GBP",
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition",
                "url": "https://cabinunits.co.uk/products/Portable-Double-Toilet-Block"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Product",
              "name": "Disabled Portable Toilet Block",
              "url": "https://cabinunits.co.uk/products/Disabled-Portable-Toilet-Block",
              "image": "https://cabinunits.co.uk/DisabledToiletKiosk1.jpg",
              "description": "Wheelchair-accessible welfare unit with ramp and grab rails, pre-wired and pre-plumbed for mains water, waste and electricity.",
              "brand": { "@type": "Brand", "name": "Cabin Units" },
              "offers": {
                "@type": "Offer",
                "price": "2999",
                "priceCurrency": "GBP",
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition",
                "url": "https://cabinunits.co.uk/products/Disabled-Portable-Toilet-Block"
              }
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://cabinunits.co.uk/welfare-cabins#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do construction sites legally need welfare units?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. UK health and safety law requires sites to provide proper welfare facilities, including toilets and washing points for everyone on site. Our welfare units help you meet that requirement from day one, not just once the site is established."
            }
          },
          {
            "@type": "Question",
            "name": "What's the difference between a welfare unit and a portable toilet?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard portable toilet (portaloo) is a single cubicle with a chemical tank and no running water. A welfare unit connects to mains water and waste, flushes like a normal toilet, and includes a wash basin — insulated and built to stay usable through winter."
            }
          },
          {
            "@type": "Question",
            "name": "What's the difference between the double and disabled welfare unit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The double unit has two separate cubicles for general use. The disabled unit is a single wheelchair-accessible cubicle with a ramp and grab rails, sized to meet accessibility needs."
            }
          },
          {
            "@type": "Question",
            "name": "Are the welfare units ready to connect on delivery?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Both units are pre-wired and pre-plumbed for mains water, waste and electricity, with sensor-controlled LED lighting. A plumber and electrician can connect it the same day it arrives."
            }
          },
          {
            "@type": "Question",
            "name": "Are these welfare units brand new or used?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Brand new. Every welfare unit we sell is new stock, not secondhand or refurbished, so you know exactly what condition it's in and get the full working life of the unit from day one."
            }
          },
          {
            "@type": "Question",
            "name": "How much does a portable toilet block cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our range starts at £2,699.99 for the double welfare unit and £2,999 for the accessible unit, excluding VAT and shipping. Both are brand new, fully insulated and supplied ready to connect, with no extra fit-out costs."
            }
          },
          {
            "@type": "Question",
            "name": "What are the delivery and pickup options?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nationwide delivery is available, with cost quoted by postcode. Free in-person pick-up is available from our warehouse at LE1 3BW, Leicester."
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