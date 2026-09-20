export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  status: "shipped" | "building";
  accent: "violet" | "blue" | "green";
  href: string;
};

export const projects: Project[] = [
  { slug: "signal", title: "Signal", description: "A focused incident workspace that turns noisy alerts into a clear, shared timeline.", stack: ["Next.js", "TypeScript", "Postgres"], status: "shipped", accent: "violet", href: "https://github.com/" },
  { slug: "atlas", title: "Atlas", description: "A local-first research canvas for connecting notes, sources, and working ideas.", stack: ["React", "Tauri", "SQLite"], status: "building", accent: "blue", href: "https://github.com/" },
  { slug: "pulse", title: "Pulse", description: "A lightweight engineering dashboard for the signals that matter during a release.", stack: ["Next.js", "GitHub API", "Recharts"], status: "shipped", accent: "green", href: "https://github.com/" },
];
