"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const privacyFlow = [
  "User Command",
  "Command Validation",
  "Local DOM + OCR + Vision",
  "Sensitive-Region Masking",
  "Consent Gate",
  "Sanitized Context",
  "Local Planner",
  "Validated Browser Action",
  "Result Verification",
];

export function CaptainCaseStudy() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.18 });
  const reduceMotion = useReducedMotion();

  return <section ref={ref} className="helios-case-study">
    <div className="case-study-heading">
      <span>CAPTAIN / CASE STUDY</span>
      <h3>Private browser automation without exposing raw sensitive context.</h3>
      <p>CAPTAIN is my Smart India Hackathon 2026 final-round project for SIH26171: On-device Visual Perception for Light-weight Browser Agents.</p>
    </div>

    <div className="case-core-grid">
      <article><small>PROBLEM</small><p>Browser agents need page context to act, but raw screenshots, credentials, and personally identifiable information can create privacy risk if sent outside the local browser boundary.</p></article>
      <article><small>IDEA</small><p>Observe the page locally, detect sensitive regions, create a privacy-safe representation, request consent when needed, and allow the planner to act only through validated browser actions.</p></article>
    </div>

    <div className="architecture-block">
      <div><small>SYSTEM ARCHITECTURE</small><h4>Local perception to privacy-safe browser execution.</h4></div>
      <div className="architecture-flow">{privacyFlow.map((item, index) => <motion.div key={item} initial={reduceMotion ? false : { opacity: 0, scale: .96 }} animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: .96 }} transition={{ duration: .28, delay: reduceMotion ? 0 : index * .07 }}><span>{item}</span>{index < privacyFlow.length - 1 && <i>↓</i>}</motion.div>)}</div>
    </div>

    <div className="case-detail-grid">
      <article><small>TECHNOLOGIES</small><div className="case-tags"><span>Manifest V3</span><span>JavaScript</span><span>TypeScript</span><span>Node.js</span><span>Tesseract.js</span><span>ONNX Runtime Web</span></div></article>
      <article><small>PRIVACY BOUNDARY</small><p>Raw sensitive values stay inside the local privacy boundary whenever possible. Detected private regions are masked before planner context is created, and protected credentials remain user-controlled.</p></article>
      <article><small>EXECUTION SAFETY</small><p>CAPTAIN validates tab, URL, document state, target identity, and action leases before execution, then verifies supported outcomes instead of assuming an action succeeded.</p></article>
      <article><small>RESULT</small><p><strong>Smart India Hackathon 2026 Final Round</strong> for SIH26171, with a working Manifest V3 browser-extension prototype and local companion service.</p></article>
    </div>
  </section>;
}
