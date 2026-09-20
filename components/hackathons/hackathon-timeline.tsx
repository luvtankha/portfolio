"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink, UsersRound } from "lucide-react";
import { hackathons } from "@/data/hackathons";

export function HackathonTimeline() {
  const [openProject, setOpenProject] = useState<string | null>(null);
  return <div className="hackathon-timeline">{hackathons.map((hackathon) => {
    const open = openProject === hackathon.project;
    return <section className="timeline-year" key={hackathon.project}><h3>{hackathon.year}</h3><div className="timeline-rail"><i /><span /></div><article className={`hackathon-expand-card ${open ? "open" : ""}`}><button className="hackathon-card-summary" type="button" aria-expanded={open} onClick={() => setOpenProject(open ? null : hackathon.project)}><div className="hackathon-card-heading"><div><small>{hackathon.name}</small><p>{hackathon.domain}</p></div><ChevronDown size={19} /></div><div className="hackathon-project-name"><span>PROJECT</span><h4>{hackathon.project}</h4><p>{hackathon.expansion}</p></div><div className="hackathon-status"><span>STATUS</span><strong>{hackathon.status}</strong></div><div className="hackathon-open-action">{open ? "Close details" : "View Project"} <ExternalLink size={14} /></div></button>{open && <div className="hackathon-expanded"><div className="expanded-grid"><article><small>PROBLEM STATEMENT</small><p>{hackathon.problemStatement}</p></article><article><small>TEAM</small><p><UsersRound size={15} /> {hackathon.team}</p></article><article><small>PROJECT</small><p>{hackathon.summary}</p></article></div><div className="hackathon-stack">{hackathon.stack.map(item => <span key={item}>{item}</span>)}</div></div>}</article></section>;
  })}</div>;
}
