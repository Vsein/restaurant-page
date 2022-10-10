import '../styles/contact.css'
import locations from '../assets/locations.png'


export default function loadContactPage() {
  const content = document.querySelector('#content');

  const container = document.createElement('div');
  container.classList.add('container');

  const contact = document.createElement('div');
  contact.classList.add('contact');

  const p = document.createElement('p');
  p.textContent = "Contact: (999) 999 99 99";

  const map = document.createElement('img');
  map.src = locations;

  contact.appendChild(p);
  contact.appendChild(map);

  container.appendChild(contact);

  content.appendChild(container);
}
