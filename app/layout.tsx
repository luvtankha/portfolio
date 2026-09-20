import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageReveal } from "@/components/layout/page-reveal";
import "./globals.css";

export const metadata: Metadata = {
  title: "Developer Portfolio — Product-minded full-stack engineer",
  description: "Selected projects, experiments, and build notes from a product-minded full-stack developer.",
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
      <body className="antialiased"><div className="site-shell"><SiteHeader /><PageReveal>{children}</PageReveal><SiteFooter /></div><Analytics /></body>
    </html>
  );
}
