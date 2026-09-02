# HTML — Complete Notes

---

### Q1: Web browser and how it works?

A web browser is a software application for retrieving and presenting info on the WWW (e.g. Google Chrome). When a browser loads a webpage, it first downloads the HTML file and starts parsing it to build the **DOM tree**. Then it fetches and parses CSS and combines both into a **Render Tree**. Finally, it executes JavaScript.

```txt
   ┌──────────────────────────┐
   │ 1. User enters URL       │
   └───────────────┬──────────┘
                   ↓
   ┌──────────────────────────┐
   │ 2. Browser checks cache  │
   └───────────────┬──────────┘
                   ↓
   ┌──────────────────────────┐
   │ 3. DNS Lookup            │
   │    → Find Server IP      │
   └───────────────┬──────────┘
                   ↓
   ┌──────────────────────────┐
   │ 4. Browser sends request │
   │    (HTTP / HTTPS)        │
   └───────────────┬──────────┘
                   ↓
   ┌──────────────────────────┐
   │ 5. Server responds       │
   │    (HTML / CSS / JS)     │
   └───────────────┬──────────┘
                   ↓
   ┌──────────────────────────┐
   │ 6. Browser Parse HTML    │
   │    and CSS, Render Tree  │
   └───────────────┬──────────┘
                   ↓
   ┌──────────────────────────┐
   │ 7. Layout & Paint        │
   └───────────────┬──────────┘
                   ↓
   ┌──────────────────────────┐
   │ 8. JavaScript runs       │
   └───────────────┬──────────┘
                   ↓
   ┌──────────────────────────┐
   │ 9. Web page displayed    │
   └──────────────────────────┘
```

> 💡 **Extra detail:** Step 2 (cache check) and step 3 (DNS lookup) are often skipped on repeat visits — the browser reuses a cached DNS resolution and, if headers allow it, a cached copy of the page's assets entirely, skipping the network round-trip.

---

### Q2: How browsers parse HTML and build the DOM tree internally?

The browser reads HTML top to bottom, breaks it into tokens, converts tokens into nodes, and links these nodes like a family tree — `html` becomes the root, and everything inside becomes its children, connected into a tree structure called the **DOM**.

```txt
html
└── body
    └── h1
        ├── (attribute) class="heading"
        └── "Hi"
```

---

### Q3: How are HTML documents tokenized by browsers?

The browser reads HTML like a scanner, character by character, and produces tokens.

```html
<h1 class="heading">Hi</h1>
```
becomes:
```txt
StartTagToken("h1")
AttributeToken("class", "heading")
TextToken("Hi")
EndTagToken("h1")
```

---

### Q4: What is HTML and why is it important?

HTML (**HyperText** — text with links that connect one page to another — **Markup Language**) structures web content. It defines the layout and semantic meaning of elements (headings, paragraphs, links, forms, etc.).

**Versions of HTML:** HTML 1.0, HTML 2.0, HTML 3, HTML 4, HTML 5.

**HTML5 features:** new elements, new attributes, multimedia, 2D/3D drawing support, drag-and-drop support.

---

### Q5: What are semantic tags? Give examples and benefits

A semantic element clearly describes its meaning to both the browser and the developer.

- **Non-semantic elements:** `div`, `span` — tell nothing about their content.
- **Semantic elements:** `img`, `table`, `header`, `nav`, `footer`, `article` — clearly define their content.

**Benefits:** improves readability & code clarity for developers, improves SEO, and is accessibility-friendly — screen readers understand sections easily.

```txt
+-------------------------------+
|            <header>           |
+-------------------------------+
|  <nav>      |     <aside>     |
|  <article>  |                 |
| <section>   |   (sidebar)     |
| (content)   |                 |
+-------------------------------+
|             <footer>          |
+-------------------------------+
```

---

### Q6: What is the difference between div and section?

`div` is a generic (block-level) container, takes full width by default, no semantic meaning — used purely for layout.
```html
<div class="card">
  ...
</div>
```

`section` groups related content **with semantic meaning** — represents a standalone section of content and helps SEO and accessibility.
```html
<section aria-label="Testimonials" class="card">
  ...
</section>
```

