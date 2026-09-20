"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, BookOpen, GitFork, Star, Users } from "lucide-react";

type Repo = { id: number; name: string; html_url: string; description: string | null; language: string | null; stargazers_count: number; forks_count: number };
type Profile = { login: string; name: string | null; avatar_url: string; html_url: string; bio: string | null; public_repos: number; followers: number };
type GithubData = { profile: Profile; repos: Repo[] };

const fallback: GithubData = {
  profile: { login: "username", name: "Your Name", avatar_url: "", html_url: "https://github.com/", bio: "Full-stack developer building practical software and learning AI engineering.", public_repos: 18, followers: 24 },
  repos: [
    { id: 1, name: "HELIOS", html_url: "https://github.com/", description: "Automation and AI experiments.", language: "TypeScript", stargazers_count: 12, forks_count: 2 },
    { id: 2, name: "portfolio", html_url: "https://github.com/", description: "Personal developer dashboard.", language: "Next.js", stargazers_count: 6, forks_count: 1 },
  ],
};

export function GithubProfileWindow({ compact = false }: { compact?: boolean }) {
  const [data, setData] = useState<GithubData>(fallback);
  const [isLive, setIsLive] = useState(false);
  useEffect(() => {
    fetch("/api/github").then((response) => response.ok ? response.json() : Promise.reject()).then((result: GithubData) => { setData(result); setIsLive(true); }).catch(() => null);
  }, []);
  const stars = useMemo(() => data.repos.reduce((total, repo) => total + repo.stargazers_count, 0), [data.repos]);
  const languages = useMemo(() => [...new Set(data.repos.map(repo => repo.language).filter(Boolean))].slice(0, 4), [data.repos]);
  const visibleRepos = data.repos.slice(0, compact ? 2 : 4);

  return (
    <section className={`profile-window github-profile-window ${compact ? "compact" : ""}`}>
      <div className="os-window-bar"><span>github.com/{data.profile.login}</span><div><i /><i /><i /></div></div>
      <div className="profile-window-body">
        <div className="github-identity">
          {data.profile.avatar_url ? <img src={data.profile.avatar_url} alt={`${data.profile.login} avatar`} /> : <div className="avatar-fallback">YN</div>}
          <div><p className="live-label"><i />{isLive ? "LIVE FROM GITHUB API" : "GITHUB PREVIEW"}</p><h3>{data.profile.name || data.profile.login}</h3><a href={data.profile.html_url} target="_blank" rel="noreferrer">@{data.profile.login}</a><p>{data.profile.bio || "Developer building in public."}</p></div>
        </div>
        <div className="github-stats"><div><BookOpen size={15} /><span><strong>{data.profile.public_repos}</strong><small>Repositories</small></span></div><div><Users size={15} /><span><strong>{data.profile.followers}</strong><small>Followers</small></span></div><div><Star size={15} /><span><strong>{stars}</strong><small>Recent stars</small></span></div></div>
        <div className="language-row">{languages.map(language => <span key={language}>{language}</span>)}</div>
        <div className="recent-repos"><small>LATEST REPOSITORIES</small>{visibleRepos.map(repo => <a href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id}><div><strong>{repo.name}</strong><p>{repo.description || "View repository on GitHub"}</p></div><span>{repo.language || "Code"}<i><Star size={11} />{repo.stargazers_count}</i><i><GitFork size={11} />{repo.forks_count}</i></span></a>)}</div>
        <a className="profile-open-link" href={data.profile.html_url} target="_blank" rel="noreferrer">Open GitHub <ArrowUpRight size={15} /></a>
      </div>
    </section>
  );
}

export function GithubActivity() {
  return <GithubProfileWindow />;
}
