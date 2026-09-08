/**
 * All copy and data for the site. Components read from here, so changing
 * text never means editing a component.
 */

export const site = {
  name: "Ali El Adnani",
  role: "Software Engineer",
  location: "Marrakech, Morocco",
  email: "aliadnani056@gmail.com",
  /** On the CV but deliberately not published. */
  phone: "+212 625 261 279",
  github: "https://github.com/Ali-desu",
  linkedin: "https://www.linkedin.com/in/ali-el-adnani/",
  /** Canonical URL. Update here if a custom domain is attached. */
  url: "https://portfoliowebsite-chi-bay.vercel.app",
  available: true,
  availableLabel: "Available for work",
};

export const socials = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
] as const;

export const nav = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const home = {
  /** Each string is one masked line in the hero. */
  headline: ["Software", "engineer"],
  intro:
    "I build web applications end to end. Backend services in Java and Spring Boot, interfaces in React and Next.js, and AI features that use retrieval instead of guesswork.",
  facts: [
    { label: "Based in", value: "Marrakech, Morocco" },
    { label: "Currently", value: "Available for work" },
    { label: "Focus", value: "Full-stack, AI, data" },
  ],
  workIntro:
    "Six projects, from a live storefront to a document assistant that cites its sources.",
  aboutIntro:
    "I finished a computer engineering degree at ENSA Marrakech in 2026. Before that I did two internships where the job was the same both times: replace a manual process with software that runs on its own.",
};

export const about = {
  intro: [
    "I am a software engineer based in Marrakech. I studied computer engineering at ENSA Marrakech and finished in 2026.",
    "Most of my work is full-stack. I am comfortable writing a Spring Boot service, designing the schema underneath it, and building the React interface on top. Over the last two years I have spent a lot of time on retrieval systems and other AI features, which is now the part of the work I know best.",
    "I care about software that people actually use. Both of my internships involved replacing spreadsheets with systems, and that is the kind of problem I like: something concrete, with a person on the other end who notices when it works.",
  ],
  principles: [
    {
      title: "Ship it",
      body: "A project that runs in production teaches more than one that stays on a branch. I would rather get something small in front of people and fix it than plan it perfectly.",
    },
    {
      title: "Show the source",
      body: "For anything built on a language model, the answer needs to point at where it came from. InsightHub cites every document it uses. Without that there is no way to tell a good answer from a confident wrong one.",
    },
    {
      title: "Own the whole path",
      body: "Knowing the database, the service and the interface makes it much faster to find where something actually broke. I try to stay useful at every layer instead of specialising too early.",
    },
  ],
};

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "TypeScript", "Python", "JavaScript", "SQL"],
  },
  {
    label: "Backend",
    items: [
      "Spring Boot",
      "JPA / Hibernate",
      "FastAPI",
      "Flask",
      "REST",
      "GraphQL",
      "SOAP",
      "Apache Kafka",
    ],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Angular", "Tailwind CSS", "shadcn/ui"],
  },
  {
    label: "AI",
    items: [
      "RAG",
      "LangChain",
      "LangGraph",
      "pgvector",
      "FAISS",
      "CLIP",
      "Transformers",
      "Claude and OpenAI APIs",
    ],
  },
  {
    label: "Data",
    items: [
      "Pandas",
      "ETL and ELT",
      "Dimensional modelling",
      "Power BI",
      "DAX",
      "Parquet",
    ],
  },
  {
    label: "Databases",
    items: [
      "PostgreSQL",
      "Supabase",
      "MySQL",
      "Oracle PL/SQL",
      "MongoDB",
      "Elasticsearch",
    ],
  },
  {
    label: "Tooling",
    items: ["Docker", "GitHub Actions", "Keycloak", "Git", "Linux", "JUnit", "PyTest"],
  },
];

export const experience = [
  {
    period: "Feb 2026 to Jul 2026",
    role: "Data Engineering Intern",
    org: "DXC Technology",
    place: "Rabat",
    body: [
      "Built a reporting system that gave engineering managers a current view of sprint progress and team workload. Before it existed, the same numbers were assembled by hand in Excel every week.",
      "The pipeline pulls from the Jira REST API, transforms through Bronze, Silver and Gold layers, and loads a galaxy schema model that Power BI reads. It refreshes daily on its own.",
    ],
    stack: [
      "Python",
      "Pandas",
      "Jira REST API",
      "GitHub Actions",
      "Power Automate",
      "Power BI",
      "Parquet",
    ],
  },
  {
    period: "Jul 2025 to Aug 2025",
    role: "Full-Stack Developer Intern",
    org: "SAMSIC",
    place: "Casablanca",
    body: [
      "Built an application for tracking purchase orders and work orders, replacing spreadsheets that were being passed around by email.",
      "It covers REST APIs, role based access, dynamic forms and live status tracking, with Spring Boot on the server and React on the client.",
    ],
    stack: ["Spring Boot", "React", "MySQL", "REST"],
  },
];

