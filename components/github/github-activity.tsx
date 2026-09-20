"use client";

import { useEffect, useState } from "react";
import { GitFork, Star } from "lucide-react";
type Repo = { id: number; name: string; html_url: string; description: string | null; language: string | null; stargazers_count: number; forks_count: number };
const fallback: Repo[] = [
  { id: 1, name: "signal", html_url: "https://github.com/", description: "Incident timelines that keep teams aligned.", language: "TypeScript", stargazers_count: 128, forks_count: 14 },
  { id: 2, name: "tinybench", html_url: "https://github.com/", description: "Small, repeatable browser benchmarks.", language: "JavaScript", stargazers_count: 74, forks_count: 9 },
];
export function GithubActivity() {
  const [repos, setRepos] = useState<Repo[]>(fallback);
  useEffect(() => { fetch("/api/github?username=vercel").then((r) => r.ok ? r.json() : Promise.reject()).then((data) => Array.isArray(data) && setRepos(data.slice(0, 2))).catch(() => null); }, []);
  return <div className="repo-list">{repos.map((repo) => <a href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id} className="repo-row"><div><strong>{repo.name}</strong><p>{repo.description}</p></div><div className="repo-meta"><span>{repo.language ?? "Code"}</span><span><Star size={13} />{repo.stargazers_count}</span><span><GitFork size={13} />{repo.forks_count}</span></div></a>)}</div>;
}
