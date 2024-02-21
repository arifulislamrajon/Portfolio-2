/*---------------------- header scroll active ----------------------*/
const header = document.querySelector('#header nav');

const scrollWindow = () => {
    header.classList.toggle('scroll_header', window.scrollY > 200)
}

window.addEventListener('scroll', scrollWindow)

/*---------------------- header scroll active ----------------------*/
const menuIcon = document.querySelector('.menu');
const closeIcon = document.querySelector('.nav_close');
const menu = document.querySelector('.nav_list')

if(menuIcon){
    menuIcon.addEventListener('click', () => {
        menu.classList.add('show_menu')
    })
}

if(closeIcon){
    closeIcon.addEventListener('click', () => {
        menu.classList.remove('show_menu')
    })
}

/*---------------------- theme change ----------------------*/
const themeButton = document.querySelector('.theme');
const darkTheme = 'dark_theme'
const iconTheme = 'fa-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-regular fa-moon' : 'fa-solid fa-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-regular fa-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
});

/*---------------------- work modal show ----------------------*/
const modal = document.querySelectorAll('.services_modal');
const modalButton = document.querySelectorAll('.services_button');
const modalClose = document.querySelectorAll('.services_modal_close');

modalButton.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => {
        modal.forEach((modal, index) => {
            if (index === i) {
                modal.classList.add('active_modal');
            } else {
                modal.classList.remove('active_modal');
            }
        });
    });
});

modalClose.forEach((modalButton) => {
    modalButton.addEventListener('click', () => {
        modal.forEach(modal => {
            modal.classList.remove('active_modal')
        });
    })
});

/*---------------------- testimonial swiper js ----------------------*/
var swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
  });

/*---------------------- header scroll active ----------------------*/
const bottomToTop = document.querySelector('.scroll_up');

const scrollUp = () => {
    bottomToTop.classList.toggle('scroll_up_active', window.scrollY > 300)
}

window.addEventListener('scroll', scrollUp)