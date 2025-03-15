'use client';

import { tw } from '@/utils';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

type ScrollerProps = {
  type: 'left' | 'right';
  ref: React.RefObject<HTMLDivElement | null>;
};

export const Scroller = ({ type, ref }: ScrollerProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerDimensions, setContainerDimensions] = useState({
    scrollWidth: 0,
    clientWidth: 0,
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      setScrollPosition(element.scrollLeft);
    };

    const updateDimensions = () => {
      setContainerDimensions({
        scrollWidth: element.scrollWidth,
        clientWidth: element.clientWidth,
      });
      setScrollPosition(element.scrollLeft);
    };

    // Initial dimensions
    updateDimensions();

    // Event listeners
    element.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateDimensions);

    return () => {
      element.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateDimensions);
    };
  }, [ref]);

  if (!ref.current) return null;
  if (containerDimensions.scrollWidth <= containerDimensions.clientWidth)
    return null;
  if (type === 'left' && scrollPosition === 0) return null;
  if (
    type === 'right' &&
    scrollPosition + containerDimensions.clientWidth >=
      containerDimensions.scrollWidth
  )
    return null;

  return (
    <>
      <div
        className={tw(
          'absolute top-1/2 z-30 hidden -translate-y-1/2 cursor-pointer rounded-full border border-zinc-300 bg-zinc-100 p-2 shadow-lg hover:bg-zinc-200 active:bg-zinc-100 sm:flex',
          type === 'left' ? 'left-2' : 'right-2'
        )}
        onClick={e => {
          e.stopPropagation();
          if (ref.current) {
            const container = ref.current;
            const itemWidth = container.firstElementChild?.clientWidth || 0;
            const gap = 8; // gap-2 = 0.5rem = 8px
            const scrollAmount = itemWidth + gap;

            container.style.scrollSnapType = 'x mandatory';
            container.style.scrollBehavior = 'smooth';
            container.scrollTo({
              left:
                type === 'left'
                  ? container.scrollLeft - scrollAmount
                  : container.scrollLeft + scrollAmount,
            });

            // Remove snap and smooth scroll after animation
            setTimeout(() => {
              if (container) {
                container.style.scrollSnapType = 'none';
                container.style.scrollBehavior = 'auto';
              }
            }, 500); // Typical smooth scroll duration
          }
        }}
      >
        {type === 'left' ? (
          <ChevronLeftIcon className="size-5" />
        ) : (
          <ChevronRightIcon className="size-5" />
        )}
      </div>
      <div
        className={tw(
          'absolute inset-y-0 z-20 hidden w-16 sm:flex',
          type === 'left'
            ? 'left-0 bg-linear-to-r from-zinc-100/60 to-transparent'
            : 'right-0 bg-linear-to-l from-zinc-100/60 to-transparent'
        )}
      />
    </>
  );
};
