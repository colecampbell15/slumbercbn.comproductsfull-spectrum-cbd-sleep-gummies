<instructions>
This file will be automatically added to your context. 
It serves multiple purposes:
  1. Storing frequently used tools so you can use them without searching each time
  2. Recording the user's code style preferences (naming conventions, preferred libraries, etc.)
  3. Maintaining useful information about the codebase structure and organization
  4. Remembering tricky quirks from this codebase

When you spend time searching for certain configuration files, tricky code coupled dependencies, or other codebase information, add that to this CODER.md file so you can remember it for next time.
Keep entries sorted in DESC order (newest first) so recent knowledge stays in prompt context if the file is truncated.
</instructions>

<coder>

## Brand Colors
- Primary purple: `#5B2D8E`
- Purple gradient dark: `#3b1a6b`
- Purple gradient light: `#7c3aed`
- Use `style={{ background: "linear-gradient(135deg, #5B2D8E 0%, #7c3aed 100%)" }}` for buttons/CTAs

## Key Architecture
- `src/sections/Main/index.tsx` — controls which sections render on the page (simplified to Dr.White relevant sections only)
- `tailwind.config.js` — has `animate-marquee` keyframe; `tailwind.css` has raw `@keyframes marquee`, `fadeInUp`, `pulse-ring`
- `src/sections/ProductSection/components/MediaCarousel.tsx` — exports `VARIANT_COLORS` array used by `ProductInfo.tsx`
- Product image URL: `https://c.animaapp.com/mn211sd3lp4PsU/img/uploaded-asset-1774200567377-0.png`

## Variants
Classic White (#5B2D8E), Arctic Mint (#1a7bbf), Charcoal Ice (#2c2c2c), Rose Enamel (#c0306a)

## Pricing Plans
1 Box 7T $24.99 | 2 Box 14T $39.99 (free ship) | 3 Box 21T $54.99 (most popular) | 4 Box 28T $64.99 (best value)

## Promo
Code: CHECKOUT15 = 15% off | Free shipping at $39+

## Font
Body uses `font-pp_mori` (PP Mori). Inter also loaded as fallback.

## Padding convention
Mobile: `pl-[max(20px,50%_-_670px)]` | Desktop: `md:pl-[max(48px,50%_-_670px)]`

</coder>
