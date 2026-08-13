import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Timeline } from '@/components/ui/timeline';
import { initialExperiences } from '@/content/data-architecture';
import { GraduationCap, Award, BookOpen, Compass, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Experience & Academic Journey | Jessica Osta',
  description: 'Chronological timeline of academic degree pursuit, Responsible AI research capstones, and software engineering projects by Jessica Osta.',
};

export default function ExperiencePage() {
  return (
    <div className="py-8 space-y-12">
      <Section
        title="Academic & Research Journey"
        subtitle="Chronological milestones connecting Computer Science coursework, independent research, and full-stack engineering capstones."
        badge="Career & Academic History"
      >
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Timeline */}
          <Timeline items={initialExperiences} />

          {/* Academic Highlights & Commitment Card */}
          <Card className="p-8 border-slate-800 bg-slate-900/60 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-100">
                  Continuous Learning & Academic Growth
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  My academic path is driven by continuous hands-on exploration in machine learning algorithms, deep neural network training, statistical fairness auditing, and modern web application development. I prioritize deep technical understanding, rigorous testing, and ethical safeguards across every engineering milestone.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link href="/projects">
                    <Button variant="primary" size="sm" className="gap-2">
                      <span>View Capstone Projects</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>

                  <Link href="/responsible-ai">
                    <Button variant="rai" size="sm" className="gap-2">
                      <span>Responsible AI Research</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
