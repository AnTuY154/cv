"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { dictionaries, type Language, type LocaleDictionary } from "@/content/i18n";

const STORAGE_KEY = "anh-tuan-portfolio-language";

type LanguageContextValue = {
  language: Language;
  dictionary: LocaleDictionary;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLanguage(value: string | null): value is Language {
  return value === "vi" || value === "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("vi");
  const hasInitialized = useRef(false);

  useEffect(() => {
    let savedLanguage: Language = "vi";

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLanguage(stored)) {
        savedLanguage = stored;
      }
    } catch {
      // Private browsing and blocked storage should not prevent the page from working.
    }

    hasInitialized.current = true;
    setLanguageState(savedLanguage);
    document.documentElement.lang = savedLanguage;
  }, []);

  useEffect(() => {
    if (!hasInitialized.current) {
      return;
    }

    document.documentElement.lang = language;

    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // A language switch still works when persistence is unavailable.
    }
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    document.documentElement.lang = nextLanguage;
  }, []);

  return (
    <LanguageContext.Provider value={{ language, dictionary: dictionaries[language], setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
