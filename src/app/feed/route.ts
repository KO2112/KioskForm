import { productData } from '@/lib/productSchema';
import { MetadataRoute } from 'next';

export async function GET() {
  const baseUrl = 'https://cabinunits.co.uk';
  const products = Object.entries(productData);

  // Generate XML feed for Google Merchant Center
  const xmlItems = products.map(([id, product]) => {
    return `
  <item>
    <title><![CDATA[${product.title}]]></title>
    <description><![CDATA[${product.description}]]></description>
    <link>${baseUrl}/products/${id}</link>
    <image_link>${baseUrl}${product.image}</image_link>
    <product_type><![CDATA[Modular Buildings & Kiosks]]></product_type>
    <availability>${product.availability === 'IN_STOCK' ? 'in stock' : 'out of stock'}</availability>
    <price>${product.price} ${product.currency}</price>
    <gtin>${product.sku}</gtin>
    <brand><![CDATA[Cabin Units]]></brand>
    <sku>${product.sku}</sku>
    <item_group_id>${product.sku}</item_group_id>
    <mpn>${product.sku}</mpn>
  </item>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Cabin Units - Modular Kiosks & Portable Buildings</title>
    <link>${baseUrl}</link>
    <description>Premium modular kiosks and portable buildings made in Europe</description>
    <language>en-GB</language>
${xmlItems}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    },
  });
}
