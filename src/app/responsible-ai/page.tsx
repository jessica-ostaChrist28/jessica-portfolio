import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { initialRaiCaseStudies } from '@/content/data-architecture';
import { ShieldCheck, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Responsible AI Portal',
  description: 'Academic and professional Responsible AI case studies, bias audits, and governance frameworks.',
};

const analyticalDimensions = [
  'Problem & Context',
  'Stakeholder Mapping',
  'Risk Vulnerabilities',
  'Bias Audit Methodology',
  'Fairness Metrics Evaluation',
  'Privacy & Data Governance',
  'Transparency & Model Cards',
  'Explainability (XAI)',
  'Human Oversight (HITL)',
  'Potential Harms Assessment',
  'Mitigation Strategies',
  'Governance Standards',
  'Actionable Recommendations',
  'Socio-technical Reflections',
  'Academic References',
];

export default function ResponsibleAiPage() {
  return (
    <div className="py-8 space-y-8">
      <Section
        title="Responsible AI Portal"
        subtitle="Comprehensive case studies, governance frameworks, and algorithmic bias auditing."
        badge="Ethical AI Governance"
      >
        {/* 15 Analytical Dimensions Overview */}
        <Card className="mb-12 border-zinc-200 bg-zinc-50">
          <CardHeader>
            <div className="flex items-center gap-2 text-zinc-600 text-sm font-semibold">
              <ShieldCheck className="w-5 h-5 text-zinc-700" />
              <span>Standard 15-Point Case Study Analytical Schema</span>
            </div>
            <CardTitle className="text-2xl mt-1">Academic & Governance Rigor</CardTitle>
            <CardDescription className="text-zinc-600">
              Every case study published in this portal is evaluated across 15 core socio-technical dimensions to ensure accountability, safety, and compliance with standards like NIST AI RMF and EU AI Act.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 pt-2">
              {analyticalDimensions.map((dim, idx) => (
                <div
                  key={dim}
                  className="flex items-center gap-1.5 p-2 rounded-lg bg-white border border-zinc-200 text-xs font-medium text-zinc-600"
                >
                  <span className="font-mono text-zinc-700 font-bold">{idx + 1}.</span>
                  <span className="truncate">{dim}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Case Studies Preview Grid */}
        <div className="grid grid-cols-1 gap-6">
          {initialRaiCaseStudies.map((study) => (
            <Card key={study.id} className="border-zinc-200 hover:border-zinc-400 transition-colors">
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200">
                    {study.category}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">
                    {study.readTimeMinutes} min read &bull; {study.publishedAt}
                  </span>
                </div>
                <CardTitle className="text-2xl text-zinc-900">{study.title}</CardTitle>
                <p className="text-sm font-medium text-zinc-600 mt-1">{study.subtitle}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-base text-zinc-600">{study.summary}</CardDescription>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200 space-y-1">
                    <span className="text-xs text-zinc-500 font-semibold uppercase">Domain</span>
                    <p className="text-xs text-zinc-800 font-medium">{study.context.domain}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200 space-y-1">
                    <span className="text-xs text-zinc-500 font-semibold uppercase">Fairness Target</span>
                    <p className="text-xs text-zinc-800 font-medium">{study.fairness.definitionUsed}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200 space-y-1">
                    <span className="text-xs text-zinc-500 font-semibold uppercase">Oversight Level</span>
                    <p className="text-xs text-zinc-800 font-medium">{study.humanOversight.oversightLevel}</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="justify-between">
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <FileText className="w-4 h-4 text-zinc-700" />
                  <span>15 Analytical Dimensions Verified</span>
                </div>
                {study.pdfUrl ? (
                  <a href={study.pdfUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="rai" size="sm" className="gap-1 cursor-pointer">
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </a>
                ) : (
                  <Button variant="rai" size="sm" className="gap-1">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
