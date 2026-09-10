import {
  BarChart3,
  Blocks,
  CarFront,
  CreditCard,
  FileCog,
  FolderKanban,
  Gauge,
  Globe2,
  Map,
  Settings2,
  ShieldCheck,
  Sparkles,
  Table2,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

import type { Project } from "@/content/types";

const iconBySlug: Record<string, LucideIcon> = {
  oneauto: CarFront,
  "hp-booster": Sparkles,
  "grafana-tools": Gauge,
  "kotoba-stripe": CreditCard,
  commerce: Map,
  "aia-components": Blocks,
  "requirement-tool": FileCog,
  "viettel-family-registration": ShieldCheck,
  "viettel-family-audit": Table2,
  kpro: FolderKanban,
  account: UsersRound,
  "commerce-admin": Settings2,
  "musma-dashboard": BarChart3,
  "swiper-kit": Globe2,
  "commerce-convert": Gauge,
};

const accentByDomain: Record<string, string> = {
  "Automotive services": "visual-blue",
  "Marketing platform": "visual-orange",
  "Observability tooling": "visual-violet",
  Payments: "visual-green",
  "Building management": "visual-cyan",
  "UI engineering": "visual-indigo",
};

export function ProjectVisual({ project }: { project: Project }) {
  const Icon = iconBySlug[project.slug] ?? Sparkles;
  const accent = accentByDomain[project.domain] ?? "visual-blue";

  return (
    <div className={`project-visual ${accent}`} aria-hidden="true">
      <div className="visual-grid" />
      <div className="visual-orbit visual-orbit-one" />
      <div className="visual-orbit visual-orbit-two" />
      <div className="visual-icon-wrap">
        <Icon size={30} strokeWidth={1.7} />
      </div>
      <span className="visual-code visual-code-one">{`{ }`}</span>
      <span className="visual-code visual-code-two">01</span>
    </div>
  );
}
