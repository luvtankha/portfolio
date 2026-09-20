import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HELIOS — Healthcare AI Case Study",
  description: "HELIOS is a healthcare-focused AI and full-stack project that turns spoken observations into validated clinical context.",
  alternates: { canonical: "/projects/helios" },
  openGraph: { title: "HELIOS — Healthcare AI Case Study", description: "A healthcare-focused AI and full-stack project by YOUR NAME." },
};

export default function HeliosPage() {
  return <main className="public-page helios-public-page"><p className="public-eyebrow">PROJECT / HELIOS</p><h1>Turn patient waiting time into clinical intelligence.</h1><p className="public-lede">Healthcare Enabled Language &amp; Intelligent Observation System is a healthcare / AI concept developed for Smart India Hackathon.</p><div className="public-grid"><article><small>PROBLEM</small><p>Complex healthcare observations can be fragmented and hard to translate into clear, actionable context.</p></article><article><small>SYSTEM</small><p>Patient → Web Interface → Voice Interaction → Whisper → Validation Engine → Express API → PostgreSQL → Doctor Workspace.</p></article><article><small>STACK</small><p>React, Node.js, Express, PostgreSQL, Whisper, and workflow automation.</p></article><article><small>RESULT</small><p>Internal Round Qualified with a clear patient-to-doctor workflow and an extensible foundation.</p></article></div><div className="public-actions"><Link className="public-link" href="/hackathons">View hackathons →</Link><Link className="public-link" href="/projects">All projects →</Link></div></main>;
}
