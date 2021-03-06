class Section {
  constructor({ data, renderer }, containerSelector) {
    this._initialItems = data;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  renderItems() {
    this._initialItems.forEach((item) => {
      this._renderer(item);
    })
  }

  addItem(el) {
    this._containerSelector.prepend(el);
  }
}

export default Section;