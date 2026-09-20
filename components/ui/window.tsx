import type { ReactNode } from "react";

export function Window({ title, eyebrow, children, className = "" }: { title: string; eyebrow?: string; children: ReactNode; className?: string }) {
  return <section className={`window ${className}`}><div className="window-bar"><div className="traffic" aria-hidden="true"><i /><i /><i /></div><p>{title}</p><span>{eyebrow}</span></div>{children}</section>;
}
