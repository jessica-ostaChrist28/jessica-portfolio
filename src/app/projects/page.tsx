import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { initialProjects } from '@/content/data-architecture';
import { Code2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Technical projects in Artificial Intelligence, Machine Learning, and Full-Stack Engineering.',
};

export default function ProjectsPage() {
  return (
    <div className="py-8 space-y-8">
      <Section
        title="Technical Projects"
        subtitle="Full-stack AI/ML software systems and engineering demonstrations."
        badge="Project Gallery"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {initialProjects.map((project) => (
            <Card key={project.id} className="flex flex-col justify-between">
              <div>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </div>

              <CardFooter className="justify-between">
                <span className="text-xs text-slate-500 font-mono">
                  {project.publishedAt}
                </span>
                <Button variant="ghost" size="sm" className="gap-1 text-sky-400">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
