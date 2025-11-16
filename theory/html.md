
HTML NOTES
====================

**Q1: web browser and how it works?**  

web browser is a s/w application for retrieving presenting info on www e.g google chrome
When a browser loads a webpage, it first downloads the HTML file and starts parsing it to build the DOM tree.
Then it fetches and parses CSS and combines both into a Render Tree.Finally, it executes JavaScript
```txt
1️⃣ User Enters URL (e.g., https://google.com)
          ↓
2️⃣ Browser Checks Cache 
   - If found → loads faster without server
          ↓
3️⃣ DNS Lookup → Finds Server IP
   - Converts domain → IP address (e.g., 142.250.182.78)
          ↓
4️⃣ Browser Sends HTTP/HTTPS Request to Server
   - Includes: headers, cookies, auth, data
          ↓
5️⃣ Server Processes Request & Sends Response
   - HTML (structure), CSS (styles), JS (logic), Images, Fonts
          ↓
6️⃣ Browser Rendering Engine Starts Processing
     HTML → DOM (Document Object Model)
     CSS → CSSOM (CSS Object Model)
     DOM + CSSOM → Render Tree (visible nodes)
          ↓
7️⃣ Layout (Reflow) & Paint
   - Layout: position & size of elements
   - Paint: colors, text, borders, images
          ↓
8️⃣ JavaScript Execution
   - JS downloads → parsed → executed by JS Engine (V8)
          ↓
9️⃣ Web Page Displayed on Screen

```

**Q2: why br called empty element?**  

because it has no content

**Q3: does hyperlink only apply to text?**  

text and image both
```js
<a href="https://example.com" style="display: inline-block;">
  <img src="product.jpg" alt="Product" width="100">
  <span>Buy this Product</span>
</a>

```

**Q4: What is HTML and why is it important?**  

 HTML (HyperText(text with links that connect one page to another) Markup Language) structures web content. It defines the layout and semantic meaning of elements (headings, paragraphs, links, forms, etc.).  

- version of html are  

html 1.0 html2.0 html 3 html 4 html 5
- HTML5 features  

new element new attribute multimedia 2d 3d drawing support, drag and drop support

**Q5: What are semantic tags? Give examples and benefits**  

 A semantic element clearly describes its meaning to both the browser and the developer.
- Examples of non-semantic elements: div and span - Tells nothing about its content.
- Examples of semantic elements: img, table, header,nav,footer, article - Clearly defines its content.
- benefits:Improves readability & code clarity for developers, improve SEO and Accessibility friendly – screen readers understand sections easily.
```txt
+-------------------------------+
|            <header>           |
+-------------------------------+
|  <nav>      |     <aside>     |
|             |                 |
| <section>   |   (sidebar)     |
| (content)   |                 |
+-------------------------------+
|             <footer>          |
+-------------------------------+
```

**Q6: What is the difference between div and section?**  

 div is a generic(block-level) container takes full width by default, no semantic meaning.it has no meaning used for layout. 
 ```js
<div  class="card">
  ...
</div>

 ``` 

section groups related content with semantic meaning.represent a standalone section  of content and help in seo and accessibility.
```js
<section aria-label="Testimonials" class="card">
  ...
</section>

```

**Q7: Field set**  

fieldset element is used to group  related control in a single box.It improves accessibility (screen readers) and form structure. in survey / form / payment section you can use 
```js
<fieldset>
  <legend>Payment Method</legend>
  <input type="radio" name="pay"> UPI
  <input type="radio" name="pay"> Card
</fieldset>

```
**Q8: What is the difference between inline, block, and inline-block elements?**
- Inline: does not start on new line (e.g., span, a)
- Block: starts on new line, takes full width (e.g., div, p)
- Inline-block: stays inline but allows setting width/height.(e.g., make 3 div inline using inline-block)

**Q9: What is DOCTYPE and why is it used?**  

 <!DOCTYPE html> tells the browser to render the page in standards mode using HTML5 syntax.

**Q10: What are HTML meta tags?**  

 meta provides metadata about a web page.
