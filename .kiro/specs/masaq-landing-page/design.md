# Design Document - Masaq Al-Amaar Landing Page

## Overview

The Masaq Al-Amaar landing page will be a sophisticated, professional website that transforms the existing law firm template into a construction and architecture company showcase. The design emphasizes elegance, trust, and craftsmanship while maintaining excellent performance and accessibility across all devices and languages.

The page will feature a modern, clean aesthetic with the company's primary brand color (#051F35) as the foundation, complemented by warm secondary colors that evoke quality construction and architectural excellence. The design will seamlessly support both Arabic (RTL) and English (LTR) layouts with culturally appropriate typography and spacing.

## Architecture

### Component Structure

```
Landing Page
├── Header (Navigation + Language Switcher)
├── Hero Section (Company Introduction + CTA)
├── About Section (Company Story + Values)
├── Services Section (4 Main Services)
├── Gallery Section (Project Showcase)
├── Process Section (5-Step Workflow)
├── Contact Section (Contact Info + Social Links)
└── Footer (Links + Company Info)
```

### Technology Stack

- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables
- **Animations**: motion/react-m for smooth transitions
- **Images**: next-image-export-optimizer for performance
- **Internationalization**: next-intl for Arabic/English support
- **Icons**: Custom SVG icons and social media icons

### Animation Implementation Guidelines

**IMPORTANT**: All animations must follow these patterns:

1. **Import Pattern**: Always use `import * as m from "motion/react-m";`
2. **Component Usage**: Use `m.div`, `m.section`, etc. (NOT `motion.div`)
3. **Scroll Animations**: Use `whileInView` prop with `viewport` (NOT `useInView` hook)
4. **Example**:
   ```typescript
   import * as m from "motion/react-m";

   <m.div
     initial={{ opacity: 0, y: 30 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6 }}
     viewport={{ once: true, margin: "-100px" }}
   >
     Content
   </m.div>
   ```

### Layout System

- **Desktop**: Multi-column layouts with generous whitespace
- **Tablet**: Adapted layouts maintaining visual hierarchy
- **Mobile**: Single-column, touch-optimized interface
- **RTL Support**: Automatic layout mirroring for Arabic content

## Components and Interfaces

### Header Component

- **Navigation**: Home, About, Services, Process, Contact
- **Language Switcher**: Arabic/English toggle with flags
- **Logo**: Masaq Al-Amaar branding with #051F35 color
- **Mobile Menu**: Hamburger menu with smooth slide animations

### Hero Section

- **Layout**: Full-screen height with centered content
- **Content**: Company name, tagline, description, primary CTA
- **Background**: Subtle architectural pattern or construction imagery
- **Animations**: Staggered text entrance with fade-in effects

### About Section

- **Layout**: Two-column (desktop) with text and visual elements
- **Content**: Company story, methodology, quality commitment
- **Visuals**: Construction/architecture themed imagery
- **Animations**: Scroll-triggered entrance animations

### Services Section

- **Layout**: 2x2 grid (desktop), single column (mobile)
- **Services**:
  1. Architectural Design & Interior Design
  2. Structural Construction (العظم)
  3. Interior Finishing (التشطيب)
  4. Turnkey Project Management
- **Cards**: Hover effects with smooth transitions
- **Icons**: Custom icons for each service category

### Gallery Section

- **Layout**: Masonry or grid layout showcasing project images
- **Content**: Client-provided project images from `/public/images/` directory
- **Categories**: Residential projects, commercial projects, interior work, structural work
- **Interaction**: Image lightbox or modal for detailed viewing
- **Animations**: Staggered image loading with fade-in effects

### Process Section

- **Layout**: Horizontal timeline (desktop), vertical (mobile)
- **Steps**:
  1. Consultation & Requirements Understanding
  2. Site Survey & Measurements
  3. Design Preparation & Approval
  4. Implementation & Monitoring
  5. Final Delivery
- **Animations**: Sequential step reveals on scroll

### Contact Section

- **Layout**: Contact cards with company information
- **Information**:
  - Phone: 0507005801 (clickable)
  - Email: <info@masaq.com> (clickable)
  - WhatsApp: 0507005801 (opens WhatsApp)
  - Location: Jeddah, Saudi Arabia
  - Social: Instagram (masaq.al), TikTok (.masaq)
