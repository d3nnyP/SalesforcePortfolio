# Portfolio Website Redesign Plan - 2025 Modern Design

## Overview

Complete redesign of the portfolio website with a modern 2025 aesthetic, centered around Salesforce blue color scheme with contemporary design elements.

---

## Phase 1: Foundation & Design System

### 1.1 Color Palette Setup

- [x] Create CSS custom properties (variables) for Salesforce blue color scheme
  - [x] Primary Salesforce Blue: `#0176D3`
  - [x] Dark Blue: `#014486` (for depth and contrast)
  - [x] Light Blue: `#E8F4FD` (for backgrounds)
  - [x] Accent Cyan: `#00A1E0` (for highlights and CTAs)
  - [x] Neutral Light Gray: `#F3F2F2`
  - [x] Neutral Medium Gray: `#706E6B`
  - [x] Dark Text: `#181818`
  - [x] White: `#FFFFFF`
- [x] Define gradient color combinations
  - [x] Primary gradient: Blue to Cyan (`#0176D3` → `#00A1E0`)
  - [x] Subtle gradient: Light Blue to White (`#E8F4FD` → `#FFFFFF`)
  - [x] Dark gradient: Dark Blue to Blue (`#014486` → `#0176D3`)

### 1.2 Typography System

- [x] Define font hierarchy
  - [x] Primary heading (H1): Large, bold, modern sans-serif
  - [x] Secondary heading (H2): Medium, semi-bold
  - [x] Body text: Readable size (16-18px), comfortable line-height
  - [x] Small text: 14px for captions and metadata
- [x] Set font families (Salesforce Sans or system fonts)
- [x] Define font weights and line heights

### 1.3 Spacing & Layout System

- [x] Define spacing scale (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- [x] Set max-width containers (1200px for desktop)
- [x] Define section padding standards
- [x] Set consistent border-radius values (8px, 12px, 16px)

---

## Phase 2: Global Styles & Base Components

### 2.1 Global CSS Variables

- [x] Create shared CSS file or add to each component
- [x] Implement color variables
- [x] Implement spacing variables
- [x] Implement shadow variables (for depth)
- [x] Implement transition/animation variables

### 2.2 Base Styles

- [x] Remove heavy borders (replace with subtle shadows) - _Ready to apply in components_
- [x] Update box-sizing to border-box globally
- [x] Set smooth scroll behavior
- [x] Define default transitions for interactive elements
- [x] Remove flat colors, add depth with gradients - _Applied to contactMeButton, ready for other components_

### 2.3 Button Component Redesign

- [x] Modern gradient backgrounds
- [x] Smooth hover transitions
- [x] Modern shadow effects
- [x] Rounded corners (8-12px)
- [x] Press/active state animations
- [x] Update `contactMeButton` component

---

## Phase 3: Navigation & Header

### 3.1 Navigation Menu (`navMenu`)

- [ ] Sticky header implementation
- [ ] Glassmorphism effect (frosted glass with backdrop blur)
- [ ] Smooth hover states for links
- [ ] Better spacing and padding
- [ ] Active state indicators
- [ ] Mobile menu improvements
- [ ] Remove old commented styles

---

## Phase 4: Hero Section

### 4.1 Hero Component (`hero`)

- [ ] Full-width gradient background (blue to cyan)
- [ ] Animated text entrance effects
- [ ] Modern CTA button styling
- [ ] Improved image presentation
- [ ] Better responsive layout
- [ ] Add subtle animations (fade-in, slide-up)

---

## Phase 5: Content Sections

### 5.1 About Me Section (`aboutMe`)

- [ ] Remove heavy black borders
- [ ] Add subtle card shadow
- [ ] Improve image styling (rounded, soft shadow)
- [ ] Better text container spacing
- [ ] Add subtle background gradient
- [ ] Improve typography hierarchy

### 5.2 Projects Section (`projects`)

- [ ] Glassmorphic project cards
- [ ] Hover elevation effects
- [ ] Smooth image transitions
- [ ] Modern card shadows
- [ ] Better spacing between cards
- [ ] Improved responsive grid
- [ ] Update link button styles (gradient, modern)

### 5.3 Qualifications Section (`qualifications`)

- [ ] Modern card design
- [ ] Glassmorphism effects
- [ ] Smooth hover interactions
- [ ] Better visual hierarchy

### 5.4 Highlights Cards (`highlightsCards`)

- [ ] Modern card styling
- [ ] Gradient accents
- [ ] Hover effects
- [ ] Better spacing

---

## Phase 6: Blog Components

### 6.1 Blog Post Components

- [ ] `portfolioSiteBlog` - Modern styling
- [ ] `talentStackerProjectBlog` - Update slideshow styling
- [ ] `consultingLWCBlog` - Modern card design
- [ ] `bigYearTrackerBlog` - Consistent styling
- [ ] Remove gray backgrounds, use modern cards
- [ ] Update content containers with glassmorphism
- [ ] Improve typography in blog posts

---

## Phase 7: Footer

### 7.1 Footer Component (`footer`)

- [ ] Modern styling with gradient or subtle background
- [ ] Better spacing and typography
- [ ] Social links styling (if applicable)
- [ ] Remove commented code

---

## Phase 8: Interactive Elements & Animations

### 8.1 Micro-interactions

- [ ] Button press animations
- [ ] Card hover elevation
- [ ] Link hover effects
- [ ] Image hover transitions
- [ ] Smooth scroll-triggered reveals

### 8.2 Animations

- [ ] Fade-in animations for sections
- [ ] Slide-up animations for content
- [ ] Smooth transitions (0.3s ease)
- [ ] Loading states (if applicable)

---

## Phase 9: Responsive Design

### 9.1 Mobile Optimization

- [ ] Review all breakpoints
- [ ] Improve mobile navigation
- [ ] Optimize card layouts for mobile
- [ ] Better touch targets (44px minimum)
- [ ] Test on various screen sizes

### 9.2 Tablet Optimization

- [ ] Optimize layouts for tablet viewports
- [ ] Adjust spacing for medium screens
- [ ] Test grid layouts

---

## Phase 10: Advanced Features (Optional)

### 10.1 Dark Mode Support

- [ ] Create dark mode color variables
- [ ] Implement theme toggle (if desired)
- [ ] Test dark mode on all components

### 10.2 Performance Optimization

- [ ] Optimize animations (use transform/opacity)
- [ ] Lazy load images
- [ ] Minimize CSS
- [ ] Test performance metrics

---

## Implementation Order Summary

1. **Phase 1**: Foundation (Color palette, Typography, Spacing)
2. **Phase 2**: Global Styles & Base Components
3. **Phase 3**: Navigation
4. **Phase 4**: Hero Section
5. **Phase 5**: Content Sections (About Me, Projects, Qualifications, Highlights)
6. **Phase 6**: Blog Components
7. **Phase 7**: Footer
8. **Phase 8**: Interactive Elements & Animations
9. **Phase 9**: Responsive Design
10. **Phase 10**: Advanced Features (Optional)

---

## Design Principles

- **Modern & Clean**: Remove heavy borders, use subtle shadows
- **Salesforce Blue**: Consistent color scheme throughout
- **Glassmorphism**: Frosted glass effects for cards
- **Smooth Animations**: All interactions should feel fluid
- **Generous Whitespace**: Let content breathe
- **Mobile-First**: Ensure great experience on all devices
- **Accessibility**: Maintain contrast ratios and readable fonts

---

## Notes

- All changes should be tested in Salesforce Experience Cloud
- Maintain backward compatibility where possible
- Use CSS custom properties for easy theme adjustments
- Document any breaking changes
- Test all components after styling updates
