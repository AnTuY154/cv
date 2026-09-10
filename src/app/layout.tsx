import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LanguageProvider } from "@/components/i18n/language-provider";
import { SkipLink } from "@/components/layout/skip-link";
import { baseMetadata } from "@/lib/metadata";

import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: "#F8FAFC",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={inter.variable}>
      <body id="top" className={inter.className}>
        <LanguageProvider>
          <SkipLink />
          <SiteHeader />
          <div id="main-content">{children}</div>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
