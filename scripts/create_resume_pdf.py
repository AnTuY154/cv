from __future__ import annotations

import sys
from pathlib import Path

from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas


PAGE_WIDTH, PAGE_HEIGHT = A4
MARGIN = 42
CONTENT_WIDTH = PAGE_WIDTH - (MARGIN * 2)

BLUE = HexColor("#2563EB")
NAVY = HexColor("#1E293B")
SLATE = HexColor("#475569")
MUTED = HexColor("#64748B")
BORDER = HexColor("#E2E8F0")
PALE_BLUE = HexColor("#EFF6FF")
PALE_ORANGE = HexColor("#FFF7ED")
ORANGE = HexColor("#C2410C")
BACKGROUND = HexColor("#F8FAFC")

FONT_PATH = "/System/Library/Fonts/Supplemental/Arial.ttf"
BOLD_FONT_PATH = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"

pdfmetrics.registerFont(TTFont("PortfolioArial", FONT_PATH))
pdfmetrics.registerFont(TTFont("PortfolioArial-Bold", BOLD_FONT_PATH))


def wrap_text(text: str, font: str, size: float, width: float) -> list[str]:
    lines: list[str] = []
    current = ""
    for word in text.split():
        candidate = f"{current} {word}".strip()
        if current and pdfmetrics.stringWidth(candidate, font, size) > width:
            lines.append(current)
            current = word
        else:
            current = candidate
    if current:
        lines.append(current)
    return lines


def draw_text(canvas: Canvas, text: str, x: float, y: float, width: float, *, font: str = "PortfolioArial", size: float = 9.5, leading: float = 13, color=SLATE) -> float:
    canvas.setFont(font, size)
    canvas.setFillColor(color)
    for line in wrap_text(text, font, size, width):
        canvas.drawString(x, y, line)
        y -= leading
    return y


def draw_label(canvas: Canvas, text: str, x: float, y: float) -> None:
    canvas.setFillColor(BLUE)
    canvas.setFont("PortfolioArial-Bold", 8)
    canvas.drawString(x, y, text.upper())


def draw_rule(canvas: Canvas, y: float) -> None:
    canvas.setStrokeColor(BORDER)
    canvas.setLineWidth(0.7)
    canvas.line(MARGIN, y, PAGE_WIDTH - MARGIN, y)


def draw_header(canvas: Canvas, page_label: str) -> None:
    canvas.setFillColor(BACKGROUND)
    canvas.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, fill=1, stroke=0)
    canvas.setFillColor(BLUE)
    canvas.rect(0, PAGE_HEIGHT - 10, PAGE_WIDTH, 10, fill=1, stroke=0)
    canvas.setFillColor(NAVY)
    canvas.setFont("PortfolioArial-Bold", 8)
    canvas.drawRightString(PAGE_WIDTH - MARGIN, 24, page_label)


def draw_pill(canvas: Canvas, text: str, x: float, y: float, fill=PALE_BLUE, color=BLUE) -> float:
    width = pdfmetrics.stringWidth(text, "PortfolioArial-Bold", 7.4) + 16
    canvas.setFillColor(fill)
    canvas.roundRect(x, y - 4, width, 20, 10, fill=1, stroke=0)
    canvas.setFillColor(color)
    canvas.setFont("PortfolioArial-Bold", 7.4)
    canvas.drawString(x + 8, y + 3, text)
    return x + width + 7


def draw_experience_item(canvas: Canvas, company: str, role: str, period: str, description: str, y: float) -> float:
    canvas.setFillColor(NAVY)
    canvas.setFont("PortfolioArial-Bold", 10.5)
    canvas.drawString(MARGIN, y, company)
    canvas.setFillColor(BLUE)
    canvas.setFont("PortfolioArial-Bold", 8)
    canvas.drawRightString(PAGE_WIDTH - MARGIN, y, period)
    y -= 13
    canvas.setFillColor(BLUE)
    canvas.setFont("PortfolioArial-Bold", 8.5)
    canvas.drawString(MARGIN, y, role)
    y -= 12
    y = draw_text(canvas, description, MARGIN, y, CONTENT_WIDTH, size=8.5, leading=11.5)
    return y - 10


