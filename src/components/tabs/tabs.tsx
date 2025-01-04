'use client';

import { eventsFromSlides, productsFromSlides } from '@/data';
import { TabsList, Tabs as TabsPrimitive, TabsTrigger } from '@/ui';
import { encodeUrl } from '@/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { EventsTab } from './events-tab';
import { ProductsTab } from './products-tab';

export const Tabs = () => {
  const pathname = usePathname();

  let activeTab = 'events';
  if (pathname.startsWith('/products')) {
    activeTab = 'products';
  } else if (pathname.startsWith('/years')) {
    activeTab = 'years';
  }

  return (
    <TabsPrimitive defaultValue={activeTab}>
      <TabsList>
        <TabsTrigger value="events">
          <Link href={`/events/${encodeUrl(eventsFromSlides[0].name)}`}>
            By events
          </Link>
        </TabsTrigger>
        <TabsTrigger value="products">
          <Link href={`/products/${encodeUrl(productsFromSlides[0].name)}`}>
            By products
          </Link>
        </TabsTrigger>
      </TabsList>
      <EventsTab />
      <ProductsTab />
    </TabsPrimitive>
  );
};
