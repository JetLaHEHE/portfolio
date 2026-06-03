## 1. Rate Limiter Utility

- [ ] 1.1 Create `lib/rateLimit.ts` with in-memory rate limiter (Map-based, per-IP, 3 req/min rolling window)
- [ ] 1.2 Add TTL cleanup to prevent memory leaks on stale entries

## 2. Server-Side API Protection

- [ ] 2.1 Add origin/referer header validation to `app/api/contact/route.ts`
- [ ] 2.2 Integrate rate limiter into `app/api/contact/route.ts` with 429 response
- [ ] 2.3 Add Turnstile token verification using Cloudflare's API endpoint
- [ ] 2.4 Return appropriate error responses (400 for missing fields/token, 403 for bad origin, 429 for rate limit, 500 for server errors)

## 3. Client-Side CAPTCHA

- [ ] 3.1 Add Turnstile widget to `components/ContactForm.tsx` below the message field
- [ ] 3.2 Include Turnstile token in the POST request payload
- [ ] 3.3 Display user-friendly error messages for rate limit or CAPTCHA failures

## 4. Configuration

- [ ] 4.1 Add `TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` to `.env.example`
