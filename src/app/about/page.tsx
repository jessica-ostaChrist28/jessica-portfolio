import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Brain, ShieldCheck, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Academic background, research philosophy, and engineering approach of Jessica Osta.',
};

export default function AboutPage() {
  return (
    <div className="py-8 space-y-8">
      <Section
        title="About Jessica Osta"
        subtitle="Full-stack AI/ML engineer and Responsible AI practitioner."
        badge="Background & Philosophy"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-2">
                <Brain className="w-5 h-5" />
              </div>
              <CardTitle>AI/ML Engineering</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Focusing on machine learning systems, computer vision, natural language processing, and model optimization.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <CardTitle>Responsible AI</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Advancing algorithmic fairness, bias mitigation, model explainability (XAI), and ethical governance frameworks.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-2">
                <GraduationCap className="w-5 h-5" />
              </div>
              <CardTitle>Academic & Research</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Bridging theoretical computer science and practical software engineering for real-world impact.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
