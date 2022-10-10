import loadAboutPage, { loadInitial } from "./pages/about.js";
import loadMenuPage from "./pages/menu.js";
import loadContactPage from "./pages/contact.js";
import { createFooter } from "./pages/pageLoad.js";

loadInitial();

const content = document.querySelector("#content");

function render() {
  while (content.children.length > 1) {
    content.children[1].remove();
  }
}

const aboutButton = document.querySelector("#about");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

aboutButton.addEventListener('click', function(){
  render();
  loadAboutPage();
  content.appendChild(createFooter());
});

menuButton.addEventListener('click', function(){
  render();
  loadMenuPage();
  content.appendChild(createFooter());
});

contactButton.addEventListener('click', function(){
  render();
  loadContactPage();
  content.appendChild(createFooter());
});
