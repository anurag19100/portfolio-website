export const personalInfo = {
  name: 'Anurag Gupta',
  title: 'Sr. DevOps Engineer',
  company: 'Blackduck',
  location: 'Bengaluru, India',
  email: 'anurag19100@gmail.com',
  phone: '+91 9755863914',
  github: 'https://github.com/anurag19100',
  linkedin: 'https://linkedin.com/in/anurag19100',
  portfolio: 'https://anurag-cv.netlify.app',
  resumeFile: '/anurag_gupta_cv.pdf',
  bio: `DevOps Engineer with ~4 years of experience designing, implementing, and optimizing cloud infrastructure at scale — from BigBasket's quick-commerce platform serving millions with zero downtime, to Blackduck's enterprise security systems trusted by Fortune 500. 4x certified across AWS, GCP, Kubernetes, and Terraform. Strong background in high-availability architecture, CI/CD automation, and cloud-native security. I write raw manifests, dig into system internals, and automate everything that breaks twice.`,
  bioHighlights: [
    { label: 'BigBasket', detail: 'Built resilient, zero-downtime infra for India\'s largest quick-commerce — 100+ microservices, event-driven scaling, $20K/mo savings' },
    { label: 'Blackduck', detail: 'Securing enterprise-grade systems used by Fortune 500 — 1100+ DB migrations, 60+ clusters, Istio service mesh, AI-powered ops' },
  ],
  typingTexts: [
    'Sr. DevOps Engineer',
    'Cloud & Security Professional',
    'Infrastructure Architect',
    'Open Source Contributor',
    'Platform Engineer',
    'Site Reliability Engineer',
  ],
}

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/anurag19100', icon: 'FaGithub', category: 'Developer' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/anurag19100', icon: 'FaLinkedin', category: 'Professional' },
  { name: 'Email', url: 'mailto:anurag19100@gmail.com', icon: 'FaEnvelope', category: 'Contact' },
  { name: 'Portfolio', url: 'https://anurag-cv.netlify.app', icon: 'FaGlobe', category: 'Portfolio' },
  { name: 'Docker Hub', url: '#', icon: 'FaDocker', category: 'Developer' },
  { name: 'Terraform Registry', url: '#', icon: 'FaCloud', category: 'Developer' },
  { name: 'Twitter / X', url: '#', icon: 'FaXTwitter', category: 'Social' },
  { name: 'Naukri', url: '#', icon: 'FaBriefcase', category: 'Job Portal' },
  { name: 'Wellfound', url: '#', icon: 'FaRocket', category: 'Job Portal' },
  { name: 'Upwork', url: '#', icon: 'FaLaptopCode', category: 'Freelance' },
  { name: 'Fiverr', url: '#', icon: 'FaCode', category: 'Freelance' },
  { name: 'Medium', url: '#', icon: 'FaMedium', category: 'Blog' },
  { name: 'Dev.to', url: '#', icon: 'FaDev', category: 'Blog' },
  { name: 'Stack Overflow', url: '#', icon: 'FaStackOverflow', category: 'Developer' },
]

export const skills = [
  { category: 'Cloud & Infrastructure', items: [
    { name: 'AWS', level: 90, icon: 'SiAmazonwebservices' },
    { name: 'GCP', level: 85, icon: 'SiGooglecloud' },
    { name: 'Kubernetes', level: 90, icon: 'SiKubernetes' },
    { name: 'Docker', level: 88, icon: 'SiDocker' },
    { name: 'Terraform', level: 90, icon: 'SiTerraform' },
    { name: 'Linux', level: 92, icon: 'SiLinux' },
  ]},
  { category: 'CI/CD & GitOps', items: [
    { name: 'GitHub Actions', level: 90, icon: 'SiGithubactions' },
    { name: 'ArgoCD', level: 85, icon: 'SiArgo' },
    { name: 'Jenkins', level: 88, icon: 'SiJenkins' },
    { name: 'GitLab CI', level: 75, icon: 'SiGitlab' },
    { name: 'Harness', level: 70, icon: 'SiHarness' },
    { name: 'Git', level: 90, icon: 'SiGit' },
  ]},
  { category: 'Observability & Security', items: [
    { name: 'Prometheus', level: 88, icon: 'SiPrometheus' },
    { name: 'Grafana', level: 88, icon: 'SiGrafana' },
    { name: 'Datadog', level: 80, icon: 'SiDatadog' },
    { name: 'New Relic', level: 78, icon: 'SiNewrelic' },
    { name: 'EFK Stack', level: 82, icon: 'SiElasticsearch' },
    { name: 'Istio', level: 80, icon: 'SiIstio' },
  ]},
  { category: 'Programming & Scripting', items: [
    { name: 'Python', level: 85, icon: 'SiPython' },
    { name: 'Go', level: 72, icon: 'SiGo' },
    { name: 'Bash', level: 88, icon: 'SiGnubash' },
    { name: 'Groovy', level: 75, icon: 'SiApachegroovy' },
    { name: 'JavaScript', level: 78, icon: 'SiJavascript' },
  ]},
]

