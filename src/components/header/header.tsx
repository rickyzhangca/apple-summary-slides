import { Diamond } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className="sticky top-0 z-20 flex w-full max-w-full items-center border-b border-zinc-300 bg-zinc-100">
      <div className="relative mx-3 flex h-full w-full items-center justify-between border-x border-zinc-300 px-5 py-2.5 md:mx-10 xl:mx-12 2xl:mx-auto 2xl:w-[1660px]">
        <Diamond position="bottom-left" />
        <Diamond position="bottom-right" />
        <Link
          href="/"
          className="font-semibold underline-offset-4 hover:underline"
        >
          <h1>Apple Summary Slides</h1>
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="https://github.com/rickyzhangca/apple-summary-slides"
            target="_blank"
            className="flex items-center gap-1.5 rounded-md border border-transparent p-2 text-sm transition-colors duration-75 hover:border-zinc-300 hover:bg-zinc-200"
          >
            <Image src="/github.svg" alt="GitHub" width={20} height={20} />
            83
          </Link>
          <Link
            href="https://www.figma.com/community/file/1150817983915754582/all-apple-event-summary-slides-2019-2024"
            target="_blank"
            className="flex items-center gap-1 rounded-md border border-transparent p-2 text-sm transition-colors duration-75 hover:border-zinc-300 hover:bg-zinc-200"
          >
            <Image src="/figma.svg" alt="Figma" width={20} height={20} />
            12.9K
          </Link>
        </div>
      </div>
    </div>
  );
};
