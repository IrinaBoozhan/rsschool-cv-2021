const btnTop = document.querySelector('.top');
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', function () {
   burger.classList.toggle('active');
   nav.classList.toggle('active');
}
)

window.addEventListener('scroll', function () {
   if (window.scrollY > '130') {
      btnTop.classList.remove('hidden');
   } else {
      btnTop.classList.add('hidden');
   }
});