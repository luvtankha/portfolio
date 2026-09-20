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
  {
    slug: "helios",
    title: "HELIOS",
    description: "Healthcare pre-consultation system that turns patient waiting time into structured clinical context.",
    stack: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Prisma", "Whisper"],
    status: "shipped",
    accent: "violet",
    href: "https://github.com/luvtankha/HELIOS",
  },
  {
    slug: "portfolio",
    title: "Personal Developer Portfolio",
    description: "Interactive Obsidian-inspired dashboard for projects, hackathons, GitHub activity, learning goals, and career direction.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "building",
    accent: "blue",
    href: "https://github.com/luvtankha/portfolio",
  },
];
