import type { Metadata } from "next";
import Link from "next/link";
import { hackathons } from "@/data/hackathons";

export const metadata: Metadata = {
  title: "Hackathons",
  description: "Hackathon work by YOUR NAME, including the HELIOS healthcare AI project for Smart India Hackathon.",
  alternates: { canonical: "/hackathons" },
};

export default function HackathonsPage() {
  return <main className="public-page"><p className="public-eyebrow">03 / BUILD SPRINTS</p><h1>Hackathons</h1><p className="public-lede">Fast-moving environments where the problem, system design, and product come together.</p><div className="public-project-list">{hackathons.map(item => <article key={item.project}><p>{item.year} · {item.domain}</p><div><h2>{item.name}</h2><span><strong>{item.project}</strong> — {item.expansion}</span><small>{item.status}</small></div><Link href="/projects/helios">View HELIOS case study →</Link></article>)}</div></main>;
}