---

### Q7: Field set

The `fieldset` element groups related controls in a single box — improves accessibility (screen readers) and form structure. Useful in survey/form/payment sections.

```html
<fieldset>
  <legend>Payment Method</legend>
  <input type="radio" name="pay"> UPI
  <input type="radio" name="pay"> Card
</fieldset>
```

---

### Q8: What is the difference between inline, block, and inline-block elements?

- **Inline:** does not start on a new line (e.g. `span`, `a`)
- **Block:** starts on a new line, takes full width (e.g. `div`, `p`)
- **Inline-block:** stays inline but allows setting width/height (e.g. making 3 `div`s sit inline using `inline-block`)

---

### Q9: What is DOCTYPE and why is it used?

`<!DOCTYPE html>` tells the browser to render the page in **standards mode** using HTML5 syntax.

> 💡 **Extra detail:** Without a `DOCTYPE`, older browsers fall back to "quirks mode," where CSS box-model and layout rules behave inconsistently with modern specs — always include it.

---

### Q10: What are HTML meta tags?

`meta` provides metadata about a web page.
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- `UTF-8` is the most common encoding and supports almost all characters in all languages.
- `viewport` → controls layout on mobile devices.
- `width=device-width` → sets the viewport width equal to the device width.
- `initial-scale=1.0` → sets the initial zoom level when the page loads.

---

### Q11: What are global attributes in HTML?

Attributes applicable to **any** element.
Examples: `id`, `class`, `style`, `title`, `data-*`.

---

### Q12: Explain the difference between script, async, and defer

- **Normal `<script>`:** blocks rendering until it loads — the browser stops building the DOM until the script downloads and runs. Use when your script must run before the rest of the HTML loads.
```html
<script>
  console.log("Normal script → Runs immediately");
</script>
```
- **`async`:** loads in parallel and executes immediately once ready. Doesn't block parsing, but runs as soon as it loads (order not guaranteed between multiple async scripts). Use for scripts that don't depend on the DOM, like analytics, ads, trackers.
```html
<script async src="ad.js"></script>
<script async src="analytics.js"></script>
```
- **`defer`:** loads in parallel (non-blocking) but executes only **after** HTML parsing completes, and in document order. Use for scripts that need the DOM ready — most modern site scripts.
```html
<script defer src="main.js"></script>
```
- **`type="module"`:** automatically behaves like `defer`, supports `import`/`export`, and runs in strict mode.
```html
<script type="module" src="main.js"></script>
```

---

### Q13: What are forms in HTML? Form Validation Attributes

Forms collect user input using `form`, `input`, `textarea`, `select`, `button`.

Form validation attributes: `required`, `min`/`max`, `type="email/tel/password"`, `multiple`, `disabled`, `autocomplete`.

```html
<form id="my-form">
  <input type="text" placeholder="Name" />
  <button type="submit">Submit</button>
</form>
```

---

### Q14: Difference between GET and POST method?

- **GET:** sends data in the URL, used for data retrieval.
- **POST:** sends data in the body, used for data creation or sensitive info.

---

### Q15: What are data-* attributes?

Used to store custom data in HTML elements — accessible via JavaScript using `dataset`.
```html
<div data-user="sam" data-id="101">Hello</div>
```
```js
const div = document.querySelector('div');
console.log(div.dataset.user); // "sam"
console.log(div.dataset.id);   // "101"
```

---

### Q16: What is the difference between b and strong, i and em?

- **`b` vs `strong`:** `b` represents bold text (visual only), but `strong` is a **semantic** tag — bold by default, and accessibility/SEO-friendly.
- **`i` vs `em`:** `i` represents italic text (visual only), but `em` is a **semantic** tag — italic by default, and accessibility/SEO-friendly.

---

### Q17: What is the purpose of the link tag?

Used to link external resources like CSS files or icons.
```html
<link rel="stylesheet" href="style.css">
```

---

### Q18: What is accessibility (a11y)?

Making web pages usable for all users, including people with disabilities. Use semantic HTML, ARIA roles, `alt` text, keyboard navigation, and proper color contrast.

---

### Q19: What is the difference between `<img>` alt and title attributes?

