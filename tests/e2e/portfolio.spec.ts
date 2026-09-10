import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

import { projects } from "../../src/content/projects";

test.describe("portfolio smoke", () => {
  test("home page exposes the primary content path", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("lang", "vi");
    await expect(page).toHaveTitle(/Anh Tuấn/);
    await expect(page.getByRole("heading", { name: "Đỗ Trọng Anh Tuấn" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Xem những dự án tiêu biểu" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "OneAuto" }).first()).toBeVisible();
  });

  test("language switcher changes copy, html lang, and persists", async ({ page }) => {
    await page.goto("/#about");

    if ((page.viewportSize()?.width ?? 0) <= 900) {
      await page.getByRole("button", { name: "Mở menu điều hướng" }).click();
      await page.locator("#mobile-navigation").getByRole("button", { name: "Tiếng Anh" }).click();
    } else {
      await page.getByRole("button", { name: "Tiếng Anh" }).click();
    }
    expect(new URL(page.url()).hash).toBe("#about");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(
      page.getByRole("heading", { name: "A little more about me and how I work." }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "View selected work" })).toBeVisible();
    await expect(page.getByRole("button", { name: "English" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );

    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.getByRole("link", { name: "View selected work" })).toBeVisible();

    await page.goto("/projects/hp-booster");
    await expect(page.getByRole("heading", { name: "Where I contributed" })).toBeVisible();
    await page.goto("/resume");
    await expect(page.getByRole("link", { name: "Download PDF" })).toBeVisible();
  });

  test("mobile navigation opens, focuses, and closes with Escape", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    const menuButton = page.getByRole("button", { name: "Mở menu điều hướng" });
    await menuButton.click();
    await expect(
      page.locator("#mobile-navigation").getByRole("link", { name: "Công việc", exact: true }),
    ).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("button", { name: "Mở menu điều hướng" })).toBeFocused();
  });

  test("all project routes render", async ({ page }) => {
    for (const project of projects) {
      await page.goto(`/projects/${project.slug}`, { waitUntil: "domcontentloaded" });
      await expect(page.getByRole("heading", { name: project.name })).toBeVisible();
    }
  });

  test("resume download and accessibility smoke pass", async ({ page }) => {
    await page.goto("/resume");
    await expect(page.getByRole("link", { name: "Tải PDF" })).toHaveAttribute(
      "href",
      "/resume/anh-tuan-cv.pdf",
    );
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test("home page passes axe in both languages", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(700);
    const vietnameseResults = await new AxeBuilder({ page }).analyze();
    expect(vietnameseResults.violations).toEqual([]);

    if ((page.viewportSize()?.width ?? 0) <= 900) {
      await page.getByRole("button", { name: "Mở menu điều hướng" }).click();
      await page.locator("#mobile-navigation").getByRole("button", { name: "Tiếng Anh" }).click();
      await page.getByRole("button", { name: "Close navigation menu" }).click();
    } else {
      await page.getByRole("button", { name: "Tiếng Anh" }).click();
    }
    await page.waitForTimeout(300);
    const englishResults = await new AxeBuilder({ page }).analyze();
    expect(englishResults.violations).toEqual([]);
  });

  test("key breakpoints do not create horizontal overflow", async ({ page }) => {
    for (const viewport of [
      { width: 375, height: 812 },
      { width: 768, height: 1024 },
      { width: 1024, height: 900 },
      { width: 1440, height: 1000 },
    ]) {
      await page.setViewportSize(viewport);
      await page.goto("/");
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
        viewport.width,
      );
      await page.screenshot({ path: `test-results/home-${viewport.width}.png`, fullPage: true });
    }
  });
});
