/**
 * Every piece of copy on the site lives here.
 * Edit this file to change the portfolio — the components read from it.
 */

export const site = {
  name: "Ali El Adnani",
  shortName: "El Adnani",
  role: "Software Engineer",
  tagline: "Software Engineer · AI · Digital Experiences",
  location: "Morocco",
  /** Canonical URL — update here if you attach a custom domain. */
  url: "https://portfoliowebsite-chi-bay.vercel.app",
  email: "aliadnani056@gmail.com",
  /** On the CV but deliberately not rendered on a public page. */
  phone: "+212 625 261 279",
  available: true,
  availableLabel: "Available for new projects",
  year: new Date().getFullYear(),
};

export const socials = [
  { label: "GitHub", href: "https://github.com/Ali-desu" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ali-el-adnani/" },
] as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
] as const;

export const hero = {
  eyebrow: "Software Engineer · AI · Digital Experiences",
  /** Rendered word by word. The word matching `accentWord` gets the shimmer. */
  headline: ["Transform your", "digital presence."],
  accentWord: "presence.",
  intro:
    "I design and build modern digital experiences that turn ideas into meaningful products — powered by software, creativity, and AI.",
  ctaPrimary: { label: "Explore my work", href: "#work" },
  ctaSecondary: { label: "Let's work together", href: "#contact" },
};

export const about = {
  /** Reveals word by word as you scroll through it. */
  statement:
    "I build software end to end — the backend, the interface, and the AI in between. Most of what I've made replaced a messy spreadsheet with something people actually trust.",
  paragraphs: [
    "I studied computer engineering at ENSA Marrakech, then spent my internships at DXC Technology and SAMSIC doing the same thing twice: taking work that ran on manual Excel files and turning it into systems that run on their own.",
    "On my own time I build with AI — retrieval systems, semantic image search, a medical chatbot. My rule is simple: if it can't show where the answer came from, it doesn't ship.",
    "What I like most is when the database, the service and the screen all have to fit together. That's the work I'm looking for.",
  ],
  stats: [
    { value: 12, suffix: "+", label: "Projects built" },
    { value: 5, suffix: "", label: "Years building" },
    { value: 25, suffix: "+", label: "Technologies used" },
  ],
  facts: [
    { label: "Currently", value: "Open to new projects and roles" },
    { label: "Based in", value: "Marrakech, Morocco — working worldwide" },
    { label: "Education", value: "Software Engineering · ENSA Marrakech" },
    { label: "Languages", value: "Arabic · French · English" },
    { label: "Focus", value: "Software · AI · Web · Data" },
  ],
};

/** Flat list for the hero ticker. */
export const stack = [
  "Java",
  "Spring Boot",
  "React",
  "Next.js",
  "Angular",
  "TypeScript",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Elasticsearch",
  "Kafka",
  "Docker",
  "LangChain",
  "Power BI",
];

/** Grouped for the About section. */
export const skillGroups = [
  {
    label: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "JPA / Hibernate",
      "FastAPI",
      "Flask",
      "REST · GraphQL · SOAP",
      "Apache Kafka",
    ],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    label: "AI & Data",
    items: [
      "RAG",
      "LangChain / LangGraph",
      "CLIP · Transformers",
      "Claude · OpenAI APIs",
      "Python · Pandas",
      "ETL / ELT",
      "Power BI · DAX",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "Oracle / PL-SQL", "MongoDB", "Elasticsearch"],
  },
  {
    label: "DevOps & tooling",
    items: ["Docker", "GitHub Actions", "Keycloak", "Git", "Linux", "JUnit / PyTest"],
  },
];

export const expertise = [
  {
    number: "01",
    title: "Full-Stack Applications",
    description:
      "Complete products, front to back — React, Next.js or Angular over a Spring Boot core. Typed, component-driven, and built to stay maintainable long after launch.",
    skills: ["Next.js", "React", "Spring Boot", "TypeScript"],
  },
  {
    number: "02",
    title: "Backend & APIs",
    description:
      "Services that hold up under real traffic: REST, GraphQL and SOAP, Kafka for messaging, Keycloak for identity, and a microservice split when the domain genuinely calls for one.",
    skills: ["Java", "Kafka", "Keycloak", "PostgreSQL"],
  },
  {
    number: "03",
    title: "AI Integration",
    description:
      "LLM features that solve a real problem instead of demoing well. Retrieval, embeddings and vector search wired in so the answers stay grounded in your data — and cite it.",
    skills: ["RAG", "LangChain", "pgvector", "Claude API"],
  },
  {
    number: "04",
    title: "Data & Reporting",
    description:
      "Pipelines nobody has to babysit. API ingestion, layered transformation, a clean dimensional model, and dashboards that put the numbers in front of the people who decide.",
    skills: ["Python", "ETL / ELT", "Power BI", "Automation"],
  },
];

export type ProjectLink = { label: string; href: string };

