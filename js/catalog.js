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
