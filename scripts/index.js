// переменные

const editProfileModal = document.querySelector('.modal_type_edit-profile');
const addCardModal = document.querySelector('.modal_type_add-card');

const openProfileModalButton = document.querySelector('.modal-button');
const openCardModalButton = document.querySelector('.add-button');

const editProfileCloseModalButton = editProfileModal.querySelector('.modal__close-button');
const addCardCloseModalButton = addCardModal.querySelector('.modal__close-button');

// формы двух модальных окон

const editProfileForm = editProfileModal.querySelector('.form');
const addCardForm = addCardModal.querySelector('.form');

// поля форм

const inputName = editProfileForm.querySelector('.form__input_type_name');
const inputProfession = editProfileForm.querySelector('.form__input_type_profession');

const placeInput = addCardForm.querySelector('.form__input_type_place');
const urlInput = addCardForm.querySelector('.form__input_type_url');

// title и subtitle профиля

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

// модальные кнопки сохранить и создать

const saveButton = editProfileModal.querySelector('.form__save-button');
const addButton = addCardModal.querySelector('.form__save-button');

// массив из модалок

const arrayModal = Array.from(document.querySelectorAll('.modal'));

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

// function addCardSubmitHandler(evt) {
//   renderCard({ name: placeInput.value, link: urlInput.value });
//   evt.preventDefault();
//   closeModal(addCardModal);
// }

// обработчики двух модалок

editProfileForm.addEventListener('submit', editProfileSubmitHandler);
// addCardForm.addEventListener('submit', addCardSubmitHandler);

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

// function removeInvalidClass() {
//   inputName.classList.remove(object.inputErrorClass);
//   inputName.classList.remove(object.errorClass);
//   inputProfession.classList.remove(object.inputErrorClass);
//   inputProfession.classList.remove(object.errorClass);
// };

