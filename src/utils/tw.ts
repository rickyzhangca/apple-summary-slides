import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const tw = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
