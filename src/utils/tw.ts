import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const tw = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
