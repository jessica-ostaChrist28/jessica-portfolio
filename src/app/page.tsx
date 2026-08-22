import Link from 'next/link';
import { ArrowRight, ShieldCheck, Cpu, Code2, Brain, Sparkles, GraduationCap, Compass, FileText, Mail, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { initialProjects, initialRaiCaseStudies, initialExperiences, initialSkillCategories } from '@/content/data-architecture';
import { FadeIn, MotionStaggerContainer, MotionStaggerItem } from '@/components/ui/motion';

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section */}
      <Section className="pt-16 md:pt-24 pb-12 relative">
        {/* Ambient Glow Backdrops */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-50 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-20 right-10 w-[450px] h-[280px] bg-indigo-50 rounded-full blur-[110px] pointer-events-none" />

        <Container size="lg" className="relative z-10">
          <div className="max-w-4xl space-y-8">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-indigo-200 bg-indigo-50 text-indigo-600 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-indigo-700" />
                <span>Computer Science & Responsible AI Specialization</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.1]">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-sky-200 to-sky-400">Jessica Osta</span>.
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl text-zinc-600 font-bold block mt-2">
                  Building <span className="gradient-text-ai">Intelligent Systems</span> with <span className="gradient-text-rai">Ethical Accountability</span>.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-3xl">
                Computer Science student specializing in <strong>Artificial Intelligence, Machine Learning, Generative AI</strong>, and <strong>Responsible AI Governance</strong>. Passionate about bridging deep learning innovation with algorithmic fairness, explainability (XAI), and robust systems engineering.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/projects">
                  <Button variant="primary" size="lg" className="gap-2">
                    <Code2 className="w-5 h-5 text-white" />
                    <span>View Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <Link href="/responsible-ai">
                  <Button variant="rai" size="lg" className="gap-2">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Responsible AI Framework</span>
                  </Button>
                </Link>

                <Link href="/resume">
                  <Button variant="outline" size="lg" className="gap-2">
                    <FileText className="w-5 h-5 text-blue-700" />
                    <span>Resume</span>
                  </Button>
                </Link>
              </div>
            </FadeIn>

            {/* Quick Stat Tags */}
            <FadeIn delay={0.5}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-200">
                <div className="space-y-1">
                  <div className="text-xs text-zinc-500 font-medium">Core Discipline</div>
                  <div className="text-sm font-semibold text-zinc-800">AI / Machine Learning</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-zinc-500 font-medium">Research Focus</div>
                  <div className="text-sm font-semibold text-indigo-600">Responsible AI & XAI</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-zinc-500 font-medium">Engineering</div>
                  <div className="text-sm font-semibold text-blue-600">Next.js & PyTorch</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-zinc-500 font-medium">Academic Level</div>
                  <div className="text-sm font-semibold text-zinc-800">Computer Science Student</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* 2. Core Pillars Preview */}
      <Section
        title="Core Focus Pillars"
        subtitle="Bridging theoretical machine learning concepts with socio-technical ethics and modern software systems."
        badge="Technical Domains"
      >
        <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MotionStaggerItem>
            <Card className="glass-panel-hover h-full flex flex-col justify-between">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 mb-3">
                  <Brain className="w-5 h-5" />
                </div>
                <CardTitle>AI & Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Deep neural networks, supervised & unsupervised learning models, NLP pipelines, and computer vision architectures.
                </CardDescription>
              </CardContent>
            </Card>
          </MotionStaggerItem>

          <MotionStaggerItem>
            <Card className="glass-panel-hover h-full flex flex-col justify-between">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <CardTitle>Generative AI & RAG</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Large Language Model (LLM) fine-tuning, Retrieval-Augmented Generation (RAG), and prompt engineering systems.
                </CardDescription>
              </CardContent>
            </Card>
          </MotionStaggerItem>

          <MotionStaggerItem>
            <Card className="glass-panel-hover h-full flex flex-col justify-between">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <CardTitle>Responsible AI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Algorithmic bias detection, SHAP/LIME feature attribution, NIST AI RMF governance, and differential privacy safeguards.
                </CardDescription>
              </CardContent>
            </Card>
          </MotionStaggerItem>

          <MotionStaggerItem>
            <Card className="glass-panel-hover h-full flex flex-col justify-between">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 mb-3">
                  <Cpu className="w-5 h-5" />
                </div>
                <CardTitle>Full-Stack Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Production-grade web platforms engineered with TypeScript, React, Next.js App Router, and scalable API services.
                </CardDescription>
              </CardContent>
            </Card>
          </MotionStaggerItem>
        </MotionStaggerContainer>
      </Section>

      {/* 3. Featured Work Preview */}
      <Section
        title="Featured Engineering Projects"
        subtitle="Selected technical projects demonstrating machine learning, full-stack design, and explainability frameworks."
        badge="Project Showcase"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initialProjects.map((project) => (
            <Card key={project.id} className="flex flex-col justify-between glass-panel-hover border-zinc-200">
              <div>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200"
                      >
                        {cat}
                      </span>
                    ))}
                    {project.featured && (
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200">
                        Featured
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl text-zinc-900">{project.title}</CardTitle>
                  <p className="text-xs font-mono text-zinc-500 mt-1">{project.tagline}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-600 text-sm">
                    {project.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded bg-zinc-100 border border-zinc-200 text-zinc-600 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </div>

              <CardFooter className="justify-between pt-4 border-t border-zinc-200">
                <span className="text-xs text-zinc-400 font-mono">
                  {project.publishedAt}
                </span>
                <Link href="/projects">
                  <Button variant="ghost" size="sm" className="gap-1 text-blue-700 hover:text-blue-600">
                    <span>Explore Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/projects">
            <Button variant="outline" size="md" className="gap-2">
              <span>View All Projects</span>
              <ChevronRight className="w-4 h-4 text-blue-700" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* 4. Responsible AI Spotlight */}
      <Section className="py-12">
        <Card className="border-indigo-200 bg-gradient-to-r from-white via-indigo-50 to-indigo-100/50 p-8 md:p-10 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-50 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-600 border border-indigo-200">
              <ShieldCheck className="w-4 h-4 text-indigo-700" />
              <span>Responsible AI Governance Initiative</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 leading-tight">
              Algorithmic Fairness & 15-Point Socio-Technical Audit
            </h3>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Evaluating machine learning models beyond raw test accuracy. This framework audits demographic parity, disparate impact ratios, privacy protection with differential privacy, model cards, and human-in-the-loop oversight.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/responsible-ai">
                <Button variant="rai" size="md" className="gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Open Responsible AI Portal</span>
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </Section>

      {/* 5. Skills Preview */}
      <Section
        title="Technical Skills Matrix"
        subtitle="Categorized competencies across machine learning, web systems, and ethical governance."
        badge="Skills Overview"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialSkillCategories.slice(0, 3).map((category) => (
            <Card key={category.title} className="glass-panel-hover">
              <CardHeader>
                <CardTitle className="text-lg text-zinc-900">{category.title}</CardTitle>
                <CardDescription className="text-xs">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/skills">
            <Button variant="outline" size="md" className="gap-2">
              <span>View Complete Skills Matrix</span>
              <ArrowRight className="w-4 h-4 text-blue-700" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* 6. Academic Journey Preview */}
      <Section
        title="Academic & Research Journey"
        subtitle="Chronological milestones connecting Computer Science coursework, independent research, and project capstones."
        badge="Milestone Preview"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {initialExperiences.slice(0, 2).map((item) => (
            <Card key={item.id} className="glass-panel-hover">
              <CardHeader>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200 font-semibold">
                    {item.period}
                  </span>
                  <span className="text-xs text-zinc-500 font-medium">{item.type}</span>
                </div>
                <CardTitle className="text-lg text-zinc-900">{item.role}</CardTitle>
                <div className="text-xs font-medium text-blue-700">{item.organization}</div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3">
                  {item.description[0]}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/experience">
            <Button variant="outline" size="md" className="gap-2">
              <GraduationCap className="w-4 h-4 text-blue-700" />
              <span>Explore Timeline</span>
            </Button>
          </Link>
        </div>
      </Section>

      {/* 7. Final Contact CTA */}
      <Section className="py-12">
        <Card className="text-center p-10 border-zinc-200 bg-zinc-50 max-w-3xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 mx-auto">
            <Compass className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-zinc-900">Let&apos;s Connect</h3>
            <p className="text-sm text-zinc-500 max-w-lg mx-auto">
              Interested in collaborating on AI research, machine learning projects, or discussing Responsible AI governance? Feel free to reach out.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/contact">
              <Button variant="primary" size="md" className="gap-2">
                <Mail className="w-4 h-4 text-white" />
                <span>Contact Jessica</span>
              </Button>
            </Link>
            <Link href="/resume">
              <Button variant="outline" size="md" className="gap-2">
                <FileText className="w-4 h-4 text-blue-700" />
                <span>View Resume</span>
              </Button>
            </Link>
          </div>
        </Card>
      </Section>
    </div>
  );
}

