## ADDED Requirements

### Requirement: Project Detail Page

The system SHALL provide `/projects/[slug]` pages for detailed project information beyond the homepage card.

#### Scenario: View project detail
- **WHEN** a user navigates to `/projects/rfid-system`
- **THEN** they SHALL see the project title, description, tags, links, and additional detailed content

#### Scenario: Non-existent project
- **WHEN** a user navigates to `/projects/non-existent`
- **THEN** a 404 page SHALL be shown

### Requirement: Navigation to Detail Pages

The system SHALL allow users to navigate from project cards on the homepage to their detail pages.

#### Scenario: Click project card
- **WHEN** a user clicks a project card on the homepage
- **THEN** they SHALL be redirected to `/projects/<project-slug>`
