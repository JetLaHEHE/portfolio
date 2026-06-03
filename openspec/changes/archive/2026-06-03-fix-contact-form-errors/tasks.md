## 1. Server-Side API Fixes

- [ ] 1.1 Make Turnstile token check conditional on TURNSTILE_SECRET_KEY being set
- [ ] 1.2 Make origin check conditional on NEXT_PUBLIC_SITE_URL being set
- [ ] 1.3 Change startsWith to === for origin matching

## 2. Client-Side Form Fixes

- [ ] 2.1 Add Turnstile loading/ready state to disable submit button until ready
- [ ] 2.2 Add token validation that prevents submit if token is empty
- [ ] 2.3 Handle 400 error responses by showing the server's error message

## 3. Docs & Config

- [ ] 3.1 Update .env.example with clearer comments on which vars are production-only
