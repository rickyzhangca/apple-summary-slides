import type { MetadataRoute } from "next";
import { eventsFromSlides, productsFromSlides } from "@/data";
import { encodeUrl, SITE_URL } from "@/utils";


export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const eventRoutes = eventsFromSlides.map((event) => ({
    url: `${SITE_URL}/events/${encodeUrl(event.name)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const productRoutes = productsFromSlides.map((product) => ({
    url: `${SITE_URL}/products/${encodeUrl(product.name)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    ...eventRoutes,
    ...productRoutes,
  ];
}