- **`alt`:** alternative text shown if the image fails to load (important for accessibility and SEO).
- **`title`:** tooltip text shown on hover.

---

### Q20: What are HTML entities?

Used to display reserved characters.
Example: `&lt;` for `<`, `&gt;` for `>`, `&nbsp;` for a non-breaking space.

---

### Q21: What is lazy loading for images?

Defers image loading until it enters the viewport.
```html
<img src="img.jpg" loading="lazy" />
```

---

### Q22: What are the new features in HTML5?

- New semantic elements (`header`, `footer`, `article`, `nav`)
- Audio and video tags
- Canvas and SVG
- LocalStorage, SessionStorage
- Geolocation API
- Form enhancements (`email`, `date`, `number`)

---

### Q23: What is the difference between localStorage, sessionStorage, and cookies?

- **localStorage:** persistent key-value storage
- **sessionStorage:** clears when the tab closes
- **cookies:** small data sent with every HTTP request (used for auth/tracking)

---

### Q24: What are canvas and svg?

- **canvas:** used for drawing via JavaScript (pixel-based)
```html
<canvas id="c" width="100" height="100"></canvas>
```
- **svg:** scalable vector graphics (markup-based)
```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
<svg width="400" height="120">
  <rect x="10" y="10" width="200" height="100" stroke="red" stroke-width="6" fill="blue" />
</svg>
```

---

### Q25: Explain the template tag

The `template` tag stores HTML content that is **not rendered** on the page until you manually insert it using JavaScript — hidden by default, so it prevents hidden elements from being rendered. Useful when you need to clone, repeat, or dynamically inject HTML.

```html
<template id="card-template">
  <div class="card">
    <h3></h3>
    <p></p>
  </div>
</template>
```

---

### Q26: What is the difference between HTMLCollection and NodeList?

- **HTMLCollection:** live — updates automatically. Returned by methods like `document.getElementsByTagName()` or `getElementsByClassName()`.
- **NodeList:** static — doesn't auto-update. Returned by `document.querySelectorAll()` or `childNodes`; can also use `forEach` directly.

---

### Q27: What are ARIA roles?

ARIA (Accessible Rich Internet Applications) roles provide extra semantic meaning to HTML elements so screen readers and assistive technologies can understand their purpose.

```html
<div role="button" tabindex="0">Open Menu</div>
<button role="switch" aria-checked="false">Dark Mode</button>
```

---

### Q28: What is Shadow DOM?

Shadow DOM encapsulates (protects) a component's HTML, CSS, and behavior so it doesn't leak out and isn't affected by the external page.

```txt
 Main DOM
 ├── <div id="host">
 │     └── Shadow DOM
 │          ├── <style>p { color: red; }</style>
 │          └── <p>Shadow DOM content</p>
 └── <p>Normal DOM content</p>
```

---

### Q29: Explain the difference between relative and absolute paths in HTML

- **Relative:** based on the current file's location (e.g. `./images/pic.jpg`)
- **Absolute:** full URL (e.g. `https://site.com/images/pic.jpg`)

Absolute paths are recommended because they're stable, readable, and less likely to break when the file structure changes — many frameworks like Next.js allow aliases like `@` for this reason.

---

### Q30: What is the difference between noscript and script?

`noscript` displays fallback content when JavaScript is disabled in the browser.

---

### Q31: Explain the contenteditable attribute

Makes an element editable directly in the browser.
```html
<div contenteditable="true"></div>
```

---

### Q32: What is the purpose of `<iframe>`?

Used to embed another HTML page inside the current page.
```html
<iframe src="https://example.com"></iframe>
```

---

### Q33: What is Cross-Origin Resource Sharing (CORS)?

A security feature that restricts how resources can be fetched from another domain — improves security and avoids unintended browser blocking of cross-domain API requests.

---

### Q34: How do you optimize HTML for SEO?

- Use semantic tags (`header`, `main`, `article`, `nav`)
- Proper headings (H1–H6)
- Meta tags — title, description, viewport
- `alt` attributes for images
- Structured data

---

### Q35: Difference between article, section, and aside

