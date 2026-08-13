import { Project } from '@/types/portfolio';
import { RaiCaseStudy } from '@/types/rai';

/**
 * Technical Projects Scaffolding
 * Static, type-safe project collection ready for V1 content.
 */
export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    slug: 'responsible-ai-audit-toolkit',
    title: 'Responsible AI Audit & Governance Toolkit',
    tagline: 'Framework for bias auditing and algorithmic fairness metrics calculation',
    description:
      'A comprehensive auditing framework designed to evaluate algorithmic fairness, demographic parity, and privacy risks across machine learning models.',
    categories: ['Responsible AI', 'AI/ML', 'Research'],
    techStack: ['Python', 'TypeScript', 'Next.js', 'PyTorch', 'SHAP'],
    featured: true,
    publishedAt: '2026-01-15',
  },
  {
    id: 'proj-2',
    slug: 'genai-interpretability-visualizer',
    title: 'Generative AI Interpretability Visualizer',
    tagline: 'Interactive feature attribution visualizer for large language model attention outputs',
    description:
      'An interactive web interface visualizing attention weights and layer attribution to improve transparency and explainability in Generative AI outputs.',
    categories: ['Generative AI', 'Explainability (XAI)', 'AI/ML'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI'],
    featured: true,
    publishedAt: '2026-02-01',
  },
];

/**
 * Responsible AI Case Study Scaffolding
 * Strictly structured across the 15 required analytical dimensions.
 */
export const initialRaiCaseStudies: RaiCaseStudy[] = [
  {
    id: 'rai-1',
    slug: 'algorithmic-bias-credit-scoring-audit',
    title: 'Auditing Algorithmic Bias in Automated Decision Systems',
    subtitle: 'A 15-Point Case Study on Demographic Parity, Disparate Impact, and Harms Mitigation',
    category: 'Algorithmic Bias & Fairness',
    publishedAt: '2026-02-10',
    readTimeMinutes: 12,
    featured: true,
    summary:
      'A rigorous case study analyzing algorithmic bias, stakeholder risk, privacy safeguards, explainability mechanisms, and governance recommendations in automated decision systems.',
    context: {
      problemStatement:
        'Automated scoring systems can propagate historical biases present in training data, resulting in disparate impact across protected demographic groups.',
      background:
        'Machine learning models deployed in high-stakes domains require continuous auditing to ensure equity, transparency, and regulatory compliance.',
      domain: 'Automated Decision Systems & Risk Scoring',
    },
    stakeholders: [
      {
        group: 'Primary System Users',
        role: 'Direct User',
        impactDescription: 'Operators seeking accurate, automated decision support.',
      },
      {
        group: 'Affected Individuals',
        role: 'Vulnerable Population',
        impactDescription: 'Subjects of automated scoring whose outcomes impact access to resources.',
      },
    ],
    risks: [
      {
        id: 'r1',
        category: 'Fairness',
        riskName: 'Disparate Impact',
        likelihood: 'High',
        severity: 'Critical',
        description: 'Risk of non-uniform accuracy rates across demographic subgroups.',
      },
    ],
    biasAnalysis: {
      datasetSources: ['Historical decision datasets', 'Demographic census statistics'],
      identifiedBiases: ['Historical sampling bias', 'Proxy variable correlation bias'],
      auditMethodology: 'Demographic Parity & Equalized Odds statistical testing',
    },
    fairness: {
      definitionUsed: 'Equalized Odds & Disparate Impact Ratio >= 0.80',
      metrics: [
        {
          metricName: 'Disparate Impact Ratio',
          targetThreshold: '>= 0.80',
          observedValue: '0.85',
          status: 'Pass',
          notes: 'Achieved after re-weighting mitigation.',
        },
      ],
      evaluationSummary: 'Initial baseline exhibited variance across subgroups; post-processing re-calibration resolved disparate impact variance.',
    },
    privacy: {
      dataConsent: 'Explicit opt-in with anonymized feature extraction',
      anonymizationTechniques: ['Differential Privacy (epsilon=1.0)', 'k-Anonymity (k=5)'],
      complianceFrameworks: ['GDPR Article 22', 'NIST AI RMF 1.0'],
    },
    transparency: {
      documentationType: ['Model Card v2.0', 'Datasheet for Dataset'],
      disclosurePolicy: 'Full disclosure of input feature weightings and confidence thresholds.',
    },
    explainability: {
      techniquesUsed: ['SHAP (SHapley Additive exPlanations)', 'Counterfactual Explanations'],
      interpretabilityTargetAudience: 'End-users and compliance auditors',
      limitations: 'Local SHAP values approximate non-linear feature interactions.',
    },
    humanOversight: {
      oversightLevel: 'Human-in-the-Loop',
      fallbackMechanisms: 'Low confidence scores (<0.70) trigger mandatory human review.',
      overrideProtocol: 'Qualified human auditors possess authority to override model outputs.',
    },
    potentialHarms: [
      {
        type: 'Allocative',
        harmDescription: 'Unintended denial of opportunities due to proxy feature bias.',
        affectedGroup: 'Historically underrepresented demographic groups',
        severity: 'High',
      },
    ],
    mitigationStrategies: [
      {
        phase: 'Pre-processing',
        strategy: 'Re-weighting training samples to balance subgroup representation.',
        effectivenessSummary: 'Reduced raw bias disparity by 65%.',
      },
      {
        phase: 'In-processing',
        strategy: 'Adversarial debiasing loss penalty during model training.',
        effectivenessSummary: 'Maintained model utility while satisfying equalized odds bounds.',
      },
    ],
    governance: {
      accountabilityChain: 'Data Science Lead -> Ethics Review Board -> Chief Compliance Officer',
      applicableStandards: ['NIST AI Risk Management Framework 1.0', 'EU AI Act High-Risk Requirements'],
      auditCadence: 'Quarterly algorithmic audits + continuous data drift monitoring',
    },
    recommendations: [
      'Maintain continuous post-deployment monitoring for data distribution shifts.',
      'Provide plain-language recourse explanations to all affected individuals.',
    ],
    reflection:
      'Responsible AI requires viewing technical optimization as a subset of broader socio-technical systems governance.',
    references: [
      {
        id: 'ref-1',
        title: 'NIST Artificial Intelligence Risk Management Framework (AI RMF 1.0)',
        citationString: 'National Institute of Standards and Technology (2023). NIST AI RMF 1.0.',
      },
    ],
  },
];