Examples:
```js
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- UTF-8 is the most common encoding and supports almost all characters in all languages.
- viewport → Controls layout on mobile devices.
- width=device-width → Sets the viewport width equal to the device width.
initial-scale=1.0 → Sets the initial zoom level when the page loads.

**Q11: What are global attributes in HTML?**  

 Attributes applicable to any element.
Examples: id, class, style, title, data-*.

**Q12: Explain the difference between script async, and defer explain**
- Normal <script>: blocks rendering until script loads. normal <script> stops HTML parsing
                  Small scripts, must run before DOM
- async: loads in parallel and executes immediately. async doesn’t block parsing but runs as soon as it loads.
                  Independent scripts, e.g., analytics
- defer: loads in parallel but executes after HTML parsing. defer waits until HTML is fully parsed before executing
                  Scripts that rely on DOM elements
```txt
  HTML Parsing: |---parsing---|
  <script>      |---BLOCK---EXECUTE---|
  <script async> |---parsing---LOAD---EXECUTE---|
  <script defer> |---parsing---LOAD---|EXECUTE|`
```
**Q13: What are forms in HTML? Form Validation Attributes**  

Forms collect user input using form, input, textarea, select, button.  
Form validation attribute are required,min/max,type="email/tel/password" multiple disable autocomplete
Example:

```txt
  <form id="my-form">
    <input type="text" placeholder="Name" />
    <button type="submit">Submit</button>
  </form>
```

**Q14: Difference between GET and POST method?**
- GET: sends data in URL, used for data retrieval.
- POST: sends data in body, used for data creation or sensitive info.

**Q15: What are data-* attributes?**  

Used to store custom data in HTML elements.Accessible via JavaScript using dataset.
Example: 
```js
<div data-user="sam" data-id="101">Hello</div>
const div = document.querySelector('div');
console.log(div.dataset.user); // Output: "sam"
console.log(div.dataset.id);   // Output: "101"
```

**Q16: What is the difference between b and strong, i and em?**
- b and strong: b represent bold text(visual only) but strong is a semantic tag and bold by default and accessibility and seo friendly.
- i and em: i represent italic text(visual only) but em is a semantic tag and italic by default and accessibility and seo friendly.

**Q17: What is the purpose of link tag?**  

 Used to link external resources like CSS files or icons.
Example:
```js
 <link rel="stylesheet" href="style.css">
 ```

**Q18: What is accessibility (a11y)?**  

 Making web pages usable for all users including people with disabilities.
Use semantic HTML, ARIA roles, alt attributes, keyboard navigation.
Use semantic HTML, ARIA roles, alt text, keyboard navigation, and proper color contrast

**Q19: What is the difference between <img> alt and title attributes?**  

- alt: alternative text shown if image fails to load (important for accessibility)
- title: tooltip text shown on hover.

**Q20: What are HTML entities?**  

 Used to display reserved characters.
Example: &lt; for < , &gt; for > , &nbsp; for space.

**Q21: What is lazy loading for images?**  

 Defers image loading until it enters the viewport.
Example:
```js
 <img src="img.jpg" loading="lazy" />
```

**Q22: What are the new features in HTML5?**  

- New semantic elements (header, footer, article, nav)
- Audio and video tags
- Canvas and SVG
- LocalStorage, SessionStorage
- Geolocation API
- Form enhancements (email, date, number)

**Q23: What is the difference between localStorage, sessionStorage, and cookies?**  

- localStorage: persistent key-value storage
- sessionStorage: clears when tab closes
- cookies: small data sent with every HTTP request (used for auth/tracking)

**Q24: What are canvas and svg?**
- canvas: used for drawing via JavaScript (pixel-based)
```js
<canvas id="c" width="100" height="100"></canvas>
```
- svg: scalable vector graphics (markup-based)
```js
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>

<svg width="400" height="120">
  <rect x="10" y="10" width="200" height="100" stroke="red" stroke-width="6" fill="blue" />
</svg>
```

**Q25: Explain template tag.**  

