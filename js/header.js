const headerNavContainer = document.querySelector('.header-nav');
const headerNavItem = document.querySelectorAll('.header-nav__contents');

headerNavItem.forEach((item) => {
  item.addEventListener('mouseover', (event) => {
    if (!item.classList.contains('current-nav'))
      item.classList.add('hover-nav');
  });
  item.addEventListener('mouseleave', (event) => {
    item.classList.remove('hover-nav');
  });
});
