class Ship extends Domer {
  _shipSize;
  _shipModel;
  _posX = 0;
  _posY = 0;

  constructor(size, posX, posY) {
    super();
    this._shipSize = size;
    this._posX = posX;
    this._posY = posY;
    this.setSize();
  }

  // skapar skepp modelen
  setSize() {
    if (this._shipSize === 2) {
      this._shipModel = [" ", "  "];
    } else if (this._shipSize === 3) {
      this._shipModel = ["  ", "  ", "  "];
    } else if (this._shipSize === 4) {
      this._shipModel = ["  ", "  ", "  ", "  "];
    }
  }

  render(html) {
    return html`
      <section>${this._shipModel}</section>
    `;
  }
}
