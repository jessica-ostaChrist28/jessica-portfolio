import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'rai';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variants = {
      primary:
        'bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 active:scale-[0.98]',
      secondary:
        'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 hover:border-slate-600',
      outline:
        'border border-slate-700 hover:border-sky-400/50 bg-slate-900/50 hover:bg-slate-800/80 text-slate-200',
      ghost: 'hover:bg-slate-800/60 text-slate-300 hover:text-slate-100',
      link: 'text-sky-400 hover:text-sky-300 underline-offset-4 hover:underline p-0 h-auto',
      rai: 'bg-gradient-to-r from-purple-600 to-sky-500 hover:from-purple-500 hover:to-sky-400 text-white font-semibold shadow-lg shadow-purple-500/20 active:scale-[0.98]',
    };

    const sizes = {
      sm: 'h-8 px-3 text-xs gap-1.5',
      md: 'h-10 px-4 text-sm gap-2',
      lg: 'h-12 px-6 text-base gap-2.5',
      icon: 'h-9 w-9 p-0',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
