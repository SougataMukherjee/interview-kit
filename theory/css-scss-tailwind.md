
CSS NOTES
====================

**Q1: what is CSS? Is CSS case-sensitive? Different ways to include CSS in a webpage?**  

CSS, which stands for Cascading(styles apply in order of priority) Style Sheets, is a style sheet language used in web development to control the presentation and formatting of HTML documents

No (selectors & properties are not), but values like class names in HTML are.  

CSS3 Features & Advantages:
- Rounded corners (border-radius)
- Animations & transitions
- Media queries (responsive)

3 ways we can include css in webpage
1. Inline CSS 
```js
<p style="color:red;">Hello</p>
```
2. Internal CSS 
```js
<style> p{color:red;} </style>
```
3. External CSS 
```js
<link rel="stylesheet" href="style.css">
```

**Q2: Difference between inline, block, and inline-block?**  

- inline: width/height not applicable (span, a)
- block: takes full width (div, p)
- inline-block: behaves inline but allows width/height.

**Q3: What is the Box Model?**  

Width = content + padding + border (margin lies outside).  

Total Width = margin + border + padding + content 
Example:
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

**Q4: Explain CSS Specificity Order.(Highest → Lowest)**  

Inline style > ID > Class > Element  
Example:
```txt
#id > .class > div  
```
Duplicate ID Problem:
IDs must be unique — use classes instead.

**Q5:Favicon:**  

Small icon in browser tab. size like 16*16,32*32,64*64...
```js
<link rel="icon" href="favicon.ico">
```

**Q6: Position properties?**  

- static (default)Cannot use top, left, right, bottom
```js
<div class="box">I am static</div>

.box {
  position: static;
}

```
- relative (moves within itself) Moves relative to its normal position.
```js
<div class="parent">
  <div class="box">Relative Box</div>
</div>

.box {
  position: relative;
  top: 10px;   /* moves down 10px */
  left: 20px;  /* moves right 20px */
}

```
- absolute (relative to nearest non-static) Positioned relative to the nearest positioned ancestor.
```js
<div class="parent">
  <div class="badge">NEW</div>
  <img src="product.jpg" width="150" />
</div>
.parent {
  position: relative; /* parent becomes reference */
}

.badge {
  position: absolute;
  top: 5px;
  right: 5px;
  background: red;
  color: white;
  padding: 4px;
}

```
- fixed (relative to viewport) Stays fixed relative to viewport (even when scrolling).
- sticky (hybrid) Acts relative until scroll crosses threshold, then sticks  

Sticky sticks only inside its container after reaching a scroll position, while fixed stays in the same place on the screen no matter how much you scroll.

**Q7: Flexbox Basics. Float property advantage over Flex**  

flexbox useful for 1D layout (row or column).  
```txt
+------------------+
|       d1         |
+------------------+
|       d2         |
+------------------+
|       d3         |
+------------------+
        FLEX

```
```js
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
```

- Flex box with responsive wrap
```js
.parent {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
```
- fixed and flexible layout
```js
.parent {
  display: flex;
}
.sidebar {
  width: 200px;
}
.content {
  flex: 1; 
}

```
- flex grow shrink and flex basic
```js
.item {
  flex: 1 0 200px; /* grow | shrink | basis */
}

```
Float was used to wrap text around images (flex cannot do this)
```js
<img src="pic.jpg" style="float:left; width:100px;"> Text wraps around image.

```

**Q8: Grid Basics.**  

Grid useful for 2D layout (rows and columns)
```txt
+-----+-----+-----+
| d1  | d2  | d3  |
+-----+-----+-----+
| d4  | d5  | d6  |
+-----+-----+-----+
| d7  | d8  | d9  |
+-----+-----+-----+
         GRID

```
```js
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
```
- grid area with grid template area
```js
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 200px 1fr;
```
- minimax for responsive shrink
```js
.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
}

```
**Q9: z-index and stacking context?**  

z-index works only for positioned elements (relative, absolute, fixed).

**Q10: Responsive Design.**  