def draw_project_card(canvas: Canvas, x: float, y: float, width: float, height: float, domain: str, name: str, summary: str, accent=BLUE) -> None:
    canvas.setFillColor(white)
    canvas.setStrokeColor(BORDER)
    canvas.setLineWidth(0.7)
    canvas.roundRect(x, y - height, width, height, 9, fill=1, stroke=1)
    canvas.setFillColor(accent)
    canvas.roundRect(x, y - 4, width, 4, 2, fill=1, stroke=0)
    draw_label(canvas, domain, x + 13, y - 22)
    canvas.setFillColor(NAVY)
    canvas.setFont("PortfolioArial-Bold", 10)
    canvas.drawString(x + 13, y - 39, name)
    draw_text(canvas, summary, x + 13, y - 54, width - 26, size=8, leading=10.5)


def build_pdf(output: Path) -> None:
    output.parent.mkdir(parents=True, exist_ok=True)
    canvas = Canvas(str(output), pagesize=A4, pageCompression=1)
    canvas.setTitle("Anh Tuan - Software Engineer Resume")
    canvas.setAuthor("Đỗ Trọng Anh Tuấn")

    # Page 1: profile, experience, and selected work.
    draw_header(canvas, "ANH TUAN / 01")
    x = MARGIN
    y = PAGE_HEIGHT - 62
    draw_label(canvas, "Frontend-focused Software Engineer", x, y)
    y -= 28
    canvas.setFillColor(NAVY)
    canvas.setFont("PortfolioArial-Bold", 29)
    canvas.drawString(x, y, "Đỗ Trọng Anh Tuấn")
    y -= 21
    canvas.setFillColor(SLATE)
    canvas.setFont("PortfolioArial", 9)
    canvas.drawString(x, y, "Hanoi, Vietnam")
    y -= 27
    y = draw_text(canvas, "Frontend-focused Software Engineer with 5 years of experience building enterprise web products with React and Next.js. Experienced in design-system implementation, application modernization, SEO, data-rich interfaces, code review, and cross-functional delivery.", x, y, CONTENT_WIDTH, size=9.5, leading=13)
    y -= 13
    next_x = x
    next_x = draw_pill(canvas, "5 years delivery", next_x, y)
    next_x = draw_pill(canvas, "14 completed + 1 ongoing", next_x, y)
    draw_pill(canvas, "React 2020 / Next.js 2023", next_x, y)
    y -= 35
    draw_rule(canvas, y)
    y -= 25
    draw_label(canvas, "Experience", x, y)
    y -= 22
    y = draw_experience_item(canvas, "HBLAB JSC", "Software Engineer", "Jan 2023 - Jan 2026", "Software engineering across management tools, dashboards, payments, observability, and marketing platforms.", y)
    y = draw_experience_item(canvas, "Viettel Software Service", "Software Engineer", "Sep 2022 - Jan 2023", "Software engineering for Viettel Family registration and audit workflows.", y)
    y = draw_experience_item(canvas, "FPT Software", "Software Engineer", "Sep 2020 - Aug 2022", "Software engineering across enterprise requirements and component-system work.", y)
    y -= 2
    draw_rule(canvas, y)
    y -= 25
    draw_label(canvas, "Selected projects", x, y)
    y -= 17
    canvas.setFillColor(SLATE)
    canvas.setFont("PortfolioArial", 8.5)
    canvas.drawString(x, y, "Verified project records with deeper case-study pages available in the web portfolio.")
    y -= 17

    gap = 11
    card_width = (CONTENT_WIDTH - gap) / 2
    card_height = 72
    projects = [
        ("Automotive services", "OneAuto", "Services for automotive workshops in the TASCO ecosystem.", ORANGE),
        ("Marketing platform", "HP Booster", "A drag-and-drop marketing website builder.", ORANGE),
        ("Observability tooling", "Grafana Tools", "Modernization from Grafana 6.3.4 to Grafana 12.2.", HexColor("#7C3AED")),
        ("Payments", "Kotoba Stripe", "Online payment and account-management workflows.", HexColor("#15803D")),
        ("Building management", "Commerce", "Building management and data analysis with map integrations.", HexColor("#0E7490")),
        ("UI engineering", "AIA Components", "A component system supported by Storybook and E2E testing.", HexColor("#4338CA")),
    ]
    for index, (domain, name, summary, accent) in enumerate(projects):
        row = index // 2
        column = index % 2
        draw_project_card(canvas, x + column * (card_width + gap), y - row * (card_height + gap), card_width, card_height, domain, name, summary, accent)

    canvas.showPage()

    # Page 2: capabilities and current project context.
    draw_header(canvas, "ANH TUAN / 02")
    y = PAGE_HEIGHT - 62
    draw_label(canvas, "Capabilities", x, y)
    y -= 25
    canvas.setFillColor(NAVY)
    canvas.setFont("PortfolioArial-Bold", 22)
    canvas.drawString(x, y, "A capability map for practical product work")
    y -= 18
    y = draw_text(canvas, "Frontend craft, integration depth, and delivery habits grouped around the problems they help solve.", x, y, CONTENT_WIDTH, size=9.5, leading=13)
    y -= 23

    capabilities = [
        ("Frontend", "JavaScript, React, Next.js, HTML, CSS, Responsive UI"),
        ("UI engineering", "Storybook, Figma-to-code, Component systems, E2E testing"),
        ("Backend & integration", "Node.js, Express, Java, Python, C#, REST APIs"),
        ("Product integrations", "Stripe, Google Maps, Terra Map, Grafana"),
        ("Delivery", "GitLab, Code review, Estimation, Deployment support, SEO"),
    ]
    card_height = 83
    card_width = (CONTENT_WIDTH - gap) / 2
    for index, (label, skills) in enumerate(capabilities):
        row = index // 2
        column = index % 2
        card_x = x + column * (card_width + gap)
        card_y = y - row * (card_height + gap)
        draw_project_card(canvas, card_x, card_y, card_width, card_height, label, "", skills, BLUE if index % 2 == 0 else HexColor("#64748B"))

    y = y - 3 * (card_height + gap) - 3
    draw_rule(canvas, y)
    y -= 26
    draw_label(canvas, "Current project context", x, y)
    y -= 22
    canvas.setFillColor(PALE_ORANGE)
    canvas.roundRect(x, y - 107, CONTENT_WIDTH, 107, 12, fill=1, stroke=0)
    canvas.setFillColor(ORANGE)
    canvas.setFont("PortfolioArial-Bold", 8)
    canvas.drawString(x + 18, y - 21, "ONGOING / JAN 2026 - PRESENT")
    canvas.setFillColor(NAVY)
    canvas.setFont("PortfolioArial-Bold", 18)
    canvas.drawString(x + 18, y - 45, "OneAuto")
    canvas.setFillColor(SLATE)
    canvas.setFont("PortfolioArial", 9)
    canvas.drawString(x + 18, y - 63, "Services for automotive workshops in the TASCO ecosystem.")
    draw_pill(canvas, "Next.js", x + 18, y - 88, fill=white, color=BLUE)
    draw_pill(canvas, "Java", x + 75, y - 88, fill=white, color=BLUE)

    y -= 140
    draw_rule(canvas, y)
    y -= 27
    draw_label(canvas, "How I work", x, y)
    y -= 21
    work_items = [
        ("Collaborative by default", "Clear context, useful reviews, and decisions that help the whole team move."),
        ("Always learning", "Curious about better patterns, modern tooling, and the details that make products easier to use."),
        ("Grounded in delivery", "Connect design intent to implementation, testing, and the practical work of getting software shipped."),
    ]
    for title, copy in work_items:
        canvas.setFillColor(NAVY)
        canvas.setFont("PortfolioArial-Bold", 9.5)
        canvas.drawString(x, y, title)
        y -= 12
        y = draw_text(canvas, copy, x, y, CONTENT_WIDTH, size=8.5, leading=11.5)
        y -= 12

    draw_rule(canvas, 74)
    canvas.setFillColor(MUTED)
    canvas.setFont("PortfolioArial", 8)
    canvas.drawString(MARGIN, 56, "Interests: Basketball - Music - Trekking - Travel")
    canvas.drawRightString(PAGE_WIDTH - MARGIN, 56, "anh-tuan portfolio")
    canvas.save()


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("usage: create_resume_pdf.py PUBLIC_PATH OUTPUT_PATH")
    build_pdf(Path(sys.argv[1]))
    build_pdf(Path(sys.argv[2]))
