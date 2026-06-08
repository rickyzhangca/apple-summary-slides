"use client";

import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";
import type { ComponentPropsWithoutRef, ComponentRef, Ref } from "react";
import { tw } from "@/utils";

const Tabs = Root;

const TabsList = ({
  className,
  children,
  ref,
  ...props
}: ComponentPropsWithoutRef<typeof List> & {
  ref?: Ref<ComponentRef<typeof List>>;
}) => (
  <List
    className={tw("relative inline-flex w-full px-2 pt-2", className)}
    ref={ref}
    {...props}
  >
    {children}
    <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-zinc-300" />
    <div className="absolute inset-0 bottom-0 -z-20 bg-zinc-200" />
  </List>
);
TabsList.displayName = List.displayName;

const TabsTrigger = ({
  className,
  ref,
  ...props
}: ComponentPropsWithoutRef<typeof Trigger> & {
  ref?: Ref<ComponentRef<typeof Trigger>>;
}) => (
  <Trigger
    className={tw(
      "inline-flex items-center justify-center whitespace-nowrap rounded-t-md border-transparent border-x border-t px-3 py-2 font-medium text-sm text-zinc-500 ring-offset-background transition-all hover:text-zinc-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-zinc-300 data-[state=active]:bg-zinc-100 data-[state=active]:text-zinc-900",
      className
    )}
    ref={ref}
    {...props}
  />
);
TabsTrigger.displayName = Trigger.displayName;

const TabsContent = ({
  className,
  ref,
  ...props
}: ComponentPropsWithoutRef<typeof Content> & {
  ref?: Ref<ComponentRef<typeof Content>>;
}) => (
  <Content
    className={tw(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    ref={ref}
    {...props}
  />
);
TabsContent.displayName = Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
