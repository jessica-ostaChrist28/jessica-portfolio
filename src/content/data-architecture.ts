import { Project } from '@/types/portfolio';
import { RaiCaseStudy } from '@/types/rai';

/**
 * Jessica John Osta — Technical Projects Collection
 * Linked directly to official GitHub repositories (https://github.com/jessica-ostaChrist28)
 */
export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    slug: 'multi-modal-rag-system-document-intelligence',
    title: 'Multi-Modal RAG System for Document Intelligence',
    tagline: 'Intelligent, context-aware document processing across PDFs, images, and text',
    description:
      'Engineered a multi-modal Retrieval-Augmented Generation (RAG) system to process and query complex document formats (PDFs, images, text), enabling intelligent, context-aware information retrieval through an AI-driven interface.',
    categories: ['Generative AI', 'AI/ML'],
    techStack: ['Python', 'Vector Databases', 'Data Engineering'],
    featured: true,
    githubUrl: 'https://github.com/jessica-ostaChrist28',
    publishedAt: '2026-05',
  },
  {
    id: 'proj-2',
    slug: 'spam-email-detector',
    title: 'Spam Email Detector',
    tagline: 'End-to-end NLP classification model built with TensorFlow & LSTM layers',
    description:
      'Developed an end-to-end spam classification model using TensorFlow and NLP techniques; implemented tokenization, padding, and LSTM layers to achieve high accuracy in distinguishing between spam and legitimate emails.',
    categories: ['AI/ML', 'Machine Learning'],
    techStack: ['Python', 'TensorFlow', 'NLP (LSTM)'],
    featured: true,
    githubUrl: 'https://github.com/jessica-ostaChrist28',
    publishedAt: '2026-04',
  },
  {
    id: 'proj-3',
    slug: 'cgpa-calculator',
    title: 'CGPA Calculator',
    tagline: 'Full-stack academic tracking app with authentication & dynamic credit math',
    description:
      'Built a full-stack web application for academic tracking featuring secure user authentication and dynamic CGPA calculations based on custom credit and grade inputs.',
    categories: ['Full-Stack', 'Web Systems'],
    techStack: ['Python', 'HTML', 'CSS', 'REST APIs'],
    featured: true,
    githubUrl: 'https://github.com/jessica-ostaChrist28',
    publishedAt: '2026-03',
  },
  {
    id: 'proj-4',
    slug: 'weathervista',
    title: 'WeatherVista',
    tagline: 'Real-time weather tracking dashboard integrated with OpenWeatherMap API',
    description:
      'Created a real-time weather tracking dashboard by integrating the OpenWeatherMap API, focusing on responsive UI design and efficient backend API routing.',
    categories: ['Full-Stack', 'Web Systems'],
    techStack: ['Python', 'HTML', 'CSS', 'REST API Integration', 'Responsive Web Design'],
    featured: false,
    githubUrl: 'https://github.com/jessica-ostaChrist28',
    publishedAt: '2026-02',
  },
  {
    id: 'proj-5',
    slug: 'arduino-smart-catapult',
    title: 'Arduino-Powered Smart Catapult',
    tagline: 'Autonomous embedded system with object-sensing & motorized actuation',
    description:
      'Designed an autonomous embedded system utilizing object-sensing technology and motorized actuation to detect and engage targets, showcasing integration between hardware sensors and software logic.',
    categories: ['Embedded & IoT'],
    techStack: ['Arduino', 'Embedded C', 'Sensor Fusion'],
    featured: false,
    githubUrl: 'https://github.com/jessica-ostaChrist28',
    publishedAt: '2025-11',
  },
  {
    id: 'proj-6',
    slug: 'arduino-fire-extinguishing-robot',
    title: 'Arduino-Powered Fire Extinguishing Robot',
    tagline: 'Autonomous fire detection & suppression robot with IR sensors & L298 motor control',
    description:
      'Engineered an autonomous robot for fire detection and suppression using real-time IR sensor processing and motor driver logic to navigate environments and activate extinguishing mechanisms.',
    categories: ['Embedded & IoT'],
    techStack: ['Arduino', 'IR Sensors', 'Motor Control (L298)'],
    featured: false,
    githubUrl: 'https://github.com/jessica-ostaChrist28',
    publishedAt: '2025-10',
  },
];

/**
 * Patents & Copyrights
 */
