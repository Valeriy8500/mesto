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

// переменные открытия(открытых) картинок

const openImageModal = document.querySelector('.modal_type_open-image');
const openImageCloseModalButton = openImageModal.querySelector('.modal__close-button_type_open-image');

const imageModalImage = openImageModal.querySelector('.modal__image');
const imageModalTitle = openImageModal.querySelector('.modal__title');

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

openImageCloseModalButton.addEventListener('click', () => {
  closeModal(openImageModal);
})

// renderCard, forEach и createCard

function renderCard(item) {
  listCards.prepend(createCard(item));
};

initialCards.forEach(function (item) {
  renderCard(item);
});

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
    openModal(openImageModal);

    imageModalImage.src = item.link;
    imageModalTitle.textContent = item.name;
  })

  cardTitle.textContent = item.name;
  cardImage.src = item.link;
  cardImage.setAttribute('alt', item.name);

  return cardElement;
};



