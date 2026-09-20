"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Compass,
  GitBranch,
  Goal,
  Mail,
  MapPin,
  Sparkles,
  Trophy,
  UserRound,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { hackathons } from "@/data/hackathons";
import { goals } from "@/data/goals";
import { skillGroups } from "@/data/skills";
import { GithubActivity } from "@/components/github/github-activity";

type Section = "overview" | "about" | "projects" | "hackathons" | "github" | "goals" | "contact";

const navigation: { id: Section; label: string; icon: typeof Compass }[] = [
  { id: "overview", label: "Overview", icon: Compass },
  { id: "about", label: "About", icon: UserRound },
  { id: "projects", label: "Projects", icon: BriefcaseBusiness },
  { id: "hackathons", label: "Hackathons", icon: Trophy },
  { id: "github", label: "GitHub", icon: GitBranch },
  { id: "goals", label: "Goals", icon: Goal },
  { id: "contact", label: "Contact", icon: Mail },
];

function Overview({ onNavigate }: { onNavigate: (section: Section) => void }) {
  return (
    <div className="dash-overview">
      <section className="identity-panel">
        <div className="identity-copy">
          <span className="dash-kicker">HELLO, I&apos;M</span>
          <h1>YOUR NAME</h1>
          <p className="role-line">Full-Stack Developer <span>/</span> Aspiring AI Engineer</p>
          <p className="location-line"><MapPin size={15} /> India <i /> IST</p>
          <div className="build-status"><span className="status-dot" /><div><small>CURRENT STATUS</small><strong>Building</strong></div></div>
          <div className="dash-actions"><button onClick={() => onNavigate("projects")}>View my work <ArrowUpRight size={16} /></button><button className="subtle" onClick={() => onNavigate("contact")}>Contact me</button></div>
        </div>
        <div className="learning-orbit" aria-label="Current learning path: Full-Stack to AI Engineering">
          <div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" />
          <div className="orbit-core"><Sparkles size={23} /><span>AI</span></div>
          <div className="orbit-label"><small>CURRENTLY LEARNING</small><strong>Full-Stack <span>→</span><br /> AI Engineering</strong></div>
        </div>
      </section>
      <div className="overview-metrics">
        <article><span>01</span><div><small>FOCUS</small><strong>Useful products</strong><p>Clear interfaces backed by dependable systems.</p></div></article>
        <article><span>02</span><div><small>TOOLKIT</small><strong>TypeScript + React</strong><p>Modern full-stack foundations, built to scale.</p></div></article>
        <article><span>03</span><div><small>NEXT</small><strong>Applied AI</strong><p>Learning to turn models into practical tools.</p></div></article>
      </div>
    </div>
  );
}

function About() {
  return <div className="dash-section"><div className="content-heading"><span>01 / PROFILE</span><h2>About</h2><p>I build across the stack and care deeply about the interface between people and technology.</p></div><div className="about-grid"><article className="dash-card wide"><small>MY DIRECTION</small><h3>From full-stack foundations to intelligent products.</h3><p>I&apos;m strengthening my product engineering skills while moving deliberately into AI engineering—learning how to build reliable, useful experiences around modern models.</p></article><article className="dash-card"><small>BASED IN</small><h3>India</h3><p>Working in IST and open to collaborating across time zones.</p></article>{skillGroups.map(group => <article className="dash-card" key={group.label}><small>{group.label.toUpperCase()}</small><ul>{group.skills.map(skill => <li key={skill}><Code2 size={14} />{skill}</li>)}</ul></article>)}</div></div>;
}

function Projects() {
  return <div className="dash-section"><div className="content-heading"><span>02 / WORK</span><h2>Projects</h2><p>Selected products and experiments. Replace these examples with your real work when ready.</p></div><div className="dash-projects">{projects.map((project, index) => <a key={project.slug} href={project.href} target="_blank" rel="noreferrer" className="dash-project"><div><span>0{index + 1}</span><ArrowUpRight size={18} /></div><small>{project.status}</small><h3>{project.title}</h3><p>{project.description}</p><ul>{project.stack.map(item => <li key={item}>{item}</li>)}</ul></a>)}</div></div>;
}

function Hackathons() {
  return <div className="dash-section"><div className="content-heading"><span>03 / SPRINTS</span><h2>Hackathons</h2><p>Fast builds, sharp constraints, and lessons earned in public.</p></div><div className="dash-list">{hackathons.map((item, index) => <article key={item.name}><span>0{index + 1}</span><div><small>{item.year} · {item.name}</small><h3>{item.project}</h3><p>{item.description}</p></div><strong>{item.result}</strong></article>)}</div></div>;
}

function GithubPanel() {
  return <div className="dash-section"><div className="content-heading"><span>04 / OPEN SOURCE</span><h2>GitHub</h2><p>Live API preview. Add your GitHub username to replace the demonstration repositories.</p></div><div className="github-dashboard"><div className="github-summary"><GitBranch size={28} /><div><small>GITHUB API</small><strong>Live repository feed</strong></div><span>DEMO</span></div><GithubActivity /></div></div>;
}

function Goals() {
  return <div className="dash-section"><div className="content-heading"><span>05 / ROADMAP</span><h2>Goals</h2><p>Progress is easier to sustain when the next milestone stays visible.</p></div><div className="goal-dashboard">{goals.map((goal, index) => <article key={goal.label}><span>0{index + 1}</span><div><h3>{goal.label}</h3><i><b style={{ width: `${goal.progress}%` }} /></i></div><strong>{goal.progress}%</strong></article>)}</div><article className="learning-card"><small>LEARNING PATH</small><h3>Full-Stack Development <span>→</span> AI Engineering</h3><p>Building stronger foundations in model integration, retrieval, evaluation, and production AI systems.</p></article></div>;
}

function Contact() {
  return <div className="dash-section contact-section"><div className="content-heading"><span>06 / SAY HELLO</span><h2>Let&apos;s build something useful.</h2><p>Open to collaborations, internships, and conversations about full-stack or AI engineering.</p></div><a className="contact-card" href="mailto:hello@example.com"><div><Mail size={24} /><span><small>EMAIL</small><strong>hello@example.com</strong></span></div><ArrowUpRight size={22} /></a><p className="contact-note">Replace the sample email and social links with your own details before sharing publicly.</p></div>;
}

export function PortfolioDashboard() {
  const [active, setActive] = useState<Section>("overview");
  const reduceMotion = useReducedMotion();
  const panels: Record<Section, React.ReactNode> = {
    overview: <Overview onNavigate={setActive} />, about: <About />, projects: <Projects />, hackathons: <Hackathons />, github: <GithubPanel />, goals: <Goals />, contact: <Contact />,
  };
  return (
    <main className="portfolio-frame">
      <header className="portfolio-topbar"><div><span className="portfolio-glyph">P</span><strong>Portfolio</strong></div><p><span className="status-dot" /> Online</p></header>
      <div className="portfolio-body">
        <aside className="portfolio-sidebar">
          <nav aria-label="Portfolio sections">{navigation.map(item => { const Icon = item.icon; return <button key={item.id} className={active === item.id ? "active" : ""} onClick={() => setActive(item.id)}><Icon size={16} /><span>{item.label}</span><i /></button>; })}</nav>
          <div className="sidebar-foot"><span>LOCAL TIME</span><strong>IST · UTC+5:30</strong></div>
        </aside>
        <section className="portfolio-content" aria-live="polite">
          <AnimatePresence mode="wait"><motion.div key={active} initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -5 }} transition={{ duration: .22 }}>{panels[active]}</motion.div></AnimatePresence>
        </section>
      </div>
    </main>
  );
}
