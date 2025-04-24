// app/uk-modular-building-manufacturers/page.tsx
import React from 'react';
import ModularBuildingContent from './ModularBuildingContent';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UK Modular Building Manufacturers: Pioneering Innovation, Sustainability & the Future',
  description: 'Discover how UK modular building manufacturers are revolutionizing construction with sustainable, efficient, and innovative building solutions.',
  keywords: ['UK modular building manufacturers', 'modular construction UK', 'prefabricated buildings', 'sustainable modular solutions', 'offsite construction'],
  alternates: {
    canonical: 'https://kioskform.co.uk/uk-modular-building-manufacturers',
    languages: {
      'en-GB': 'https://kioskform.co.uk/uk-modular-building-manufacturers',
    },
  },
  openGraph: {
    title: 'UK Modular Building Manufacturers: Pioneering Innovation, Sustainability & the Future',
    description: 'Discover how UK modular building manufacturers are revolutionizing construction with sustainable, efficient, and innovative building solutions.',
    images: [
      {
        url: '/uk-modular-building-manufacturers/modular-building-manufacturers.jpg',
        width: 1200,
        height: 630,
        alt: 'UK Modular Building Manufacturing',
      },
    ],
  }
};

export default function ModularBuildingPage() {
  return (
    <>
      <Script
        id="modular-building-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://kioskform.co.uk/uk-modular-building-manufacturers/",
                "url": "https://kioskform.co.uk/uk-modular-building-manufacturers/",
                "name": "UK Modular Building Manufacturers: Pioneering Innovation, Sustainability & the Future",
                "isPartOf": {
                  "@id": "https://kioskform.co.uk/#website"
                },
                "primaryImageOfPage": {
                  "@id": "https://kioskform.co.uk/uk-modular-building-manufacturers/#primaryimage"
                },
                "image": {
                  "@id": "https://kioskform.co.uk/uk-modular-building-manufacturers/#primaryimage"
                },
                "thumbnailUrl": "https://kioskform.co.uk/uk-modular-building-manufacturers/modular-building-manufacturers.jpg",
                "datePublished": "2025-04-15T10:00:00+00:00",
                "dateModified": "2025-04-24T09:00:00+00:00",
                "description": "Discover how UK modular building manufacturers are revolutionizing construction with sustainable, efficient, and innovative building solutions.",
                "breadcrumb": {
                  "@id": "https://kioskform.co.uk/uk-modular-building-manufacturers/#breadcrumb"
                },
                "inLanguage": "en-GB",
                "potentialAction": [
                  {
                    "@type": "ReadAction",
                    "target": ["https://kioskform.co.uk/uk-modular-building-manufacturers/"]
                  }
                ]
              },
              {
                "@type": "ImageObject",
                "inLanguage": "en-GB",
                "@id": "https://kioskform.co.uk/uk-modular-building-manufacturers/#primaryimage",
                "url": "https://kioskform.co.uk/uk-modular-building-manufacturers/modular-building-manufacturers.jpg",
                "contentUrl": "https://kioskform.co.uk/uk-modular-building-manufacturers/modular-building-manufacturers.jpg",
                "width": 1200,
                "height": 630,
                "caption": "UK Modular Building Manufacturing Industry"
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://kioskform.co.uk/uk-modular-building-manufacturers/#breadcrumb",
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
                    "name": "UK Modular Building Manufacturers"
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
                "@id": "https://kioskform.co.uk/uk-modular-building-manufacturers/#article",
                "isPartOf": {
                  "@id": "https://kioskform.co.uk/uk-modular-building-manufacturers/"
                },
                "author": {
                  "@id": "https://kioskform.co.uk/#/schema/person/admin"
                },
                "headline": "UK Modular Building Manufacturers: Pioneering Innovation, Sustainability & the Future",
                "datePublished": "2025-04-15T10:00:00+00:00",
                "dateModified": "2025-04-24T09:00:00+00:00",
                "mainEntityOfPage": {
                  "@id": "https://kioskform.co.uk/uk-modular-building-manufacturers/"
                },
                "wordCount": 1350,
                "publisher": {
                  "@id": "https://kioskform.co.uk/#organization"
                },
                "image": {
                  "@id": "https://kioskform.co.uk/uk-modular-building-manufacturers/#primaryimage"
                },
                "thumbnailUrl": "https://kioskform.co.uk/uk-modular-building-manufacturers/modular-building-manufacturers.jpg",
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
      <main>
        <ModularBuildingContent />
      </main>
    </>
  );
}