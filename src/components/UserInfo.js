import { inputName, inputProfession } from '../utils/constants.js';

class UserInfo {
  constructor(dataInfo) {
    this._name = document.querySelector(dataInfo.name);
    this._profession = document.querySelector(dataInfo.profession);
  }

  getUserInfo() {
    inputName.value = this._name.textContent;
    inputProfession.value = this._profession.textContent;
  }

  setUserInfo = () => {
    this._name.textContent = inputName.value;
    this._profession.textContent = inputProfession.value;
  }

}

export default UserInfo;

