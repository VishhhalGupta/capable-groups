# Capable Groups Website - Implementation Flow & Technical Roadmap

## TABLE OF CONTENTS
1. Project Overview
2. Technical Architecture
3. Development Workflow
4. Component Architecture
5. Data Flow Diagrams
6. Feature Implementation Timeline
7. Technical Decisions & Rationale
8. Environment Setup Guide

---

## 1. PROJECT OVERVIEW

### 1.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT BROWSER                           │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                    Next.js Frontend (SSR)                   │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌───────────────────┐ │ │
│  │  │  Components  │  │   Hooks      │  │  Aceternity UI    │ │ │
│  │  │  (React)     │  │  (useTheme)  │  │  Components       │ │ │
│  │  └──────────────┘  └──────────────┘  └───────────────────┘ │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌───────────────────┐ │ │
│  │  │   Pages      │  │   Layouts    │  │  Theme System     │ │ │
│  │  │  (App Route) │  │  (Dark/Light)│  │  (Next Themes)    │ │ │
│  │  └──────────────┘  └──────────────┘  └───────────────────┘ │ │
│  └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                                ↓
                ┌──────────────────────────────────┐
                │    Next.js Server (App Router)    │
                │                                  │
                │  ┌────────────────────────────┐  │
                │  │  API Routes                │  │
                │  │  - /api/contact            │  │
                │  │  - /api/subscribe          │  │
                │  └────────────────────────────┘  │
                │                                  │
                │  ┌────────────────────────────┐  │
                │  │  Server Components         │  │
                │  │  - Metadata                │  │
                │  │  - SEO Optimization        │  │
                │  └────────────────────────────┘  │
                └──────────────────────────────────┘
                                ↓
        ┌───────────────────────────────────────────────┐
        │      External Services & APIs                 │
        │                                               │
        │  ┌──────────────┐  ┌──────────────────────┐  │
        │  │   SendGrid   │  │   Calendly API       │  │
        │  │  (Email)     │  │   (Booking)          │  │
        │  └──────────────┘  └──────────────────────┘  │
        │                                               │
        │  ┌──────────────┐  ┌──────────────────────┐  │
        │  │  Google APIs │  │   Analytics (GA4)    │  │
        │  │  (Maps)      │  │   (User Tracking)    │  │
        │  └──────────────┘  └──────────────────────┘  │
        └───────────────────────────────────────────────┘
```

### 1.2 Deployment Architecture

```
┌────────────────────────────────────────────────────────────┐
│                       VERCEL DEPLOYMENT                     │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────────────┐│
│  │   Edge Nodes │  │  Serverless  │  │  CDN & Cache      ││
│  │  (Global)    │  │  Functions   │  │  (Next.js Image)  ││
│  └──────────────┘  └──────────────┘  └───────────────────┘│
│                                                             │
│  Connected to:                                              │
│  - GitHub (Auto-deploy on push)                             │
│  - Environment Variables                                    │
│  - Analytics Dashboard                                      │
└────────────────────────────────────────────────────────────┘
```

---

## 2. TECHNICAL ARCHITECTURE

### 2.1 Frontend Architecture

#### 2.1.1 Component Hierarchy

```
App (Root Layout)
├── Providers
│   ├── ThemeProvider (next-themes)
│   ├── ToastProvider (react-hot-toast)
│   └── AnalyticsProvider
│
├── Navbar (Floating)
│   ├── Logo
│   ├── NavLinks
│   ├── ServiceDropdown
│   ├── CTAButton
│   └── ThemeToggle
│
├── Main Content
│   ├── Page Routes (via App Router)
│   │   ├── /                    → HomePage
│   │   ├── /about              → AboutPage
│   │   ├── /mission-vision      → MissionVisionPage
│   │   ├── /services            → ServicesPage
│   │   ├── /services/[slug]    → ServiceDetailPage
│   │   └── /contact             → ContactPage
│   │
│   └── Shared Sections
│       ├── HeroSection
│       ├── ServicesGrid
│       ├── TestimonialSection
│       ├── CTASection
│       ├── FAQSection
│       └── LocationSection
│
└── Footer
    ├── CompanyInfo
    ├── QuickLinks
    ├── ServiceLinks
    ├── ContactInfo
    ├── SocialLinks
    └── CopyRight & Policies
