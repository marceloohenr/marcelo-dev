# Design QA Checklist

## How to run
1. `npm install`
2. `npm run dev`
3. Open browser devtools responsive mode.
4. Validate each section at widths: `360`, `390`, `768`, `1280`, `1440`.

## Global checks
- [ ] No horizontal scroll at any breakpoint.
- [ ] Navbar remains fixed and does not overlap section titles after anchor navigation.
- [ ] Main CTA hierarchy: WhatsApp button is visually primary in Hero, Navbar and CTA section.
- [ ] Typography hierarchy is consistent: title > subtitle > body > metadata.
- [ ] Focus ring appears clearly on all interactive elements when using keyboard only.
- [ ] `Tab` order is logical across navbar, content and footer.
- [ ] Reduced motion mode (`prefers-reduced-motion`) keeps navigation usable and readable.

## Navbar and navigation
- [ ] Active section highlight updates while scrolling.
- [ ] Clicking menu items updates URL hash and scrolls to correct section.
- [ ] Mobile menu closes on:
  - [ ] section click
  - [ ] outside overlay click
  - [ ] `Esc`
  - [ ] resize to desktop
- [ ] While mobile menu is open, background page does not scroll.

## Hero
- [ ] Avatar loads sharp but not oversized on mobile.
- [ ] Title and subtitle never wrap awkwardly (no orphan words in very small widths).
- [ ] Primary and secondary CTA buttons align and keep minimum tap target size.

## Problem, Projects, Services, Differentials, About
- [ ] Section spacing feels balanced between mobile and desktop.
- [ ] Cards have consistent corner radius, border contrast and hover behavior.
- [ ] Project cards keep action link aligned near bottom despite different text sizes.
- [ ] Differentials grid does not look cramped at `1280` and `1440`.

## CTA section
- [ ] CTA title is emphasized but does not visually overpower Hero.
- [ ] WhatsApp CTA remains primary relative to secondary action.

## Contact
- [ ] Contact cards are keyboard focusable and focus-visible is clear.
- [ ] Form blocks submit when fields contain only spaces.
- [ ] Form submit opens WhatsApp with trimmed content.
- [ ] Input autofill works for `name` and `email`.

## Footer and floating WhatsApp
- [ ] Footer icon links have visible hover and focus states.
- [ ] Floating WhatsApp button does not overlap critical content.
- [ ] Floating button respects safe area on mobile devices.

## Performance sanity
- [ ] Hero avatar loads using responsive `srcset` assets.
- [ ] No obvious layout shifts during first render.
- [ ] Build passes: `npm run build`.

## Final acceptance criteria
- [ ] `npm run lint` passes.
- [ ] `npm run typecheck` passes.
- [ ] `npm run build` passes.
- [ ] All checklist items above validated at required breakpoints.
