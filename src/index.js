import './pages/index.css';

// импорты переменных и классов

import {
  initialCards, object, editProfileModal, addCardModal,
  openProfileModalButton, openCardModalButton, editProfileForm,
  addCardForm, placeInput, urlInput, addButton,
  arrayModal, listCards, openImageModal, dataInfo
} from './utils/constants.js';

import FormValidator from './components/FormValidator';
import Card from './components/Card.js';
import Section from './components/Section.js';
import Popup from './components/Popup.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';

// обработчики открытия двух модалок

openProfileModalButton.addEventListener('click', () => {
  if (!editProfileModal.classList.contains('modal_opened')) {
    userInfo.getUserInfo();
  }

  profileModal.open();
});

openCardModalButton.addEventListener('click', () => {
  placeInput.value = "";
  urlInput.value = "";
  cardModal.open();
  addButton.classList.add('form__save-button_disabled');
  addButton.classList.remove('form__save-button_undisabled');
  addButton.setAttribute('disabled', true);
});

// закрытие кликом на оверлей

arrayModal.forEach((modal) => {
  modal.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('modal_opened')) {
      evt.target.classList.remove('modal_opened');
    }
  });
});

// инстансы FormValidator

new FormValidator(object, editProfileForm).enableValidation();
new FormValidator(object, addCardForm).enableValidation();

// создание картчек из массива initialCards

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card({
      data: item,
      handleCardClick: () => {

        imageModal.open(card);
      }
    }, '.template-card');

    cardList.addItem(card.getView());
  },
},
  listCards
);

cardList.renderItems();

// созданиe новых карточек

const renderCard = function () {
  const card = new Card({
    data: { name: placeInput.value, link: urlInput.value },
    handleCardClick: () => {

      imageModal.open(card);
    }
  }, '.template-card');

  listCards.prepend(card.getView());
}

// инстансы Popup

const profileModal = new Popup(editProfileModal);
const cardModal = new Popup(addCardModal);
profileModal.setEventListeners();
cardModal.setEventListeners();

// инстансы PopupWithImage

const imageModal = new PopupWithImage(openImageModal);
imageModal.setEventListeners();

// инстансы PopupWithForm

const profileForm = new PopupWithForm(editProfileModal, {
  formSubmit: (evt) => {
    userInfo.setUserInfo();
    evt.preventDefault();
    profileModal.close();
  }
});

const cardForm = new PopupWithForm(addCardModal, {
  formSubmit: (evt) => {
    renderCard();
    evt.preventDefault();
    cardModal.close();
  }
});

profileForm.setEventListeners();
cardForm.setEventListeners();

// инстанс UserInfo

const userInfo = new UserInfo(dataInfo);


// функции обоих модалок

// function openModal(modalWindow) {
//   modalWindow.classList.add('modal_opened');
//   document.addEventListener('keydown', EscKey);
// }

// function closeModal(modalWindow) {
//   modalWindow.classList.remove('modal_opened');
//   document.removeEventListener('keydown', EscKey);
// }

// function editProfileSubmitHandler(evt) {
//   profileTitle.textContent = inputName.value;
//   profileSubtitle.textContent = inputProfession.value;
//   evt.preventDefault();
//   closeModal(editProfileModal);
// }

// function addCardSubmitHandler(evt) {
//   renderCard();
//   evt.preventDefault();
//   closeModal(addCardModal);
// }

// обработчики двух модалок

// editProfileForm.addEventListener('submit', editProfileSubmitHandler);
// addCardForm.addEventListener('submit', addCardSubmitHandler);

// editProfileCloseModalButton.addEventListener('click', () => {
//   closeModal(editProfileModal);
// });

// addCardCloseModalButton.addEventListener('click', () => {
//   closeModal(addCardModal);
// });

// закрытие попапов по нажатию Esc

// function EscKey(evt) {
//   if (evt.key !== 'Escape') {
//     return;
//   }

//   const modalWindows = document.querySelector('.modal_opened');
//   closeModal(modalWindows);
// };
