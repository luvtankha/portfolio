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
  Network,
  Trophy,
  UserRound,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { GithubActivity, GithubProfileWindow } from "@/components/github/github-activity";
import { TechnologyGraph } from "@/components/portfolio/technology-graph";
import { HackathonTimeline } from "@/components/hackathons/hackathon-timeline";
import { ProjectExplorer } from "@/components/projects/project-explorer";
import { Roadmap } from "@/components/goals/roadmap";

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
      <section className="dashboard-hero">
        <div className="hero-system-label"><span>PROFILE / OVERVIEW</span><p><i /> BUILDING</p></div>
        <div className="dashboard-hero-copy">
          <h1>YOUR NAME</h1>
          <p className="dashboard-role">Full-Stack Developer</p>
          <p className="dashboard-direction">Building toward <span>AI Engineering</span></p>
          <p className="dashboard-statement">I build practical systems combining software engineering, automation and AI.</p>
          <div className="dash-actions"><button onClick={() => onNavigate("projects")}>Explore Work <ArrowUpRight size={16} /></button><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a><a href="mailto:hello@example.com?subject=Resume request">Resume</a></div>
        </div>
        <div className="hero-console" aria-hidden="true"><div><span>system.profile</span><b>READY</b></div><pre><code><i>role</i>      full_stack_developer{"\n"}<i>location</i>  india / ist{"\n"}<i>target</i>    ai_engineering{"\n"}<i>mode</i>      building</code></pre></div>
      </section>
      <div className="dashboard-metrics">
        <button onClick={() => onNavigate("projects")}><span>Projects</span><strong>05</strong><i>Selected work <ArrowUpRight size={13} /></i></button>
        <button onClick={() => onNavigate("hackathons")}><span>Hackathons</span><strong>02</strong><i>Build sprints <ArrowUpRight size={13} /></i></button>
        <button onClick={() => onNavigate("goals")}><span>Current Goal</span><strong>AI Engineer</strong><i>View roadmap <ArrowUpRight size={13} /></i></button>
      </div>
      <div className="social-window-grid">
        <GithubProfileWindow compact />
        <section className="profile-window linkedin-profile-window">
          <div className="os-window-bar"><span>linkedin.com/in/username</span><div><i /><i /><i /></div></div>
          <div className="profile-window-body">
            <div className="linkedin-brand"><span><Network size={22} /></span><small>PROFILE PREVIEW</small></div>
            <h3>YOUR NAME</h3><p className="linkedin-handle">Full-Stack Developer</p><p className="linkedin-direction">Aspiring AI Engineer</p>
            <p className="linkedin-about">Building practical software at the intersection of engineering, automation and AI.</p>
            <div className="linkedin-sections"><button onClick={() => onNavigate("hackathons")}><Trophy size={15} /> Hackathons</button><button onClick={() => onNavigate("projects")}><BriefcaseBusiness size={15} /> Projects</button><button onClick={() => onNavigate("about")}><Code2 size={15} /> Skills</button></div>
            <a className="profile-open-link" href="https://www.linkedin.com/in/username" target="_blank" rel="noreferrer">View LinkedIn <ArrowUpRight size={15} /></a>
          </div>
        </section>
      </div>
    </div>
  );
}

function About() {
  return <div className="dash-section"><div className="content-heading"><span>01 / PROFILE</span><h2>About</h2><p>A growing engineering toolkit, guided by curiosity about how modern software works end-to-end.</p></div><div className="about-md-window"><div className="os-window-bar"><span>ABOUT_ME.md</span><div><i /><i /><i /></div></div><div className="about-md-content"><p>Developer focused on understanding how modern software systems work end-to-end.</p><small>CURRENTLY EXPLORING</small><ul><li>Java + DSA</li><li>Full-Stack Engineering</li><li>Cloud / DevOps</li><li>AI Engineering</li><li>AI Automation</li></ul><p>I enjoy turning ideas into working products and understanding the systems underneath them.</p></div></div><TechnologyGraph /><div className="about-grid"><article className="dash-card"><small>BASED IN</small><h3>India · IST</h3><p>Building consistently, learning publicly, and collaborating across time zones.</p></article></div></div>;
}

function Projects({ onNavigate }: { onNavigate: (section: Section) => void }) {
  return <div className="dash-section"><div className="content-heading"><span>02 / WORKSPACE</span><h2>Projects</h2><p>Open a project file to inspect its focus, stack, and next step.</p></div><ProjectExplorer onCaseStudy={() => onNavigate("hackathons")} /></div>;
}

function Hackathons() {
  return <div className="dash-section hackathons-section"><div className="content-heading"><span>03 / BUILD SPRINTS</span><h2>Hackathons</h2><p>Fast-moving environments where the problem, system design, and product all have to come together.</p></div><HackathonTimeline /></div>;
}

function GithubPanel() {
  return <div className="dash-section"><div className="content-heading"><span>04 / OPEN SOURCE</span><h2>GitHub</h2><p>Live API preview. Add your GitHub username to replace the demonstration repositories.</p></div><div className="github-dashboard"><div className="github-summary"><GitBranch size={28} /><div><small>GITHUB API</small><strong>Live repository feed</strong></div><span>DEMO</span></div><GithubActivity /></div></div>;
}

function Goals() {
  return <div className="dash-section goals-roadmap-section"><div className="content-heading"><span>05 / DIRECTION</span><h2>My roadmap</h2><p>A deliberate path from strong programming foundations to production-minded AI systems.</p></div><Roadmap /></div>;
}

function Contact() {
  return <div className="dash-section contact-section"><div className="content-heading"><span>06 / SAY HELLO</span><h2>Let&apos;s build something useful.</h2><p>Open to collaborations, internships, and conversations about full-stack or AI engineering.</p></div><a className="contact-card" href="mailto:hello@example.com"><div><Mail size={24} /><span><small>EMAIL</small><strong>hello@example.com</strong></span></div><ArrowUpRight size={22} /></a><p className="contact-note">Replace the sample email and social links with your own details before sharing publicly.</p></div>;
}

export function PortfolioDashboard() {
  const [active, setActive] = useState<Section>("overview");
  const reduceMotion = useReducedMotion();
  const panels: Record<Section, React.ReactNode> = {
    overview: <Overview onNavigate={setActive} />, about: <About />, projects: <Projects onNavigate={setActive} />, hackathons: <Hackathons />, github: <GithubPanel />, goals: <Goals />, contact: <Contact />,
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
