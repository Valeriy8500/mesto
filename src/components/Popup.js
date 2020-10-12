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

    this._modalSelector.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('modal_opened')) {
        evt.target.classList.remove('modal_opened');
      }
    });
  }
}

export default Popup;