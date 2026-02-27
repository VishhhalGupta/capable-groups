# Capable Groups Website - Design System & Component Specifications

## TABLE OF CONTENTS
1. Design System Overview
2. Color System & Theming
3. Typography System
4. Component Library Specifications
5. Aceternity UI Integration
6. Animation & Interaction Guide
7. Accessibility Standards
8. Responsive Design Breakpoints

---

## 1. DESIGN SYSTEM OVERVIEW

### 1.1 Design Principles

**1. Clarity First**
- Information hierarchy is clear and intuitive
- Visual hierarchy guides users through content
- Text is readable and accessible
- Buttons and CTAs are obvious

**2. Modern Professionalism**
- Clean, contemporary aesthetic
- Premium feel without being stuffy
- Balanced use of whitespace
- Sophisticated color palette

**3. Trust & Credibility**
- Consistent design across all pages
- Professional imagery
- Clear social proof (testimonials, metrics)
- Transparent communication

**4. User-Centered**
- Mobile-first responsive design
- Fast performance prioritized
- Accessibility built-in
- Intuitive interactions

**5. Brand Differentiation**
- Modern aesthetic that stands out
- Thoughtful animations
- Unique use of whitespace and typography
- Custom illustrations/icons where possible

### 1.2 Design Tokens

**Token Categories:**
```
Colors
├── Primary (brand colors)
├── Semantic (success, warning, error)
├── Neutral (grays for backgrounds, borders)
└── Backgrounds & Surface Colors

Typography
├── Font families
├── Font sizes & scales
├── Font weights
├── Line heights
└── Letter spacing

Spacing
├── Base unit (4px)
├── Spacing scale (4, 8, 12, 16, 24, 32...)
├── Padding standards
└── Margin standards

Sizing
├── Component dimensions
├── Border radius scale
├── Icon sizes
└── Avatar sizes

Shadows & Effects
├── Shadow scale (sm, md, lg, xl)
├── Blur effects
├── Overlays
└── Depth levels

Animations
├── Duration standards
├── Easing functions
├── Transition speeds
└── Animation types
```

---

## 2. COLOR SYSTEM & THEMING

### 2.1 Light Theme Color Palette

#### 2.1.1 Brand Colors (Primary)
```
Primary Blue:
  50:  #EFF6FF
  100: #DBEAFE
  200: #BFDBFE
  300: #93C5FD
  400: #60A5FA     ← Primary
  500: #3B82F6     ← Darker primary
  600: #2563EB
  700: #1D4ED8
  800: #1E40AF     ← Darkest primary
  900: #1E3A8A
```

#### 2.1.2 Neutral Colors (Background & Text)
```
White/Off-White:
  Pure White:   #FFFFFF
  Off-White:    #F8FAFC      ← Secondary background
  Light Gray:   #F1F5F9

Grays:
  100: #F1F5F9
  200: #E2E8F0               ← Borders
  300: #CBD5E1
  400: #94A3B8
  500: #64748B               ← Secondary text
  600: #475569
  700: #334155
  800: #1E293B               ← Primary text

Dark:
  Primary Text: #1A1A1A
```

#### 2.1.3 Semantic Colors
```
Success (Green):
  Light:   #DCFCE7
  Base:    #10B981     ← Main success color
  Dark:    #047857

Warning (Amber):
  Light:   #FEF3C7
  Base:    #F59E0B     ← Main warning color
  Dark:    #B45309

Error (Red):
  Light:   #FEE2E2
  Base:    #EF4444     ← Main error color
  Dark:    #B91C1C

Info (Blue):
  Light:   #DBEAFE
  Base:    #3B82F6     ← Main info color
  Dark:    #1E40AF
```

#### 2.1.4 Gradient Combinations (Light Theme)
```
Hero Gradient:
  from-slate-900 to-slate-800
  OR
  from-blue-50 via-slate-50 to-white

Accent Gradient:
  from-blue-400 to-cyan-400
  OR
  from-slate-900 via-blue-800 to-slate-900

Button Hover:
  from-blue-500 to-blue-600
```

### 2.2 Dark Theme Color Palette

