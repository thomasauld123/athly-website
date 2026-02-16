# Athly Design System

## Typography
- **Headings**: Space Grotesk — modern geometric grotesk, tight tracking (-0.02em), strong weight (600)
- **Body**: Inter — highly readable, variable font, optimized for screen
- **Mono**: JetBrains Mono — for code/metrics

### Scale
- Display: 4.5rem / 72px (hero)
- H1: 3rem / 48px
- H2: 2.25rem / 36px
- H3: 1.5rem / 24px
- H4: 1.25rem / 20px
- Body: 1rem / 16px
- Small: 0.875rem / 14px
- Caption: 0.75rem / 12px

## Colors
- **Base light**: Stone-50 (#fafaf9) background, Stone-900 (#1c1917) foreground
- **Base dark**: Stone-950 (#0c0a09) background, Stone-50 (#fafaf9) foreground
- **Accent**: Amber-700 (#b45309) — warm, distinctive, not generic startup blue
- **Surfaces**: White/Stone-900 cards, Stone-100/Stone-800 raised areas
- **Borders**: Stone-200/Stone-800 default, Stone-300/Stone-700 strong

## Spacing
- Section padding: 96px vertical (py-24)
- Container: max-w-7xl (1280px), px-6 mobile, px-8 desktop
- Component gaps: 8px (tight), 16px (default), 24px (relaxed), 48px (section)
- Grid: 12-column conceptual, implemented via Tailwind grid

## Motion (Framer Motion)
- **Reveal**: fade up 20px, 500ms ease-out, stagger 100ms
- **Hover**: scale 1.02, 150ms ease-out
- **Page transition**: fade 200ms
- **Parallax**: max 30px offset, scroll-linked, very subtle
- **Rule**: No animation > 600ms. No bounce. No overshoot.

## Components
- Border radius: 8px (cards), 6px (buttons), 12px (large containers)
- Shadows: subtle (0 1px 3px rgba(0,0,0,0.04)), medium (0 4px 12px rgba(0,0,0,0.06))
- Borders: 1px solid, default border color
- Hover: border color strengthens, slight lift on cards