- **`article`** → represents independent, self-contained content (e.g. blog post, news item).
- **`section`** → groups related content within a document (e.g. chapters, tabs).
- **`aside`** → holds secondary content (e.g. sidebar, ads, related links).

---

### Q36: What are HTML5 APIs (like localStorage, canvas, geolocation)?

**localStorage / sessionStorage:** store key-value data in the browser.
```js
localStorage.setItem('name', 'Sam');
console.log(localStorage.getItem('name'));
```
**Canvas API:** draw 2D graphics dynamically using JS.
```html
<canvas id="myCanvas" width="100" height="50"></canvas>
```
**Geolocation API:** access user's location (with permission).

Drag & Drop, Web Storage, Web Workers, Audio/Video are also HTML5 APIs.

---

### Q37: Difference between HTML entities and characters?

Entities are used to display reserved or special characters in HTML — like `>` and `<`. Characters are the actual visual symbols; entities are their encoded forms.

Example: `&lt;` displays `<`, `&nbsp;` displays a non-breaking space.
```html
<p>Character: <</p>
<p>Entity: &lt;</p>
```

---

### Q38: Difference between strong and b tags

- **`b`** → purely visual (bold text).
- **`strong`** → semantic; conveys importance (screen readers emphasize it).

---

### Q39: How to lazy load images in HTML?

Use the `loading="lazy"` attribute:
```html
<img src="image.jpg" loading="lazy" alt="example">
```

> Note: CSS **transitions** allow you to change a property value smoothly over a given duration (see the CSS notes for details).

---

### Q40: HTML Elements

Building blocks of a webpage (e.g. `div`, `p`, `a`). Each element has an opening tag and a closing tag, and elements can be nested inside each other.

---

### Q41: HTML Attributes

Provide extra info to elements — written inside the opening tag.
```html
<img src="img.png" alt="photo">
```
Common ones: `id`, `class`, `href`, `src`, `title`, `style`.

---

### Q42: Blockquote for Quotations and cite tag

Used for long quoted text.
```html
<blockquote cite="https://example.com">
  This text is quoted from another source.
</blockquote>
```
`cite` represents the title of a work (book, article, song, film, etc.) or the name of a creative work.
```html
<p>My favorite book is <cite>The Hobbit</cite>.</p>
```

---

### Q43: img vs picture Elements

- **`img`** → single image file.
- **`picture`** → multiple image sources for responsive design, so the browser can choose the best image based on screen size/device resolution — improves performance and image clarity.
```html
<picture>
  <source srcset="product-large.webp" type="image/webp" media="(min-width: 1024px)">
  <source srcset="product-medium.jpg" media="(min-width: 600px)">
  <img src="product-fallback.jpg" alt="Product">
</picture>
```

---

### Q44: HTML Tables

Used to display data in rows and columns.
```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Sam</td>
    <td>25</td>
  </tr>
</table>
```
```css
table, th, td { border: 1px solid red; }
table { width: 100%; border-collapse: collapse; table-layout: fixed; /* or auto */ }
th, td { padding: 10px; text-align: center; }
```

---

### Q45: HTML Forms handle form state and validation. Difference between onInput and onChange

`action` defines where data goes. `input` collects info, `submit` sends it.

**Form States:**
- **Empty:** fields untouched or no value entered.
- **Valid:** input matches required rules (e.g. correct email pattern).
- **Invalid:** input breaks rules (e.g. wrong format, missing required value).
- **Submitted:** form is submitted (can check via `:valid`/`:invalid` before/after submit).

**Validation:** use attributes like `required`, `min`, `max`, `minlength`, `maxlength`, `pattern`; use `:valid`/`:invalid` pseudo-classes to style based on validation state.
```html
<form action="/submit">
  <input type="email" required placeholder="Enter Email" />
  <button type="submit">Submit</button>
</form>
```
```css
input:invalid { border: 2px solid red; }
input:valid { border: 2px solid green; }
```

**`onInput`** fires immediately whenever the content of an input element changes (every keypress, paste, cut).
**`onChange`** fires when the element loses focus (blur) **and** its value has changed since it gained focus.

