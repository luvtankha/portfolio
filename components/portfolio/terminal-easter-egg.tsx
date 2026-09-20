"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Terminal, X } from "lucide-react";
import { createPortal } from "react-dom";
import type { PortfolioSection } from "@/components/portfolio/command-palette";

type TerminalLine = { prompt?: string; text: string[] };

const helpText = [
  "Available commands:",
  "",
  "about",
  "projects",
  "hackathons",
  "skills",
  "github",
  "linkedin",
  "goals",
  "contact",
  "clear",
];

const sectionCommands: Record<string, PortfolioSection> = {
  about: "about",
  skills: "about",
  hackathons: "hackathons",
  github: "github",
  linkedin: "overview",
  goals: "goals",
  contact: "contact",
};

export function TerminalEasterEgg({ onNavigate }: { onNavigate: (section: PortfolioSection) => void }) {
  const mounted = useSyncExternalStore(() => () => undefined, () => true, () => false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<TerminalLine[]>([{ prompt: "$ help", text: helpText }]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const runCommand = (event: React.FormEvent) => {
    event.preventDefault();
    const command = input.trim().toLowerCase();
    if (!command) return;
    setInput("");

    if (command === "clear") {
      setLines([]);
      return;
    }

    if (command === "help") {
      setLines(current => [...current, { prompt: "$ help", text: helpText }]);
      return;
    }

    if (command === "projects") {
      setLines(current => [...current, { prompt: "$ projects", text: ["1. HELIOS", "2. Portfolio", "3. AI Experiments"] }]);
      return;
    }

    if (command === "linkedin") {
      onNavigate("overview");
      setLines(current => [...current, { prompt: "$ linkedin", text: ["Opening the LinkedIn-style profile preview on Overview."] }]);
      return;
    }

    const section = sectionCommands[command];
    if (section) {
      onNavigate(section);
      setLines(current => [...current, { prompt: `$ ${command}`, text: [`Opening ${command === "skills" ? "the skills graph" : command}...`] }]);
      return;
    }

    setLines(current => [...current, { prompt: `$ ${command}`, text: [`Command not found: ${command}`, "Type help to see available commands."] }]);
  };

  if (!mounted) return null;

  return createPortal(
    <>
      <button className="terminal-trigger" type="button" onClick={() => setOpen(true)} aria-label="Open portfolio terminal"><Terminal size={16} /><span>&gt;_</span></button>
      {open && <section className="portfolio-terminal" role="dialog" aria-modal="true" aria-label="Portfolio terminal">
        <header><div><Terminal size={15} /><span>portfolio-terminal</span></div><button type="button" onClick={() => setOpen(false)} aria-label="Close terminal"><X size={15} /></button></header>
        <div className="terminal-output" aria-live="polite">
          {lines.map((line, index) => <div className="terminal-entry" key={`${line.prompt}-${index}`}><p>{line.prompt}</p>{line.text.map((text, lineIndex) => <span key={`${text}-${lineIndex}`}>{text || "\u00a0"}</span>)}</div>)}
        </div>
        <form onSubmit={runCommand}><span>$</span><input ref={inputRef} value={input} onChange={event => setInput(event.target.value)} aria-label="Terminal command" autoComplete="off" spellCheck={false} placeholder="Type a command..." /></form>
      </section>}
    </>,
    document.body,
  );
}
