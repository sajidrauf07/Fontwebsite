# AGENTS.md

# LETRAS BONITAS — COMPLETE PROJECT SPECIFICATION

## 1. PROJECT IDENTITY

Project Name:

Letras Bonitas

Primary Website:

Letras Bonitas is a Spanish-language, SEO-first, static utility website focused on fancy letters, stylish Unicode text, symbols, emojis, gaming names, social-media text and related text-generation/conversion tools.

Primary Homepage:

/

Homepage Topic:

Letras Bonitas

English Meaning:

Pretty / Fancy Letters

Primary Business Model:

FREE utility website monetized primarily through advertising and organic search traffic.

Primary Growth Channel:

Google organic search.

Secondary Growth Channel:

Social sharing, direct traffic, copy/paste use cases, backlinks and returning users.

Core Product:

Fast, free, browser-based text generation and conversion tools.

The website must NOT feel like a generic blog.

It must feel like a polished utility/product website whose tools provide the main user value.

---

# 2. CORE PRODUCT PHILOSOPHY

The website follows this hierarchy:

USER INTENT
↓
WORKING TOOL
↓
IMMEDIATE RESULT
↓
COPY / USE RESULT
↓
HELPFUL EXPLANATION
↓
RELATED TOOLS
↓
INTERNAL LINKS
↓
SEO CONTENT

The tool is the product.

SEO content supports the product.

Do not create pages whose only purpose is to contain AI-generated text.

Every important page should provide genuine usefulness.

---

# 3. TECHNOLOGY STACK

Use:

* Next.js
* TypeScript
* React
* Next.js App Router
* Modern CSS architecture
* Responsive design
* Static generation wherever possible

Preferred architecture:

Next.js App Router

Use Server Components by default.

Use Client Components only when interaction requires them.

Examples of Client Components:

* Text input
* Unicode generator
* Copy buttons
* Favorites
* Search
* Filters
* Interactive tool controls

Examples of Server Components:

* SEO content
* Static headings
* Navigation
* Footer
* FAQ content
* Category descriptions
* Static related links

---

# 4. STATIC WEBSITE REQUIREMENT

This project should be primarily a STATIC / PRE-RENDERED website.

Important:

Do NOT create an unnecessary backend.

Do NOT create a database for the core tools.

Do NOT require user accounts for basic functionality.

Do NOT send normal user text to an external server when client-side processing can perform the operation.

The core generators should run inside the browser.

Benefits:

* Fast
* Cheap hosting
* Easy deployment
* Excellent scalability
* Good Core Web Vitals potential
* Better privacy
* Lower infrastructure requirements

Preferred deployment:

Vercel or another modern static/Next.js hosting platform.

---

# 5. NO LOGIN REQUIRED FOR CORE FEATURES

Users should be able to:

* enter text
* generate styles
* copy results
* search styles
* filter styles
* favorite styles
* use tools

without creating an account.

Favorites and recent styles can use localStorage.

Do not introduce authentication unless a future requirement explicitly requires it.

---

# 6. PRIMARY HOMEPAGE

URL:

/

Title:

Letras Bonitas

Primary intent:

Pretty/Fancy Letters

Role:

Homepage + primary high-volume head-term hub + main fancy text generator.

The homepage should be the strongest and most polished page on the website.

---

# 7. HOMEPAGE PRODUCT

The main homepage tool should be a powerful Fancy Letters / Stylish Text Generator.

Core flow:

1. User enters normal text.
2. Text is transformed instantly.
3. Multiple styles are displayed.
4. User previews the result.
5. User copies the desired result.
6. User can favorite the style.
7. User can explore related categories/tools.

No page reload should be necessary.

---

# 8. FONT / STYLE LIBRARY

Target approximately:

300–400 genuinely useful style presets.

IMPORTANT:

Do NOT artificially create 400 duplicates.

Do NOT claim that every style is a traditional font file.

The core product is primarily based on Unicode transformations and decorative text combinations.

Each style should have:

* unique ID
* display name
* category
* transformation
* tags
* popularity score
* supported character information
* optional experimental flag

Example data model:

{
id,
name,
category,
tags,
transform,
popularity,
experimental
}

