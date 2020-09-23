// массив с названиями и ссылками на картинки

const initialCards = [
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

// Переменная контейнера, куда вставляются карточки

const listCards = document.querySelector('.photo-cards');

// переменные открытия(открытых) картинок

const openImageModal = document.querySelector('.modal_type_open-image');
const openImageCloseModalButton = openImageModal.querySelector('.modal__close-button_type_open-image');

const imageModalImage = openImageModal.querySelector('.modal__image');
const imageModalTitle = openImageModal.querySelector('.modal__title');

// Повторяющиеся функции

function openModal(modalWindow) {
  modalWindow.classList.add('modal_opened');
  document.addEventListener('keydown', EscKey);
}

function closeModal(modalWindow) {
  modalWindow.classList.remove('modal_opened');
  document.removeEventListener('keydown', EscKey);
}

function EscKey(evt) {
  if (evt.key !== 'Escape') {
    return;
  }

  const modalWindows = document.querySelector('.modal_opened');
  closeModal(modalWindows);
};

// Класс Card

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _removeCard = () => {
    this._view.remove();
  }

  _likeButton = () => {
    this._view.querySelector('.photo-cards__like').classList.toggle('photo-cards__like_active');
  }

  _openImageModal = () => {
    openModal(openImageModal);
    imageModalImage.src = this._link;
    imageModalTitle.textContent = this._name;
  }

  _closeImageModalButton = () => {
    closeModal(openImageModal);
  }

  getView() {
    const cardTemplate = document.querySelector(this._cardSelector).content.children[0];
    this._view = cardTemplate.cloneNode(true);
    this._view.querySelector('.photo-cards__title').textContent = this._name;
    this._view.querySelector('.photo-cards__items').src = this._link;
    this._view.querySelector('.photo-cards__items').setAttribute('alt', this._name);
    this._view.querySelector('.photo-cards__delete').addEventListener('click', this._removeCard);
    this._view.querySelector('.photo-cards__like').addEventListener('click', this._likeButton);
    this._view.querySelector('.photo-cards__items').addEventListener('click', this._openImageModal);
    openImageCloseModalButton.addEventListener('click', this._closeImageModalButton);

    return this._view;
  }
};

// Функция создания картчек из массива initialCards

initialCards.forEach((item) => {
  const card = new Card(item, '.template-card');

  listCards.append(card.getView());
})

// функции сздания новой карточки

const renderCard = function () {
  const card = new Card({ name: placeInput.value, link: urlInput.value }, '.template-card');

  listCards.prepend(card.getView());
}

function addCardSubmitHandler(evt) {
  renderCard();
  evt.preventDefault();
  closeModal(addCardModal);
}

addCardForm.addEventListener('submit', addCardSubmitHandler);

// Класс CardList

// class CardList {
//   constructor (data, createItem) {
//     this._data = data;
//     this._createItem = createItem;
//   }

//   _addItem = (item) => {
//     const items = this._createItem(item.name, item.link).getView();
//     this._view.append(items);
//   }

//   getView() {
//     const cardTemplate = document.querySelector('.template-card').content.children[0];
//     this._view = cardTemplate.cloneNode(true);

//     this._data.forEach(this._addItem);

//     return this._view;
//   }
// };

// Класс CardForm

// class FormValidator {
//   constructor (data) {

//   }

//   getView() {
//     const forms = Array.from(document.querySelectorAll(object.formSelector));
//   }
// }

// const createItem = (...arg) => new Card(...arg);

// const list = (new CardList(initialCards, createItem)).getView();

// listCards.append(list);

// старый код
// функции карточек

// function likeClick(likeActive) {
//   likeActive.classList.toggle('photo-cards__like_active');
// }

// function deleteClick(deleteCard) {
//   deleteCard.closest('.photo-cards__container').remove();
// }

// openImageCloseModalButton.addEventListener('click', () => {
//   closeModal(openImageModal);
// })

// createCard, renderCard и forEach

// function createCard(item) {
  // const cardElement = cardTemplate.cloneNode(true);

  // const cardImage = cardElement.querySelector('.photo-cards__items');
  // const cardTitle = cardElement.querySelector('.photo-cards__title');
  // const cardLikeButton = cardElement.querySelector('.photo-cards__like');
  // const cardDeleteButton = cardElement.querySelector('.photo-cards__delete');

  // cardLikeButton.addEventListener('click', () => {
  //   likeClick(cardLikeButton);
  // })

  // cardDeleteButton.addEventListener('click', () => {
  //   deleteClick(cardDeleteButton);
  // })

  // cardImage.addEventListener('click', () => {
  //   openModal(openImageModal);

  //   imageModalImage.src = item.link;
  //   imageModalTitle.textContent = item.name;
  // })

  // cardTitle.textContent = item.name;
  // cardImage.src = item.link;
  // cardImage.setAttribute('alt', item.name);

  // return cardElement;
// };

// function renderCard(item) {
//   listCards.prepend(createCard(item));
// };

// initialCards.forEach(function (item) {
//   renderCard(item);
// });





