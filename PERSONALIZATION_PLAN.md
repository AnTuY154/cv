# Personalized Portfolio Plan — Anh Tuấn

## 1. Objective

Transform the portfolio from a polished project catalogue into a personal introduction written in Anh Tuấn's voice: warm, direct, grounded, and credible. A visitor should quickly understand who Tuấn is, what he has learned, how he works, and what he is currently building.

The experience must support Vietnamese and English, with Vietnamese as the most personal/default voice for the About story while keeping the full site usable in English.

## 2. Source of truth and content boundaries

### User-confirmed public facts

- Name: Đỗ Trọng Anh Tuấn; preferred short name: Tuấn / Anh Tuấn.
- FPT University alumnus.
- Date of birth: 15/04/1999. This is explicitly approved for the public About section.
- Five years of professional experience, per the latest user instruction. Replace older experience-number copy everywhere so the site has one consistent number.
- Beyond coding, Tuấn actively develops knowledge of product/business domains and management.
- Current verified project context: OneAuto, from 01/2026 to present; automotive workshop services in the TASCO ecosystem; verified technologies are Next.js and Java.
- Existing verified portfolio project, experience, skill, and interest records remain valid.

### Do not invent

- No job title, team size, management responsibility, business metric, feature ownership, architecture, customer result, project screenshot, client quote, or personal achievement unless it already exists in the verified content or the user supplies it.
- Do not infer an employer relationship for OneAuto.
- Do not add phone number, gender, email, GitHub URL, social links, or a portrait until supplied by the user.
- Keep project pages honest: use “verified scope” language when contribution details are incomplete.

## 3. Personal voice and copy direction

Use first person for personal sections and concise editorial language. Avoid generic portfolio phrases such as “passionate developer” or unsupported claims such as “expert”. Keep proper names and technical terms unchanged.

### Approved About introduction — Vietnamese

> Chào mừng bạn đến với trang giới thiệu của mình. Mình là Tuấn, cựu sinh viên FPT University và là Software Engineer định hướng Frontend. Với 5 năm kinh nghiệm trong nghề, mình không chỉ trau dồi kỹ năng lập trình mà còn chủ động tìm hiểu nghiệp vụ, quy trình sản phẩm và những kiến thức quản lý giúp đội ngũ phối hợp tốt hơn và tạo ra phần mềm hữu ích.

> Mình sinh ngày 15/04/1999. Hiện tại, mình đang tiếp tục học hỏi qua những bài toán sản phẩm thực tế, đặc biệt là cách biến yêu cầu phức tạp thành trải nghiệm rõ ràng, dễ dùng và có thể duy trì lâu dài.

### Approved About introduction — English

> Welcome to my profile. I’m Tuấn, an FPT University alumnus and a frontend-focused Software Engineer. With five years of professional experience, I keep developing beyond coding — learning the product domains, business processes, and management practices that help teams collaborate well and build useful software.

> I was born on 15 April 1999. Today, I continue learning through real product problems, especially how to turn complex requirements into experiences that are clear, useful, and maintainable.

### Personal working principles

Use these as short first-person cards, not as unsupported seniority claims:

- Vietnamese: “Mình ưu tiên sự rõ ràng”, “Mình luôn học từ bối cảnh sản phẩm”, “Mình thích chia sẻ và phối hợp”, “Mình quan tâm đến chất lượng sau khi bàn giao”.
- English: “I value clarity”, “I learn from product context”, “I collaborate openly”, “I care about quality after handoff”.

### Personal details block

Show a compact “Một chút về mình / A little more about me” block with:

- FPT University alumnus / Cựu sinh viên FPT University.
- Born 15 April 1999 / Sinh ngày 15/04/1999.
- Hanoi, Vietnam / Hà Nội, Việt Nam.
- Basketball, music, trekking, and travel, localized naturally.

## 4. Information architecture changes

### Homepage sequence

Keep the existing strong hero and selected work, but make the narrative personal:

