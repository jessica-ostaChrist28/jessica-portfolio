import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, ShieldCheck, GraduationCap, Code2, Sparkles, BookOpen, Compass, ArrowRight } from 'lucide-react';
import { FadeIn, MotionStaggerContainer, MotionStaggerItem } from '@/components/ui/motion';

export const metadata: Metadata = {
  title: 'About | Jessica Osta',
  description: 'Academic background, research interests in AI/ML & Responsible AI, and engineering philosophy of Jessica Osta.',
};

export default function AboutPage() {
  return (
    <div className="py-8 space-y-12">
      {/* Page Header */}
      <Section
        title="About Jessica Osta"
        subtitle="Computer Science scholar specializing in Artificial Intelligence, Machine Learning, and Responsible AI Governance."
        badge="Background & Philosophy"
      >
        <div className="max-w-4xl space-y-8">
          <Card className="p-8 border-slate-800 bg-slate-900/80 backdrop-blur-md">
            <div className="space-y-6 text-slate-300 leading-relaxed text-base">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/30">
                <GraduationCap className="w-4 h-4 text-sky-400" />
                <span>Computer Science Student & Researcher</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100">
                Bridging Machine Learning Innovation with Ethical Systems Governance
              </h2>

              <p>
                Hello! I am <strong>Jessica Osta</strong>, a Computer Science student dedicated to advancing <strong>Artificial Intelligence, Machine Learning</strong>, and <strong>Responsible AI</strong>. My work combines quantitative algorithms with socio-technical accountability, ensuring that AI systems are not only high-performing but also fair, transparent, and interpretable.
              </p>

              <p>
                My technical exploration spans deep learning architectures, Large Language Model (LLM) fine-tuning, Retrieval-Augmented Generation (RAG), computer vision, and full-stack software development with React, TypeScript, and Next.js. Alongside engineering, I place special emphasis on <strong>Responsible AI auditing</strong> — measuring demographic parity, mitigating algorithmic bias, and computing feature attribution with SHAP and LIME.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Focus Areas Grid */}
      <Section
        title="Core Technical Pillars"
        subtitle="Key focus areas defining my academic coursework and project engineering."
        badge="Focus Domains"
      >
        <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MotionStaggerItem>
            <Card className="glass-panel-hover h-full flex flex-col justify-between">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-3">
                  <Brain className="w-5 h-5" />
                </div>
                <CardTitle>AI / Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  Focusing on supervised and unsupervised learning, PyTorch model pipelines, neural networks, NLP text analytics, and computer vision.
                </CardDescription>
              </CardContent>
            </Card>
          </MotionStaggerItem>

          <MotionStaggerItem>
            <Card className="glass-panel-hover h-full flex flex-col justify-between">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <CardTitle>Responsible AI & Ethics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  Implementing algorithmic fairness metrics, SHAP/LIME feature attribution (XAI), differential privacy, and NIST AI RMF governance standards.
                </CardDescription>
              </CardContent>
            </Card>
          </MotionStaggerItem>

          <MotionStaggerItem>
            <Card className="glass-panel-hover h-full flex flex-col justify-between">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-3">
                  <Code2 className="w-5 h-5" />
                </div>
                <CardTitle>Systems Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  Architecting full-stack web platforms using TypeScript, React, Next.js, Tailwind CSS, and REST API data services for ML data interaction.
                </CardDescription>
              </CardContent>
            </Card>
          </MotionStaggerItem>
        </MotionStaggerContainer>
      </Section>

      {/* Engineering Philosophy */}
      <Section
        title="Engineering & Research Philosophy"
        subtitle="Guiding principles behind my approach to AI systems and software design."
        badge="Principles"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="glass-panel-hover">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">Rigorous & Scalable Engineering</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-300 leading-relaxed">
                Code should be clean, strongly typed, modular, and maintainable. Theoretical concepts in algorithms and machine learning achieve maximum impact when paired with production-ready software architecture.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-panel-hover">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">Ethics as a First-Class Constraint</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-300 leading-relaxed">
                Responsible AI governance is not an afterthought or a compliance checkbox. Bias auditing, explainability mechanisms, and human oversight must be integrated directly into the initial model architecture lifecycle.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA to Explore Skills & Projects */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          <Link href="/skills">
            <Button variant="primary" size="md" className="gap-2">
              <span>View Skills Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/experience">
            <Button variant="outline" size="md" className="gap-2">
              <GraduationCap className="w-4 h-4 text-sky-400" />
              <span>Academic Experience</span>
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