The template tag is used to store HTML content that is not rendered on the page until you manually insert it using JavaScript.it is hidden by default so it prevents hidden elements from being rendered.It is useful when you need to clone, repeat, or dynamically inject HTML.
Example:
```js
<template id="card-template">
  <div class="card">
    <h3></h3>
    <p></p>
  </div>
</template>
```
**Q26: What is the difference between HTMLCollection and NodeList?**  

- HTMLCollection: live, updates automatically.Returned by methods like document.getElementsByTagName() or getElementsByClassName()
- NodeList: static, doesn’t auto-update.Returned by document.querySelectorAll() or childNodes also can use forEach directly for loop

**Q27: What are ARIA roles?**  

ARIA (Accessible Rich Internet Applications) roles provide extra semantic meaning to HTML elements so that screen readers and assistive technologies can understand their purpose.
Example:
```js
 <div role="button" tabindex="0">Open Menu</div>
<button role="switch" aria-checked="false">
  Dark Mode
</button>
```

**Q28: What is Shadow DOM?**  

Shadow DOM is used to encapsulate (protect) a component's HTML, CSS, and behavior so it does not leak out and does not get affected by the external page
 Encapsulates HTML structure and CSS styles, preventing them from affecting the main DOM
```txt
 Main DOM
 ├── <div id="host">
 │     └── Shadow DOM
 │          ├── <style>p { color: red; }</style>
 │          └── <p>Shadow DOM content</p>
 └── <p>Normal DOM content</p>
```

