
CSS NOTES
====================

**Q1: what is CSS? CSS Boilerplate? Is CSS case-sensitive? Different ways to include CSS in a webpage?**  

CSS, which stands for Cascading(styles apply in order of priority) Style Sheets, is a style sheet language used in web development to control the presentation and formatting of HTML documents
```js
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width:100%;
}

```

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

- inline: width/height not applicable (span, a).perfect for small labels, icons, hyperlink
- block: takes full width (div, p). perfect for Layouts, full width row, box container
- inline-block: behaves inline but allows width/height.perfect for buttons, badges, small card
```js
<span class="tag">React</span>
<span class="tag">JavaScript</span>

<style>
.tag {
  display:inline-block;
  padding:5px 10px;
  background:#eee;
}
</style>

```

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
<link rel="icon" href="/favicon.ico">
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
```js
<body>
<style>
.navbar {
  position: sticky;
  top: 0;
  background: #333;
  color: white;
  padding: 15px;
  font-size: 20px;
}

.content {
  padding: 20px;
}
</style>

 <nav class="navbar">
    Sticky Navigation Bar
  </nav>

  <div class="content">
    <p>Scroll down to see the navbar stick to the top...</p>
    <p>Lorem ipsum dolor sit amet...</p>
    <p style="height: 1200px;"></p> <!-- Just for scrolling -->
  </div>
</body>
```
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
flex-grow makes an item expand when there is extra space and flex-shrink makes an item shrink when there is not enough space.
```js
.item {
  flex: 1 0 200px; /* grow | shrink | basis */
}

```
- display: flex is a block-level flex container.it takes full width (like div)
Float was used to wrap text around images (flex cannot do this).when you want a section-level layout we use
- display: inline-flex is a inline-level flex container behaves like inline elements (like span) it does not take full width. when you want an element must stay inline with text or other inline elements
```js
<span class="tag">
  <img src="icon.png" width="16"> Profile
</span>

<style>
.tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: #eee;
}
</style>

```
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
Note:in grid auto-fill fill the entire row and create empty columns ,auto-fill Empty tracks reserved and items do not stretch to fill empty space
```txt
| 1 | 2 | 3 |    |    |

```
```js
<div class="grid autofill">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
<style>
.autofill {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}

</style>
```
auto-fit Fit content only so empty columns collapse so here empty column removed and Items stretch automatically
```txt
|        1        |        2        |        3        |

```
```js
<div class="grid autofit">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
<style>
.autofit {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

</style>
```

**Q9: z-index and stacking context?**  

z-index works only for positioned elements (relative, absolute, fixed).
```js
<div class="box box1"></div>
<div class="box box2"></div>

.box {
  width: 150px;
  height: 150px;
  position: absolute; 
}

.box1 {
  background: lightblue;
  top: 20px;
  left: 20px;
  z-index: 1; 
}

.box2 {
  background: tomato;
  top: 60px;
  left: 60px;
  z-index: 2; 
}
```

**Q10: Responsive Design.**  

Use media queries:
```js
@media (max-width: 768px) {
  .container { 
    flex-direction: column; 
    }
}
or
@media (width >= 768px) {
  .sidebar { display: block; }
}
or
@media (768px < width < 1024px) {
  .box { background: yellow; }
}


 or
 @media (min-width: 768px) and (max-width: 1024px) {
  .container { 
    flex-direction: column; 
    }
  }
 or
 @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  //else orientation: landscape
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

```js
<style>
  .required::before {
  content: " *";
  color: red;
  font-weight: bold;
}

  </style>
  <label class="required">Name</label>
<input type="text">
```

**Q13: Difference between margin and padding**  

Margin: Space outside the element’s border. margin-inline affects left-right(inline) direction and margin-block affects the top–bottom (block) direction
```js
.box {
  margin-inline: 20px;
  margin-block: 10px;
}
and 

avoid writing: 
    margin-top: 20px; 
    margin-bottom: 10px;
Instead, we use: 
    margin-block-start: 20px; 
    margin-block-end: 10px;
```



Padding: Space inside the element’s border, around content.

```js
avoid writing:
    padding-left: 20px;
    padding-right: 10px;
Instead, we use:
    padding-inline-start: 20px;
    padding-inline-end: 10px;

```

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

em: Relative to parent font-size.Example: if parent font-size = 16px → 2em = 32px.In padding ,font-size we use rem
```js
button {
  font-size: 1em;        /* relative to parent */
  padding: 0.5em 1em;    /* grows if font-size grows */
}
```
rem: Relative to root (html) font-size.Example: if html font-size = 16px → 2rem = 32px. In margin, padding, gap, font-size we use rem
```js
.section {
  margin: 2rem;
  padding: 1rem;
}
h1{
  font-size: 2rem;
}
```

vw: Relative to 1% of viewport width (browser width) Example: 50vw = half of the  screen width  

vh:Relative to 1% of viewport height (browser height).Example: 100vh = full visible screen height  

fr:Used in CSS Grid, means fractional unit of available space.Example: grid-template-columns: 1fr 2fr → 1 part vs 2 parts
%: Relative to parent element size.

**Q17: What are CSS variables and how to use them?**  

- external css variables
```js
:root {
  --primary-color: #2563eb;   
  --secondary-color: #f59e0b;
}
h1 { 
  color: var(--primary-color);
  background-color:var(--secondary-color); 
}
```
- inline variable also use
```js
<div class="box" style="--i: 1"></div>
<div class="box" style="--i: 2"></div>
<div class="box" style="--i: 3"></div>