The architecture must allow additional styles to be added without rewriting the UI.

---

# 9. STYLE CATEGORIES

The style system should support categories such as:

* All
* Popular
* Bold
* Italic
* Bold Italic
* Cursive
* Elegant
* Gothic
* Double Struck
* Monospace
* Sans Serif
* Small Caps
* Tiny
* Superscript
* Subscript
* Circled
* Squared
* Parenthesized
* Fullwidth
* Bubble
* Aesthetic
* Decorative
* Hearts
* Stars
* Symbols
* Glitch
* Strikethrough
* Underline
* Upside Down
* Gaming

The category system must be extensible.

---

# 10. UNICODE ENGINE

Create a dedicated Unicode transformation engine.

Recommended structure:

/lib/unicode/
/lib/unicode/mappings.ts
/lib/unicode/transformations.ts
/data/fontStyles.ts

Separate:

1. Character mappings
2. Transformation functions
3. Style definitions
4. UI

Never mix all transformation logic directly inside React components.

---

# 11. CHARACTER HANDLING

The transformation engine must safely handle:

* uppercase letters
* lowercase letters
* numbers where Unicode equivalents exist
* spaces
* punctuation
* emojis
* symbols
* unsupported characters
* accented characters where possible

If a character cannot be transformed:

KEEP THE ORIGINAL CHARACTER.

Never silently delete user input.

Never replace unsupported characters with random symbols.

Never break emoji sequences intentionally.

---

# 12. EXPERIMENTAL UNICODE STYLES

Some Unicode combinations may not render correctly on every device.

Support an "Experimental" classification.

Experimental styles should:

* be clearly marked internally
* not dominate the main results
* degrade gracefully
* never break the page
* never destroy user input

Do not promise universal rendering compatibility.

---

# 13. GENERATOR UX

The generator should contain:

## Text input

Placeholder:

"Escribe tu texto aquí..."

Features:

* live conversion
* character counter
* clear button
* accessible label
* keyboard support

## Example buttons

Include examples such as:

* Letras Bonitas
* Hola Mundo
* Mi Nombre
* Instagram Bio
* Gaming Name

Clicking an example populates the input.

---

# 14. GENERATED STYLE CARD

Each result card should contain:

* Style name
* Category
* Generated preview
* Copy button
* Favorite button

Example:

Cursiva

𝓛𝓮𝓽𝓻𝓪𝓼 𝓑𝓸𝓷𝓲𝓽𝓪𝓼

[Copiar]

Copying should happen without page reload.

---

# 15. COPY FUNCTIONALITY

Use the Clipboard API when available.

When copied:

* show "Copiado"
* provide subtle animation
* return to normal state after a short period

If Clipboard API fails:

provide a graceful fallback.

Copy should be one click/tap.

---

# 16. COPY ALL

Provide a "Copiar todo" action where appropriate.

It should copy useful generated results without producing confusing formatting.

Do not copy unnecessary UI labels or metadata.

---

# 17. FAVORITES

Users can favorite styles.

Requirements:

* no account required
* localStorage
* persistent between sessions
* accessible
* clear active/inactive state

Do not store unnecessary personal information.

---

# 18. RECENTLY USED

Maintain a small local history of recently copied/used styles.

Use localStorage.

Keep it lightweight.

Do not store sensitive information.

Do not send the user's generated text to a remote analytics service.

---

# 19. STYLE SEARCH

Add client-side search.

Users should be able to search:

* cursiva
* gótica
* negrita
* aesthetic
* bubble
* gaming
* Instagram
* tiny
* elegant
* símbolos

Filtering should be instant.

No server request should be required.

---

# 20. FILTERING

Allow filtering by category.

The interface should support:

* All
* Popular
* category filters
* Favorites

On mobile, filters may become horizontally scrollable.

---

# 21. SORTING

Support:

* Popular
* A–Z
* Newest
* Favorites

Default:

Popular

---

# 22. PERFORMANCE FOR 300–400 STYLES

Do NOT render an unnecessarily heavy DOM containing hundreds of complex components if avoidable.

Use:

* memoization
* efficient filtering
* simple components
* progressive rendering where useful
* virtualization if required
* minimal dependencies

