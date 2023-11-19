const hamburger = document.querySelector('.hamburger')
const menuList = document.querySelector('.menu__list')

menuList.addEventListener('click', (e) => {
  const target = e.target.classList.value;
  if ( target === "menu__link-l") {
    closeMenu();
  }
})

const percentAuto = () => {
  const items = document.querySelectorAll('.progress__item')
  items.forEach((target) => {
    const percent = target.querySelector('.progress__item-percent').textContent
    target.querySelector('.progress__item-frontLine').style.width = percent;
  })
}
document.querySelectorAll('.progress__item')

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

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#myForm").addEventListener("submit", function(event) {
      event.preventDefault();

      var formData = new FormData(this);

      if (formData.size === 0) {
        console.log("FormData is empty");
        return;
      }


      // Отправка данных на сервер
      fetch("mailer/smart.php", {  // Измените путь на соответствующий вашему расположению файла
          method: "POST",
          body: formData
      })
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  });
});

percentAuto();