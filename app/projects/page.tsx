import type { Metadata } from "next";
import Link from "next/link";
import { HeliosVideoWindow } from "@/components/media/helios-video-window";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected full-stack and AI-oriented projects by Luv Tankha.",
  alternates: { canonical: "/projects" },
};

const projects = [
  { title: "HELIOS", category: "Healthcare · AI · Full Stack", description: "Turn patient waiting time into clinical intelligence.", href: "/projects/helios", stack: "Next.js · TypeScript · Express · PostgreSQL · Prisma · Whisper" },
  { title: "Personal Developer Portfolio", category: "Product · Web", description: "An interactive Obsidian-inspired engineering dashboard for projects, hackathons, GitHub activity, learning goals, and career direction.", href: "https://github.com/luvtankha/portfolio", stack: "Next.js · TypeScript · Tailwind CSS · Framer Motion", external: true },
];

export default function ProjectsPage() {
  return <main className="public-page"><p className="public-eyebrow">02 / WORKSPACE</p><h1>Projects</h1><p className="public-lede">Real projects I have built or led while learning full-stack engineering and progressing toward AI engineering.</p><HeliosVideoWindow label="HELIOS project demo" /><div className="public-project-list">{projects.map(project => <article key={project.title}><p>{project.category}</p><div><h2>{project.title}</h2><span>{project.description}</span><small>{project.stack}</small></div>{project.external ? <a href={project.href} target="_blank" rel="noopener noreferrer">Open GitHub →</a> : <Link href={project.href}>Read case study →</Link>}</article>)}</div></main>;
}
