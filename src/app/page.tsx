import BannerSlider from '@/components/BannerSlider';
import { Metadata } from 'next';
import OurKiosksSection from '@/components/OurKiosksSection';
import AboutUsSection from '@/components/AboutUs';
import SEOEnhancedSection from '@/components/SEOEnhanced';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Modular Kiosk Solutions | UK Portable Buildings',
  description: 'Explore custom modular kiosks for retail, food service, security, and more in the UK. Durable, weatherproof designs built for high-traffic commercial areas.',
  keywords: 'modular kiosk, UK kiosk manufacturer, interactive kiosk, food & security kiosk, digital signage kiosk, custom kiosk design',
  alternates: {
    canonical: 'https://cabinunits.co.uk',
    languages: {
      'en-GB': 'https://cabinunits.co.uk',
    },
  },
  openGraph: {
    title: 'Modular Kiosk Solutions | UK Portable Buildings',
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
    title: 'Modular Kiosk Solutions | UK Portable Buildings',
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
        "name": "Modular Kiosk Solutions | UK Portable Buildings",
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
        "description": "Premium modular kiosks and portable buildings",
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
        "description": "Premium modular kiosks and portable buildings manufactured in the EU with the highest quality standards.",
        "email": "info@cabinunits.co.uk",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "UK"
        }
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
        <AboutUsSection/>
        <SEOEnhancedSection/>
        <Footer/>
      </main>
    </>
  );
}