export type Project = {
  title: string;
  year: string;
  category: string;
  /** Shown as a badge on the card — "Personal project" or "Team project". */
  kind: string;
  summary: string;
  tags: string[];
  /** One entry per repo; the card renders a link for each. */
  links?: ProjectLink[];
  /** Drives the card's gradient — pick any two hex colors. */
  colors: [string, string];
};

export const projects: Project[] = [
  {
    title: "InsightHub",
    year: "2026",
    category: "Applied AI · RAG",
    kind: "Personal project",
    summary:
      "A document Q&A platform that answers from your own files instead of guessing. Ingestion runs Tika → chunking → Bedrock embeddings → pgvector, HNSW handles semantic search, and every answer comes back grounded in citations through the Claude API.",
    tags: ["Java 21", "Spring Boot", "pgvector", "AWS Bedrock", "React 19"],
    links: [{ label: "Repository", href: "https://github.com/Ali-desu/InsightHub" }],
    colors: ["#7c6bff", "#22d3ee"],
  },
  {
    title: "E-Banking Platform",
    year: "2025",
    category: "Microservices · Backend",
    kind: "Team project",
    summary:
      "A secure banking system built as microservices: transfers, a crypto wallet, QR code payments and SMS verification via Twilio, plus a LangChain support agent. Service discovery through Eureka, authentication through Keycloak, REST, SOAP and GraphQL side by side.",
    tags: ["Spring Boot", "Angular", "Kafka", "Keycloak", "Docker"],
    links: [
      {
        label: "Backend",
        href: "https://github.com/eBankingCorp/ebanking-app-backend",
      },
      {
        label: "Frontend",
        href: "https://github.com/eBankingCorp/ebanking-app-frontend",
      },
    ],
    colors: ["#ff5f8f", "#7c6bff"],
  },
  {
    title: "Nexus",
    year: "2025",
    category: "AI · Semantic image search",
    kind: "Team project",
    summary:
      "Search a photo library by describing it. CLIP turns images into visual embeddings, Elasticsearch retrieves them, Cloudinary handles the media and MongoDB the metadata — the whole thing containerised with Docker.",
    tags: ["Next.js", "FastAPI", "Elasticsearch", "CLIP", "MongoDB"],
    links: [{ label: "Repository", href: "https://github.com/nexus-search/nexus" }],
    colors: ["#22d3ee", "#4ade80"],
  },
  {
    title: "Medical Chatbot",
    year: "2025",
    category: "AI · NLP",
    kind: "Personal project",
    summary:
      "A medical question-answering assistant built on BERT fine-tuned against medical data for retrieval and understanding, with Llama 2 reformulating the retrieved material into answers that read like a person wrote them.",
    tags: ["BERT", "Llama 2", "Transformers", "Python"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Ali-desu/bert_llama2_chatbot",
      },
    ],
    colors: ["#38bdf8", "#7c6bff"],
  },
  {
    title: "Smart Library System",
    year: "2024",
    category: "Full-stack · Team lead",
    kind: "Team project",
    summary:
      "A university library platform with an AI librarian built on LangChain, FAISS and GPT-4, JWT authentication, an admin dashboard and real-time notifications. I owned the full stack and coordinated the team.",
    tags: ["React", "Flask", "LangChain", "FAISS", "Docker"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/PFS-LMS-ORG/SmartElectronicLibrary",
      },
    ],
    colors: ["#f59e0b", "#ff5f8f"],
  },
];

export const journey = [
  {
    period: "2026",
    title: "Data Engineer",
    org: "DXC Technology · Rabat",
    description:
      "Built the reporting system that replaced a manual Excel process, giving managers a live view of sprint progress and team workload. Automated the entire flow from Jira to Power BI — ingestion, a Bronze/Silver/Gold pipeline and a galaxy-schema model, refreshed daily without a single manual step.",
  },
  {
    period: "2025",
    title: "Full-Stack Developer",
    org: "SAMSIC · Casablanca",
    description:
      "Delivered a Spring Boot, React and MySQL application for tracking purchase and work orders, turning scattered spreadsheets into REST APIs, role-based access, dynamic forms and real-time status tracking.",
  },
  {
    period: "2021 — 2026",
    title: "Software Engineering Degree",
    org: "ENSA Marrakech · Computer Engineering",
    description:
      "Five years of software and systems engineering — algorithms, databases, distributed systems and machine learning — alongside the team projects where I learned how software actually gets shipped.",
  },
  {
    period: "2021",
    title: "High School Diploma, Physical Sciences",
    org: "Abou El Abass Sebti High School · Marrakech",
    description:
      "Where the habit of taking things apart to understand them started.",
  },
];

export const contact = {
  heading: ["Let's build", "something great."],
  accentWord: "great.",
  blurb:
    "Have a project, a role, or an idea worth exploring? I read every message and reply within a day.",
};
