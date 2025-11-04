
HTML NOTES
====================

**Q1: web browser and how it works?**
web browser is a s/w application for retrieving presenting info on www e.g google chrome
When a browser loads a webpage, it first downloads the HTML file and starts parsing it to build the DOM tree.
Then it fetches and parses CSS and combines both into a Render Tree.Finally, it executes JavaScript
```txt
User enters URL
      ↓
Browser sends request
      ↓
DNS finds server IP
      ↓
Server sends HTML, CSS, JS
      ↓
Browser:
 HTML → DOM
 CSS → CSSOM
 DOM + CSSOM → Render Tree
      ↓
Layout & Paint
      ↓
JavaScript runs
      ↓
Web Page displayed
```

**Q2: why br called empty element?**
because it has no content

**Q3: does hyperlink only apply to text?**
text and image both

**Q4: What is HTML and why is it important?**
 HTML (HyperText Markup Language) structures web content. It defines the layout and semantic meaning of elements (headings, paragraphs, links, forms, etc.).
version of html are
html 1.0 html2.0 html 3 html 4 html 5
HTML5 features
new element new attribute multimedia 2d 3d drawing support

**Q5: What are semantic tags? Give examples and benefits**
 A semantic element clearly describes its meaning to both the browser and the developer.
Examples of non-semantic elements: <div> and <span> - Tells nothing about its content.
Examples of semantic elements: <img>, <table>, <header>,<nav>,<footer>, <article> - Clearly defines its content.
benefits:Improves readability & code clarity for developers, improve SEO and Accessibility friendly – screen readers understand sections easily.
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

**Q6: What is the difference between <div> and <section>?**
 <div> is a generic container, no semantic meaning.
<section> groups related content with semantic meaning.

**Q7: Field set**
fieldset element is used to group  related control in a single box
<fieldset>
	<lagend>contact</lagent>
</fieldset>

**Q8: What is the difference between inline, block, and inline-block elements?**
- Inline: does not start on new line (e.g., <span>, <a>)
- Block: starts on new line, takes full width (e.g., <div>, <p>)
- Inline-block: stays inline but allows setting width/height.(e.g., make 3 div inline using inline-block)

**Q9: What is DOCTYPE and why is it used?**
 <!DOCTYPE html> tells the browser to render the page in standards mode using HTML5 syntax.

**Q10: What are HTML meta tags?**
 <meta> provides metadata about a web page.
Examples:
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
UTF-8 is the most common encoding and supports almost all characters in all languages.
viewport → Controls layout on mobile devices.
width=device-width → Sets the viewport width equal to the device width.
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
**Q13: What are forms in HTML?**
Forms collect user input using <form>, <input>, <textarea>, <select>, <button>.
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
Example: <div data-user="sam" data-id="101">Hello</div>
const div = document.querySelector('div');
console.log(div.dataset.user); // Output: "sam"
console.log(div.dataset.id);   // Output: "101"


**Q16: What is the difference between <b> and <strong>, <i> and <em>?**
- <b> and <strong>: b represent bold text(visual only) but strong is a semantic tag and bold by default and accessibility and seo friendly.
- <i> and <em>: i represent italic text(visual only) but em is a semantic tag and italic by default and accessibility and seo friendly.

**Q17: What is the purpose of <link> tag?**
 Used to link external resources like CSS files or icons.
Example: <link rel="stylesheet" href="style.css">

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
A: Defers image loading until it enters the viewport.
Example: <img src="img.jpg" loading="lazy" />

**Q22: What are the new features in HTML5?**
- New semantic elements (<header>, <footer>, <article>, <nav>)
- Audio and video tags
- Canvas and SVG
- LocalStorage, SessionStorage
- Geolocation API
- Form enhancements (email, date, number)

**Q23: What is the difference between localStorage, sessionStorage, and cookies?**
- localStorage: persistent key-value storage
- sessionStorage: clears when tab closes
- cookies: small data sent with every HTTP request (used for auth/tracking)

**Q24: What are <canvas> and <svg>?**
- <canvas>: used for drawing via JavaScript (pixel-based)
- <svg>: scalable vector graphics (markup-based)

**Q25: Explain <template> tag.**
A: Defines reusable HTML content not rendered until cloned by JS.
Example:
<template id="card">
  <div class="card">Sample Card</div>
</template>

**Q26: What is the difference between HTMLCollection and NodeList?**
- HTMLCollection: live, updates automatically.
- NodeList: static, doesn’t auto-update.

