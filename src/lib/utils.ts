import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS class names with clsx utility
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
