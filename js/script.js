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
/*
loginForm.addEventListener('submit', function (evt) {
  if (!loginName.value || !loginEmail.value) {
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
*/
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

const buyButton = document.querySelectorAll('.catalog-buy');
const addPopup = document.querySelector('.modal-add');
let addClose = addPopup.querySelector('.modal-add .modal-close');

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