- **Integration**: Direct links to communication channels

## Data Models

### Site Configuration

```typescript
interface SiteConfig {
  company: {
    name: string;
    nameAr: string;
    tagline: string;
    taglineAr: string;
    description: string;
    descriptionAr: string;
  };
  contact: {
    phone: string;
    email: string;
    whatsapp: string;
    location: string;
    locationAr: string;
  };
  social: {
    instagram: string;
    tiktok: string;
  };
}
```

### Color System

Colors will be managed through CSS custom properties in `globals.css`, following the existing pattern:

```css
:root {
  /* Masaq Al-Amaar Brand Colors */
  --masaq-primary: #051F35;        /* Logo color */
  --masaq-primary-light: #0A2A45;
  --masaq-primary-dark: #041825;
  --masaq-secondary: #8B7355;      /* Warm construction tone */
  --masaq-accent: #F5F5F5;         /* Light neutral */
  --masaq-text: #2C3E50;
  --masaq-text-light: #6C757D;
  --masaq-background: #FFFFFF;
  --masaq-background-alt: #F8F9FA;
}
```

This approach:
- Maintains consistency with the existing color system
- Provides automatic Tailwind integration via `@theme inline`
- Supports both light and dark mode variants
- Enables CSS custom property performance benefits

### Service Model

```typescript
interface Service {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
  features: string[];
  featuresAr: string[];
}
```

### Process Step Model

