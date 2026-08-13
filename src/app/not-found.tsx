import Link from 'next/link';
import { ArrowLeft, Home, ShieldCheck, FolderGit2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="sm">
        <Card className="text-center p-8 md:p-12 relative z-10 border-slate-800 bg-slate-900/80 backdrop-blur-xl shadow-2xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-purple-500/20 text-sky-400 border border-sky-500/30 mb-6 font-mono font-bold text-2xl">
            404
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100 mb-3">
            Page Not Found
          </h1>

          <p className="text-slate-400 max-w-md mx-auto leading-relaxed mb-8 text-base">
            The page or research case study you are looking for does not exist or has been moved within the portfolio architecture.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/">
              <Button variant="primary" size="md" className="gap-2">
                <Home className="w-4 h-4" />
                <span>Return to Home</span>
              </Button>
            </Link>

            <Link href="/projects">
              <Button variant="outline" size="md" className="gap-2">
                <FolderGit2 className="w-4 h-4 text-sky-400" />
                <span>Projects</span>
              </Button>
            </Link>

            <Link href="/responsible-ai">
              <Button variant="rai" size="md" className="gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>RAI Portal</span>
              </Button>
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
}
