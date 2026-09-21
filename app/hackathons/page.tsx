import type { Metadata } from "next";
import Link from "next/link";
import { hackathons } from "@/data/hackathons";
import { HeliosVideoWindow } from "@/components/media/helios-video-window";

export const metadata: Metadata = {
  title: "Hackathons",
  description: "Hackathon work by Luv Tankha, including the HELIOS healthcare AI project for Smart India Hackathon.",
  alternates: { canonical: "/hackathons" },
};

export default function HackathonsPage() {
  return <main className="public-page"><p className="public-eyebrow">03 / BUILD SPRINTS</p><h1>Hackathons</h1><p className="public-lede">Fast-moving environments where the problem, system design, and product come together.</p><HeliosVideoWindow label="HELIOS Smart India Hackathon demo" /><div className="public-project-list">{hackathons.map(item => <article key={item.project}><p>{item.year} · {item.domain}</p><div><h2>{item.name}</h2><span><strong>{item.project}</strong> — {item.expansion}</span><small>{item.status} · {item.role} · {item.team}</small></div><Link href="/projects/helios">View HELIOS case study →</Link></article>)}</div></main>;
}
