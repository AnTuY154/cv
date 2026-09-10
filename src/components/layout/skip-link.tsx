"use client";

import { useLanguage } from "@/components/i18n/language-provider";

export function SkipLink() {
  const { dictionary } = useLanguage();

  return (
    <a className="skip-link" href="#main-content">
      {dictionary.navigation.skipToMain}
    </a>
  );
}
