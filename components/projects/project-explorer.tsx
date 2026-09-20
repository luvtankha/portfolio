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
  { id: "helios", name: "HELIOS", category: "Healthcare • AI • Full Stack", summary: "Turn patient waiting time into clinical intelligence.", stack: ["Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Whisper"], type: "featured", github: "https://github.com/luvtankha/HELIOS" },
  { id: "portfolio", name: "Developer Portfolio", category: "Portfolio • Full Stack • Interactive UI", summary: "An Obsidian-inspired engineering dashboard for projects, hackathons, GitHub activity, learning goals, and career direction.", stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"], type: "featured", github: "https://github.com/luvtankha/portfolio" },
];

export function ProjectExplorer({ onCaseStudy }: { onCaseStudy: () => void }) {
  const [openId, setOpenId] = useState("helios");
  const [featuredOpen, setFeaturedOpen] = useState(true);
  const selected = files.find(file => file.id === openId) ?? files[0];
  const renderFolder = (label: string, folderOpen: boolean, setFolderOpen: (value: boolean) => void, type: ProjectFile["type"]) => <div className="explorer-folder"><button type="button" className="explorer-folder-button" aria-expanded={folderOpen} onClick={() => setFolderOpen(!folderOpen)}><ChevronDown size={15} className={folderOpen ? "" : "closed"} /><Folder size={16} /><span>{label}</span></button>{folderOpen && <div className="explorer-files">{files.filter(file => file.type === type).map(file => <button key={file.id} type="button" className={openId === file.id ? "active" : ""} onClick={() => setOpenId(file.id)}><FileCode2 size={15} /><span>{file.name}</span></button>)}</div>}</div>;
  return <div className="project-explorer"><aside className="project-tree"><div className="os-window-bar"><span>projects/</span><div><i /><i /><i /></div></div><div className="project-tree-body"><small>WORKSPACE</small>{renderFolder("Featured", featuredOpen, setFeaturedOpen, "featured")}</div></aside><section className="project-detail"><div className="project-detail-tab"><FileCode2 size={15} /><span>{selected.name}</span><i>ACTIVE</i></div><div className="project-detail-body"><p className="project-category">{selected.category}</p><h3>{selected.name}</h3><p className="project-summary">{selected.summary}</p><div className="project-tech-list">{selected.stack.map(item => <span key={item}>{item}</span>)}</div><div className="project-detail-actions">{selected.id === "helios" && <button type="button" onClick={onCaseStudy}>Case Study <ArrowUpRight size={15} /></button>}<a href={selected.github} target="_blank" rel="noopener noreferrer"><GitBranch size={15} /> GitHub</a></div>{selected.id === "helios" && <div className="project-detail-note"><Sparkles size={15} /><p>Smart India Hackathon 2026 · Team Leader & Tech Lead · Internal Round Qualified.</p></div>}</div></section></div>;
}
