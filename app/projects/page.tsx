import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";
export default function ProjectsPage() { return <main className="inner-page"><div className="page-heading"><span>ARCHIVE / 2024—2026</span><h1>Projects</h1><p>A small collection of tools and experiments built around real problems.</p></div><div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></main>; }
