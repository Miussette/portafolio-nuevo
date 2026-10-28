import {ImageResponse} from "next/og";

export const alt = "Miussette Alfaro — FullStack Developer · Miu Works";
export const size = {width: 1200, height: 630};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#07090b", color: "#e8eef0", padding: "70px 80px", borderLeft: "12px solid #57d5e7"}}>
      <div style={{display: "flex", justifyContent: "space-between", color: "#57d5e7", fontSize: 28}}><span>Miu Works</span><span>Chile · Tech Freelancer</span></div>
      <div style={{display: "flex", flexDirection: "column", gap: 20}}>
        <div style={{fontSize: 82, fontWeight: 700, letterSpacing: -3}}>Miussette Alfaro.</div>
        <div style={{fontSize: 38}}>FullStack Developer</div>
        <div style={{fontSize: 27, color: "#8a979d"}}>Web · Mobile apps · Cloud · UX/UI</div>
      </div>
      <div style={{fontSize: 26, color: "#57d5e7"}}>miutech.cl</div>
    </div>,
    size,
  );
}
