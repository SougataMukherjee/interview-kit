# CSS, SCSS & Tailwind CSS — Complete Notes

> All original questions kept as-is, with brief extra detail added where useful. 

---

## Table of Contents
1. [CSS Notes](#css-notes) 
2. [SCSS Theory](#scss-theory) 
3. [Tailwind CSS Theory](#tailwind-css-theory) 

---

# CSS Notes

### Q1: What is CSS? CSS Boilerplate? Is CSS case-sensitive? Different ways to include CSS in a webpage?

CSS (**C**ascading **S**tyle **S**heets — styles apply in order of priority) is a style sheet language used to control the presentation and formatting of HTML documents.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
}
```

**Case sensitivity:** No — selectors & properties are not case-sensitive, but values like class names referenced from HTML **are** case-sensitive.

**CSS3 Features & Advantages:**
- Rounded corners (`border-radius`)
- Animations & transitions
- Media queries (responsive design)

**3 ways to include CSS in a webpage:**

**1. Inline CSS**
```html
<p style="color: red;">Hello</p>
```
*(In React/JSX, inline style is an object: `style={{ ...a, ...b, ...(isActive && {color:'red'}) }}`)*

**2. Internal CSS**
```html
<style> p { color: red; } </style>
```

**3. External CSS**
```html
<link rel="stylesheet" href="style.css">
```

> 💡 **Extra detail:** Inline styles have the highest specificity of the three but are hardest to maintain; external CSS is best for caching and reuse across pages.

---

### Q2: Difference between inline, block, and inline-block?

- **inline:** width/height not applicable (`span`, `a`) — perfect for small labels, icons, hyperlinks
- **block:** takes full width (`div`, `p`) — perfect for layouts, full-width rows, box containers
- **inline-block:** behaves inline but allows width/height — perfect for buttons, badges, small cards

```html
<span class="tag">React</span>
<span class="tag">JavaScript</span>

<style>
.tag {
  display: inline-block;
  padding: 5px 10px;
  background: #eee;
}
</style>
```

> 💡 **Extra detail:** `inline` elements ignore `width`/`height`/`margin-top`/`margin-bottom`, but `inline-block` respects all of these — that's the key practical difference.

---

### Q3: What is the Box Model?

Width = content + padding + border (margin lies outside).

Total Width = margin + border + padding + content

```txt
+-----------------------+
|      Margin           |
|  +-----------------+  |
|  |    Border       |  |
|  | +-------------+ |  |
|  | |  Padding    | |  |
|  | | +---------+ | |  |
|  | | | Content | | |  |
|  | | +---------+ | |  |
|  | +-------------+ |  |
|  +-----------------+  |
+-----------------------+
```

> 💡 **Extra detail:** `box-sizing: border-box` changes this — `width`/`height` then include padding + border, so the box doesn't grow when you add padding. This is why the boilerplate reset in Q1 sets it globally.

---

### Q4: Explain CSS Specificity Order (Highest → Lowest)

Inline style > ID > Class > Element

```txt
#id > .class > div
```

**Duplicate ID Problem:** IDs must be unique — use classes instead.

> 💡 **Extra detail:** Specificity is actually calculated as a 4-part tuple `(inline, IDs, classes/attributes/pseudo-classes, elements/pseudo-elements)`. `!important` overrides all of this regardless of specificity (see Q28).

---

### Q5: Favicon

Small icon in the browser tab, common sizes: 16×16, 32×32, 64×64...

```html
<link rel="icon" href="/favicon.ico">
```

---

### Q6: Position properties?

- **static** (default) — cannot use `top`, `left`, `right`, `bottom`
```css
.box { position: static; }
```
- **relative** — moves relative to its own normal position
```css
.box {
  position: relative;
  top: 10px;   /* moves down 10px */
  left: 20px;  /* moves right 20px */
}
```
- **absolute** — positioned relative to the nearest **positioned** (non-static) ancestor
```css
.parent { position: relative; } /* parent becomes reference */
.badge {
  position: absolute;
  top: 5px;
  right: 5px;
}
```
- **fixed** — relative to the viewport; stays fixed even while scrolling
- **sticky** — hybrid; acts relative until scroll crosses a threshold, then sticks

```html
<style>
.navbar { position: sticky; top: 0; background: #333; color: white; padding: 15px; }
</style>
<nav class="navbar">Sticky Navigation Bar</nav>
```

**Sticky vs Fixed:** Sticky sticks only *inside its container* after reaching a scroll position, while fixed stays in the same place on the screen no matter how much you scroll.

---

### Q7: Flexbox Basics. Float property advantage over Flex

Flexbox is useful for **1D layout** (row or column).
```txt
+------------------+
|       d1         |
+------------------+
|       d2         |
+------------------+
        FLEX
```
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
```

- **Flexbox with responsive wrap**
```css
.parent { display: flex; flex-wrap: wrap; gap: 10px; }
```
- **Fixed + flexible layout**
```css
.parent { display: flex; }
.sidebar { width: 200px; }
.content { flex: 1; }
```
- **flex-grow, flex-shrink, flex-basis** — `flex-grow` makes an item expand when there's extra space; `flex-shrink` makes an item shrink when there's not enough space.
```css
.item { flex: 1 0 200px; /* grow | shrink | basis */ }
```
- `display: flex` is a **block-level** flex container — takes full width (like `div`). Float was traditionally used to wrap text around images (flex **cannot** do this) — use float for that specific case.
- `display: inline-flex` is an **inline-level** flex container — behaves like inline elements (like `span`), doesn't take full width.
```html
<style>
.tag { display: inline-flex; align-items: center; gap: 4px; padding: 4px 10px; background: #eee; }
</style>
<span class="tag"><img src="icon.png" width="16"> Profile</span>
```
```html
<img src="pic.jpg" style="float:left; width:100px;"> Text wraps around image.
```

---

### Q8: Grid Basics

Grid is useful for **2D layout** (rows and columns).
```txt
+-----+-----+-----+
| d1  | d2  | d3  |
+-----+-----+-----+
| d4  | d5  | d6  |
+-----+-----+-----+
         GRID
```
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
```

- **Grid areas with `grid-template-areas`**
```css
.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 200px 1fr;
}
```
- **`minmax()` for responsive shrink**
```css
.grid { display: grid; grid-template-columns: repeat(4, minmax(150px, 1fr)); }
```

**`auto-fill` vs `auto-fit`:**
`auto-fill` fills the entire row and creates empty column tracks — reserved but items don't stretch to fill empty space.
```txt
| 1 | 2 | 3 |    |    |
```
```css
.autofill { display: grid; grid-gap: 10px; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); }
```
`auto-fit` collapses empty tracks — items stretch automatically to fill the row.
```txt
|        1        |        2        |        3        |
```
```css
.autofit { display: grid; grid-gap: 10px; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); }
```

> 💡 **Extra detail:** Grid also supports explicit vs implicit tracks — `grid-auto-rows`/`grid-auto-columns` control the size of tracks the browser creates automatically when content overflows the defined grid.

---

### Q9: z-index and stacking context?

`z-index` works **only** for positioned elements (`relative`, `absolute`, `fixed`, `sticky`).

```css
.box { width: 150px; height: 150px; position: absolute; }
.box1 { background: lightblue; top: 20px; left: 20px; z-index: 1; }
.box2 { background: tomato; top: 60px; left: 60px; z-index: 2; }
```

> 💡 **Extra detail:** A new **stacking context** is created by things beyond just `position` + `z-index` — e.g. `opacity < 1`, `transform`, `filter`, or `will-change` also create one. Inside a stacking context, `z-index` values only compete with siblings in the *same* context, not the whole page.

---

### Q10: Responsive Design

Use media queries:
```css
@media (min-width: 768px) {
  .container { flex-direction: column; }
}
/* or */
@media (min-width: 768px) and (max-width: 1024px) {
  .container { flex-direction: column; }
}
/* or */
@media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  /* else orientation: landscape */
  .container { flex-direction: column; }
}
```

**In an SCSS project:**
```scss
$breakpoints: (
  "xs": 480px, "sm": 640px, "md": 768px, "lg": 1024px, "xl": 1280px,
);
@mixin xs {
  @media (max-width: map-get($breakpoints, "xs")) { @content; }
}
@mixin sm {
  @media (min-width: (map-get($breakpoints, "xs") + 1)) and (max-width: map-get($breakpoints, "sm")) { @content; }
}
@mixin groupXsSmMd {
  @include xs { @content; }
  @include sm { @content; }
}
```

---

### Q11: Difference between transition and animation?

**Transition:** smooth change between two states — needs a trigger (`hover`, `active`, class toggle).
```css
.btn { background: blue; color: white; padding: 10px 20px; transition: background 0.3s; }
.btn:hover { background: darkblue; }
```

**Animation:** runs automatically with `@keyframes`.
```css
.bell { font-size: 40px; animation: shake 0.6s infinite; }
@keyframes shake {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  50% { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
}
```

---

### Q12: Pseudo classes and elements

**Pseudo-class:** styles a **state** (e.g. `:hover`, `:disabled`, `:focus`, `:nth-child(2)`, `:nth-child(odd)`).

**Pseudo-element:** styles a **particular part** of an element (e.g. `::before`, `::after`).

```css
.required::before { content: " *"; color: red; font-weight: bold; }
```
```html
<label class="required">Name</label>
<input type="text">
```

---

### Q13: Difference between margin and padding

**Margin:** space outside the element's border. `margin-inline` affects the left-right (inline) direction, `margin-block` affects the top-bottom (block) direction.
```css
.box { margin-inline: 20px; margin-block: 10px; }

/* avoid: */
/* margin-top: 20px; margin-bottom: 10px; */
/* instead: */
/* margin-block-start: 20px; margin-block-end: 10px; */
```

**Padding:** space inside the element's border, around the content.
```css
/* avoid: */
/* padding-left: 20px; padding-right: 10px; */
/* instead: */
/* padding-inline-start: 20px; padding-inline-end: 10px; */
```

> 💡 **Extra detail:** These "logical properties" (`inline`/`block`) automatically flip direction for right-to-left (RTL) languages — a plain `margin-left` won't.

---

### Q14: What are CSS combinators?

Define relationships between selectors: **Descendant (space), Child (>), Adjacent sibling (+), General sibling (~)**.

```html
<div class="parent">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <span>Span 1</span>
  <span>Span 2</span>
</div>
```
```css
.parent p { color: blue; }        /* Descendant: all <p> inside .parent */
.parent > p { font-weight: bold; } /* Child: only direct <p> children */
p + span { color: red; }           /* Adjacent sibling: span immediately after <p> */
p ~ span { background: yellow; }   /* General sibling: all spans after <p> */
```

---

### Q15: How do you handle browser compatibility in CSS?

**Vendor Prefixes:** browser-specific prefixes for CSS properties.
```css
display: -webkit-box;   /* Safari/Chrome older */
display: -moz-box;      /* Firefox older */
display: flex;          /* Modern browsers */
```

**Feature Queries / Fallbacks:** use `@supports` when a property might not be supported.
```css
@supports (display: grid) {
  .container { display: grid; }
}
```

---

### Q16: Difference between em, rem, %, vw, vh, fr and px

**`px`:** Absolute pixel value.

**`em`:** Relative to **parent** font-size. Example: if parent font-size = 16px → `2em` = 32px. Commonly used for padding/font-size that should scale *with* its container.
```css
button { font-size: 1em; padding: 0.5em 1em; /* grows if font-size grows */ }
```

**`rem`:** Relative to the **root** (`html`) font-size. Example: if `html` font-size = 16px → `2rem` = 32px. Commonly used for margin, padding, gap, font-size (predictable, doesn't compound like `em`).
```css
.section { margin: 2rem; padding: 1rem; }
h1 { font-size: 2rem; }
```

**`vw`:** Relative to 1% of viewport width. Example: `50vw` = half the screen width.

**`vh`:** Relative to 1% of viewport height. Example: `100vh` = full visible screen height.

**`fr`:** Used in CSS Grid — a fractional unit of available space. Example: `grid-template-columns: 1fr 2fr` → 1 part vs 2 parts.

**`%`:** Relative to the parent element's size.

---

### Q17: What are CSS variables and how to use them?

**External CSS variables**
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #f59e0b;
}
h1 { color: var(--primary-color); background-color: var(--secondary-color); }
```

**Inline variables**
```html
<div class="box" style="--i: 1"></div>
<div class="box" style="--i: 2"></div>
```
```css
.box { transform: rotate(calc(var(--i) * 20deg)); }
```

> 💡 **Extra detail:** `var()` supports a fallback value: `var(--primary-color, blue)` uses `blue` if `--primary-color` isn't defined.

---

### Q18: `@property`

Defines custom CSS properties with a type and default value — helps in animations/transitions for custom properties (plain CSS variables can't normally be transitioned since the browser doesn't know their type).

```css
@property --x {
  syntax: "<length>";
  initial-value: 0px;
  inherits: false;
}
div {
  --x: 0px;
  width: var(--x);
  transition: --x 1s;
}
div:hover { --x: 100px; /* width will smoothly animate */ }
```

---

### Q19: CSS Math Functions

`calc()` → perform calculations
```css
width: calc(100% - 2rem);
min-height: calc(100vh - 80px);
grid-template-columns: 200px calc(100% - 200px);
```

`min()` → picks the smallest
`max()` → picks the largest
```css
width: min(90vw, 50%);
font-size: max(5vw, 32px);
```

`clamp()` → range limit. Chooses a value that never goes below the minimum and never exceeds the maximum — very useful for responsive design.
```css
font-size: clamp(1rem, 5vw, 2rem);   /* clamp(min, preferred, max) */
width: clamp(200px, 50vw, 600px);
```

---

### Q20: `:global`

Apply styles globally even inside scoped CSS Modules.
```css
/* styles.module.css (applies globally, not just at component level) */
:global(.btn) { color: red; }
.localDiv { background: yellow; }
```

---

### Q21: CSS Attribute Selectors

`[attr]` → elements with that attribute — e.g. highlight all required fields in a form.
```css
input[required] { border: 2px solid red; }
```

`[attr=value]` → exact match — e.g. style only buttons with `type="submit"`.
```css
button[type="submit"] { background: green; color: white; }
```

`a[class|="link"]` → selects elements where the class is exactly `"link"`, or starts with `"link-"`.
```html
<a class="link">Exact</a>
<a class="link-primary">Dash Match</a>
```
```css
a[class|="link"] { color: red; }
```

`[attr^=val]` → starts with — e.g. select links starting with `https` (secure URLs).
```css
a[href^="https"] { color: green; }
```

`[attr$=val]` → ends with — e.g. style all image files ending with `.png`.
```css
img[src$=".png"] { border: 2px solid blue; }
```

`[attr*=val]` → contains substring — e.g. select input fields whose placeholder contains `'name'`.
```css
input[placeholder*="name"] { background: #fff3cd; border: 1px solid orange; }
```

---

### Q22: Superscript & Subscript

```html
H<sub>2</sub>O → water
x<sup>2</sup> → square
```

---

### Q23: CSS Font Fallback. `@font-face`

Multiple fonts listed in order of priority — if the first fails, the next is used.
```css
font-family: "Roboto", "Arial", sans-serif;
```

`@font-face` allows loading custom fonts — optimize web font load for better performance.
```css
@font-face {
  font-family: "MyFont";
  src: url("myfont.woff2");
}
body { font-family: "MyFont"; }
```

---

### Q24: Border vs Outline

**Border** → part of the element's box, affects layout.
**Outline** → drawn outside the border, doesn't affect size.
```css
border: 2px solid red;
outline: 2px solid blue;
```

---

### Q25: `display:none` vs `visibility:hidden`

**`display: none`** → element is removed from the layout (no space reserved).
**`visibility: hidden`** → element is hidden but still occupies space.

---

### Q26: CSS Selectors

Select elements based on name, class, id, attribute, etc.
```txt
#id → by id
.class → by class
div → by tag
div p → descendant
div > p → direct child
div + p → next sibling
div ~ p → all following siblings
* → universal
:hover → on hover state
:first-child, :last-child → positional selectors
```

**Why `@import` only at top?** Because CSS loads top-down — later rules may not apply if the file isn't loaded first.

```scss
/* styles.scss */
@use "variables";
@use "mixins" as *;

.button {
  color: variables.$primaryColor;
  @include mixins.center;
}
```

**Graceful Degradation:** Start for modern browsers → make sure old browsers still work. Example: fancy animation → show static image on old browser.

**Progressive Enhancement:** Start simple → add advanced features if browser supports. Example: plain form → add JS validation later.

---

### Q27: Grouping vs Nesting

**Grouping:** combine selectors with a comma.
```css
h1, h2 { color: red; }
```

**Nesting (in SCSS):**
```scss
nav { a { color: blue; } }
```

---

### Q28: Cascading rules

When two styles have the same specificity:
✔ Last rule written wins (order matters)
✔ More specific selector beats a less specific one (like `!important` overrides all rules)

---

### Q29: `:nth-child()` vs `:nth-of-type()`

`:nth-child()` selects based on position among **all siblings**.
`:nth-of-type()` selects based on position of the **same tag type**.

```html
<p>1</p>
<span>2</span>
<p>3</p>
```
```css
p:nth-child(2) /* ❌ No match — the 2nd child is a <span>, not a <p> */
p:nth-of-type(2) /* ✅ selects the 2nd <p> */
```

---

### Q30: How to center an element horizontally?

**1. Using margin**
```css
.box { width: 200px; margin: 0 auto; }
```
**2. Using flex**
```css
.parent { display: flex; justify-content: center; }
```

---

### Q31: Opacity

Controls transparency of an element (0–1).
```css
.box { opacity: 0.5; }
```

---

### Q32: Universal Selector

Selects all elements.
```css
* { margin: 0; padding: 0; }
```

---

### Q33: Background Image

```css
body {
  background-image: url("bg.jpg");
  background-size: cover;       /* or contain */
  background-position: center;
}
/* or */
body {
  background: hsl(0 0% 0% / 0.8) url("bg.jpg") center/cover no-repeat;
}
```

---

### Q34: 2D Transform Functions

| Function | Example |
|---|---|
| `translate()` | `transform: translate(20px, 10px);` |
| `rotate()` | `transform: rotate(45deg);` |
| `scale()` | `transform: scale(1.5);` |
| `skew()` | `transform: skew(20deg);` |

---

### Q35: Text Alignment

`text-align` controls the horizontal alignment of inline content inside a block element.
```css
p { text-align: left; }    /* default */
p { text-align: center; }
p { text-align: right; }
p { text-align: justify; }
```

---

### Q36: Underline & Overline

`text-decoration` adds or removes decoration lines on text.
```css
p { text-decoration: underline; }
h1 { text-decoration: overline; }
p { text-decoration: none; }
h2 { text-decoration: line-through; }
```

**Custom text decoration:**
```css
text-decoration-thickness: 12px;
text-decoration-color: red;
text-decoration-style: wavy;
text-decoration-offset: -10px;
```

---

### Q37: Automatic Dark & Light Mode Based on Location

Auto-detect via system theme, or approximate via local time:
```css
.dark { background: #111; color: white; }
.light { background: white; color: #111; }
```
```js
const hour = new Date().getHours();
document.body.className = hour >= 18 || hour < 6 ? "dark" : "light";
```

> 💡 **Extra detail:** For real system-theme detection (not just time-based), use the media feature `@media (prefers-color-scheme: dark) { ... }`.

---

### Q38: How to create `@layer` in CSS & what is its use?

`@layer` controls the **order** of CSS styles intentionally — prevents style conflicts by defining explicit priority regardless of source order.
```css
@layer reset, base, components, utilities;

@layer reset { * { margin: 0; padding: 0; } }
@layer base { body { font-family: sans-serif; } }
@layer components { .btn { padding: 10px 20px; } }
@layer utilities { .text-red { color: red; } }
```

---

### Q39: What are `:has()`, `:not()`, `:is()` selectors?

**`:has()`** → a *parent* selector — selects an element based on its children/descendants.
```css
.card:has(a:hover) { background: lightyellow; border: 2px solid orange; }
.form:has(input:invalid) { border: 2px solid red; }
```

**`:not()`** → excludes specific elements from selection.
```css
button:not(.primary) { background: #eee; }
li:not(:first-child) { color: blue; }
```

**`:is()`** → simplifies long/repeated selectors, groups multiple selectors to avoid duplicate CSS.
```css
.card :is(a, button) { cursor: pointer; }
```

---

### Q40: What is the `inset` property?

`inset` is shorthand for `top` + `right` + `bottom` + `left`.
```css
inset: 10px 20px;            /* top/bottom, left/right */
inset: 10px 20px 30px 40px;  /* top, right, bottom, left */
```

---

### Q41: What is `box-shadow`, `text-shadow`, and `drop-shadow()`?

**`box-shadow`** — adds a shadow around a box element, applied to the box (border + padding area).
```css
.card { box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* x-offset, y-offset, blur, color */ }
```

**`text-shadow`** — adds a shadow behind text characters only (not the box).
```css
.title { text-shadow: 2px 2px 6px rgba(0,0,0,0.4); }
```

**`drop-shadow()`** — a filter-based shadow applied to the *shape* of an image, not its rectangular box. Useful for PNG/transparent images, icons, SVGs.
```css
.icon { filter: drop-shadow(0 5px 8px rgba(0,0,0,0.4)); }
```

---

### Q42: What is `line-height`?

Controls the vertical spacing between lines of text.
```txt
line-height: 1   → tight text
line-height: 1.5 → readable
line-height: 2   → spacious
```

---

### Q43: What is `clip-path`? How does it work internally?

`clip-path` cuts an element into a specific shape — anything outside the shape becomes hidden. It tells the browser to show only a region of an element using a path, clipping pixels outside it.
```css
img {
  clip-path: circle(50%);
  /* or */
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
}
```

---

### Q44: What is `text-wrap`?

A CSS property controlling how text breaks inside an element.
```css
text-wrap: wrap;
text-wrap: nowrap;
text-wrap: balance;
text-wrap: pretty;
```

---

### Q45: Types of CSS colors

**Hex** — short, common, simple.
```css
color: #ff5733;
```
**RGB** — good for JavaScript color animations.
```css
color: rgb(255, 87, 51);
```
**HSL** (best for responsive themes) — easy to change lightness & saturation for screen/theme adjustments.
```css
color: hsl(10, 80%, 60%);
```

---

### Q45 (b): When to use `width` vs `max-width` in responsive design?

Fixed `width` always locks to an exact width, but `max-width` shrinks on small screens while allowing full size up to the max — `max-width` is generally best for responsiveness.

---

### Q46: How to use multiple backgrounds?

```css
div {
  background:
    url(bg-top.png) top left no-repeat,
    url(bg-pattern.png) center repeat;
}
```

---

### Q47: What is `aspect-ratio`, `transform-style`, `perspective`?

**`aspect-ratio`** — keeps element height proportional to width (responsive images/cards).
```css
img { aspect-ratio: 3 / 2; object-fit: contain; /* or cover */ }
```

**`transform-style`** — determines how child elements are rendered in 3D space.
```css
.card { transform: rotateY(60deg); transform-style: preserve-3d; }
```

**`perspective`** — creates depth/3D view for the parent container; used in 3D cards, rotating cubes, carousels.
```css
.scene { perspective: 100px; }
```

---
### Q48: What is a CSS Reset / Normalize.css, and how do they differ?

A **CSS Reset** strips *all* default browser styling (margins, font sizes, list styles) down to a blank slate — you rebuild everything yourself.
**Normalize.css** instead makes default styling *consistent* across browsers, without removing useful defaults (e.g. it keeps sensible heading sizes).

```css
/* Minimal reset example */
* { margin: 0; padding: 0; box-sizing: border-box; }
```

| Reset | Normalize |
|---|---|
| Removes all default styling | Preserves useful defaults, fixes inconsistencies |
| You build styles from zero | Less rebuilding needed |

---

### Q49: What is the `overflow` property?

Controls what happens when content is too big for its container.
```css
.box { overflow: visible; }  /* default — content spills out */
.box { overflow: hidden; }   /* clipped, no scrollbar */
.box { overflow: scroll; }   /* always show scrollbar */
.box { overflow: auto; }     /* scrollbar only when needed */
```
`overflow-x` and `overflow-y` control each axis independently.

---

### Q50: What is `object-fit` and `object-position`?

Controls how a replaced element (`<img>`, `<video>`) fits inside its box.
```css
img {
  width: 300px;
  height: 200px;
  object-fit: cover;      /* fills box, may crop */
  /* contain | fill | none | scale-down */
  object-position: center top;
}
```

---

### Q51: Flexbox vs Grid — when to use which?

| Flexbox | Grid |
|---|---|
| 1-dimensional layout (row OR column) | 2-dimensional layout (rows AND columns) |
| Content-driven sizing | Layout-driven sizing (define the grid first) |
| Best for: navbars, button groups, toolbars | Best for: page layouts, card grids, dashboards |

> Rule of thumb: if you're aligning items in a single line, use Flexbox. If you're designing a full layout with rows *and* columns, use Grid. (They're also often combined — Grid for the page shell, Flexbox inside individual grid cells.)

---

### Q52: What is `content-visibility`?

A performance property that skips rendering work for off-screen content until it's needed — dramatically speeds up initial page render on long pages.
```css
.section {
  content-visibility: auto;
  contain-intrinsic-size: 500px; /* placeholder size to prevent layout shift */
}
```

---

### Q53: What is `will-change`?

Hints to the browser that a property is about to change, so it can optimize in advance (e.g. promote to its own compositor layer).
```css
.box { will-change: transform; }
```
⚠️ Overusing `will-change` on many elements can *hurt* performance (excess memory usage) — apply it only to elements that actually animate frequently.

---

### Q54: What is `backdrop-filter`?

Applies a graphical effect (blur, brightness) to the area *behind* an element — commonly used for frosted-glass UI effects.
```css
.modal {
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
}
```

---

### Q55: What is CSS scroll-snap?

Locks scrolling to defined positions — useful for image carousels/galleries.
```css
.container { scroll-snap-type: x mandatory; overflow-x: scroll; display: flex; }
.item { scroll-snap-align: start; flex: 0 0 100%; }
```

---

### Q56: What is `:focus-visible` and why does it matter for accessibility?

`:focus` applies whenever an element gets focus (including mouse clicks); `:focus-visible` applies **only** when the browser determines focus should be visibly indicated — typically keyboard navigation. This avoids showing a focus ring on mouse click while still supporting keyboard users.
```css
button:focus-visible { outline: 2px solid blue; }
button:focus:not(:focus-visible) { outline: none; }
```

---

# SCSS Theory

### Q1: What is SCSS and how does it differ from CSS?

SCSS is a **CSS preprocessor** with variables, nesting, mixins, and partials. It compiles down to standard CSS for browsers (browsers cannot read `.scss` directly).

---

### Q2: Variables and scoped

Variables store reusable values and can be scoped globally or within blocks.
```scss
$primary: #3490dc;
body { color: $primary; }
```

---

### Q3: Nesting

```scss
nav {
  ul {
    li { color: red; }
  }
}
```
> 💡 **Extra detail:** Avoid nesting more than 3 levels deep — it produces overly specific selectors that are hard to override later.

---

### Q4: Mixins and Include

`@mixin`: a reusable block with parameters (like a function).
```scss
// _mixin.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// main.scss
@use "mixins";
.container { @include mixins.flex-center; }
```

---

### Q5: Extends

`@extend`: inherits all styles of another selector.
```scss
%btn-base { padding: 10px; border-radius: 5px; }
.btn-primary { @extend %btn-base; background: green; }
.btn-danger  { @extend %btn-base; background: red; }
```

---

### Q6: What are placeholders (%) in SCSS?

Define styles that can only be **extended** (not compiled by themselves — a `%placeholder` alone produces no CSS output unless something `@extend`s it).
```scss
%btn { padding: 10px; }
.submit { @extend %btn; }
```

---

### Q7: Partials and Import

A **partial** is an SCSS file whose name starts with an underscore (`_`) — e.g. `_buttons.scss`, `_variables.scss` — used for organizing code and reusability.
```
styles/
  _variables.scss
  _mixins.scss
  _header.scss
  _footer.scss
  main.scss
```
```scss
@import "variables";
@import "header";
@import "footer";
```

**Why easy to insert files with `@import`?** Simplifies maintenance — one CSS file can include others.

---

### Q8: Operators

```scss
width: (100% / 3);
```

---

### Q9: Functions

A SCSS function is like a JavaScript function but for CSS — takes input, performs a calculation, returns output.
```scss
@function px-to-rem($px) {
  @return $px / 16 * 1rem;
}
@function space($mul) {
  @return $mul * 8px;
}

.title {
  font-size: px-to-rem(32);  // returns 2rem
  padding: space(2);          // returns 16px
}
```

---

### Q10: Loops & Conditionals

```scss
@for $i from 1 through 5 {
  .m-#{$i} { margin: #{$i * 4}px; } // 4px, 8px, 12px...
}
// generates:
// .m-1 { margin: 4px; }
// .m-2 { margin: 8px; }
```

---

### Q11: SCSS Compilation

Use `sass input.scss output.css` to compile.

---

### Q12: How do control directives like `@if`, `@else` work?

Allow conditional logic in SCSS:
```scss
$theme: "dark";

.button {
  padding: 10px 20px;

  @if $theme == "light" {
    background: #fff; color: #000;
  } @else if $theme == "dark" {
    background: #000; color: #fff;
  } @else {
    background: gray;
  }
}
```

---

### Q13: What is SCSS Maps?

SCSS maps act like mini-dictionaries — store values under keys, fetch any value by key with `map-get()`.
```scss
$theme: ( primary: #3498db, danger: #e74c3c );
.button { color: map-get($theme, primary); }
```

---

### Q14: `@use` vs `@import` — why is `@import` deprecated?

`@import` (from old Sass) pollutes the **global namespace** — every variable/mixin from every imported file lives in one shared space, causing name collisions and repeated imports of the same file.

`@use` loads a module with its own **namespace**, avoids duplicate loading, and is the modern recommended approach.
```scss
// _colors.scss
$primary: blue;

// main.scss
@use "colors";
.btn { color: colors.$primary; }   // must be namespaced
```

| `@import` (deprecated) | `@use` (modern) |
|---|---|
| Global namespace — collisions possible | Scoped/namespaced — no collisions |
| Can import the same file multiple times | Loads a file only once, no matter how many times `@use`d |

---

### Q15: What is `@forward`?

Re-exports the members of one SCSS file through another — used to build a single "entry point" file that bundles several partials for consumers to `@use`.
```scss
// _forward.scss
@forward "buttons";
@forward "colors";

// consumer.scss
@use "forward"; // now has access to both buttons and colors members
```

---

### Q16: What is interpolation (`#{}`) in SCSS?

Injects a SCSS expression into a place that expects plain text — e.g. into a selector name, property name, or string.
```scss
$side: "top";
.box { margin-#{$side}: 10px; }   // compiles to: margin-top: 10px;

@for $i from 1 through 3 {
  .col-#{$i} { width: math.div(100%, $i); }
}
```

---

### Q17: What are SCSS Lists, and `@each`?

A **list** is an ordered sequence of values (space or comma separated). `@each` iterates over it.
```scss
$colors: red, green, blue;

@each $color in $colors {
  .text-#{$color} { color: $color; }
}
```

---

### Q18: What does `!default` mean in SCSS?

Assigns a variable's value **only if it isn't already defined** — commonly used in libraries/mixins to allow consumers to override defaults before importing.
```scss
$primary-color: blue !default;
```
If the consumer sets `$primary-color: green;` *before* this line is reached, `!default` won't override it.

---

### Q19: What does `@content` do inside a mixin?

Lets a mixin accept a block of styles passed in by the caller, and injects it at the `@content` point — this is how responsive-breakpoint mixins (like in Q10 of the CSS section) work.
```scss
@mixin respond($width) {
  @media (min-width: $width) {
    @content;
  }
}

.box {
  @include respond(768px) {
    display: flex;   // this block is injected via @content
  }
}
```

---

# Tailwind CSS Theory

### Q1: What is Atomic CSS? What is Tailwind CSS?

**Atomic CSS** — single-purpose utility classes (e.g. `p-4`, `flex`, `text-red-500`).
**Tailwind CSS** — a utility-first CSS framework; style directly in HTML using class names.
```html
<div class="flex items-center justify-between p-4 bg-blue-500 text-white">Navbar</div>
```

---

### Q2: What are utility-first CSS frameworks?

Frameworks where styling is applied via small, reusable utility classes (e.g. `p-4`, `text-center`) — result: no unused CSS, smaller bundle, no naming conflicts, faster rendering.

---

### Q3: Advantages and disadvantages

**Advantages**
- No writing custom CSS
- Small bundle (JIT compiler only generates classes actually used)
- Mobile-first by default

**Disadvantage**
- Hard to read, especially for large components (long class strings)

---

### Q4: Responsive Classes

```jsx
export const classes = {
  textResponsive: "text-lg md:text-2xl lg:text-4xl",
  gapResponsive: "grid gap-2 sm:gap-4 md:gap-8 lg:gap-12",
  gridResponsive: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  bgResponsive: "rounded-md bg-[url('/small.jpg')] sm:bg-[url('/medium.jpg')] lg:bg-[url('/large.jpg')]",
  aspectResponsive: "aspect-[4/3] md:aspect-[16/9]",
  containerWrapper: "@container",
  containerText: "@sm:text-xl @lg:text-4xl",
};
```
```jsx
<div className="p-6 space-y-6">
  <p className={classes.textResponsive}>Responsive text</p>
  <div className={classes.gridResponsive}>Responsive Grid</div>
  <div className={classes.containerWrapper}>
    <p className={classes.containerText}>Hello</p>
  </div>
</div>
```

---

### Q5: Hover & State Variants

```html
<button class="bg-blue-500 hover:bg-blue-700">Click</button>
```

---

### Q6: Custom Theme

`tailwind.config.js` is responsible for theme, variants, and custom utilities.
```js
theme: {
  extend: {
    colors: { primary: '#1e40af' },
  },
}
```

---

### Q7: Conditional Styling

```jsx
<div className={`${isActive ? "bg-green-500" : "bg-gray-500"}`}></div>
```

---

### Q8: Plugins

Forms, Typography, Line Clamp.

---

### Q9: How to enable dark mode in Tailwind?

Set in config: `darkMode: 'class'` or `'media'`, then add the `dark:` variant.
```html
<div class="bg-white dark:bg-black"></div>
```

---

### Q10: Difference between `@apply` and utility classes

**`@apply`:** used in CSS files to compose multiple utilities into one reusable class.
**Utility classes:** used directly in HTML/JSX.

```css
.btn-primary {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}
```

---

### Q11: How to optimize Tailwind build size?

Enable the **JIT / content-scanning** mode in config — Tailwind scans your source files and generates *only* the utility classes actually used, removing unused styles from the production build.
```js
// tailwind.config.js
content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
```

---

### Q12: What are arbitrary values in Tailwind?

Square-bracket syntax `[]` lets you use a one-off value not in the default theme scale, without editing the config.
```html
<div class="top-[117px] w-[calc(100%-2rem)] bg-[#1da1f2]"></div>
```

---

### Q13: What are `group` and `peer` variants?

**`group`** — style a child based on the **parent's** state.
```html
<div class="group">
  <p class="hidden group-hover:block">Shown when the parent is hovered</p>
</div>
```

**`peer`** — style an element based on a **sibling's** state (e.g. showing an error message when an input is invalid).
```html
<input type="email" class="peer" required />
<p class="hidden peer-invalid:block text-red-500">Enter a valid email</p>
```

---

### Q14: What is `space-x` / `space-y`, and `divide`?

**`space-x-*` / `space-y-*`** — adds consistent gaps between direct sibling children (an alternative to `gap` for non-flex/grid layouts).
```html
<div class="flex space-x-4">
  <div>1</div><div>2</div><div>3</div>
</div>
```

**`divide-*`** — adds a border **between** children.
```html
<div class="divide-y divide-gray-300">
  <div>Item 1</div><div>Item 2</div>
</div>
```

---

### Q15: What is `sr-only`?

Visually hides an element while keeping it accessible to screen readers — used for accessible labels that shouldn't show visually.
```html
<label class="sr-only" for="search">Search</label>
<input id="search" type="text" placeholder="Search..." />
```

---

### Q16: What is the `cn()` / `clsx` pattern for conditional classes?

Since Tailwind classes are plain strings, conditional logic gets messy with raw template literals. `clsx` (or `cn` — often `clsx` + `tailwind-merge`) cleanly composes class names and resolves conflicting Tailwind classes.
```jsx
import clsx from "clsx";

function Button({ isActive }) {
  return (
    <button className={clsx("px-4 py-2 rounded", isActive ? "bg-green-500" : "bg-gray-500")}>
      Click
    </button>
  );
}
```
`tailwind-merge` additionally resolves conflicts, e.g. `twMerge("p-2", "p-4")` → `"p-4"` (last one wins, instead of both being applied).

---

### Q17: What are Container Queries in Tailwind?

Unlike media queries (which respond to the **viewport**), container queries respond to the size of a **parent container** — useful for reusable components that must adapt regardless of where they're placed on the page.
```html
<div class="@container">
  <div class="text-sm @lg:text-2xl">Responsive to container width, not viewport</div>
</div>
```

---

### Q18: How do you extract repeated utility combinations into a component class?

Two common approaches:
1. **`@apply`** in a CSS file (see Q10) — good for simple, static combos.
2. **A JS/TS component** wrapping the class string (e.g. a `<Button>` React component) — better when the styling needs props/logic, and is generally the preferred pattern in component-based frameworks (React/Vue) over `@apply`.