```

#### 2.1.2 Component Patterns

**Page Component Pattern:**
```typescript
// app/services/page.tsx
import { Metadata } from 'next';
import ServicesPageContent from '@/components/pages/ServicesPageContent';

export const metadata: Metadata = {
  title: 'Services | Capable Groups',
  description: '...',
  // SEO metadata
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
```

**Client Component Pattern:**
```typescript
// components/ServiceCard.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function ServiceCard({ service }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="..."
    >
      {/* Card content */}
    </motion.div>
  );
}
```

### 2.2 Styling & Theme System

#### 2.2.1 Theme Structure

```
styles/
├── globals.css           # Global resets, base styles
├── variables.css         # CSS variables (colors, spacing)
├── animations.css        # Animation keyframes
└── component-styles/
    ├── navbar.css
    ├── buttons.css
    └── cards.css

Tailwind Configuration:
- Extends with custom colors from CSS variables
- Custom animation definitions
- Custom spacing scale
- Typography scale
```

#### 2.2.2 CSS Variable System

```css
/* Light Theme */
:root {
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f8fafc;
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #64748b;
  --color-accent: #3b82f6;
  --color-accent-hover: #1e40af;
  --color-border: #e2e8f0;
  
  --spacing-unit: 4px;
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
}

/* Dark Theme */
[data-theme='dark'] {
  --color-bg-primary: #0f172a;
  --color-bg-secondary: #1e293b;
  --color-text-primary: #f1f5f9;
  --color-text-secondary: #94a3b8;
  --color-accent: #60a5fa;
  --color-accent-hover: #93c5fd;
  --color-border: #334155;
}
```

### 2.3 State Management

**Global State (using React Context):**

```typescript
// lib/theme-context.ts
interface ThemeContextType {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
}

// Implemented via next-themes library
// No Redux/Zustand needed for initial phase
```

**Local State (using useState):**
- Form input values
- Modal/drawer open states
- Accordion expanded states
- Hover states
- Animation states

### 2.4 API Routes Architecture

#### 2.4.1 Contact Form API

```
POST /api/contact

Request Body:
{
  fullName: string
  email: string (validated)
  phone?: string
  company?: string
  serviceInterest: string
  message: string
  consent: boolean
}

Response:
{
  success: boolean
  message: string
  submissionId?: string
  error?: string
}

Flow:
1. Validate request body (zod)
2. Sanitize inputs
3. Check honeypot field
4. Send confirmation email (SendGrid)
5. Store in database (optional)
6. Send notification to admin
7. Return success response
```

#### 2.4.2 Newsletter Subscription API (Optional)

```
POST /api/subscribe

Request Body:
{
  email: string
  name?: string
}

Response:
{
  success: boolean
  message: string
}
```

### 2.5 Data Flow Diagrams

#### 2.5.1 Contact Form Submission Flow

```
User Form Input
       ↓
Client-Side Validation (React Hook Form + Zod)
       ↓
User Clicks Submit
       ↓
Loading State Enabled
       ↓
POST /api/contact
       ↓
Server-Side Validation
       ↓
SendGrid Email Service
       ↓
Response to Client
       ↓
Toast Notification (Success/Error)
       ↓
Redirect to Thank You (optional)
```

#### 2.5.2 Page Load & Theme Detection Flow

```
User Opens Website
       ↓
Check localStorage for theme preference
       ↓
If exists → Use saved theme
If not exists → Detect system preference
       ↓
Load CSS variables for theme
       ↓
Render page with theme
       ↓
User toggles theme
       ↓
Update localStorage
       ↓
Trigger CSS variable update
       ↓
Smooth transition to new theme
```

#### 2.5.3 SEO Metadata Flow

```
Build Time:
Next.js App
       ↓
generateMetadata() function
       ↓
Fetch page-specific data
       ↓
Generate SEO metadata
       ↓
Schema.org structured data
       ↓
Render with <Head> tags

