## Why

The contact form shows a generic "Something went wrong" error on submission because: (1) the Turnstile token is empty when submitted before the widget loads or when Turnstile isn't configured, (2) the origin validation rejects requests when `NEXT_PUBLIC_SITE_URL` isn't set in production, and (3) 400 status errors aren't mapped to user-friendly messages on the client. These make the contact form unreliable.

## What Changes

- Add client-side token validation that prevents submit if Turnstile hasn't generated a token
- Add a Turnstile loading/ready state to disable the submit button until ready
- Map 400 server responses to clear user-facing error messages on the client
- Make Turnstile verification optional on the server when secret key isn't set (graceful dev fallback)
- Make origin validation conditional — only check when `NEXT_PUBLIC_SITE_URL` is explicitly set
- Update `.env.example` with clearer comments

## Capabilities

### New Capabilities
- *(none — bug fixes to existing capabilities)*

### Modified Capabilities
- `api-rate-limiting`: Make Turnstile token optional when key isn't configured; make origin check conditional on env var being set
- `inline-validation`: Add token readiness check before submit; add Turnstile loading state

## Impact

- `components/ContactForm.tsx` — add token validation, Turnstile loading state, handle 400 errors
- `app/api/contact/route.ts` — make token optional without secret key; conditional origin check
- `.env.example` — clearer comments for site URL and Turnstile keys