```jsx
const handleChange = (e) => { setState(e.target.value); };

if (currentValue.length > 10) {
  setValidationMessage('❌ Too long! (Max 10)');
} else {
  setValidationMessage('✅ Input is valid.');
}

return <input value={state} onChange={handleChange} onInput={handleInputValidation} />;
```

---

### Q46: HTML Video and Controls and Audio tag

Used to embed videos with play/pause buttons.
```html
<video width="300" controls>
  <source src="movie.mp4" type="video/mp4">
</video>

<audio controls>
  <source src="song.mp3" type="audio/mpeg" />
</audio>
```

---

### Q47: What is a Description List?

Used to display terms and descriptions (like a glossary or FAQ).
```html
<dl>
  <dt>HTML</dt>
  <dd>Markup language for web pages.</dd>
</dl>
```

---

### Q48: Ordered & Unordered List

- Ordered list `ol` → numbered list
- Unordered list `ul` → bullet list
```html
<ol><li>One</li></ol>
<ul><li>Item</li></ul>
```
Ordered list types: Number (`1`, default), Uppercase/lowercase letters (`A`, `a`), Uppercase/lowercase Roman (`I`, `i`); unordered types: circle, disc, square.

---

### Q49: What is an Image Map?

Clickable areas inside a single image, each linking to a different page. Used for: dashboards, maps, diagrams.
```html
<img src="worldmap.jpg" usemap="#map">
<map name="map">
  <area shape="rect" coords="0,0,50,50" href="asia.html">
</map>
```

---

### Q50: Marquee Tag

`<marquee>` creates scrolling text/image. **Deprecated** in HTML5 — not recommended.
```html
<marquee>Scrolling Text</marquee>
```

---

### Q51: What is datalist?

`datalist` provides autocomplete suggestions for an input field — the user can either type freely or pick a suggestion from the list.
```html
<input list="fruits">
<datalist id="fruits">
  <option value="Apple">
  <option value="Banana">
  <option value="Cherry">
</datalist>
```

---

### Q52: What is base, code, pre, dialog, details/summary, progress, meter, address tag?

**`base`** — specifies the base URL and target for all relative URLs in a document.
```html
<head><base href="https://example.com/"></head>
```
**`code`** — displays inline code snippets in a monospace font.
```html
<p>To print something in JS, use <code>console.log()</code>.</p>
```
**`pre`** — preserves whitespace and line breaks, monospace font, exactly as typed.
```html
<pre>
function greet() {
  console.log("Hello");
}
</pre>
```
**`dialog`** — creates a popup dialog/modal, opened via JavaScript.
```html
<dialog id="popup">
  <p>This is a dialog box!</p>
  <button onclick="popup.close()">Close</button>
</dialog>
<button onclick="popup.showModal()">Open Dialog</button>
```
**`details`/`summary`** — creates a collapsible section; `summary` is the title, `details` contains the hidden content.
```html
<details>
  <summary>Click to see more</summary>
  <p>This is hidden content!</p>
</details>
```
**`meter`** — displays a measurement within a known range (e.g. battery level, temperature).
```html
<meter value="0.7" min="0" max="1">70%</meter>
```
**`address`** — contact information for the nearest article/section/author, usually rendered in italics by browsers.
```html
<address>
  John Doe<br>
  <a href="mailto:john@example.com">john@example.com</a>
</address>
```

---

### Q53: Why is br called an empty/void element?

Because it has no content — like `img`, `hr`, `input`, `meta`, `link`.

---

### Q54: Does hyperlink only apply to text?

No — it applies to both text and images.
```html
<a href="https://example.com" style="display: inline-block;">
  <img src="product.jpg" alt="Product" width="100">
  <span>Buy this Product</span>
</a>
```

**Note:**
- `target` attribute on `<a>`:
  1. `target="_blank"` → opens link in a new tab
  2. `target="_self"` → opens link in the same tab
- `download` attribute on `<a>` — downloads the resource instead of navigating.
  1. `download="report.pdf"`

---

### Q55: What are Core Web Vitals? List of Core Web Vitals

Web Vitals are key performance metrics used to measure user experience on the web — they track loading, interactivity, and layout stability.

