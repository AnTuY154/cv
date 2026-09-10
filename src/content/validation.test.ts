import assert from "node:assert/strict";
import test from "node:test";

import { projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { validateProjects } from "@/content/validation";

test("keeps the verified project index valid", () => {
  assert.equal(projects.length, 15);
  assert.deepEqual(validateProjects(projects), []);
});

test("keeps OneAuto constrained to the verified facts", () => {
  const oneAuto = projects.find((project) => project.slug === "oneauto");

  assert.deepEqual(oneAuto?.period, { start: "2026-01", end: "present" });
  assert.deepEqual(oneAuto?.technologies, ["Next.js", "Java"]);
  assert.equal(oneAuto?.ongoing, true);
  assert.deepEqual(oneAuto?.responsibilities, []);
});

test("keeps the approved personal facts in the profile record", () => {
  assert.equal(profile.university, "FPT University");
  assert.equal(profile.dateOfBirth, "1999-04-15");
  assert.equal(profile.yearsOfExperience, "5 years");
});
