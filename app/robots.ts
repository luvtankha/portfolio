import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://developer-desktop-portfolio.luvtankha.chatgpt.site/sitemap.xml",
  };
}
