# Crux Consulting — Design System

How the brand guide is implemented in this codebase. Tokens live in
[`src/app/globals.css`](src/app/globals.css) inside Tailwind v4's `@theme`
block — there is no `tailwind.config.ts`. Every token below is available as a
normal Tailwind utility (`--color-crux-blue` → `bg-crux-blue`, `text-crux-blue`,
`border-crux-blue`).

---

## Colour

### Brand

| Token | Hex | Role |
|---|---|---|
| `crux-blue` | `#0097CF` | Primary accent — buttons, links, rules, bullets |
| `crux-blue-light` | `#A6D3EC` | Sky tint — gradient stop, soft fills, accents on dark |
| `crux-blue-dark` | `#005789` | Alpine — pressed states, headings on light |
| `crux-navy` | `#002060` | Dark brand surface — bands, footer, sign-off |
| `crux-slate` | `#44546A` | Wordmark grey — headings, titles, body default |
| `crux-gray` | `#666666` | Secondary text, captions, footers |
| `crux-cloud` | `#E7E6E6` | Light warm grey section fills |

### Interaction

| Token | Hex | Role |
|---|---|---|
| `accent-hover` | `#0079AA` | Button/link hover |
| `accent-active` | `#005789` | Button/link pressed |
| `accent-soft` | `#E9F6FC` | Tinted callout, selected background |

### Status

| Token | Hex | Role |
|---|---|---|
| `success` | `#006B34` | Confirmations |
| `warning` | `#B7791F` | Warnings; also the testimonial star fill |
| `danger` | `#C8362C` | Form validation errors |
| `link` | `#0563C1` | Standalone links |

### Neutral ramp

`gray-25` → `gray-900` (`#FCFCFD` … `#101828`) for UI chrome: input borders,
hover fills, disabled states. `surface` (`#FFFFFF`) and `border-subtle`
(`#E4E7EC`) are the two aliases used most.

### Applying colour

- **Body text** defaults to `crux-slate`; secondary/supporting copy is `crux-gray`.
- **Headings on light** are `crux-slate`, never navy.
- **Dark bands** (hero, footer) use `crux-navy`; text on them is white or `white/80`.
- **On dark surfaces** use `crux-blue-light` for accents — `crux-blue` on navy
  is too low-contrast.
- Photo scrims are **neutral** (`gray-900/65`), never tinted, so images stay
  colour-accurate. Hero images are `grayscale`.

---

## Typography

Two families. **Playfair Display** — a high-contrast serif — carries the
headings as `--font-display`; **Jost** carries body and UI as `--font-sans`.
Both load via `next/font/google` in
[`src/app/layout.tsx`](src/app/layout.tsx).

Jost stands in for the brand face **Century Gothic** (licensed, Monotype) — a
Futura-derived Google font and the nearest free geometric match. To use the
real face, licence a Century Gothic webfont and swap the font import; no token
changes are needed.

An `h1`–`h4` element rule in `globals.css` applies `--font-display` globally,
so headings need no font class. Note that **Tailwind utilities outrank that
rule** — a `font-sans` or `uppercase` class on a heading will win. Headings are
**sentence case**; the all-caps treatment belongs to eyebrows, nav, labels, and
buttons only. Never title case.

| Token | Size (min → max) | Line-height | Weight | Treatment |
|---|---|---|---|---|
| `text-display` | 40 → 60px | 1.2 | 700 | Sentence case, serif |
| `text-h1` | 32 → 48px | 1.2 | 700 | Sentence case, serif |
| `text-h2` | 26 → 36px | 1.2 | 600 | Sentence case, serif |
| `text-h3` | 20 → 25px | 1.3 | 600 | Sentence case, serif |
| `text-h4` | 18px | 1.4 | 600 | Sentence case, serif |
| `text-base` | 16px | 1.55 | 400 | Body |
| `text-sm` | 14px | 1.5 | 400 | Table cells, captions |
| `text-xs` | 12px | 1.4 | 600 | Caption |
| `text-xxs` | 11px | 1.4 | 600 | Eyebrow, uppercase |

**Fluid scale:** `display` through `h3` are `clamp()`ed and scale continuously
between the sizes above — no breakpoint steps, so **don't pair them with
`sm:text-*` variants**, which would snap against the clamp. Each preferred
value mixes a `rem` term with `vw` so text still responds to browser zoom
(WCAG 1.4.4) — never make these `vw`-only. `h4` and everything below stay
fixed: fluid body copy fights the reader's browser default.

**Letter-spacing:** `tracking-caps` (0.08em) for all-caps eyebrows and small
labels; `tracking-wide` (0.04em) for uppercase UI labels and buttons; none for
headings or body.

**Figures:** metrics and tabular data use `tabular-nums` so columns align. The
`.tabular` helper class also switches to the mono stack — use it for data
tables, but not for large display numbers where it would override the heading
or body face.

---

## Radius

| Token | Value | Applied to |
|---|---|---|
| `rounded-sm` | 4px | Tags, small chips, swatches |
| `rounded-md` | 8px | Buttons, inputs, selects, icon buttons |
| `rounded-lg` | 12px | Cards, dialogs, media |
| `rounded-xl` | 16px | Large feature panels |
| `rounded-pill` | 999px | Badges, switches, carousel dots |

