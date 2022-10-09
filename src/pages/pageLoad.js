export function createNavbar() {
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

export function createFooter() {
  const footer = document.createElement('div');
  footer.classList.add('footer');
  return footer;
}
