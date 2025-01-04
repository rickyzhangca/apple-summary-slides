import { Diamond } from '@/components';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="sticky top-0 z-20 flex w-full max-w-full items-center border-t border-zinc-300 bg-zinc-100">
      <div className="relative mx-3 flex h-full w-full flex-col items-center justify-center gap-2 border-x border-zinc-300 px-5 py-12 md:mx-10 xl:mx-12 2xl:mx-auto 2xl:w-[1660px]">
        <p className="text-sm text-zinc-400">
          All images are screenshots from Apple events. All rights reserved by
          Apple Inc.
        </p>
        <p className="text-sm text-zinc-400">
          Sites made by{' '}
          <Link
            href="https://rickyzhang.me/"
            target="_blank"
            className="text-blue-500 underline-offset-4 hover:text-blue-600 hover:underline"
          >
            Ricky
          </Link>
          .
        </p>
        <Diamond position="top-left" />
        <Diamond position="top-right" />
      </div>
    </div>
  );
};
