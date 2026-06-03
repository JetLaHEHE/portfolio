# blog Specification

## Purpose
TBD - created by archiving change add-blog-and-project-pages. Update Purpose after archive.
## Requirements
### Requirement: Blog Post Listing

The system SHALL provide a `/blog` page that lists all published blog posts sorted by date (newest first).

#### Scenario: View blog list
- **WHEN** a user navigates to `/blog`
- **THEN** they SHALL see a list of blog post cards showing title, date, excerpt, and tags

#### Scenario: Empty blog
- **WHEN** there are no blog posts published
- **THEN** the `/blog` page SHALL show a friendly empty state message

### Requirement: Blog Post Detail

The system SHALL provide `/blog/[slug]` pages for individual blog posts.

#### Scenario: View published post
- **WHEN** a user navigates to `/blog/my-first-post`
- **THEN** the full post content SHALL be displayed with title, date, tags, and rendered markdown body

#### Scenario: Non-existent post
- **WHEN** a user navigates to `/blog/non-existent-slug`
- **THEN** a 404 page SHALL be shown

### Requirement: Markdown Content

Blog posts SHALL be authored as markdown files with YAML frontmatter.

#### Scenario: Frontmatter fields
- **WHEN** a markdown file includes frontmatter with `title`, `date`, `tags`, and `excerpt`
- **THEN** those fields SHALL be parsed and used for display and sorting

#### Scenario: Markdown rendering
- **WHEN** a blog post is displayed
- **THEN** the markdown body SHALL be rendered as HTML with proper heading, list, link, and code formatting

