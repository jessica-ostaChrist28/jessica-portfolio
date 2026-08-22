/**
 * Responsible AI Case Study TypeScript Definitions
 * Enforces strict academic and technical rigor across the 15 core dimensions.
 * Jessica Osta Portfolio
 */

export type RaiCategory =
  | 'Algorithmic Bias & Fairness'
  | 'Privacy & Data Protection'
  | 'Explainability (XAI)'
  | 'AI Governance & Compliance'
  | 'Generative AI Harms & Safety'
  | 'Human-in-the-Loop Oversight';

export interface RaiStakeholder {
  group: string;
  role: 'Direct User' | 'Indirectly Affected' | 'Vulnerable Population' | 'Deployer / Operator';
  impactDescription: string;
}

export type RiskSeverity = 'Critical' | 'High' | 'Medium' | 'Low';

export interface RaiRiskItem {
  id: string;
  category: string;
  riskName: string;
  likelihood: 'High' | 'Medium' | 'Low';
  severity: RiskSeverity;
  description: string;
}

export interface FairnessMetric {
  metricName: string;
  targetThreshold: string;
  observedValue?: string;
  status?: 'Pass' | 'Fail' | 'Under Audit';
  notes: string;
}

export interface PotentialHarm {
  type: 'Allocative' | 'Representational' | 'Privacy' | 'Safety' | 'Autonomy';
  harmDescription: string;
  affectedGroup: string;
  severity: RiskSeverity;
}

export interface RaiReference {
  id: string;
  title: string;
  authors?: string;
  publisherOrVenue?: string;
  year?: string;
  url?: string;
  citationString: string;
}

/**
 * 15-Point Responsible AI Case Study Schema
 */
export interface RaiCaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: RaiCategory;
  publishedAt: string;
  readTimeMinutes: number;
  featured: boolean;
  summary: string;
  pdfUrl?: string;

  // 1. Problem / Context
  context: {
    problemStatement: string;
    background: string;
    domain: string;
    deploymentScale?: string;
  };

  // 2. Stakeholders
  stakeholders: RaiStakeholder[];

  // 3. Risks
  risks: RaiRiskItem[];

  // 4. Bias Analysis
  biasAnalysis: {
    datasetSources: string[];
    identifiedBiases: string[];
    auditMethodology: string;
  };

  // 5. Fairness
  fairness: {
    definitionUsed: string;
    metrics: FairnessMetric[];
    evaluationSummary: string;
  };

  // 6. Privacy & Data Protection
  privacy: {
    dataConsent: string;
    anonymizationTechniques: string[];
    complianceFrameworks: string[]; // e.g., GDPR, CCPA
  };

  // 7. Transparency
  transparency: {
    documentationType: string[]; // e.g., Model Cards, Datasheets for Datasets
    systemCardUrl?: string;
    disclosurePolicy: string;
  };

  // 8. Explainability (XAI)
  explainability: {
    techniquesUsed: string[]; // e.g., SHAP, LIME, Integrated Gradients, Counterfactuals
    interpretabilityTargetAudience: string;
    limitations: string;
  };

  // 9. Human Oversight
  humanOversight: {
    oversightLevel: 'Human-in-the-Loop' | 'Human-on-the-Loop' | 'Human-in-Command';
    fallbackMechanisms: string;
    overrideProtocol: string;
  };

  // 10. Potential Harms Assessment
  potentialHarms: PotentialHarm[];

  // 11. Mitigation Strategies
  mitigationStrategies: Array<{
    phase: 'Pre-processing' | 'In-processing' | 'Post-processing' | 'Governance';
    strategy: string;
    effectivenessSummary: string;
  }>;

  // 12. Governance & Compliance
  governance: {
    applicableStandards: string[]; // e.g., NIST AI RMF, EU AI Act, IEEE EAD
    accountabilityChain: string;
    auditCadence: string;
  };

  // 13. Actionable Recommendations
  recommendations: string[];

  // 14. Reflection & Lessons Learned
  reflection: string;

  // 15. References & Academic Sources
  references: RaiReference[];
}