1. Hero: first-person headline and a short “currently learning/building” line.
2. Credibility strip: five years, completed/ongoing project record, React/Next.js timeline.
3. Selected work: frame projects as “Những bài toán mình đã tham gia / Problems I’ve worked on”.
4. Experience: preserve verified company timeline and separate OneAuto current-project context.
5. Skills: group by the kind of work Tuấn supports, not by a logo cloud.
6. About: move earlier in visual emphasis; make it the emotional center of the page with the approved first-person copy.
7. Contact: invite a conversation in first person without fabricating contact channels.

### About component structure

- Section eyebrow and title localized.
- Two-column layout on desktop: first-person story on the left; personal detail/principles cards on the right.
- On mobile, story first, details second, then interests.
- Use the existing monogram/abstract visual treatment; do not create a fake portrait.
- Include an accessible language-independent heading hierarchy and readable line lengths.

## 5. i18n implementation plan

Implement a small typed client-side language layer without adding a heavyweight dependency:

- Add a typed `Language = "vi" | "en"` dictionary for navigation, buttons, headings, About copy, personal details, project labels, timeline labels, resume labels, and footer text.
- Add a provider/hook that initializes from `localStorage`, defaults to Vietnamese for a first-time visitor, and updates `<html lang>`.
- Add an accessible EN/VI toggle in both desktop and mobile navigation. The toggle must be keyboard reachable, have an explicit `aria-label`, preserve the current route/hash, and visibly show the active language.
- Localize all visible UI copy, not just the About paragraph. Proper project names, technology names, and verified company names remain unchanged.
- Localize period/status labels and section metadata while keeping dates/data structurally stable.
- Keep SEO metadata and JSON-LD deterministic in English unless a localized metadata strategy is implemented cleanly; never put the date of birth in JSON-LD or social metadata.
- Prevent hydration mismatch: render a stable server default, then apply the saved language after mount without layout shift.

## 6. Visual and interaction direction

- Preserve the current light editorial system, blue primary, orange accent, generous whitespace, and abstract code/product visual.
- Make the tone more personal through first-person copy, small handwritten/editorial-feeling labels only if they remain accessible, and warmer microcopy—not through decorative clutter.
- Make the About section visually distinct with a soft blue/orange surface and a clear personal monogram.
- Maintain 44px minimum touch targets, visible focus states, reduced-motion support, and no horizontal overflow at 375, 768, 1024, and 1440px.
- Keep navigation and CTA labels short enough for Vietnamese expansion.

## 7. Implementation sequence for Luna

1. Read the existing plan, design system, current source tree, and this file.
2. Reconcile content first: add the latest user-confirmed profile facts and remove every remaining outdated experience-number string.
3. Add the typed i18n provider/dictionary and localize shared chrome.
4. Rewrite Hero, About, Contact, timeline labels, project labels, and resume copy in first person where appropriate.
5. Build the personalized About layout and personal-details/principles cards.
6. Add or update tests for language switching, persistence, `<html lang>`, mobile navigation, route/hash preservation, and keyboard accessibility.
7. Run formatter, lint, typecheck, content tests, production build, Playwright, axe checks, and screenshot checks at all required breakpoints.
8. Inspect the rendered homepage in both languages; fix overflow, awkward Vietnamese wrapping, contrast, focus order, and hydration warnings.
9. Update README with the language/content editing instructions and report any fact that still needs user confirmation.

## 8. Acceptance criteria

- The About section sounds like Tuấn introducing himself, in both Vietnamese and English.
- The exact approved facts appear correctly: FPT alumnus, 15/04/1999, five years, learning beyond coding in product/business and management.
- A visitor can switch EN/VI from desktop and mobile navigation; the choice persists on refresh.
- All major visible UI labels change language consistently.
- No unsupported OneAuto details or personal contact details are introduced.
- All existing verified project routes remain functional.
- `npm run lint`, `npm run typecheck`, `npm test`, `npm run format`, `npm run build`, and `npm run test:e2e` pass.
- No accessibility violation is introduced, and there is no horizontal overflow at the target breakpoints.

## 9. Final handoff report required from Luna

Return:

- A concise summary of changed files and the personalization decisions.
- The exact language behavior and default-language behavior.
- Verification results for every command and browser breakpoint.
- Any remaining content question that requires Tuấn’s answer.
