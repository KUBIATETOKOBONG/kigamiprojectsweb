ffunction toggleMenu() {
  const menu = document.getElementById('mobileMenu');

  menu.classList.toggle('show');
}

  const expanded =
    hamburger.getAttribute('aria-expanded') === 'true';

  if (expanded) {
    hamburger.setAttribute('aria-expanded', 'false');
    navList.classList.remove('active');
  } else {
    hamburger.setAttribute('aria-expanded', 'true');
    navList.classList.add('active');
  }
}