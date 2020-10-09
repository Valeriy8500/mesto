import { inputName, inputProfession } from './constants.js';

class UserInfo {
  constructor(dataInfo) {
    this._name = document.querySelector(dataInfo.name).textContent;
    this._profession = document.querySelector(dataInfo.profession).textContent;
  }

  getUserInfo() {
    inputName.value === this._name;
    inputProfession.value === this._profession;
  }

  setUserInfo = () => {
    this._name === inputName.value;
    this._profession === inputProfession.value;
  }

}

export default UserInfo;