.box {
  transform: rotate(calc(var(--i) * 20deg));
}

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

calc() → perform calculations 
```js
width: calc(100% - 2rem);
min-height: calc(100vh - 80px);
grid-template-columns: 200px calc(100% - 200px);
``` 

min() → picks smallest  

max() → picks largest  
```js
width: min(90vw, 50%);
font-size: max(5vw, 32px);
padding: min(5vw, 2rem);

```
clamp() → range limit It chooses a value that never goes below the minimum and never exceeds the maximum.Useful for responsive design.
```js

  font-size: clamp(1rem, 5vw, 2rem);//clamp(min, preferred, max)
  width: clamp(200px, 50vw, 600px);
  padding: clamp(0.5rem, 2vw, 1.5rem);
  gap: clamp(8px, 2vw, 32px);
  border-radius: clamp(4px, 1vw, 20px);

```

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
a[class|="link"] →selects elements where the class attribute is exactly "link", or starts with "link-"
```js
<a class="link">Exact</a>
<a class="link-primary">Dash Match</a>
<a class="link-secondary">Dash Match</a>
a[class|="link"] {
  color: red;
}

```

[attr^=val] → starts with  e.g:Select links that start with https (secure URLs).
```js
<a href="https://google.com">Google Secure</a>
<a href="http://example.com">Insecure</a>
<a href="https://github.com">GitHub</a>

a[href^="https"] {
  color: green;
}

```

[attr$=val] → ends with  e.g Style all image files ending with .png
```js
<img src="logo.png"/>
<img src="banner.jpg"/>
<img src="icon.png"/>

img[src$=".png"] {
  border: 2px solid blue;
}

```

[attr*=val] → contains substring  ,e.g: Select input fields whose placeholder contains 'name'
```js
<input type="text" placeholder="Enter your name">
<input type="text" placeholder="username field">
<input type="text" placeholder="email address">

input[placeholder*="name"] {
  background: #fff3cd;
  border: 1px solid orange;
}

```


**Q22: Superscript & Subscript:**  
```js
H<sub>2</sub>O → water  
x<sup>2</sup> → square
```

**Q23:CSS Font Fallback. @font-face**  

Multiple fonts listed in order of priority.
If first fails, next is used.  

Example:
```js
font-family: "Roboto", "Arial", sans-serif;
```
font-face allows loading custom fonts into your app.
```js
@font-face {
  font-family: "MyFont";
  src: url("myfont.woff2");
}

body {
  font-family: "MyFont";
}

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
```js
/* styles.scss */
@use "variables";
@use "mixins" as *;

.button {
  color: variables.$primaryColor;
  @include mixins.center;
}

```
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
or

body {
  background: hsl(0 0% 0% /0.8) url("bg.jpg") center/cover no-repeat;
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

text-align is a CSS property used to control the horizontal alignment of inline content inside a block element  

```js
p { text-align: left; } //default

p { text-align: center; }
p { text-align: right; }
p { text-align: justify; }



```
**Q36:Underline & Overline**  
text-decoration is a CSS property used to add or remove decoration lines on text.
```js
p { text-decoration: underline; }
h1 { text-decoration: overline; }
p { text-decoration: none; }
h2{ text-decoration: line-through;}

```
create custom text decoration using
```js
text-decoration-thickness:12px;
text-decoration-color:12px;
text-decoration-style:wavy;
text-decoration-offset:-10px;
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
**Q38.How to create @layer in CSS & what is its use?**  
@layer is used to control the order of CSS styles intentionally.It prevents style conflicts
```js
@layer reset, base, components, utilities;

@layer reset {
  * { margin: 0; padding: 0; }
}

@layer base {
  body { font-family: sans-serif; }
}

@layer components {
  .btn { padding: 10px 20px; }
}

@layer utilities {
  .text-red { color: red; }
}

```
**Q39.What are :has(), :not(), :is() selectors?**  
:has() → :has() is a parent selector — it selects an element based on its children or descendants
```js
<div class="card">
  <a href="#">Read more</a>
</div>
<style>
.card:has(a:hover) {
  background: lightyellow;
  border: 2px solid orange;
}
</style>

or
<form class="form">
  <input type="text" required>
</form>
<style>
.form:has(input:invalid) {
  border: 2px solid red;
}

</style>
```
:not() → exclude specific elements from selection
```js
<button class="primary">Submit</button>
<button>Cancel</button>
<button>Delete</button>
<style>
button:not(.primary) {
  background: #eee;
}

</style>

or
<ul>
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>

<style>
li:not(:first-child) {
  color: blue;
}
ul{
  list-style-type: circle;//disc square upper-roman lower-roman decimal
  list-style-position: inside;//outside
  list-style-image: url('img.gif');
}
</style>

```
:is() → simplifies long or repeated selectors.
It groups multiple selectors to avoid writing duplicate CSS.
```js
<div class="card">
  <a href="#">Link</a>
  <button>Buy</button>
</div>
<style>
.card :is(a, button) {
  cursor: pointer;
}
</style>
```
**Q40.What is the inset property?**  
inset is a shorthand for top + right + bottom + left

