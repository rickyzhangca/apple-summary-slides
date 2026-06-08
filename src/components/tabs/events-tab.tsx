"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { eventsFromSlides } from "@/data";
import { TabsContent } from "@/ui";
import { encodeUrl, tw } from "@/utils";
import { Diamond } from "../diamond";
import { Scroller } from "../scroller";

function EventLabel({ name }: { name: string }) {
  if (name.startsWith("Apple Event")) {
    return (
      <div className="flex flex-col items-center gap-0.5">
        <p className="text-sm">Apple Event</p>
        <p className="font-medium text-xs text-zinc-400">{name.slice(11)}</p>
      </div>
    );
  }

  if (name.startsWith("Apple Announcement")) {
    return (
      <div className="flex flex-col items-center gap-1">
        <p className="text-sm">Announcement</p>
        <p className="font-medium text-xs text-zinc-400">{name.slice(18)}</p>
      </div>
    );
  }

  if (name.startsWith("WWDC")) {
    return (
      <div className="flex flex-col items-center gap-1">
        <p className="text-sm">WWDC</p>
        <p className="font-medium text-xs text-zinc-400">{name.slice(5)}</p>
      </div>
    );
  }

  return <p className="text-sm">{name}</p>;
}

export const EventsTab = () => {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const container = ref.current;
    const selectedEvent = container.querySelector(`[href="${pathname}"]`);
    if (!selectedEvent) {
      return;
    }
    selectedEvent.scrollIntoView({
      block: "nearest",
      inline: "center",
    });
  }, [pathname]);

  return (
    <TabsContent
      className="relative mt-0 items-center gap-2 border-zinc-300 border-b py-3 data-[state=active]:flex"
      value="events"
    >
      <Scroller ref={ref} type="left" />
      <Scroller ref={ref} type="right" />
      <div
        className="flex gap-2 overflow-x-auto overscroll-contain px-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onWheel={(e) => {
          e.currentTarget.scrollLeft += e.deltaY;
        }}
        ref={ref}
      >
        {eventsFromSlides.map((event) => (
          <Link
            className={tw(
              "flex w-fit select-none snap-center flex-col items-center gap-1.5 rounded-lg border border-transparent p-1.5 text-sm transition-all duration-200",
              pathname === `/events/${encodeUrl(event.name)}` &&
                "border-zinc-300 bg-zinc-200/50"
            )}
            href={`/events/${encodeUrl(event.name)}`}
            key={event.name}
          >
            <Image
              alt={event.name}
              className="z-10 h-[76px] min-w-[120px] rounded-md object-contain"
              height={76}
              src={event.imageUrl}
              width={120}
            />
            <EventLabel name={event.name} />
          </Link>
        ))}
      </div>
      <Diamond position="bottom-right" />
      <Diamond position="bottom-left" />
    </TabsContent>
  );
};
