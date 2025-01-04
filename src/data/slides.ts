import { raw } from './raw';

export interface Slide {
  id: string;
  title: string;
  imageUrl: string;
  event: string;
  product: string;
}

export const slides: Slide[] = raw.map(slide => ({
  ...slide,
  id: crypto.randomUUID(),
  imageUrl: `https://apple-summary-slides-images.b-cdn.net/slides/${encodeURIComponent(`[${slide.event}]`)}-${encodeURIComponent(`[${slide.product}]`)}-${encodeURIComponent(`[${slide.title}]`)}.webp`,
}));

export const slidesByEvent = slides.reduce(
  (acc, slide) => {
    acc[slide.event] = acc[slide.event] || [];
    acc[slide.event].push(slide);
    return acc;
  },
  {} as Record<string, Slide[]>
);

export const eventsFromSlides = Object.keys(slidesByEvent).map(event => ({
  name: event,
  imageUrl: `https://apple-summary-slides-images.b-cdn.net/events/${encodeURIComponent(event)}.webp`,
}));
export const productsFromSlides = slides
  .reduce((products, slide) => {
    if (!products.includes(slide.product)) {
      products.push(slide.product);
    }
    return products;
  }, [] as string[])
  .sort((a, b) => {
    if (a.toLowerCase().includes('iphone')) return -1;
    if (b.toLowerCase().includes('iphone')) return 1;
    if (a.toLowerCase().includes('mac')) return -1;
    if (b.toLowerCase().includes('mac')) return 1;
    return 0;
  })
  .map(product => ({
    name: product,
    imageUrl: `https://apple-summary-slides-images.b-cdn.net/products/${encodeURIComponent(product)}.webp`,
  }));

export async function getSlidesByProduct(product: string) {
  return slides.filter(
    slide => slide.product.toLowerCase() === product.toLowerCase()
  );
}

export async function getSlidesByEvent(event: string) {
  return slides.filter(
    slide => slide.event.toLowerCase() === event.toLowerCase()
  );
}