The number of styles must not make the website feel slow.

---

# 23. MOBILE-FIRST DESIGN

Mobile is a first-class target.

The website must work perfectly on:

* phones
* tablets
* laptops
* desktops
* large screens

Avoid:

* horizontal overflow
* tiny buttons
* difficult copy controls
* oversized animations
* layout jumps

Touch targets must be comfortable.

---

# 24. VISUAL DESIGN

The visual design should feel:

* Premium
* Modern
* Clean
* Original
* Professional
* Fast
* Product-focused
* Trustworthy

Avoid looking like a generic AI template.

Use:

* refined spacing
* modern typography
* rounded cards
* subtle borders
* subtle shadows
* tasteful gradients
* polished hover states
* strong visual hierarchy
* excellent whitespace

Do not overuse gradients.

Do not create visual clutter.

---

# 25. BRAND EXPERIENCE

Brand:

Letras Bonitas

Tone:

Friendly, modern, useful and clear.

Primary language:

Spanish.

Content should be written for Spanish-speaking search users.

Avoid awkward machine-translated Spanish.

---

# 26. HOMEPAGE STRUCTURE

Recommended hierarchy:

HEADER
↓
HERO
↓
MAIN FANCY TEXT GENERATOR
↓
POPULAR STYLES
↓
STYLE CATEGORIES
↓
RELATED TOOLS
↓
EXPLANATION
↓
USE CASES
↓
FAQ
↓
FOOTER

The generator must remain the visual/product centerpiece.

---

# 27. SEO STRATEGY

Primary SEO objective:

Rank organically in Google for relevant Spanish search queries.

The website must follow:

Search Intent
+
Useful Tool
+
Unique Content
+
Topical Architecture
+
Internal Linking
+
Technical SEO
+
Good UX
+
Performance

Do not rely on keyword stuffing.

Do not mass-produce low-value AI pages.

AI may assist content production, but every page must provide useful and relevant value.

---

# 28. SEARCH ENGINE CONTENT PRINCIPLE

The website should not be built as:

"AI article factory"

It should be built as:

"Useful tool website supported by high-quality informational content."

Every page must answer:

1. What does the user want?
2. Can we provide the result immediately?
3. What additional explanation is useful?
4. Which related tool should the user visit next?

---

# 29. ON-PAGE SEO

Every indexable page should have:

* unique title
* unique meta description
* one primary H1
* logical H2/H3 hierarchy
* canonical URL
* semantic HTML
* useful visible content
* relevant internal links
* optimized images if images are used
* appropriate structured data where eligible

Do not duplicate titles and descriptions across pages.

---

# 30. HOMEPAGE SEO

Primary topic:

Letras Bonitas

Semantic supporting concepts may include:

* letras bonitas
* letras para copiar y pegar
* fuentes bonitas
* letras especiales
* letras aesthetic
* letras cursivas
* letras elegantes
* generador de letras
* fuentes para Instagram
* texto bonito

Use naturally.

Do not keyword stuff.

---

# 31. INTERNAL LINKING

The URL architecture supplied in the project SEO file is canonical.

DO NOT invent competing URLs.

DO NOT create duplicate versions of existing pages.

Link:

Homepage
→ Pillar/SILO pages
→ Supporting pages
→ Subcategory pages

Relevant supporting pages should link back to their parent pillar.

Use descriptive anchor text.

Avoid excessive exact-match anchors.

---

# 32. CANONICAL URL ARCHITECTURE

The current approved URL structure is:

## HOME

/

## CURSIVE SILO

/letras-cursivas/

/letras-cursivas/abecedario-cursivo/

/letras-cursivas/letras-cursivas-para-copiar-y-pegar/

/letras-cursivas/letras-cursivas-elegantes/

## LETTER CONVERTER SILO

/conversor-de-letras/

/conversor-de-letras/letras-para-copiar-y-pegar/

/conversor-de-letras/como-cambiar-las-letras/

/conversor-de-letras/texto-con-estilos/

## INSTAGRAM SILO

/letras-para-instagram/

/letras-para-instagram/letras-para-bio/

/letras-para-instagram/letras-para-nombres/

