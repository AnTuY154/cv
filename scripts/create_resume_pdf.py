from __future__ import annotations

import sys
from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas


PAGE_W, PAGE_H = A4
MARGIN = 42
WIDTH = PAGE_W - MARGIN * 2
INK = HexColor("#172033")
BLUE = HexColor("#1959D1")
ORANGE = HexColor("#E45D22")
SLATE = HexColor("#566176")
LINE = HexColor("#DFE3EB")
PAPER = HexColor("#FFFFFF")
SOFT_BLUE = HexColor("#EDF4FF")


def register_fonts() -> None:
    candidates = [
        (
            Path("C:/Windows/Fonts/arial.ttf"),
            Path("C:/Windows/Fonts/arialbd.ttf"),
        ),
        (
            Path("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"),
            Path("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"),
        ),
        (
            Path("/System/Library/Fonts/Supplemental/Arial.ttf"),
            Path("/System/Library/Fonts/Supplemental/Arial Bold.ttf"),
        ),
    ]
    for regular, bold in candidates:
        if regular.exists() and bold.exists():
            pdfmetrics.registerFont(TTFont("CV", str(regular)))
            pdfmetrics.registerFont(TTFont("CV-Bold", str(bold)))
            return
    raise FileNotFoundError("A Unicode TrueType font is required to build the resume PDF.")


def wrap(text: str, font: str, size: float, width: float) -> list[str]:
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


