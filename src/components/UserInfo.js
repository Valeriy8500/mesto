import { inputName, inputProfession } from '../utils/constants.js';

class UserInfo {
  constructor(dataInfo) {
    this._name = document.querySelector(dataInfo.name);
    this._profession = document.querySelector(dataInfo.profession);
    this._inputName = inputName;
    this._inputProfession = inputProfession;
  }

  getUserInfo() {
    this._inputName.value = this._name.textContent;
    this._inputProfession.value = this._profession.textContent;
  }

  setUserInfo = (name, profession) => {
    this._name.textContent = name;
    this._profession.textContent = profession;
  }
}

export default UserInfo;

