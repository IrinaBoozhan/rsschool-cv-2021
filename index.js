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

console.log('Ваша оценка - 140 баллов из 150')
console.log('Отзыв по пунктам ТЗ: Не выполненные: 1 видеорезюме автора CV на английском языке.Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки.Продолжительность видео 3 - 5 минут(±15 секунд).В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке(например, в документе Google Docs). -10')

console.log('Выполненные пункты: 1 вёрстка валидная. "Document checking completed. No errors or warnings to show." от валидатора. +10 ')

console.log('2 вёрстка семантическая. В коде страницы присутствуют семантические теги footer, header, main, nav, section, mark, h1, h2, h3, h4. 10*2 = +20')

console.log('3 для оформления СV используются css - стили. +10')

console.log('4 контент размещается в блоке, который горизонтально центрируется на странице.Фоновый цвет, если он есть, тянется во всю ширину страницы +10')

console.log('5 вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10')

console.log('6 есть адаптивное бургер - меню.Ссылки в пунктах меню ведут на основные разделы CV.При кликах по пунктам меню реализована плавная прокрутка по якорям.При уменьшении ширины экрана меню становится адаптивным.  +10')

console.log('7 на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt(может быть пустым)   +10')

console.log('8 контакты для связи и перечень навыков оформлены в виде списка ul > li +10')
console.warn('Контакны видны при наведении на фото')
console.log('9 CV содержит контакты, краткую информацию о себе, навыки, образование, уровень английского  +10')

console.log('10 CV содержит пример вашего кода(например, решение задачи с сайта codewars) с подсветкой кода  +10')

console.log('11 CV содержит изображения - ссылки на выполненные вами проекты.При клике по изображению страница проекта открывается в новой вкладке.У каждого проекта есть название, небольшое описание, указан перечень используемых технологий  +10')

console.log('12 CV выполнено на английском языке  +10')

console.log('13 выполнены требования к репозиторию: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, указана дата дедлайна, выполнена самооценка(самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт)  +10')

console.log('14 дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию  +10')