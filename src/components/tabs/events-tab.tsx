'use client';

import { eventsFromSlides } from '@/data';
import { TabsContent } from '@/ui';
import { encodeUrl, tw } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { Diamond } from '../diamond';
import { Scroller } from '../scroller';

export const EventsTab = () => {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const container = ref.current;
    const selectedEvent = container.querySelector(`[href="${pathname}"]`);
    if (!selectedEvent) return;
    selectedEvent.scrollIntoView({
      block: 'nearest',
      inline: 'center',
    });
  }, [pathname]);

  return (
    <TabsContent
      value="events"
      className="relative mt-0 items-center gap-2 border-b border-zinc-300 py-3 data-[state=active]:flex"
    >
      <Scroller type="left" ref={ref} />
      <Scroller type="right" ref={ref} />
      <div
        ref={ref}
        className="flex gap-2 overflow-x-auto overscroll-contain px-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onWheel={e => {
          e.currentTarget.scrollLeft += e.deltaY;
        }}
      >
        {eventsFromSlides.map(event => (
          <Link
            key={event.name}
            href={`/events/${encodeUrl(event.name)}`}
            className={tw(
              'flex w-fit select-none snap-center flex-col items-center gap-1.5 rounded-lg border border-transparent p-1.5 text-sm transition-all duration-200',
              pathname === `/events/${encodeUrl(event.name)}` &&
                'border-zinc-300 bg-zinc-200/50'
            )}
          >
            <Image
              src={event.imageUrl}
              alt={event.name}
              width={120}
              height={76}
              className="z-10 h-[76px] min-w-[120px] rounded-md object-contain"
            />
            {event.name.startsWith('Apple Event') ? (
              <div className="flex flex-col items-center gap-0.5">
                <p className="text-sm">Apple Event</p>
                <p className="text-xs font-medium text-zinc-400">
                  {event.name.slice(11)}
                </p>
              </div>
            ) : event.name.startsWith('WWDC') ? (
              <div className="flex flex-col items-center gap-1">
                <p className="text-sm">WWDC</p>
                <p className="text-xs font-medium text-zinc-400">
                  {event.name.slice(5)}
                </p>
              </div>
            ) : (
              <p className="text-sm">{event.name}</p>
            )}
          </Link>
        ))}
      </div>
      <Diamond position="bottom-right" />
      <Diamond position="bottom-left" />
    </TabsContent>
  );
};
