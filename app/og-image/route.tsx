import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "white",
            marginBottom: 12,
          }}
        >
          John Jethro Agatep
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#a5b4fc",
          }}
        >
          Full-Stack Developer
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#818cf8",
            marginTop: 40,
          }}
        >
          jetagatep.dev
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
