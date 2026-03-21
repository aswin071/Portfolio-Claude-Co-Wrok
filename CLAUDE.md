# Madhavan Consulting — Personal Branding Website

## Project Overview
Single-page scrollable website for Madhavan Consulting — a CPG brand consulting business operating across the Middle East and India. The site serves as a personal brand hub for client acquisition via newsletter signups, call bookings, and contact form submissions.

## Tech Stack
- **React** (Vite)
- **Tailwind CSS**
- No backend / No database

## Brand Guidelines (from Brand.pdf)
Refer to `Brand.pdf` in the project root for the full visual identity manual (prepared by Vandana Shankar).

### Color Palette — Primary
| Name | Hex | RGB | Usage |
|---|---|---|---|
| Deep Blue | `#1E3A8A` | 30, 58, 138 | Primary brand color, headers, dark sections |
| Bold Orange | `#F97316` | 249, 115, 22 | CTAs, highlights, buttons |
| Sunkissed Orange | `#F28B30` | — | Warm accent variant |
| Blue Surf | `#3B5B8A` | — | Secondary blue variant |

### Color Palette — Supporting
| Name | Hex | RGB | Usage |
|---|---|---|---|
| Accent Yellow | `#FBBF24` | 251, 191, 36 | Highlights |
| Success Green | `#10B981` | 16, 185, 129 | Growth indicators |
| Alert Red | `#EF4444` | 239, 68, 68 | Urgency |

### Color Usage Ratios
- **Deep Blue**: 40% — dominant color across the site
- **Bold Orange**: 30% — CTAs, accents, interactive elements
- **Accents** (supporting colors): 10%
- **Neutrals** (black & white): 20%

### Typography
| Font | Usage |
|---|---|
| **Lucidity** | Primary heading font |
| **SF Pro Display** | Bold headers and body/paragraph text |
| **Anton** | Alternate heading font |

### Logo Identity
- **Style**: Handwritten signature wordmark "Madhavan" with an orange dot accent
- **Logo variant 01** (light bg): Black text + orange dot — use for navbar, light sections
- **Logo variant 02** (dark bg): White text + orange dot — use for footer, dark sections
- **Logo rules**: Do NOT change dot color, flip, shrink, box, add drop shadow, or distort the logo

### Brand Voice
- **Expert**: Deep CPG knowledge, data-backed, case studies — no generic advice
- **Direct**: Self-aware, opinionated, minimal corporate jargon, real
- **Conversational**: Write like talking to a colleague, entertaining, asks questions, shows personality
- **Regional**: Middle East/Asia brands and founders, local retailers, cultural nuances, regional consumer behavior

### Spacing & Layout
- Margins: 60–80px
- Follow 8px grid system
- Readable on mobile (text large enough, contrast checked)

## Project Directory Structure
```
/home/wac/Personal_branding_project/
├── CLAUDE.md                        # This file
├── claude.md                        # (empty)
├── Project_Plan.md                  # Full website brief with all copy
├── integrations.md                  # Integration URLs and details
├── logo/
│   └── Madhavan Logo/
│       ├── Name logo1-01.jpg        # Light bg variant (black text + orange dot)
│       ├── Name logo1-01.png        # Light bg variant (PNG, transparent)
│       ├── Name logo1-02.jpg        # Dark bg variant (white text + orange dot)
│       ├── Name logo1-02.png        # Dark bg variant (PNG, transparent)
│       └── Name logo1.pdf           # Vector source
└── testimonial_logo/
    └── Brands madhavan has worked on/
        ├── Bateel international.jpeg # Bateel Dates — gold on brown bg
        ├── Dorset Cereals logo.png   # Dorset Cereals — leaf icon, light bg
        ├── Jomara logo.png           # Jomara Premium Organic Dates — white bg
        ├── Lamb weston.jpeg          # Lamb Weston — white text on navy bg
        ├── Pure harvest logo.jpeg    # Pure Harvest Smart Farms — green on white bg
        └── Twinings UK .png          # Twinings — gold/black banner
```

## Page Sections (Single Page, Top to Bottom)

### 1. Navbar
- Sticky top navigation
- Logo: Use `Name logo1-01.png` (light variant)
- Nav links (smooth-scroll anchors): Home | Book a Call | About Me | Join the Newsletter

