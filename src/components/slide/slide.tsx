import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Slide as SlideType } from "@/data";
import { encodeUrl } from "@/utils";

type SlideProps = {
	slide: SlideType;
	highlight: "event" | "product";
};

export const Slide = ({ slide, highlight }: SlideProps) => {
	return (
		<div className="flex flex-col gap-3 sm:gap-4">
			<div className="flex flex-col items-start pl-0.5 sm:gap-0.5">
				<h3 className="text-lg font-medium sm:text-xl">{slide.title}</h3>
				<Link
					href={`/${highlight === "event" ? "events" : "products"}/${encodeUrl(
						highlight === "event" ? slide.event : slide.product,
					)}`}
					className="group flex items-center gap-0.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
				>
					{highlight === "event" ? slide.product : slide.event}
					<ArrowRightIcon
						absoluteStrokeWidth
						strokeWidth={2.5}
						className="size-3 opacity-0 transition-opacity group-hover:opacity-100"
					/>
				</Link>
			</div>
			{/* not using next image to save bandwidth on vercel */}
			{/* bunny cdn will handle caching */}
			<img
				src={slide.imageUrl}
				alt={slide.title}
				width={1920}
				height={1080}
				className="h-auto w-full overflow-hidden border border-zinc-200"
				loading="lazy"
			/>
		</div>
	);
};