export const experience = [
  {
    company: 'Blackduck',
    subtitle: '(formerly Synopsys Software Integrity Solutions)',
    role: 'Sr. DevOps Engineer',
    duration: 'June 2025 - Present',
    location: 'Bengaluru, India',
    url: 'https://www.blackduck.com',
    highlights: [
      {
        title: 'PostgreSQL Cloud SQL Upgrade',
        description: 'Upgraded 1100+ PostgreSQL Cloud SQL instances to PG16, achieving 100% data consistency, 0% downtime, and implementing automated rollback workflows.',
        tags: ['Cloud SQL', 'PostgreSQL', 'GCP', 'Automation'],
        impact: '1100+ instances, 0% downtime',
      },
      {
        title: 'Pod Security Standards',
        description: 'Implemented Pod Security Standards across 60+ GKE clusters, ensuring 100% policy compliance and 0 service disruption through coordinated rollout.',
        tags: ['GKE', 'Pod Security', 'Kubernetes', 'Compliance'],
        impact: '60+ clusters secured',
      },
      {
        title: 'GCP Private Service Connect',
        description: 'Built secure internal connectivity using GCP Private Service Connect, improving network isolation by 90% in air-gapped environments.',
        tags: ['GCP', 'Private Service Connect', 'Networking', 'Security'],
        impact: '90% network isolation',
      },
      {
        title: 'CI/CD Migration to GitOps',
        description: 'Spearheaded CI/CD migration from Harness, GitLab CI, Concourse, and Jenkins to GitHub Actions + ArgoCD — including approval gates and Secret Manager integration.',
        tags: ['GitHub Actions', 'ArgoCD', 'GitOps', 'Secret Manager'],
        impact: 'Unified CI/CD platform',
      },
      {
        title: 'Product Infrastructure (End-to-End)',
        description: 'Architected Terraform modules for GCP networking, load balancers, NEGs, DNS with NS delegation, SSL certificates, CMEK-encrypted buckets, Cloud SQL, and Pub/Sub; deployed on Kubernetes via Helm.',
        tags: ['Terraform', 'GCP', 'Helm', 'Kubernetes'],
        impact: 'Full product infra setup',
      },
      {
        title: 'NGINX to Istio Migration',
        description: 'Led migration from NGINX ingress to Istio service mesh gateway, improving traffic management, mTLS security, and observability across microservices.',
        tags: ['Istio', 'NGINX', 'Service Mesh', 'mTLS'],
        impact: 'Zero-trust networking',
      },
      {
        title: 'AI-Powered Internal Chatbot',
        description: 'Designed and deployed an AI chatbot using Firestore + Claude AI, enabling customer admin teams to query scan rates, customer-workload relationships, and ops data via natural language.',
        tags: ['Claude AI', 'Firestore', 'Python', 'ChatOps'],
        impact: 'AI-driven ops intelligence',
      },
      {
        title: 'Observability Stack',
        description: 'Established production observability with Thanos, Grafana, Datadog, and New Relic — created 10+ dashboards, alerts, and monitors for monitoring and alerting across the product stack.',
        tags: ['Thanos', 'Grafana', 'Datadog', 'New Relic'],
        impact: '24x7 observability',
      },
      {
        title: 'Chainguard Hardened Images',
        description: 'Implemented secure container image strategy using Chainguard hardened images, eliminating critical CVEs and reducing image vulnerability surface by 95%+ across production workloads.',
        tags: ['Chainguard', 'Container Security', 'CVE', 'Supply Chain'],
        impact: '95%+ CVE reduction',
      },
      {
        title: 'FedRAMP Compliance Readiness',
        description: 'Enforced FedRAMP-aligned security standards across Kubernetes and cloud infrastructure — least privilege IAM, audit logging, encryption (at-rest/in-transit), and vulnerability management.',
        tags: ['FedRAMP', 'IAM', 'Encryption', 'Compliance'],
        impact: 'Compliance-ready infra',
      },
    ],
  },
  {
    company: 'BigBasket',
    role: 'DevOps Engineer I',
    duration: 'July 2023 - Jun 2025',
    location: 'Bengaluru, India',
    url: 'https://www.bigbasket.com',
    highlights: [
      {
        title: 'DevOps Self-Service Portal',
        description: 'Designed and led the development of a self-service tool for access management, report creation, and AWS/K8s resource provisioning. Automated approval via Slackbot with Slack, Jira, and Mail integration. Reduced manual DevOps efforts by 90%.',
        tags: ['Python', 'Slack API', 'Jira', 'MySQL', 'AWS', 'K8s'],
        impact: '90% ops reduction',
      },
      {
        title: 'EKS Upgrade & Migration',
        description: 'Refactored EKS Terraform code and led blue-green migration of 100+ microservices from EKS v1.24 to v1.30 with zero downtime.',
        tags: ['Terraform', 'EKS', 'Blue-Green'],
        impact: 'Zero downtime migration',
      },
      {
        title: 'Event-Driven Autoscaling (KEDA)',
        description: 'Designed and established event-driven autoscaling for Kubernetes workloads using CloudWatch metrics and KEDA.',
        tags: ['KEDA', 'CloudWatch', 'Kubernetes', 'HPA'],
        impact: 'Dynamic production scaling',
      },
      {
        title: 'Cloud Cost Optimization',
        description: 'Implemented cost-tracking mechanisms for AWS and Kubernetes, reducing monthly cloud expenditure by $20,000.',
        tags: ['AWS', 'FinOps', 'CastAI', 'Kyverno'],
        impact: '$20K/month savings',
      },
      {
        title: 'Observability & Incident Management',
        description: 'Deployed Prometheus-Grafana stack, Fluent Bit + Athena logs and FIM Auditbeat. Built 10+ dashboards; resolved 30+ incidents via on-call, enabling 99.9% uptime.',
        tags: ['Prometheus', 'Grafana', 'Fluent Bit', 'Athena'],
        impact: '99.9% uptime',
      },
      {
        title: 'LLM-Based Troubleshooting',
        description: 'Integrated HolmesGPT, a production-grade LLM-powered troubleshooting solution in the Kubernetes cluster.',
        tags: ['LLM', 'HolmesGPT', 'Kubernetes', 'AI'],
        impact: 'AI-powered incident resolution',
      },
    ],
  },
  {
    company: 'BigBasket',
    role: 'DevOps Intern',
    duration: 'Jan 2023 - Jun 2023',
    location: 'Bengaluru, India',
    url: 'https://www.bigbasket.com',
    highlights: [
      {
        title: 'Process Automation',
        description: 'Automated diverse processes using Jenkins, AWS, and Python, reducing manual intervention across 10+ key workflows.',
        tags: ['Jenkins', 'AWS', 'Python'],
        impact: '80% manual reduction',
      },
      {
        title: 'Slackbot Approval System',
        description: 'Setup Slackbot to streamline approval process using AWS Lambda, reducing manual efforts and boosting efficiency by 60%.',
        tags: ['Slack', 'AWS Lambda', 'Automation'],
        impact: '60% efficiency boost',
      },
    ],
  },
]

