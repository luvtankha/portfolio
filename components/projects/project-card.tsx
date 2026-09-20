import { ArrowUpRight, Boxes, Radio, Waypoints } from "lucide-react";
import type { Project } from "@/data/projects";

const icons = { signal: Radio, atlas: Waypoints, pulse: Boxes };
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = icons[project.slug as keyof typeof icons] ?? Boxes;
  return <a href={project.href} className={`project-card accent-${project.accent}`} target="_blank" rel="noreferrer"><div className="project-card-top"><span className="project-index">0{index + 1}</span><ArrowUpRight size={18} /></div><div className="project-icon"><Icon size={25} /></div><div><span className={`project-status ${project.status}`}><i />{project.status}</span><h3>{project.title}</h3><p>{project.description}</p></div><ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></a>;
}