Result:
- Dynamic <title>
- <meta> tags
- Open Graph tags
- Twitter Card tags
- <script type="application/ld+json">
```

---

## 3. DEVELOPMENT WORKFLOW

### 3.1 Git Workflow

```
main (Production)
  ↑
  └─← staging (Staging)
       ↑
       └─← develop (Development)
            ↑
            └─← feature/* (Feature Branches)
                feature/hero-section
                feature/services-page
                feature/contact-form
                feature/seo-optimization
```

### 3.2 Development Process

```
1. Create Feature Branch
   git checkout -b feature/feature-name

2. Implement Feature
   - Component development
   - Styling with Tailwind
   - Animations with Framer Motion
   - Type safety with TypeScript

3. Local Testing
   - Visual testing
   - Responsiveness
   - Theme switching
   - Form validation
   - Browser compatibility

4. Code Quality Checks
   - ESLint
   - Prettier
   - TypeScript strict mode

5. Commit with Conventional Commits
   feat: add hero section component
   fix: correct theme toggle bug
   docs: update README

6. Create Pull Request
   - Description of changes
   - Screenshots for UI changes
   - Testing checklist

7. Code Review & Approval

8. Merge to develop

9. Deploy to staging (Vercel)

10. QA Testing

11. Merge to main

12. Deploy to production (auto via Vercel)
```

### 3.3 Local Development Setup

```bash
# Clone repository
git clone <repo-url>
cd capable-groups-website

# Install dependencies
npm install

# Create .env.local
cp .env.example .env.local
# Fill in environment variables:
# NEXT_PUBLIC_SITE_URL=http://localhost:3000
# NEXT_PUBLIC_GA_ID=G_XXXXXXXXXX
# SENDGRID_API_KEY=SG_XXXXXXXXXX
# CALENDLY_API_KEY=xxxxxxxxxxxxx

# Run development server
npm run dev

# Open http://localhost:3000
```

---

## 4. COMPONENT ARCHITECTURE

### 4.1 Reusable Component List

#### 4.1.1 Layout Components
```
components/
├── Navbar.tsx              # Floating navigation
├── Footer.tsx              # Footer with links
├── Container.tsx           # Responsive container
├── Section.tsx             # Section wrapper with spacing
└── Grid.tsx                # Responsive grid layout
```

#### 4.1.2 Common Components
```
components/common/
├── Button.tsx              # Button component (variants)
├── Input.tsx               # Form input
├── Select.tsx              # Form select
├── Textarea.tsx            # Form textarea
├── Checkbox.tsx            # Form checkbox
├── Label.tsx               # Form label
├── Card.tsx                # Card container
├── Badge.tsx               # Badge/tag
├── Avatar.tsx              # User avatar
└── Modal.tsx               # Modal dialog
```

#### 4.1.3 Specific Components
```
components/sections/
├── HeroSection.tsx         # Homepage hero
├── ServicesGrid.tsx        # Services display
├── ServiceCard.tsx         # Individual service card
├── TestimonialCard.tsx     # Testimonial card
├── TestimonialSlider.tsx   # Testimonial carousel
├── FeatureCard.tsx         # Feature highlight
├── LocationCard.tsx        # Office location card
├── CTASection.tsx          # Call-to-action section
├── StatCard.tsx            # Statistics display
├── FAQAccordion.tsx        # FAQ item
└── ContactForm.tsx         # Contact form
```

#### 4.1.4 Aceternity UI Components

```typescript
// Components to import from Aceternity UI
import { 
  Navbar,                    // Navigation
  FloatingDock,             // Floating navigation alternative
  GlowingButton,            // Button with glow
  ShineEffect,              // Text shine effect
  HoverCard,                // Card with hover effect
  AnimatedTooltip,          // Tooltip with animation
  TextScramble,             // Text animation
  LettersAnimation,         // Letter-by-letter animation
  MovingBorder,             // Border animation
  SpotlightCard,            // Card with spotlight effect
  InfiniteMovingCards,      // Carousel component
  Parallax,                 // Parallax scroll effect
  BackgroundGradient,       // Gradient background
  GridPattern,              // Grid background pattern
  NumberTicker,             // Animated number counter
} from 'aceternity-ui';
```

### 4.2 Component Example

#### Hero Section Component

```typescript
// components/sections/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import { ShineEffect, GlowingButton } from 'aceternity-ui';
import { Container } from '@/components/Container';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        {/* Grid or animated background */}
      </div>

      <Container className="relative z-10">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            <ShineEffect>
              Engineering Your Global
            </ShineEffect>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Talent Success
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Intelligent shoring that facilitates the deployment of the most 
            cost-effective skilled resources based on delivering localized IT value.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center pt-8"
          >
            <GlowingButton onClick={() => {}}>
              Book a 30-Min Consultation
            </GlowingButton>
            <button className="px-8 py-3 rounded-lg border border-slate-400 text-white hover:bg-slate-700 transition">
              Learn More
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-8 pt-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">500+</div>
              <div className="text-sm text-slate-400">Professionals Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">50+</div>
              <div className="text-sm text-slate-400">Global Clients</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
