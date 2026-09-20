import { Code2, Network } from "lucide-react";

export function SiteFooter() {
  return <footer className="site-footer"><p><span className="status-dot" /> Available for thoughtful product work</p><div><a href="https://github.com/" aria-label="GitHub"><Code2 size={17} /></a><a href="https://linkedin.com/" aria-label="LinkedIn"><Network size={17} /></a><span>© 2026</span></div></footer>;
}
