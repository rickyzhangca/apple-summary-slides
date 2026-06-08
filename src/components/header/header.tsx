import Image from "next/image";
import Link from "next/link";
import { Diamond } from "@/components";

export const Header = () => (
  <div className="sticky top-0 z-20 flex w-full max-w-full items-center border-zinc-300 border-b bg-zinc-100">
    <div className="relative mx-3 flex h-full w-full items-center justify-between border-zinc-300 border-x px-5 py-2.5 md:mx-10 xl:mx-12 2xl:mx-auto 2xl:w-[1660px]">
      <Diamond position="bottom-left" />
      <Diamond position="bottom-right" />
      <Link
        className="font-semibold underline-offset-4 hover:underline"
        href="/"
      >
        <h1>Apple Summary Slides</h1>
      </Link>
      <div className="flex items-center gap-1">
        <Link
          className="flex items-center gap-1.5 rounded-md border border-transparent p-2 text-sm transition-colors duration-75 hover:border-zinc-300 hover:bg-zinc-200"
          href="https://github.com/rickyzhangca/apple-summary-slides"
          target="_blank"
        >
          <Image alt="GitHub" height={20} src="/github.svg" width={20} />
          91
        </Link>
        <Link
          className="flex items-center gap-1 rounded-md border border-transparent p-2 text-sm transition-colors duration-75 hover:border-zinc-300 hover:bg-zinc-200"
          href="https://www.figma.com/community/file/1150817983915754582/all-apple-event-summary-slides-2019-2024"
          target="_blank"
        >
          <Image alt="Figma" height={20} src="/figma.svg" width={20} />
          14.2K
        </Link>
      </div>
    </div>
  </div>
);
