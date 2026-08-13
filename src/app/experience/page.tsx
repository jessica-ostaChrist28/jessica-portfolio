import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Experience & Journey',
  description: 'Career journey, academic background, and milestones of Jessica Osta.',
};

export default function ExperiencePage() {
  return (
    <div className="py-8 space-y-8">
      <Section
        title="Experience & Academic Journey"
        subtitle="Chronological milestones connecting research, engineering roles, and academic foundations."
        badge="Career History"
      >
        <Card className="p-8 text-center border-slate-800 bg-slate-900/60">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mx-auto mb-4">
            <GraduationCap className="w-6 h-6" />
          </div>
          <CardTitle className="text-xl mb-2">Interactive Experience Timeline</CardTitle>
          <CardDescription className="max-w-md mx-auto">
            The Phase 1 architecture is configured for Jessica Osta&apos;s career history. Specific roles, academic credentials, and milestones will populate in Phase 2.
          </CardDescription>
        </Card>
      </Section>
    </div>
  );
}