export const initialPatents = [
  {
    id: 'pat-1',
    title: 'MedSpeak QR: An AI-Powered Method for Simplifying Medical Reports',
    status: 'Filed Dec 2025 | Registered Copyright',
    registrationNumber: 'Certificate No. LD-20260190206',
    issuer: 'Copyright Office, Government of India',
    summary:
      'Co-authored an AI-powered system that converts complex medical reports into simple, local-language audio via QR codes, enabling patients to easily understand diagnoses, medicines, benefits, and side effects. Credited as Author and Owner under Copyright Act, 1957.',
    date: 'Dec 2025',
  },
];

/**
 * Certifications
 */
export const initialCertifications = [
  { title: 'Gen AI Engineering Mastermind', issuer: 'OutSkill', date: 'May 2026' },
  { title: 'AI Tools Workshop', issuer: 'Be10x', date: 'January 2026' },
  { title: 'Introduction to Large Language Models (LLMs)', issuer: 'NPTEL', date: 'October 2025' },
  { title: 'Cyber Security and Privacy', issuer: 'NPTEL', date: 'October 2025' },
  { title: 'AI Fundamentals', issuer: 'IBM SkillsBuild', date: 'September 2025' },
  { title: 'Python Programming: A Practical Approach', issuer: 'Udemy', date: 'September 2025' },
  { title: 'Introduction to Modern AI', issuer: 'Cisco Networking Academy', date: 'July 2025' },
  { title: 'MongoDB Basics for Students', issuer: 'MongoDB University', date: 'June 2025' },
];

/**
 * Achievements & Hackathons
 */
export const initialAchievementsList = [
  { title: 'Participated in NASA Space Apps Challenge 24-Hour Hackathon', date: '2025' },
  { title: 'Participated in Google Cloud Agent AI Day Hackathon', date: '2026' },
  { title: 'Best Actor Award — BOSCO Showtime, Don Bosco School, Liluah', date: '2023' },
  { title: 'Third Place — State Level Kickboxing Championship, Jadavpur University', date: '2017' },
  { title: 'Trained Classical Dancer — Kathak and Bharatanatyam', date: 'Ongoing' },
];

/**
 * Academic & Professional Experience
 */
export const initialExperiences = [
  {
    id: 'exp-1',
    role: 'Student Intern',
    organization: 'Samsung',
    location: 'Bengaluru, India (Remote)',
    period: 'April 2026 – May 2026',
    type: 'Industry' as const,
    description: [
      'Engaged in training sessions to enhance technical skills, fostering professional growth and development.',
      'Collaborated with cross-functional teams to support project timelines and deliverables effectively.',
      'Participated in team meetings, sharing ideas that contributed to innovative solutions and strategies.',
    ],
    skillsUsed: ['Python', 'Machine Learning', 'Software Engineering'],
    featured: true,
  },
  {
    id: 'exp-2',
    role: 'Content Writer',
    organization: 'InAmigos Foundation (IAF)',
    location: 'Kolkata, India (Remote)',
    period: 'May 2026',
    type: 'Leadership' as const,
    description: [
      'Wrote and edited high-quality, visually impactful content under deadline pressure with an engaging, authentic approach.',
      'Completed thorough research into assigned topics and improved content quality by incorporating industry trends.',
    ],
    skillsUsed: ['Technical Writing', 'Research', 'Communication'],
    featured: true,
  },
  {
    id: 'exp-3',
    role: 'Bachelor of Technology in Computer Science',
    organization: 'Christ (Deemed to be University)',
    location: 'Bangalore – Kengeri Campus',
    period: 'Expected May 2028',
    type: 'Academic' as const,
    description: [
      'Pursuing B.Tech in Computer Science Engineering focusing on AI/ML, data structures, algorithms, and web systems.',
      'Senior Secondary (Class XII) — ISC: 93.25% (St. Agnes\' Convent School, Howrah).',
      'Secondary (Class X) — ICSE: 94.6% (St. Agnes\' Convent School, Howrah).',
    ],
    skillsUsed: ['Python', 'Java', 'C', 'HTML', 'CSS', 'Data Structures'],
    featured: true,
  },
];

/**
 * Confirmed Skills Matrix Architecture
 */
export const initialSkillCategories = [
  {
    title: 'AI / ML & Deep Learning',
    description: 'Machine Learning, Model Training & Evaluation, Deep Learning, NLP, RAG, Computer Vision',
    skills: [
      'Machine Learning',
      'Model Training & Evaluation',
      'TensorFlow',
      'NLP (LSTM)',
      'PyTorch',
      'Vector Databases',
      'RAG',
    ],
  },
  {
    title: 'Responsible AI & Ethics',
    description: 'Algorithmic accountability, fairness metrics, explainability, and governance compliance.',
    skills: [
      'Algorithmic Fairness',
      'SHAP & LIME (XAI)',
      'Differential Privacy',
      'NIST AI RMF',
      'EU AI Act Governance',
    ],
  },
  {
    title: 'Languages & Programming',
    description: 'Core programming languages for machine learning and full-stack software development.',
    skills: ['Python', 'Java', 'C', 'JavaScript', 'TypeScript', 'Embedded C', 'HTML', 'CSS'],
  },
  {
    title: 'Tools & Platforms',
    description: 'Developer tooling, hardware sensors, and cloud environments.',
    skills: ['Git', 'GitHub', 'Visual Studio Code', 'Google Colab', 'Arduino', 'REST APIs'],
  },
];

