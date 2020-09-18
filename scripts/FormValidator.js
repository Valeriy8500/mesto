// Объект для enableValidation

const object = {
  formSelector: '.form',
  inputSelector: '.form__input',
  inputErrorClass: 'form__input_invalid',
  submitButtonSelector: '.form__save-button',
  activeButtonClass: 'form__save-button_undisabled',
  errorClass: 'form__error_visible'
};

// Главная функция валидации всех форм

const enableValidation = (object) => {
  const forms = Array.from(document.querySelectorAll(object.formSelector));

  forms.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    inputsValid(formElement);
  })
};

// Валидация полей ввода

const inputsValid = (forms) => {
  const inputs = Array.from(forms.querySelectorAll(object.inputSelector));
  const buttonSubmit = forms.querySelector(object.submitButtonSelector);

  inputs.forEach((inputElement) => {
    inputElement.addEventListener('input', (evt) => {
      contidionValidInputs(forms, inputElement, object.inputErrorClass, object.errorClass);
      contidionValidButton(inputs, buttonSubmit, object.activeButtonClass);
    })
  })
};

// Валидное и не валидное состояние полей

const contidionValidInputs = (forms, inputElement, inputErrorClass, errorClass) => {
  const errorElement = forms.querySelector(`#${inputElement.name}-error`);

  if (inputElement.validity.valid) {
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
  } else {
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
  }
}

// Функция метода some для кнопки submit

const submitValid = (inputs) => {
  return inputs.some((inputEl) => {
    return !inputEl.validity.valid;
  });
}

// Условия работы кнопки submit(активна или нет)

const contidionValidButton = (inputs, buttonSubmit, activeButtonClass) => {
  if (!submitValid(inputs)) {
    buttonSubmit.classList.add(activeButtonClass);
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.classList.remove(activeButtonClass);
    buttonSubmit.disabled = true;
  }
}

enableValidation(object);



