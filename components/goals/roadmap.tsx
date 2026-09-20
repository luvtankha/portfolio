"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { roadmapStages } from "@/data/goals";

export function Roadmap() {
  const [activeId, setActiveId] = useState("ai-engineering");
  const active = roadmapStages.find(stage => stage.id === activeId) ?? roadmapStages[0];
  const reduceMotion = useReducedMotion();
  return <div className="roadmap-layout"><ol className="roadmap-track">{roadmapStages.map((stage, index) => <li key={stage.id}><button type="button" aria-pressed={activeId === stage.id} className={activeId === stage.id ? "active" : ""} onClick={() => setActiveId(stage.id)}><span>{stage.number}</span><strong>{stage.title}</strong></button>{index < roadmapStages.length - 1 && <i><ArrowDown size={14} /></i>}</li>)}</ol><section className="roadmap-detail" aria-live="polite"><AnimatePresence mode="wait"><motion.div key={active.id} initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -5 }} transition={{ duration: .2 }}><small>STAGE {active.number}</small><h3>{active.title}</h3><p className="roadmap-label">Goal:</p><p className="roadmap-goal">{active.goal}</p><p className="roadmap-label">Learning:</p><ul>{active.learning.map(item => <li key={item}>{item}</li>)}</ul></motion.div></AnimatePresence></section></div>;
}
