const dataButton = [
  {
    id: 'html',
    learn: 'html',
    reference: 'html reference',
    try: 'try your skills',
    practice: 'htmlquiz.html',
    src1: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta',
    scr2: 'https://www.w3schools.com/html/default.asp',
  },
  {
    id: 'css',
    learn: 'css',
    reference: 'css reference',
    try: 'quiz',

    src: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta',
  },
  {
    id: 'javascript',
    learn: 'javascript',
    reference: 'javascript reference',
    try: "let's code",

    src: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta',
  },
  {
    id: 'react',
    learn: 'react',
    reference: 'react reference',
    try: 'try your skills',

    src: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta',
  },
];

// ANCHOR HTMLQUIZ DATA
const tags = [
  {
    num: '01',
    question:
      'The contains information that specific page, including the title tags, meta data, and links to scripts and style sheets.',
    answer: 'head',
    display: '<head>',
  },

  {
    num: '02',
    question: `Tag defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab`,
    answer: 'title',
    display: '<title>',
  },
  {
    num: '03',
    question: `HTML element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.`,
    answer: 'header',
    display: '<header>',
  },
  {
    num: '04',
    question: `HTML element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions.`,
    answer: 'section',
    display: '<section>',
  },
  {
    num: '05',
    question: ` HTML element represents an unordered list of items, typically rendered as a bulleted list.`,
    answer: 'ul',
    display: '<ul>',
  },
  {
    num: '06',
    question: `  HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g. styling is directly applied to it, or some kind of layout model like Flexbox is applied to its parent element).`,
    answer: 'div',
    display: '<div>',
  },
  {
    num: '07',
    question: ` HTML element is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.`,
    answer: 'li',
    display: '<li>',
  },
  {
    num: '08',
    question: `HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.`,
    answer: 'nav',
    display: '<nav>',
  },
  {
    num: '09',
    question: `element defines a paragraph.`,
    answer: 'p',
    display: '<p>',
  },
  {
    num: '10',
    question: ` Element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.`,
    answer: 'meta',
    display: '<meta>',
  },
];
const attributes = [
  {
    num: '01',
    question: 'Attribute specifies the URL of the page the link goes to:',
    answer: 'href',
    display: 'href',
  },
  {
    num: '02',
    question: 'Attribute specifies the path to the image to be displayed:',
    answer: 'src',
    display: 'src',
  },
  {
    num: '03',
    question:
      'Attribute is used to add styles to an element, such as color, font, size, and more.',
    answer: 'style',
    display: 'style',
  },
  {
    num: '04',
    question:
      'Attribute of the <html> tag declares the language of the Web page',
    answer: 'lang',
    display: 'lang',
  },
  {
    num: '05',
    question: 'Attribute of <img> provides an alternate text for an image',
    answer: 'alt',
    display: 'alt',
  },
];
const entity = [
  {
    num: '01',
    question: 'Less than',
    answer: '&lt;',
    answer2: '&#60;',
    display: '<',
  },
  {
    num: '02',
    question: 'Greater than',
    answer: '&gt;',
    answer2: '&#62;',
    display: '>',
  },
  {
    num: '03',
    question: 'Double quotation mark',
    answer: '&quot;',
    answer2: '&#34;',
    display: '"',
  },
  {
    num: '04',
    question: 'copyright',
    answer: '&copy;',
    answer2: '&#169;',
    display: '©',
  },
];
const displayBtn = ['Tags', 'Attributes', 'Entities'];
const category = [tags, attributes];
