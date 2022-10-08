import welcome from './assets/smoothie-welcome.jpg'
import blueberry from './assets/smoothie-blueberry.jpg'
import discount from './assets/smoothie-discount.jpg'
import ginger from './assets/smoothie-ginger.jpg'
import './style.css';

function createNavbar() {
  const navbar = document.createElement('div');
  navbar.classList.add('navbar');

  const title = document.createElement('div');
  title.classList.add('title');

  const h1 = document.createElement('h1');
  h1.textContent = 'Smoothiers';
  title.appendChild(h1);
  navbar.appendChild(title);

  const navRight = document.createElement('div');
  navRight.classList.add('nav-right');

  var links = ['About', 'Menu', 'Contact'];
  for (let i = 0; i < links.length; i++) {
    const link = document.createElement('div');
    link.classList.add('link');
    const p = document.createElement('p');
    p.textContent = links[i];
    link.appendChild(p);
    navRight.appendChild(link);
  }
  navbar.appendChild(navRight);
  return navbar;
}

export default function loadAboutPage() {
  const content = document.createElement('div');
  content.id = 'content';

  content.appendChild(createNavbar());

  var sections = ['welcome', 'fresh', 'discount', 'custom'];
  var smoothies = [welcome, blueberry, discount, ginger];
  var texts = ["Your healthy lifestyle, as easy as it has ever been!",
    "See how we make your smoothie and be sure that it's made only of fresh ingredients!",
    "A special discount on all our smoothies in the morning! Jump-start your day with momentum!",
    "Try to make a custom smoothie - you can also participate in our monthly contest of best custom smoothies! The most voted one will be added to the permanent menu."];
  var buttons = ['', '', 'Learn more', ''];

  for (let i = 0; i < sections.length; i++) {
    let name = sections[i];
    const section = document.createElement('div');
    section.classList.add(name);

    const img = document.createElement('img');
    img.src = smoothies[i];
    img.alt = `${name} smoothie`;
    img.classList.add(`${name}-smoothie`);

    const container = document.createElement('div');
    container.classList.add(`${name}-container`);

    const text = document.createElement('div');
    text.classList.add(`${name}-text`);

    const p = document.createElement('div');
    p.textContent = texts[i];
    text.appendChild(p);

    if (buttons[i]) {
      const button = document.createElement('button');
      button.classList.add(`${name}-button`);
      button.textContent = buttons[i];
      text.appendChild(button);
    }

    container.appendChild(text);

    if (i % 2) {
      section.appendChild(img);
      section.appendChild(container);
    } else {
      section.appendChild(container);
      section.appendChild(img);
    }

    content.appendChild(section);
  }


  const footer = document.createElement('div');
  footer.classList.add('footer');
  content.appendChild(footer);

  document.body.appendChild(content);
}
