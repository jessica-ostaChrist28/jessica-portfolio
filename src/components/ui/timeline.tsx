import * as React from 'react';
import { GraduationCap, Sparkles, BookOpen, Layers } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './card';
import { ExperienceItem } from '@/types/portfolio';
import { cn } from '@/lib/utils';

export interface TimelineProps {
  items: ExperienceItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn('relative border-l border-slate-800/80 ml-4 md:ml-8 pl-6 md:pl-10 space-y-10 py-2', className)}>
      {items.map((item, index) => {
        const isAcademic = item.type === 'Academic';
        const isResearch = item.type === 'Research';

        return (
          <div key={item.id} className="relative group">
            {/* Timeline Dot Indicator */}
            <div className={cn(
              'absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full border flex items-center justify-center text-xs transition-all duration-300 group-hover:scale-110 shadow-md',
              isResearch 
                ? 'bg-purple-950/80 border-purple-500/50 text-purple-400 shadow-purple-950/50'
                : 'bg-sky-950/80 border-sky-500/50 text-sky-400 shadow-sky-950/50'
            )}>
              {isResearch ? (
                <Sparkles className="w-3 h-3" />
              ) : isAcademic ? (
                <GraduationCap className="w-3 h-3" />
              ) : (
                <Layers className="w-3 h-3" />
              )}
            </div>

            {/* Card Content */}
            <Card className="glass-panel-hover transition-all">
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <span className={cn(
                    'text-[11px] font-mono px-2.5 py-0.5 rounded-full font-semibold border',
                    isResearch
                      ? 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                      : 'bg-sky-500/10 text-sky-300 border-sky-500/30'
                  )}>
                    {item.period}
                  </span>

                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    {item.type} Milestone
                  </span>
                </div>

                <CardTitle className="text-xl text-slate-100">{item.role}</CardTitle>
                <div className="text-sm font-medium text-sky-400/90 flex items-center gap-2">
                  <span>{item.organization}</span>
                  {item.location && <span className="text-slate-500">• {item.location}</span>}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-slate-300 leading-relaxed list-disc list-inside marker:text-sky-500/60">
                  {item.description.map((bullet, i) => (
                    <li key={i} className="text-slate-300 font-normal">
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {item.skillsUsed && item.skillsUsed.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                    {item.skillsUsed.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/80 text-slate-300 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
