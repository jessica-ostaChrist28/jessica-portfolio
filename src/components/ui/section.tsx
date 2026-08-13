import * as React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  centered?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, id, title, subtitle, badge, containerSize = 'lg', centered = false, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn('py-16 md:py-24 relative overflow-hidden', className)}
        {...props}
      >
        <Container size={containerSize}>
          {(title || subtitle || badge) && (
            <div className={cn('mb-12 md:mb-16 space-y-3', centered && 'text-center max-w-3xl mx-auto')}>
              {badge && (
                <div className={cn('inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-sky-500/30 bg-sky-500/10 text-sky-300 uppercase', centered && 'mx-auto')}>
                  {badge}
                </div>
              )}
              {title && (
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-lg text-slate-400 leading-relaxed font-normal">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          {children}
        </Container>
      </section>
    );
  }
);
Section.displayName = 'Section';
