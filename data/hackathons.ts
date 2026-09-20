export type Hackathon = {
  year: string;
  name: string;
  domain: string;
  project: string;
  expansion: string;
  status: string;
  problemStatement: string;
  team: string;
  summary: string;
  stack: string[];
};

export const hackathons: Hackathon[] = [
  {
    year: "2026",
    name: "Smart India Hackathon",
    domain: "Healthcare / AI",
    project: "HELIOS",
    expansion: "Healthcare Enabled Language & Intelligent Observation System",
    status: "Internal Round Qualified",
    problemStatement: "Design a practical healthcare support system that makes observations and information easier to understand and act on.",
    team: "HELIOS project team",
    summary: "An AI-enabled healthcare concept focused on turning complex observations into useful, accessible signals for people and systems.",
    stack: ["Java", "Full-Stack", "AI", "Automation"],
  },
];
