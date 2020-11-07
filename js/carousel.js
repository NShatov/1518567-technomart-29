/*оживление карусели - не работает*/

const carousel = document.querySelector('.carousel-list');
const nextButton = carousel.querySelector('.active-next');
const prevButton = carousel.querySelector('.active-prev');
const perforators = carousel.querySelector('.perforators');
const drills = carousel.querySelector('.drills');

prevButton.addEventListener('click', function (evt) {
  if (perforators.classList.contains('carousel-active')) {
    evt.preventDefault();
    perforators.classList.remove('carousel-active');
  }
  drills.classList.add('carousel-active');
});

nextButton.addEventListener('click', function (evt){
  if (drills.classList.contains('carousel-active')) {
    evt.preventDefault();
    drills.classList.remove('carousel-active');
  }
  perforators.classList.add('carousel-active');
});

