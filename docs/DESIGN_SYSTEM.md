# MYSIRA - DESIGN SYSTEM & BRAND GUIDELINES

> Reference document to maintain visual consistency and user experience across the entire platform.

---

## 🎨 1. VISUAL IDENTITY

### 1.1 Logo & Brand

**Brand Name**: Mysira (مسيرة – "journey" in Arabic)

**Official Tagline**: "Your path, intelligently."

**Positioning**: Premium yet accessible platform, authentic, local, and technology-driven.

**Communication Tones**:
- Warm and welcoming
- Authentic and transparent
- Expert but not elitist
- Modern while respecting traditions

---

## 🎨 2. COLOR PALETTE

### 2.1 Primary Colors – Amber (Sahara Sand)

css
--primary-50:  #FFFBEB   /* Very light backgrounds */
--primary-100: #FEF3C7   /* Hover states */
--primary-200: #FDE68A   /* Disabled states */
--primary-300: #FCD34D   /* Borders */
--primary-400: #FBBF24   /* Hover primary */
--primary-500: #F59E0B   /* Alerts, warnings */
--primary-600: #D97706   /* PRIMARY – Buttons, CTAs */
--primary-700: #B45309   /* Active states */
--primary-800: #92400E   /* Text on light backgrounds */
--primary-900: #78350F   /* Text emphasis */
Usage:

Main CTAs

Important links

"Featured" badges

Action icons

Progress bars

### 2.2 Secondary Colors – Teal (Oasis freshness)
css
--secondary-50:  #F0FDFA   /* Success backgrounds */
--secondary-100: #CCFBF1   /* Success light */
--secondary-200: #99F6E4   /* Success borders */
--secondary-300: #5EEAD4   /* Success icons */
--secondary-400: #2DD4BF   /* Hover secondary */
--secondary-500: #14B8A6   /* Success messages */
--secondary-600: #0D9488   /* SECONDARY – Accents */
--secondary-700: #0F766E   /* Active states */
--secondary-800: #115E59   /* Text on light backgrounds */
--secondary-900: #134E4A   /* Text emphasis */
Usage:

Secondary buttons

Success states

"Verified" badges

Positive highlights

Secondary icons

### 2.3 Neutral Colors – Grays (Backgrounds, text)
css
--gray-50:  #F9FAFB   /* Page background */
--gray-100: #F3F4F6   /* Card backgrounds */
--gray-200: #E5E7EB   /* Light borders */
--gray-300: #D1D5DB   /* Default borders */
--gray-400: #9CA3AF   /* Disabled text */
--gray-500: #6B7280   /* Placeholder text */
--gray-600: #4B5563   /* Secondary text */
--gray-700: #374151   /* Body text */
--gray-800: #1F2937   /* Headings */
--gray-900: #111827   /* Emphasis text */

### 2.4 Semantic Colors
Success
css
--success-light: #D1FAE5
--success-DEFAULT: #10B981
--success-dark: #065F46
Warning
css
--warning-light: #FEF3C7
--warning-DEFAULT: #F59E0B
--warning-dark: #92400E
Error
css
--error-light: #FEE2E2
--error-DEFAULT: #EF4444
--error-dark: #991B1B
Info
css
--info-light: #DBEAFE
--info-DEFAULT: #3B82F6
--info-dark: #1E40AF

