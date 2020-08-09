// переменные

const editProfileModal = document.querySelector('.modal_type_edit-profile');
const addCardModal = document.querySelector('.modal_type_add-card');
const openImageModal = document.querySelector('.modal_type_open-image');

const openProfileModalButton = document.querySelector('.modal-button');
const openCardModalButton = document.querySelector('.add-button');

const editProfileCloseModalButton = editProfileModal.querySelector('.modal__close-button');
const addCardCloseModalButton = addCardModal.querySelector('.modal__close-button');
const openImageCloseModalButton = openImageModal.querySelector('.modal__close-button_type_open-image');

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

// переменные открытия картинок

const imageModalImage = openImageModal.querySelector('.modal__image');
const imageModalTitle = openImageModal.querySelector('.modal__title');







// функции обоих модалок

function toggleModal(modalWindow) {
  modalWindow.classList.toggle('modal_opened');
}

function editProfileSubmitHandler(evt) {
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputProfession.value;
  evt.preventDefault();
  toggleModal(editProfileModal);
}

function addCardSubmitHandler(evt) {
  renderCard({ name: placeInput.value, link: urlInput.value });
  evt.preventDefault();
  toggleModal(addCardModal);
}

// обработчики двух модалок и закрытие открытых картинок

editProfileForm.addEventListener('submit', editProfileSubmitHandler);
addCardForm.addEventListener('submit', addCardSubmitHandler);

openProfileModalButton.addEventListener('click', () => {
  if (!editProfileModal.classList.contains('modal_opened')) {
    inputName.value = profileTitle.textContent;
    inputProfession.value = profileSubtitle.textContent;
  }

  toggleModal(editProfileModal);
});

openCardModalButton.addEventListener('click', () => {
  placeInput.value = "";
  urlInput.value = "";
  toggleModal(addCardModal);
});

editProfileCloseModalButton.addEventListener('click', () => {
  toggleModal(editProfileModal);
});

addCardCloseModalButton.addEventListener('click', () => {
  toggleModal(addCardModal);
});

openImageCloseModalButton.addEventListener('click', () => {
  toggleModal(openImageModal);
})

// массив с названиями и ссылками на картинки

const initialCards = [
  {
    name: 'Карелия',
    link: 'https://images.unsplash.com/photo-1573156667506-115190c68737?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Севастополь',
    link: 'https://images.unsplash.com/photo-1589198376103-0486bc2426cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Домбай',
    link: 'https://images.unsplash.com/photo-1567069160354-f25b26e62fa1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1501675423372-9bfa95849e62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Алтай',
    link: 'https://images.unsplash.com/photo-1564324738080-bbbf8d6b4887?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
  }
];

// переменные карточек

const cardTemplate = document.querySelector('.template-card').content.querySelector('.photo-cards__container');
const listCards = document.querySelector('.photo-cards');

// функции карточек

function likeClick(likeActive) {
  likeActive.classList.toggle('photo-cards__like_active');
}

function deleteClick(deleteCard) {
  deleteCard.closest('.photo-cards__container').remove();
}

function openImageClick(openImage) {
  toggleModal(openImage);
}

function createCard(item) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector('.photo-cards__items');
  const cardTitle = cardElement.querySelector('.photo-cards__title');
  const cardLikeButton = cardElement.querySelector('.photo-cards__like');
  const cardDeleteButton = cardElement.querySelector('.photo-cards__delete');

  cardLikeButton.addEventListener('click', () => {
    likeClick(cardLikeButton);
  })

  cardDeleteButton.addEventListener('click', () => {
    deleteClick(cardDeleteButton);
  })

  cardImage.addEventListener('click', () => {
    openImageClick(openImageModal);

    imageModalImage.src = item.link;
    imageModalTitle.textContent = item.name;
  })

  cardTitle.textContent = item.name;
  cardImage.src = item.link;

  return cardElement;
}

function renderCard(item) {
  listCards.prepend(createCard(item));
}

initialCards.forEach(function (item) {
  renderCard(item);
})


