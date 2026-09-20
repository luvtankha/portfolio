import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YOUR NAME — Full-Stack Developer & Aspiring AI Engineer",
  description: "Portfolio of a full-stack developer and aspiring AI engineer based in India.",
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
      <body className="antialiased">{children}<Analytics /></body>
    </html>
  );
}