Use media queries:
```js
@media (max-width: 768px) {
  .container { 
    flex-direction: column; 
    }
}
```
in project 
```js
$breakpoints: (
  "xs": 480px,
  "sm": 640px,
  "md": 768px,
  "lg": 1024px,
  "xl": 1280px,
);
@mixin xs {
  @media (max-width: map-get($breakpoints, "xs")) {
    @content;
  }
}

// Target "sm" range (481px to 640px)
@mixin sm {
  @media (min-width: (map-get($breakpoints, "xs") + 1)) and (max-width: map-get($breakpoints, "sm")) {
    @content;
  }
}

// Target "md" range (641px to 768px)
@mixin md {
  @media (min-width: (map-get($breakpoints, "sm") + 1)) and (max-width: map-get($breakpoints, "md")) {
    @content;
  }
}

// Target "lg" range (769px to 1024px)
@mixin lg {
  @media (min-width: (map-get($breakpoints, "md") + 1)) and (max-width: map-get($breakpoints, "lg")) {
    @content;
  }
}

// Target "xl" range (1025px to 1280px)
@mixin xl {
  @media (min-width: (map-get($breakpoints, "lg") + 1)) and (max-width: map-get($breakpoints, "xl")) {
    @content;
  }
}
@mixin groupXsSmMd {
  @include xs {
    @content;
  }
  @include sm {
    @content;
  }
  @include md {
    @content;
  }
}
```

**Q11: Difference between transition and animation?**  

Transition: smooth change between two states.Needs trigger (hover, active).
```js
<button class="btn">Buy Now</button>

<style>
.btn {
  background: blue;
  color: white;
  padding: 10px 20px;
  transition: background 0.3s; /* smooth change */
}

.btn:hover {
  background: darkblue; /* changes smoothly */
}
</style>

```
Animation: runs automatically with @keyframes.
```js
<div class="bell">🔔</div>

<style>
.bell {
  font-size: 40px;
  animation: shake 0.6s infinite; /* runs automatically */
}

@keyframes shake {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  50% { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
}
</style>

```
**Q12: Pseudo classes and elements.**
Pseudo-class: use to style state (e.g., :hover,:disabled, :focus,:nth-child(2),:nth-child(odd)).  

Pseudo-element: used to style particular part of element (e.g., ::before, ::after)

**Q13: Difference between margin and padding**  

Margin: Space outside the element’s border.  

Padding: Space inside the element’s border, around content.

**Q14: What are CSS combinators?**  

Define relationships between selectors:
Descendant (space), Child (>), Adjacent sibling (+), General sibling (~).
```js
<div class="parent">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <span>Span 1</span>
  <span>Span 2</span>
</div>

.parent p { color: blue; }      /* Descendant: all <p> inside .parent */
.parent > p { font-weight: bold; } /* Child: only direct <p> children */
p + span { color: red; }        /* Adjacent sibling: span immediately after <p> */
p ~ span { background: yellow; } /* General sibling: all spans after <p> */
```
**Q15: How do you handle browser compatibility in CSS?**  

Vendor Prefixes: Add browser-specific prefixes to CSS properties.
```js
display: -webkit-box;   /* Safari/Chrome older */
display: -moz-box;      /* Firefox older */
display: flex;          /* Modern browsers */
```
Feature Queries / Fallbacks: Use @supports or CSS resets.If a CSS Property Is Not Supported use this
```js
@supports (display: grid) {
  .container {
    display: grid;
  }
}
```

**Q16:Difference between em, rem, %, vw, vh, fr and px**  

px: Absolute pixel value.  

em: Relative to parent font-size.Example: if parent font-size = 16px → 2em = 32px  

rem: Relative to root (html) font-size.Example: if html font-size = 16px → 2rem = 32px  

vw: Relative to 1% of viewport width (browser width) Example: 50vw = half of the  screen width  

vh:Relative to 1% of viewport height (browser height).Example: 100vh = full visible screen height  

fr:Used in CSS Grid, means fractional unit of available space.Example: grid-template-columns: 1fr 2fr → 1 part vs 2 parts
%: Relative to parent element size.

**Q17: What are CSS variables and how to use them?**  

Reusable custom properties:
```js
:root { --main-color: blue; }
h1 { color: var(--main-color); }
```
**Q18: @property**  

Defines custom CSS properties with type and defaults.
Helps in animations and transitions for custom properties
```js
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

div:hover {
  --x: 100px; /* width will smoothly animate */
}
```
**Q19:CSS Math Functions**  

calc() → perform calculations (width: calc(100% - 50px);)  

min() → picks smallest (width: min(80%, 600px);)  

max() → picks largest (width: max(50%, 200px);)  

clamp() → range limit (font-size: clamp(14px, 2vw, 20px);)

**Q20::global**  

