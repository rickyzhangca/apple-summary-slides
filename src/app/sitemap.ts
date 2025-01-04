import { eventsFromSlides, productsFromSlides } from '@/data';
import { encodeUrl } from '@/utils';
import type { MetadataRoute } from 'next';

const BASE_URL = 'https://apple-summary-slides.vercel.app';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const eventRoutes = eventsFromSlides.map(event => ({
    url: `${BASE_URL}/events/${encodeUrl(event.name)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const productRoutes = productsFromSlides.map(product => ({
    url: `${BASE_URL}/products/${encodeUrl(product.name)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...eventRoutes,
    ...productRoutes,
  ];
}
