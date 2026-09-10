"use client";

import { cn } from "@/lib/utils";

import { useLanguage } from "@/components/i18n/language-provider";

type LanguageSwitcherProps = {
  className?: string;
  mobile?: boolean;
  optionTabIndex?: number;
};

export function LanguageSwitcher({
  className,
  mobile = false,
  optionTabIndex,
}: LanguageSwitcherProps) {
  const { language, dictionary, setLanguage } = useLanguage();

  return (
    <div
      className={cn("language-switcher", mobile && "language-switcher-mobile", className)}
      role="group"
      aria-label={dictionary.languageLabel}
    >
      <button
        type="button"
        className="language-option"
        aria-pressed={language === "vi"}
        aria-label={dictionary.languageOptions.vi}
        tabIndex={mobile ? optionTabIndex : undefined}
        onClick={() => setLanguage("vi")}
      >
        VI
      </button>
      <button
        type="button"
        className="language-option"
        aria-pressed={language === "en"}
        aria-label={dictionary.languageOptions.en}
        tabIndex={mobile ? optionTabIndex : undefined}
        onClick={() => setLanguage("en")}
      >
        EN
      </button>
    </div>
  );
}
