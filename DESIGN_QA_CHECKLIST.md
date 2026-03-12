# Design QA Checklist

## How to run
1. `npm install`
2. `npm run dev`
3. Open browser devtools responsive mode.
4. Validate widths: `360`, `390`, `768`, `1024`, `1280`, `1440`.

## Global checks
- [ ] No horizontal scroll at any breakpoint.
- [ ] Dark palette remains consistent across sections and hover states.
- [ ] Typography hierarchy is clear: hero > section titles > card titles > body.
- [ ] Focus ring is visible on nav, project cards, CTA buttons and footer links.
- [ ] Reduced motion mode keeps reveal animation and navigation usable.

## Navbar
- [ ] Fixed navbar does not overlap section titles after anchor navigation.
- [ ] Active section highlight updates while scrolling.
- [ ] Mobile menu opens and closes via button, overlay, `Esc` and desktop resize.
- [ ] Mobile menu locks background scroll.
- [ ] Main WhatsApp CTA remains visible and easy to tap.

## Hero
- [ ] Name, role and main value proposition are clear above the fold.
- [ ] Portrait keeps `4:5` framing without distortion.
- [ ] Primary and secondary CTAs keep minimum touch target size.
- [ ] Offer chips wrap cleanly without breaking layout.

## Projects
- [ ] Grid uses 1 column on mobile, 2 on tablet, 3 on desktop and 4 only on wide screens.
- [ ] Project covers keep `16:10` ratio with `object-cover`.
- [ ] Hover animation is subtle and does not shift surrounding cards.
- [ ] Cards without external URL still render with the same height and spacing.
- [ ] Adding one more project entry in `src/data/projects.ts` does not require layout changes.

## Services and Differentials
- [ ] Services section keeps exactly 3 cards and preserves equal height feel.
- [ ] Differentials section keeps 4 compact cards with comfortable spacing.
- [ ] Titles and descriptions stay readable on narrow mobile widths.

## CTA and Footer
- [ ] Final CTA is visually stronger than secondary sections, but does not overpower hero.
- [ ] WhatsApp button in CTA remains full-width on mobile and compact on larger screens.
- [ ] Footer stacks cleanly on mobile and aligns in one row on larger screens.
- [ ] Floating WhatsApp button stays circular on mobile and pill-shaped on desktop.

## Technical validation
- [ ] `npm run lint` passes.
- [ ] `npm run typecheck` passes.
- [ ] `npm run build` passes.
