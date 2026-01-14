import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://baroquelebistrot.gr"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
      // Allow AI crawlers
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: [],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: [],
      },
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: [],
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: [],
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: [],
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
        disallow: [],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: [],
      },
      {
        userAgent: "Omgilibot",
        allow: "/",
        disallow: [],
      },
      {
        userAgent: "FacebookBot",
        allow: "/",
        disallow: [],
      },
      {
        userAgent: "Bytespider",
        allow: "/",
        disallow: [],
      },
      {
        userAgent: "Diffbot",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
