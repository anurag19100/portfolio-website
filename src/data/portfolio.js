export const personalInfo = {
  name: 'Anurag Gupta',
  title: 'DevOps Engineer',
  company: 'BigBasket',
  location: 'Bengaluru, India',
  email: 'anurag19100@gmail.com',
  phone: '+91 9755863914',
  github: 'https://github.com/anurag19100',
  linkedin: 'https://linkedin.com/in/anurag19100',
  portfolio: 'https://anurag-cv.netlify.app',
  resumeFile: '/anurag_gupta_cv.pdf',
  bio: `DevOps Engineer with 2+ years of experience designing, implementing, and optimizing robust cloud infrastructure and automation solutions at BigBasket. Strong background in AWS, Kubernetes, Jenkins, Terraform, and programming with a proven track record of enhancing system efficiency, reliability, and maintainability.`,
  typingTexts: [
    'DevOps Engineer',
    'Cloud Infrastructure Architect',
    'Kubernetes Specialist',
    'CI/CD Pipeline Builder',
    'Infrastructure as Code Advocate',
    'Automation Enthusiast',
  ],
}

export const skills = [
  { category: 'Cloud & Infrastructure', items: [
    { name: 'AWS', level: 90, icon: 'SiAmazonwebservices' },
    { name: 'Kubernetes', level: 88, icon: 'SiKubernetes' },
    { name: 'Docker', level: 85, icon: 'SiDocker' },
    { name: 'Terraform', level: 88, icon: 'SiTerraform' },
    { name: 'Linux', level: 90, icon: 'SiLinux' },
  ]},
  { category: 'CI/CD & Automation', items: [
    { name: 'Jenkins', level: 90, icon: 'SiJenkins' },
    { name: 'GitHub Actions', level: 80, icon: 'SiGithubactions' },
    { name: 'ArgoCD', level: 70, icon: 'SiArgo' },
    { name: 'Git', level: 85, icon: 'SiGit' },
  ]},
  { category: 'Observability', items: [
    { name: 'Prometheus', level: 85, icon: 'SiPrometheus' },
    { name: 'Grafana', level: 85, icon: 'SiGrafana' },
    { name: 'EFK Stack', level: 80, icon: 'SiElasticsearch' },
  ]},
  { category: 'Programming', items: [
    { name: 'Python', level: 82, icon: 'SiPython' },
    { name: 'Bash', level: 85, icon: 'SiGnubash' },
    { name: 'Groovy', level: 75, icon: 'SiApachegroovy' },
    { name: 'JavaScript', level: 78, icon: 'SiJavascript' },
  ]},
]

