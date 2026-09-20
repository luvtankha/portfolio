import { ImageResponse } from "next/og";

export const alt = "YOUR NAME — Full-Stack Developer & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "70px", color: "#F4F4F5", background: "radial-gradient(circle at 85% 15%, #3a256d 0, transparent 30%), #09090B", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#A78BFA", fontSize: 22, letterSpacing: 4 }}><span style={{ width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #6D4EAA", borderRadius: 10 }}>P</span> PORTFOLIO</div>
      <div style={{ display: "flex", flexDirection: "column" }}><span style={{ color: "#A1A1AA", fontSize: 26, letterSpacing: 5 }}>FULL-STACK DEVELOPER</span><span style={{ marginTop: 22, fontSize: 84, fontWeight: 700, letterSpacing: -4 }}>YOUR NAME</span><span style={{ marginTop: 18, color: "#A78BFA", fontSize: 36 }}>Building toward AI Engineering</span></div>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#A1A1AA", fontSize: 22 }}><span>India · IST</span><span>software · automation · AI</span></div>
    </div>,
    size,
  );
}
