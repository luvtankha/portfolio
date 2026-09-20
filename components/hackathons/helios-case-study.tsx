"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const patientFlow = ["Patient", "Web Interface", "Voice Interaction", "Whisper", "Validation Engine", "Express API", "PostgreSQL", "Doctor Workspace"];
const doctorFlow = ["Doctor Workspace", "Source-labelled History", "Timeline & Documents", "Clinical Brief", "Doctor Verification"];

function AnimatedFlow({ title, items, active }: { title: string; items: string[]; active: boolean }) {
  const reduceMotion = useReducedMotion();
  return <article className="workflow-card"><small>{title.toUpperCase()}</small><div className="workflow-nodes">{items.map((item, index) => <motion.div key={item} initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: .32, delay: reduceMotion ? 0 : index * .12 }}><span>{item}</span>{index < items.length - 1 && <i>↓</i>}</motion.div>)}</div></article>;
}

export function HeliosCaseStudy() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.18 });
  const reduceMotion = useReducedMotion();
  const flowActive = inView && !reduceMotion;
  return <section ref={ref} className="helios-case-study"><div className="case-study-heading"><span>HELIOS / CASE STUDY</span><h3>Turn patient waiting time into clinical intelligence.</h3><p>HELIOS is the Smart India Hackathon 2026 project I led as Team Leader &amp; Tech Lead.</p></div><div className="case-core-grid"><article><small>PROBLEM</small><p>Patients can spend significant time waiting before a consultation while basic history and context are still collected after the appointment begins.</p></article><article><small>IDEA</small><p>HELIOS uses that waiting time for guided consent, concern collection, follow-up questions, voice responses, documents, and structured information that an authorized doctor can review.</p></article></div><div className={`architecture-block ${flowActive ? "flow-active" : ""}`}><div><small>SYSTEM ARCHITECTURE</small><h4>Patient input to structured doctor workspace.</h4></div><div className="architecture-flow">{patientFlow.map((item, index) => <motion.div key={item} initial={reduceMotion ? false : { opacity: 0, scale: .96 }} animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: .96 }} transition={{ duration: .28, delay: reduceMotion ? 0 : index * .09 }}><span>{item}</span>{index < patientFlow.length - 1 && <i>↓</i>}</motion.div>)}</div></div><div className="workflow-grid"><AnimatedFlow title="Patient Workflow" items={patientFlow.slice(0, 6)} active={inView} /><AnimatedFlow title="Doctor Workflow" items={doctorFlow} active={inView} /></div><div className="case-detail-grid"><article><small>TECHNOLOGIES</small><div className="case-tags"><span>Next.js</span><span>TypeScript</span><span>Whisper</span><span>Express API</span><span>PostgreSQL</span><span>Prisma ORM</span></div></article><article><small>MY ROLE</small><p><strong>Team Leader &amp; Tech Lead.</strong> I led the six-member team and helped guide technical direction, development coordination, system architecture, workflow design, and implementation decisions.</p></article><article><small>SAFETY BOUNDARY</small><p>HELIOS organizes patient-provided information. It does not diagnose, prescribe medication, recommend treatment, or replace a clinician.</p></article><article><small>RESULT</small><p><strong>Internal Round Qualified</strong> — a focused concept with a clear patient-to-doctor workflow and extensible system foundation.</p></article></div></section>;
}