#### 2.2.1 Dark Theme Primaries
```
Primary Background:   #0F172A     ← Very dark navy
Secondary Background: #1E293B     ← Dark navy
Tertiary Background:  #334155     ← Slightly lighter

Text Primary:         #F1F5F9     ← Off white
Text Secondary:       #94A3B8     ← Light gray
Text Tertiary:        #64748B     ← Medium gray

Primary Blue:         #60A5FA     ← Brighter blue for contrast
Secondary Blue:       #93C5FD     ← Lighter blue for hover

Borders:              #334155     ← Dark borders
```

#### 2.2.2 Dark Theme Semantic Colors
```
Success: #10B981 (same as light)
Warning: #F59E0B (same as light)
Error:   #EF4444 (same as light)
Info:    #60A5FA (lighter blue for dark theme)
```

#### 2.2.3 Gradient Combinations (Dark Theme)
```
Hero Gradient:
  from-slate-900 via-slate-800 to-slate-900
  OR
  from-blue-900 via-slate-900 to-slate-900

Accent Gradient:
  from-blue-400 to-cyan-400 (same, good contrast on dark)
  OR
  from-blue-500 to-purple-500

Card Backgrounds:
  Subtle gradient from secondary to slightly lighter
  from-slate-800 to-slate-700
```

### 2.3 CSS Variables Implementation

```css
:root {
  /* Light Theme - Default */
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f8fafc;
  --color-bg-tertiary: #f1f5f9;
  
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #64748b;
  --color-text-tertiary: #94a3b8;
  
  --color-border: #e2e8f0;
  --color-border-light: #f1f5f9;
  --color-border-dark: #cbd5e1;
  
  --color-primary: #3b82f6;
  --color-primary-hover: #1e40af;
  --color-primary-light: #dbeafe;
  
  --color-secondary: #60a5fa;
  --color-secondary-hover: #3b82f6;
  
  --color-accent: #3b82f6;
  
  --color-success: #10b981;
  --color-success-light: #dcfce7;
  
  --color-warning: #f59e0b;
  --color-warning-light: #fef3c7;
  
  --color-error: #ef4444;
  --color-error-light: #fee2e2;
  
  --color-info: #3b82f6;
  --color-info-light: #dbeafe;
  
  /* Shadow scales */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);
}

[data-theme='dark'] {
  --color-bg-primary: #0f172a;
  --color-bg-secondary: #1e293b;
  --color-bg-tertiary: #334155;
  
  --color-text-primary: #f1f5f9;
  --color-text-secondary: #94a3b8;
  --color-text-tertiary: #64748b;
  
  --color-border: #334155;
  --color-border-light: #475569;
  --color-border-dark: #1e293b;
  
  --color-primary: #60a5fa;
  --color-primary-hover: #93c5fd;
  --color-primary-light: #1e3a8a;
  
  --color-secondary: #93c5fd;
  --color-secondary-hover: #60a5fa;
  
  --color-accent: #60a5fa;
  
  --color-success: #10b981;
  --color-success-light: #064e3b;
  
  --color-warning: #f59e0b;
  --color-warning-light: #78350f;
  
  --color-error: #ef4444;
  --color-error-light: #7f1d1d;
  
  --color-info: #60a5fa;
  --color-info-light: #082f49;
  
  /* Shadows (more subtle on dark) */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.4);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.4);
  --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.5);
}
```

### 2.4 Using CSS Variables in Components

```tsx
// Example component using CSS variables
export function Card({ children, variant = 'default' }) {
  return (
    <div 
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderColor: 'var(--color-border)',
        color: 'var(--color-text-primary)',
      }}
      className="border rounded-lg p-6"
    >
      {children}
    </div>
  );
}

// Or in Tailwind with @apply
// styles/globals.css
@layer components {
  .card {
    @apply bg-[var(--color-bg-secondary)] border-[var(--color-border)] text-[var(--color-text-primary)];
  }
}
```

---

## 3. TYPOGRAPHY SYSTEM

### 3.1 Font Families

