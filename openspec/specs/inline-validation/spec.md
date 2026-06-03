# inline-validation Specification

## Purpose
TBD - created by archiving change polish-and-seo-fixes. Update Purpose after archive.
## Requirements
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

### Requirement: Resume Download

The system SHALL provide a visible download button for the resume PDF in the About section.

#### Scenario: Resume button visible
- **WHEN** a user views the About section
- **THEN** they SHALL see a "Download Resume (PDF)" button
- **AND** clicking it SHALL download `/resume.pdf`

### Requirement: Reduced Motion

The particle background animation SHALL respect the user's `prefers-reduced-motion` setting.

#### Scenario: Reduced motion enabled
- **WHEN** the user has `prefers-reduced-motion: reduce` set in their OS/browser
- **THEN** the canvas SHALL NOT render animated particles