### 2.5 Gradients
Sunset Gradient (Hero sections)
css
background: linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%);
Desert Sky (Backgrounds)
css
background: linear-gradient(180deg, #FFFBEB 0%, #FEF3C7 100%);
Oasis Gradient (Accents)
css
background: linear-gradient(135deg, #14B8A6 0%, #0D9488 100%);

## 📝 3. TYPOGRAPHY

### 3.1 Fonts
Primary Font : Geist Sans
css
font-family: 'Geist Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
Usage:

Headings (H1-H6)

Body text

Buttons

UI elements

Characteristics:

Modern and readable

Excellent on all screens

Supports Arabic, French, English

Secondary Font : Geist Mono
css
font-family: 'Geist Mono', 'Courier New', monospace;
Usage:

Code snippets

Technical references

Timestamps

Confirmation numbers

### 3.2 Typographic Scale
Desktop
css
--text-xs:   0.75rem   /* 12px – Captions, labels */
--text-sm:   0.875rem  /* 14px – Small text */
--text-base: 1rem      /* 16px – Body text */
--text-lg:   1.125rem  /* 18px – Large body */
--text-xl:   1.25rem   /* 20px – Section titles */
--text-2xl:  1.5rem    /* 24px – Page titles */
--text-3xl:  1.875rem  /* 30px – Hero subtitle */
--text-4xl:  2.25rem   /* 36px – Hero title */
--text-5xl:  3rem      /* 48px – Landing hero */
--text-6xl:  3.75rem   /* 60px – XL hero */
Mobile (Responsive)
css
/* H1 Hero */
@media (max-width: 640px) {
  font-size: 2.25rem; /* 36px instead of 48px */
}
/* Body text stays at minimum 16px for readability */

### 3.3 Font Weights
css
--font-light:     300   /* Rarely used */
--font-normal:    400   /* Body text */
--font-medium:    500   /* Emphasis, buttons */
--font-semibold:  600   /* Subtitles, labels */
--font-bold:      700   /* Headings */
--font-extrabold: 800   /* Hero titles */

### 3.4 Line Heights
css
--leading-none:   1      /* Very tight headings */
--leading-tight:  1.25   /* Headings */
--leading-snug:   1.375  /* Subtitles */
--leading-normal: 1.5    /* Body text */
--leading-relaxed: 1.625 /* Long paragraphs */
--leading-loose:  2      /* Rarely used */

### 3.5 Typographic Hierarchy
H1 – Hero Title
css
font-size: 3rem (48px);
font-weight: 800;
line-height: 1.1;
letter-spacing: -0.02em;
color: var(--gray-900);
H2 – Section Title
css
font-size: 2.25rem (36px);
font-weight: 700;
line-height: 1.2;
color: var(--gray-900);
H3 – Subsection
css
font-size: 1.875rem (30px);
font-weight: 600;
line-height: 1.3;
color: var(--gray-800);
H4 – Card Title
css
font-size: 1.25rem (20px);
font-weight: 600;
line-height: 1.4;
color: var(--gray-800);
Body – Paragraph
css
font-size: 1rem (16px);
font-weight: 400;
line-height: 1.6;
color: var(--gray-700);
Small – Caption
css
font-size: 0.875rem (14px);
font-weight: 400;
line-height: 1.5;
color: var(--gray-600);

## 📐 4. SPACING & LAYOUT

### 4.1 Spacing Scale
css
--spacing-0:  0       /* 0px */
--spacing-1:  0.25rem /* 4px */
--spacing-2:  0.5rem  /* 8px */
--spacing-3:  0.75rem /* 12px */
--spacing-4:  1rem    /* 16px */
--spacing-5:  1.25rem /* 20px */
--spacing-6:  1.5rem  /* 24px */
--spacing-8:  2rem    /* 32px */
--spacing-10: 2.5rem  /* 40px */
--spacing-12: 3rem    /* 48px */
--spacing-16: 4rem    /* 64px */
--spacing-20: 5rem    /* 80px */
--spacing-24: 6rem    /* 96px */

### 4.2 Grid & Containers
Max Widths
css
--container-sm:  640px   /* Mobile landscape */
--container-md:  768px   /* Tablet */
--container-lg:  1024px  /* Desktop */
--container-xl:  1280px  /* Large desktop */
--container-2xl: 1536px  /* XL screens */
Content Max Width (Readability)
css
--prose-width: 65ch; /* ~800px, optimal for reading */

### 4.3 Column Grid
css
/* 12-column grid */
grid-template-columns: repeat(12, minmax(0, 1fr));
gap: 1.5rem; /* 24px */

/* Responsive */
@media (max-width: 768px) {
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1rem; /* 16px */
}

@media (max-width: 640px) {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem; /* 12px */
}


## 🎯 5. UI COMPONENTS

### 5.1 Buttons
Primary Button
css
background: var(--primary-600);
color: white;
padding: 0.75rem 1.5rem; /* 12px 24px */
border-radius: 0.5rem; /* 8px */
font-weight: 600;
font-size: 1rem;
transition: all 0.2s;

/* Hover */
&:hover {
  background: var(--primary-700);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(217, 119, 6, 0.3);
}

/* Active */
&:active {
  transform: translateY(0);
}

/* Disabled */
&:disabled {
  background: var(--gray-300);
  cursor: not-allowed;
}
Secondary Button
css
background: transparent;
color: var(--primary-600);
border: 2px solid var(--primary-600);
padding: 0.75rem 1.5rem;
border-radius: 0.5rem;
font-weight: 600;

&:hover {
  background: var(--primary-50);
  border-color: var(--primary-700);
}
Ghost Button
css
background: transparent;
color: var(--gray-700);
padding: 0.75rem 1.5rem;
border-radius: 0.5rem;
font-weight: 500;

&:hover {
  background: var(--gray-100);
}

### 5.2 Cards
Base Card
css
background: white;
border: 1px solid var(--gray-200);
border-radius: 1rem; /* 16px */
padding: 1.5rem; /* 24px */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
transition: all 0.3s;

/* Hover */
&:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}
Listing Card (Accommodation / Experiences)
css
background: white;
border-radius: 1.25rem; /* 20px */
overflow: hidden;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

/* Image container */
.card-image {
  aspect-ratio: 4/3;
  position: relative;
  overflow: hidden;
}

/* Content */
.card-content {
  padding: 1.25rem; /* 20px */
}

## 5.3 Inputs
Text Input
css
background: white;
border: 2px solid var(--gray-300);
border-radius: 0.5rem; /* 8px */
padding: 0.75rem 1rem; /* 12px 16px */
font-size: 1rem;
color: var(--gray-900);
transition: all 0.2s;

/* Focus */
&:focus {
  outline: none;
  border-color: var(--primary-600);
  box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.1);
}

