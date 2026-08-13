import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { initialExperiences, initialProjects, initialPatents, initialCertifications, initialAchievementsList } from '@/content/data-architecture';
import { siteConfig } from '@/content/site-config';
import { Download, ExternalLink, FileText, GraduationCap, Briefcase, Award, Code2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume | Jessica John Osta',
  description: 'Official resume of Jessica John Osta with direct PDF download, education, experience, patents, hackathons, and certifications.',
};

export default function ResumePage() {
  const resumePdfUrl = '/Jessica_Osta_Resume.pdf';
  const githubUrl = siteConfig.socials.find((s) => s.name === 'GitHub')?.url || 'https://github.com/jessica-ostaChrist28';

  return (
    <div className="py-8 space-y-10">
      <Section
        title="Curriculum Vitae / Resume"
        subtitle="Official resume of Jessica John Osta. Download PDF or view complete interactive profile."
        badge="Official Resume"
      >
        {/* Action Header Banner */}
        <Card className="mb-10 p-8 border-sky-500/30 bg-slate-900/80 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/30">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Verified PDF Available</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-100">Jessica John Osta</h2>
              <p className="text-sm text-slate-300">
                Computer Science Engineering Student @ Christ University | Aspiring AI/ML Engineer
              </p>
              <div className="text-xs font-mono text-slate-400 pt-1">
                Bengaluru, India • jessicaostawork@gmail.com
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a href={resumePdfUrl} download="Jessica_Osta_Resume.pdf">
                <Button variant="primary" size="md" className="gap-2">
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </Button>
              </a>

              <a href={resumePdfUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="md" className="gap-2">
                  <ExternalLink className="w-4 h-4 text-sky-400" />
                  <span>Open PDF in New Tab</span>
                </Button>
              </a>
            </div>
          </div>
        </Card>

        {/* Embedded PDF Previewer */}
        <div className="mb-12">
          <Card className="p-4 border-slate-800 bg-slate-950">
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <FileText className="w-4 h-4 text-sky-400" />
                <span>PDF Document Preview</span>
              </div>
              <a href={resumePdfUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-sky-400 hover:underline">
                Fullscreen View &rarr;
              </a>
            </div>
            <iframe
              src={resumePdfUrl}
              className="w-full h-[650px] rounded-lg border border-slate-800/80 bg-slate-900"
              title="Jessica Osta Resume PDF"
            />
          </Card>
        </div>

        {/* Full Extracted Interactive Resume Content */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Professional Summary */}
          <Card className="p-6">
            <CardHeader className="p-0 mb-3">
              <CardTitle className="text-xl text-slate-100 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-sky-400" />
                <span>Professional Summary</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-sm text-slate-300 leading-relaxed">
                Computer Science Engineering student and aspiring AI/ML Engineer focused on building data-driven, intelligent systems. Combines strong software development and data structures foundations with hands-on project experience in machine learning frameworks, data pipelines, and NLP. Proven ability to build and deploy practical applications, including natural language processing models, computer vision frameworks, and Retrieval-Augmented Generation (RAG) systems. Skilled in data preprocessing, model deployment, and deep learning workflows. Seeking an entry-level role to contribute to an innovative AI development team.
              </p>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl text-slate-100 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-purple-400" />
                <span>Experience</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              {initialExperiences.map((exp) => (
                <div key={exp.id} className="border-b border-slate-800/80 pb-4 last:border-0 last:pb-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-slate-100 text-base">{exp.role}</h3>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-sky-300 border border-slate-700">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-sky-400 mb-2">{exp.organization} • {exp.location}</div>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 marker:text-sky-400">
                    {exp.description.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Technical Projects */}
          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl text-slate-100 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-sky-400" />
                <span>Technical Projects</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 grid grid-cols-1 md:grid-cols-2 gap-4">
              {initialProjects.map((proj) => (
                <div key={proj.id} className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-bold text-slate-100 text-sm">{proj.title}</h4>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-sky-400 font-mono hover:underline flex items-center gap-1">
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">Technologies: {proj.techStack.join(', ')}</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Patents & Copyrights */}
          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl text-slate-100 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-purple-400" />
                <span>Patents & Copyrights</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-3">
              {initialPatents.map((pat) => (
                <div key={pat.id} className="p-4 rounded-lg bg-purple-950/20 border border-purple-800/40 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-bold text-slate-100 text-base">{pat.title}</h4>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {pat.status}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-purple-300">{pat.registrationNumber} &bull; {pat.issuer}</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{pat.summary}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Certifications & Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CardHeader className="p-0 mb-3">
                <CardTitle className="text-lg text-slate-100 flex items-center gap-2">
                  <Award className="w-5 h-5 text-sky-400" />
                  <span>Certifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2 text-xs text-slate-300">
                  {initialCertifications.map((cert, i) => (
                    <li key={i} className="flex justify-between items-center border-b border-slate-800/60 pb-1.5 last:border-0">
                      <span className="font-medium text-slate-200">{cert.title}</span>
                      <span className="text-slate-400 font-mono text-[11px] shrink-0 ml-2">{cert.issuer} ({cert.date})</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="p-0 mb-3">
                <CardTitle className="text-lg text-slate-100 flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span>Achievements & Honors</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2 text-xs text-slate-300">
                  {initialAchievementsList.map((ach, i) => (
                    <li key={i} className="flex justify-between items-center border-b border-slate-800/60 pb-1.5 last:border-0">
                      <span className="font-medium text-slate-200">{ach.title}</span>
                      <span className="text-slate-400 font-mono text-[11px] shrink-0 ml-2">{ach.date}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