**1. LCP (Largest Contentful Paint)** — how long the main content (hero image, banner, large text) takes to load. Good LCP: ≤ 2.5s.
- *How Next.js improves LCP:* automatic image resizing/compression (WebP/AVIF), built-in CDN optimization, lazy loading for non-critical images, reduced render-blocking CSS/JS via file-based routing and code splitting.

**2. FID (First Input Delay)** — the delay between the user's first interaction (click, typing) and the browser's response. Good FID: ≤ 100ms. High FID usually means too much JavaScript blocking the main thread.

**3. CLS (Cumulative Layout Shift)** — visual stability, how much elements unexpectedly shift while the page loads. Goal: as close to 0 as possible.
- *How Next.js prevents CLS:* `img` requires `width`+`height` (reserves space), `priority` on above-the-fold images, automatic font optimization via `next/font`.

**How to measure Web Vitals:** Lighthouse (Chrome), Chrome DevTools → Performance tab, Google Search Console → Core Web Vitals report.

> 💡 **Extra detail:** As of 2024, Google replaced **FID** with **INP (Interaction to Next Paint)** as the official Core Web Vital — INP measures the responsiveness of *all* interactions throughout the page's lifetime (not just the first one), giving a more complete picture.

---

### Q56: Service Worker

A Service Worker is a JavaScript script running in the background, separate from the web page, acting as a programmable proxy between the browser, network, and web app — enabling advanced features like offline access, push notifications, and background sync.

---

### Q57: Video Performance Optimization

- Use WebM, AV1, MP4
- Lazy load videos
- Use a poster image for loading
- Avoid autoplay
- Use HLS/DASH for streaming

---

### Q58: Critical Rendering Path (CRP)

```txt
                ┌────────────────────────┐
                │        HTML File        │
                └────────────┬───────────┘
                             │
                             ▼
                     Build the DOM
                             │
                             ▼
                ┌────────────────────────┐
                │       CSS Files         │
                └────────────┬───────────┘
                             │
                             ▼
                     Build the CSSOM
                             │
                             ▼
                  ┌──────────────────┐
                  │   Render Tree    │
                  │  (DOM + CSSOM)   │
                  └─────────┬────────┘
                            │
                            ▼
                         Layout
               (Calculate positions & size)
                            │
                            ▼
                          Paint
                (Draw pixels on layers)
                            │
                            ▼
                       Composite
              (Combine layers on screen)
                            │
                            ▼
                         Display
```

---

### Q59: Render Blocking vs Parser Blocking

**Render blocking** — browser cannot show UI until loaded. Examples: CSS, blocking JS.
**Parser blocking** — HTML parser stops to execute a script. Examples: `<script>` without `defer`/`async`, `document.write()`.

---


### Q60: What are void (self-closing) elements in HTML?

Elements that have **no closing tag** and cannot contain content — the browser knows they're "empty" by definition. Common ones: `img`, `br`, `hr`, `input`, `meta`, `link`, `area`, `col`, `embed`, `source`, `track`, `wbr`.
```html
<br>
<img src="pic.jpg" alt="pic">
<input type="text">
```
> In HTML5 the trailing slash (`<br />`) is optional — it's only required in strict XHTML syntax.

---

### Q61: What are the common HTML5 `input` types?

Beyond `text`/`password`/`checkbox`, HTML5 added several input types that give built-in validation and better mobile keyboards:
```html
<input type="email">
<input type="tel">
<input type="url">
<input type="number" min="1" max="10">
<input type="range" min="0" max="100">
<input type="date">
<input type="time">
<input type="month">
<input type="week">
<input type="color">
<input type="search">
```

---

### Q62: What is the `srcset` and `sizes` attribute on `<img>`?

Provides responsive images **without** needing the full `<picture>` element — lets the browser pick the best resolution image based on screen density/viewport width.
```html
<img
  src="small.jpg"
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 600px) 480px, 800px"
  alt="Responsive image"
>
```

---

### Q63: What is `preload`, `prefetch`, and `preconnect` (resource hints)?

