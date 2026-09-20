import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Luv Tankha — Full-Stack Developer and aspiring AI Engineer.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return <main className="public-page">
    <p className="public-eyebrow">RESUME / LUV TANKHA</p>
    <h1>Luv Tankha</h1>
    <p className="public-lede">Full-Stack Developer · Aspiring AI Engineer</p>
    <div className="public-grid">
      <article><small>EDUCATION</small><h2>B.Tech · Data Science</h2><p>MUIT · 3rd Year · CGPA 8.3</p></article>
      <article><small>PROFILE</small><p>Third-year B.Tech Data Science student focused on Java, DSA, full-stack engineering, backend systems, databases, deployment, and progressing toward AI engineering and automation.</p></article>
      <article><small>SMART INDIA HACKATHON 2026</small><h2>Team Leader &amp; Tech Lead</h2><p>Led a six-member team developing HELIOS — Healthcare Enabled Language &amp; Intelligent Observation System. Internal Round Qualified.</p></article>
      <article><small>HELIOS</small><p>Healthcare pre-consultation system using guided patient intake, English/Hindi voice interaction, Whisper transcription, deterministic validation, Express APIs, PostgreSQL, Prisma ORM, and an authorized doctor workspace.</p></article>
      <article><small>TECHNICAL SKILLS</small><p>Java · JavaScript · TypeScript · SQL · React · Next.js · Node.js · Express · PostgreSQL · Prisma ORM · Whisper · Git · GitHub · Linux · Ubuntu · Tailscale</p></article>
      <article><small>CURRENTLY LEARNING</small><p>Java + DSA · Docker · Cloud Deployment · CI/CD · System Design · AI Engineering · AI Automation</p></article>
      <article><small>CONTACT</small><p><a href="mailto:luvtankha06@gmail.com">luvtankha06@gmail.com</a><br/><a href="tel:+918178185449">+91 81781 85449</a></p></article>
      <article><small>PROFILES</small><p><a href="https://github.com/luvtankha" target="_blank" rel="noopener noreferrer">GitHub</a><br/><a href="https://www.linkedin.com/in/luv-tankha-aa9532324" target="_blank" rel="noopener noreferrer">LinkedIn</a></p></article>
    </div>
    <div className="public-actions"><a className="public-link" href="https://github.com/luvtankha/HELIOS" target="_blank" rel="noopener noreferrer">HELIOS GitHub →</a><a className="public-link" href="https://github.com/luvtankha/portfolio" target="_blank" rel="noopener noreferrer">Portfolio GitHub →</a><Link className="public-link" href="/">Interactive portfolio →</Link></div>
  </main>;
}
