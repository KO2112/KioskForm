// Product prices and information for schema markup and merchant feed
export const productData = {
  "Kiosk-130x130-Reinforced": {
    title: "Anti-Vandal Kiosk 130×130",
    description: "Reinforced security kiosk with anti-vandal features and steel fence protection. Fully insulated with reception desk and complete electrical installation.",
    price: 1999,
    currency: "GBP",
    image: "/kiosk-130x130-1.png",
    dimensions: "130×130×235 cm",
    weight: "170 kg",
    availability: "IN_STOCK",
    sku: "KIOSK-130-REINFORCED",
  },
  "Modular-Kiosk-130x130": {
    title: "Modular Kiosk 130×130",
    description: "Versatile modular kiosk perfect for ticket booths, information points, and catering units. Steel sandwich panel construction with weather-resistant insulation.",
    price: 1999,
    currency: "GBP",
    image: "/modular-kiosk-130x130-1.jpg",
    dimensions: "130×130×235 cm",
    weight: "170 kg",
    availability: "IN_STOCK",
    sku: "MODULAR-KIOSK-130",
  },
  "Modular-Cabin-115x125cm": {
    title: "Modular Cabin 115×125",
    description: "Compact modular cabin perfect for ticket booths, information points, and catering units. Insulated steel construction with multiple configuration options.",
    price: 1799,
    currency: "GBP",
    image: "/Modular-Cabin-115x125cm.png",
    dimensions: "115×125×235 cm",
    weight: "160 kg",
    availability: "IN_STOCK",
    sku: "MODULAR-CABIN-115",
  },
  "small-kiosk": {
    title: "Small Modular Kiosk",
    description: "Brand new, strong and durable booth perfect for tickets, security, or coffee units. Ready-to-use portable kiosk with complete electrical setup.",
    price: 1999,
    currency: "GBP",
    image: "/kiosk2.jpg",
    dimensions: "143×143×210 cm",
    weight: "350 kg",
    availability: "IN_STOCK",
    sku: "KIOSK-SMALL-143",
  },
  "large-kiosk": {
    title: "Large Modular Kiosk",
    description: "Spacious durable kiosk for gatehouses, offices, or catering units. Fully insulated with multiple windows and electrical installation for professional use.",
    price: 2499,
    currency: "GBP",
    image: "/kiosk.jpg",
    dimensions: "218×143×210 cm",
    weight: "400 kg",
    availability: "IN_STOCK",
    sku: "KIOSK-LARGE-218",
  },
  "Portable-toilet-130x130": {
    title: "Portable Toilet 130×130",
    description: "Complete welfare unit with flushing toilet, wash basin, and electrical setup. Weather-resistant portable sanitation solution for events and sites.",
    price: 1999,
    currency: "GBP",
    image: "/portable-toilet-130x130-1.png",
    dimensions: "130×130×235 cm",
    weight: "180 kg",
    availability: "IN_STOCK",
    sku: "PORTABLE-TOILET-130",
  },
  "Portable-Kiosk-130x210": {
    title: "Portable Kiosk 130×210",
    description: "Spacious security kiosk with reception desk and sliding windows for professional service. Fully equipped and ready for deployment.",
    price: 2599,
    currency: "GBP",
    image: "/portable-kiosk-130x210-1.jpg",
    dimensions: "130×210×235 cm",
    weight: "220 kg",
    availability: "IN_STOCK",
    sku: "PORTABLE-KIOSK-130-210",
  },
  "Modular-Kiosk-150X150": {
    title: "Modular Kiosk 150×150",
    description: "Enhanced modular kiosk with larger interior space for reception and security applications. Professional-grade construction with complete insulation.",
    price: 2049,
    currency: "GBP",
    image: "/modular-kiosk-150x150-1.jpg",
    dimensions: "150×150×235 cm",
    weight: "200 kg",
    availability: "IN_STOCK",
    sku: "MODULAR-KIOSK-150",
  },
  "Modular-Kiosk-210X210": {
    title: "Modular Kiosk 210×210",
    description: "Large modular kiosk offering spacious interior for comprehensive office or retail applications. Premium insulation and professional finishes included.",
    price: 2599,
    currency: "GBP",
    image: "/modular-kiosk-210x210-1.jpg",
    dimensions: "210×210×235 cm",
    weight: "300 kg",
    availability: "IN_STOCK",
    sku: "MODULAR-KIOSK-210",
  },
};

export interface ProductSchemaProps {
  productId: string;
  baseUrl?: string;
}

export function generateProductSchema({ productId, baseUrl = "https://cabinunits.co.uk" }: ProductSchemaProps) {
  const product = productData[productId as keyof typeof productData];
  
  if (!product) {
    return null;
  }

  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "description": product.description,
    "image": `${baseUrl}${product.image}`,
    "brand": {
      "@type": "Brand",
      "name": "Cabin Units"
    },
    "offers": {
      "@type": "Offer",
      "url": `${baseUrl}/products/${productId}`,
      "priceCurrency": product.currency,
      "price": product.price.toString(),
      "availability": `https://schema.org/${product.availability}`,
      "seller": {
        "@type": "Organization",
        "name": "Cabin Units",
        "url": baseUrl
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "124"
    }
  };
}