**Primary (Headings):**
- Font: Inter or Poppins
- Usage: H1, H2, H3, H4, H5, H6
- Weights: 600 (SemiBold), 700 (Bold)
- Characteristics: Modern, clean, geometric

**Secondary (Body):**
- Font: Inter or -apple-system BlinkMacSystemFont "Segoe UI" Roboto
- Usage: Body text, paragraphs, lists
- Weights: 400 (Regular), 500 (Medium)
- Characteristics: Highly readable, perfect for long-form

**Monospace (Code):**
- Font: JetBrains Mono or Fira Code
- Usage: Code blocks, technical content
- Weight: 400 (Regular)

### 3.2 Type Scale & Sizing

```
Mobile (Responsive)           Desktop
───────────────────────────────────────
Display:
  H1:   40px/1.2      →       48px/1.2
  Font weight: Bold (700)

Heading 1:
  H2:   32px/1.3      →       36px/1.35
  Font weight: Bold (700)

Heading 2:
  H3:   24px/1.4      →       28px/1.4
  Font weight: SemiBold (600)

Heading 3:
  H4:   20px/1.4      →       24px/1.45
  Font weight: SemiBold (600)

Heading 4:
  H5:   18px/1.5      →       20px/1.5
  Font weight: Medium (500)

Body Large:
  16px/1.6 line-height
  Font weight: Regular (400)

Body:
  16px/1.6 line-height
  Font weight: Regular (400)

Body Small:
  14px/1.6 line-height
  Font weight: Regular (400)

Caption:
  12px/1.5 line-height
  Font weight: Regular (400)

Label:
  13px/1.5 line-height
  Font weight: Medium (500)

Code:
  13px/1.6 monospace
  Font weight: Regular (400)
```

### 3.3 Letter Spacing

```
Body text:        0 (normal)
Headings:         -0.02em (slight tightening)
Labels:           0.05em (slight expansion)
All caps:         0.08em (expansion)
```

### 3.4 Line Height

```
Headings:  1.2 - 1.35 (tighter)
Body:      1.5 - 1.6 (readable)
Code:      1.6 (readable)
```

### 3.5 Font Pairing Examples

**Option 1 (Recommended):**
- Display/Headings: Poppins (Bold/SemiBold)
- Body: Inter (Regular/Medium)
- Code: JetBrains Mono

**Option 2:**
- Display/Headings: Inter (Bold/SemiBold)
- Body: Inter (Regular/Medium)
- Code: Fira Code

**Option 3 (Premium):**
- Display/Headings: Custom/Licensed Font
- Body: Inter (Regular/Medium)
- Code: JetBrains Mono

---

## 4. COMPONENT LIBRARY SPECIFICATIONS

### 4.1 Button Component

#### Variants

**Primary Button:**
```
Default State:
  Background: var(--color-primary)
  Text: white
  Padding: 12px 24px (md), 10px 16px (sm), 14px 32px (lg)
  Border radius: 8px
  Font size: 16px / 14px / 18px
  Font weight: 600
  Cursor: pointer
  
Hover State:
  Background: var(--color-primary-hover)
  Shadow: 0 4px 12px rgba(59, 130, 246, 0.4)
  Transform: translateY(-2px)
  Transition: all 0.2s ease

Active/Pressed:
  Background: var(--color-primary-hover)
  Transform: translateY(0)
  
Disabled State:
  Background: var(--color-border)
  Text: var(--color-text-tertiary)
  Cursor: not-allowed
  Opacity: 0.6
```

**Secondary Button:**
```
Default State:
  Background: transparent
  Border: 1px solid var(--color-border)
  Text: var(--color-text-primary)
  Padding: 12px 24px
  Border radius: 8px
  Font weight: 600

Hover State:
  Background: var(--color-bg-secondary)
  Border color: var(--color-primary)
  Text: var(--color-primary)

Dark Theme:
  Border: 1px solid var(--color-border)
  Text: var(--color-text-secondary)
  
Hover:
  Background: var(--color-bg-tertiary)
  Text: var(--color-primary)
```

**Tertiary Button:**
```
Default State:
  Background: transparent
  Text: var(--color-primary)
  Padding: 12px 16px
  Border radius: 8px
  Font weight: 600
  
Hover State:
  Background: var(--color-primary-light)
  Text: var(--color-primary-hover)
```

