import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Interactive web resume and downloadable PDF for recruiters and technical hiring managers.',
};

export default function ResumePage() {
  return (
    <div className="py-8 space-y-8">
      <Section
        title="Professional Resume"
        subtitle="Formatted for rapid recruiter review and technical ATS compliance."
        badge="Curriculum Vitae"
      >
        <Card className="p-8 border-slate-800 bg-slate-900/80 max-w-3xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <h2 className="text-2xl font-bold text-slate-100">Jessica Osta</h2>
              <p className="text-sky-400 font-medium text-sm">AI/ML & Responsible AI Systems Architect</p>
            </div>

            <Button variant="primary" size="md" className="gap-2">
              <Download className="w-4 h-4" />
              <span>Download PDF Resume</span>
            </Button>
          </div>

          <div className="space-y-4 text-sm text-slate-300">
            <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-2">
              <h3 className="font-semibold text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Summary of Qualifications</span>
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Full-stack computer scientist specializing in machine learning algorithms, Generative AI applications, and socio-technical Responsible AI governance frameworks.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-2">
              <h3 className="font-semibold text-slate-200 flex items-center gap-2">
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Web Resume Viewer Scaffolding</span>
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Complete formatted resume sections (Education, Experience, Technical Projects, Responsible AI Publications) will populate in future content phases.
              </p>
            </div>
          </div>
        </Card>
      </Section>
    </div>
  );
}
