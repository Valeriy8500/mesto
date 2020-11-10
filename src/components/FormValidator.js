class FormValidator {
  constructor(setting, formSelector) {
    this._setting = setting;
    this._inputSelector = setting.inputSelector;
    this._inputErrorClass = setting.inputErrorClass;
    this._submitButtonSelector = setting.submitButtonSelector;
    this._activeButtonClass = setting.activeButtonClass;
    this._errorClass = setting.errorClass;
    this._formSelector = formSelector;
  }

  enableValidation() {
    this._formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._inputsValid();
  };

  _inputsValid() {
    this._inputs = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
    this._buttonSubmit = this._formSelector.querySelector(this._submitButtonSelector);

    this._inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        if (inputElement.validity.valid) {
          this._validInputs(inputElement);
        } else {
          this._inValidInputs(inputElement);
        }
        this._contidionValidButton();
      })
    })
  };

  _validInputs(inputElement) {
    const errorElement = this._formSelector.querySelector(`#${inputElement.name}-error`);

    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  }

  _inValidInputs(inputElement) {
    const errorElement = this._formSelector.querySelector(`#${inputElement.name}-error`);

    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _contidionValidButton() {
    if (!this._submitValid()) {
      this._buttonSubmit.classList.add(this._activeButtonClass);
      this._buttonSubmit.disabled = false;
    } else {
      this._buttonSubmit.classList.remove(this._activeButtonClass);
      this._buttonSubmit.disabled = true;
    }
  };

  _submitValid = () => {
    return this._inputs.some((inputEl) => {
      return !inputEl.validity.valid;
    })
  };

};

export default FormValidator;