/letras-para-instagram/simbolos-para-instagram/

/letras-para-instagram/letras-cursivas-para-instagram/

## FREE FIRE SILO

/nombres-para-free-fire/

/nombres-para-free-fire/nombres/

/nombres-para-free-fire/nombres-insanos/

/nombres-para-free-fire/apodos/

/nombres-para-free-fire/clanes/

/nombres-para-free-fire/simbolos/

## GAMING SILO

/nombres-para-juegos/

/nombres-para-juegos/nicks/

/nombres-para-juegos/apodos/

/nombres-para-juegos/nombres-para-clanes/

/nombres-para-juegos/nombres-chidos/

## SYMBOLS SILO

/simbolos/

/simbolos/aesthetic/

/simbolos/bonitos/

/simbolos/especiales/

/simbolos/para-copiar-y-pegar/

## EMOJI SILO

/emojis/

/emojis/aesthetic/

/emojis/bonitos/

/emojis/para-copiar-y-pegar/

## INVISIBLE TEXT SILO

/texto-invisible/

/texto-invisible/espacio-en-blanco/

/texto-invisible/caracter-invisible/

/texto-invisible/como-hacer-texto-invisible/

## OTHER SILOS

/letras-goticas/

/letras-graffiti/

/letras-negritas/

/letras-pequenas/

/letras-pequenas/letras-pequenas-arriba/

/letras-aesthetic/

/tipos-de-letras/

/tipos-de-letras/tipos-de-letras-para-titulos/

/tipos-de-letras/estilos-de-letras/

/tipos-de-letras/diferentes-tipos-de-letras/

/tipos-de-letras/modelos-de-letras/

/letras-manuscritas/

/letras-manuscritas/lettering/

/letras-manuscritas/abecedario/

/abecedarios/

/letras-para-redes-sociales/

/letras-para-facebook/

/letras-para-whatsapp/

/letras-para-discord/

/letras-para-twitter/

/numeros-a-letras/

/numeros-a-letras/como-escribir-numeros-en-letras/

/numeros-a-letras/numeros-en-espanol/

/mayusculas-minusculas/

These URLs are part of the approved SEO architecture.

Do not change them without explicit instruction.

---

# 33. PAGE TYPES

Page types include:

* Homepage
* Pillar + Tool
* Pillar + Content
* Supporting
* Subcategory

Tool pages should prioritize functionality.

Content pages should prioritize useful information and examples.

---

# 34. BUILD PRIORITY

Build according to:

P0:

/

P1:

/letras-cursivas/

/conversor-de-letras/

/letras-para-instagram/

/nombres-para-free-fire/

/simbolos/

/texto-invisible/

/tipos-de-letras/

P2:

/letras-goticas/

/letras-graffiti/

/letras-negritas/

/letras-pequenas/

/letras-aesthetic/

/nombres-para-juegos/

P3:

/emojis/

/letras-manuscritas/

/abecedarios/

/letras-para-redes-sociales/

/numeros-a-letras/

/mayusculas-minusculas/

Do not ignore the lower-priority pages forever; priorities define development sequence.

---

# 35. KEYWORD DATA

A source keyword dataset is available for the project.

Source:

letrasbonitas.com.es-organic-keywords-subdo_2026-09-07_21-25-19.csv

Rows:

6,729

Purpose:

Reference dataset for keyword-to-URL mapping.

When keyword data is available, use it to:

* identify search intent
* map keywords to existing URLs
* improve titles
* improve headings
* plan content
* discover supporting topics
* prevent keyword cannibalization

Do not create a new page simply because a keyword exists.

First determine whether an existing URL already satisfies the intent.

---

# 36. KEYWORD CANNIBALIZATION

Avoid multiple pages competing for exactly the same primary intent.

Before creating content:

1. Identify primary keyword.
2. Identify search intent.
3. Find the correct existing URL.
4. Assign the keyword to that URL.
5. Use related keywords as secondary/supporting concepts.

If two keywords have essentially the same intent, prefer one strong page rather than duplicate pages.

---

# 37. BLOG / INFORMATIONAL CONTENT STRATEGY

Blog content should support the tool ecosystem.

