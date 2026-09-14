import "./globals.css";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sonish Upadhyaya",
  url: "https://www.sonishupadhyaya.com.np",
  jobTitle: "Backend & Full-Stack Developer",
  description:
    "Sonish Upadhyaya is a backend-focused full-stack developer specializing in scalable APIs, databases, cloud infrastructure, performance, and DevOps.",
  knowsAbout: [
    "Backend Development",
    "Full-Stack Development",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "API Development",
    "Database Architecture",
    "Cloud Computing",
    "DevOps",
    "Software Engineering",
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
    "Node.js Developer",
    "TypeScript Developer",
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