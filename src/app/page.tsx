import BannerSlider from '@/components/BannerSlider';
import { Metadata } from 'next';
import OurKiosksSection from '@/components/OurKiosksSection';
import OurWorkSection from '@/components/OurWorkSection';
import AboutUsSection from '@/components/AboutUs';
import SEOEnhancedSection from '@/components/SEOEnhanced';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Cabin Units | Modular & Portable Kiosk Cabins UK',
  description: 'Explore custom modular kiosks for retail, food service, security, and more in the UK. Durable, weatherproof designs built for high-traffic commercial areas.',
  keywords: 'modular kiosk, UK kiosk manufacturer, interactive kiosk, food & security kiosk, construction kiosk, custom kiosk design',
  alternates: {
    canonical: 'https://cabinunits.co.uk',
    languages: {
      'en-GB': 'https://cabinunits.co.uk',
    },
  },
  openGraph: {
    title: 'Cabin Units | Modular & Portable Kiosk Cabins UK',
    description: 'Discover our range of enterprise-grade modular kiosks designed and manufactured in the EU. Custom design service available for all business requirements.',
    images: [
      {
        url: '/kiosk2.jpg',
        width: 1200,
        height: 630,
        alt: 'Modular Kiosk Solutions',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cabin Units | Modular & Portable Kiosk Cabins UK',
    description: 'Discover our range of enterprise-grade modular kiosks designed and manufactured in the EU. Custom design service available for all business requirements.',
    images: ['kiosk.jpg'],
  },
};

export default function Home() {
  
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://cabinunits.co.uk/",
        "url": "https://cabinunits.co.uk/",
        "name": "Cabin Units | Modular & Portable Kiosk Cabins UK",
        "isPartOf": {
          "@id": "https://cabinunits.co.uk/#website"
        },
        "datePublished": "2022-10-15T00:00:00+00:00",
        "dateModified": "2025-04-19T00:00:00+00:00",
        "description": "Explore custom modular kiosks for retail, food service, security, and more in the UK. Durable, weatherproof designs built for high-traffic commercial areas.",
        "breadcrumb": {
          "@id": "https://cabinunits.co.uk/#breadcrumb"
        },
        "inLanguage": "en-GB",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": ["https://cabinunits.co.uk/"]
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://cabinunits.co.uk/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://cabinunits.co.uk/#website",
        "url": "https://cabinunits.co.uk/",
        "name": "cabinunits",
        "description": "Premium modular kiosks and portable cabins",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://cabinunits.co.uk/?s={search_term_string}"
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            "valueRequired": true,
            "valueName": "search_term_string"
          }
        },
        "inLanguage": "en-GB"
      },
      {
        "@type": "Organization",
        "@id": "https://cabinunits.co.uk/#organization",
        "name": "cabinunits",
        "url": "https://cabinunits.co.uk",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://cabinunits.co.uk/#logo",
          "url": "https://cabinunits.co.uk/logo.png",
          "contentUrl": "https://cabinunits.co.uk/logo.png",
          "caption": "cabinunits",
          "inLanguage": "en-GB",
          "width": "665",
          "height": "112"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "07497954779",
            "contactType": "sales"
          }
        ],
        "description": "Premium modular kiosks and portable cabins manufactured in the EU with the highest quality standards.",
        "email": "info@cabinunits.co.uk",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "UK"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://cabinunits.co.uk/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between a kiosk and a modular cabin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A kiosk is usually a compact, customer-facing unit for retail, information, or security, while a modular cabin is a more flexible portable building used for offices, welfare spaces, ticket booths, or site accommodation."
            }
          },
          {
            "@type": "Question",
            "name": "Are your kiosks and cabins suitable for outdoor use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our units are built with durable insulated panels, weather-resistant finishes, and secure doors and windows, making them suitable for outdoor and semi-permanent installations."
            }
          },
          {
            "@type": "Question",
            "name": "Can you customise a kiosk or cabin for my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We offer tailored sizing, layouts, finishes, electrical setups, and branding options so each unit fits your operations and appearance."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can a modular kiosk or cabin be deployed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Because they are prefabricated, modular kiosks and cabins can be manufactured and installed much faster than traditional construction, helping businesses get operational quickly."
            }
          },
          {
            "@type": "Question",
            "name": "Do you supply kiosks and cabins across the UK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We supply and deliver across the UK, with solutions suitable for construction sites, retail spaces, events, security locations, and more."
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
      
      <main>
        <BannerSlider />
        <OurKiosksSection/>
        <OurWorkSection />
        <AboutUsSection/>
        <SEOEnhancedSection/>
        <Footer/>
      </main>
    </>
  );
}