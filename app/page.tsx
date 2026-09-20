import type { Metadata } from "next";
import { PortfolioDashboard } from "@/components/portfolio/dashboard";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <PortfolioDashboard />;
}
