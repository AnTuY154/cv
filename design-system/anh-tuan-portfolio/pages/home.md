# Home Page Override

This file overrides `../MASTER.md` for the portfolio home page.

## Direction

- Pattern: editorial developer portfolio + portfolio grid + trust/authority proof.
- Goal: help a recruiter understand role, seniority, strongest work, and contact path in under 60 seconds.
- Default theme: light. Dark mode may be added later but is not a launch requirement.
- Visual character: precise, technical, warm, and confident; avoid a generic SaaS landing page.

## Typography Override

- Use `Inter` through `next/font/google` for both headings and body.
- Display: 56-72px desktop, 40-48px mobile, weight 700, tight tracking.
- H2: 32-40px desktop, 28-32px mobile, weight 650-700.
- Body: 16-18px, line-height 1.6-1.75, maximum reading width 68ch.
- Labels and metadata: 13-14px, weight 600; do not use body text below 14px.

## Layout Override

Section order:

1. Sticky navigation
2. Hero with name, role, short positioning statement, primary contact CTA, and CV download
3. Credibility strip: years of experience, completed/ongoing projects, core stack
4. Featured case studies, with OneAuto first
5. Career timeline grouped by company
6. Technology capabilities grouped by problem area
7. About, education, and interests
8. Contact CTA and footer

Use a 12-column grid, a `max-width` near 1200px, generous section spacing, and a single-column mobile flow. Project cards must remain readable without hover.

## Style Override

- Use glassmorphism only for the sticky navigation and one compact hero/proof surface.
- Use solid white cards for long-form content and case studies.
- Use soft blue radial gradients and a subtle grid/noise background as decoration; decoration must never reduce text contrast.
- Accent orange is reserved for the primary CTA, active markers, and very small emphasis areas.
- Use one icon family only: Lucide SVG icons. Do not use emoji as icons.
- Do not invent product screenshots. Use domain-aware abstract thumbnails until real screenshots are provided.

## Interaction

- Motion should clarify hierarchy: hero fade/slide, project-card stagger, and timeline reveal only.
- Duration: 180-450ms. Animate opacity and transform, not layout properties.
- All content must be present in its final state under `prefers-reduced-motion: reduce`.
- Interactive targets should be at least 44x44px where practical and never below WCAG 2.2 AA minimums.
- Sticky navigation must use `scroll-padding-top` so anchors and focused controls are not obscured.

## Accessibility

- WCAG 2.2 AA target.
- Text contrast at least 4.5:1; large text at least 3:1.
- Visible 2px focus ring with offset on every interactive control.
- Semantic section headings, skip link, descriptive link text, and meaningful image alt text.
- Project filtering, if implemented, must work by keyboard and expose selected state programmatically.
