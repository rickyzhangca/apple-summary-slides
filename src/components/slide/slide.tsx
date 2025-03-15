import { Slide as SlideType } from '@/data';
import { encodeUrl } from '@/utils';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type SlideProps = {
  slide: SlideType;
  highlight: 'event' | 'product';
};

export const Slide = ({ slide, highlight }: SlideProps) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <div className="flex flex-col items-start pl-0.5 sm:gap-0.5">
        <h3 className="text-lg font-medium sm:text-xl">{slide.title}</h3>
        <Link
          href={`/${highlight === 'event' ? 'events' : 'products'}/${encodeUrl(
            highlight === 'event' ? slide.event : slide.product
          )}`}
          className="group flex items-center gap-0.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
        >
          {highlight === 'event' ? slide.product : slide.event}
          <ArrowRightIcon
            absoluteStrokeWidth
            strokeWidth={2.5}
            className="size-3 opacity-0 transition-opacity group-hover:opacity-100"
          />
        </Link>
      </div>
      <Image
        src={slide.imageUrl}
        alt={slide.title}
        width={1920}
        height={1080}
        className="h-auto w-full overflow-hidden border border-zinc-200"
        quality={100}
        loading="lazy"
      />
    </div>
  );
};
