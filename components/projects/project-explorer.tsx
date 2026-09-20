"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, FileCode2, Folder, GitBranch, Sparkles } from "lucide-react";

type ProjectFile = {
  id: string;
  name: string;
  category: string;
  summary: string;
  stack: string[];
  type: "featured" | "experiment";
  github: string;
};

const files: ProjectFile[] = [
  { id: "helios", name: "HELIOS", category: "Healthcare • AI • Full Stack", summary: "Turn patient waiting time into clinical intelligence.", stack: ["Node.js", "React", "PostgreSQL", "Whisper", "Express"], type: "featured", github: "https://github.com/" },
  { id: "project-02", name: "Project-02", category: "Full Stack • Product", summary: "A focused product experiment built around practical, reliable interaction.", stack: ["React", "TypeScript", "PostgreSQL"], type: "featured", github: "https://github.com/" },
  { id: "project-03", name: "Project-03", category: "Web • Systems", summary: "A system-minded web build exploring clean flows and connected data.", stack: ["Next.js", "Express", "Prisma"], type: "featured", github: "https://github.com/" },
  { id: "ai", name: "AI", category: "Experiment • AI", summary: "Small explorations into useful model-assisted product experiences.", stack: ["Python", "APIs", "Prompting"], type: "experiment", github: "https://github.com/" },
  { id: "automation", name: "Automation", category: "Experiment • Workflows", summary: "Automation experiments designed to make repeatable work more reliable.", stack: ["Node.js", "Webhooks", "APIs"], type: "experiment", github: "https://github.com/" },
  { id: "web-development", name: "Web Development", category: "Experiment • Frontend", summary: "Interface and engineering experiments for responsive, usable web products.", stack: ["React", "Tailwind", "TypeScript"], type: "experiment", github: "https://github.com/" },
];

export function ProjectExplorer({ onCaseStudy }: { onCaseStudy: () => void }) {
  const [openId, setOpenId] = useState("helios");
  const [featuredOpen, setFeaturedOpen] = useState(true);
  const [experimentsOpen, setExperimentsOpen] = useState(true);
  const selected = files.find(file => file.id === openId) ?? files[0];
  const renderFolder = (label: string, folderOpen: boolean, setFolderOpen: (value: boolean) => void, type: ProjectFile["type"]) => <div className="explorer-folder"><button type="button" className="explorer-folder-button" aria-expanded={folderOpen} onClick={() => setFolderOpen(!folderOpen)}><ChevronDown size={15} className={folderOpen ? "" : "closed"} /><Folder size={16} /><span>{label}</span></button>{folderOpen && <div className="explorer-files">{files.filter(file => file.type === type).map(file => <button key={file.id} type="button" className={openId === file.id ? "active" : ""} onClick={() => setOpenId(file.id)}><FileCode2 size={15} /><span>{file.name}</span></button>)}</div>}</div>;
  return <div className="project-explorer"><aside className="project-tree"><div className="os-window-bar"><span>projects/</span><div><i /><i /><i /></div></div><div className="project-tree-body"><small>WORKSPACE</small>{renderFolder("Featured", featuredOpen, setFeaturedOpen, "featured")}{renderFolder("Experiments", experimentsOpen, setExperimentsOpen, "experiment")}</div></aside><section className="project-detail"><div className="project-detail-tab"><FileCode2 size={15} /><span>{selected.name}</span><i>ACTIVE</i></div><div className="project-detail-body"><p className="project-category">{selected.category}</p><h3>{selected.name}</h3><p className="project-summary">{selected.summary}</p><div className="project-tech-list">{selected.stack.map(item => <span key={item}>{item}</span>)}</div><div className="project-detail-actions">{selected.id === "helios" && <button type="button" onClick={onCaseStudy}>Case Study <ArrowUpRight size={15} /></button>}<a href={selected.github} target="_blank" rel="noreferrer"><GitBranch size={15} /> GitHub</a></div>{selected.id === "helios" && <div className="project-detail-note"><Sparkles size={15} /><p>Featured project from Smart India Hackathon 2026.</p></div>}</div></section></div>;
}
