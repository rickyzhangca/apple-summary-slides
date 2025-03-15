import { Slide, Tabs } from '@/components';
import { slides } from '@/data';

export function generateMetadata() {
  return {
    title: 'All Slides - Apple Summary Slides',
    description: 'A collection of all the "bento" summary slides created by Apple',
    openGraph: {
      title: 'All Slides - Apple Summary Slides',
      description: 'A collection of all the "bento" summary slides created by Apple',
    },
    alternates: {
      canonical: 'https://apple-summary-slides.vercel.app/all',
    },
  };
}

export default function AllSlidesPage() {
  return (
    <div>
      <Tabs />
      <div className="flex flex-col gap-6 p-3 sm:gap-8 md:p-5 xl:p-6">
        <h2 className="sr-only">All Apple Summary Slides</h2>
        {slides.map(slide => (
          <Slide key={slide.id} slide={slide} highlight="event" />
        ))}
      </div>
    </div>
  );
}
