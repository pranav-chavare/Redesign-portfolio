// Central content store. Everything shown on the site comes from this file.
// Optional fields (photo, links, summary, details) render only when filled in,
// so nothing appears on the page that hasn't been confirmed.

export const SITE = {
  name: "Pranav Chaware",
  role: "MLOps & DevOps Engineer",
  tagline:
    "I build the systems behind reliable software, from cloud infrastructure and CI/CD to data pipelines and machine-learning workflows.",
  location: "India",
  email: "pranavchavare1008@gmail.com",
  social: {
    github: "https://github.com/pranav-chavare",
    linkedin: "https://www.linkedin.com/in/pranav-chaware/",
  },
  // Optional profile photo: drop a file into /public (for example
  // /public/pranav.jpg) and set this to "pranav.jpg". Leave empty to show initials.
  photo: "pranav.jpg",
};

export const FOCUS_AREAS = [
  "DevOps engineering",
  "Cloud engineering",
  "MLOps",
  "Data engineering",
  "AI/ML and generative AI",
];

// Short bullets shown beside the name. Edit freely.
export const INTRO = [
  "Software Engineer at VSpireInnovations.",
  "Previously a DevOps Intern at Eminence Institute, July to December 2024.",
  "Pursuing a Master of Computer Applications at D. Y. Patil Agriculture & Technical University.",
  "Interested in how applications travel from a developer's machine to production, and in making that journey more repeatable.",
];

export interface SkillGroup {
  title: string;
  description: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Cloud & infrastructure",
    description: "Provisioning, managing and scaling cloud environments.",
    items: ["AWS", "Azure", "Google Cloud", "Terraform", "Ansible", "CloudFormation"],
  },
  {
    title: "Containers & delivery",
    description: "Building repeatable release workflows and container platforms.",
    items: ["Docker", "Kubernetes", "Amazon EKS", "Jenkins", "GitHub Actions", "Argo CD"],
  },
  {
    title: "Data engineering",
    description: "Moving, processing and organizing data for analytics.",
    items: ["Python", "PySpark", "Apache Spark", "Airflow", "BigQuery", "Snowflake", "dbt"],
  },
  {
    title: "MLOps & development",
    description: "Taking machine-learning workloads from experiment to service.",
    items: ["MLflow", "DVC", "FastAPI", "scikit-learn", "Prometheus", "Grafana"],
  },
];

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  /** Optional one-line description. Omitted from the page when empty. */
  summary?: string;
  /** Optional bullet points. Omitted from the page when empty. */
  details?: string[];
  type: "work" | "education";
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Software Engineer",
    organization: "VSpireInnovations",
    period: "Present",
    summary: "",
    details: [],
    type: "work",
  },
  {
    role: "DevOps Intern",
    organization: "Eminence Institute",
    period: "Jul 2024 – Dec 2024",
    summary: "Practical exposure to DevOps tools and workflows during an internship.",
    details: [],
    type: "work",
  },
  {
    role: "Master of Computer Applications",
    organization: "D. Y. Patil Agriculture & Technical University",
    period: "In progress",
    summary: "Postgraduate study in computer applications.",
    details: [],
    type: "education",
  },
];

export interface ProjectLink {
  label: string; // e.g. "Source" or "Live demo"
  href: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  /** Optional. Add real links here and they appear on the card. */
  links?: ProjectLink[];
}

export const PROJECTS: Project[] = [
  {
    title: "Student Score MLOps",
    category: "Machine learning, API and automation",
    description:
      "An end-to-end machine-learning workflow for student score prediction, covering model training, experiment tracking, an API layer and containerization.",
    tags: ["Python", "scikit-learn", "MLflow", "FastAPI", "Docker", "DVC"],
  },
  {
    title: "Kubernetes Cluster Automation",
    category: "DevOps and infrastructure as code",
    description:
      "Automating Kubernetes cluster provisioning and configuration on AWS with Ansible, helping make environment setup more consistent.",
    tags: ["AWS", "Kubernetes", "Ansible", "Docker"],
  },
  {
    title: "OTT Data Engineering Platform",
    category: "Data engineering and pipelines",
    description:
      "A data-engineering project focused on ingestion and processing of OTT activity data, with streaming and workflow orchestration components.",
    tags: ["Apache Spark", "Kafka", "Airflow", "Hive", "Docker"],
  },
  {
    title: "Pet NGO Data Platform",
    category: "Backend and data management",
    description:
      "A platform concept for pet adoption and user-management workflows, using an API and database layer to organize application data.",
    tags: ["Python", "FastAPI", "MongoDB", "Airflow", "Docker"],
  },
];

export const CERTIFICATIONS = [
  "AWS Academy Graduate — Cloud Foundations",
  "IBM SQL & Relational Databases 101",
];