**Q29: Explain difference between relative and absolute paths in HTML.**
- Relative: based on current file location (e.g., ./images/pic.jpg)
- Absolute: full URL (e.g., https://site.com/images/pic.jpg)  
Absolute paths are recommended because they are stable, readable, and less likely to break when the file structure changes so many framework like Nextjs allow aliases like @

**Q30: What is the difference between noscript and script?**  

noscript displays fallback content when JS is disabled.

**Q31: Explain contenteditable attribute.**  

Makes an element editable directly in the browser.
Example: 
```js
<div contenteditable="true"></div>
```

**Q32: What is the purpose of <iframe>?**  

Used to embed another HTML page inside current page.
Example:
```js
 <iframe src="https://example.com"></iframe>
```

**Q33: What is cross-origin resource sharing (CORS)?**  

A security feature that restricts how resources can be fetched from another domain.
it improves Security and avoids browser blocking of cross-domain API requests
**Q34: How do you optimize HTML for SEO?**  

- Use semantic tags ( header, main, article, nav )
- Proper headings ( H1–H6 )
- Meta tag - title, description, viewport
- Alt attributes for images
- Structured data

**Q35: Difference between article, section, and aside**  

- article → Represents independent, self-contained content (e.g., blog post, news item).
- section → Groups related content within a document (e.g., chapters, tabs).
- aside → Holds secondary content (e.g., sidebar, ads, related links).

**Q36: What are HTML5 APIs (like localStorage, canvas, geolocation)?**  

localStorage / sessionStorage: Store key-value data in browser.
```js
localStorage.setItem('name', 'Sam');
console.log(localStorage.getItem('name'));
```
Canvas API: Draw 2D graphics dynamically using JS.
```js
<canvas id="myCanvas" width="100" height="50"></canvas>
```
Geolocation API: Access user’s location (with permission).
Drag & Drop, Web Storage, Web Workers, Audio/Video are also HTML5 APIs

**Q37: Difference between HTML entities and characters?**  

Entities are used to display reserved or special characters in HTML. such as greater than less than  

Characters are the actual visual symbols, entities are encoded forms.  

Example: &lt; displays <, &nbsp; displays a non-breaking space.
```js
<p>Character: <</p>
<p>Entity: &lt;</p>
```
**Q38:Difference between strong and b tags**  

b → purely visual (bold text).  

strong → semantic; conveys importance (screen readers emphasize it).

**Q39: How to lazy load images in HTML?**  

Use loading="lazy" attribute:
```js
<img src="image.jpg" loading="lazy" alt="example">
```
transition:
css transition  allow you to change property value smoothly over a given duration 

**Q40:HTML Elements**  

Building blocks of a webpage (e.g., div, p, a).
 Each element has opening tag and closing tag.
Can be nested inside each other.

**Q41:HTML Attributes**  

→ Provide extra info to elements.  

→ Written inside the opening tag.
Example:
```js
<img src="img.png" alt="photo">
```
→ Common ones: id, class, href, src, title, style

**Q42:Blockquote for Quotations**  

→ Used for long quoted text.
```js
<blockquote cite="https://example.com">
  This text is quoted from another source.
</blockquote>
```

**Q43: img vs picture Elements**  

→ img → single image file.  

→ picture → multiple image sources for responsive design so the browser can choose the best image based on screen size, device resolution.To improve performance and image clarity we use
```js
  <picture>
    <source srcset="product-large.webp" type="image/webp" media="(min-width: 1024px)">
    <source srcset="product-medium.jpg" media="(min-width: 600px)">
  </picture>
```
**Q44:HTML Tables**  

→ Used to display data in rows and columns.
Example:
```js
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
**Q45: HTML Forms handle form state and validation**  

→ action defines where data goes.  

→ input collects info, submit sends it.  

Form States:
- Empty: Form fields are untouched or no value entered.
- Valid: Input matches required rules (e.g., correct email or pattern).
- Invalid: Input breaks rules (e.g., wrong format, missing required value).
- Submitted: Form is submitted (can check via :valid and :invalid before/after submit).
Validation:
- Use attributes like required, min, max, minlength, maxlength, pattern
-Use :valid and :invalid pseudo class to style based on validation state
```js
<form action="/submit">
  <input type="email" required placeholder="Enter Email" />
  <button type="submit">Submit</button>
</form>

<style>
  input:invalid { border: 2px solid red; }
  input:valid { border: 2px solid green; }
</style>

```

**Q46:HTML Video and Controls**  

→ Used to embed videos with play/pause buttons.
```js
<video width="300" controls>
  <source src="movie.mp4" type="video/mp4">
</video>
```
**Q47: What is a Description List?**
Used to display terms and descriptions (like glossary, FAQs)
```js
<dl>
  <dt>HTML</dt>
  <dd>Markup language for web pages.</dd>
</dl>

```
**Q48: Ordered & Unordered List**  
Ordered list ol → numbered list  
Unordered list ul → bullet list
```js
  <ol>
    <li>One</li>
  </ol>
  <ul>
    <li>Item</li>
  </ul>
```
order list types Number(1 default),Uppercase and lowercase letters(A B),Uppercase and lowercase Roman(I i),circle,dise,square  

**Q49: What is an Image Map?**  
Clickable areas inside a single image, each linking to different pages.
Use: dashboards, maps, diagrams.
```js
<img src="worldmap.jpg" usemap="#map">
<map name="map">
  <area shape="rect" coords="0,0,50,50" href="asia.html">
</map>
```
**Q50:Marquee Tag**  

<marquee> creates scrolling text/image.
Deprecated in HTML5 (not recommended).
```js
<marquee>Scrolling Text</marquee>
```

**Q51: what is datalist?**  
datalist provides autocomplete suggestions for an input field.
The user can either type freely or pick suggestions from the list
```js
 <input list="fruits">

<datalist id="fruits">
  <option value="Apple">
  <option value="Banana">
  <option value="Cherry">
  <option value="Mango">
  <option value="Orange">
</datalist>
```

**Q52.what is code, dialog, details and summary, progress, meter tag?**  
code tag: Used to display inline code snippets in a monospace font.
```js
<p>To print something in JS, use <code>console.log()</code>.</p>

```
dialog tag:creates a popup dialog / modal, which you can open using JavaScript.
```js
<dialog id="popup">
  <p>This is a dialog box!</p>
  <button onclick="popup.close()">Close</button>
</dialog>

<button onclick="popup.showModal()">Open Dialog</button>

```
details
 and summary: Creates a collapsible section. summary is the title, details contains hidden content
```js
<details>
  <summary>Click to see more</summary>
  <p>This is hidden content!</p>
</details>

```
meter tag:displays a measurement within a known range (ex: battery level, temperature).
```js
<label>Battery Level:</label>
<meter value="0.7" min="0" max="1">70%</meter>

```
