---
name: website-conversion-design
description: Guidance for designing, writing, and reviewing high-converting websites, landing pages, pricing/services pages, and sales funnels — across SaaS, e-commerce, local service businesses, agencies/consultancies, marketplaces, professional services, nonprofits, and content/membership sites. Covers universal UX and messaging principles, the psychology of presenting options (anchoring, decoy effect, center-stage effect, value-first framing), the 5-part offer-page funnel, and business-type-specific adaptations. Use this skill whenever the user is building or revising a homepage, landing page, pricing page, services page, or product page, or asks how to increase conversions, signups, sales, leads, or bookings — even if they don't use the word "conversion" explicitly (e.g. "make my site sell better," "review my pricing page," "help me write my homepage").
---

# Website Conversion Design

## Core principle

Traffic is rarely the bottleneck — clarity and decision architecture are. A high-converting page does two things simultaneously: it removes friction (so visitors *understand* the offer fast) and it shapes the decision (so visitors *choose* the option that's best for both them and the business). Everything below serves one of those two jobs.

This skill generalizes patterns originally documented for SaaS pricing pages so they apply to any business model. Most of these patterns were proven on subscription software, but the underlying psychology — anchoring, decoys, center-stage placement, loss aversion — is about how humans compare options, not about software specifically. Translate the *mechanism*, not the literal example.

## How to use this skill

1. **Identify the business type and the page type.** A SaaS pricing page, a contractor's homepage, and a nonprofit donation page need the same underlying psychology but different surface treatment. Check `references/business-types.md` for the specific vertical before finalizing recommendations.
2. **Apply the universal principles** (Part 1) to any page — these hold regardless of industry.
3. **Apply the choice-architecture principles** (Part 2) anywhere the business presents more than one option: pricing tiers, service packages, product bundles, membership levels, room/seat types, donation amounts, add-ons.
4. **Apply the 5-part funnel structure** (Part 3) to any page whose job is to convert a visitor into a lead, sale, or signup.
5. **Pull the business-type-specific notes** from `references/business-types.md` and translate the generic advice into that vertical's vocabulary (e.g., "pricing tiers" → "service packages" for a contractor, "subscription plans" → "membership levels" for a gym).
6. **Run the quick-win checklist** (Part 5) as a final pass.

When reviewing an existing page, work through the parts in order and flag gaps rather than rewriting everything — most pages are missing 2-3 specific elements, not all of them.

---

## Part 1 — Universal high-converting characteristics

These apply to virtually any website regardless of industry, audience, or price point.

### UI/UX

| Aspect | What makes it convert |
|---|---|
| Mobile-responsive design | Over half of traffic is typically mobile; layout must adapt cleanly across screen sizes |
| Visual hierarchy | Headline → supporting proof → CTA, understandable in 5 seconds or less |
| Whitespace | Generous margins/padding reduce cognitive load; avoid dense text blocks |
| Intuitive navigation | 5-7 primary menu items max; key info reachable in 3 clicks; sticky nav on long pages |
| Fast load speed | Target under 2.5s largest contentful paint; every extra second of delay measurably reduces conversions |
| Accessibility (WCAG 2.2) | Screen-reader compatibility, keyboard nav, sufficient contrast — legal requirement in many jurisdictions and expands addressable audience |
| Microinteractions | Real-time form validation, button states, loading indicators within ~100-300ms |

### Content & messaging

| Principle | How to apply it |
|---|---|
| Outcome-focused headlines | Lead with the problem solved, not company history or "About us" framing |
| Feature → benefit translation | Don't say "real-time analytics" — say "make faster decisions with live data" |
| Short sentences & paragraphs | One idea per sentence; scannable, not dense |
| Active voice | Action-driven language, not passive constructions |
| Real customer language | Use testimonials in the customer's actual words, not paraphrased marketing-speak |
| Outcomes before features | Show the result before explaining how you achieve it |
| Friction-reducing microcopy | "Get my free quote" beats "Submit"; add reassurance lines like "No spam, no obligation" |

### Layout & formatting

| Element | Best practice |
|---|---|
| F-pattern placement | Put CTAs and key info along the top and left, where eyes naturally scan first |
| Hero structure | Outcome headline → one-sentence clarification → supporting proof → primary CTA |
| Simplified forms | 5-7 fields max for initial conversion; collect more later (progressive profiling) |
| CTA repetition | Repeat the primary CTA after the value prop, after proof/testimonials, and at page end |
| Single goal per page | One primary action per page; dedicated landing pages often drop navigation entirely |
| Contrast | Dark-on-light (or vice versa) for buttons and headlines; nothing should require squinting |

### Presenting value

| Component | What works |
|---|---|
| Clear value proposition | Above the fold, answering "why should I care right now?" |
| Brand storytelling | Carried through headlines, visuals, and microcopy — not confined to an About page |
| Social proof | Specific numbers, named clients/customers, logos, case studies with real outcomes |
| Trust signals | Security badges, certifications, reviews, visible contact info |
| Urgency/scarcity (used honestly) | Real limited-time offers or genuine capacity limits — see Guardrails below before using these |

### Technical & analytics

| Requirement | Why it matters |
|---|---|
| Analytics integration | Behavior-flow and drop-off tracking (e.g. GA4-style tools, session recording) |
| A/B testing | Headlines typically produce the biggest lift; test before assuming |
| Funnel tracking | Identify the specific step where users drop off — fix that step first |

---

## Part 2 — The psychology of presenting options

Apply this anywhere the business shows more than one option side by side: pricing tiers, service packages, product bundles, membership levels, donation amounts, room/seat classes, add-on bundles. The mechanism is the same regardless of what's being compared.

### Center-stage effect
People disproportionately choose the middle option in a row of three, simply because it's in the middle and frames the extremes as "too little" or "too much." Put the option you most want chosen — usually the best-margin one that's still genuinely good for the customer — in the visual center, give it a slightly larger card or accent border, and label it clearly ("Most popular," "Best value," or better, something specific like "Chosen by 7 in 10 customers our size").

### Anchoring
Showing the most expensive or premium option first recalibrates what feels "reasonable." A $15,000/month enterprise tier shown before a $150/month tier makes the $150 option feel inexpensive by comparison, even though it would feel expensive on its own.

### The decoy effect
Add a third option that exists only to make the target option look obviously better — not to be chosen itself. A clean way to think about it:
- **Option A (decoy):** noticeably cheaper but missing something a real buyer would need
- **Option B (target):** the one you actually want chosen — visibly better value than A for a modest premium
- **Option C (anchor):** premium tier that makes B feel like the smart middle ground

This works for software tiers, but equally for a contractor's "basic / standard / premium" service packages, a restaurant's prix fixe options, or a nonprofit's suggested donation amounts.

### Value-first ordering
Leading with price makes people compare on price. Leading with what's included (features, scope, deliverables, support level) makes people compare on value, which generally pushes selection toward higher tiers. Put price lower in the visual hierarchy than the value differentiators.

### Framing larger commitments concretely
"Save 20%" is abstract. "$1,900/year — that's 2 months free" is concrete and tangible. The same logic applies to any larger commitment: bulk purchases, annual memberships, retainer agreements, season passes. Translate the discount into a specific, vivid benefit rather than a percentage.

### Bias reference table

| Bias | Mechanism | Where it applies beyond pricing |
|---|---|---|
| Center-stage effect | Middle position + visual emphasis | Service package tiers, donation amount buttons, product size options |
| Anchoring | First number seen recalibrates "normal" | Showing a premium service package before standard ones |
| Decoy effect | A dominated option makes another look obviously best | Bundle vs. à la carte pricing, course tier comparisons |
| Loss aversion | Framing what's lost by NOT upgrading hits harder than framing what's gained | "Lose access to X" messaging in churn-prevention or upgrade prompts |
| Compromise effect | Middle option reads as the "safe, smart" choice | Any 3-option comparison, not just pricing |
| Left-digit effect | $149 reads as meaningfully cheaper than $150 | Any priced item, donation suggestion, or service quote |

---

## Part 3 — The 5-part offer/services page funnel

This structure works for a SaaS pricing page, a consultant's services page, a contractor's homepage, or a nonprofit's "ways to give" page — the labels change, the structure doesn't.

| Section | Purpose | Generalized guidance |
|---|---|---|
| 1. The hook | State the problem immediately | Open with the visitor's pain point or goal, not your company's founding story |
| 2. Solution/process | Show benefits, not just features | Walk through stages (e.g. setup → delivery → ongoing support) so the visitor can picture working with you |
| 3. Trust/proof | Answer "why should I believe you?" | Concrete numbers, named clients/customers, before/after results, certifications, reviews |
| 4. The offer | Pricing/packages + clear next step | Present after value is established, not before — see Part 2 for how to structure the options |
| 5. Late-stage CTA | Capture visitors who are ready now | Repeat the CTA in the hero, mid-page, and at the bottom; don't make ready buyers hunt for it |

### Tactics for guiding choice on offer pages

| Tactic | What it looks like | Why it works |
|---|---|---|
| Interactive selector | A short "what do you need?" form that filters options down to the relevant 1-2 | Prevents overwhelm; guides visitors who don't know which option fits them |
| Role/segment-based paths | Separate entry points by customer type, industry, or use case | Lets each visitor see messaging tailored to them, which lifts relevance and conversion |
| Toggle between categories | Collapsible sections instead of one long scroll | Keeps the page navigable without forcing every visitor through every section |
| Visual overview above the fold | All offerings shown as icons/headers before any scrolling | Visitors see the full scope immediately instead of hunting for it |
| Live chat or instant contact option | A low-commitment way to ask a question | Captures hesitant visitors who would otherwise leave without converting |

---

## Part 4 — Business-type adaptations

The principles above are universal, but their *expression* varies a lot by business model. Before finalizing any recommendation, read the relevant section of `references/business-types.md`, which covers: SaaS/subscription, e-commerce/retail, local service businesses, agencies & consultancies, marketplaces, professional services, nonprofits, and content/membership sites. Each section translates "pricing tiers," "trust signals," and "the offer" into that vertical's actual vocabulary and gives realistic examples.

A quick gut-check before applying a tactic: if the business doesn't naturally have 2-3 comparable options (e.g. a single-service local business, a one-product e-commerce store), don't force a 3-tier pricing table onto it — instead apply the center-stage/anchoring logic to *add-ons*, *package sizes*, or *service levels* where they naturally exist, or skip Part 2 for that page and focus on Parts 1 and 3.

---

## Part 5 — Quick-win checklist

| Action | Implementation | Notes |
|---|---|---|
| Lead with the visitor's problem, not your company | Rewrite the hero headline as an outcome statement | Universal — start here |
| Put the preferred option in the visual center | If 3+ options exist, reorder so the target is in the middle | Skip if the business has only one option |
| Add a specific, credible badge — not just "Popular" | "Chosen by 73% of teams your size" beats generic "Most Popular" | Needs real data — don't fabricate a number |
| Lead comparisons with value, not price | Move price lower in the card; lead with what's included | Especially high-impact for considered purchases |
| Frame larger commitments concretely | "$1,900/year — 2 months free" beats "Save 20%" | Applies to memberships, retainers, bulk orders |
| Place testimonials near the CTA, not just at the top | Proof works best right where the decision is being made | |
| Repeat the CTA at hero, mid-page, and bottom | Don't make a ready buyer scroll to find it | |
| Use concrete pricing (e.g. $149 vs $150) | Small framing effect, easy to implement | Low priority but free |
| A/B test the headline before anything else | Headlines typically produce the largest single lift | |

---

## Guardrails

Persuasion and dark patterns are not the same thing. Use these tactics to make a genuinely good offer easier to understand and choose — not to manufacture false scarcity, fake countdown timers, or misleading default selections. A few rules of thumb:

- Only use urgency/scarcity messaging ("3 spots left," "offer ends Friday") when it's literally true.
- Badges like "Most Popular" or "Chosen by X%" should reflect real data, not be invented for effect.
- The decoy and anchoring tactics should make a *genuinely good* option look good by comparison — they shouldn't be used to push visitors toward an option that's bad for them.
- Loss-aversion framing should describe real consequences, not invented ones.

These aren't just ethical guardrails — fabricated urgency and obviously fake social proof are increasingly recognized by visitors and regulators alike, and they erode the trust signals the rest of this skill is built to establish.