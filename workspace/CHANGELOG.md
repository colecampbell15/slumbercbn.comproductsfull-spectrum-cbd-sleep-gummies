<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>

## 2026-03-22 — Remove FooterDisclosure from Footer
- Removed `<FooterDisclosure />` from `src/sections/Footer/index.tsx`
- Component file `FooterDisclosure.tsx` still exists but is no longer rendered

## 2026-03-22 — Dr. White Brand Overhaul + marquee CSS fix
- Fixed `tailwind.css` missing `@tailwind base;` at top — marquee keyframe now injected correctly after utilities
- Added `animate-marquee` to `tailwind.config.js` keyframes/animation
- Updated `AnnouncementBar` bg to purple gradient; `NavbarMenu` nav links rebranded to Dr.White (Shop All, Bundles, Results, Reviews + "Shop Now" CTA button with pulse-ring)
- Rebuilt `Main/index.tsx` to only render Dr.White–relevant sections; removed SleepStudy, Experts, Video, Press, Dosage, RelatedProducts, ScrollingImages
- Created `SocialProofBar` (50K customers, 4.8 stars, 10 shades, 30-day guarantee + press logos)
- Created `BeforeAfterSection` (3 customer before/after cards, promo code nudge, CTA)
- Key files: `tailwind.css`, `tailwind.config.js`, `src/sections/Main/index.tsx`, `src/sections/MarqueeSection/index.tsx`, `src/sections/Header/components/NavbarMenu.tsx`, `src/sections/SocialProofBar/index.tsx`, `src/sections/BeforeAfterSection/index.tsx`

</changelog>
