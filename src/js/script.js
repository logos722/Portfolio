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
  document.getElementById("myForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Предотвращаем обычное поведение формы

      // Собираем данные из формы
      var formData = new FormData(this);
      console.log(formData)

      // Создаем объект XMLHttpRequest
      var xhr = new XMLHttpRequest();

      // Настраиваем запрос
      xhr.open("POST", "./mail.php", true); // Замените на путь к вашему PHP-скрипту

      // Отправляем данные на сервер
      xhr.send(formData);

      // Обработка успешного ответа
      xhr.onload = function() {
          if (xhr.status === 200) {
              // Обработка успешного ответа (если нужно)
              console.log(xhr.responseText);
          } else {
              // Обработка ошибок (если нужно)
              console.error(xhr.statusText);
          }
      };
  });
});

percentAuto();