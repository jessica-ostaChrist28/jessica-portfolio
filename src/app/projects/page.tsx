import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { initialProjects } from '@/content/data-architecture';
import { siteConfig } from '@/content/site-config';
import { Code2, ExternalLink, Github, Linkedin, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects | Jessica Osta',
  description: 'Technical projects and Responsible AI frameworks developed by Jessica Osta. Linked to official GitHub and LinkedIn profiles.',
};

export default function ProjectsPage() {
  const githubUrl = siteConfig.socials.find((s) => s.name === 'GitHub')?.url || 'https://github.com/jessica-ostaChrist28';
  const linkedinUrl = siteConfig.socials.find((s) => s.name === 'LinkedIn')?.url || 'https://www.linkedin.com/in/jessica-john-osta-511267321';

  return (
    <div className="py-8 space-y-10">
      <Section
        title="Technical Projects & Case Studies"
        subtitle="AI/ML software systems, Responsible AI governance frameworks, and interactive web applications."
        badge="Project Showcase"
      >
        {/* Profile Connect Banner */}
        <Card className="mb-10 p-6 border-sky-500/30 bg-slate-900/80 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400">
                <Code2 className="w-4 h-4" />
                <span>Open Source Repositories & Profiles</span>
              </div>
              <h3 className="text-lg font-bold text-slate-100">Explore Code on GitHub & LinkedIn</h3>
              <p className="text-xs text-slate-400">
                All projects are maintained on Jessica Osta&apos;s official GitHub. Connect on LinkedIn for professional updates.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="sm" className="gap-2">
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </a>

              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </a>
            </div>
          </div>
        </Card>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initialProjects.map((project) => (
            <Card key={project.id} className="flex flex-col justify-between glass-panel-hover border-slate-800">
              <div>
                <CardHeader>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      {project.categories.map((cat) => (
                        <span
                          key={cat}
                          className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {project.featured && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        Featured Case Study
                      </span>
                    )}
                  </div>

                  <CardTitle className="text-xl text-slate-100">{project.title}</CardTitle>
                  <p className="text-xs font-mono text-sky-400 mt-1">{project.tagline}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>

                  <div className="space-y-1.5 pt-2">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Tech Stack</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/80 text-slate-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </div>

              <CardFooter className="justify-between pt-4 border-t border-slate-800/80 mt-4">
                <span className="text-xs text-slate-500 font-mono">
                  {project.publishedAt}
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl || githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <Button variant="outline" size="sm" className="gap-1.5 text-xs text-slate-200">
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </Button>
                  </a>

                  <Link href="/responsible-ai" className="inline-flex">
                    <Button variant="ghost" size="sm" className="gap-1 text-xs text-sky-400 hover:text-sky-300">
                      <span>RAI Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
