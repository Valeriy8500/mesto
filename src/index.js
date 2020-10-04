// импорты переменных и классов

import {
  initialCards, object, editProfileModal, addCardModal,
  openProfileModalButton, openCardModalButton, editProfileCloseModalButton,
  addCardCloseModalButton, editProfileForm, addCardForm, inputName, inputProfession, placeInput,
  urlInput, profileTitle, profileSubtitle, addButton, arrayModal, listCards
} from './constants.js';

import FormValidator from './FormValidator.js';
import Card from './Card.js';
import Section from './Section.js';

// функции обоих модалок

function openModal(modalWindow) {
  modalWindow.classList.add('modal_opened');
  document.addEventListener('keydown', EscKey);
}

function closeModal(modalWindow) {
  modalWindow.classList.remove('modal_opened');
  document.removeEventListener('keydown', EscKey);
}

function editProfileSubmitHandler(evt) {
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputProfession.value;
  evt.preventDefault();
  closeModal(editProfileModal);
}

function addCardSubmitHandler(evt) {
  renderCard();
  evt.preventDefault();
  closeModal(addCardModal);
}

// обработчики двух модалок

editProfileForm.addEventListener('submit', editProfileSubmitHandler);
addCardForm.addEventListener('submit', addCardSubmitHandler);

openProfileModalButton.addEventListener('click', () => {
  if (!editProfileModal.classList.contains('modal_opened')) {
    inputName.value = profileTitle.textContent;
    inputProfession.value = profileSubtitle.textContent;
  }

  openModal(editProfileModal);
});

openCardModalButton.addEventListener('click', () => {
  placeInput.value = "";
  urlInput.value = "";
  openModal(addCardModal);
  addButton.classList.add('form__save-button_disabled');
  addButton.classList.remove('form__save-button_undisabled');
  addButton.setAttribute('disabled', true);
});

editProfileCloseModalButton.addEventListener('click', () => {
  closeModal(editProfileModal);
});

addCardCloseModalButton.addEventListener('click', () => {
  closeModal(addCardModal);
});

// закрытие кликом на оверлей

arrayModal.forEach((modal) => {
  modal.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('modal_opened')) {
      closeModal(evt.target);
    }
  });
});

// закрытие попапов по нажатию Esc

function EscKey(evt) {
  if (evt.key !== 'Escape') {
    return;
  }

  const modalWindows = document.querySelector('.modal_opened');
  closeModal(modalWindows);
};

// создание экземпляров FormValidator

new FormValidator(object, editProfileForm).enableValidation();
new FormValidator(object, addCardForm).enableValidation();

// функция создания картчек из массива initialCards

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.template-card');

    cardList.addItem(card.getView());
  },
},
  listCards
);

cardList.renderItems();

// initialCards.forEach((item) => {
//   const card = new Card(item, '.template-card');

//   listCards.append(card.getView());
// })

// функции создания новой карточки

const renderCard = function () {
  const card = new Card({ name: placeInput.value, link: urlInput.value }, '.template-card');

  listCards.prepend(card.getView());
}