we can apply styles globally even inside scoped CSS files.
/* styles.module.css (style apply globally not only in component level) */
```js
:global(.btn) {
  color: red;
}
.localDiv {
  background: yellow;
}
```
**Q21:CSS Attribute Selectors**  

[attr] → elements with that attribute eg:Highlight all required fields in a form.

```js
input[required] {
  border: 2px solid red;
}

```

[attr=value] → exact match ,E.g: Style only buttons with type="submit". 
```js
button[type="submit"] {
  background: green;
  color: white;
}

```

[attr^=val] → starts with  e.g:Select links that start with https (secure URLs).
```js
a[href^="https"] {
  color: green;
}

```

[attr$=val] → ends with  e.g Style all image files ending with .png
```js
img[src$=".png"] {
  border: 2px solid blue;
}

```

[attr*=val] → contains substring  ,e.g: Select input fields whose placeholder contains 'name'
```js
input[placeholder*="name"] {
  background: #fff3cd;
}

```


**Q22: Superscript & Subscript:**  
```js
H<sub>2</sub>O → water  
x<sup>2</sup> → square
```

**Q23:CSS Font Fallback**  

Multiple fonts listed in order of priority.
If first fails, next is used.  

Example:
```js
font-family: "Roboto", "Arial", sans-serif;
```

**Q24:Border vs Outline**  

Border → part of element box, affects layout.  

Outline → drawn outside border, doesn’t affect size.
Example:
```js
border: 2px solid red;
outline: 2px solid blue;
```
**Q25:display:none vs visibility:hidden**  

display:none → Element is removed from layout (no space reserved)  

visibility:hidden → Element is hidden but still occupies space

**Q26: CSS Selectors**  

Select elements based on name, class, id, attribute, etc.
Examples:
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
- Why @import only at top?  

Because CSS loads top-down — later rules may not apply if file is not loaded first.
- Graceful Degradation:
Start for modern browsers → make sure old browsers still work.
 Example: Fancy animation → show static image on old browser.
- Progressive Enhancement:
Start simple → add advanced features if browser supports.
 Example: Plain form → add JS validation later.

**Q27: Grouping vs Nesting**  

Grouping: Combine selectors with comma.
```js
h1, h2 { color: red; }
```
Nesting (in SCSS)
```js
nav { a { color: blue; } }
```
**Q28:Cascading rules**  

When two styles have same specificity:  

✔ Last rule written wins (order matters)  

✔ More specific selector beats less specific one (like !important override all rules)

**Q29::nth-child() vs :nth-of-type()**  

:nth-child() Selects based on position among all siblings  

:nth-of-type() Selects based on position of same tag type
```js
<p>1</p>
<span>2</span>
<p>3</p>

p:nth-child(2) ❌ (No match)
p:nth-of-type(2) ✅ selects 2nd <p>
```
**Q30:How to center an element horizontally?**  

1. using margin 
```js
.box { width:200px; margin:0 auto; }
```
2. using flex 
```js
.parent { display:flex; justify-content:center; }
```
**Q31:Opacity**  

Controls transparency of an element (0–1).
```js
.box { opacity: 0.5; }

```
**Q32:Universal Selector**  
select all elements
```js
* { margin: 0; padding: 0; }

```

**Q33: Background Image**  
```js
body {
  background-image: url("bg.jpg");
  background-size: cover;       /* or contain */
  background-position: center;
}
```
**Q34: 2D Transform Functions**
```txt
| Function      | Example                             |
| ------------- | ----------------------------------- |
| `translate()` | `transform: translate(20px, 10px);` |
| `rotate()`    | `transform: rotate(45deg);`         |
| `scale()`     | `transform: scale(1.5);`            |
| `skew()`      | `transform: skew(20deg);`           |

```
**Q35:Text Alignment**
```js
p { text-align: left; } //default

p { text-align: center; }
p { text-align: right; }
p { text-align: justify; }



```
**Q36:Underline & Overline**
```js
p { text-decoration: underline; }
h1 { text-decoration: overline; }

```
**Q37: Automatic Dark & Light Mode Based on Location**  
use auto detect system theme
```js
.dark { background: #111; color: white; }
.light { background: white; color: #111; }

in js
const hour = new Date().getHours();
document.body.className = hour >= 18 || hour < 6 ? "dark" : "light";

```


SCSS THEORY
==============================

**Q1: What is SCSS and how does it differ from CSS?**  

CSS preprocessor with variables, nesting, mixins, and partials.
Compiles to standard CSS for browsers.

