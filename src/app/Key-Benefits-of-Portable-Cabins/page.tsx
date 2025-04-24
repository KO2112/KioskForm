// app/benefit/page.tsx
import BenefitContent from './benefitcontent';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Key Benefits of Portable Cabins & Kiosks for Businesses',
  description: 'Discover how portable cabins and kiosks can transform your business operations with cost savings, rapid deployment, and versatile applications across industries.',
  keywords: ['portable cabin benefits', 'kiosk advantages', 'modular building solutions', 'temporary office space', 'mobile business units', 'cost-effective workspace'],
  alternates: {
    canonical: 'https://kioskform.co.uk/benefit',
    languages: {
      'en-GB': 'https://kioskform.co.uk/benefit',
    },
  },
  openGraph: {
    title: 'Key Benefits of Portable Cabins & Kiosks for Businesses',
    description: 'How portable and modular solutions are revolutionizing workspace efficiency and business operations across the UK.',
    images: [
      {
        url: '/benefit/portable-cabin-benefits.jpg',
        width: 1200,
        height: 630,
        alt: 'Portable Cabin Benefits',
      },
    ],
  }
};

export default function Page() {
  return (
    <>
      <Script
        id="benefit-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://kioskform.co.uk/benefit/",
                "url": "https://kioskform.co.uk/benefit/",
                "name": "Key Benefits of Portable Cabins & Kiosks for Businesses",
                "isPartOf": {
                  "@id": "https://kioskform.co.uk/#website"
                },
                "primaryImageOfPage": {
                  "@id": "https://kioskform.co.uk/benefit/#primaryimage"
                },
                "image": {
                  "@id": "https://kioskform.co.uk/benefit/#primaryimage"
                },
                "thumbnailUrl": "https://kioskform.co.uk/benefit/portable-cabin-benefits.jpg",
                "datePublished": "2025-04-15T10:00:00+00:00",
                "dateModified": "2025-04-24T09:00:00+00:00",
                "description": "Discover how portable cabins and kiosks can transform your business operations with cost savings, rapid deployment, and versatile applications across industries.",
                "breadcrumb": {
                  "@id": "https://kioskform.co.uk/benefit/#breadcrumb"
                },
                "inLanguage": "en-GB",
                "potentialAction": [
                  {
                    "@type": "ReadAction",
                    "target": ["https://kioskform.co.uk/benefit/"]
                  }
                ]
              },
              {
                "@type": "ImageObject",
                "inLanguage": "en-GB",
                "@id": "https://kioskform.co.uk/benefit/#primaryimage",
                "url": "https://kioskform.co.uk/benefit/portable-cabin-benefits.jpg",
                "contentUrl": "https://kioskform.co.uk/benefit/portable-cabin-benefits.jpg",
                "width": 1200,
                "height": 630,
                "caption": "Portable Cabins and Kiosks Benefits"
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://kioskform.co.uk/benefit/#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://kioskform.co.uk/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Benefits of Portable Cabins & Kiosks"
                  }
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://kioskform.co.uk/#website",
                "url": "https://kioskform.co.uk/",
                "name": "KioskForm",
                "description": "Premium kiosk solutions for businesses across the UK",
                "potentialAction": [
                  {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://kioskform.co.uk/?s={search_term_string}"
                    },
                    "query-input": {
                      "@type": "PropertyValueSpecification",
                      "valueRequired": true,
                      "valueName": "search_term_string"
                    }
                  }
                ],
                "inLanguage": "en-GB"
              },
              {
                "@type": "Article",
                "@id": "https://kioskform.co.uk/benefit/#article",
                "isPartOf": {
                  "@id": "https://kioskform.co.uk/benefit/"
                },
                "author": {
                  "@id": "https://kioskform.co.uk/#/schema/person/admin"
                },
                "headline": "Key Benefits of Portable Cabins & Kiosks for Modern Businesses",
                "datePublished": "2025-04-15T10:00:00+00:00",
                "dateModified": "2025-04-24T09:00:00+00:00",
                "mainEntityOfPage": {
                  "@id": "https://kioskform.co.uk/benefit/"
                },
                "wordCount": 1250,
                "publisher": {
                  "@id": "https://kioskform.co.uk/#organization"
                },
                "image": {
                  "@id": "https://kioskform.co.uk/benefit/#primaryimage"
                },
                "thumbnailUrl": "https://kioskform.co.uk/benefit/portable-cabin-benefits.jpg",
                "inLanguage": "en-GB"
              },
              {
                "@type": "Organization",
                "@id": "https://kioskform.co.uk/#organization",
                "name": "KioskForm",
                "url": "https://kioskform.co.uk/",
                "logo": {
                  "@type": "ImageObject",
                  "inLanguage": "en-GB",
                  "@id": "https://kioskform.co.uk/#/schema/logo/image/",
                  "url": "https://kioskform.co.uk/logo.png",
                  "contentUrl": "https://kioskform.co.uk/logo.png",
                  "width": 192,
                  "height": 192,
                  "caption": "KioskForm"
                },
                "image": {
                  "@id": "https://kioskform.co.uk/#/schema/logo/image/"
                }
              }
            ]
          })
        }}
      />
      <BenefitContent />
    </>
  );
}