'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ShieldCheck, Sparkles } from 'lucide-react';
import { siteConfig } from '@/content/site-config';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { MobileNav } from './mobile-nav';

export function Header() {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-30 w-full transition-all duration-300',
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-slate-950/50 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <Container size="lg" className="flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-bold tracking-tight text-slate-100 transition-opacity hover:opacity-90"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 font-black text-slate-950 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <span>JO</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold leading-none text-slate-100 group-hover:text-sky-400 transition-colors">
              Jessica Osta
            </span>
            <span className="text-[11px] font-medium text-slate-400 leading-tight">
              AI/ML & Responsible AI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {siteConfig.mainNav.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5',
                  isActive
                    ? 'bg-sky-500/15 text-sky-300 font-semibold border border-sky-500/30'
                    : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/50'
                )}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="inline-flex items-center text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Header CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link href="/responsible-ai" className="hidden sm:inline-flex">
            <Button variant="rai" size="sm" className="gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>RAI Portal</span>
            </Button>
          </Link>

          {/* Mobile Nav Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileNavOpen(true)}
            aria-label="Open Navigation Menu"
            className="lg:hidden text-slate-300 hover:text-slate-100"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </header>
  );
}
