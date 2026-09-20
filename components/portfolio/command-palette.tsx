"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Command, Search, X } from "lucide-react";

export type PortfolioSection = "overview" | "about" | "projects" | "hackathons" | "github" | "goals" | "contact";

type CommandItem = {
  label: string;
  hint: string;
  section: PortfolioSection;
  keywords: string;
};

const commands: CommandItem[] = [
  { label: "About me", hint: "Profile and technology graph", section: "about", keywords: "about profile skills technology graph" },
  { label: "View HELIOS", hint: "Healthcare AI case study", section: "hackathons", keywords: "helios healthcare ai case study" },
  { label: "View GitHub", hint: "Live repository preview", section: "github", keywords: "github repositories open source" },
  { label: "Hackathons", hint: "Build sprints and case studies", section: "hackathons", keywords: "hackathons sih smart india" },
  { label: "Projects", hint: "Project file explorer", section: "projects", keywords: "projects work explorer" },
  { label: "Goals", hint: "Career roadmap", section: "goals", keywords: "goals roadmap learning ai engineering" },
  { label: "Contact", hint: "Start a conversation", section: "contact", keywords: "contact email collaboration" },
];

export function CommandPalette({ onNavigate }: { onNavigate: (section: PortfolioSection) => void }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const closePalette = () => {
    setOpen(false);
    setQuery("");
    setSelectedIndex(0);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(current => !current);
      }
      if (event.key === "Escape") {
        setOpen(false);
        setQuery("");
        setSelectedIndex(0);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const matches = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return commands;
    return commands.filter(item => `${item.label} ${item.hint} ${item.keywords}`.toLowerCase().includes(normalized));
  }, [query]);

  const select = (section: PortfolioSection) => {
    onNavigate(section);
    closePalette();
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedIndex(current => Math.min(current + 1, matches.length - 1));
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedIndex(current => Math.max(current - 1, 0));
    }
    if (event.key === "Enter" && matches[selectedIndex]) {
      event.preventDefault();
      select(matches[selectedIndex].section);
    }
  };

  const palette = <div className="command-overlay" role="presentation" onMouseDown={closePalette}>
    <section className="command-palette" role="dialog" aria-modal="true" aria-label="Search portfolio" onMouseDown={event => event.stopPropagation()}>
      <div className="command-input-wrap"><Search size={17} /><input autoFocus value={query} onChange={event => { setQuery(event.target.value); setSelectedIndex(0); }} onKeyDown={handleInputKeyDown} placeholder="Search portfolio..." aria-label="Search portfolio commands" /><button type="button" onClick={closePalette} aria-label="Close command palette"><X size={16} /></button></div>
      <div className="command-results" role="listbox" aria-label="Portfolio commands">
        {matches.length ? matches.map((item, index) => <button type="button" key={item.label} role="option" aria-selected={selectedIndex === index} className={selectedIndex === index ? "selected" : ""} onMouseEnter={() => setSelectedIndex(index)} onClick={() => select(item.section)}><span><strong>{item.label}</strong><small>{item.hint}</small></span><ArrowRight size={15} /></button>) : <p>No commands found.</p>}
      </div>
      <footer><span><kbd>↑↓</kbd> navigate</span><span><kbd>↵</kbd> open</span><span><kbd>esc</kbd> close</span></footer>
    </section>
  </div>;

  return (
    <>
      <button className="command-trigger" type="button" onClick={() => setOpen(true)} aria-label="Search portfolio">
        <Search size={14} /><span>Search portfolio</span><kbd><Command size={11} /> K</kbd>
      </button>
      {open && createPortal(palette, document.body)}
    </>
  );
}
