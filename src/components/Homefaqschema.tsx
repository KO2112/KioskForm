// components/HomeFaqSchema.tsx
// FAQPage structured data for the homepage's "Common Questions About Kiosks and Cabins" section.
// The questions/answers below match the visible FAQ block on the homepage exactly —
// if you edit the visible FAQs, update these to match (Google requires schema = visible content).
//
// Usage: import HomeFaqSchema from '@/components/HomeFaqSchema'
// and render <HomeFaqSchema /> anywhere inside app/page.tsx.

export default function HomeFaqSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          '@id': 'https://cabinunits.co.uk/#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is the difference between a kiosk and a modular cabin?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A kiosk is usually a compact, customer-facing unit for retail, information, or security, while a modular cabin is a more flexible portable building used for offices, welfare spaces, ticket booths, or site accommodation.',
              },
            },
            {
              '@type': 'Question',
              name: 'Are your kiosks and cabins suitable for outdoor use?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Our units are built with durable insulated panels, weather-resistant finishes, and secure doors and windows, making them suitable for outdoor and semi-permanent installations.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I add my own branding or signage to a kiosk?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Our kiosks are ready-built standard units rather than made to order, but most customers add their own branding, signage or vinyl wrap to the exterior after delivery.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do you offer smaller, compact cabin sizes?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Our range spans from compact kiosks up to larger portable cabins, all insulated and pre-wired, in stock in Leicester for fast UK delivery.',
              },
            },
            {
              '@type': 'Question',
              name: 'How quickly can a modular kiosk or cabin be deployed?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Because they are prefabricated, modular kiosks and cabins can be manufactured and installed much faster than traditional construction, helping businesses get operational quickly.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do you supply kiosks and cabins across the UK?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. We supply and deliver across the UK, with solutions suitable for construction sites, retail spaces, events, security locations, and more.',
              },
            },
          ],
        }),
      }}
    />
  )
}