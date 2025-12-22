# Design System Usage Guide

## Overview

The design system CSS variables are now available globally across all LWC components. These variables can be used in any component's CSS file.

## How to Use

### In Component CSS Files

Simply reference the CSS custom properties using `var()`:

```css
.my-component {
  background-color: var(--sf-blue-primary);
  color: var(--color-text-primary);
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: var(--transition-all);
}
```

### Color Variables

```css
/* Primary Colors */
background-color: var(--sf-blue-primary); /* #0176D3 */
background-color: var(--sf-blue-dark); /* #014486 */
background-color: var(--sf-blue-light); /* #E8F4FD */
background-color: var(--sf-cyan-accent); /* #00A1E0 */

/* Neutral Colors */
background-color: var(--neutral-white); /* #FFFFFF */
background-color: var(--neutral-light-gray); /* #F3F2F2 */
color: var(--neutral-medium-gray); /* #706E6B */
color: var(--neutral-dark-text); /* #181818 */

/* Semantic Colors */
background-color: var(--color-background);
background-color: var(--color-background-alt);
color: var(--color-text-primary);
color: var(--color-text-secondary);
```

### Gradients

```css
/* Primary Gradient: Blue to Cyan */
background: var(--gradient-primary);

/* Subtle Gradient: Light Blue to White */
background: var(--gradient-subtle);

/* Dark Gradient: Dark Blue to Blue */
background: var(--gradient-dark);
```

### Typography

```css
/* Font Sizes */
font-size: var(--font-size-base); /* 16px */
font-size: var(--font-size-lg); /* 18px */
font-size: var(--font-size-xl); /* 20px */
font-size: var(--font-size-2xl); /* 24px */
font-size: var(--font-size-3xl); /* 30px */
font-size: var(--font-size-5xl); /* 48px */

/* Font Weights */
font-weight: var(--font-weight-normal); /* 400 */
font-weight: var(--font-weight-medium); /* 500 */
font-weight: var(--font-weight-semibold); /* 600 */
font-weight: var(--font-weight-bold); /* 700 */

/* Typography Scale (Pre-configured) */
font-size: var(--heading-1-size);
font-weight: var(--heading-1-weight);
line-height: var(--heading-1-line-height);
```

### Spacing

```css
/* Use spacing variables for consistent padding/margins */
padding: var(--spacing-4); /* 16px */
margin: var(--spacing-8); /* 32px */
gap: var(--spacing-6); /* 24px */

/* Section Spacing */
padding: var(--section-padding-y) var(--section-padding-x);
```

### Border Radius

```css
border-radius: var(--radius-sm); /* 6px */
border-radius: var(--radius-md); /* 8px */
border-radius: var(--radius-lg); /* 12px */
border-radius: var(--radius-xl); /* 16px */
border-radius: var(--radius-full); /* Full circle */
```

### Shadows

```css
/* Standard Shadows */
box-shadow: var(--shadow-sm);
box-shadow: var(--shadow-md);
box-shadow: var(--shadow-lg);
box-shadow: var(--shadow-xl);

/* Colored Shadows (for blue accents) */
box-shadow: var(--shadow-blue-sm);
box-shadow: var(--shadow-blue-md);
box-shadow: var(--shadow-blue-lg);
```

### Transitions

```css
/* Pre-configured Transitions */
transition: var(--transition-all);
transition: var(--transition-colors);
transition: var(--transition-transform);
transition: var(--transition-opacity);

/* Custom Duration */
transition: all var(--transition-base); /* 300ms */
transition: all var(--transition-fast); /* 150ms */
transition: all var(--transition-slow); /* 500ms */
```

### Glassmorphism

```css
/* Glassmorphic Card */
background: var(--glass-background);
backdrop-filter: var(--glass-backdrop-blur);
border: var(--glass-border);
```

### Layout

```css
/* Container */
max-width: var(--container-max-width); /* 1200px */
padding: 0 var(--container-padding); /* 0 16px */
```

## Example: Modern Card Component

```css
.modern-card {
  background: var(--glass-background);
  backdrop-filter: var(--glass-backdrop-blur);
  border: var(--glass-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-lg);
  transition: var(--transition-all);
}

.modern-card:hover {
  box-shadow: var(--shadow-xl);
  transform: translateY(-2px);
}

.modern-card h2 {
  font-size: var(--heading-2-size);
  font-weight: var(--heading-2-weight);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-4);
}

.modern-card p {
  font-size: var(--body-text-size);
  line-height: var(--body-text-line-height);
  color: var(--color-text-secondary);
}
```

## Example: Gradient Button

```css
.gradient-button {
  background: var(--gradient-primary);
  color: var(--neutral-white);
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-md);
  border: none;
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  box-shadow: var(--shadow-md);
  transition: var(--transition-all);
  cursor: pointer;
}

.gradient-button:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-1px);
}

.gradient-button:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}
```

## Notes

- All variables are defined on `:root`, so they're available globally
- Variables work across shadow DOM boundaries in LWC
- Use semantic color variables (`--color-text-primary`) for better theme support
- Spacing variables ensure consistent spacing throughout the site
- All transitions use ease timing for smooth animations
