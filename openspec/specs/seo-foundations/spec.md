# seo-foundations Specification

## Purpose
TBD - created by archiving change polish-and-seo-fixes. Update Purpose after archive.
## Requirements
### Requirement: OG Image

The system SHALL serve a valid OpenGraph image at `/og-image.png` for social sharing previews.

#### Scenario: Default OG image
- **WHEN** a social media crawler fetches `/og-image.png`
- **THEN** a 1200x630 PNG image SHALL be returned with the site title and tagline

### Requirement: Sitemap

The system SHALL provide a `sitemap.xml` that lists all public pages for search engine indexing.

#### Scenario: Sitemap contains all pages
- **WHEN** a search engine fetches `/sitemap.xml`
- **THEN** the response SHALL include `<url>` entries for `/`, `/blog`, each blog post, and each project page

### Requirement: Robots.txt

The system SHALL provide a `robots.txt` that allows all crawlers and points to the sitemap.

#### Scenario: Robots allows all
- **WHEN** a crawler fetches `/robots.txt`
- **THEN** the response SHALL allow all user agents and reference the sitemap URL

### Requirement: Correct Metadata Domain

The system SHALL use the correct domain (`jetagatep.dev`) instead of the placeholder `your-domain.vercel.app`.

#### Scenario: Meta tags use real domain
- **WHEN** a page is rendered
- **THEN** OpenGraph and Canonical URLs SHALL use `https://jetagatep.dev`

