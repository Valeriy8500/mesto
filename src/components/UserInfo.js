class UserInfo {
  constructor(dataInfo) {
    this._name = document.querySelector(dataInfo.name);
    this._profession = document.querySelector(dataInfo.profession);
  }

  getUserInfo() {
    return {
      userName: this._name.textContent,
      userProfession: this._profession.textContent
    }
  }

  setUserInfo = (name, profession) => {
    this._name.textContent = name;
    this._profession.textContent = profession;
  }
}

export default UserInfo;

