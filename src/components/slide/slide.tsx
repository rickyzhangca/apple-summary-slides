import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import type { Slide as SlideType } from "@/data";
import { encodeUrl } from "@/utils";

interface SlideProps {
  highlight: "event" | "product";
  slide: SlideType;
}

export const Slide = ({ slide, highlight }: SlideProps) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <div className="flex flex-col items-start pl-0.5 sm:gap-0.5">
        <h3 className="font-medium text-lg sm:text-xl">{slide.title}</h3>
        <Link
          className="group flex items-center gap-0.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
          href={`/${highlight === "event" ? "events" : "products"}/${encodeUrl(
            highlight === "event" ? slide.event : slide.product
          )}`}
        >
          {highlight === "event" ? slide.product : slide.event}
          <ArrowRightIcon
            absoluteStrokeWidth
            className="size-3 opacity-0 transition-opacity group-hover:opacity-100"
            strokeWidth={2.5}
          />
        </Link>
      </div>
      {/* not using next image to save bandwidth on vercel */}
      {/* bunny cdn will handle caching */}
      {/* biome-ignore lint/performance/noImgElement: CDN img avoids Vercel image optimization bandwidth */}
      <img
        alt={slide.title}
        className="h-auto w-full overflow-hidden border border-zinc-200"
        height={1080}
        loading="lazy"
        src={slide.imageUrl}
        width={1920}
      />
    </div>
  );
};
