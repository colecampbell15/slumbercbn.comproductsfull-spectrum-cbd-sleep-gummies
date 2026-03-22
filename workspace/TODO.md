<instructions>
This file powers chat suggestion chips. Keep it focused and actionable.

# Be proactive
- Suggest ideas and things the user might want to add *soon*. 
- Important things the user might be overlooking (SEO, more features, bug fixes). 
- Look specifically for bugs and edge cases the user might be missing (e.g., what if no user has logged in).

# Rules
- Each task must be wrapped in a "<todo id="todo-id">" and "</todo>" tag pair.
- Inside each <todo> block:
  - First line: title (required)
  - Second line: description (optional)
- The id must be a short stable identifier for the task and must not change when you rewrite the title or description.
- You should proactively review this file after each response, even if the user did not explicitly ask, maintain it if there were meaningful changes (new requirement, task completion, reprioritization, or stale task cleanup).
- Think BIG: suggest ambitious features, UX improvements, technical enhancements, and creative possibilities.
- Balance quick wins with transformative ideas — include both incremental improvements and bold new features.
- Aim for 3-5 high-impact tasks that would genuinely excite the user.
- Tasks should be specific enough to act on, but visionary enough to inspire.
- Remove or rewrite stale tasks when completed, obsolete, or clearly lower-priority than current work.
- Re-rank by impact and user value, not just urgency.
- Draw inspiration from the project's existing features — what would make them 10x better?
- Don't be afraid to suggest features the user hasn't explicitly mentioned.
</instructions>

<todo id="sticky-atc">
Add sticky Add-to-Cart bar
A fixed bottom bar on mobile that appears when scrolling past the product — shows price + "Add to Cart" button for high conversion.
</todo>

<todo id="shade-quiz">
Build a "Find Your Shade" quiz
3-question interactive quiz (teeth sensitivity, stain level, flavor preference) that recommends the best variant — drives engagement and reduces choice paralysis.
</todo>

<todo id="ugc-video-section">
Add UGC/TikTok-style video testimonial section
Embed 3–6 short looping video clips of customers showing their whitening results — social proof is the highest converter.
</todo>

<todo id="countdown-timer">
Add urgency countdown timer to pricing plans
"Limited offer ends in X:XX:XX" timer above the pricing grid drives urgency and FOMO.
</todo>

<todo id="seo-meta">
Add SEO meta tags and Open Graph to index.html
Title, description, og:image with Dr.White branding for shareable/searchable presence.
</todo>
