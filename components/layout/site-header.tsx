"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Command } from "lucide-react";

const links = [["/", "Index"], ["/projects", "Projects"], ["/hackathons", "Hackathons"]];

export function SiteHeader() {
  const pathname = usePathname();
  return <header className="site-header"><Link href="/" className="brand" aria-label="Developer portfolio home"><span className="brand-mark"><Command size={16} /></span><span>dev.portfolio</span></Link><nav aria-label="Primary navigation">{links.map(([href, label]) => <Link key={href} href={href} className={pathname === href ? "active" : ""}>{label}</Link>)}</nav><a className="contact-link" href="mailto:hello@example.com">Let&apos;s talk <ArrowUpRight size={15} /></a></header>;
}
