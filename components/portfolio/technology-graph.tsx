"use client";

import { useState } from "react";

type Technology = {
  label: string;
  usedFor: string[];
  related: string[];
};

const technologies: Record<string, Technology> = {
  Frontend: { label: "Frontend", usedFor: ["Responsive product interfaces", "Component-driven experiences", "Accessible interaction patterns"], related: ["React", "Next.js", "Tailwind"] },
  React: { label: "React", usedFor: ["Reusable interface components", "Interactive application state", "Dashboard-style experiences"], related: ["Frontend", "Next.js", "Tailwind"] },
  "Next.js": { label: "Next.js", usedFor: ["Full-stack web applications", "Routing and server-side rendering", "Production-ready delivery"], related: ["React", "Express API", "Tailwind"] },
  Tailwind: { label: "Tailwind", usedFor: ["Systematic interface styling", "Responsive layouts", "Consistent visual tokens"], related: ["Frontend", "React", "Next.js"] },
  User: { label: "User", usedFor: ["Clear product journeys", "Interface feedback loops", "Practical software outcomes"], related: ["Frontend", "Express API", "AI / Automation"] },
  "Express API": { label: "Express API", usedFor: ["Application endpoints", "Backend orchestration", "Connecting services and data"], related: ["Frontend", "PostgreSQL", "Prisma"] },
  PostgreSQL: { label: "PostgreSQL", usedFor: ["HELIOS", "Structured application data", "Backend persistence"], related: ["Prisma", "Express API", "Node.js"] },
  Prisma: { label: "Prisma", usedFor: ["Type-safe data access", "Schema management", "Application persistence workflows"], related: ["PostgreSQL", "Express API", "Node.js"] },
  "AI / Automation": { label: "AI / Automation", usedFor: ["Workflow automation", "Model-assisted product features", "Practical engineering experiments"], related: ["Express API", "Node.js", "User"] },
  "Node.js": { label: "Node.js", usedFor: ["Backend runtime", "Automation scripts", "API services"], related: ["Express API", "PostgreSQL", "AI / Automation"] },
};

const Node = ({ label, selected, onSelect, kind = "" }: { label: string; selected: string; onSelect: (value: string) => void; kind?: string }) => (
  <button type="button" className={`tech-node ${kind} ${selected === label ? "selected" : ""}`} aria-pressed={selected === label} onClick={() => onSelect(label)}>{label}</button>
);

export function TechnologyGraph() {
  const [selected, setSelected] = useState("PostgreSQL");
  const current = technologies[selected];
  return (
    <section className="tech-graph-window">
      <div className="os-window-bar"><span>SKILLS_SYSTEM.graph</span><div><i /><i /><i /></div></div>
      <div className="tech-graph-body">
        <div className="tech-graph-heading"><div><small>INTERACTIVE TECHNOLOGY MAP</small><h3>How the system connects.</h3></div><p>Select a node to inspect where it fits.</p></div>
        <div className="tech-graph-layout">
          <div className="tech-map" aria-label="Technology relationship graph">
            <div className="frontend-cluster"><Node label="Frontend" selected={selected} onSelect={setSelected} kind="root" /><div className="frontend-branches"><div><Node label="React" selected={selected} onSelect={setSelected} /><span>—</span><Node label="Next.js" selected={selected} onSelect={setSelected} /></div><div><span>└</span><Node label="Tailwind" selected={selected} onSelect={setSelected} /></div></div></div>
            <div className="pipeline"><Node label="User" selected={selected} onSelect={setSelected} /><span>→</span><Node label="Frontend" selected={selected} onSelect={setSelected} /><span>→</span><Node label="Express API" selected={selected} onSelect={setSelected} /><span>→</span><Node label="PostgreSQL" selected={selected} onSelect={setSelected} /></div>
            <div className="data-branch"><span>↓</span><Node label="Prisma" selected={selected} onSelect={setSelected} /><span>↓</span><Node label="AI / Automation" selected={selected} onSelect={setSelected} /></div>
          </div>
          <aside className="tech-info-panel" aria-live="polite"><small>NODE DETAILS</small><h3>{current.label}</h3><p>Used for:</p><ul>{current.usedFor.map(item => <li key={item}>{item}</li>)}</ul><p>Related:</p><div>{current.related.map(item => <button key={item} type="button" onClick={() => setSelected(item)}>{item}</button>)}</div></aside>
        </div>
      </div>
    </section>
  );
}
