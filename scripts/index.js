let openModalButton = document.querySelector('.modal-button');
let modal = document.querySelector('.modal');
let closeModalButton = document.querySelector('.modal__close-button');
let form = modal.querySelector('.form');

let inputName = document.querySelector('.form__input_type_name');
let inputProfession = document.querySelector('.form__input_type_profession');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let saveButton = modal.querySelector('.form__save-button');

function openModal() {
  modal.classList.add('modal_is-open');
  inputName.value = profileTitle.textContent;
  inputProfession.value = profileSubtitle.textContent;
}

function saveModal() {
  modal.classList.remove('modal_is-open');
}

function submitForm(event) {
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputProfession.value;
  event.preventDefault();
}

function closeModal() {
  modal.classList.toggle('modal_is-open');
  inputName.value = profileTitle.textContent;
  inputProfession.value = profileSubtitle.textContent;
}

openModalButton.addEventListener('click', openModal);
saveButton.addEventListener('click', saveModal);
form.addEventListener('submit', submitForm);
closeModalButton.addEventListener('click', closeModal);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