#### Button Sizes

```
Small:
  Padding: 8px 16px
  Font size: 14px
  Height: 32px

Medium (Default):
  Padding: 12px 24px
  Font size: 16px
  Height: 40px

Large:
  Padding: 14px 32px
  Font size: 18px
  Height: 48px

Full Width:
  Width: 100%
  Padding: 12px 24px
```

#### Button States

```
With Icon + Text:
  Icon (left): 18px, margin-right: 8px
  Icon (right): 18px, margin-left: 8px
  
Icon Only:
  Icon size: 20px
  Padding: 10px

Loading State:
  Show spinner
  Disable interactions
  Text: optional "Loading..."

Group Buttons:
  Multiple buttons in toolbar
  Space between: 8px
  Border radius: first: left-rounded, middle: not-rounded, last: right-rounded
```

### 4.2 Card Component

```
Structure:
  ┌─────────────────────────┐
  │   Card Header (Optional)│
  ├─────────────────────────┤
  │                         │
  │    Card Content         │
  │                         │
  ├─────────────────────────┤
  │  Card Footer (Optional) │
  └─────────────────────────┘

Properties:
  Background: var(--color-bg-secondary)
  Border: 1px solid var(--color-border)
  Border radius: 12px
  Padding: 24px (default), 16px (compact), 32px (spacious)
  Box shadow: var(--shadow-md)
  
Hover State:
  Box shadow: var(--shadow-lg)
  Border color: var(--color-primary-light)
  Transform: translateY(-2px)
  Transition: all 0.3s ease

Dark Theme:
  Background: var(--color-bg-secondary)
  Border: 1px solid var(--color-border)
  Box shadow: 0 4px 6px rgba(0, 0, 0, 0.3)
```

### 4.3 Input Component

```
Container:
  Width: 100% (default)
  Display: flex
  Flex direction: column
  Gap: 8px

Label:
  Font size: 13px / 14px
  Font weight: 500
  Color: var(--color-text-primary)
  Margin bottom: 4px

Input Field:
  Width: 100%
  Padding: 10px 12px
  Font size: 16px
  Border: 1px solid var(--color-border)
  Border radius: 8px
  Background: var(--color-bg-primary)
  Color: var(--color-text-primary)
  
Focus State:
  Border color: var(--color-primary)
  Outline: none
  Box shadow: 0 0 0 3px var(--color-primary-light)
  
Hover State:
  Border color: var(--color-primary)
  
Error State:
  Border color: var(--color-error)
  Error message: 12px, color: var(--color-error)
  
Disabled State:
  Background: var(--color-bg-secondary)
  Border color: var(--color-border)
  Color: var(--color-text-tertiary)
  Cursor: not-allowed
  
Placeholder:
  Color: var(--color-text-tertiary)
  Font style: italic
```

### 4.4 Navbar Component

```
Container:
  Position: fixed
  Top: 0
  Width: 100%
  Height: 64px (desktop), 56px (mobile)
  Background: rgba(255, 255, 255, 0.8) with backdrop blur
  Border bottom: 1px solid var(--color-border)
  Z-index: 50
  Backdrop filter: blur(8px)

Dark Theme:
  Background: rgba(15, 23, 42, 0.8)

Content Layout:
  ┌──────────────────────────────────┐
  │ Logo  |  Nav Links  |  CTA Button │
  └──────────────────────────────────┘
  Max-width: 1280px
  Padding: 0 24px
  Display: flex
  Align items: center
  Justify content: space-between

Logo:
  Height: 32px
  Margin right: 48px
  
Navigation Links:
  Display: flex (hidden on mobile)
  Gap: 32px
  Font size: 15px
  Font weight: 500
  
Link States:
  Default: color: var(--color-text-secondary)
  Hover: color: var(--color-primary)
  Active: color: var(--color-primary), border-bottom: 2px solid

Service Dropdown:
  Trigger: "Services"
  On hover: dropdown appears
  Animation: fade-in, slide-down (200ms)
  
Mobile Menu (Hamburger):
  Display: flex (mobile only)
  Icon: 24px
  Opens full-screen menu
  Animation: slide-in from top

Theme Toggle:
  Position: right side
  Icon: 20px
  Spacing: margin-left: 24px
```

