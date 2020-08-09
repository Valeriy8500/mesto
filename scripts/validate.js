const object = {
  formSelector: '.form',
  inputSelector: '.form__input',
  inputErrorClass: 'form__input_invalid',
  submitButtonSelector: '.form__save-button',
  activeButtonClass: 'form__save-button_undisabled',
  errorClass: 'form__error_visible'
};

// Валидация всех форм

const enableValidation = ({ formSelector, inputSelector, inputErrorClass, submitButtonSelector, activeButtonClass, errorClass }) => {
  // Сброс поведения по умолчанию
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    const inputs = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonSubmit = formElement.querySelector(submitButtonSelector);

    inputs.forEach((inputElement) => {
      // Обработчик на каждое поле
      inputElement.addEventListener('input', (evt) => {
        const errorElement = formElement.querySelector(`#${inputElement.name}-error`);

        if (inputElement.validity.valid) {
          // Добавить валидное состояние полей
          inputElement.classList.remove(inputErrorClass);
          errorElement.textContent = '';
          errorElement.classList.remove(errorClass);
        } else {
          // Добавить невалидное состояние полей
          inputElement.classList.add(inputErrorClass);
          errorElement.textContent = inputElement.validationMessage;
          errorElement.classList.add(errorClass);
        }

        // Валидация кнопки

        const submitValid = inputs.some((inputElement) => !inputElement.validity.valid);
        if (!submitValid) {
          buttonSubmit.classList.add(activeButtonClass);
          buttonSubmit.disabled = false;
        } else {
          buttonSubmit.classList.remove(activeButtonClass);
          buttonSubmit.disabled = true;
        }
      });
    })
  })
};

enableValidation(object);



