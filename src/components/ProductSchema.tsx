import { generateProductSchema, ProductSchemaProps } from "@/lib/productSchema";

export function ProductSchema({ productId, baseUrl }: ProductSchemaProps) {
  const schema = generateProductSchema({ productId, baseUrl });

  if (!schema) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
