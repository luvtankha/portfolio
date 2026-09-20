import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected full-stack, AI, and automation projects by YOUR NAME.",
  alternates: { canonical: "/projects" },
};

const projects = [
  { title: "HELIOS", category: "Healthcare · AI · Full Stack", description: "Turn patient waiting time into clinical intelligence.", href: "/projects/helios", stack: "React · Express · PostgreSQL · Whisper" },
  { title: "AI Experiments", category: "Exploration · AI", description: "Small explorations into useful model-assisted product experiences.", stack: "APIs · Prompting · Automation" },
  { title: "Portfolio", category: "Product · Web", description: "A desktop-inspired developer portfolio built around systems, work, and learning.", stack: "Next.js · TypeScript · Tailwind" },
];

export default function ProjectsPage() {
  return <main className="public-page"><p className="public-eyebrow">02 / WORKSPACE</p><h1>Projects</h1><p className="public-lede">Selected work in full-stack engineering, AI, and automation.</p><div className="public-project-list">{projects.map(project => <article key={project.title}><p>{project.category}</p><div><h2>{project.title}</h2><span>{project.description}</span><small>{project.stack}</small></div>{project.href ? <Link href={project.href}>Read case study →</Link> : <span className="public-muted">In exploration</span>}</article>)}</div></main>;
}