/* Error */
&.error {
  border-color: var(--error-DEFAULT);
}

/* Disabled */
&:disabled {
  background: var(--gray-100);
  cursor: not-allowed;
}
Select
css
/* Same as input, plus dropdown arrow */
background-image: url("data:image/svg+xml,...");
background-position: right 0.75rem center;
background-repeat: no-repeat;
padding-right: 2.5rem;

## 5.4 Badges
Featured Badge
css
background: linear-gradient(135deg, #F59E0B, #D97706);
color: white;
padding: 0.25rem 0.75rem;
border-radius: 9999px;
font-size: 0.75rem;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.05em;
Verified Badge
css
background: var(--secondary-600);
color: white;
padding: 0.25rem 0.75rem;
border-radius: 9999px;
font-size: 0.75rem;
font-weight: 600;
display: inline-flex;
align-items: center;
gap: 0.25rem;

svg { width: 14px; height: 14px; }
Status Badge
css
/* Pending */
background: var(--warning-light);
color: var(--warning-dark);

/* Active / Confirmed */
background: var(--success-light);
color: var(--success-dark);

/* Cancelled */
background: var(--gray-200);
color: var(--gray-700);

## 5.5 Navigation
Navbar
css
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(10px);
border-bottom: 1px solid var(--gray-200);
height: 72px;
position: sticky;
top: 0;
z-index: 50;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
Nav Link
css
color: var(--gray-700);
font-weight: 500;
font-size: 1rem;
padding: 0.5rem 1rem;
border-radius: 0.5rem;
transition: all 0.2s;

&:hover {
  color: var(--primary-600);
  background: var(--primary-50);
}

&.active {
  color: var(--primary-600);
  font-weight: 600;
}

## 🖼️ 6. IMAGES & MEDIA

## 6.1 Formats
Listing photos:

Format: WebP (JPEG fallback)

Aspect ratio: 4:3 (listings), 16:9 (hero)

Max width: 1920px

Quality: 85%

Avatars:

Format: WebP

Size: 256x256px

Aspect ratio: 1:1 (square)

Icons:

Format: SVG (vector)

Library: Lucide React

Sizes: 20px, 24px, 32px

## 6.2 Optimizations
tsx
// Next.js Image component
<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  quality={85}
  loading="lazy"
  placeholder="blur"
/>

## 6.3 Aspect Ratios
css
--aspect-square:    1/1    /* Avatars, icons */
--aspect-video:     16/9   /* Hero images */
--aspect-landscape: 4/3    /* Listing cards */
--aspect-portrait:  3/4    /* Vertical images */


## 🎭 7. ANIMATIONS & TRANSITIONS

### 7.1 Durations
css
--duration-fast:   150ms   /* Hover effects */
--duration-base:   200ms   /* Button clicks */
--duration-slow:   300ms   /* Page transitions */
--duration-slower: 500ms   /* Modal open/close */

### 7.2 Easing Functions
css
--ease-in:     cubic-bezier(0.4, 0, 1, 1);
--ease-out:    cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

### 7.3 Common Animations
Fade In
css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
animation: fadeIn 0.3s ease-out;
Slide In
css
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to   { transform: translateX(0); }
}
Scale In
css
@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}


## 📱 8. RESPONSIVE DESIGN