export const education = [
  {
    institution: 'International Institute of Information Technology (IIIT)',
    degree: 'Bachelor of Technology, Computer Science',
    duration: 'Aug 2019 - Jun 2023',
    location: 'Naya Raipur, India',
    cgpa: '7.7',
  },
]

export const certifications = [
  { name: 'Google Cloud Professional Cloud Architect', issuer: 'Google Cloud', icon: 'SiGooglecloud' },
  { name: 'AWS Solutions Architect - Associate (SAA-C03)', issuer: 'AWS', icon: 'SiAmazonwebservices' },
  { name: 'Certified Kubernetes Administrator (CKA)', issuer: 'CNCF', icon: 'SiKubernetes' },
  { name: 'Terraform Associate (003)', issuer: 'HashiCorp', icon: 'SiTerraform' },
]

export const devopsProjects = [
  {
    title: 'Cloud Platform Blueprint',
    description: 'Multi-cloud infrastructure platform provisioning production-grade EKS and GKE clusters from a single Terraform codebase with modular IaC, remote state, and automated cost estimation via Infracost.',
    tags: ['Terraform', 'EKS', 'GKE', 'ArgoCD', 'Istio', 'Infracost'],
    category: 'Infrastructure as Code',
    github: 'https://github.com/anurag19100/cloud-platform-blueprint',
  },
  {
    title: 'DevOps AI Ops Agent',
    description: 'Multi-agent AI system for DevOps operations — agents autonomously review Terraform plans, triage Kubernetes incidents via Prometheus and log queries, and generate runbooks using Claude AI and MCP protocol.',
    tags: ['Python', 'Claude AI', 'Firestore', 'Slack', 'GitHub Actions'],
    category: 'AI / MLOps',
    github: 'https://github.com/anurag19100/devops-ai-agent',
  },
  {
    title: 'Kubernetes Self-Service Portal',
    description: 'Open-source developer self-service platform for K8s namespace provisioning, app deployment, secrets management, and log/metrics access with Slack-based approval workflows and full audit trail.',
    tags: ['Go', 'Python', 'Kubernetes API', 'Terraform', 'React', 'RBAC'],
    category: 'Platform Engineering',
    github: 'https://github.com/anurag19100/k8s-self-service-portal',
  },
  {
    title: 'Observability Stack',
    description: 'Production monitoring stack with Prometheus, Thanos, Grafana, Datadog, and New Relic. 10+ dashboards for system health, cost tracking, and SLA monitoring across multi-cloud environments.',
    tags: ['Prometheus', 'Thanos', 'Grafana', 'Datadog', 'New Relic'],
    category: 'Observability',
  },
  {
    title: 'GitOps CI/CD Platform',
    description: 'Unified CI/CD platform migrated from Harness, GitLab CI, Concourse to GitHub Actions + ArgoCD with approval gates, Secret Manager integration, and automated rollback.',
    tags: ['GitHub Actions', 'ArgoCD', 'GitOps', 'Secret Manager'],
    category: 'CI/CD',
  },
  {
    title: 'Cloud Cost Optimization Engine',
    description: 'Automated cost tracking and optimization for AWS and GCP resources using CastAI, Kyverno policies, and Infracost — achieving $20K/month savings.',
    tags: ['CastAI', 'Kyverno', 'Infracost', 'FinOps'],
    category: 'FinOps',
  },
]

export const openTo = [
  { area: 'DevOps & SRE', description: 'Infrastructure automation, Kubernetes, CI/CD, observability, incident management', icon: 'FaServer', color: 'from-terminal-green to-emerald-500' },
  { area: 'Cloud Architecture', description: 'Multi-cloud design, migration strategy, cost optimization, scalable infrastructure', icon: 'FaCloud', color: 'from-cyan-500 to-blue-500' },
  { area: 'Security & Compliance', description: 'Pod security, network isolation, mTLS, zero-trust architecture, compliance audits', icon: 'FaShieldAlt', color: 'from-red-500 to-orange-500' },
  { area: 'Freelance & Consulting', description: 'DevOps consulting, infra audits, cloud migration, security hardening', icon: 'FaLaptopCode', color: 'from-terminal-blue to-purple-500' },
]

export const stats = [
  { label: 'Production Infrastructure', value: '~4 Years' },
  { label: 'AWS + GCP + K8s + Terraform', value: '4x Certified' },
  { label: 'GKE + EKS Clusters Managed', value: '60+' },
  { label: 'Cloud Cost Optimized', value: '$20K/mo' },
]
