import Link from 'next/link';
import { ArrowRight, ShieldCheck, Cpu, Code2, Brain, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <Section className="pt-20 md:pt-28 pb-16 relative">
        {/* Ambient Glow Effects */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-20 right-10 w-[400px] h-[250px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

        <Container size="lg" className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-purple-500/30 bg-purple-500/10 text-purple-300">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>Full-Stack AI/ML & Responsible AI Portfolio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
              Architecting <span className="gradient-text-ai">Intelligent Systems</span> with <span className="gradient-text-rai">Ethical Rigor</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
              Welcome to <strong>Jessica Osta Portfolio</strong> — a high-impact technical and academic showcase specializing in Artificial Intelligence, Machine Learning, Generative AI, and Responsible AI governance.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/responsible-ai">
                <Button variant="rai" size="lg" className="gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Explore Responsible AI</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link href="/projects">
                <Button variant="outline" size="lg" className="gap-2">
                  <Code2 className="w-5 h-5 text-sky-400" />
                  <span>View Projects</span>
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Focus Pillars */}
      <Section
        title="Core Technical Pillars"
        subtitle="Specialized focus areas spanning machine learning engineering and algorithmic accountability."
        badge="Architecture Focus"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="glass-panel-hover">
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-3">
                <Brain className="w-5 h-5" />
              </div>
              <CardTitle>AI / Machine Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Supervised & unsupervised learning architectures, deep learning models, and data pipeline optimization.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="glass-panel-hover">
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <CardTitle>Generative AI</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                LLM fine-tuning, RAG architectures, prompt evaluation, and generative model deployment.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="glass-panel-hover">
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <CardTitle>Responsible AI</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Algorithmic bias auditing, fairness metrics, privacy protection, and explainability frameworks.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="glass-panel-hover">
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-3">
                <Cpu className="w-5 h-5" />
              </div>
              <CardTitle>Systems Engineering</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Production-grade full-stack web platforms built with Next.js, React, TypeScript, and edge infrastructure.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Phase 1 Scaffolding Banner */}
      <Section className="py-12">
        <Card hoverEffect={false} className="border-sky-500/30 bg-gradient-to-r from-slate-900 via-slate-900 to-sky-950/40">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                Phase 1 Foundation Active
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Architecture Scaffolding Complete
              </h3>
              <p className="text-sm text-slate-400 max-w-xl">
                The global layout, navigation system, responsive mobile menu, design tokens, and TypeScript type schemas are fully operational.
              </p>
            </div>
            <Link href="/responsible-ai">
              <Button variant="primary" size="md">
                View Responsible AI Schema
              </Button>
            </Link>
          </div>
        </Card>
      </Section>
    </div>
  );
}