### 8.1 Breakpoints
css
/* Mobile first approach */
--screen-sm:  640px   /* Small devices (landscape phones) */
--screen-md:  768px   /* Medium devices (tablets) */
--screen-lg:  1024px  /* Large devices (desktops) */
--screen-xl:  1280px  /* Extra large devices */
--screen-2xl: 1536px  /* XXL screens */

### 8.2 Mobile-First Strategy
css
/* Base styles = mobile */
.element {
  font-size: 1rem;
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .element {
    font-size: 1.125rem;
    padding: 1.5rem;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .element {
    font-size: 1.25rem;
    padding: 2rem;
  }
}

### 8.3 Touch Targets
css
/* Minimum touch target size (Apple/Google guidelines) */
min-height: 44px;
min-width: 44px;

/* Optimal */
min-height: 48px;
min-width: 48px;


## ♿ 9. ACCESSIBILITY

### 9.1 Color Contrast
Minimum WCAG AA :

Normal text: 4.5:1

Large text (18px+): 3:1

UI components: 3:1

Our guarantees :

Primary on white: 4.54:1 ✅

Gray-700 on white: 8.59:1 ✅

Gray-600 on white: 5.74:1 ✅

### 9.2 Focus States
css
/* All interactive elements */
&:focus-visible {
  outline: 3px solid var(--primary-600);
  outline-offset: 2px;
}

### 9.3 Screen Readers
tsx
// Visually hidden but accessible text
<span className="sr-only">Search for camps in the Sahara</span>

// ARIA labels
<button aria-label="Close menu">
  <X className="h-6 w-6" />
</button>


## 🌐 10. INTERNATIONALIZATION (SEO Optimized)

### 10.1 Supported Languages
Language	Role	URL Structure
English	Primary (default)	mysira.co/ (no subfolder)
French	Secondary	mysira.co/fr/
Arabic	Local (RTL)	mysira.co/ar/
Why English as primary?

Maximizes international reach and backlink value.

Default language for global travel SEO.

French covers the Tunisian and Francophone market; Arabic serves local users.

### 10.2 Text Direction
tsx
// Automatic based on language
<html dir={locale === 'ar' ? 'rtl' : 'ltr'}>


## 📊 11. DESIGN TOKENS (CSS Variables)
Add these to globals.css (already created, but documented):

css
:root {
  /* Colors – see section 2 */
  
  /* Spacing – see section 4 */
  
  /* Typography – see section 3 */
  
  /* Shadows */
  --shadow-sm:  0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md:  0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg:  0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl:  0 20px 25px rgba(0, 0, 0, 0.15);
  
  /* Border Radius */
  --radius-sm:  0.375rem; /* 6px */
  --radius-md:  0.5rem;   /* 8px */
  --radius-lg:  1rem;     /* 16px */
  --radius-xl:  1.5rem;   /* 24px */
  --radius-full: 9999px;
  
  /* Z-index (using shadcn/ui scale) */
  --z-dropdown:  1000;
  --z-sticky:    1020;
  --z-fixed:     1030;
  --z-modal-backdrop: 1040;
  --z-modal:     1050;
  --z-popover:   1060;
  --z-tooltip:   1070;
}


## 🎯 12. DESIGN PRINCIPLES

### 12.1 Visual Hierarchy
Most important → most visible
Use size, color, contrast

Group related elements
Proximity = relation; whitespace = separation

Guide the eye
Top‑to‑bottom, left‑to‑right (or reverse for Arabic), clear focal points

### 12.2 Consistency
Same component → same appearance

Same action → same result

Respect conventions (e.g., logo links to home)

### 12.3 User Feedback
Always indicate:

✅ Loading states (spinners, skeletons)

✅ Success states (confirmations, toasts)

✅ Error states (clear messages, corrective actions)

✅ Hover states (cursor change, visual feedback)


## 📦 13. COMPONENTS TO BUILD
Priority 1 (Sprint 1)
Header / Navbar

Footer

Button (all variants)

Listing Card

Input / Select

Badge

Priority 2 (Sprint 2)
Modal / Dialog

Toast Notifications

Dropdown Menu

Tabs

Breadcrumbs

Priority 3 (Sprint 3+)
Pagination

Filters Panel

Date Picker

Image Gallery

Star Rating

## 🔗 14. RESOURCES
Design Inspiration
Airbnb (cards, layout)

Booking.com (filters, search)

Culture Trip (storytelling)

Tailwind UI (components)

Tools
Figma (design mockups)

Coolors (palette generator)

WAVE (accessibility checker)

Lighthouse (performance)

Document maintained by : Mysira Team
Last updated : 2026
Version : 1.1 (English, complete)