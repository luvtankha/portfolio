import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HELIOS — Healthcare AI Case Study",
  description: "HELIOS is a healthcare pre-consultation system led by Luv Tankha as Team Leader and Tech Lead for Smart India Hackathon 2026.",
  alternates: { canonical: "/projects/helios" },
  openGraph: { title: "HELIOS — Healthcare AI Case Study", description: "Healthcare Enabled Language & Intelligent Observation System — Smart India Hackathon 2026." },
};

export default function HeliosPage() {
  return <main className="public-page helios-public-page"><p className="public-eyebrow">PROJECT / HELIOS</p><h1>Turn patient waiting time into clinical intelligence.</h1><p className="public-lede">Healthcare Enabled Language &amp; Intelligent Observation System is the Smart India Hackathon 2026 healthcare project I led as Team Leader &amp; Tech Lead within a six-member team.</p><div className="public-grid"><article><small>PROBLEM</small><p>Patients may spend significant time waiting before seeing a doctor while basic history and contextual information are still collected after the consultation begins.</p></article><article><small>SOLUTION</small><p>HELIOS uses waiting time for consent, concern collection, guided follow-up questions, voice or text responses, document handling, and structured information for an authorized doctor workspace.</p></article><article><small>SYSTEM</small><p>Patient → Web Interface → Voice Interaction → Whisper → Validation Engine → Express API → PostgreSQL → Doctor Workspace.</p></article><article><small>STACK</small><p>Next.js, React, TypeScript, Node.js, Express, PostgreSQL, Prisma ORM, Whisper, SpeechSynthesisUtterance, MediaRecorder, and getUserMedia.</p></article><article><small>ROLE</small><p>Team Leader &amp; Tech Lead — team leadership, technical direction, architecture, workflow design, and development coordination.</p></article><article><small>RESULT</small><p>Internal Round Qualified at Smart India Hackathon 2026.</p></article><article><small>SAFETY</small><p>HELIOS organizes patient-provided information. It does not diagnose, prescribe medication, recommend treatment, or replace a clinician.</p></article></div><div className="public-actions"><a className="public-link" href="https://github.com/luvtankha/HELIOS" target="_blank" rel="noopener noreferrer">Open HELIOS on GitHub →</a><Link className="public-link" href="/hackathons">View hackathons →</Link><Link className="public-link" href="/projects">All projects →</Link></div></main>;
}
