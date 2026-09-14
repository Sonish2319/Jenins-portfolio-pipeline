import "./globals.css";


/** @type {import("next").Metadata} */
export const metadata = {
  metadataBase: new URL("https://www.sonishupadhyaya.com.np"),

  title: {
    default: "Sonish Upadhyaya | Backend Developer",
    template: "%s | Sonish Upadhyaya",
  },

  description:
    "Sonish Upadhyaya is a backend-focused full-stack developer specializing in scalable APIs, database architecture, performance optimization, cloud deployment, and DevOps.",

  keywords: [
    "Sonish Upadhyaya",
    "Backend Developer",
    "Full-Stack Developer",
    "Node.js Developer",
    "API Development",
    "Database Architecture",
    "Scalable Backend Systems",
    "Cloud Deployment",
    "DevOps",
    "Software Engineer",
  ],

  authors: [
    {
      name: "Sonish Upadhyaya",
      url: "https://www.sonishupadhyaya.com.np",
    },
  ],

  creator: "Sonish Upadhyaya",
  publisher: "Sonish Upadhyaya",

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
    title: "Sonish Upadhyaya | Backend Developer",
    description:
      "Backend-focused full-stack developer building scalable APIs, performant systems, and reliable cloud infrastructure.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sonish Upadhyaya - Backend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sonish Upadhyaya | Backend Developer",
    description:
      "Backend-focused full-stack developer specializing in scalable APIs, databases, performance, cloud, and DevOps.",
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
      <body>{children}</body>
    </html>
  );
}