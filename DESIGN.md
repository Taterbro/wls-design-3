---
name: Waterlight Group
description: The group's corporate gateway rendered as a working navigation chart.
colors:
  abyss: "#021119"
  ocean: "#051f2b"
  deep: "#082f3e"
  sea: "#0e5a6b"
  shoal: "#1a8397"
  shoal-text: "#5fc2d6"
  bone: "#f0ebdf"
  bone-2: "rgba(240,235,223,.82)"
  bone-3: "rgba(240,235,223,.7)"
  amber: "#e8b23c"
  cyan: "#69cddd"
  coral: "#e0674c"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 9vw, 7.4rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 4vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(16px, 1.05vw, 17px)"
    fontWeight: 400
    lineHeight: 1.6
  editorial:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(1.15rem, 2.2vw, 1.6rem)"
    fontWeight: 400
    lineHeight: 1.35
  label:
    fontFamily: "\"Spline Sans Mono\", ui-monospace, monospace"
    fontSize: "0.72rem"
    fontWeight: 500
    letterSpacing: "0.14em"
rounded:
  none: "0px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 5vw, 64px)"
  section: "clamp(64px, 10vh, 120px)"
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.abyss}"
    rounded: "{rounded.none}"
    padding: "0.95em 1.5em"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "#f4c257"
    textColor: "{colors.abyss}"
    rounded: "{rounded.none}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "0.95em 1.5em"
  route-role:
    backgroundColor: "transparent"
    textColor: "{colors.bone-2}"
    rounded: "{rounded.none}"
    padding: "1.05rem 1rem"
  route-role-selected:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.abyss}"
    rounded: "{rounded.none}"
  data-tag:
    backgroundColor: "transparent"
    textColor: "{colors.cyan}"
    rounded: "{rounded.pill}"
    padding: "0.34em 0.72em"
    size: "auto"
  field-input:
    backgroundColor: "rgba(2,17,25,0.6)"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "0.8em 0.9em"
---

# Design System: Waterlight Group

## Overview

**Creative North Star: "The Bridge Chart"**

Waterlight Group is presented as a working navigation chart rather than a brochure. The visitor is a senior external decision-maker who does not yet know the group; the interface has to read as an instrument — precise, evidenced, operational — in the first screen, not as a campaign. The surface is built from the marks of a sea chart: a deep-ocean ink ground, hairline graticule and isobaths, a live two-way route network, a scale bar, a north arrow, sheet references and a filterable legend. Content sits on the chart as data sits on a chart.

The system is flat by conviction. Depth comes from layered dark fields and 1px hairlines, never from shadow, glass or gradient ornament. Type carries the hierarchy: a monumental condensed uppercase display for the thesis, a warm serif for the one editorial voice, and monospace reserved strictly for measurements, coordinates, references and ordinals. Two data inks — amber and cyan — encode the group's two operating directions and are deliberately rare, so their appearance always means something.

It refuses the category default it was built against: the full-bleed photograph hero, the hero-stat row, and the same-size icon-card grid. It also refuses invented proof — footprint is drawn as a status the visitor can isolate, and every claim the page cannot yet verify is stated as intent, marked as schematic, or left for the user to supply.

**Key Characteristics:**
- Deep-ocean ink ground with chart-bone text; no light mode.
- Flat surfaces, hairline rules, zero decorative shadow or blur.
- Two-ink data accent system (amber / cyan) at low surface coverage.
- Monospace confined to data, coordinates, references and ordinals.
- Live, filterable route network as the signature instrument.
- Evidence-first copy: intent distinguished from verified footprint.

## Colors

A single committed dark field, tinted from petrol-teal to near-black, with a warm chart-paper neutral and two cold-warm data inks.

