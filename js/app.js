// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

const date = document.getElementById('date');

date.textContent = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const linkContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

const nav = document.getElementById('nav');
const header = document.getElementById('home');

// * links

const topLink = document.querySelector('.top-link');
const scrollLinks = document.querySelectorAll('.scroll-link');

navToggle.addEventListener('click', function () {
  const containerHeight = linkContainer.getBoundingClientRect().height;
  const linkHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linkContainer.style.height = `${linkHeight}px`;
  } else {
    linkContainer.style.height = 0;
  }
  console.log(containerHeight);
});

window.addEventListener('scroll', function () {
  const yOffset = this.window.scrollY;

  if (yOffset >= 200) {
    nav.classList.add('fixed-nav');
    header.style.marginTop = `${nav.getBoundingClientRect().height}px`;
  } else {
    nav.classList.remove('fixed-nav');
    header.style.marginTop = 0;
  }

  yOffset >= 500
    ? topLink.classList.add('show-link')
    : topLink.classList.remove('show-link');
  /*  if (yOffset >= 600) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  } */
});

scrollLinks.forEach(function (links) {
  links.addEventListener('click', function (e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(href);

    const linksConHeight = linkContainer.getBoundingClientRect().height;
    const navBarHeight = nav.getBoundingClientRect().height;

    const fixedNav = nav.classList.contains('fixed-nav');
    let position = element.offsetTop - navBarHeight;

    if (!fixedNav) {
      position = position - navBarHeight;
    }
    if (navBarHeight > 82) {
      position = position + linksConHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });

    linkContainer.style.height = 0;
  });
});