```

---

## 5. FEATURE IMPLEMENTATION TIMELINE

### Week 1-2: Foundation
```
Day 1-2:
├── Project initialization
├── Configure Next.js
├── Setup TypeScript & Tailwind
├── Configure Aceternity UI
└── Git repository setup

Day 3-4:
├── Create design tokens
├── Build CSS variable system
├── Implement theme provider
├── Create theme toggle component
└── Setup logging/monitoring

Day 5-7:
├── Build component library (common/)
├── Create layout components (Navbar, Footer)
├── Setup floating navbar
├── Add animations library setup
└── Basic page templates
```

### Week 3-4: Core Pages
```
Day 8-10:
├── Homepage structure
├── Hero section with animations
├── Services overview section
├── Testimonials section
└── Homepage styling & responsiveness

Day 11-14:
├── About Us page content & layout
├── Mission & Vision page
├── Services overview page
├── Start dynamic service detail pages
└── Team section component
```

### Week 5-6: Contact & Conversion
```
Day 15-17:
├── Contact Us page structure
├── Contact form component
├── Form validation (Zod)
├── Contact API route
└── Email integration (SendGrid)

Day 18-21:
├── Booking integration (Calendly)
├── FAQ section component
├── Location/map section
├── Success pages
└── Thank you emails
```

### Week 7-8: SEO & Optimization
```
Day 22-24:
├── SEO metadata for all pages
├── Schema.org markup
├── Open Graph tags
├── XML Sitemap generation
└── Robots.txt setup

Day 25-28:
├── Image optimization
├── Code splitting & lazy loading
├── Minification & compression
├── Lighthouse optimization
├── Performance testing
```

### Week 9-10: Testing & Deployment
```
Day 29-31:
├── Cross-browser testing
├── Mobile responsiveness testing
├── Accessibility audit (WCAG)
├── Form testing
└── Link validation

Day 32-35:
├── Staging deployment
├── Production deployment
├── DNS & SSL setup
├── Analytics setup
├── Monitoring & alerts
└── Post-launch review
```

---

## 6. ENVIRONMENT VARIABLES

### .env.local Template

```
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Capable Groups
NODE_ENV=development

# Analytics
NEXT_PUBLIC_GA_ID=G_XXXXXXXXXX

# Email Service
SENDGRID_API_KEY=SG_XXXXXXXXXX
NEXT_PUBLIC_ADMIN_EMAIL=admin@capablegroups.com

# Booking Service
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/capablegroups

# API Keys
NEXT_PUBLIC_FORM_ENDPOINT=http://localhost:3000/api/contact

# Database (if using)
DATABASE_URL=mongodb+srv://...

# Honeypot (spam prevention)
HONEYPOT_FIELD_NAME=website
```

---

## 7. TESTING STRATEGY

### 7.1 Local Testing Checklist

**Before Committing:**
- [ ] No console errors or warnings
- [ ] Page renders correctly
- [ ] Theme toggle works (light/dark)
- [ ] All links work (internal/external)
- [ ] Forms validate and submit
- [ ] Animations smooth at 60fps
- [ ] Images load properly
- [ ] Responsive at all breakpoints

**Before Deploying:**
- [ ] Mobile view on actual device
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Desktop at multiple resolutions
- [ ] Tablet testing
- [ ] Keyboard navigation (Tab, Enter, Esc)
- [ ] Screen reader testing
- [ ] Lighthouse audit (90+)
- [ ] SEO meta tags present

---

## 8. MONITORING & ANALYTICS

### 8.1 Google Analytics 4 Events

```typescript
// Core Events to Track
const EVENTS = {
  PAGE_VIEW: 'page_view',
  FORM_SUBMIT: 'form_submit',
  CTA_CLICK: 'cta_click',
  SERVICE_VIEW: 'service_view',
  SCROLL_DEPTH: 'scroll_depth',
  BOOKING_START: 'booking_start',
  BOOKING_COMPLETE: 'booking_complete',
  PHONE_CLICK: 'phone_click',
  EMAIL_CLICK: 'email_click',
};

