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

// старый код
// Главная функция валидации всех форм

// const enableValidation = (object) => {
//   const forms = Array.from(document.querySelectorAll(object.formSelector));

//   forms.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });

//     inputsValid(formElement);
//   })
// };

// Валидация полей ввода

// const inputsValid = (forms) => {
//   const inputs = Array.from(forms.querySelectorAll(object.inputSelector));
//   const buttonSubmit = forms.querySelector(object.submitButtonSelector);

//   inputs.forEach((inputElement) => {
//     inputElement.addEventListener('input', (evt) => {
//       contidionValidInputs(forms, inputElement, object.inputErrorClass, object.errorClass);
//       contidionValidButton(inputs, buttonSubmit, object.activeButtonClass);
//     })
//   })
// };

// // Валидное и не валидное состояние полей

// const contidionValidInputs = (forms, inputElement, inputErrorClass, errorClass) => {
//   const errorElement = forms.querySelector(`#${inputElement.name}-error`);

//   if (inputElement.validity.valid) {
//     inputElement.classList.remove(inputErrorClass);
//     errorElement.textContent = '';
//     errorElement.classList.remove(errorClass);
//   } else {
//     inputElement.classList.add(inputErrorClass);
//     errorElement.textContent = inputElement.validationMessage;
//     errorElement.classList.add(errorClass);
//   }
// }

// // Функция метода some для кнопки submit

// const submitValid = (inputs) => {
//   return inputs.some((inputEl) => {
//     return !inputEl.validity.valid;
//   });
// }

// Условия работы кнопки submit(активна или нет)

// const contidionValidButton = (inputs, buttonSubmit, activeButtonClass) => {
//   if (!submitValid(inputs)) {
//     buttonSubmit.classList.add(activeButtonClass);
//     buttonSubmit.disabled = false;
//   } else {
//     buttonSubmit.classList.remove(activeButtonClass);
//     buttonSubmit.disabled = true;
//   }
// }

// enableValidation(object);



