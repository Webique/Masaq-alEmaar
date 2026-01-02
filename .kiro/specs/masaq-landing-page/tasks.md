# Implementation Plan

- [x] 1. Update site configuration and branding
  - Replace law firm branding with Masaq Al-Amaar company information in site config
  - Update CSS custom properties in globals.css to use #051F35 as primary brand color
  - Replace existing law firm color variables with Masaq construction company colors
  - Configure contact information (phone: 0507005801, email: <info@masaq.com>, location: Jeddah)
  - Add social media links (Instagram: masaq.al, TikTok: .masaq)
  - _Requirements: 5.1, 5.3_

- [x] 2. Create multilingual content structure
  - Update Arabic and English locale files with Masaq Al-Amaar content
  - Add company story, services descriptions, and process steps in both languages
  - Implement RTL support for Arabic content layout
  - _Requirements: 2.1, 2.3, 2.5, 6.1, 6.2, 6.4_

- [ ]* 2.1 Write property test for language localization
  - **Property 7: Language localization**
  - **Validates: Requirements 2.3, 2.5, 4.4, 6.1, 6.2, 6.4, 6.5**

- [x] 3. Build hero section component
  - Create hero section with company name, tagline, and primary CTA
  - Implement background styling using client-provided images from `/public/images/`
  - Add smooth entrance animations using motion/react-m
  - Ensure responsive design across all device sizes
  - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [ ]* 3.1 Write property test for hero section content
  - **Property 1: Hero section content display**
  - **Validates: Requirements 1.1**

- [ ]* 3.2 Write property test for animation engine behavior
  - **Property 2: Animation engine behavior**
  - **Validates: Requirements 1.2, 2.2, 3.3, 4.2, 5.5, 7.1, 7.2, 7.5**

- [ ]* 3.3 Write property test for brand color consistency
  - **Property 3: Brand color consistency**
  - **Validates: Requirements 1.3, 8.5**

- [ ]* 3.4 Write property test for responsive layout behavior
  - **Property 4: Responsive layout behavior**
  - **Validates: Requirements 1.4, 4.5, 8.1, 8.2**

- [x] 4. Implement about section
  - Create about section with company story and methodology content
  - Add construction/architecture themed visual elements using client images
  - Implement scroll-triggered animations for text and visuals
  - Ensure proper localization for both Arabic and English
  - _Requirements: 2.1, 2.2, 2.4_

- [ ]* 4.1 Write property test for about section content
  - **Property 6: About section content display**
  - **Validates: Requirements 2.1, 2.4**

- [x] 5. Build services section
  - Create four service cards: architectural design, structural work, interior finishing, turnkey projects
  - Add descriptive content, icons, and hover interactions for each service
  - Use client-provided images to showcase each service type
  - Implement staggered entrance animations for service cards
  - Optimize service-related images using next-image-export-optimizer
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ]* 5.1 Write property test for services section structure
  - **Property 8: Services section structure**
  - **Validates: Requirements 3.1, 3.2**

- [ ]* 5.2 Write property test for interactive element feedback
  - **Property 9: Interactive element feedback**
  - **Validates: Requirements 3.4, 7.2**

- [ ]* 5.3 Write property test for image optimization
  - **Property 5: Image optimization**
  - **Validates: Requirements 1.5, 3.5, 8.3**

- [x] 6. Create gallery section
  - Build project showcase gallery using client-provided images from `/public/images/` directory
  - Implement responsive masonry or grid layout for optimal image display
  - Add image lightbox/modal functionality for detailed viewing
  - Organize images by project categories (residential, commercial, interior, structural)
  - Implement lazy loading and smooth entrance animations for gallery images
  - Ensure proper image optimization using next-image-export-optimizer
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [ ]* 6.1 Write property test for gallery section display
  - **Property 16: Gallery section display**
  - **Validates: Requirements 8.1, 8.2**

- [ ]* 6.2 Write property test for gallery image optimization
  - **Property 17: Gallery image optimization**
  - **Validates: Requirements 8.2, 9.3**

- [ ]* 6.3 Write property test for gallery interaction
  - **Property 18: Gallery interaction**
  - **Validates: Requirements 8.3**

- [x] 7. Create process workflow section
  - Build five-step process visualization: consultation, survey, design, implementation, delivery
  - Add visual indicators (numbers, arrows, progress elements)
  - Implement sequential animation timing for workflow steps
  - Adapt layout for mobile devices with vertical timeline
  - _Requirements: 4.1, 4.2, 4.3, 4.5_

- [ ]* 7.1 Write property test for process workflow display
  - **Property 10: Process workflow display**
  - **Validates: Requirements 4.1, 4.3**

- [x] 8. Implement contact section
  - Create contact information display with phone, email, location
  - Add clickable links for phone, WhatsApp, and email
  - Include social media links with proper icons
  - Implement WhatsApp integration with pre-filled message
  - Add smooth entrance animations for contact cards
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ]* 8.1 Write property test for contact information display
  - **Property 11: Contact information display**
  - **Validates: Requirements 5.1, 5.2, 5.3**

- [ ]* 8.2 Write property test for WhatsApp integration
  - **Property 12: WhatsApp integration**
  - **Validates: Requirements 5.4**

- [x] 9. Enhance header and footer components
  - Update header navigation with appropriate menu items
  - Implement language switcher with Arabic/English toggle
  - Update footer with company information and links
  - Ensure consistent branding across header and footer
  - _Requirements: 6.1, 6.2, 6.5_

- [ ]* 9.1 Write property test for language switching state preservation
  - **Property 13: Language switching state preservation**
  - **Validates: Requirements 6.3**

- [x] 10. Implement accessibility and animation features
  - Add support for reduced motion preferences
  - Implement animation coordination to avoid overwhelming users
  - Ensure proper focus management and keyboard navigation
  - Add ARIA labels and semantic HTML structure
  - _Requirements: 7.3, 7.4_

- [ ]* 10.1 Write property test for animation accessibility
  - **Property 14: Animation accessibility**
  - **Validates: Requirements 7.3**

- [ ]* 10.2 Write property test for animation coordination
  - **Property 15: Animation coordination**
  - **Validates: Requirements 7.4**

- [x] 11. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 12. Final optimization and polish
  - Optimize images and assets for production
  - Test responsive behavior across all breakpoints
  - Verify all animations work smoothly
  - Validate all contact links and integrations
  - Perform final accessibility audit
  - _Requirements: 9.1, 9.2, 9.3, 9.5_

- [-] 13. Final Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
