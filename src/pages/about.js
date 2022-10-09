import welcome from '../assets/smoothie-welcome.jpg'
import blueberry from '../assets/smoothie-blueberry.jpg'
import discount from '../assets/smoothie-discount.jpg'
import ginger from '../assets/smoothie-ginger.jpg'
import '../styles/about.css';
import '../styles/pageLoad.css';
import { createNavbar, createFooter } from './pageLoad.js'


export default function loadAboutPage() {
  const content = document.createElement('div');
  content.id = 'content';

  content.appendChild(createNavbar());

  const main = document.createElement('div');
  main.classList.add('main');

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

    const p = document.createElement('p');
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

    main.appendChild(section);
  }

  content.appendChild(main);

  content.appendChild(createFooter());

  document.body.appendChild(content);
}