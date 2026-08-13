import { SiteConfig } from '@/types/portfolio';

export const siteConfig: SiteConfig = {
  name: 'Jessica Osta',
  title: 'Jessica Osta Portfolio | AI/ML & Responsible AI Architecture',
  description:
    'Full-stack personal, academic, and professional portfolio of Jessica Osta, specializing in Artificial Intelligence, Machine Learning, Generative AI, and Responsible AI governance.',
  url: 'https://jessica-osta-portfolio.vercel.app', // Placeholder Vercel URL
  ogImage: '/og-image.png',
  focusAreas: [
    'AI / ML Architecture',
    'Generative AI',
    'Responsible AI & Governance',
    'Algorithmic Fairness & Bias Auditing',
    'Full-Stack Systems Engineering',
  ],
  mainNav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Responsible AI', href: '/responsible-ai', badge: 'Core' },
    { label: 'Skills', href: '/skills' },
    { label: 'Experience', href: '/experience' },
    { label: 'Achievements', href: '/achievements' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '/contact' },
  ],
  socials: [
    { name: 'GitHub', url: 'https://github.com/jessica-ostaChrist28', icon: 'Github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jessica-john-osta-511267321', icon: 'Linkedin' },
    { name: 'Email', url: 'mailto:jessicaostawork@gmail.com', icon: 'Mail' },
  ],
};