// Implementation
import { pageview, event } from '@/lib/gtag';

// Track page view
useEffect(() => {
  pageview(router.asPath);
}, [router.asPath]);

// Track custom events
const handleFormSubmit = () => {
  event({
    action: EVENTS.FORM_SUBMIT,
    category: 'contact',
    label: 'Homepage Contact Form',
  });
};
```

### 8.2 Performance Monitoring

- Core Web Vitals tracking
- Error tracking (Sentry)
- Network request monitoring
- Build time tracking
- Deployment success/failure alerts

---

## 9. SECURITY CONSIDERATIONS

### 9.1 Input Validation & Sanitization

```typescript
// Use Zod for form validation
import { z } from 'zod';

const ContactFormSchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(20).max(1000),
  consent: z.boolean().refine(val => val === true),
});

// Server-side validation
export async function POST(req: Request) {
  const body = await req.json();
  const validatedData = ContactFormSchema.parse(body);
  // Safe to use validatedData
}
```

### 9.2 Rate Limiting

```typescript
// Prevent form spam with rate limiting
import { Ratelimit } from '@upstash/ratelimit';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 h'),
});

export async function POST(req: Request) {
  const ip = req.ip || '127.0.0.1';
  const { success } = await ratelimit.limit(ip);
  
  if (!success) {
    return new Response('Too many requests', { status: 429 });
  }
  // Process form
}
```

### 9.3 CSRF Protection

- Use hidden CSRF tokens in forms
- Implement SameSite cookie attribute
- Validate origin headers

### 9.4 Content Security Policy

```typescript
// next.config.js
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-inline'",
  },
];
```

---

## 10. PERFORMANCE OPTIMIZATION

### 10.1 Image Optimization

```typescript
import Image from 'next/image';

<Image
  src="/images/service.png"
  alt="Service description"
  width={600}
  height={400}
  priority={false}  // lazy load
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

### 10.2 Code Splitting

```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(
  () => import('@/components/HeavyComponent'),
  { loading: () => <Skeleton /> }
);
```

### 10.3 Caching Strategy

```
Static Pages (ISR):
- Home
- About
- Mission & Vision
- Service pages
revalidate: 3600 (1 hour)

Dynamic Pages:
- Contact form submissions
- Blog posts (if added)
```

---

## 11. DEPLOYMENT CHECKLIST

### Pre-Deployment
- [ ] All features complete and tested
- [ ] Lighthouse score 90+
- [ ] Zero console errors/warnings
- [ ] Mobile responsive verified
- [ ] SEO metadata complete
- [ ] Analytics configured
- [ ] Email service configured
- [ ] Environment variables set
- [ ] DNS records ready
- [ ] SSL certificate valid
- [ ] Backup plans documented

### Post-Deployment
- [ ] Verify site is live
- [ ] Check all pages load
- [ ] Test forms functionality
- [ ] Verify email notifications
- [ ] Monitor error logs
- [ ] Check analytics data
- [ ] Validate Core Web Vitals
- [ ] Test on real devices
- [ ] Monitor uptime
- [ ] Update status page

---

## 12. CONTINUOUS IMPROVEMENT PLAN

### Monthly Tasks
- Analyze Google Analytics data
- Check keyword rankings
- Review form submissions and leads quality
- Update testimonials/case studies
- Check for broken links
- Update security patches

### Quarterly Tasks
- Full SEO audit
- Performance review and optimization
- User feedback analysis
- Competitor analysis
- Content refresh
- Tool/library updates

### Annual Tasks
- Major design refresh (optional)
- Rebrand if needed
- Strategic content overhaul
- Technology stack evaluation
- Accessibility compliance audit

---

**End of Implementation Flow Document**
