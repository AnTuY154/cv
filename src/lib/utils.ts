import type { ProjectPeriod } from "@/content/types";
import type { Language } from "@/content/i18n";

export function formatPeriod(period?: ProjectPeriod, language: Language = "en"): string {
  if (!period) {
    return "";
  }

  const presentLabel = language === "vi" ? "Hiện tại" : "Present";

  return `${formatMonth(period.start, language)} — ${period.end === "present" ? presentLabel : formatMonth(period.end, language)}`;
}

function formatMonth(value: string, language: Language): string {
  const [year, month] = value.split("-");

  if (!month) {
    return year;
  }

  const parsed = new Date(Number(year), Number(month) - 1, 1);
  return new Intl.DateTimeFormat(language === "vi" ? "vi-VN" : "en-US", {
    month: "short",
    year: "numeric",
  }).format(parsed);
}

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function getInitials(value: string): string {
  return value
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
