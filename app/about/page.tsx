import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Luv Tankha, a third-year B.Tech Data Science student, full-stack developer, and aspiring AI engineer.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <main className="public-page"><p className="public-eyebrow">01 / PROFILE</p><h1>About Luv Tankha</h1><p className="public-lede">Third-year B.Tech Data Science student at MUIT, focused on learning software engineering end-to-end and building toward AI engineering.</p><div className="public-grid"><article><small>EDUCATION</small><p>B.Tech in Data Science · MUIT · 3rd Year · CGPA 8.3</p></article><article><small>CURRENTLY EXPLORING</small><ul><li>Java + DSA</li><li>Full-Stack Engineering</li><li>Cloud / DevOps</li><li>AI Engineering</li><li>AI Automation</li></ul></article><article><small>APPROACH</small><p>I began by building with AI-assisted development, then became focused on understanding the layers underneath: frontend, backend, APIs, databases, deployment, infrastructure and AI.</p></article><article><small>GOAL</small><p>Become an AI engineer capable of taking an idea from concept to production and combining software engineering, AI and automation to solve practical problems.</p></article></div><Link className="public-link" href="/">Open the interactive portfolio →</Link></main>;
}
