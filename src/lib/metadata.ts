import type { Metadata } from "next";

import { profile } from "@/content/profile";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const metadataBase = new URL(siteUrl);

export const baseMetadata: Metadata = {
  metadataBase,
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s | Anh Tuấn — Software Engineer`,
  },
  description: profile.summary,
  applicationName: "Anh Tuấn Portfolio",
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: ["Software Engineer", "React", "Next.js", "Frontend", "UI engineering"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: `${profile.name} — ${profile.role}`,
    description: profile.shortSummary,
    siteName: "Anh Tuấn Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.shortSummary,
  },
  robots: {
    index: true,
    follow: true,
  },
};
