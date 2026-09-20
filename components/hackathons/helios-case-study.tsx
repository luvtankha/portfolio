"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const patientFlow = ["Patient", "Web Interface", "Voice Interaction", "Whisper", "Validation Engine", "Express API", "PostgreSQL", "Doctor Workspace"];
const doctorFlow = ["Doctor Workspace", "Patient Context", "Validated Observation", "Review / Action"];

function AnimatedFlow({ title, items, active }: { title: string; items: string[]; active: boolean }) {
  const reduceMotion = useReducedMotion();
  return <article className="workflow-card"><small>{title.toUpperCase()}</small><div className="workflow-nodes">{items.map((item, index) => <motion.div key={item} initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: .32, delay: reduceMotion ? 0 : index * .12 }}><span>{item}</span>{index < items.length - 1 && <i>↓</i>}</motion.div>)}</div></article>;
}

export function HeliosCaseStudy() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.18 });
  const reduceMotion = useReducedMotion();
  const flowActive = inView && !reduceMotion;
  return <section ref={ref} className="helios-case-study"><div className="case-study-heading"><span>HELIOS / CASE STUDY</span><h3>From spoken observations to an actionable healthcare workspace.</h3><p>A product case-study draft for the Smart India Hackathon project.</p></div><div className="case-core-grid"><article><small>PROBLEM</small><p>Healthcare observations can be complex, fragmented, and difficult to translate into structured context that supports a timely response.</p></article><article><small>IDEA</small><p>HELIOS explores a voice-assisted path that captures an observation, validates it, and presents it in a clearer workspace for review.</p></article></div><div className={`architecture-block ${flowActive ? "flow-active" : ""}`}><div><small>SYSTEM ARCHITECTURE</small><h4>Voice to validated clinical context.</h4></div><div className="architecture-flow">{patientFlow.map((item, index) => <motion.div key={item} initial={reduceMotion ? false : { opacity: 0, scale: .96 }} animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: .96 }} transition={{ duration: .28, delay: reduceMotion ? 0 : index * .09 }}><span>{item}</span>{index < patientFlow.length - 1 && <i>↓</i>}</motion.div>)}</div></div><div className="workflow-grid"><AnimatedFlow title="Patient Workflow" items={patientFlow.slice(0, 6)} active={inView} /><AnimatedFlow title="Doctor Workflow" items={doctorFlow} active={inView} /></div><div className="case-detail-grid"><article><small>TECHNOLOGIES</small><div className="case-tags"><span>Web Interface</span><span>Whisper</span><span>Express API</span><span>PostgreSQL</span><span>AI / Automation</span></div></article><article><small>MY CONTRIBUTION</small><p>Product framing, system architecture, workflow mapping, and implementation direction for the HELIOS concept.</p></article><article><small>CHALLENGES</small><p>Designing for clarity, creating a trustworthy validation step, and connecting voice input to structured persistence.</p></article><article><small>RESULT</small><p><strong>Internal Round Qualified</strong> — a focused concept with a clear patient-to-doctor workflow and extensible system foundation.</p></article></div></section>;
}
