const openModalButton = document.querySelector('.modal-button');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.modal__close-button');
const form = modal.querySelector('.form');

const inputName = document.querySelector('.form__input_type_name');
const inputProfession = document.querySelector('.form__input_type_profession');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const saveButton = modal.querySelector('.form__save-button');

function toggleModal() {
  modal.classList.toggle('modal_is-open');
}

openModalButton.addEventListener('click', toggleModal);
saveButton.addEventListener('click', toggleModal);

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
