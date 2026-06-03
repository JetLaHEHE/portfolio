## ADDED Requirements

### Requirement: Per-IP Rate Limiting

The system SHALL limit contact form submissions to 3 requests per minute per IP address.

#### Scenario: Under rate limit
- **WHEN** a client sends fewer than 3 POST requests to `/api/contact` within a rolling 60-second window
- **THEN** each request SHALL be processed normally

#### Scenario: Rate limit exceeded
- **WHEN** a client sends a 4th POST request to `/api/contact` within a rolling 60-second window
- **THEN** the system SHALL return a 429 HTTP status with a `Retry-After` header

#### Scenario: Rate limit resets
- **WHEN** a client waits 60 seconds after being rate-limited
- **THEN** their next request SHALL be processed normally

### Requirement: Origin Validation

The system SHALL reject requests that do not originate from the portfolio's own domain.

#### Scenario: Valid origin
- **WHEN** a POST request to `/api/contact` includes an `Origin` or `Referer` header matching the portfolio domain
- **THEN** the request SHALL proceed to rate limiting and CAPTCHA checks

#### Scenario: Missing origin
- **WHEN** a POST request to `/api/contact` has no `Origin` or `Referer` header
- **THEN** the request SHALL be rejected with a 403 status

#### Scenario: Cross-origin request
- **WHEN** a POST request to `/api/contact` includes an `Origin` header from a different domain
- **THEN** the request SHALL be rejected with a 403 status

### Requirement: CAPTCHA Verification

The system SHALL use Cloudflare Turnstile to verify that submissions come from real users.

#### Scenario: Turnstile widget rendered
- **WHEN** the ContactForm component loads
- **THEN** a Turnstile widget SHALL be rendered below the message field

#### Scenario: Valid token submitted
- **WHEN** a POST request to `/api/contact` includes a valid Turnstile token
- **THEN** the server SHALL verify the token with Cloudflare's API before processing the email

#### Scenario: Missing or invalid token
- **WHEN** a POST request to `/api/contact` has no Turnstile token or an invalid one
- **THEN** the server SHALL return a 400 status with an error message

#### Scenario: Token verification failure
- **WHEN** the server-side Turnstile verification call to Cloudflare fails
- **THEN** the request SHALL be rejected with a 500 status
