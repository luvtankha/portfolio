"use client";

import { lazy, Suspense, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Compass,
  GitBranch,
  Goal,
  Mail,
  Network,
  Phone,
  Trophy,
  UserRound,
} from "lucide-react";
import { motion, AnimatePresence, useDragControls, useReducedMotion } from "framer-motion";
import { GithubProfileWindow } from "@/components/github/github-activity";
import { CurrentlyLearningWidget } from "@/components/goals/currently-learning-widget";
import { CommandPalette, type PortfolioSection } from "@/components/portfolio/command-palette";
import { TerminalEasterEgg } from "@/components/portfolio/terminal-easter-egg";

type Section = PortfolioSection;

const TechnologyGraph = lazy(() => import("@/components/portfolio/technology-graph").then(module => ({ default: module.TechnologyGraph })));
const ProjectExplorer = lazy(() => import("@/components/projects/project-explorer").then(module => ({ default: module.ProjectExplorer })));
const HackathonTimeline = lazy(() => import("@/components/hackathons/hackathon-timeline").then(module => ({ default: module.HackathonTimeline })));
const GithubActivity = lazy(() => import("@/components/github/github-activity").then(module => ({ default: module.GithubActivity })));
const Roadmap = lazy(() => import("@/components/goals/roadmap").then(module => ({ default: module.Roadmap })));

function DeferredPanel({ label, children }: { label: string; children: React.ReactNode }) {
  return <Suspense fallback={<div className="async-panel-placeholder" role="status" aria-label={`Loading ${label}`}><i /> Loading {label}…</div>}>{children}</Suspense>;
}

function DeferredMobileSection({ id, children }: { id: string; children: React.ReactNode }) {
  const ref = useRef<HTMLElement | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const target = ref.current;
    if (!target || !window.IntersectionObserver) { setReady(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setReady(true); observer.disconnect(); }
    }, { rootMargin: "450px 0px" });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);
  return <section id={id} ref={ref} className="mobile-page-block deferred-mobile-section" aria-busy={!ready}>{ready ? children : <div className="mobile-section-placeholder" aria-hidden="true" />}</section>;
}

const navigation: { id: Section; label: string; icon: typeof Compass }[] = [
  { id: "overview", label: "Overview", icon: Compass },
  { id: "about", label: "About", icon: UserRound },
  { id: "projects", label: "Projects", icon: BriefcaseBusiness },
  { id: "hackathons", label: "Hackathons", icon: Trophy },
  { id: "github", label: "GitHub", icon: GitBranch },
  { id: "goals", label: "Goals", icon: Goal },
  { id: "contact", label: "Contact", icon: Mail },
];

function Overview({ onNavigate, draggable = true }: { onNavigate: (section: Section) => void; draggable?: boolean }) {
  const linkedInDragControls = useDragControls();
  const reduceMotion = useReducedMotion();
  return (
    <div className="dash-overview">
      <section className="dashboard-hero">
        <div className="hero-system-label"><span>PROFILE / OVERVIEW</span><p><i /> BUILDING</p></div>
        <div className="dashboard-hero-copy">
          <h1>LUV TANKHA</h1>
          <p className="dashboard-role">Full-Stack Developer</p>
          <p className="dashboard-direction">→ <span>ASPIRING AI ENGINEER</span></p>
          <p className="dashboard-statement">Third-year B.Tech Data Science student building full-stack software, intelligent systems and automation.</p>
          <div className="dash-actions"><button onClick={() => onNavigate("projects")}>Explore Work <ArrowUpRight size={16} /></button><a href="https://github.com/luvtankha" target="_blank" rel="noopener noreferrer">GitHub</a><a href="/resume">Resume</a></div>
        </div>
        <div className="hero-console" aria-hidden="true"><div><span>system.profile</span><b>READY</b></div><pre><code><i>role</i>      full_stack_developer{"\n"}<i>location</i>  india / ist{"\n"}<i>target</i>    ai_engineering{"\n"}<i>mode</i>      building</code></pre></div>
      </section>
      <div className="overview-utility-grid">
        <GithubProfileWindow compact draggable={draggable} />
        <motion.section className="profile-window linkedin-profile-window" drag={draggable && !reduceMotion ? "x" : false} dragControls={linkedInDragControls} dragListener={false} dragConstraints={{ left: -10, right: 10 }} dragElastic={.08} dragSnapToOrigin whileHover={reduceMotion ? undefined : { y: -3 }}>
          <div className={`os-window-bar ${draggable ? "draggable-window-bar" : ""}`} onPointerDown={(event) => draggable && !reduceMotion && linkedInDragControls.start(event)}><span>linkedin.com/in/luv-tankha-aa9532324</span><div><i /><i /><i /></div></div>
          <div className="profile-window-body">
            <div className="linkedin-brand"><span><Network size={22} /></span><small>PROFILE PREVIEW</small></div>
            <h3>Luv Tankha</h3><p className="linkedin-handle">Full-Stack Developer</p><p className="linkedin-direction">Aspiring AI Engineer · B.Tech Data Science, MUIT</p>
            <p className="linkedin-about">Team Leader & Tech Lead for HELIOS at Smart India Hackathon 2026. Building practical software while progressing toward AI engineering.</p>
            <div className="linkedin-sections"><button onClick={() => onNavigate("hackathons")}><Trophy size={15} /> Hackathons</button><button onClick={() => onNavigate("projects")}><BriefcaseBusiness size={15} /> Projects</button><button onClick={() => onNavigate("about")}><Code2 size={15} /> Skills</button></div>
            <a className="profile-open-link" href="https://www.linkedin.com/in/luv-tankha-aa9532324" target="_blank" rel="noopener noreferrer">View LinkedIn <ArrowUpRight size={15} /></a>
          </div>
        </motion.section>
      </div>
      <button className="featured-helios-card" type="button" onClick={() => onNavigate("hackathons")}>
        <div><span>FEATURED HACKATHON PROJECT</span><h2>HELIOS</h2><p>Healthcare Enabled Language &amp; Intelligent Observation System</p></div><i>View Case Study <ArrowUpRight size={16} /></i>
      </button>
      <button className="overview-roadmap-preview" type="button" onClick={() => onNavigate("goals")}><span>ROADMAP</span><strong>Full Stack <i>→</i> AI Engineering</strong><small>Open career direction <ArrowUpRight size={14} /></small></button>
      <div className="overview-learning-window">
        <CurrentlyLearningWidget />
      </div>
    </div>
  );
}