### Primary
- **Route Amber** (#e8b23c): the group's primary accent and the primary action. Marks the Africa→World direction, section header rules, active route selection, and the primary button fill.

### Secondary
- **Signal Cyan** (#69cddd): the World→Africa direction, active-partnership status, the flagship mark, and data tags.

### Neutral
- **Abyss** (#021119): the deepest field — footer, sticky header, and inset data panels such as the legend.
- **Ocean** (#051f2b): the default page ground.
- **Deep** (#082f3e): raised section fields (the restricted/data-room band).
- **Sea** (#0e5a6b) and **Shoal** (#1a8397): mid-tone chart teals for isobaths, scrollbars and layered water.
- **Chart Bone** (#f0ebdf): primary text and headings.
- **Bone-2 / Bone-3** (rgba(240,235,223,.82) / rgba(240,235,223,.7)): secondary and tertiary text, holding AA contrast on the dark ground.
- **Verification Coral** (#e0674c): reserved for validation errors and invalid field states only.

### Named Rules
**The Two-Ink Rule.** Amber and cyan are data, not decoration. Amber means Africa→World and primary action; cyan means World→Africa and live system signal. Each stays under roughly 5% of any screen; when they appear, they carry meaning.

**The Cold-Ground Rule.** The ground is always a petrol-tinted dark. Warm cream or light grounds are forbidden — this is a chart read on screen, not paper.

## Typography

**Display Font:** Archivo (self-hosted variable, with system-ui fallback)
**Body Font:** Archivo
**Editorial Font:** Spectral (self-hosted 400/500/600)
**Label/Mono Font:** Spline Sans Mono (self-hosted variable)

**Character:** Archivo gives the headings an institutional, condensed, engineered weight; Spectral supplies one warm editorial voice (the hero bridge line); Spline Sans Mono reads as instrument output, not as costume. All three ship from the project's own font files.

### Hierarchy
- **Display** (800, clamp(3.4rem, 9vw, 7.4rem), 0.92, tracking -0.035em): the `h1` thesis only, set uppercase.
- **Headline** (800, clamp(1.9rem, 4vw, 3rem), 1.05): section titles (`h2`), uppercase.
- **Title** (800, clamp(1.5rem, 2.6vw, 2.1rem), 1.1): card and sub-section headings (`h3`).
- **Body** (400, clamp(16px, 1.05vw, 17px), 1.6): running text, measures capped 44–56ch.
- **Editorial** (400, clamp(1.15rem, 2.2vw, 1.6rem), 1.35): the single hero bridge statement, max 24ch.
- **Label** (500, 0.72rem, tracking 0.14em, uppercase): coordinates, sheet refs, ordinals, sector tags, column headers.

### Named Rules
**The Chart-Label Rule.** Monospace is for code, data, coordinates, references and ordinals. It is never used for editorial or interface prose.

**The One-Serif Rule.** Spectral appears for one line of editorial voice only; it is not a second body face.

## Layout

A centered container caps content at 1240px, inset from the viewport by a fluid gutter `clamp(20px, 5vw, 64px)`. Full-bleed dark section fields are separated by 1px hairlines rather than cards; vertical rhythm is generous at `clamp(64px, 10vh, 120px)` and always larger above a heading than below it. Recurring structures: a two-column flow diagram with a central axis; a six-column lifecycle tab strip over a two-column stage panel; a four-column platform index (ref / platform / mandate / sector); a 2×2 footprint-status grid; a two-column restricted band; and a 4-column route selector over a two-column field grid. Breakpoints collapse to one column at 1080px (flow, restricted), then progressively (nav to a drawer at 860px, lifecycle to 3 then 2 columns, role grid to 2 then 1, footer to 1). No horizontal overflow at 1440, 1024 or 390.

## Elevation & Depth

Flat by default. Depth is expressed through layered petrol-dark fields (ocean → deep → abyss) and 1px hairlines; the system carries no decorative shadow, gradient fill or backdrop blur. The only `box-shadow` in the system is a state ring on the selected legend key; anything beyond that is a defect, not elevation.

### Shadow Vocabulary
- **Selected-state ring** (`box-shadow: 0 0 0 3px rgba(232,178,60,.25)`): the zero-offset halo marking the active legend filter.

### Named Rules
**The Flat-Chart Rule.** Surfaces are flat at rest. No drop shadows, no glass, no `backdrop-filter`; depth is tonal layering plus hairlines.

## Shapes

Corners are square (`0px`) almost everywhere — buttons, fields, panels, role cells and section fields all read as plotted rectangles. The only rounding is functional: circular legend keys and route-node dots (50%), and full pills (`999px`) for status chips and data tags. The line language is hairlines at 1px for structure and a 2px accent rule atop section/card headers (amber on the first direction, cyan on the second). No colored side stripes on cards or callouts.

## Components

### Buttons
- **Shape:** square corners (`0px`); padding `0.95em 1.5em`; Archivo 600, 0.92rem, tracking 0.02em.
- **Primary:** Route Amber fill, Abyss text; hover lightens to `#f4c257` and lifts 1px; active resets the lift.
- **Ghost:** transparent with a 1px Bone-2 border; hover raises the border to full Bone and adds a 5%-bone wash.

### Chips / Tags
- **Status keys:** circular swatches (14–18px) — Amber filled (established), Cyan filled (active), Amber outline (projects), Bone outline (target markets).
- **Data tag:** pill (`999px`), Signal Cyan text, 1px cyan-tinted border, uppercase Archivo 700 at 0.72rem. Used for the flagship identifier, never as a kicker above a heading.

### Route selector (signature input)
- **Shape:** a 4-column (then 2, then 1) grid of square cells separated by hairlines; the radio is visually hidden, the label is the target.
- **Default:** Bone-2 text on transparent; **hover:** Bone text with a 4%-bone wash; **checked:** Route Amber fill with Abyss text; **focus-visible:** inset 2px amber outline.

### Inputs / Fields
- **Style:** square, `rgba(2,17,25,.6)` ground, 1px `--line-2` border, Bone text, placeholders in Bone-3.
- **Focus:** border shifts to Route Amber and the ground deepens to `rgba(2,17,25,.85)`.
- **Error:** border becomes Verification Coral with a coral 0.78rem message beneath.

### Navigation
- **Header:** fixed, transparent gradient at rest, snapping to an opaque Abyss field with a hairline under it once scrolled (`.is-stuck`); brand mark is a drawn SVG (no glyph or emoji).
- **Links:** Archivo 0.85rem in Bone-2; hover raises to Bone and animates a 1px amber underline from left to right.
- **Mobile:** under 860px the nav becomes a full-width Abyss drawer toggled by a two-bar button.

### Chart instrument (signature component)
- The hero is one authored SVG chart: graticule + coordinate labels, isobaths, a schematic landmass, status-typed route nodes, two-way routes, a north arrow, a scale bar and a sheet reference. The legend is a set of real filter controls that isolate route types; routes draw and march as a single authored motion moment.

## Do's and Don'ts

### Do:
- **Do** keep the ground a petrol-tinted dark and text in Chart Bone / Bone-2 / Bone-3.
- **Do** reserve amber for the Africa→World direction and primary action, and cyan for World→Africa and live data; keep each scarce.
- **Do** use monospace only for coordinates, references, ordinals, sector tags and measurements.
- **Do** separate structure with 1px hairlines and 2px accent header rules, and keep all surfaces flat.
- **Do** distinguish verified footprint from target markets, and mark unverifiable material as intent or schematic.

### Don't:
- **Don't** place a kicker or eyebrow label above a heading.
- **Don't** use drop shadows, glass or `backdrop-filter`, or gradient fills as ornament.
- **Don't** add colored `border-left`/`border-right` above 1px to cards or callouts.
- **Don't** use a light or warm-cream ground, or a system display face in place of Archivo.
- **Don't** use Unicode glyphs or emoji as icons; draw icons as inline SVG in one stroke weight.
- **Don't** reproduce the corporate template — full-bleed photo hero, stat row, or same-size icon-card grid.