---

## 5. ACETERNITY UI INTEGRATION

### 5.1 Key Components to Use

#### 5.1.1 ShineEffect (Text Animation)
```typescript
import { ShineEffect } from 'aceternity-ui';

// Usage in Hero Section
<h1 className="text-5xl font-bold">
  <ShineEffect>
    Engineering Your Global
  </ShineEffect>
  <br />
  Talent Success
</h1>

// Alternatives:
// - TextScramble (letters scramble on load)
// - LettersAnimation (staggered letter reveal)
```

#### 5.1.2 GlowingButton (CTA Button)
```typescript
import { GlowingButton } from 'aceternity-ui';

<GlowingButton 
  onClick={() => router.push('/contact')}
  className="px-8 py-4 text-lg"
>
  Book a Consultation
</GlowingButton>

// Or use custom styled button with glow effect via CSS
```

#### 5.1.3 InfiniteMovingCards (Testimonials)
```typescript
import { InfiniteMovingCards } from 'aceternity-ui';

<InfiniteMovingCards
  items={testimonials}
  direction="right"
  speed="slow"
  pauseOnHover={true}
  className="md:max-w-3xl"
/>

// Testimonial structure:
// {
//   quote: "...",
//   name: "John Doe",
//   title: "CEO, Company",
//   avatar: "..."
// }
```

#### 5.1.4 MovingBorder (Card with Border Animation)
```typescript
import { MovingBorder } from 'aceternity-ui';

<MovingBorder duration={3000} className="rounded-lg">
  <div className="p-6 bg-white dark:bg-slate-900">
    {/* Card content */}
  </div>
</MovingBorder>
```

#### 5.1.5 Parallax (Scroll Effects)
```typescript
import { Parallax } from 'aceternity-ui';

<Parallax 
  offset={100}
  className="flex items-center justify-center"
>
  <Image src="/image.png" alt="Parallax" />
</Parallax>
```

#### 5.1.6 SpotlightCard (Hover Spotlight Effect)
```typescript
import { SpotlightCard } from 'aceternity-ui';

<SpotlightCard 
  className="group relative block h-full w-full bg-white"
>
  {/* Card content with spotlight on hover */}
</SpotlightCard>
```

#### 5.1.7 NumberTicker (Animated Counter)
```typescript
import { NumberTicker } from 'aceternity-ui';

<div className="text-4xl font-bold">
  <NumberTicker value={500} />+
</div>
<p className="text-gray-600">Professionals Deployed</p>
```

#### 5.1.8 BackgroundGradient (Animated Background)
```typescript
import { BackgroundGradient } from 'aceternity-ui';

<BackgroundGradient 
  className="rounded-[22px] p-8 bg-white dark:bg-zinc-900"
>
  {/* Content */}
</BackgroundGradient>
```

#### 5.1.9 GridPattern (Background Pattern)
```typescript
import { GridPattern } from 'aceternity-ui';

<div className="relative w-full h-96">
  <GridPattern />
  <div className="relative z-10">
    {/* Content on top of grid */}
  </div>
</div>
```

### 5.2 Aceternity UI Setup

```typescript
// Installation
npm install aceternity-ui

// Or with yarn
yarn add aceternity-ui

// Import styles in globals.css
@import 'aceternity-ui/styles.css';

// Usage in components
import { ComponentName } from 'aceternity-ui';

// Available components to import:
// ShineEffect, TextScramble, LettersAnimation
// MovingBorder, SpotlightCard
// InfiniteMovingCards
// BackgroundGradient, GridPattern
// GlowingButton, AnimatedTooltip
// HoverCard, Parallax
// NumberTicker
// And many more...
```

---

## 6. ANIMATION & INTERACTION GUIDE

### 6.1 Animation Principles

**Timing:**
- Quick interactions: 100-200ms (button hover, tooltip)
- Page transitions: 300-400ms (fade, slide)
- Scroll animations: 400-600ms (smooth reveal)
- Entrance animations: 500-1000ms (staggered elements)