Hints that tell the browser to prioritize fetching certain resources before they're actually needed, improving perceived performance.
```html
<link rel="preload" href="font.woff2" as="font" crossorigin>
<link rel="prefetch" href="next-page.js">
<link rel="preconnect" href="https://api.example.com">
<link rel="dns-prefetch" href="https://api.example.com">
```
| Hint | Use case |
|---|---|
| `preload` | Resource needed **very soon** on the current page (critical font/CSS) |
| `prefetch` | Resource likely needed on the **next** navigation |
| `preconnect` | Warm up a connection (DNS + TCP + TLS) to a domain you'll fetch from soon |

---

### Q64: What's the difference between `DOMContentLoaded` and `window.onload`?

`DOMContentLoaded` fires once the HTML has been fully parsed and the DOM tree is built — **without** waiting for images/stylesheets/subframes.
`window.onload` (or the `load` event) fires only after **everything** — including images and other external resources — has finished loading.
```js
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready, but images may still be loading');
});
window.addEventListener('load', () => {
  console.log('Everything, including images, has loaded');
});
```

---

### Q65: What is the difference between `colspan` and `rowspan` in tables? What are `thead`/`tbody`/`tfoot`?

`colspan` merges cells **horizontally**; `rowspan` merges cells **vertically**.
```html
<table>
  <tr><td colspan="2">Merged across 2 columns</td></tr>
  <tr><td rowspan="2">Merged down 2 rows</td><td>A</td></tr>
  <tr><td>B</td></tr>
</table>
```
`thead`, `tbody`, `tfoot` semantically group a table's header, body, and footer rows — improves accessibility and lets you style/scroll each section independently.
```html
<table>
  <thead><tr><th>Name</th><th>Age</th></tr></thead>
  <tbody><tr><td>Sam</td><td>25</td></tr></tbody>
  <tfoot><tr><td colspan="2">End of table</td></tr></tfoot>
</table>
```

---

### Q66: What is the `enctype` attribute on a form, and when is it needed?

Specifies how form data is encoded when submitted — mainly relevant for file uploads.
```html
<form method="POST" enctype="multipart/form-data">
  <input type="file" name="resume">
</form>
```
| Value | Use case |
|---|---|
| `application/x-www-form-urlencoded` (default) | Standard text fields |
| `multipart/form-data` | Required when uploading files |
| `text/plain` | Rarely used, mostly for debugging |

---

### Q67: What are Web Components / Custom Elements?

A browser-native way to build reusable, encapsulated components (similar in spirit to React components, but framework-independent) — combines **Custom Elements**, **Shadow DOM** (Q28), and the **`<template>`** tag (Q25).
```js
class MyCounter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<button>Clicked 0 times</button>`;
  }
}
customElements.define('my-counter', MyCounter);
```
```html
<my-counter></my-counter>
```

---

### Q68: What is a Progressive Web App (PWA), and what is `manifest.json`?

A PWA is a web app that can be **installed** on a device and work **offline**, using a **Service Worker** (Q56) for caching/offline support and a `manifest.json` file that describes the app (name, icons, theme color, start URL) so it can be added to the home screen.
```html
<link rel="manifest" href="/manifest.json">
```
```json
{
  "name": "My App",
  "short_name": "App",
  "start_url": "/",
  "display": "standalone",
  "icons": [{ "src": "/icon.png", "sizes": "512x512", "type": "image/png" }]
}
```

---

### Q69: How do you add structured data (Schema.org) for SEO?

Structured data (usually JSON-LD) describes page content in a machine-readable format so search engines can display rich results (star ratings, FAQ dropdowns, product prices).
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Wireless Headphones",
  "offers": { "@type": "Offer", "price": "49.99", "priceCurrency": "USD" }
}
</script>
```

---

### Q70: What is the difference between HTML and XHTML?

| HTML5 | XHTML |
|---|---|
| Lenient parsing — browser tolerates unclosed tags, mismatched case | Strict XML syntax — must be well-formed |
| Tags can be uppercase/lowercase | Tags must be lowercase |
| Attributes can be unquoted in some cases | Attributes must always be quoted |
| Void elements don't require a trailing slash | Void elements require `<br />` style closing |

> In practice, virtually all modern web development uses HTML5, not XHTML.