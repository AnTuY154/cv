# Anh Tuấn Portfolio

Static-first Next.js portfolio built with the App Router, strict TypeScript, Tailwind CSS v4, and Lucide icons.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm test
npm run format
npm run build
npm run test:e2e
```

Set `NEXT_PUBLIC_SITE_URL` before a production build so canonical URLs, the sitemap, robots metadata, and JSON-LD use the final public origin. The local fallback is `http://localhost:3000`.

## Content updates

All public content lives in `src/content/`. Add a project to `src/content/projects.ts`, use a URL-safe unique slug, and add it to the relevant company entry in `src/content/experience.ts` when the relationship is confirmed. Keep unconfirmed fields empty; components intentionally omit missing values rather than rendering guessed copy.

The current source intentionally leaves the public email and GitHub URL unset, and does not publish a OneAuto role, modules, architecture, metrics, screenshots, or business outcomes. Confirm those facts in `src/content/profile.ts` and `src/content/projects.ts` before adding them to production.

## Language and personalization

The site defaults to Vietnamese and offers an EN/VI switcher in the desktop and mobile navigation. The selected language is stored in `localStorage` under `anh-tuan-portfolio-language`, and the provider keeps the document language in sync. UI translations live in `src/content/i18n.ts`; project, company, skill, and profile facts remain in the typed content files.

The public About copy currently includes the confirmed FPT University education, 15/04/1999 birth date, five years of experience, and learning across product/business context and management. Email, GitHub, phone, and additional OneAuto details remain unpublished until confirmed.

## Routes

- `/` — portfolio home
- `/projects/[slug]` — static project records and case studies
- `/resume` — web resume and PDF download
- `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` — metadata routes
