const hamburger = document.querySelector('.hamburger')

const openMenu = () => {
  document.querySelector('.menu').classList.add('active')
}

const closeMenu = () => {
  document.querySelector('.menu').classList.remove('active')
}

document.addEventListener('click', (e) => {
  const target = e.target.classList.value;
  if ( target === 'hamburger' || target === 'long' ) {
    openMenu();
  } else if (target == 'menu__close' || e.target.dataset.activate == 'close') {
    closeMenu();
  }
})