import { checkRateLimit } from "@/lib/rateLimit";

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "127.0.0.1";

  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (siteUrl) {
    if (origin && origin !== siteUrl) {
      return Response.json({ error: "Forbidden" }, { status: 403 });
    }
    if (referer && !referer.startsWith(siteUrl)) {
      return Response.json({ error: "Forbidden" }, { status: 403 });
    }
  }

  const { allowed, retryAfter } = checkRateLimit(ip);
  if (!allowed) {
    return Response.json({ error: "Too many requests" }, {
      status: 429,
      headers: { "Retry-After": String(retryAfter) },
    });
  }

  const { name, email, message, token } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    if (!token) {
      return Response.json({ error: "Security check not completed" }, { status: 400 });
    }

    const verification = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret: turnstileSecret, response: token }),
      },
    );

    const verificationData = await verification.json();
    if (!verificationData.success) {
      return Response.json({ error: "Verification failed" }, { status: 400 });
    }
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "jetagatep@gmail.com",
      subject: `Portfolio Contact: ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Failed to send" }, { status: 500 });
  }
}