function About() {
  return <div className="dash-section"><div className="content-heading"><span>01 / PROFILE</span><h2>About</h2><p>Third-year B.Tech Data Science student learning software engineering end-to-end and building toward AI engineering.</p></div><div className="about-md-window"><div className="os-window-bar"><span>ABOUT_ME.md</span><div><i /><i /><i /></div></div><div className="about-md-content"><p>I&apos;m Luv Tankha, a developer focused on understanding how modern software systems work end-to-end. I began by building with AI-assisted development, then started learning the layers underneath: frontend, backend, APIs, databases, deployment, infrastructure and AI.</p><small>CURRENTLY EXPLORING</small><ul><li>Java + DSA</li><li>Full-Stack Engineering</li><li>Cloud / DevOps</li><li>AI Engineering</li><li>AI Automation</li></ul><p>My long-term goal is to become an AI engineer capable of taking an idea from concept to production. Build first. Understand deeper. Improve continuously.</p></div></div><DeferredPanel label="technology graph"><TechnologyGraph /></DeferredPanel><div className="about-grid"><article className="dash-card"><small>EDUCATION</small><h3>B.Tech · Data Science</h3><p>MUIT · 3rd Year · CGPA 8.3</p></article><article className="dash-card"><small>BASED IN</small><h3>India · IST</h3><p>Focused on full-stack engineering, AI, automation and practical product building.</p></article></div></div>;
}

function Projects({ onNavigate }: { onNavigate: (section: Section) => void }) {
  return <div className="dash-section"><div className="content-heading"><span>02 / WORKSPACE</span><h2>Projects</h2><p>Open a project file to inspect its focus, stack, and next step.</p></div><DeferredPanel label="project explorer"><ProjectExplorer onCaseStudy={() => onNavigate("hackathons")} /></DeferredPanel></div>;
}

function Hackathons() {
  return <div className="dash-section hackathons-section"><div className="content-heading"><span>03 / BUILD SPRINTS</span><h2>Hackathons</h2><p>Fast-moving environments where the problem, system design, and product all have to come together.</p></div><DeferredPanel label="hackathon timeline"><HackathonTimeline /></DeferredPanel></div>;
}

function GithubPanel() {
  return <div className="dash-section"><div className="content-heading"><span>04 / OPEN SOURCE</span><h2>GitHub</h2><p>Live repository data from github.com/luvtankha.</p></div><div className="github-dashboard"><div className="github-summary"><GitBranch size={28} /><div><small>GITHUB API</small><strong>Live repository feed</strong></div><span>LIVE</span></div><DeferredPanel label="GitHub activity"><GithubActivity /></DeferredPanel></div></div>;
}

function Goals() {
  return <div className="dash-section goals-roadmap-section"><div className="content-heading"><span>05 / DIRECTION</span><h2>My roadmap</h2><p>A deliberate path from strong programming foundations to production-minded AI systems.</p></div><DeferredPanel label="roadmap"><Roadmap /></DeferredPanel></div>;
}