Do NOT publish random generic articles.

Good topics include:

* how to use fancy letters
* how to copy and paste stylish text
* Instagram bio styling
* gaming name ideas
* cursive letter usage
* Unicode text explanations
* symbols and their uses
* aesthetic text ideas
* invisible text explanations
* social media typography

Every article should have a reason to exist.

Where relevant:

Article
→ Tool
→ Related SILO
→ Supporting page

---

# 38. AI CONTENT POLICY FOR THIS PROJECT

AI can help generate:

* drafts
* outlines
* FAQs
* metadata
* examples
* content variations
* internal-link suggestions

But AI-generated content must be reviewed for:

* factual accuracy
* natural Spanish
* usefulness
* originality
* redundancy
* search intent

Never mass-generate hundreds of shallow pages simply to increase indexed URLs.

---

# 39. E-E-A-T / TRUST

Where relevant, demonstrate trust through:

* clear explanations
* accurate information
* transparent functionality
* About page
* Contact page
* Privacy Policy
* Terms
* clear site purpose

Do not invent fake authors, experts, credentials, reviews or testimonials.

---

# 40. AD MONETIZATION

The website is intended to be monetized with advertisements.

Ads are NOT the main product.

The tool is the main product.

Ads should be integrated carefully so they do not destroy:

* usability
* page speed
* copy/paste workflow
* mobile experience
* accessibility
* content readability

Do not place ads directly over important controls.

Do not make users accidentally click ads.

Do not create misleading ad-like UI.

---

# 41. AD PLACEMENT PRINCIPLE

Potential locations:

* between major content sections
* non-intrusively within long content
* sidebar on desktop where appropriate
* carefully selected mobile placements

Never compromise the primary tool experience.

The user should be able to:

TYPE
→ GENERATE
→ COPY

without fighting through ads.

---

# 42. ADS AND PERFORMANCE

Ad scripts can affect performance.

Therefore:

* load non-critical ad resources carefully
* avoid blocking the main generator
* reserve layout space when appropriate
* avoid excessive ad density
* monitor Core Web Vitals
* avoid cumulative layout shift

Do not let ads make the generator jump around.

---

# 43. PRIVACY

Because the core tool runs client-side:

Prefer not to transmit user-entered text to a backend.

Do not collect unnecessary personal data.

Analytics should be privacy-conscious.

Only implement tracking that is genuinely useful.

---

# 44. ANALYTICS

Analytics may be added for:

* page views
* tool usage
* copy events
* category interactions
* search usage
* traffic sources
* performance

Do not collect the actual private text users type unless there is an explicit and justified requirement.

---

# 45. ADS VS SEO

Do not create content specifically to create more ad impressions.

SEO content must satisfy user intent first.

A successful page should:

1. attract organic traffic
2. solve the user's problem
3. encourage useful interaction
4. provide related navigation
5. monetize naturally

---

# 46. CORE WEB VITALS

Performance is a major project KPI.

Target:

* fast initial load
* low JavaScript
* low layout shift
* responsive interaction
* optimized assets

Avoid:

* unnecessary dependencies
* huge client bundles
* unoptimized images
* excessive animations
* blocking scripts
* unnecessary API calls

---

# 47. IMAGE STRATEGY

This is primarily a text/tool website.

Do not add unnecessary images just for decoration.

If images are required:

* optimize them
* use modern formats
* provide alt text
* lazy-load non-critical images
* avoid huge hero images

---

# 48. ACCESSIBILITY

Follow strong accessibility practices.

Requirements:

* semantic HTML
* keyboard navigation
* visible focus states
* proper labels
* accessible buttons
* aria-labels where needed
* readable text
* sufficient contrast
* reduced-motion support

Do not communicate important information only through color.

---

# 49. DARK MODE

Dark mode may be supported if it improves UX.

If implemented:

* maintain contrast
* test all cards
* test generated Unicode text
* test inputs
* test buttons
* test ads/content areas

Do not make dark mode mandatory if it adds unnecessary complexity.

---

# 50. HEADER

Header should be:

* lightweight
* responsive
* easy to navigate
* SEO-friendly
* accessible

Brand:

Letras Bonitas