def text(c: Canvas, value: str, x: float, y: float, width: float, *, font: str = "CV", size: float = 8.5, leading: float = 11.5, color=SLATE) -> float:
    c.setFont(font, size)
    c.setFillColor(color)
    for line in wrap(value, font, size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def label(c: Canvas, value: str, x: float, y: float, color=BLUE) -> None:
    c.setFillColor(color)
    c.setFont("CV-Bold", 7.5)
    c.drawString(x, y, value.upper())


def page_frame(c: Canvas, page: int) -> None:
    c.setFillColor(PAPER)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setFillColor(BLUE)
    c.rect(0, PAGE_H - 8, PAGE_W, 8, fill=1, stroke=0)
    c.setStrokeColor(LINE)
    c.line(MARGIN, 27, PAGE_W - MARGIN, 27)
    c.setFillColor(SLATE)
    c.setFont("CV", 7)
    c.drawString(MARGIN, 16, "ĐỖ TRỌNG ANH TUẤN · FRONTEND ENGINEER / FRONTEND LEAD")
    c.drawRightString(PAGE_W - MARGIN, 16, f"{page} / 2")


def section(c: Canvas, title: str, y: float) -> float:
    c.setStrokeColor(LINE)
    c.line(MARGIN, y, PAGE_W - MARGIN, y)
    y -= 19
    label(c, title, MARGIN, y)
    return y - 19


def project(c: Canvas, y: float, *, period: str, name: str, role: str, client: str, summary: str, evidence: str, tech: str, ongoing: bool = False) -> float:
    c.setFillColor(ORANGE if ongoing else BLUE)
    c.rect(MARGIN, y - 4, 3, 4, fill=1, stroke=0)
    c.setFillColor(INK)
    c.setFont("CV-Bold", 10)
    c.drawString(MARGIN + 10, y, name)
    c.setFillColor(BLUE)
    c.setFont("CV-Bold", 7.5)
    c.drawRightString(PAGE_W - MARGIN, y, period)
    y -= 13
    meta = " · ".join(part for part in [role, client] if part)
    c.setFillColor(SLATE)
    c.setFont("CV-Bold", 7.5)
    c.drawString(MARGIN + 10, y, meta)
    y -= 11
    y = text(c, summary, MARGIN + 10, y, WIDTH - 10, size=8, leading=10.2)
    y = text(c, f"Impact — {evidence}", MARGIN + 10, y - 1, WIDTH - 10, font="CV-Bold", size=7.8, leading=10.2, color=INK)
    c.setFillColor(BLUE)
    c.setFont("CV", 7.2)
    c.drawString(MARGIN + 10, y - 1, tech)
    return y - 15


def build_pdf(output: Path) -> None:
    register_fonts()
    output.parent.mkdir(parents=True, exist_ok=True)
    c = Canvas(str(output), pagesize=A4, pageCompression=1)
    c.setTitle("Do Trong Anh Tuan — Frontend Engineer / Frontend Lead")
    c.setAuthor("Đỗ Trọng Anh Tuấn")

    # Page 1 — recruiter summary and strongest, most recent evidence.
    page_frame(c, 1)
    y = PAGE_H - 54
    label(c, "Frontend Engineer / Frontend Lead", MARGIN, y)
    y -= 31
    c.setFillColor(INK)
    c.setFont("CV-Bold", 27)
    c.drawString(MARGIN, y, "Đỗ Trọng Anh Tuấn")
    y -= 17
    c.setFillColor(SLATE)
    c.setFont("CV", 8.5)
    c.drawString(MARGIN, y, "Hanoi, Vietnam · 6 years of frontend experience")
    y -= 22
    y = text(
        c,
        "I turn complex operations into clear, maintainable interfaces. My experience spans hands-on delivery, API integration, UI/UX collaboration, task breakdown, and frontend leadership across React, Next.js, and Vue 3 products.",
        MARGIN,
        y,
        WIDTH,
        size=9,
        leading=12.2,
        color=INK,
    )
    y -= 7
    c.setFillColor(SOFT_BLUE)
    c.roundRect(MARGIN, y - 29, WIDTH, 29, 6, fill=1, stroke=0)
    c.setFillColor(BLUE)
    c.setFont("CV-Bold", 7.7)
    c.drawString(MARGIN + 12, y - 18, "REACT · NEXT.JS · VUE 3")
    c.drawCentredString(PAGE_W / 2, y - 18, "BUILD · INTEGRATE · LEAD")
    c.drawRightString(PAGE_W - MARGIN - 12, y - 18, "HBLAB · VIETTEL · FPT")
    y -= 44
    y = section(c, "Recent project timeline · HBLAB JSC · Jan 2023 — Present", y)
    y = project(
        c, y, period="JAN 2026 — PRESENT", name="OneAuto", role="Frontend Developer · Full-time onsite", client="TASCO Group",
        summary="Automotive workshop operations covering repair orders, accessory sales, and roadside assistance.",
        evidence="Owned requirement analysis, flows, frontend, APIs, validation, permissions, and testing; proposed an in-order customer/vehicle-owner drawer that was approved and delivered.",
        tech="Vue 3 · TypeScript · Vue Router · Ant Design Vue", ongoing=True,
    )
    y = project(
        c, y, period="MAR 2026 — MAY 2026", name="Commerce Convert", role="Frontend Lead · 50% allocation", client="Auto Magic",
        summary="One-month React-to-Next.js conversion completed with one other frontend developer.",
        evidence="Evaluated libraries, guided the migration, and reviewed code to improve SEO and standardize the group framework.",
        tech="React · Next.js · SEO",
    )
    y = project(
        c, y, period="APR 2025 — PRESENT", name="Property", role="Frontend Developer", client="Auto Magic",
        summary="Modern rebuild of a legacy building-accounting and financial-information system.",
        evidence="Rebuilt the UI, investigated APIs, and helped the BA recover business rules from outdated documentation.",
        tech="Next.js · Ant Design", ongoing=True,
    )
    y = project(
        c, y, period="DEC 2024 — JUN 2026", name="HP Booster", role="Frontend Sub-lead · Led 3 FE", client="Tryhatch",
        summary="Drag-and-drop marketing website builder migrated from React to Next.js.",
        evidence="Reassessed the frontend foundation, planned and coded the migration, improving SEO readiness and maintainability.",
        tech="React · Next.js · SEO",
    )
    y = project(
        c, y, period="APR 2023 — JAN 2026", name="KPro", role="Developer → Frontend Lead", client="Auto Magic",
        summary="Enterprise content platform with upload, file lists, and a deeply nested tree menu.",
        evidence="Led task breakdown, solutions, UI/UX, and reviews; built infinite scroll for large, deeply nested node sets to improve performance.",
        tech="Next.js · Ant Design · Infinite scroll",
    )
    y = section(c, "Core capabilities", y + 2)
    capabilities = [
        ("PRODUCT FRONTEND", "React · Next.js · Vue 3 · TypeScript · React Native"),
        ("UI SYSTEMS", "Ant Design · Storybook · Atomic Design · Playwright"),
        ("INTEGRATION", "REST APIs · Stripe · Google Maps · Terra Map · Grafana"),
        ("LEADERSHIP", "Requirement analysis · Task breakdown · Code review · UI/UX collaboration"),
    ]
    column_width = (WIDTH - 20) / 2
    for index, (capability, details) in enumerate(capabilities):
        col = index % 2
        row = index // 2
        cap_x = MARGIN + col * (column_width + 20)
        cap_y = y - row * 42
        label(c, capability, cap_x, cap_y)
        text(c, details, cap_x, cap_y - 12, column_width, size=7.7, leading=10)
    c.showPage()

    # Page 2 — supporting project chronology and earlier companies.
    page_frame(c, 2)
    y = PAGE_H - 50
    label(c, "Additional project timeline", MARGIN, y)
    y -= 22
    y = project(
        c, y, period="JUN 2025", name="PFD Maintain", role="Reviewer only · 50% allocation", client="Auto Magic",
        summary="Short extension adding PDF upload and viewing that had been absent from KPro.",
        evidence="Reviewed the solution and implementation; did not claim direct feature delivery.",
        tech="React · Next.js · PDF",
    )
    y = project(
        c, y, period="DEC 2024 — MAY 2025", name="MUSA PMS", role="Frontend Lead · 3 FE", client="MUSA",
        summary="Admin product for work, time, leave, working days, and Gantt planning.",
        evidence="Led estimation and delivery, customized the gantt-task-react timeline, and reached customer acceptance.",
        tech="React · gantt-task-react",
    )
    y = project(
        c, y, period="DEC 2024 — JAN 2026", name="Grafana Customization", role="Frontend Developer", client="Yokogawa Digital",
        summary="Reimplemented customer-specific behavior from a Grafana 6.3.4-based product on a 12.2 base.",
        evidence="Traced official source behavior, planned the customization, and directly built data retrieval and display changes.",
        tech="React · Grafana source",
    )
    y = project(
        c, y, period="OCT 2024 — NOV 2024", name="Kotoba Stripe", role="Frontend Developer", client="Kotoba",
        summary="React payment and account experience combining multiple Stripe flows.",
        evidence="Researched Stripe, proposed payment UI, implemented the flow, and worked 1:1 in English with a nontechnical client; accepted.",
        tech="React · Stripe",
    )
    y = project(
        c, y, period="AUG 2024 — FEB 2025", name="WorkOrder", role="Frontend Lead", client="Auto Magic",
        summary="Commercial workflow builder for multiple customer companies.",
        evidence="Led analysis, task breakdown and reviews, and directly built the workflow builder.",
        tech="Next.js",
    )
    y = project(
        c, y, period="FEB 2024 — JUN 2025", name="Workflow", role="Frontend Lead", client="Auto Magic",
        summary="Internal workflow creation, task assignment, and progress tracking for a 4 FE / 3 BE team.",
        evidence="Analyzed requirements with the Comtor/BA, split frontend work, and built custom/master-data workflow creation.",
        tech="Next.js",
    )
    y = project(
        c, y, period="AUG 2023 — JUN 2024", name="Commerce", role="Frontend Tech Lead · 3 FE", client="Auto Magic",
        summary="Building and financial-data management with Google Maps, Terra Map, and formula settings.",
        evidence="Decoded incomplete Japanese API documentation through testing, designed map flows, divided work, reviewed code, and built formula validation.",
        tech="Next.js · Google Maps · Terra Map",
    )

    # Compact earlier career section.
    y = section(c, "Earlier experience", y + 2)
    c.setFillColor(INK)
    c.setFont("CV-Bold", 9)
    c.drawString(MARGIN, y, "Viettel Software Service · Mobile Developer")
    c.setFillColor(BLUE)
    c.setFont("CV-Bold", 7.5)
    c.drawRightString(PAGE_W - MARGIN, y, "SEP 2022 — APR 2023")
    y = text(c, "Built and integrated the React Native registration flow for an internal Viettel Family application. Released for internal use; details remain confidential.", MARGIN, y - 13, WIDTH, size=7.8, leading=10)
    y -= 7
    c.setFillColor(INK)
    c.setFont("CV-Bold", 9)
    c.drawString(MARGIN, y, "FPT Software · Software Engineer")
    c.setFillColor(BLUE)
    c.setFont("CV-Bold", 7.5)
    c.drawRightString(PAGE_W - MARGIN, y, "SEP 2020 — AUG 2022")
    y = text(c, "AIA Components: React / Storybook / Playwright component system using Atomic Design, delivered 1:1 in English and accepted. Requirement Tool: CKEditor toolbar/plugin, formatting, paste, template, and validation logic.", MARGIN, y - 13, WIDTH, size=7.8, leading=10)
    y -= 7
    c.setFillColor(INK)
    c.setFont("CV-Bold", 9)
    c.drawString(MARGIN, y, "Education")
    text(c, "FPT University", MARGIN, y - 13, WIDTH, size=7.8, leading=10)

    c.save()


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("usage: create_resume_pdf.py PUBLIC_PATH OUTPUT_PATH")
    build_pdf(Path(sys.argv[1]))
    build_pdf(Path(sys.argv[2]))