function Contact() {
  return <div className="dash-section contact-section"><div className="content-heading"><span>06 / SAY HELLO</span><h2>Let&apos;s build something useful.</h2><p>Open to collaborations, hackathons, internships, and conversations about full-stack or AI engineering.</p></div><a className="contact-card" href="mailto:luvtankha06@gmail.com"><div><Mail size={24} /><span><small>EMAIL</small><strong>luvtankha06@gmail.com</strong></span></div><ArrowUpRight size={22} /></a><a className="contact-card" href="tel:+918178185449"><div><Phone size={24} /><span><small>PHONE</small><strong>+91 81781 85449</strong></span></div><ArrowUpRight size={22} /></a><a className="contact-card" href="https://www.linkedin.com/in/luv-tankha-aa9532324" target="_blank" rel="noopener noreferrer"><div><Network size={24} /><span><small>LINKEDIN</small><strong>luv-tankha-aa9532324</strong></span></div><ArrowUpRight size={22} /></a><a className="contact-card" href="https://github.com/luvtankha" target="_blank" rel="noopener noreferrer"><div><GitBranch size={24} /><span><small>GITHUB</small><strong>github.com/luvtankha</strong></span></div><ArrowUpRight size={22} /></a><p className="contact-note">B.Tech Data Science · MUIT · 3rd Year · CGPA 8.3</p></div>;
}

function MobilePortfolio() {
  const scrollToSection = (section: Section) => document.getElementById(`mobile-${section}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <main className="mobile-portfolio">
      <header className="mobile-topbar">
        <div className="mobile-brand-row"><div><span className="portfolio-glyph">P</span><strong>LUV TANKHA</strong></div><CommandPalette onNavigate={scrollToSection} /><p><span className="status-dot" /> AVAILABLE</p></div>
        <nav aria-label="Portfolio sections">{navigation.map(item => <button type="button" key={item.id} onClick={() => scrollToSection(item.id)}>{item.label}</button>)}</nav>
      </header>
      <div className="mobile-content">
        <section id="mobile-overview" className="mobile-page-block"><Overview onNavigate={scrollToSection} draggable={false} /></section>
        <DeferredMobileSection id="mobile-about"><About /></DeferredMobileSection>
        <DeferredMobileSection id="mobile-projects"><Projects onNavigate={scrollToSection} /></DeferredMobileSection>
        <DeferredMobileSection id="mobile-hackathons"><Hackathons /></DeferredMobileSection>
        <DeferredMobileSection id="mobile-github"><GithubPanel /></DeferredMobileSection>
        <DeferredMobileSection id="mobile-goals"><Goals /></DeferredMobileSection>
        <DeferredMobileSection id="mobile-contact"><Contact /></DeferredMobileSection>
      </div>
      <TerminalEasterEgg onNavigate={scrollToSection} />
    </main>
  );
}

export function PortfolioDashboard() {
  const [active, setActive] = useState<Section>("overview");
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    const media = window.matchMedia("(max-width: 600px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  const panels: Record<Section, React.ReactNode> = {
    overview: <Overview onNavigate={setActive} />, about: <About />, projects: <Projects onNavigate={setActive} />, hackathons: <Hackathons />, github: <GithubPanel />, goals: <Goals />, contact: <Contact />,
  };
  if (isMobile) return <MobilePortfolio />;
  return (
    <main className="portfolio-frame">
      <header className="portfolio-topbar"><div><span className="portfolio-glyph">P</span><strong>LUV TANKHA</strong></div><CommandPalette onNavigate={setActive} /><p><span className="status-dot" /> AVAILABLE</p></header>
      <div className="portfolio-body">
        <aside className="portfolio-sidebar">
          <nav aria-label="Portfolio sections">{navigation.map(item => { const Icon = item.icon; return <button key={item.id} className={active === item.id ? "active" : ""} onClick={() => setActive(item.id)}><Icon size={16} /><span>{item.label}</span><i /></button>; })}</nav>
          <div className="sidebar-bottom">{active !== "overview" && <CurrentlyLearningWidget />}<div className="sidebar-foot"><span>LOCAL TIME</span><strong>IST · UTC+5:30</strong></div></div>
        </aside>
        <section className="portfolio-content" aria-live="polite">
          <AnimatePresence mode="wait"><motion.div key={active} initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -5 }} transition={{ duration: .22 }}>{panels[active]}</motion.div></AnimatePresence>
        </section>
      </div>
      <TerminalEasterEgg onNavigate={setActive} />
    </main>
  );
}