**Easing Functions:**
```
ease-out: Quad Out (natural, recommended for entrances)
ease-in-out: Cubic (natural, recommended for transitions)
ease-in: Quart (fast end deceleration, button clicks)
ease: Default ease function
```

**Framer Motion Easing Examples:**
```typescript
{ ease: "easeOut", duration: 0.3 }
{ ease: "easeInOut", duration: 0.4 }
{ ease: [0.32, 0.72, 0, 1], duration: 0.4 } // Custom cubic-bezier
```

### 6.2 Page Load Animations

**Staggered Text Reveal:**
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  <motion.h1 variants={itemVariants}>Heading</motion.h1>
  <motion.p variants={itemVariants}>Paragraph</motion.p>
</motion.div>
```

**Fade In:**
```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  Content
</motion.div>
```

**Slide In:**
```typescript
<motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  Content
</motion.div>
```

### 6.3 Scroll Animations

**Scroll-triggered Reveal:**
```typescript
import { useInView } from 'react-intersection-observer';

function ScrollReveal({ children }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

### 6.4 Hover & Interactive Animations

**Button Hover:**
```typescript
<motion.button
  whileHover={{ scale: 1.05, y: -3 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
  Click me
</motion.button>
```

**Card Hover:**
```typescript
<motion.div
  whileHover={{ y: -8, boxShadow: "0 20px 25px rgba(0,0,0,0.15)" }}
  transition={{ duration: 0.3 }}
>
  Card Content
</motion.div>
```

**Smooth Underline on Link:**
```typescript
<motion.a
  className="relative"
  whileHover="hover"
  initial="rest"
  variants={{
    rest: { color: "var(--color-text-secondary)" },
    hover: { color: "var(--color-primary)" },
  }}
>
  Link text
  <motion.span
    className="absolute bottom-0 left-0 h-0.5 bg-primary"
    variants={{
      rest: { width: 0 },
      hover: { width: "100%" },
    }}
    transition={{ duration: 0.3 }}
  />
</motion.a>
```

### 6.5 Animation Library Configuration

**globals.css:**
```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.animate-slide-in-up {
  animation: slideInUp 0.6s ease-out;
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}
```

---

## 7. ACCESSIBILITY STANDARDS

### 7.1 WCAG 2.1 AA Compliance

**Color Contrast:**
```
Text (normal): 4.5:1 ratio
Large text (18px+, bold 14px+): 3:1 ratio
Graphics/UI components: 3:1 ratio

Testing tool: WAVE, Axe, or WebAIM Contrast Checker
```

**Focus States:**
```css
/* All interactive elements must have visible focus */
button:focus,
a:focus,
input:focus {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

/* Remove default blue outline and add custom */
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

**Heading Hierarchy:**
```
Structure:
  H1 (page title) - only one per page
  H2 (main sections)
  H3 (subsections)
  H4 (sub-subsections)
  
NOT allowed:
  Skipping heading levels (H1 → H3)
  Using headings for styling (use CSS instead)
```

**Alt Text:**
```
Informative images:
  alt="Brief description of image content"
  
Decorative images:
  alt=""  OR role="presentation"
  
Icons (meaningful):
  aria-label="Icon description"  OR
  <span class="sr-only">Description</span>
```

**Form Accessibility:**
```html
<!-- Correct -->
<label for="email-input">Email Address</label>
<input id="email-input" type="email" />

<!-- Incorrect -->
<input type="email" placeholder="Enter email" />

<!-- Error handling -->
<input 
  id="name-input"
  aria-invalid="true"
  aria-describedby="name-error"
/>
<span id="name-error" role="alert">This field is required</span>
```

### 7.2 Keyboard Navigation

**Tab Order:**
- Logical flow (left to right, top to bottom)
- `tabindex="-1"` for non-interactive elements styled like buttons
- `tabindex="0"` only when necessary
- Never use positive tabindex values

**Keyboard Shortcuts:**
```
Esc: Close modals/dropdowns
Enter/Space: Activate buttons
Arrow keys: Navigate through lists/menus
Tab: Move to next element
Shift+Tab: Move to previous element
```

**Skip Links:**
```html
<!-- At top of page -->
<a href="#main-content" class="sr-only focus:not-sr-only">
  Skip to main content
</a>

<nav><!-- Navigation --</nav>

<main id="main-content">
  <!-- Main content -->
</main>
```

### 7.3 Screen Reader Support

**Semantic HTML:**
```html
<!-- Use semantic elements -->
<nav>, <main>, <section>, <article>, <aside>, <header>, <footer>

<!-- Not div-based -->
<div class="nav"> ❌
<nav> ✅
```

**ARIA Labels:**
```html
<!-- Icon-only buttons -->
<button aria-label="Close menu">
  <Icon />
</button>

<!-- Informative images -->
<img 
  src="service.jpg" 
  alt="Mobile app development services" 
/>

<!-- Live regions -->
<div aria-live="polite" aria-atomic="true">
  Form submission successful!
</div>

<!-- Navigation landmarks -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```

---

## 8. RESPONSIVE DESIGN BREAKPOINTS

### 8.1 Breakpoint System

```
Mobile:       320px - 640px     (xs, sm)
Tablet:       641px - 1024px    (md, lg)
Desktop:      1025px - 1280px   (xl)
Wide Desktop: 1281px+           (2xl)

Tailwind Breakpoints:
  sm: 640px
  md: 768px
  lg: 1024px
  xl: 1280px
  2xl: 1536px
```

### 8.2 Responsive Component Guidelines

**Navigation:**
```
Mobile (<768px):
  - Floating nav with hamburger menu
  - Full-screen overlay menu
  - Large touch targets (48px minimum)

Desktop (768px+):
  - Horizontal nav with dropdowns
  - All items visible
  - Normal spacing
```

**Cards Grid:**
```
Mobile: 1 column
Tablet (md): 2 columns
Desktop (lg): 3 columns
Wide (2xl): 4 columns

Spacing:
  Mobile: 16px gap
  Tablet: 20px gap
  Desktop: 24px gap
```

**Typography Scale:**
```
Headings:
  Mobile:  32px (H2), 24px (H3)
  Desktop: 36px (H2), 28px (H3)

Body:
  Mobile:  16px
  Desktop: 16px (no change needed)
```

**Container:**
```
Mobile:  100% - 32px padding
Tablet:  100% - 48px padding
Desktop: max-width 1280px, centered

Example:
  @media (min-width: 1024px) {
    max-width: 1280px;
    margin: 0 auto;
  }
```

### 8.3 Mobile-First CSS

```css
/* Start with mobile */
.button {
  padding: 12px 16px;
  font-size: 14px;
}

/* Enhance for larger screens */
@media (min-width: 768px) {
  .button {
    padding: 12px 24px;
    font-size: 16px;
  }
}

/* With Tailwind */
<button className="px-4 py-3 text-sm md:px-6 md:py-3 md:text-base">
  Button
</button>
```

---

## 9. DESIGN CHECKLIST

### Pre-Implementation Review
- [ ] Color palette approved for both themes
- [ ] Typography scale finalized
- [ ] Spacing and sizing tokens defined
- [ ] Component variants documented
- [ ] Breakpoints defined for responsive design
- [ ] Aceternity UI components selected and documented
- [ ] Animation timings and easing approved
- [ ] Accessibility requirements reviewed
- [ ] All WCAG 2.1 AA standards covered

### Component Implementation
- [ ] Consistent use of CSS variables
- [ ] Theme switching tested (light/dark)
- [ ] Responsive design tested at all breakpoints
- [ ] Keyboard navigation functional
- [ ] Screen reader compatibility verified
- [ ] Color contrast ratios verified (4.5:1 for text)
- [ ] Focus states visible and consistent
- [ ] Images have alt text
- [ ] Animations are smooth (60fps)
- [ ] Loading states shown

---

**End of Design System Document**

This comprehensive design system ensures consistency, accessibility, and visual excellence across the Capable Groups website. Use these specifications as the foundation for all design and development decisions.