```js
inset: 10px 20px;        /* top/bottom, left/right */
inset: 10px 20px 30px 40px; /* top, right, bottom, left */
```
**Q41.what is box-shadow, text-shadow, and drop-shadow?**  
- box-shadow:Adds shadow around a box element (div, card, button, image container).
It is applied to the element’s box (border + padding area).
```js
<div class="card">Card</div>

<style>
.card {
  width: 120px;
  padding: 20px;
  background: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* x-offset, y-offset, blur, color */
}
</style>

```
- text-shadow:Adds a shadow behind text characters only (not the box).
```js
<h2 class="title">Shadow Text</h2>

<style>
.title {
  font-size: 30px;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.4);
}
</style>

```
- drop-shadow():A filter-based shadow applied to the shape of an image, not its rectangular box.
Useful for PNG/transparent images, icons, SVGs.
```js
<img src="girl.png" class="icon">

<style>
.icon {
  filter: drop-shadow(0 5px 8px rgba(0,0,0,0.4));
}
</style>

```
**Q42.what is line-height?**  
line-height controls the vertical spacing between lines of text.
```txt
line-height: 1 → tight text
line-height: 1.5 → readable
line-height: 2 → spacious
```
**Q43.What is clip-path? How does clip-path work internally?**  
clip-path is a CSS property that cuts an element into a specific shape.
Anything outside the shape becomes hidden.  
It tells the browser to show only a region of an element using a path.so browser clips pixel outside it.
```js
img {
  clip-path: circle(50%);
  or
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
}

```
**Q44. What is text-wrap?**  
text-wrap is a new CSS property that controls how text breaks inside an element.
```js
text-wrap: wrap;
text-wrap: nowrap;
text-wrap: balance;
text-wrap: pretty;
```
**Q45.type of css colors**  
- **Hex** Short, common, simple.
```js
color: #ff5733;

```
- **RGB** Good when doing JavaScript color animations
```js
color: rgb(255, 87, 51);
```
- **HSL(Best for responsive themes)** Easy to change lightness & saturation when screen, theme
```js
color: hsl(10, 80%, 60%);
```
**Q45.When to use width vs max-width in responsive design?**  
fixed width always fixes exact width but in max-width shrinks on small screens and max-width best for responsiveness  
**Q46.how to use multiple background**  
```js
div {
  background:
    url(bg-top.png) top left no-repeat,
    url(bg-pattern.png) center repeat;
}

```
**47.what is aspect-ratio,transform-style, perspective?**  
**aspect-ratio**  
Keeps element height proportional to width (responsive images/cards).
```js
  aspect-ratio: 3 / 2;
```
**transform-style**  
CSS property determines how child elements of an element are rendered in 3D space
```js
  transform: rotateY(60deg);
  transform-style: preserve-3d;
```
**perspective**
Creates depth/3D view for parent container, we use in 3D card, rotate cube, carousel
```js
  perspective: 100px;
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
//_mixin.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

//main.scss
@use "mixins";

.container {
  @include mixins.flex-center;
}

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
**Q6: What are placeholders (%) in SCSS?**  

Define styles that can only be extended (not compiled by themselves).
```js
%btn { padding: 10px; }
.submit { @extend %btn; }
```  

**Q7: Partials and Import**  
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

**Q8: Operators**
```js
width: (100% / 3);
```
**Q9: Functions**
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
**Q10: Loops & Conditionals**
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

**Q11: SCSS Compilation**  

Use `sass input.scss output.css` to compile.

**Q12:How do control directives like @if, @for, @each work?**  

Allow logic in SCSS:
```js
@if $theme == dark { ... }
@for $i from 1 through 5 { ... }
@each $color in red, blue { ... }
```
**Q13: What is SCSS Maps?**  
SCSS maps act like mini-dictionaries where you store values under keys, and later you can fetch any value by its key map-get().
```js
$theme: (
  primary: #3498db,
  danger:  #e74c3c
);

.button {
  color: map-get($theme, primary);
}
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
<div class="text-sm md:text-lg lg:text-xl">text</div>
<h1 class="text-[clamp(24px,5vw,48px)]">Heading</h1>
<div class="grid gap-2 sm:gap-4 md:gap-8 lg:gap-12"> Responsive gap</div>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">Responsive Grid<div>
<div class="rounded-md bg-[url('/small.jpg')] sm:bg-[url('/medium.jpg')] lg:bg-[url('/large.jpg')]">Background</div>
<div class="aspect-[4/3] md:aspect-[16/9]">Image</div>
<div class="@container">
   <p class="@sm:text-xl @lg:text-4xl">Hello</p>
</div>


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

