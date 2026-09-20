import type { MetadataRoute } from "next";

const siteUrl = "https://developer-desktop-portfolio.luvtankha.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: .8 },
    { url: `${siteUrl}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: .9 },
    { url: `${siteUrl}/projects/helios`, lastModified: new Date(), changeFrequency: "monthly", priority: .9 },
    { url: `${siteUrl}/hackathons`, lastModified: new Date(), changeFrequency: "monthly", priority: .8 },
  ];
}
