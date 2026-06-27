import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Karensa Studio — software studio building websites, web apps and ERP systems";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0c0a09",
          backgroundImage:
            "radial-gradient(circle at 18% 22%, rgba(255,255,255,0.10), transparent 38%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.06), transparent 42%)",
          padding: "72px",
          fontFamily: "sans-serif",
          color: "#faf7f2",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              backgroundColor: "#faf7f2",
              color: "#0c0a09",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            K
          </div>
          <div
            style={{
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "rgba(250,247,242,0.7)",
            }}
          >
            Karensa Studio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            We design and build platforms that work.
          </div>
          <div style={{ fontSize: 30, color: "rgba(250,247,242,0.72)", maxWidth: 860 }}>
            Websites · Web Apps · Mobile Apps · ERP Systems
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            color: "rgba(250,247,242,0.6)",
          }}
        >
          <span>karensastudio.com</span>
          <span>30+ projects since 2015</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