```typescript
interface ProcessStep {
  step: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property Reflection

After analyzing all acceptance criteria, several properties can be consolidated to eliminate redundancy:

- Animation properties (1.2, 2.2, 3.3, 4.2, 5.5, 7.1, 7.2) can be combined into comprehensive animation behavior properties
- Localization properties (2.3, 4.4, 6.1, 6.2, 6.4, 6.5) can be consolidated into language switching and RTL support properties
- Responsive design properties (1.4, 4.5, 8.1, 8.2, 8.5) can be combined into comprehensive responsive behavior properties
- Image optimization properties (1.5, 3.5, 8.3) can be consolidated into a single image loading property

**Property 1: Hero section content display**
*For any* page load, the hero section should contain the company name "مساق الأعمار", a tagline, and a primary call-to-action button
**Validates: Requirements 1.1**

**Property 2: Animation engine behavior**
*For any* page element with animation classes, when the element becomes visible or is interacted with, animation transitions should be applied smoothly without flickering
**Validates: Requirements 1.2, 2.2, 3.3, 4.2, 5.5, 7.1, 7.2, 7.5**

**Property 3: Brand color consistency**
*For any* UI element that should use brand colors, the primary color #051F35 should be applied consistently across all components and breakpoints
**Validates: Requirements 1.3, 8.5**

**Property 4: Responsive layout behavior**
*For any* viewport size, all page elements should maintain proper visual hierarchy, readability, and touch targets appropriate for the device type
**Validates: Requirements 1.4, 4.5, 8.1, 8.2**

**Property 5: Image optimization**
*For any* image element, the Image_Optimizer should load images with proper dimensions, optimization attributes, and without causing layout shifts
**Validates: Requirements 1.5, 3.5, 8.3**

**Property 6: About section content display**
*For any* page load, the about section should contain company story, methodology, and quality commitment content with construction/architecture themed visuals
**Validates: Requirements 2.1, 2.4**

**Property 7: Language localization**
*For any* language selection (Arabic/English), all content should display in the selected language with appropriate text direction (RTL for Arabic, LTR for English)
**Validates: Requirements 2.3, 2.5, 4.4, 6.1, 6.2, 6.4, 6.5**

**Property 8: Services section structure**
*For any* page load, the services section should display exactly four service categories: architectural design, structural work, interior finishing, and turnkey projects, each with descriptive content and visual elements
**Validates: Requirements 3.1, 3.2**

**Property 9: Interactive element feedback**
*For any* interactive element (buttons, links, cards), hover and active states should provide immediate visual feedback with smooth transitions
**Validates: Requirements 3.4, 7.2**

**Property 10: Process workflow display**
*For any* page load, the process section should display exactly five sequential steps with visual indicators and proper timing for animations
**Validates: Requirements 4.1, 4.3**

**Property 11: Contact information display**
*For any* page load, the contact section should display phone number (0507005801), email (<info@masaq.com>), location (Jeddah), and social media links (Instagram: masaq.al, TikTok: .masaq) with clickable functionality
**Validates: Requirements 5.1, 5.2, 5.3**

**Property 12: WhatsApp integration**
*For any* WhatsApp contact link, clicking should open WhatsApp with a properly formatted URL containing the phone number and pre-filled message
**Validates: Requirements 5.4**

**Property 13: Language switching state preservation**
*For any* language switch action, the user's current scroll position and page state should be maintained after the language change
**Validates: Requirements 6.3**

**Property 14: Animation accessibility**
*For any* user with reduced motion preferences enabled, animations should be disabled or significantly reduced while maintaining functionality
**Validates: Requirements 7.3**

**Property 15: Animation coordination**
*For any* section with multiple animated elements, animations should have appropriate staggered timing to avoid overwhelming the user
**Validates: Requirements 7.4**

**Property 16: Gallery section display**
*For any* page load, the gallery section should display a curated selection of project images with proper optimization and responsive layout
**Validates: Requirements 8.1, 8.2**

**Property 17: Gallery image optimization**
*For any* gallery image, the Image_Optimizer should load images with appropriate dimensions and lazy loading without causing layout shifts
**Validates: Requirements 8.2, 9.3**

**Property 18: Gallery interaction**
*For any* gallery image interaction, the system should provide smooth viewing functionality with proper transitions and accessibility
**Validates: Requirements 8.3**

## Error Handling

### Animation Failures

- **Fallback States**: If animations fail to load, ensure all elements are visible in their final state
- **Performance Degradation**: Reduce animation complexity on lower-performance devices
- **Motion Sensitivity**: Respect `prefers-reduced-motion` media query

### Image Loading Failures

- **Placeholder Images**: Display appropriate placeholders while images load
- **Alt Text**: Provide meaningful alt text for all images
- **Lazy Loading**: Implement intersection observer for performance

### Localization Errors

- **Fallback Language**: Default to English if Arabic translations are missing
- **RTL Layout**: Ensure RTL styles don't break on unsupported browsers
- **Font Loading**: Provide fallback fonts for Arabic typography

### Responsive Design Issues

- **Breakpoint Failures**: Ensure content remains accessible at all screen sizes
- **Touch Targets**: Maintain minimum 44px touch targets on mobile
- **Overflow Handling**: Prevent horizontal scrolling on mobile devices

### Contact Integration Failures

- **Link Validation**: Ensure all contact links are properly formatted
- **WhatsApp Fallback**: Provide alternative contact methods if WhatsApp fails
- **Social Media**: Handle cases where social media platforms are blocked

## Testing Strategy

### Dual Testing Approach

The testing strategy combines unit testing and property-based testing to ensure comprehensive coverage:

**Unit Testing:**

- Test specific examples of component rendering
- Verify contact information display accuracy
- Test language switching functionality
- Validate responsive breakpoint behavior
- Test animation trigger conditions

**Property-Based Testing:**

- Use **React Testing Library** with **@fast-check/jest** for property-based testing
- Configure each property-based test to run a minimum of 100 iterations
- Test universal properties across different viewport sizes, languages, and user interactions
- Verify animation behavior across various timing scenarios
- Test localization with different content lengths and character sets

**Testing Framework Configuration:**

- **Unit Tests**: Jest + React Testing Library + @testing-library/jest-dom
- **Property Tests**: @fast-check/jest for generating test cases
- **Visual Tests**: Storybook for component documentation and visual regression
- **E2E Tests**: Playwright for full user journey testing

**Property-Based Test Requirements:**

- Each property-based test must be tagged with: **Feature: masaq-landing-page, Property {number}: {property_text}**
- Each test must reference the corresponding correctness property from this design document
- Tests must generate realistic data for components (viewport sizes, content variations, user interactions)
- Animation tests must verify both presence of animation classes and final state stability
