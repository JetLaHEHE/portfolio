## ADDED Requirements

### Requirement: Inline Validation Messages

The contact form SHALL display inline validation messages for each field before submission.

#### Scenario: Empty name
- **WHEN** the user submits with an empty name field
- **THEN** a "Name is required" message SHALL appear below the name input

#### Scenario: Invalid email format
- **WHEN** the user submits with an email that doesn't match a valid format
- **THEN** a "Please enter a valid email" message SHALL appear below the email input

#### Scenario: Message too short
- **WHEN** the user submits a message with fewer than 10 characters
- **THEN** a "Message must be at least 10 characters" message SHALL appear below the textarea

#### Scenario: Valid submission
- **WHEN** all fields pass validation
- **THEN** the form SHALL submit the POST request normally

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
