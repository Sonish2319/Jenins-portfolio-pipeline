/** @type {import("next").MetadataRoute.Robots} */
export default function robots() {
  const baseUrl = "https://www.sonishupadhyaya.com.np";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
