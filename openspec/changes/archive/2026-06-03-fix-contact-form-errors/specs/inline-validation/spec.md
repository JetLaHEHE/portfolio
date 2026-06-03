## MODIFIED Requirements

### Requirement: Inline Validation Messages

The contact form SHALL display inline validation messages for each field before submission.

#### Scenario: Submit before Turnstile loads
- **WHEN** the user clicks submit before the Turnstile widget has generated a token
- **THEN** the submit button SHALL be disabled with a "Loading security check..." label
- **AND** the form SHALL NOT be submitted

#### Scenario: Turnstile ready
- **WHEN** the Turnstile widget has generated a token
- **THEN** the submit button SHALL be enabled

#### Scenario: Server returns 400
- **WHEN** the server responds with a 400 status
- **THEN** the server's error message SHALL be displayed to the user
