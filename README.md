# Capable Groups Website

This is the official website for Capable Groups, a global staffing and IT services agency. The website is built using Next.js, Tailwind CSS, Framer Motion, and Aceternity UI components.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** Aceternity UI, Lucide React
- **Theming:** next-themes (Light/Dark mode)
- **Language:** TypeScript

## Project Structure

```
src/
├── app/              # Next.js App Router pages and layouts
├── components/       # Reusable React components
│   ├── common/       # Basic UI elements (buttons, inputs, etc.)
│   ├── sections/     # Page sections (Hero, Services, etc.)
│   └── ui/           # Aceternity UI and complex interactive components
├── lib/              # Utility functions and helpers
└── styles/           # Global CSS and Tailwind configuration
```

## Getting Started

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Implementation Procedure

1. **Setup & Configuration:** Initialized Next.js with Tailwind CSS and TypeScript. Configured absolute imports (`@/*`).
2. **Design System:** Implemented the color palette, typography, and spacing defined in the PRD using Tailwind configuration and CSS variables.
3. **Component Architecture:** Built reusable UI components (buttons, cards) and layout components (navbar, footer).
4. **Page Sections:** Developed individual sections like Hero, Services Grid, Testimonials, etc., using Framer Motion for animations.
5. **Theming:** Integrated `next-themes` for seamless light and dark mode switching.
6. **Responsive Design:** Ensured all components are mobile-first and look great across all screen sizes.

## Development Guidelines

- Use functional components with TypeScript interfaces for props.
- Prefer Tailwind utility classes for styling.
- Use Framer Motion for complex animations and transitions.
- Follow the established folder structure for new components and pages.
- Ensure accessibility (ARIA attributes, keyboard navigation) for all interactive elements.