Desktop navigation can expose important SILO pages.

Mobile should use a clean menu.

Do not overload navigation with all 62 URLs.

---

# 51. FOOTER

Footer should provide useful navigation.

Suggested sections:

Tools
Popular Categories
Social Media
Gaming
Symbols
Information
Legal

Include:

* About
* Contact
* Privacy Policy
* Terms

Only link to pages that actually exist.

---

# 52. BREADCRUMBS

Use breadcrumbs on deeper pages where useful.

Example:

Inicio
→ Letras Cursivas
→ Abecedario Cursivo

Ensure breadcrumb hierarchy follows the approved URL structure.

---

# 53. STRUCTURED DATA

Use structured data only where appropriate and supported.

Potential types may include:

* WebSite
* WebApplication where appropriate
* BreadcrumbList
* FAQPage only where eligible and appropriate

Do not add fake structured data.

Do not mark content that is not visible on the page.

---

# 54. METADATA ARCHITECTURE

Create reusable metadata helpers.

Every page should be able to define:

* title
* description
* canonical
* Open Graph
* social metadata

Do not hardcode the same metadata across every page.

---

# 55. SITEMAP

Generate an XML sitemap from the approved route architecture.

Include indexable pages.

Do not include:

* temporary routes
* internal test pages
* duplicate URLs
* unnecessary query parameter URLs

---

# 56. ROBOTS

Create a sensible robots configuration.

Do not accidentally block:

* homepage
* tools
* important content
* CSS/JS required for rendering

Do not index internal test routes.

---

# 57. URL RULES

URLs must:

* be lowercase
* use hyphens
* be stable
* be readable
* match the approved architecture

Avoid:

* unnecessary query parameters
* random IDs
* dates in permanent URLs
* duplicate trailing-slash variants

Respect the project's existing trailing-slash convention.

---

# 58. ERROR PAGES

Create polished:

404
and
error states.

The 404 page should help users navigate back to:

* homepage
* popular tools
* major categories

---

# 59. SECURITY

The application should:

* validate input lengths
* safely handle Unicode
* avoid dangerous HTML injection
* avoid unsafe dangerouslySetInnerHTML unless absolutely necessary
* keep dependencies updated
* avoid unnecessary external APIs

User text should be treated as data.

---

# 60. LONG INPUT HANDLING

Do not allow extremely large text input to freeze the browser.

Set a reasonable client-side maximum.

If the user reaches the limit:

show a friendly message.

The tool should remain responsive.

---

# 61. SEO CONTENT COMPONENTS

Create reusable components for:

* SEO introduction
* how-to sections
* examples
* related tools
* FAQs
* breadcrumbs
* related categories

Do not duplicate giant blocks of text across every page.

---

# 62. TOOL PAGE TEMPLATE

Each major tool page should generally follow:

Hero
↓
Tool
↓
Popular results/examples
↓
How to use
↓
Explanation
↓
Use cases
↓
Related pages
↓
FAQ

Adjust based on search intent.

Do not blindly use the same text on every page.

---

# 63. CONTENT QUALITY

All Spanish content must be:

* natural
* readable
* concise where appropriate
* genuinely helpful
* grammatically correct
* search-intent aligned

Avoid:

* keyword stuffing
* repetitive paragraphs
* fake statistics
* generic filler
* excessive headings
* robotic language

---

# 64. INTERNATIONALIZATION

The primary language is Spanish.

Do not create English pages unless explicitly requested.

The English translations in the SEO dataset are primarily for development/reference purposes.

Visible website content should prioritize Spanish search intent.

---

# 65. DESIGN SYSTEM

Create reusable design tokens for:

* typography
* spacing
* border radius
* shadows
* container widths
* breakpoints
* transitions

Do not create inconsistent styles page by page.

---

# 66. COMPONENT ARCHITECTURE

Recommended structure:

components/
layout/
navigation/
footer/
seo/
ui/
font-generator/
category/
content/
faq/

lib/
unicode/
seo/
utils/

data/
fontStyles.ts
categories.ts
routes.ts
seoContent.ts

app/
page.tsx
letras-cursivas/
conversor-de-letras/
etc.

The exact structure can be improved by the developer if a better architecture is justified.

