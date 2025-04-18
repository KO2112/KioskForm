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
    canonical: 'https://kioskform.co.uk',
    languages: {
      'en-GB': 'https://kioskform.co.uk',
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
  // Products Schema
  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "Small Modular Kiosk",
        "description": "Brand new, strong and durable booth perfect for tickets, security, or coffee units.",
        "image": "https://kioskform.co.uk/kiosk2.jpg",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock"
        },
        "brand": {
          "@type": "Brand",
          "name": "KioskForm"
        }
      },
      {
        "@type": "Product",
        "position": 2,
        "name": "Large Modular Kiosk",
        "description": "Spacious durable kiosk for gatehouses, offices, or catering units.",
        "image": "https://kioskform.co.uk/kiosk.jpg",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock"
        },
        "brand": {
          "@type": "Brand",
          "name": "KioskForm"
        }
      }
    ]
  };

  // Carousel/Banner Schema
  const carouselSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "url": "https://kioskform.co.uk/kiosks",
        "name": "Modular Portable Buildings",
        "description": "Premium quality kiosks and modular buildings designed for versatility and durability"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "url": "https://kioskform.co.uk/kiosks",
        "name": "Interactive Kiosk Solutions",
        "description": "Modular Kiosks - Tailored for Food, Retail, and Security Applications"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "url": "https://kioskform.co.uk/ContactUs",
        "name": "Customizable Designs",
        "description": "Tailored modular buildings to meet your exact requirements and brand identity"
      }
    ]
  };

  return (
    <>
      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productsSchema)
        }}
      />
      
      {/* Carousel Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(carouselSchema)
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