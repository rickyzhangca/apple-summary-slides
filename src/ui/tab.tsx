"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";
import { tw } from "@/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.List
    className={tw("relative inline-flex w-full px-2 pt-2", className)}
    ref={ref}
    {...props}
  >
    {children}
    <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-zinc-300" />
    <div className="absolute inset-0 bottom-0 -z-20 bg-zinc-200" />
  </TabsPrimitive.List>
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    className={tw(
      "inline-flex items-center justify-center whitespace-nowrap rounded-t-md border-transparent border-x border-t px-3 py-2 font-medium text-sm text-zinc-500 ring-offset-background transition-all hover:text-zinc-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-zinc-300 data-[state=active]:bg-zinc-100 data-[state=active]:text-zinc-900",
      className
    )}
    ref={ref}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    className={tw(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    ref={ref}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