---

## Elevation

Shadows are low-spread and cool-neutral, built on `rgba(20, 25, 34, …)`.
Nothing is glowy and nothing is coloured.

`shadow-xs` · `shadow-sm` · `shadow-md` · `shadow-lg` · `shadow-xl`

Cards sit at `shadow-sm` at rest and lift to `shadow-md` on hover.

---

## Components

### Cards

White, 1px `border-subtle` hairline, `rounded-lg`, `shadow-sm` at rest.
Interactive cards lift on hover: `-translate-y-0.5` and `shadow-md`.

An optional 4px `crux-blue` stripe sits on the top edge of metric tiles
(`border-t-4 border-t-crux-blue`) — see
[`WhatWeDo.tsx`](src/components/sections/WhatWeDo.tsx).

### Headings

Headings are Playfair Display, sentence case, at the fluid sizes above.
Section headings carry a **5px `crux-blue` rule** beneath them (`h-1.25 w-16`).
[`SectionHeading`](src/components/ui/SectionHeading.tsx) does this automatically;
[`PageHero`](src/components/sections/PageHero.tsx) and
[`Mission`](src/components/sections/Mission.tsx) repeat it inline.

### Buttons

[`Button`](src/components/ui/Button.tsx) — `rounded-md`, uppercase,
`tracking-wide`, 200ms transitions.

| Variant | Rest | Hover | Press |
|---|---|---|---|
| `solid` | `crux-blue` / white | `accent-hover` | `accent-active`, `translate-y-px` |
| `outline` | `crux-blue` border + text | `accent-soft` fill | `crux-blue-light/40` |
| `outlineOnDark` | `white/70` border, white text | `white/10` fill | `white/20` |

**Use `outlineOnDark` on navy or photo backgrounds.** The plain `outline`
variant tints toward `accent-soft` (near-white) on hover, which washes out
against white text.

### Focus

All interactive elements use a **3px ring at 45% alpha**:
`focus-visible:ring-3 focus-visible:ring-crux-blue/45`. On dark surfaces,
`ring-white/60`. Never remove focus rings — replace them.

### Inputs

`rounded-md`, `gray-300` border, `gray-400` placeholder. On focus the border
becomes `crux-blue` plus the standard 3px ring. Errors render in `danger`
below the field, wired via `aria-describedby`.

---

## Motion

Quick and functional — fades and small translations. No bounces, no decorative
loops.

| Token | Value |
|---|---|
| `ease-crux` | `cubic-bezier(0.2, 0, 0, 1)` |
| `duration-fast` | 120ms |
| `duration-base` | 200ms |
| `duration-slow` | 280ms |

Durations run 120–280ms. Colour transitions use 150ms, transforms 200ms,
entrances 280ms.

[`Reveal`](src/components/ui/Reveal.tsx) is the site's single scroll-entrance
primitive: an 8px rise plus fade at 280ms, fired once per element.
[`CountUp`](src/components/ui/CountUp.tsx) animates a number when scrolled into
view.

**Reduced motion is honoured everywhere.** `Reveal` renders statically,
`CountUp` shows its final value immediately, the testimonial carousel swaps
without sliding (but keeps rotating — motion preference is not a request to
stop content updating), and smooth scrolling is disabled.

---

## Iconography

**No icon set was supplied with the brand.** The site uses
[`lucide-react`](https://lucide.dev) — 2px stroke, round caps and joins, on a
24px grid. This weight pairs well with the geometric wordmark. If Crux has a
preferred library, it can be swapped.

- Icons are **line, not filled**, and inherit text colour via `currentColor` —
  never brand blue on their own unless inside a blue control. The one exception
  is the testimonial star, which is deliberately filled.
- Sizes: 16px inline with text, 18–20px in buttons and controls, 24px standalone.
- **No emoji.** The brand voice is emoji-free — web, decks, and email alike.
- No icon fonts, and no Unicode glyphs pressed into service as icons.
- The logo is the only bespoke artwork. Never draw new brand marks.

---

## Layout

- [`Container`](src/components/ui/Container.tsx) — `max-w-6xl`, `px-6 lg:px-8`.
- Sections use `py-20 sm:py-28`; heroes use `py-28 sm:py-40`.
- Body copy sits at a 50–60 character measure (`max-w-xl` / `max-w-2xl`).
- Section backgrounds alternate white / `crux-cloud` / `crux-navy` to give the
  page rhythm.

### Decorative images

Images that carry no information are `alt=""` and may be hidden on small
screens (`hidden md:block`) where they would cost a screenful of scroll — see
[`WhoWeAre`](src/components/sections/WhoWeAre.tsx). Note this hides them
visually but still ships the asset.

---

## Known gaps

- **Century Gothic** is not licensed; Jost is standing in.
- The success message in
  [`ContactForm`](src/components/forms/ContactForm.tsx) uses `rounded-sm` where
  the card spec calls for `rounded-lg`.
- `tracking-[0.25em]` on the client-logos eyebrow is a deliberate one-off,
  wider than the `tracking-caps` the guide specifies.
- No dark mode. All tokens assume a light background.
