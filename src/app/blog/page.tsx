// app/blog/page.tsx
import BlogContent from './Blogcontent';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Modular Kiosks & Portable Cabins Blog - CabinUnits',
  description: 'Industry insights on modular kiosks, portable cabins, security booths, and ticket offices. Expert advice on selecting, installing, and maintaining commercial kiosks.',
  keywords: ['modular kiosk blog', 'portable cabin insights', 'kiosk industry news', 'security booth advice', 'commercial kiosk guide'],
  alternates: {
    canonical: 'https://cabinunits.co.uk/blog',
    languages: {
      'en-GB': 'https://cabinunits.co.uk/blog',
    },
  },
  openGraph: {
    title: 'Modular Kiosks & Portable Cabins Blog - CabinUnits',
    description: 'Industry insights on modular kiosks, portable cabins, security booths, and ticket offices. Expert advice on selecting, installing, and maintaining commercial kiosks.',
    images: [
      {
        url: '/blog/blog-header.jpg',
        width: 1200,
        height: 630,
        alt: 'CabinUnits Blog',
      },
    ],
  }
};

export default function Page() {
  return (
    <>
      <Script
        id="blog-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": "https://cabinunits.co.uk/blog/",
                "url": "https://cabinunits.co.uk/blog/",
                "name": "Modular Kiosks & Portable Cabins Blog - CabinUnits",
                "isPartOf": {
                  "@id": "https://cabinunits.co.uk/#website"
                },
                "primaryImageOfPage": {
                  "@id": "https://cabinunits.co.uk/blog/#primaryimage"
                },
                "image": {
                  "@id": "https://cabinunits.co.uk/blog/#primaryimage"
                },
                "thumbnailUrl": "https://cabinunits.co.uk/blog/blog-header.jpg",
                "datePublished": "2025-01-01T10:00:00+00:00",
                "dateModified": "2025-04-24T09:00:00+00:00",
                "description": "Industry insights on modular kiosks, portable cabins, security booths, and ticket offices. Expert advice on selecting, installing, and maintaining commercial kiosks.",
                "breadcrumb": {
                  "@id": "https://cabinunits.co.uk/blog/#breadcrumb"
                },
                "inLanguage": "en-GB"
              },
              {
                "@type": "ImageObject",
                "inLanguage": "en-GB",
                "@id": "https://cabinunits.co.uk/blog/#primaryimage",
                "url": "https://cabinunits.co.uk/blog/blog-header.jpg",
                "contentUrl": "https://cabinunits.co.uk/blog/blog-header.jpg",
                "width": 1200,
                "height": 630,
                "caption": "CabinUnits Blog"
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://cabinunits.co.uk/blog/#breadcrumb",
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
                    "name": "Blog"
                  }
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://cabinunits.co.uk/#website",
                "url": "https://cabinunits.co.uk/",
                "name": "CabinUnits",
                "description": "Premium kiosk solutions for businesses across the UK",
                "potentialAction": [
                  {
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
                  }
                ],
                "inLanguage": "en-GB"
              },
              {
                "@type": "Organization",
                "@id": "https://cabinunits.co.uk/#organization",
                "name": "CabinUnits",
                "url": "https://cabinunits.co.uk/",
                "logo": {
                  "@type": "ImageObject",
                  "inLanguage": "en-GB",
                  "@id": "https://cabinunits.co.uk/#/schema/logo/image/",
                  "url": "https://cabinunits.co.uk/logo.png",
                  "contentUrl": "https://cabinunits.co.uk/logo.png",
                  "width": 192,
                  "height": 192,
                  "caption": "CabinUnits"
                },
                "image": {
                  "@id": "https://cabinunits.co.uk/#/schema/logo/image/"
                }
              }
            ]
          })
        }}
      />
      <BlogContent />
    </>
  );
}