import { Slide, Tabs } from '@/components';
import { getSlidesByProduct, slides } from '@/data';
import { decodeUrl, encodeUrl } from '@/utils';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const products = new Set<string>();
  slides.forEach(slide => {
    products.add(encodeUrl(slide.product));
  });

  return Array.from(products).map(product => ({
    product,
  }));
}

interface PageProps {
  params: Promise<{ product: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const decodedProduct = decodeUrl((await params).product);
  const originalProduct = slides.find(
    slide => slide.product.toLowerCase() === decodedProduct.toLowerCase()
  )?.product;

  if (!originalProduct) {
    return {
      title: 'Not Found - Apple Summary Slides',
      description: 'Product not found',
    };
  }

  return {
    title: `${originalProduct} - Apple Summary Slides`,
    description: `A collection of the "bento" summary slides created by Apple for ${originalProduct}`,
    openGraph: {
      title: `${originalProduct} - Apple Summary Slides`,
      description: `A collection of the "bento" summary slides created by Apple for ${originalProduct}`,
    },
    alternates: {
      canonical: `https://apple-summary-slides.vercel.app/products/${encodeUrl(originalProduct)}`,
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const decodedProduct = decodeUrl((await params).product);
  const slides = await getSlidesByProduct(decodedProduct);

  if (slides.length === 0) {
    notFound();
  }

  const originalProduct = slides[0].product;

  return (
    <div>
      <Tabs />
      <div className="flex flex-col gap-6 p-3 sm:gap-8 md:p-5 xl:p-6">
        <h2 className="sr-only">Slides for {originalProduct}</h2>
        {slides.map(slide => (
          <Slide key={slide.id} slide={slide} highlight="product" />
        ))}
      </div>
    </div>
  );
}
