import Link from 'next/link';
import { Github, Linkedin, Mail, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/content/site-config';
import { Container } from '@/components/ui/container';

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12 md:py-16 mt-auto">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-slate-800/60">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-slate-100 text-lg">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-sky-500 to-purple-600 text-slate-950 font-black text-xs">
                JO
              </div>
              <span>Jessica Osta Portfolio</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              A professional full-stack platform specializing in AI/ML, Generative AI, and Responsible AI governance. Dedicated to transparent, ethical, and performant intelligent systems.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.find((s) => s.name === 'GitHub')?.url || 'https://github.com'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:text-sky-400 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.find((s) => s.name === 'LinkedIn')?.url || 'https://linkedin.com'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:text-sky-400 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.find((s) => s.name === 'Email')?.url || 'mailto:contact@jessicaosta.com'}
                aria-label="Email Contact"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:text-sky-400 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-sky-400 transition-colors">
                  About & Background
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-sky-400 transition-colors">
                  Technical Projects
                </Link>
              </li>
              <li>
                <Link href="/responsible-ai" className="hover:text-purple-400 transition-colors flex items-center gap-1">
                  <span>Responsible AI</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-sky-400 transition-colors">
                  Skills Matrix
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Areas & Resume */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Professional Journey
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/experience" className="hover:text-sky-400 transition-colors">
                  Experience & Journey
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-sky-400 transition-colors">
                  Achievements & Research
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-sky-400 transition-colors flex items-center gap-1">
                  <span>Web Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-400 transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footnote */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Jessica Osta. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-sky-400" />
            <span>Built with Next.js, React & Tailwind CSS</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
