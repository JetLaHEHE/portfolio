## Context

The contact API has two issues causing form submission failures. Turnstile is required server-side even without a configured secret key, making local dev impossible. The origin check uses a fallback of `http://localhost:3000` which doesn't match production domains.

## Goals / Non-Goals

**Goals:**
- Make Turnstile optional when not configured (graceful dev fallback)
- Only validate origin when `NEXT_PUBLIC_SITE_URL` is explicitly set
- Use exact origin matching (`===`) instead of `startsWith`

**Non-Goals:**
- Removing security — when configured, all checks remain active
- Changing the rate limiting behavior

## Decisions

1. **Conditional token check** — If `TURNSTILE_SECRET_KEY` isn't set, skip token validation. This makes the form work in dev without Turnstile keys while remaining secure in production.
2. **Conditional origin check** — Only check origin if `NEXT_PUBLIC_SITE_URL` is explicitly set. If unset, skip validation (dev-friendly) or auto-detect from the request host.
3. **Exact origin match** — Change `startsWith` to `===` to prevent subdomain-based bypass.

## Risks / Trade-offs

- [Dev and prod behavior differ] → Acceptable; Turnstile and origin checks are only meaningful in production
