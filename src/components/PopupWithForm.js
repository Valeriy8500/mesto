import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor(modalSelector, { formSubmit }) {
    super(modalSelector);
    this._formSubmit = formSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._modalSelector.querySelector('.form')
    .addEventListener('submit', this._formSubmit);
  }
}

export default PopupWithForm;
