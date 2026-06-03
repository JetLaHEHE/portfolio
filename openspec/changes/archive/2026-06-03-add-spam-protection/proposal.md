## Why

The portfolio contact form has no abuse protection — anyone can POST unlimited requests to `/api/contact`, which sends emails via Resend at a cost. Without rate limiting or origin verification, the endpoint is vulnerable to spam, email bombing, and API abuse.

## What Changes

- Add in-memory rate limiting to the contact API (per IP, 3 requests per minute)
- Add origin/referrer header validation to reject cross-site requests
- Add Cloudflare Turnstile CAPTCHA widget to the ContactForm component with server-side verification
- Create a reusable rate-limit utility
- Document new environment variables

## Capabilities

### New Capabilities
- `api-rate-limiting`: Rate limiting and abuse prevention for the contact form API, including per-IP rate limits, origin validation, and CAPTCHA verification

### Modified Capabilities
*(none — no existing specs defined)*

## Impact

- `app/api/contact/route.ts` — add rate limit check, origin validation, Turnstile verification
- `components/ContactForm.tsx` — add Turnstile widget, include token in POST
- `lib/rateLimit.ts` — new rate limiter utility
- `.env.example` — document `TURNSTILE_SECRET_KEY` and `TURNSTILE_SITE_KEY`
- No new npm dependencies (Turnstile verification uses `fetch`)
