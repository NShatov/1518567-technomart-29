
/*оживление формы обратной связи*/
const feedbackButton = document.querySelector('.feedback-button');
const feedbackPopup = document.querySelector('.modal-feedback');
const feedbackClose = feedbackPopup.querySelector('.modal-close');
const loginForm = feedbackPopup.querySelector('.login-form');
const loginName = feedbackPopup.querySelector('.login-name');
const loginEmail = feedbackPopup.querySelector('.login-email');
const commentFeedback = feedbackPopup.querySelector('.comment-feedback');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add('modal-show');

  if (storage) {
    loginName.value = storage;
    loginEmail.focus();
  } else {
    loginName.focus();
  }
});

feedbackClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove('modal-show');
  feedbackPopup.classList.remove('modal-error');
});

loginForm.addEventListener('submit', function (evt) {
  if (!loginName.value && !loginEmail.value) {
  evt.preventDefault();
  feedbackPopup.classList.remove('modal-error');
  feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
  feedbackPopup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', loginName.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      feedbackPopup.classList.remove('modal-show');
    }
  }
});

/*оживление попапа с картой*/
const mapLink = document.querySelector('.map-link');
const mapPopup = document.querySelector('.modal-map');
let mapClose = mapPopup.querySelector('.modal-close');

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      mapPopup.classList.remove('modal-show');
    }
  }
});

/*попап на странице каталога*/
const catalogList = document.querySelector('.catalog-list');
const buyButton = catalogList.querySelectorAll('.catalog-buy');
const addPopup = document.querySelector('.modal-add');
const addClose = addPopup.querySelector('.modal-close');

for (let i = 0; i < buyButton.length; i++) {
  buyButton[i].addEventListener('click', function (evt) {
  evt.preventDefault();
  addPopup.classList.add('modal-show');
  });
}

addClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  addPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (addPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      addPopup.classList.remove('modal-show');
    }
  }
});

/*оживление карусели*/

const carousel = document.querySelector('.carousel-list');
const nextButton = carousel.querySelector('.active-next');
const prevButton = carousel.querySelector('.active-prev');
const perforators = carousel.querySelector('.perforators');
const drills = carousel.querySelector('.drills');

nextButton.addEventListener('click', function (evt){
  if (perforators.classList.contains('carousel-active')) {
    evt.preventDefault();
    perforators.classList.remove('carousel-active');
    drills.classList.add('carousel-active');
  }
});

prevButton.addEventListener('click', function (evt) {
  if (drills.classList.contains('carousel-active')) {
    evt.preventDefault();
    drills.classList.remove('carousel-active');
    perforators.classList.add('carousel-active');
  }
});

/*Карусель с выбором Сервисов*/
const service = document.querySelector('.services-list');
const deliveryButton = service.querySelector('.delivery-btn');
const guaranteeButton = service.querySelector('.guarantee-btn');
const creditButton = service.querySelector('.credit-btn');

const delivery = document.querySelector('.delivery');
const guarantee = document.querySelector('.guarantee');
const credit  = document.querySelector('.credit');

deliveryButton.addEventListener('click', function(evt){
  if (guarantee.classList.contains('services-active') &&
    guaranteeButton.classList.contains('active-link')) {
    evt.preventDefault();
    guarantee.classList.remove('services-active');
    guaranteeButton.classList.remove('active-link');
  }
  if (credit.classList.contains('services-active') &&
    creditButton.classList.contains('active-link')) {
    evt.preventDefault();
    credit.classList.remove('services-active');
    creditButton.classList.remove('active-link');
  } else
  evt.preventDefault();
  delivery.classList.add('services-active');
  deliveryButton.classList.add('active-link');
});

guaranteeButton.addEventListener('click', function(evt){
  if (delivery.classList.contains('services-active') &&
    deliveryButton.classList.contains('active-link')) {
    evt.preventDefault();
    delivery.classList.remove('services-active');
    deliveryButton.classList.remove('active-link');
  }
  if (credit.classList.contains('services-active') &&
    creditButton.classList.contains('active-link')) {
    evt.preventDefault();
    credit.classList.remove('services-active');
    creditButton.classList.remove('active-link');
  } else
  evt.preventDefault();
  guarantee.classList.add('services-active');
  guaranteeButton.classList.add('active-link');
});

creditButton.addEventListener('click', function(evt){
  if (delivery.classList.contains('services-active') &&
    deliveryButton.classList.contains('active-link')) {
    evt.preventDefault();
    delivery.classList.remove('services-active');
    deliveryButton.classList.remove('active-link');
  }
  if (guarantee.classList.contains('services-active') &&
    guaranteeButton.classList.contains('active-link')) {
    evt.preventDefault();
    guarantee.classList.remove('services-active');
    guaranteeButton.classList.remove('active-link');
  } else
  evt.preventDefault();
  credit.classList.add('services-active');
  creditButton.classList.add('active-link');
});





