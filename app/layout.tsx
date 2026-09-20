import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://luvtankha-portfolio.onrender.com"),
  title: {
    default: "Luv Tankha — Full-Stack Developer & Aspiring AI Engineer",
    template: "%s | Luv Tankha",
  },
  description: "Portfolio of a full-stack developer and aspiring AI engineer based in India.",
  keywords: ["Full-Stack Developer", "AI Engineer", "TypeScript", "Next.js", "India"],
  authors: [{ name: "Luv Tankha" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Luv Tankha — Full-Stack Developer & Aspiring AI Engineer",
    description: "Portfolio of a full-stack developer and aspiring AI engineer based in India.",
    type: "website",
    locale: "en_IN",
    url: "https://luvtankha-portfolio.onrender.com",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Luv Tankha — Full-Stack Developer & Aspiring AI Engineer" }],
  },
  twitter: { card: "summary_large_image", title: "Luv Tankha — Full-Stack Developer & Aspiring AI Engineer", description: "Portfolio of a full-stack developer and aspiring AI engineer based in India.", images: ["/opengraph-image"] },
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
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Person", name: "Luv Tankha", jobTitle: "Full-Stack Developer | Aspiring AI Engineer", url: "https://luvtankha-portfolio.onrender.com", sameAs: ["https://github.com/luvtankha", "https://www.linkedin.com/in/luv-tankha-aa9532324"], address: { "@type": "PostalAddress", addressCountry: "IN" }, knowsAbout: ["Java", "Data Structures and Algorithms", "Full-Stack Development", "TypeScript", "Next.js", "Node.js", "PostgreSQL", "AI Engineering", "Automation"] }, { "@type": "WebSite", name: "Luv Tankha Portfolio", url: "https://luvtankha-portfolio.onrender.com", inLanguage: "en-IN" }] }) }} /><Analytics /></body>
    </html>
  );
}
