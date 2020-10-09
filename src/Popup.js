class Popup {
  constructor(modalSelector) {
    this._modalSelector = modalSelector;
  }

  open() {
    this._modalSelector.classList.add('modal_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._modalSelector.classList.remove('modal_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key !== 'Escape') {
      return;
    }

    this.close();
  }

  setEventListeners() {
    this._modalSelector.querySelector('.modal__close-button').addEventListener('click', () => {
      this.close();
    });
  }
}

export default Popup;