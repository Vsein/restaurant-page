import cup from '../assets/cup.svg'
import '../styles/menu.css'


function createItem(item) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const h2 = document.createElement('h2');
  h2.textContent = item.name;
  h2.style.padding = 0;
  h2.style.margin = 0;

  const img = document.createElement('img');
  img.src = cup;
  img.style.height = "75px";
  img.style.filter = item.filter;
  console.log(img.style.fill);

  const p = document.createElement('p');
  p.textContent = item.ingredients;
  p.style.padding = 0;
  p.style.margin = 0;

  menuItem.appendChild(h2);
  menuItem.appendChild(img);
  menuItem.appendChild(p);

  return menuItem;
}

export default function loadMenuPage() {
  const content = document.querySelector('#content');

  const container = document.createElement('div');
  container.classList.add('container');
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(createItem(
    {
      name: "Green",
      color: "#688722",
      filter: "invert(42%) sepia(77%) saturate(394%) hue-rotate(37deg) brightness(97%) contrast(91%)",
      ingredients: "Apple, celery, cucumber, water"
    }
  ));

  menu.appendChild(createItem(
    {
      name: "Protein",
      color: "#EBD693",
      filter: "invert(92%) sepia(6%) saturate(2102%) hue-rotate(354deg) brightness(94%) contrast(96%)",
      ingredients: "Milk, banana, eggs, peanut butter"
    }
  ));

  menu.appendChild(createItem(
    {
      name: "Blueberry",
      color: "#7E579C",
      filter: "invert(39%) sepia(26%) saturate(992%) hue-rotate(231deg) brightness(91%) contrast(85%)",
      ingredients: "Blueberries, mlik, banana, yogurt"
    }
  ));

  menu.appendChild(createItem(
    {
      name: "Detox",
      color: "#BE9D5D",
      filter: "invert(63%) sepia(69%) saturate(275%) hue-rotate(1deg) brightness(88%) contrast(87%)",
      ingredients: "Ginger, lemon, orange, chia seeds, water"
    }
  ));

  menu.appendChild(createItem(
    {
      name: "Coconut",
      color: "#DCD8CD",
      filter: "invert(85%) sepia(13%) saturate(150%) hue-rotate(6deg) brightness(105%) contrast(82%)",
      ingredients: "Coconut milk, mint, coconut chunks, ice"
    }
  ));

  menu.appendChild(createItem(
    {
      name: "Vanilla",
      color: "#F2F4FB",
      filter: "invert(98%) sepia(1%) saturate(2731%) hue-rotate(185deg) brightness(96%) contrast(104%)",
      ingredients: "Milk, ice cream, vanilla protein powder"
    }
  ));

  container.appendChild(menu);

  content.appendChild(container);
}
