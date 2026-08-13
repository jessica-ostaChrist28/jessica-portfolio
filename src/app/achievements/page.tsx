import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { initialPatents, initialCertifications, initialAchievementsList } from '@/content/data-architecture';
import { Award, ShieldCheck, CheckCircle2, Medal, FileText, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Achievements & Patents | Jessica John Osta',
  description: 'Patents, copyrights, certifications, hackathon recognitions, and extracurricular honors of Jessica John Osta.',
};

export default function AchievementsPage() {
  return (
    <div className="py-8 space-y-10">
      <Section
        title="Achievements, Patents & Certifications"
        subtitle="Registered intellectual property, professional certifications, hackathon participation, and honors."
        badge="Recognitions & IP"
      >
        <div className="space-y-10 max-w-4xl mx-auto">
          {/* Patents & Copyrights */}
          <div>
            <div className="flex items-center gap-2 text-purple-400 font-bold text-lg mb-4">
              <ShieldCheck className="w-5 h-5" />
              <span>Patents & Registered Copyrights</span>
            </div>

            {initialPatents.map((pat) => (
              <Card key={pat.id} className="border-purple-500/30 bg-purple-950/10 p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {pat.status}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{pat.date}</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-100 mt-2">{pat.title}</h3>
                <p className="text-xs font-mono text-purple-300 mt-1">{pat.registrationNumber} &bull; {pat.issuer}</p>
                <p className="text-sm text-slate-300 leading-relaxed mt-3">{pat.summary}</p>
              </Card>
            ))}
          </div>

          {/* Hackathons & Honors */}
          <div>
            <div className="flex items-center gap-2 text-sky-400 font-bold text-lg mb-4">
              <Medal className="w-5 h-5" />
              <span>Hackathons & Honors</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {initialAchievementsList.map((ach, i) => (
                <Card key={i} className="p-4 flex items-start gap-3 glass-panel-hover">
                  <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-100">{ach.title}</h4>
                    <span className="text-xs font-mono text-slate-400 mt-0.5 block">{ach.date}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Grid */}
          <div>
            <div className="flex items-center gap-2 text-sky-400 font-bold text-lg mb-4">
              <Award className="w-5 h-5" />
              <span>Professional Certifications</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {initialCertifications.map((cert, i) => (
                <Card key={i} className="p-4 flex items-start justify-between gap-3 border-slate-800">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-100">{cert.title}</h4>
                    <p className="text-xs text-sky-400 font-medium">{cert.issuer}</p>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700 shrink-0">
                    {cert.date}
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
