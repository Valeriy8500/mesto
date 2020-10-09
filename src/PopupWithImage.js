import Popup from './Popup.js';
import { imageModalImage, imageModalTitle } from './constants.js';

class PopupWithImage extends Popup {
  constructor(modalSelector) {
    super(modalSelector);
  }

  open(card) {
    this._link = card._link;
    this._name = card._name;

    imageModalImage.src = this._link;
    imageModalTitle.textContent = this._name;

    super.open();
  }
}

export default PopupWithImage;

