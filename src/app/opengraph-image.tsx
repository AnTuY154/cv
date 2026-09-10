import { ImageResponse } from "next/og";

import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        background: "#F8FAFC",
        color: "#1E293B",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
          color: "#2563EB",
          fontSize: 24,
        }}
      >
        <span
          style={{
            display: "flex",
            width: 52,
            height: 52,
            borderRadius: 16,
            background: "#2563EB",
            color: "white",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
          }}
        >
          AT
        </span>
        <span>Selected work · 2026</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.04em" }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 30, color: "#475569" }}>{profile.role}</div>
        <div style={{ fontSize: 25, color: "#C2410C" }}>{profile.headline}</div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#475569" }}
      >
        <span>React · Next.js · UI engineering</span>
        <span>{profile.location}</span>
      </div>
    </div>,
    { ...size },
  );
}
