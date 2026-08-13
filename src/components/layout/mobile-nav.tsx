'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/content/site-config';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  // Close menu on ESC key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-md lg:hidden"
            aria-hidden="true"
          />

          {/* Slide-over Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-slate-900 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <Link
                  href="/"
                  onClick={onClose}
                  className="flex items-center gap-2 font-bold text-slate-100 text-lg tracking-tight"
                >
                  <span className="h-8 w-8 rounded-lg bg-gradient-to-tr from-sky-500 to-purple-600 flex items-center justify-center text-slate-950 font-black text-sm">
                    JO
                  </span>
                  <span>Jessica Osta</span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  aria-label="Close Navigation Menu"
                  className="text-slate-400 hover:text-slate-100"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col space-y-1">
                {siteConfig.mainNav.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        'flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium transition-colors',
                        isActive
                          ? 'bg-sky-500/10 text-sky-400 font-semibold border-l-2 border-sky-400'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-slate-100'
                      )}
                    >
                      <span>{link.label}</span>
                      {link.badge && (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          <ShieldCheck className="w-3 h-3" />
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Footer inside drawer */}
            <div className="pt-6 border-t border-slate-800 space-y-4">
              <div className="flex items-center justify-around text-slate-400">
                <a
                  href={siteConfig.socials.find((s) => s.name === 'GitHub')?.url || 'https://github.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-lg hover:bg-slate-800 hover:text-sky-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.socials.find((s) => s.name === 'LinkedIn')?.url || 'https://linkedin.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-lg hover:bg-slate-800 hover:text-sky-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.socials.find((s) => s.name === 'Email')?.url || 'mailto:contact@jessicaosta.com'}
                  aria-label="Send Email"
                  className="p-2 rounded-lg hover:bg-slate-800 hover:text-sky-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <p className="text-xs text-center text-slate-500">
                &copy; {new Date().getFullYear()} Jessica Osta. All rights reserved.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
