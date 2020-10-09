class Card {
  constructor({ data, handleCardClick}, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
  }

  _getTemplate = () => {
    const cardTemplate = document.querySelector(this._cardSelector).content.children[0];
    this._view = cardTemplate.cloneNode(true);
    return this._view;
  }

  _setEventListeners = () => {
    this._view.querySelector('.photo-cards__delete').addEventListener('click', this._removeCard);
    this._view.querySelector('.photo-cards__like').addEventListener('click', this._likeButton);
    this._view.querySelector('.photo-cards__items').addEventListener('click', this._handleCardClick);
  }

  _removeCard = () => {
    this._view.remove();
    this._view = null;
  }

  _likeButton = () => {
    this._view.querySelector('.photo-cards__like').classList.toggle('photo-cards__like_active');
  }

  getView() {
    this._getTemplate();
    const photoCardsItems = this._view.querySelector('.photo-cards__items');
    this._view.querySelector('.photo-cards__title').textContent = this._name;
    photoCardsItems.src = this._link;
    photoCardsItems.setAttribute('alt', this._name);
    this._setEventListeners();

    return this._view;
  }
};

export default Card;

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





