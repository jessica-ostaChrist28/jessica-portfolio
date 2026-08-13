import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Award, BookOpen, Mic } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Achievements & Research',
  description: 'Publications, certifications, academic milestones, and honors.',
};

export default function AchievementsPage() {
  return (
    <div className="py-8 space-y-8">
      <Section
        title="Achievements & Publications"
        subtitle="Recognitions, scholarly papers, certifications, and technical accomplishments."
        badge="Honors & Research"
      >
        <Card className="p-8 text-center border-slate-800 bg-slate-900/60">
          <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mx-auto mb-4">
            <Award className="w-6 h-6" />
          </div>
          <CardTitle className="text-xl mb-2">Research & Honors Scaffolding</CardTitle>
          <CardDescription className="max-w-md mx-auto">
            The Phase 1 data schema supports paper citations, certifications, and awards. Content stubs are ready for Jessica Osta&apos;s verified achievements.
          </CardDescription>
        </Card>
      </Section>
    </div>
  );
}
