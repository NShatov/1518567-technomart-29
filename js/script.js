/*Оживление слайдера*/

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

let modalShow = function (button, popup) {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
  });
};

let modalClose = function (button, popup) {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    popup.classList.remove('modal-error');
  });
  window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal-show')) {
      evt.preventDefault();
      popup.classList.remove('modal-show');
    }
  }
});
};

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

modalShow(feedbackButton, feedbackPopup);
modalClose(feedbackClose, feedbackPopup);

/*оживление попапа с картой*/
const mapLink = document.querySelector('.map-link');
const mapPopup = document.querySelector('.modal-map');
let mapClose = mapPopup.querySelector('.modal-close');

modalShow(mapLink, mapPopup);
modalClose(mapClose, mapPopup)

