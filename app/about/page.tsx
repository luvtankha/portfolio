import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about YOUR NAME, a full-stack developer building toward AI engineering.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <main className="public-page"><p className="public-eyebrow">01 / PROFILE</p><h1>About YOUR NAME</h1><p className="public-lede">A full-stack developer in India focused on practical software, automation, and the path toward AI engineering.</p><div className="public-grid"><article><small>CURRENTLY EXPLORING</small><ul><li>Java + DSA</li><li>Full-Stack Engineering</li><li>Cloud / DevOps</li><li>AI Engineering</li><li>AI Automation</li></ul></article><article><small>APPROACH</small><p>I enjoy turning ideas into working products and understanding the systems underneath them—from a clear interface to dependable backend persistence.</p></article></div><Link className="public-link" href="/">Open the interactive portfolio →</Link></main>;
}
