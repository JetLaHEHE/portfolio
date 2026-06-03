## Context

The contact API at `app/api/contact/route.ts` currently accepts any POST request and sends an email via Resend. There is no rate limiting, origin validation, or bot detection. Since Resend charges per email, an attacker could spam the endpoint and incur costs. The site uses Turnstile (free, privacy-focused) to avoid adding friction while blocking automated submissions.

## Goals / Non-Goals

**Goals:**
- Prevent email bombing and API abuse with minimal code
- Add three independent protection layers (origin check, rate limit, CAPTCHA)
- Keep the form user-friendly with invisible Turnstile

**Non-Goals:**
- User accounts or authentication system
- Database-backed rate limiting (in-memory is sufficient for a portfolio)
- IP blocklisting or persistent ban system

## Decisions

1. **In-memory rate limiter over Redis/Database** — No persistent storage needed for a single-server portfolio. A `Map<string, {count, resetAt}>` with TTL cleanup is simple and sufficient.
2. **Cloudflare Turnstile over reCAPTCHA** — Free, privacy-first (no tracking), invisible mode available, and requires no Google account. No npm package needed (fetch-based verification).
3. **Origin + Referer header check over API keys** — No client-side changes needed for origin validation. Checks both headers as fallback since some clients send one but not the other.
4. **Rolling 60-second window over fixed window** — Prevents burst abuse at window boundaries. 3 req/min is generous for a human but blocks bots.

## Risks / Trade-offs

- [In-memory state lost on server restart] → Rate limit resets, acceptable for a portfolio
- [Turnstile adds a small dependency on Cloudflare] → Degrade gracefully: if verification fails, reject the request (fail closed)
- [Rate limiter doesn't scale across multiple instances] → Acceptable for single-server portfolio; can upgrade to Redis-backed if needed