export const experience = [
  {
    company: 'BigBasket',
    role: 'DevOps Engineer I',
    duration: 'July 2023 - Present',
    location: 'Bengaluru, India',
    url: 'https://www.bigbasket.com',
    highlights: [
      {
        title: 'DevOps Self-Service Portal',
        description: 'Designed and implemented a self-service tool for access management, report creation, and creation of AWS and Kubernetes resources. Automated approval processes using Slackbot; integrated with Slack, Jira, and Mail. Reduced manual DevOps efforts by 90%.',
        tags: ['Python', 'Slack API', 'Jira', 'MySQL', 'AWS', 'K8s'],
        impact: '90% reduction in manual ops',
      },
      {
        title: 'EKS Upgrade & Migration',
        description: 'Refactored EKS Terraform code and led blue-green migration of 100+ microservices from EKS v1.24 to v1.30 with zero downtime.',
        tags: ['Terraform', 'EKS', 'Blue-Green'],
        impact: 'Zero downtime migration',
      },
      {
        title: 'Event-Driven Autoscaling (KEDA)',
        description: 'Designed and implemented event-driven autoscaling for Kubernetes workloads using CloudWatch metrics and KEDA.',
        tags: ['KEDA', 'CloudWatch', 'Kubernetes', 'HPA'],
        impact: 'Dynamic scaling for production',
      },
      {
        title: 'Jenkins Upgrade & Containerization',
        description: 'Upgraded and containerized 5+ Jenkins v2.26x instances to LTS; resolved 20+ plugin dependency issues, migrated persistent data on EBS-based PVCs.',
        tags: ['Jenkins', 'Docker', 'EBS', 'PVC'],
        impact: 'Enhanced stability & observability',
      },
      {
        title: 'LLM-Based Troubleshooting (HolmesGPT)',
        description: 'Implemented HolmesGPT, a production-grade LLM-powered troubleshooting solution in the Kubernetes cluster.',
        tags: ['LLM', 'HolmesGPT', 'Kubernetes', 'AI'],
        impact: 'AI-powered incident resolution',
      },
      {
        title: 'Cloud Cost Optimization',
        description: 'Implemented cost-tracking mechanisms for AWS and Kubernetes, reducing monthly cloud expenditure by $20,000.',
        tags: ['AWS', 'FinOps', 'CastAI', 'Kyverno'],
        impact: '$20K/month savings',
      },
      {
        title: 'Observability & Incident Management',
        description: 'Implemented Prometheus-Grafana stack, Fluent Bit + Athena logs and FIM Auditbeat. Built 10+ dashboards; resolved 30+ incidents via on-call, enabling 99.9% uptime.',
        tags: ['Prometheus', 'Grafana', 'Fluent Bit', 'Athena'],
        impact: '99.9% uptime achieved',
      },
      {
        title: 'Legacy Monolith Upgrade',
        description: 'Migrated Ubuntu 14 to 24, rebuilt servers with NGINX and Docker, optimized performance, ensured audit compliance, and reduced costs by 30%.',
        tags: ['Ubuntu', 'NGINX', 'Docker', 'Migration'],
        impact: '30% cost reduction',
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
        description: 'Automated diverse processes using Jenkins, AWS, and Python, reducing manual intervention across 10 key workflows.',
        tags: ['Jenkins', 'AWS', 'Python'],
        impact: '80% reduction in manual work',
      },
      {
        title: 'AWS S3 File Editor',
        description: 'Built an AWS S3 file editor on Jenkins UI, decreasing operational errors and manual effort by 80%.',
        tags: ['AWS S3', 'Jenkins', 'Groovy'],
        impact: '80% fewer errors',
      },
      {
        title: 'Slackbot Approval System',
        description: 'Built a Slackbot to streamline approval process using AWS Lambda, reducing manual efforts and boosting efficiency by 60%.',
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

export const devopsProjects = [
  {
    title: 'Self-Service DevOps Portal',
    description: 'Full-stack self-service platform for AWS & Kubernetes resource provisioning with automated approval workflows via Slack, Jira, and email integration.',
    tags: ['Python', 'Flask', 'AWS', 'Kubernetes', 'MySQL', 'Slack API'],
    category: 'Platform Engineering',
  },
  {
    title: 'EKS Terraform Infrastructure',
    description: 'Production-grade EKS cluster infrastructure as code with blue-green deployment strategy, RBAC, and multi-environment support.',
    tags: ['Terraform', 'EKS', 'AWS', 'RBAC', 'Blue-Green'],
    category: 'Infrastructure as Code',
  },
  {
    title: 'Observability Stack',
    description: 'Complete monitoring and logging stack with Prometheus, Grafana, Fluent Bit, and Athena. 10+ dashboards for system health, cost tracking, and SLA monitoring.',
    tags: ['Prometheus', 'Grafana', 'Fluent Bit', 'Athena', 'Auditbeat'],
    category: 'Observability',
  },
  {
    title: 'KEDA Autoscaling Framework',
    description: 'Event-driven autoscaling framework for Kubernetes workloads using CloudWatch metrics and KEDA for dynamic resource management.',
    tags: ['KEDA', 'CloudWatch', 'Kubernetes', 'HPA'],
    category: 'Auto-Scaling',
  },
  {
    title: 'Jenkins CI/CD Platform',
    description: 'Containerized Jenkins infrastructure with 5+ instances, EBS-backed persistent storage, and automated deployment pipelines for 100+ microservices.',
    tags: ['Jenkins', 'Docker', 'Groovy', 'EBS', 'CI/CD'],
    category: 'CI/CD',
  },
  {
    title: 'Cloud Cost Optimization Engine',
    description: 'Automated cost tracking and optimization for AWS and Kubernetes resources using CastAI and Kyverno policies, achieving $20K/month savings.',
    tags: ['CastAI', 'Kyverno', 'AWS', 'FinOps'],
    category: 'FinOps',
  },
]

export const stats = [
  { label: 'Microservices Managed', value: '100+' },
  { label: 'Monthly Savings', value: '$20K' },
  { label: 'Uptime Achieved', value: '99.9%' },
  { label: 'Manual Ops Reduced', value: '90%' },
]
