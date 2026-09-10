"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Mail } from "lucide-react";

import { profile } from "@/content/profile";
import { useLanguage } from "@/components/i18n/language-provider";

export function SiteFooter() {
  const { dictionary } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <div>
          <p className="footer-kicker">Anh Tuấn Portfolio</p>
          <p className="footer-copy">{dictionary.footer.tagline}</p>
        </div>
        <div className="footer-links">
          <Link href="/resume">{dictionary.footer.resume}</Link>
          {profile.githubUrl ? (
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">
              <Github size={16} aria-hidden="true" />
              {dictionary.footer.github}
            </a>
          ) : null}
          {profile.email ? (
            <a href={`mailto:${profile.email}`}>
              <Mail size={16} aria-hidden="true" />
              {dictionary.footer.email}
            </a>
          ) : null}
          <a href="#top">
            {dictionary.footer.backToTop} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>{dictionary.location}</span>
      </div>
    </footer>
  );
}