---

# 67. ROUTE SOURCE OF TRUTH

Create one centralized route definition where practical.

Example concept:

routes.ts

It should contain:

* URL
* page title
* topic
* page type
* parent
* priority

This helps prevent broken internal links and URL inconsistencies.

---

# 68. DO NOT CREATE DUPLICATE ROUTES

Before adding a new route:

1. Check the canonical route list.
2. Check whether the intent already exists.
3. Check keyword mapping.
4. Check whether the page would cannibalize another page.
5. Only then create a new page if explicitly approved.

---

# 69. TESTING

Before considering a feature complete, test:

Generator:

* normal text
* empty text
* long text
* numbers
* punctuation
* emoji
* accented characters
* unsupported characters

UI:

* copy
* copy all
* favorites
* recent styles
* search
* filtering
* sorting
* mobile
* desktop
* keyboard navigation

Technical:

* no console errors
* no broken links
* no hydration errors
* no horizontal overflow
* correct metadata
* sitemap generation
* robots configuration
* responsive layout

---

# 70. SEO QA

For every important page check:

* correct URL
* correct title
* correct H1
* correct canonical
* unique description
* useful visible content
* internal links
* breadcrumb where applicable
* structured data where appropriate
* no accidental noindex
* no duplicate content

---

# 71. PERFORMANCE QA

Check:

* JavaScript bundle size
* initial rendering
* input responsiveness
* style filtering speed
* mobile performance
* layout shifts
* ad impact
* image loading

The generator must remain responsive even with hundreds of styles.

---

# 72. DEVELOPMENT RULE

When asked to modify the project:

DO NOT rewrite unrelated parts.

Prefer small, maintainable changes.

Before modifying architecture:

understand the existing implementation.

Keep the existing SEO architecture intact.

---

# 73. PROMPT GENERATION RULE

When generating future coding prompts for this project:

Always consider:

* this AGENTS.md
* canonical URL structure
* SEO intent
* static architecture
* tool-first UX
* performance
* ad monetization
* internal linking
* Spanish content
* mobile UX

Do not provide generic prompts that ignore this specification.

---

# 74. FUTURE TOOL DEVELOPMENT

When adding a new tool:

First define:

1. Search intent
2. Existing URL
3. Input
4. Output
5. Transformation logic
6. Copy behavior
7. Error handling
8. SEO content
9. Related pages
10. Internal links
11. Performance requirements

Then implement the UI.

---

# 75. HOMEPAGE SUCCESS CRITERIA

The homepage is successful if a new visitor can:

1. Understand the website within seconds.
2. Enter text immediately.
3. See many useful styles instantly.
4. Find a preferred style quickly.
5. Copy it easily.
6. Explore related tools.
7. Use the site comfortably on mobile.
8. Return later and use it again.

---

# 76. BUSINESS SUCCESS CRITERIA

Primary:

Organic search growth.

Secondary:

Tool usage.

Important metrics:

* organic clicks
* impressions
* rankings
* tool interactions
* copy events
* returning visitors
* page engagement
* Core Web Vitals
* ad revenue

Do not optimize ad revenue at the expense of user experience.

---

# 77. PRODUCT POSITIONING

Letras Bonitas should be perceived as:

A fast, free, reliable Spanish fancy-text and Unicode utility platform.

Not:

* a generic blog
* an AI content farm
* a traditional font-download website
* a social network
* a complicated SaaS requiring registration

---

# 78. DESIGN PRIORITY

When there is a conflict, prioritize:

1. Functionality
2. User experience
3. Performance
4. Accessibility
5. SEO
6. Monetization
7. Decorative visuals

Never sacrifice core usability merely to make the interface look flashy.

---

# 79. FINAL DEVELOPMENT PRINCIPLE

Build the project like a serious production website.

Every feature must answer:

"Does this make the site more useful, faster, easier to understand, easier to rank, or easier to maintain?"

If the answer is no:

Do not add it.

The goal is a premium, fast, SEO-first, static Spanish utility website with genuinely useful tools, strong topical architecture, clean internal linking, excellent mobile UX and sustainable ad monetization.

END OF AGENTS.md

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
