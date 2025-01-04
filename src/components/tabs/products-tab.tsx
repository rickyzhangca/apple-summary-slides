'use client';

import { productsFromSlides } from '@/data';
import { TabsContent } from '@/ui';
import { encodeUrl, tw } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { Diamond } from '../diamond';
import { Scroller } from '../scroller';

export const ProductsTab = () => {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const container = ref.current;
    const selectedProduct = container.querySelector(`[href="${pathname}"]`);
    if (!selectedProduct) return;
    selectedProduct.scrollIntoView({
      block: 'nearest',
      inline: 'center',
    });
  }, [pathname]);

  return (
    <TabsContent
      value="products"
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
        {productsFromSlides.map(product => (
          <Link
            key={product.name}
            href={`/products/${encodeUrl(product.name)}`}
            className={tw(
              'flex w-fit snap-center flex-col items-center gap-1.5 rounded-lg border border-transparent p-1.5 text-sm transition-all duration-200',
              pathname === `/products/${encodeUrl(product.name)}` &&
                'border-zinc-300 bg-zinc-200/50'
            )}
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={92}
              height={48}
              className="z-10 my-1 h-[48px] min-w-[92px] rounded-md object-contain"
            />
            <p className="text-sm">{product.name}</p>
          </Link>
        ))}
      </div>
      <Diamond position="bottom-right" />
      <Diamond position="bottom-left" />
    </TabsContent>
  );
};