export const education = [
  {
    period: "2021 to 2026",
    role: "Software Engineering Degree",
    org: "ENSA Marrakech",
    place: "Computer Engineering",
    body: [
      "Five years covering algorithms, databases, distributed systems, networks and machine learning, with team projects throughout.",
    ],
  },
  {
    period: "2021",
    role: "High School Diploma",
    org: "Abou El Abass Sebti High School",
    place: "Physical Sciences",
    body: [],
  },
];

export const languages = [
  { label: "Arabic", level: "Native" },
  { label: "French", level: "Fluent" },
  { label: "English", level: "Fluent" },
];

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  year: string;
  /** Personal project, Team project or Client project. */
  type: string;
  discipline: string;
  /** One or two sentences, used on the index pages. */
  summary: string;
  /** Full paragraphs for the project page. */
  overview: string[];
  /** Concrete things I built. */
  contribution: string[];
  stack: string[];
  links: ProjectLink[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "chicaura",
    title: "ChicAura",
    year: "2026",
    type: "Client project",
    discipline: "E-commerce, live in production",
    summary:
      "An online jewellery store for a Moroccan brand, built with Next.js and Supabase. Bilingual in French and Arabic, with orders placed through WhatsApp.",
    overview: [
      "ChicAura sells stainless steel jewellery in Morocco. The site is the storefront: a catalogue split into necklaces, bracelets, earrings and sets, with prices in dirhams and a featured selection on the home page.",
      "It runs in French and Arabic. Arabic means right to left, so the layout mirrors rather than just swapping strings, and every piece of copy lives in the translation layer instead of inside the components.",
      "There is no checkout. In this market most orders happen over WhatsApp and payment is on delivery, so the site is built around that. Every product routes to a prefilled WhatsApp message rather than a cart. It is less conventional than a checkout flow, but it matches how the business actually sells.",
      "Supabase holds the product data and images, so the owner can change the catalogue without a deploy.",
    ],
    contribution: [
      "Built the storefront in Next.js with the App Router",
      "Modelled products, categories and media in Supabase and wired up the client",
      "Set up French and Arabic translation including right to left layout",
      "Built the WhatsApp ordering flow with prefilled product messages",
      "Handled responsive layout, image delivery and deployment on Vercel",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
    ],
    links: [{ label: "Visit the site", href: "https://chicaura.vercel.app/fr" }],
    featured: true,
  },
  {
    slug: "insighthub",
    title: "InsightHub",
    year: "2026",
    type: "Personal project",
    discipline: "Retrieval augmented generation",
    summary:
      "A document question answering platform that answers from your own files and cites the passage it used.",
    overview: [
      "InsightHub lets you upload documents and ask questions about them. The point of the project was the citation requirement: every answer has to name the passage it came from, so you can check it.",
      "Ingestion runs documents through Tika, splits them into chunks, embeds them with AWS Bedrock and stores the vectors in PostgreSQL using pgvector. Search uses an HNSW index. The retrieved passages go to the Claude API, which answers only from what it was given.",
      "That constraint made the project harder to build. It also made it usable, because a wrong answer that names its source is one you can catch.",
    ],
    contribution: [
      "Built the ingestion pipeline from upload through Tika, chunking and embedding",
      "Set up pgvector with an HNSW index for semantic search",
      "Wrote the retrieval and prompting layer against the Claude API",
      "Built the React front end with streaming answers and inline citations",
      "Containerised the stack with Docker",
    ],
    stack: [
      "Java 21",
      "Spring Boot 4",
      "PostgreSQL",
      "pgvector",
      "AWS S3",
      "AWS Bedrock",
      "Claude API",
      "React 19",
      "Docker",
    ],
    links: [{ label: "Repository", href: "https://github.com/Ali-desu/InsightHub" }],
    featured: true,
  },
  {
    slug: "ebanking-platform",
    title: "E-Banking Platform",
    year: "2025",
    type: "Team project",
    discipline: "Microservices",
    summary:
      "A banking application split into microservices, covering transfers, a crypto wallet, QR payments and an AI support agent.",
    overview: [
      "A banking system built as separate services rather than one application. It handles account transfers, a crypto wallet, payment by QR code and SMS verification through Twilio.",
      "Services register with Eureka and find each other through it. Keycloak handles authentication and issues the tokens the services check. Kafka carries events between services so they do not have to call each other directly.",
      "The project exposes REST, SOAP and GraphQL side by side, which was part of the brief. A LangChain agent sits on top to answer customer support questions.",
      "The frontend and backend live in two separate repositories, both linked below.",
    ],
    contribution: [
      "Worked on the Spring Boot services and the boundaries between them",
      "Set up Keycloak authentication and the Eureka service registry",
      "Wired Kafka topics for events crossing service boundaries",
      "Built parts of the Angular client",
      "Set up Docker Compose and the GitHub Actions pipeline",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Angular",
      "Nx",
      "Apache Kafka",
      "Eureka",
      "Keycloak",
      "PostgreSQL",
      "Docker Compose",
      "GitHub Actions",
      "LangChain",
    ],
    links: [
      {
        label: "Backend repository",
        href: "https://github.com/eBankingCorp/ebanking-app-backend",
      },
      {
        label: "Frontend repository",
        href: "https://github.com/eBankingCorp/ebanking-app-frontend",
      },
    ],
    featured: true,
  },
  {
    slug: "nexus",
    title: "Nexus",
    year: "2025",
    type: "Team project",
    discipline: "Semantic image search",
    summary:
      "Search an image library by describing what is in the picture, using CLIP embeddings and Elasticsearch.",
    overview: [
      "Nexus finds images from a description instead of relying on filenames or tags. CLIP turns both the images and the search text into vectors in the same space, so a text query can be matched against pictures directly.",
      "Elasticsearch handles retrieval, MongoDB stores the metadata and Cloudinary serves the media. A FastAPI service runs the model and a Next.js front end sits on top.",
      "Everything runs under Docker, so the model service, the search index and the database come up together.",
    ],
    contribution: [
      "Built the FastAPI service that generates and serves CLIP embeddings",
      "Set up the Elasticsearch index and the vector retrieval",
      "Built the Next.js search interface",
      "Wired Cloudinary for media and MongoDB for metadata",
      "Containerised every service with Docker",
    ],
    stack: [
      "Next.js",
      "FastAPI",
      "Python",
      "CLIP",
      "Elasticsearch",
      "MongoDB",
      "Cloudinary",
      "Docker",
    ],
    links: [{ label: "Repository", href: "https://github.com/nexus-search/nexus" }],
    featured: false,
  },
  {
    slug: "medical-chatbot",
    title: "Medical Chatbot",
    year: "2025",
    type: "Personal project",
    discipline: "Natural language processing",
    summary:
      "A medical question answering assistant. BERT handles retrieval and understanding, Llama 2 rewrites the result into an answer.",
    overview: [
      "The chatbot answers medical questions using two models with different jobs. A BERT model trained on medical data does the understanding and retrieval, finding the relevant material for a question.",
      "Llama 2 then reformulates that material into a readable answer. Splitting the work this way keeps the answer anchored to retrieved content rather than generated from scratch.",
      "I built this to learn how the two model types behave in practice, and where each one is the wrong tool for the job.",
    ],
    contribution: [
      "Prepared the medical dataset and fine tuned BERT on it",
      "Built the retrieval step and the scoring around it",
      "Wired Llama 2 in to reformulate retrieved passages",
      "Evaluated answers against a held out set of questions",
    ],
    stack: ["Python", "BERT", "Llama 2", "Transformers", "PyTorch"],
    links: [
      { label: "Repository", href: "https://github.com/Ali-desu/bert_llama2_chatbot" },
    ],
    featured: false,
  },
  {
    slug: "smart-library",
    title: "Smart Library System",
    year: "2024",
    type: "Team project",
    discipline: "Full-stack application",
    summary:
      "A university library platform with borrowing, an admin dashboard and a chatbot that answers questions about the catalogue.",
    overview: [
      "A management system for a university library, covering the catalogue, borrowing and returns, an admin dashboard and live notifications.",
      "The chatbot uses LangChain with a FAISS index over the library content and GPT-4 to answer, so students can ask about availability in plain language instead of searching the catalogue themselves.",
      "I worked across the full stack on this one and coordinated the team.",
    ],
    contribution: [
      "Built the Flask backend and the SQLite data model",
      "Built the React interface and the admin dashboard",
      "Set up JWT authentication and role based access",
      "Built the chatbot with LangChain, FAISS and GPT-4",
      "Coordinated the team and the delivery",
    ],
    stack: [
      "React",
      "Flask",
      "SQLite",
      "LangChain",
      "FAISS",
      "GPT-4",
      "Docker",
      "Selenium",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/PFS-LMS-ORG/SmartElectronicLibrary",
      },
    ],
    featured: false,
  },
];

export const contact = {
  heading: "Get in touch",
  body: [
    "I am open to full-time roles and freelance work. Backend, full-stack, or anything involving retrieval and language models.",
    "Email is the fastest way to reach me. I reply within a day.",
  ],
};

export function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
