import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0c0a09",
          color: "#faf7f2",
          fontSize: 44,
          fontWeight: 800,
          fontFamily: "sans-serif",
          borderRadius: 14,
        }}
      >
        K
      </div>
    ),
    { ...size }
  );
}
