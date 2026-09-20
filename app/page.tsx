import Link from "next/link";
import { ArrowRight, Braces, Code2, Sparkles } from "lucide-react";
import { GithubActivity } from "@/components/github/github-activity";
import { ProjectCard } from "@/components/projects/project-card";
import { Window } from "@/components/ui/window";
import { goals } from "@/data/goals";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

export default function Home() {
  return (
    <main>
      <div className="hero-grid">
        <Window title="about.tsx" eyebrow="01 / INTRO" className="intro-window">
          <div className="intro-content">
            <p className="overline"><span /> Developer · Designer · Builder</p>
            <h1>I turn complex ideas into <em>clear, useful</em> products.</h1>
            <p className="lede">Full-stack developer focused on thoughtful interfaces, reliable systems, and the details that make software feel effortless.</p>
            <div className="hero-actions"><Link href="/projects" className="primary-button">Explore projects <ArrowRight size={16} /></Link><a href="https://github.com/" className="ghost-button"><Code2 size={16} /> GitHub</a></div>
          </div>
          <div className="code-visual" aria-label="A short statement shown as code">
            <div className="code-lines" aria-hidden="true">{[1,2,3,4,5,6,7].map(n => <span key={n}>{n}</span>)}</div>
            <pre><code><span className="purple">const</span> developer = &#123;{"\n"}  curiosity: <span className="blue">true</span>,{"\n"}  craft: <span className="green">&quot;intentional&quot;</span>,{"\n"}  shipping: <span className="blue">true</span>,{"\n"}&#125;;{"\n\n"}<span className="muted">// always learning</span></code></pre>
          </div>
        </Window>
        <aside className="side-stack">
          <Window title="now.md" eyebrow="LIVE"><div className="now-card"><span className="status-dot" /><div><small>CURRENTLY BUILDING</small><strong>An open-source design system</strong><p>Accessible primitives for product teams.</p></div></div></Window>
          <Window title="goals.json"><div className="goals">{goals.map(goal => <div key={goal.label}><p><span>{goal.label}</span><b>{goal.progress}%</b></p><i><span style={{ width: `${goal.progress}%` }} /></i></div>)}</div></Window>
        </aside>
      </div>

      <section className="section-block"><div className="section-heading"><div><span>02 / SELECTED WORK</span><h2>Projects with a point of view.</h2></div><Link href="/projects">View all projects <ArrowRight size={15} /></Link></div><div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></section>

      <div className="lower-grid">
        <Window title="skills.config" eyebrow="TOOLKIT"><div className="skills-list">{skillGroups.map((group) => <div key={group.label}><span>{group.label}</span><ul>{group.skills.map(skill => <li key={skill}><Braces size={14} />{skill}</li>)}</ul></div>)}</div></Window>
        <Window title="github.activity" eyebrow="API / LIVE"><div className="window-title-row"><div><Sparkles size={16} /><strong>Recent repositories</strong></div><a href="https://github.com/">Profile <ArrowRight size={14} /></a></div><GithubActivity /></Window>
      </div>
    </main>
  );
}
