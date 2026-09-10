import type { Metadata } from "next";

import { ResumePageContent } from "@/components/resume/resume-page-content";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Resume",
  description: `A concise resume for ${profile.name}, a ${profile.role}.`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return <ResumePageContent />;
}
