import "./globals.css";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sonish Upadhyaya",
  url: "https://www.sonishupadhyaya.com.np",
  jobTitle: "Mid Level Full Stack Developer",
  description:
    "Sonish Upadhyaya is a Full-Stack Developer specializing in backend architecture, with production experience building and securing government platforms serving 100,000+ users. Skilled in Django, Laravel, and Next.js, with deep expertise in JWT/RBAC authentication design, Redis caching strategies, asynchronous task processing (Celery), and multi-tenant system architecture.",
  knowsAbout: [
    "Backend Development",
    "Full-Stack Development",
    "Node.js",
    "JavaScript",
    "PHP",
    "Python",
    "Laravel",
    "Django",
    "Django REST Framework",
    "Next.js",
    "React",
    "RESTful API Design",
    "JWT & OAuth Authentication",
    "Role-Based Access Control (RBAC)",
    "Redis Caching",
    "Celery & Asynchronous Task Processing",
    "MySQL & Database Architecture",
    "Docker & Kubernetes",
    "CI/CD (GitHub Actions, Jenkins)",
    "Multi-Tenant System Architecture",
    "Microservices",
    "Model Context Protocol (MCP)",
    "LangChain & RAG Pipelines",
    "DevOps",
    "Software Engineering",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Endeavor Nepal Pvt. Ltd.",
    location: "Kathmandu, Nepal",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Asian College of Higher Studies",
    location: "Kathmandu, Nepal",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Mid Level Full Stack Developer",
    occupationLocation: {
      "@type": "City",
      name: "Kathmandu, Nepal",
    },
    skills:
      "Laravel, Django REST Framework, Next.js, MySQL, Redis, Celery, Horizon, Flower, Filament, Livewire",
    description:
      "Designs and builds RESTful APIs and headless CMS architectures decoupling Next.js/React frontends from Django and Laravel backends, powering a government platform serving 100,000+ users. Architects multi-tenant platforms with domain-based tenancy supporting 60+ isolated subdomains on a shared, scalable backend. Builds stateless JWT authentication systems with token rotation, HttpOnly refresh cookies, multi-device session management, and secure logout/revocation workflows. Implements granular, multi-level RBAC with hierarchy-based permissions. Integrates external government APIs over a dedicated VPN to securely synchronize sensitive records. Architects a centralized document storage REST API abstracting NAS drive access, featuring chunked uploads and SHA-256/MD5 checksum verification. Applies Redis cache-aside strategies and asynchronous job processing (Celery, Laravel Queues, monitored via Flower/Horizon) to reduce database load and improve response times. Builds secure webhook integrations with third-party SMS providers alongside CAPTCHA/CSRF protections. Migrated legacy data into MySQL with zero data loss.",
  },
  workExample: [
    {
      "@type": "SoftwareSourceCode",
      name: "Local LLM Chatbot with Custom MCP Server",
      description:
        "Custom MCP server in Laravel exposing blog management functionality as AI-accessible tools, paired with a Django-based MCP client and CLI chatbot connecting to a local Ollama instance running the Qwen LLM, implementing the full tool-calling flow without relying on cloud-based AI services.",
      codeRepository: "https://github.com/Sonish2319/",
      programmingLanguage: ["PHP", "Python"],
    },
    {
      "@type": "SoftwareSourceCode",
      name: "RAG Document Q&A Pipeline",
      description:
        "End-to-end Retrieval-Augmented Generation pipeline for context-aware Q&A over PDF documents, covering ingestion, chunking, semantic embedding, and persistent vector storage, with a custom top-k retrieval layer integrated with Google Gemini via LangChain.",
      codeRepository: "https://github.com/Sonish2319/",
      programmingLanguage: "Python",
    },
    {
      "@type": "SoftwareSourceCode",
      name: "CI/CD Pipeline with Docker & Kubernetes",
      description:
        "Jenkins CI/CD pipeline triggered via GitHub Webhooks, automating the flow from GitHub to Docker build to Kubernetes deployment with rolling updates, rollout-status verification, automated deployment verification, rollback support, and Docker image cleanup.",
      codeRepository: "https://github.com/Sonish2319/",
      programmingLanguage: "YAML",
    },
  ],
  sameAs: [
    "https://github.com/Sonish2319/",
    "https://www.linkedin.com/in/sonish-upadhyaya646/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sonish Upadhyaya",
  alternateName: "Sonish Upadhyaya Portfolio",
  url: "https://www.sonishupadhyaya.com.np",
  description:
    "Portfolio and personal website of Sonish Upadhyaya, a backend-focused full-stack developer specializing in scalable APIs, databases, cloud, and DevOps.",
  publisher: {
    "@type": "Person",
    name: "Sonish Upadhyaya",
    url: "https://www.sonishupadhyaya.com.np",
  },
};

/** @type {import("next").Metadata} */
export const metadata = {
  metadataBase: new URL("https://www.sonishupadhyaya.com.np"),

  title: {
    default:
      "Sonish Upadhyaya | Backend & Full-Stack Developer | APIs & System Design",
    template: "%s | Sonish Upadhyaya",
  },

  description:
    "Sonish Upadhyaya is a backend-focused full-stack developer specializing in scalable APIs, databases, cloud infrastructure, performance, and DevOps.",

  keywords: [
    "Sonish Upadhyaya",
    "Backend Developer",
    "Full-Stack Developer",
    "Backend Engineer",
    "Software Engineer",
    "Laravel Developer",
    "Django Developer",
    "API Development",
    "REST API Development",
    "Database Architecture",
    "Scalable Backend Systems",
    "Cloud Infrastructure",
    "DevOps",
  ],

  authors: [
    {
      name: "Sonish Upadhyaya",
      url: "https://www.sonishupadhyaya.com.np",
    },
  ],

  creator: "Sonish Upadhyaya",
  publisher: "Sonish Upadhyaya",

  category: "technology",

  alternates: {
    canonical: "https://www.sonishupadhyaya.com.np",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sonishupadhyaya.com.np",
    siteName: "Sonish Upadhyaya",

    title:
      "Sonish Upadhyaya | Backend & Full-Stack Developer | APIs & Cloud",

    description:
      "Backend-focused full-stack developer specializing in scalable APIs, databases, cloud infrastructure, performance, and DevOps.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sonish Upadhyaya - Backend & Full-Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Sonish Upadhyaya | Backend & Full-Stack Developer | APIs & Cloud",

    description:
      "Backend-focused full-stack developer specializing in scalable APIs, databases, cloud infrastructure, performance, and DevOps.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </body>
    </html>
  );
}