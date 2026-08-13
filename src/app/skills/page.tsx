import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Brain, ShieldCheck, Database, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skills Matrix',
  description: 'Technical and Responsible AI skills matrix of Jessica Osta.',
};

const skillCategories = [
  {
    title: 'AI/ML & Frameworks',
    icon: Brain,
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Hugging Face Transformers'],
  },
  {
    title: 'Responsible AI & Ethics',
    icon: ShieldCheck,
    skills: ['Algorithmic Fairness', 'SHAP & LIME (XAI)', 'Differential Privacy', 'NIST AI RMF', 'EU AI Act Governance'],
  },
  {
    title: 'Data & Engineering',
    icon: Database,
    skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Data Pipeline Engineering'],
  },
  {
    title: 'Full-Stack & Systems',
    icon: Cpu,
    skills: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Git / GitHub', 'Vercel Edge'],
  },
];

export default function SkillsPage() {
  return (
    <div className="py-8 space-y-8">
      <Section
        title="Skills & Expertise Matrix"
        subtitle="Categorized technical proficiencies across machine learning, responsible governance, and web architecture."
        badge="Technical Matrix"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Card key={cat.title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle>{cat.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-sm font-medium text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
