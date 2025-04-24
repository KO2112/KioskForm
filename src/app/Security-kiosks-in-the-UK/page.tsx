// app/security-kiosks-in-the-UK/page.tsx
import SecurityKioskContent from './Securitykioskcontent';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Kiosks in the UK - Enhanced Safety & Functionality | KioskForm',
  description: 'Discover how security kiosks are transforming safety and service efficiency across the UK. Explore innovations in security huts, CCTV monitoring and customizable solutions.',
  keywords: ['security kiosks UK', 'security huts', 'CCTV kiosks', 'kiosk manufacturers UK', 'security booth', 'guard kiosk'],
  alternates: {
    canonical: 'https://kioskform.co.uk/security-kiosks-in-the-UK',
    languages: {
      'en-GB': 'https://kioskform.co.uk/security-kiosks-in-the-UK',
    },
  },
  openGraph: {
    title: 'Security Kiosks in the UK - Enhanced Safety & Functionality',
    description: 'How modern security kiosks are revolutionizing safety monitoring and service provision across the United Kingdom.',
    images: [
      {
        url: '/blog/security-kiosks-uk.jpg',
        width: 1200,
        height: 630,
        alt: 'Security Kiosks in the UK',
      },
    ],
  }
};

export default function Page() {
  return (
    <>
      <Script
        id="security-kiosks-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://kioskform.co.uk/security-kiosks-in-the-UK/",
                "url": "https://kioskform.co.uk/security-kiosks-in-the-UK/",
                "name": "Security Kiosks in the UK - Enhanced Safety & Functionality | KioskForm",
                "isPartOf": {
                  "@id": "https://kioskform.co.uk/#website"
                },
                "primaryImageOfPage": {
                  "@id": "https://kioskform.co.uk/security-kiosks-in-the-UK/#primaryimage"
                },
                "image": {
                  "@id": "https://kioskform.co.uk/security-kiosks-in-the-UK/#primaryimage"
                },
                "thumbnailUrl": "https://kioskform.co.uk/kiosk3.jpg",
                "datePublished": "2025-04-20T10:00:00+00:00",
                "dateModified": "2025-04-24T09:00:00+00:00",
                "description": "Discover how security kiosks are transforming safety and service efficiency across the UK. Explore innovations in security huts, CCTV monitoring and customizable solutions.",
                "breadcrumb": {
                  "@id": "https://kioskform.co.uk/security-kiosks-in-the-UK/#breadcrumb"
                },
                "inLanguage": "en-GB",
                "potentialAction": [
                  {
                    "@type": "ReadAction",
                    "target": ["https://kioskform.co.uk/security-kiosks-in-the-UK/"]
                  }
                ]
              },
              {
                "@type": "ImageObject",
                "inLanguage": "en-GB",
                "@id": "https://kioskform.co.uk/security-kiosks-in-the-UK/#primaryimage",
                "url": "https://kioskform.co.uk/blog/security-kiosks-uk.jpg",
                "contentUrl": "https://kioskform.co.uk/blog/security-kiosks-uk.jpg",
                "width": 1200,
                "height": 630,
                "caption": "Security Kiosks in the UK"
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://kioskform.co.uk/security-kiosks-in-the-UK/#breadcrumb",
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
                    "name": "Blog",
                    "item": "https://kioskform.co.uk/blog/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Security Kiosks in the UK"
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
              }
            ]
          })
        }}
      />
      <SecurityKioskContent />
    </>
  );
}