### 2. Hero Section
- **Headline**: "Helping CPG Brands Launch & Scale."
- **Subtext**: "I work with founders and operators building consumer brands in the Middle East & India."
- **2 CTA buttons**: Join Newsletter (links to ConvertKit) | Book a Call (scrolls to booking section)
- **2 anchor buttons** below hero: "Who This Is For" | "What I Do" (smooth-scroll to respective subsections)

### 3. Who This Is For
- 3 qualifying bullet points for target audience (CPG founders at various revenue stages)

### 4. What I Do
- 4 service offerings: Blueprint building, category/pricing gaps, gross margins, scaling fundamentals

### 5. Brands That Trust My Expertise (Logo Wall)
- **Headline**: "Brands That Trust My Expertise"
- **Subheading**: "A selection of leading CPG partners across the Middle East & India"
- **6 brand logos** in a responsive grid/row:
  - Twinings UK
  - Dorset Cereals
  - Lamb Weston
  - Bateel International
  - Pure Harvest Smart Farms
  - Jomara Premium Organic Dates
- Logos need uniform sizing/treatment (grayscale or consistent padding)

### 6. Testimonials
- **Headline**: "What founders are saying"
- **10 testimonial cards** (carousel or responsive grid)
- Each card: 5-star rating, quote text, name + city
- Testimonials provided (placeholder/demo — client will replace later):
  1. Ahmed K. — Dubai
  2. Rohan Mehta — Mumbai
  3. Sara Al Mazrouei — Abu Dhabi
  4. Dana Al-Rashid — Riyadh
  5. Neha Gupta — Bangalore
  6. Omar S. — Dubai
  7. Hugo Chevalier — Abu Dhabi
  8. Rahul — Kochi
  9. Saud Al-Otaibi — Riyadh
  10. Anand Mishra — Bangalore

### 7. About Me
- **Headline**: "About Me"
- Full bio paragraph (provided in Project_Plan.md)
- Mentions brands worked with: Twinings Tea, Dorset Cereals, Lamb Weston, Bateel Dates, Pure Harvest Smart Farms

### 8. Book a Call
- **Headline**: "Book a 1:1 Call"
- **Intro text**: "If you're a founder or operator building a CPG brand and want a focused conversation on your biggest challenge, book a call. Come with a specific problem. Leave with a clear direction."
- **Embedded Calendly iframe**: `https://calendly.com/madhavanunni/new-meeting`

### 9. Newsletter — "The CPG Insider"
- **Headline**: "The CPG Insider"
- **Subtext**: Provided in Project_Plan.md (real insights, no fluff pitch)
- **Embedded ConvertKit form**: Name + Email + Subscribe button
- **Embed source**: `https://madhavan-unni.kit.com/6d2dca988c`

### 10. Contact Form — "Let's Connect"
- **Headline**: "Let's Connect"
- **Subtext**: "Have a question or want to explore working together?"
- **Fields**: Name | Email | Message | Send Button
- **Below form**: "Or email me directly at admin@madhavan.com"
- **Submission**: Route via Formspree (or similar) to `admin@madhavan.com`

### 11. Footer
- Logo (dark variant: `Name logo1-02.png`)
- Nav links repeated
- Email: admin@madhavan.com
- Copyright line

## Third-Party Integrations
| Integration | Service | URL / Details |
|---|---|---|
| Newsletter | ConvertKit | `https://madhavan-unni.kit.com/6d2dca988c` |
| Booking | Calendly | `https://calendly.com/madhavanunni/new-meeting` |
| Contact Form | Formspree (or similar) | Routes to `admin@madhavan.com` |

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build

## Code Conventions
- Functional components only (React)
- One component per file inside `src/components/`
- Section components named: `Navbar.jsx`, `Hero.jsx`, `WhoThisIsFor.jsx`, `WhatIDo.jsx`, `BrandWall.jsx`, `Testimonials.jsx`, `About.jsx`, `BookCall.jsx`, `Newsletter.jsx`, `Contact.jsx`, `Footer.jsx`
- Tailwind utility classes inline — no separate CSS files
- Smooth scroll behavior via `scroll-behavior: smooth` on `<html>`
- All copy/content hardcoded (no CMS)
- Responsive: mobile-first approach
- All assets referenced from `public/assets/` directory (copy from project root during setup)
