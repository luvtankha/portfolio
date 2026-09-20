export type RoadmapStage = {
  id: string;
  number: string;
  title: string;
  goal: string;
  learning: string[];
};

export const roadmapStages: RoadmapStage[] = [
  { id: "java-dsa", number: "01", title: "Java + DSA", goal: "Build a dependable problem-solving foundation for designing clear, efficient software.", learning: ["Core Java", "Data structures", "Algorithms", "Problem-solving patterns"] },
  { id: "full-stack", number: "02", title: "Full-Stack Engineering", goal: "Understand how real products move from interface decisions to reliable backend systems.", learning: ["React + Next.js", "REST APIs", "Databases", "Authentication"] },
  { id: "cloud-devops", number: "03", title: "Cloud + DevOps", goal: "Learn how software is deployed, observed, and kept dependable in production.", learning: ["Cloud fundamentals", "Containers", "CI / CD", "Observability"] },
  { id: "ai-engineering", number: "04", title: "AI Engineering", goal: "Understand how intelligent systems can be integrated into real software.", learning: ["LLM APIs", "RAG", "Agents", "Vector databases", "AI infrastructure"] },
  { id: "ai-automation", number: "05", title: "AI Automation", goal: "Turn repetitive work into useful, trustworthy workflows powered by software and AI.", learning: ["Tool calling", "Workflow orchestration", "Webhooks", "Evaluation loops"] },
];
