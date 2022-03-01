function mobileMenu() {
  const elements = document.getElementsByClassName('menu-btn');
  Array.from(elements).forEach((x) => {
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  });
}
mobileMenu();

function menuLink() {
  const elements = document.getElementsByClassName('menu-btn');
  Array.from(elements).forEach((x) => {
    if (x.style.display === 'block') {
      x.style.display = 'none';
    }
  });
}
menuLink();
