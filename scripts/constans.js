// массив с названиями и ссылками на картинки

export const initialCards = [
  {
    name: 'Карелия',
    link: 'https://images.unsplash.com/photo-1573156667506-115190c68737?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Севастополь',
    link: 'https://images.unsplash.com/photo-1589198376103-0486bc2426cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Домбай',
    link: 'https://images.unsplash.com/photo-1567069160354-f25b26e62fa1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1501675423372-9bfa95849e62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Алтай',
    link: 'https://images.unsplash.com/photo-1564324738080-bbbf8d6b4887?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
  }
];

// Объект для enableValidation

export const object = {
  formSelector: '.form',
  inputSelector: '.form__input',
  inputErrorClass: 'form__input_invalid',
  submitButtonSelector: '.form__save-button',
  activeButtonClass: 'form__save-button_undisabled',
  errorClass: 'form__error_visible'
};

// переменные

export const editProfileModal = document.querySelector('.modal_type_edit-profile');
export const addCardModal = document.querySelector('.modal_type_add-card');

export const openProfileModalButton = document.querySelector('.modal-button');
export const openCardModalButton = document.querySelector('.add-button');

export const editProfileCloseModalButton = editProfileModal.querySelector('.modal__close-button');
export const addCardCloseModalButton = addCardModal.querySelector('.modal__close-button');

// формы двух модальных окон

export const editProfileForm = editProfileModal.querySelector('.form');
export const addCardForm = addCardModal.querySelector('.form');

// поля форм

export const inputName = editProfileForm.querySelector('.form__input_type_name');
export const inputProfession = editProfileForm.querySelector('.form__input_type_profession');

export const placeInput = addCardForm.querySelector('.form__input_type_place');
export const urlInput = addCardForm.querySelector('.form__input_type_url');

// title и subtitle профиля

export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');

// модальная кнопка создать

export const addButton = addCardModal.querySelector('.form__save-button');

// массив из модалок

export const arrayModal = Array.from(document.querySelectorAll('.modal'));

// переменная контейнера, куда вставляются карточки

export const listCards = document.querySelector('.photo-cards');