**Q27: What are ARIA roles?**
ARIA (Accessible Rich Internet Applications) roles provide extra semantic meaning to HTML elements so that screen readers and assistive technologies can understand their purpose.
Example: <div role="button" tabindex="0">Open Menu</div>
<button role="switch" aria-checked="false">
  Dark Mode
</button>

**Q28: What is Shadow DOM?**
 A scoped subtree inside a web component that encapsulates styles and markup.
 Encapsulates HTML structure and CSS styles, preventing them from affecting the main DOM
 Main DOM
 ├── <div id="host">
 │     └── Shadow DOM
 │          ├── <style>p { color: red; }</style>
 │          └── <p>Shadow DOM content</p>
 └── <p>Normal DOM content</p>

**Q29: Explain difference between relative and absolute paths in HTML.**
- Relative: based on current file location (e.g., ./images/pic.jpg)
- Absolute: full URL (e.g., https://site.com/images/pic.jpg)

**Q30: What is the difference between <noscript> and <script>?**
<noscript> displays fallback content when JS is disabled.

**Q31: Explain contenteditable attribute.**
Makes an element editable directly in the browser.
Example: <div contenteditable="true"></div>

**Q32: What is the purpose of <iframe>?**
Used to embed another HTML page inside current page.
Example: <iframe src="https://example.com"></iframe>

**Q33: What is cross-origin resource sharing (CORS)?**
A security feature that restricts how resources can be fetched from another domain.
it improves Security and avoids browser blocking of cross-domain API requests
**Q33: How do you optimize HTML for SEO?**
- Use semantic tags ( header, main, article, nav )
- Proper headings ( H3–H6 )
- Meta tag - title, description, viewport
- Alt attributes for images
- Structured data

**Q34: Difference between <article>, <section>, and <aside>**
<article> → Represents independent, self-contained content (e.g., blog post, news item).
<section> → Groups related content within a document (e.g., chapters, tabs).
<aside> → Holds secondary content (e.g., sidebar, ads, related links).

**Q35: What are HTML5 APIs (like localStorage, canvas, geolocation)?**
localStorage / sessionStorage: Store key-value data in browser.
localStorage.setItem('name', 'Sam');
console.log(localStorage.getItem('name'));
Canvas API: Draw 2D graphics dynamically using JS.
<canvas id="myCanvas" width="100" height="50"></canvas>
Geolocation API: Access user’s location (with permission).
Drag & Drop, Web Storage, Web Workers, Audio/Video are also HTML5 APIs

**Q36: Difference between HTML entities and characters?**
Entities are used to display reserved or special characters in HTML.
Characters are the actual visual symbols, entities are encoded forms.
Example: &lt; displays <, &nbsp; displays a non-breaking space.
<p>Character: <</p>
<p>Entity: &lt;</p>

**Q37:Difference between <strong> and <b> tags**
<b> → purely visual (bold text).
<strong> → semantic; conveys importance (screen readers emphasize it).

**Q38: How to lazy load images in HTML?**
Use loading="lazy" attribute:
<img src="image.jpg" loading="lazy" alt="example">

transition:
css transition  allow you to change property value smoothly over a given duration 

**Q38:HTML Elements**
Building blocks of a webpage (e.g., <div>, <p>, <a>).
 Each element has opening <tag> and closing </tag>.
Can be nested inside each other.

**Q39:HTML Attributes**
→ Provide extra info to elements.
→ Written inside the opening tag.
Example: <img src="img.png" alt="photo">
→ Common ones: id, class, href, src, title, style

**Q40:Blockquote for Quotations**
→ Used for long quoted text.
<blockquote cite="https://example.com">
  This text is quoted from another source.
</blockquote>

**Q41: <img> vs <picture> Elements**
→ <img> → single image file.
→ <picture> → multiple image sources for responsive design.
<picture>
  <source srcset="large.jpg" media="(min-width:800px)">
  <img src="small.jpg" alt="photo">
</picture>

**Q42:HTML Tables**
→ Used to display data in rows and columns.
Example:
```js
<table>
  <tr><th>Name</th><th>Age</th></tr>
  <tr><td>Sam</td><td>25</td></tr>
</table>
```
**Q43: HTML Forms handle form state and validation**
→ action defines where data goes.
→ <input> collects info, <submit> sends it.
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

**Q44:HTML Video and Controls**
→ Used to embed videos with play/pause buttons.
<video width="300" controls>
  <source src="movie.mp4" type="video/mp4">
</video>



