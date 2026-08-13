'use client';

import * as React from 'react';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/content/site-config';

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');
    // Phase 1 Architecture Validation Mock
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <div className="py-8 space-y-8">
      <Section
        title="Get in Touch"
        subtitle="Open for technical collaborations, academic research, and professional inquiries."
        badge="Contact & Connect"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Details & Links */}
          <div className="space-y-6">
            <Card className="border-slate-800">
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
                <CardDescription>
                  Reach out directly via email or social platforms.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <a
                  href={siteConfig.socials.find((s) => s.name === 'Email')?.url || 'mailto:contact@jessicaosta.com'}
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-sky-500/50 text-slate-300 hover:text-sky-400 transition-all"
                >
                  <Mail className="w-5 h-5 text-sky-400" />
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block uppercase">Direct Email</span>
                    <span className="font-mono text-xs text-slate-200">contact@jessicaosta.com</span>
                  </div>
                </a>

                <a
                  href={siteConfig.socials.find((s) => s.name === 'GitHub')?.url || 'https://github.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-sky-500/50 text-slate-300 hover:text-sky-400 transition-all"
                >
                  <Github className="w-5 h-5 text-sky-400" />
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block uppercase">GitHub</span>
                    <span className="text-xs text-slate-200">View Repositories</span>
                  </div>
                </a>

                <a
                  href={siteConfig.socials.find((s) => s.name === 'LinkedIn')?.url || 'https://linkedin.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-sky-500/50 text-slate-300 hover:text-sky-400 transition-all"
                >
                  <Linkedin className="w-5 h-5 text-sky-400" />
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block uppercase">LinkedIn</span>
                    <span className="text-xs text-slate-200">Connect Professionally</span>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form Architecture */}
          <div className="md:col-span-2">
            <Card className="border-slate-800 p-6 md:p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl">Send a Message</CardTitle>
                <CardDescription>
                  Form validation and state architecture ready for Phase 1.
                </CardDescription>
              </CardHeader>

              <CardContent className="px-0 pb-0">
                {status === 'success' ? (
                  <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h3 className="text-lg font-bold text-slate-100">Message Validation Successful</h3>
                    <p className="text-sm text-slate-300">
                      Phase 1 contact form state handling verified. External mail service integration will be configured in future phases.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setStatus('idle')}
                      className="mt-2"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {status === 'error' && (
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-semibold text-slate-300 uppercase">
                          Name <span className="text-sky-400">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-sky-400 focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold text-slate-300 uppercase">
                          Email <span className="text-sky-400">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-sky-400 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-xs font-semibold text-slate-300 uppercase">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Inquiry Topic / Opportunity"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-sky-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-semibold text-slate-300 uppercase">
                        Message <span className="text-sky-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share your message or project inquiry..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-sky-400 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{status === 'submitting' ? 'Submitting...' : 'Send Message'}</span>
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