**Q2: Variables and scoped**  

Variables store reusable values and Scoped globally or within blocks.
```js
$primary: #3490dc;
body { color: $primary; }
```
**Q3: Nesting**
```js
nav {
  ul {
    li { color: red; }
  }
}
```
**Q4: Mixins and Include**  

@mixin: Reusable block with parameters (like a function).
```js
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container { @include flex-center; }
```
**Q5: Extends**  

@extend: Inherits all styles of another selector.
```js
%btn {
  padding: 10px;
  border-radius: 5px;
}
.btn-primary {
  @extend %btn;
  background: blue;
}
```
**Q6: Partials and Import**  
A partial is an SCSS file whose name starts with an underscore (_).Example: _buttons.scss, _variables.scss. for organizing code and reusability we use
```js
styles/
  _variables.scss
  _mixins.scss
  _header.scss
  _footer.scss
  main.scss

```

Create _variables.scss, then import:
```js
@import "variables";
@import "header";
@import "footer";
```
- Why easy to insert file with @import?
Simplifies maintenance — one CSS file can include others

**Q7: Operators**
```js
width: (100% / 3);
```
**Q8: Functions**
A SCSS function is like a JavaScript function but for CSS.it take input perform calculation and return output
```js
@function px-to-rem($px) {
  @return $px / 16 * 1rem;
}
@function space($mul) {
  @return $mul * 8px;
}

.title {
  font-size: px-to-rem(32); // returns 2rem
  padding: space(2); // return 16 px
}
```
**Q9: Loops & Conditionals**
```js
@for $i from 1 through 5 {
  .m-#{$i} {
    margin: #{$i * 4}px; // 4px, 8px, 12px...
  }
}
.m-1 { margin: 4px; }
.m-2 { margin: 8px; }
.m-3 { margin: 12px; }
.m-4 { margin: 16px; }
.m-5 { margin: 20px; }

```

**Q10: SCSS Compilation**  

Use `sass input.scss output.css` to compile.

**Q11: What are placeholders (%) in SCSS?**  

Define styles that can only be extended (not compiled by themselves).
```js
%btn { padding: 10px; }
.submit { @extend %btn; }
```

**Q12:How do control directives like @if, @for, @each work?**  

Allow logic in SCSS:
```js
@if $theme == dark { ... }
@for $i from 1 through 5 { ... }
@each $color in red, blue { ... }
```


TAILWIND CSS THEORY
==============================

**Q1:what is Atomic CSS? What is Tailwind CSS?**  

 Atomic css are single-purpose utility classes (e.g., p-4, flex, text-red-500)
 Utility-first CSS framework — style directly in HTML using class names.
 Example:
 ```js
<div class="flex items-center justifsy-between p-4 bg-blue-500 text-white">Navbar</div>
```

**Q2: What are utility-first CSS frameworks?**  

Frameworks where styling is applied via small, reusable utility classes (e.g., p-4, text-center).
no unused CSS, smaller bundle, no naming conflicts, faster rendering  

**Q3: Advantages and disadvantage**
- No writing custom CSS
- Small bundle (JIT)
- Mobile-first by default

disadvantage is Hard to read, especially for large components

**Q4: Responsive Classes**
```js
<p class="text-lg md:text-2xl lg:text-4xl">Responsive text</p>
<div class="text-sm md:text-lg lg:text-xl"></div>
```
**Q5: Hover & State Variants**
```js
<button class="bg-blue-500 hover:bg-blue-700">Click</button>
```
**Q6: Custom Theme**  

Add in tailwind.config.js
tailwind.config.js is responsible for theme,variants,and custom utility
```js
theme: {
  extend: {
    colors: { primary: '#1e40af' },
  },
}
```
**Q7: Conditional Styling**
```js
<div class={`${isActive ? "bg-green-500" : "bg-gray-500"}`}></div>
```
**Q8: Plugins**  

Forms, Typography, Line Clamp.

**Q9: How to enable dark mode in Tailwind?**  

Set in config
darkMode: 'class' or 'media'
then
Add `dark:` variant.
```js
<div class="bg-white dark:bg-black"></div>
```

**Q10: Difference between @apply and utility classes**  

@apply: Used in CSS files to compose utilities into one class.  

Utility classes: Used directly in HTML.

**Q11: How to optimize Tailwind build size?**  

Enable purge/content mode in config to remove unused styles during production build.

