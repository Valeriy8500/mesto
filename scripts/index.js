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

openModalButton.addEventListener('click', openModal);

function saveModal() {
  modal.classList.remove('modal_is-open');
}

saveButton.addEventListener('click', saveModal);

function submitForm(event) {
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputProfession.value;
  event.preventDefault();
}

form.addEventListener('submit', submitForm);

function closeModal() {
  modal.classList.toggle('modal_is-open');
  inputName.value = profileTitle.textContent;
  inputProfession.value = profileSubtitle.textContent;
}

closeModalButton.addEventListener('click', closeModal);
