class UserInfo {
  constructor(dataInfo) {
    this._name = document.querySelector(dataInfo.name);
    this._profession = document.querySelector(dataInfo.profession);
  }

  getUserInfo(name, profession) {
    name.value = this._name.textContent;
    profession.value = this._profession.textContent;
  }

  setUserInfo = (name, profession) => {
    this._name.textContent = name.value;
    this._profession.textContent = profession.value;
  }

}

export default UserInfo;

