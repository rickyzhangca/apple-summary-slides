import { Slide, Tabs } from '@/components';
import { getSlidesByEvent, slides } from '@/data';
import { decodeUrl, encodeUrl } from '@/utils';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const events = new Set<string>();
  slides.forEach(slide => {
    events.add(encodeUrl(slide.event));
  });

  return Array.from(events).map(event => ({
    event,
  }));
}

interface PageProps {
  params: Promise<{ event: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const decodedEvent = decodeUrl((await params).event);
  const originalEvent = slides.find(
    slide => slide.event.toLowerCase() === decodedEvent.toLowerCase()
  )?.event;

  if (!originalEvent) {
    return {
      title: 'Not Found - Apple Summary Slides',
      description: 'Event not found',
    };
  }

  return {
    title: `${originalEvent} - Apple Summary Slides`,
    description: `Archive of Apple Summary slides from ${originalEvent}`,
  };
}

export default async function EventPage({ params }: PageProps) {
  const decodedEvent = decodeUrl((await params).event);
  const slides = await getSlidesByEvent(decodedEvent);

  if (slides.length === 0) {
    notFound();
  }

  return (
    <div>
      <Tabs />
      <div className="flex flex-col gap-6 p-3 sm:gap-8 md:p-5 xl:p-6">
        <h2 className="sr-only">Slides from {decodedEvent}</h2>
        {slides.map(slide => (
          <Slide key={slide.id} slide={slide} highlight="event" />
        ))}
      </div>
    </div>
  );
}
