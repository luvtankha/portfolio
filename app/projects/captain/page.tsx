import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CAPTAIN — Privacy-First Browser Agent",
  description: "CAPTAIN is a privacy-first browser agent built for the Smart India Hackathon 2026 final round under SIH26171.",
  alternates: { canonical: "/projects/captain" },
  openGraph: {
    title: "CAPTAIN — Privacy-First Browser Agent",
    description: "On-device visual perception, PII redaction, consent gates, and validated browser actions for SIH26171.",
  },
};

export default function CaptainPage() {
  return <main className="public-page helios-public-page">
    <p className="public-eyebrow">PROJECT / CAPTAIN</p>
    <h1>Privacy-first browser automation with on-device perception.</h1>
    <p className="public-lede">CAPTAIN is my Smart India Hackathon 2026 final-round project for SIH26171 — On-device Visual Perception for Light-weight Browser Agents.</p>

    <div className="public-grid">
      <article><small>PROBLEM</small><p>Browser agents need webpage context to plan actions, but raw screenshots and sensitive values can expose private information if they leave the local browser boundary.</p></article>
      <article><small>SOLUTION</small><p>CAPTAIN performs page observation locally, detects and masks sensitive information before planning, asks for consent when required, and executes only validated browser actions.</p></article>
      <article><small>SYSTEM</small><p>User Command → Local DOM/OCR/Vision → Sensitive-Region Masking → Consent Gate → Sanitized Context → Local Planner → Validated Action → Result Verification.</p></article>
      <article><small>STACK</small><p>Manifest V3, JavaScript, TypeScript, Node.js, Tesseract.js, ONNX Runtime Web, local OCR, browser APIs, and an authenticated loopback companion service.</p></article>
      <article><small>PRIVACY</small><p>Protected values such as passwords, OTPs, PINs, payment-card data, tokens, and API keys remain user-controlled and are blocked from agent entry or submission.</p></article>
      <article><small>RESULT</small><p>Selected for the Smart India Hackathon 2026 Final Round under problem statement SIH26171.</p></article>
    </div>

    <div className="public-actions">
      <a className="public-link" href="https://github.com/luvtankha/captain" target="_blank" rel="noopener noreferrer">Open CAPTAIN on GitHub →</a>
      <Link className="public-link" href="/hackathons">View hackathons →</Link>
      <Link className="public-link" href="/projects">All projects →</Link>
    </div>
  </main>;
}
