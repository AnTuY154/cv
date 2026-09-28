"use client";

import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { profile } from "@/content/profile";
import { useLanguage } from "@/components/i18n/language-provider";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";

const navigation = [
  { key: "experience", href: "/#experience" },
  { key: "skills", href: "/#skills" },
  { key: "about", href: "/#about" },
  { key: "contact", href: "/#contact" },
] as const;

export function SiteHeader() {
  const { dictionary } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const menu = menuRef.current;
    const firstFocusable = menu?.querySelector<HTMLElement>("a, button");
    firstFocusable?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !menu) {
        return;
      }

      const focusable = Array.from(menu.querySelectorAll<HTMLElement>("a, button"));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link
          className="brand"
          href="/"
          aria-label={dictionary.navigation.homeLabel}
          onClick={closeMenu}
        >
          <span className="brand-mark">AT</span>
          <span className="brand-copy">
            <strong>{profile.shortName}</strong>
            <span>{dictionary.role}</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label={dictionary.navigation.primaryNavigation}>
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {dictionary.navigation[item.key]}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />
          <Link className="header-cv-link" href="/resume">
            <Download size={16} aria-hidden="true" />
            <span>{dictionary.navigation.downloadCv}</span>
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? dictionary.navigation.closeMenu : dictionary.navigation.openMenu}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <div
        ref={menuRef}
        id="mobile-navigation"
        className={`mobile-navigation ${isOpen ? "mobile-navigation-open" : ""}`}
        aria-hidden={!isOpen}
      >
        <nav
          className="container mobile-navigation-inner"
          aria-label={dictionary.navigation.mobileNavigation}
        >
          {navigation.map((item) => (
            <Link href={item.href} key={item.href} onClick={closeMenu} tabIndex={isOpen ? 0 : -1}>
              {dictionary.navigation[item.key]}
            </Link>
          ))}
          <Link
            href="/resume"
            className="mobile-cv-link"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
          >
            <Download size={17} aria-hidden="true" />
            {dictionary.navigation.downloadCv}
          </Link>
          <LanguageSwitcher mobile optionTabIndex={isOpen ? 0 : -1} />
        </nav>
      </div>
    </header>
  );
}
