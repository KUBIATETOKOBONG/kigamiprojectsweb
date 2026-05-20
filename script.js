function toggleMenu() {
  const navList = document.getElementById('primary-navigation');
  const hamburger = document.querySelector('.hamburger');

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