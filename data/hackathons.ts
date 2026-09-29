export type Hackathon = {
  year: string;
  name: string;
  domain: string;
  project: string;
  expansion: string;
  status: string;
  problemStatement: string;
  team: string;
  role: string;
  summary: string;
  stack: string[];
};

export const hackathons: Hackathon[] = [
  {
    year: "2026",
    name: "Smart India Hackathon",
    domain: "AI / Browser Agents / Privacy / Computer Vision",
    project: "CAPTAIN",
    expansion: "Privacy-First Browser Agent",
    status: "SIH 2026 Final Round",
    problemStatement: "SIH26171 — On-device Visual Perception for Light-weight Browser Agents.",
    team: "Smart India Hackathon finalist team",
    role: "CAPTAIN development",
    summary: "A privacy-first browser agent that observes webpages locally, detects and masks sensitive information before planning, asks for consent when required, and executes only validated browser actions.",
    stack: ["Manifest V3", "JavaScript", "TypeScript", "Node.js", "Tesseract.js", "ONNX Runtime Web", "Local OCR"],
  },
  {
    year: "2026",
    name: "Smart India Hackathon",
    domain: "Healthcare / Full Stack / AI",
    project: "HELIOS",
    expansion: "Healthcare Enabled Language & Intelligent Observation System",
    status: "Internal Round Qualified",
    problemStatement: "Use patient waiting time to collect, validate, and organize patient-provided information before the doctor consultation.",
    team: "6-member team",
    role: "Team Leader & Tech Lead",
    summary: "A healthcare pre-consultation system that collects patient concerns, guided follow-up answers, voice responses, documents, and structured history for review in an authorized doctor workspace.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "Whisper"],
  },
];