/**
 * Responsible AI Case Studies (5 Assignments)
 */
export const initialRaiCaseStudies: RaiCaseStudy[] = [
  {
    id: 'rai-1',
    slug: 'responsible-ai-heart-disease-prediction',
    title: 'Human-in-the-Loop AI Heart Disease Prediction System',
    subtitle: 'A 15-Point Case Study on Clinical Decision Support, SHAP/LIME Explainability, and Demographic Equity',
    category: 'Human-in-the-Loop Oversight',
    publishedAt: '2026-08-10',
    readTimeMinutes: 15,
    featured: true,
    pdfUrl: '/documents/Responsible_AI_Heart_Disease_Prediction.docx.pdf',
    summary:
      'An end-to-end Responsible AI architecture for early cardiovascular risk prediction. Combines interpretable model selection (Logistic Regression / Random Forest / XGBoost) with SHAP/LIME feature attribution, clinician override protocols, demographic parity metrics, and energy-efficient model design.',
    context: {
      problemStatement:
        'Cardiovascular disease is a leading cause of global mortality. While AI can assist clinicians in identifying high-risk patients early, black-box medical predictions without explainability or human oversight pose severe misdiagnosis, accountability, and demographic bias risks.',
      background:
        'Designed as an AI-assisted decision-support system keeping qualified doctors firmly in control of diagnosis and treatment plans.',
      domain: 'Healthcare AI & Clinical Risk Support',
      deploymentScale: 'Clinical Decision Support Pipeline',
    },
    stakeholders: [
      {
        group: 'Healthcare Professionals (Doctors & Clinicians)',
        role: 'Direct User',
        impactDescription: 'Receive probability risk scores and SHAP/LIME explanations to assist clinical judgment.',
      },
      {
        group: 'Patients',
        role: 'Vulnerable Population',
        impactDescription: 'Directly affected by prediction accuracy, diagnostic equity, and data privacy.',
      },
      {
        group: 'Hospital Administration & Developers',
        role: 'Deployer / Operator',
        impactDescription: 'Accountable for system safety, HIPAA/DPDP compliance, and model maintenance.',
      },
    ],
    risks: [
      {
        id: 'r1',
        category: 'Safety & Clinical Risk',
        riskName: 'Misdiagnosis Risk (False Negatives / Positives)',
        likelihood: 'Medium',
        severity: 'Critical',
        description: 'False negatives could delay crucial medical treatment; false positives cause patient distress and unnecessary procedures.',
      },
    ],
    biasAnalysis: {
      datasetSources: ['UCI Heart Disease Dataset', 'Multi-center patient demographic registries'],
      identifiedBiases: ['Historical underrepresentation of specific age and gender demographics in training samples'],
      auditMethodology: 'Subgroup accuracy variance testing and Demographic Parity statistical audits across age, sex, and ethnicity',
    },
    fairness: {
      definitionUsed: 'Equalized Odds & Demographic Parity (Disparate Impact Ratio >= 0.80)',
      metrics: [
        {
          metricName: 'Disparate Impact Ratio',
          targetThreshold: '>= 0.80',
          observedValue: '0.88',
          status: 'Pass',
          notes: 'Tested across age groups and gender subgroups.',
        },
      ],
      evaluationSummary: 'Evaluated separately for men vs. women and younger vs. older cohorts to guarantee uniform predictive equity.',
    },
    privacy: {
      dataConsent: 'Informed consent obtained prior to data processing; patient-level access restricted to authorized medical staff',
      anonymizationTechniques: ['De-identification & PII masking', 'AES-256 Encryption in transit and at rest'],
      complianceFrameworks: ['HIPAA', 'India DPDP Act', 'Local Healthcare Regulations'],
    },
    transparency: {
      documentationType: ['Model Card v2.0', 'Dataset Datasheet'],
      disclosurePolicy: 'Full disclosure to patients that risk scores are AI-generated decision-support aids, not final diagnoses.',
    },
    explainability: {
      techniquesUsed: ['SHAP (SHapley Additive exPlanations)', 'LIME (Local Interpretable Model-agnostic Explanations)'],
      interpretabilityTargetAudience: 'Attending physicians, cardiologists, and compliance auditors',
      limitations: 'SHAP values reflect statistical correlation within training distribution.',
    },
    humanOversight: {
      oversightLevel: 'Human-in-the-Loop',
      fallbackMechanisms: 'Borderline predictions near 50% risk threshold trigger mandatory second-doctor review.',
      overrideProtocol: 'Clinicians retain full authority to override AI risk scores and flag incorrect outputs.',
    },
    potentialHarms: [
      {
        type: 'Safety',
        harmDescription: 'Unintended harm from misclassification of cardiovascular risk.',
        affectedGroup: 'High-risk medical patients',
        severity: 'Critical',
      },
    ],
    mitigationStrategies: [
      {
        phase: 'Pre-processing',
        strategy: 'Re-balancing training datasets across demographic subgroups.',
        effectivenessSummary: 'Eliminated disparate impact disparity across gender groups.',
      },
    ],
    governance: {
      applicableStandards: ['NIST AI Risk Management Framework 1.0', 'ISO/IEC 42001 AI Management'],
      accountabilityChain: 'Attending Physician -> Hospital Chief Medical Officer -> AI Ethics Compliance Lead',
      auditCadence: 'Bi-annual model re-audit & continuous data drift monitoring',
    },
    recommendations: [
      'Maintain human doctor confirmation on 100% of diagnostic decisions.',
      'Conduct regular re-evaluations as new diverse clinical data becomes available.',
      'Deploy lightweight models to minimize datacenter energy consumption (Sustainability).',
    ],
    reflection:
      'In clinical AI, high overall accuracy is meaningless without subgroup fairness, explicit explainability, and mandatory doctor-in-the-loop oversight.',
    references: [
      {
        id: 'ref-1',
        title: 'UCI Machine Learning Repository: Heart Disease Dataset',
        citationString: 'Janosi, A., Steinbrunn, W., Pfisterer, M., & Detrano, R. (1988). Heart Disease Dataset.',
      },
    ],
  },
  {
    id: 'rai-2',
    slug: 'ethical-ai-model-design',
    title: 'Ethical AI Model Design Challenge',
    subtitle: 'Designing an Ethical AI Solution for fairness and accountability',
    category: 'Algorithmic Bias & Fairness',
    publishedAt: '2026-08',
    readTimeMinutes: 10,
    featured: true,
    pdfUrl: '/documents/Ethical%20AI%20Model%20Design%20Challenge%20Designing%20an%20Ethical%20AI%20Solution.pdf',
    summary: 'A deep dive into designing an ethical AI solution, mapping out the problem space, potential biases, and ensuring a human-centric approach to AI deployments.',
    context: {
      problemStatement: 'Identifying and mitigating inherent biases in AI model design.',
      background: 'Ethical AI Model Design Challenge assignment.',
      domain: 'AI Ethics & Fairness',
    },
    stakeholders: [],
    risks: [],
    biasAnalysis: {
      datasetSources: ['Synthetic Data', 'Historical Data'],
      identifiedBiases: ['Historical Bias', 'Representation Bias'],
      auditMethodology: 'Fairness impact assessment',
    },
    fairness: {
      definitionUsed: 'Demographic Parity',
      metrics: [],
      evaluationSummary: 'Evaluated for equal representation across key groups.',
    },
    privacy: {
      dataConsent: 'Simulated consent protocols',
      anonymizationTechniques: ['Data masking'],
      complianceFrameworks: ['GDPR principles'],
    },
    transparency: {
      documentationType: ['Model Card'],
      disclosurePolicy: 'Full transparency on model limitations',
    },
    explainability: {
      techniquesUsed: ['Feature Importance'],
      interpretabilityTargetAudience: 'General public and auditors',
      limitations: 'Proxy variables may still carry bias.',
    },
    humanOversight: {
      oversightLevel: 'Human-in-Command',
      fallbackMechanisms: 'Manual review for critical decisions',
      overrideProtocol: 'User override enabled',
    },
    potentialHarms: [],
    mitigationStrategies: [],
    governance: {
      applicableStandards: ['IEEE Ethically Aligned Design'],
      accountabilityChain: 'Developer -> Ethics Board',
      auditCadence: 'Annual',
    },
    recommendations: ['Implement continuous fairness monitoring.'],
    reflection: 'Ethical design must be proactive, not reactive.',
    references: [],
  },
  {
    id: 'rai-3',
    slug: 'microsoft-tay-analysis',
    title: 'Microsoft\'s Tay: A Case Study in AI Safety',
    subtitle: 'Analyzing the failure modes and safety vulnerabilities of a conversational AI',
    category: 'Generative AI Harms & Safety',
    publishedAt: '2026-08',
    readTimeMinutes: 12,
    featured: true,
    pdfUrl: '/documents/Microsoft\'s%20Tay.pdf',
    summary: 'An analysis of Microsoft Tay\'s deployment on Twitter, focusing on adversarial attacks, lack of input sanitization, and the rapid degradation of conversational safety.',
    context: {
      problemStatement: 'Unconstrained learning in public conversational AI systems.',
      background: 'Analysis of the 2016 Microsoft Tay chatbot incident.',
      domain: 'Conversational AI & Safety',
    },
    stakeholders: [],
    risks: [],
    biasAnalysis: {
      datasetSources: ['Twitter Interactions'],
      identifiedBiases: ['Adversarial exploitation', 'Hate speech amplification'],
      auditMethodology: 'Post-mortem incident analysis',
    },
    fairness: {
      definitionUsed: 'Safety and Non-Maleficence',
      metrics: [],
      evaluationSummary: 'System failed to filter malicious adversarial inputs.',
    },
    privacy: {
      dataConsent: 'Public interactions',
      anonymizationTechniques: [],
      complianceFrameworks: [],
    },
    transparency: {
      documentationType: ['Incident Report'],
      disclosurePolicy: 'Public apology and shutdown',
    },
    explainability: {
      techniquesUsed: [],
      interpretabilityTargetAudience: 'AI Researchers',
      limitations: 'Black-box neural responses.',
    },
    humanOversight: {
      oversightLevel: 'Human-on-the-Loop',
      fallbackMechanisms: 'Emergency shutdown',
      overrideProtocol: 'System taken offline within 24 hours',
    },
    potentialHarms: [],
    mitigationStrategies: [],
    governance: {
      applicableStandards: ['AI Safety Guidelines'],
      accountabilityChain: 'Microsoft Research Team',
      auditCadence: 'N/A',
    },
    recommendations: ['Implement robust input sanitization and adversarial robustness checks before public deployment.'],
    reflection: 'Public-facing AI requires bounded learning to prevent exploitation.',
    references: [],
  },
  {
    id: 'rai-4',
    slug: 'pinterest-responsible-data-audit',
    title: 'Pinterest Responsible Data Audit',
    subtitle: 'Evaluating data privacy, governance, and algorithmic recommendation ethics',
    category: 'Privacy & Data Protection',
    publishedAt: '2026-08',
    readTimeMinutes: 15,
    featured: true,
    pdfUrl: '/documents/Pinterest_Responsible_Data_Audit%20Pinterest.pdf',
    summary: 'A comprehensive audit of Pinterest\'s data practices, examining user consent, data monetization, and the ethical implications of their recommendation algorithms.',
    context: {
      problemStatement: 'Balancing personalized recommendations with user privacy.',
      background: 'Responsible Data Audit of Pinterest\'s platform.',
      domain: 'Social Media & Recommendation Systems',
    },
    stakeholders: [],
    risks: [],
    biasAnalysis: {
      datasetSources: ['User behavioral data', 'Image metadata'],
      identifiedBiases: ['Echo chamber effects', 'Algorithmic amplification'],
      auditMethodology: 'Data flow mapping and privacy impact assessment',
    },
    fairness: {
      definitionUsed: 'Representational Fairness',
      metrics: [],
      evaluationSummary: 'Assessed diversity in search results and recommendations.',
    },
    privacy: {
      dataConsent: 'Terms of Service & Cookie Consent',
      anonymizationTechniques: ['Pseudonymization'],
      complianceFrameworks: ['CCPA', 'GDPR'],
    },
    transparency: {
      documentationType: ['Privacy Policy Audit'],
      disclosurePolicy: 'User controls over data sharing',
    },
    explainability: {
      techniquesUsed: [],
      interpretabilityTargetAudience: 'Users and Regulators',
      limitations: 'Complex multi-modal embedding spaces.',
    },
    humanOversight: {
      oversightLevel: 'Human-on-the-Loop',
      fallbackMechanisms: 'Content moderation queues',
      overrideProtocol: 'User blocking and reporting tools',
    },
    potentialHarms: [],
    mitigationStrategies: [],
    governance: {
      applicableStandards: ['Internal Data Governance Policies'],
      accountabilityChain: 'Chief Privacy Officer',
      auditCadence: 'Annual Data Audit',
    },
    recommendations: ['Enhance user controls over recommendation algorithms and improve transparency around data monetization.'],
    reflection: 'Visual discovery platforms must prioritize representational equity alongside engagement metrics.',
    references: [],
  }
];
