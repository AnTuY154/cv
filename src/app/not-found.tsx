"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { useLanguage } from "@/components/i18n/language-provider";

export default function NotFound() {
  const { dictionary } = useLanguage();

  return (
    <main className="not-found-page">
      <div className="container not-found-card">
        <p className="eyebrow">404</p>
        <h1>{dictionary.notFound.title}</h1>
        <p>{dictionary.notFound.description}</p>
        <Link className="button button-primary" href="/">
          <ArrowLeft size={18} aria-hidden="true" />
          {dictionary.notFound.backHome}
        </Link>
      </div>
    </main>
  );
}
