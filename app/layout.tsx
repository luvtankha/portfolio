import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://developer-desktop-portfolio.luvtankha.chatgpt.site"),
  title: {
    default: "YOUR NAME — Full-Stack Developer & AI Engineer",
    template: "%s | YOUR NAME",
  },
  description: "Portfolio of a full-stack developer and aspiring AI engineer based in India.",
  keywords: ["Full-Stack Developer", "AI Engineer", "TypeScript", "Next.js", "India"],
  authors: [{ name: "YOUR NAME" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "YOUR NAME — Full-Stack Developer & AI Engineer",
    description: "Portfolio of a full-stack developer and aspiring AI engineer based in India.",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "YOUR NAME — Full-Stack Developer & AI Engineer" }],
  },
  twitter: { card: "summary_large_image", title: "YOUR NAME — Full-Stack Developer & AI Engineer", description: "Portfolio of a full-stack developer and aspiring AI engineer based in India.", images: ["/opengraph-image"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Person", name: "YOUR NAME", jobTitle: "Full-Stack Developer & AI Engineer", url: "https://developer-desktop-portfolio.luvtankha.chatgpt.site", sameAs: ["https://github.com/", "https://www.linkedin.com/in/username"], address: { "@type": "PostalAddress", addressCountry: "IN" }, knowsAbout: ["Full-Stack Development", "TypeScript", "Next.js", "AI Engineering", "Automation"] }, { "@type": "WebSite", name: "YOUR NAME Portfolio", url: "https://developer-desktop-portfolio.luvtankha.chatgpt.site", inLanguage: "en-IN" }] }) }} /><Analytics /></body>
    </html>
  );
}
