'use client';

import * as React from 'react';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Brain, ShieldCheck, Database, Cpu, Wrench, Sparkles, Code2, Terminal } from 'lucide-react';
import { initialSkillCategories } from '@/content/data-architecture';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  'AI / ML & Deep Learning': Brain,
  'Responsible AI & Governance': ShieldCheck,
  'Programming & Data': Terminal,
  'Frontend & Web Systems': Cpu,
  'Tools & Workflow': Wrench,
};

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = React.useState<string>('All');

  const categories = ['All', ...initialSkillCategories.map((c) => c.title)];

  const filteredCategories = activeCategory === 'All'
    ? initialSkillCategories
    : initialSkillCategories.filter((c) => c.title === activeCategory);

  return (
    <div className="py-8 space-y-10">
      <Section
        title="Technical & Responsible AI Matrix"
        subtitle="Categorized skill set across machine learning algorithms, responsible governance, full-stack systems, and software engineering."
        badge="Skills & Competencies"
      >
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer border',
                  isActive
                    ? 'bg-sky-500 text-slate-950 border-sky-400 shadow-md shadow-sky-500/20'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-slate-100'
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat) => {
            const Icon = iconMap[cat.title] || Sparkles;
            const isRai = cat.title.includes('Responsible AI');

            return (
              <Card key={cat.title} className="glass-panel-hover flex flex-col justify-between">
                <div>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        'p-2.5 rounded-lg border',
                        isRai
                          ? 'bg-purple-500/10 border-purple-500/30 text-purple-400'
                          : 'bg-sky-500/10 border-sky-500/30 text-sky-400'
                      )}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-slate-100">{cat.title}</CardTitle>
                        <CardDescription className="text-xs text-slate-400 mt-1">
                          {cat.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-2">
                    <div className="flex flex-wrap gap-2.5">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill}
                          className={cn(
                            'px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 border',
                            isRai
                              ? 'bg-purple-950/40 text-purple-200 border-purple-800/50 hover:border-purple-500/50 hover:bg-purple-900/50'
                              : 'bg-slate-800/80 text-slate-200 border-slate-700/80 hover:border-sky-500/40 hover:bg-slate-800'
                          )}
                        >
                          <span className={cn('w-1.5 h-1.5 rounded-full', isRai ? 'bg-purple-400' : 'bg-sky-400')} />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
