"use client";

import { ArrowUpRight, BriefcaseBusiness, Layers3, Sparkles } from "lucide-react";

import { useLanguage } from "@/components/i18n/language-provider";

export function CredibilityStrip() {
  const { dictionary } = useLanguage();
  const proofItems = [
    {
      icon: BriefcaseBusiness,
      value: dictionary.credibility.yearsValue,
      label: dictionary.credibility.deliveryLabel,
    },
    {
      icon: Layers3,
      value: dictionary.credibility.projectsLabel,
      label: "HBLAB · Viettel · FPT",
    },
    {
      icon: Sparkles,
      value: dictionary.credibility.reactValue(""),
      label: dictionary.credibility.nextLabel(""),
    },
  ];

  return (
    <section className="credibility-section" aria-label={dictionary.credibility.sectionLabel}>
      <div className="container credibility-grid">
        {proofItems.map(({ icon: Icon, value, label }) => (
          <div className="credibility-item" key={value}>
            <Icon size={20} aria-hidden="true" />
            <div>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
            <ArrowUpRight className="credibility-arrow" size={17} aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
