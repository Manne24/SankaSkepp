class Square extends Domer {
  _content = "";
  _posX = 0;
  _posY = 0;
  _ship;

  constructor(posX,posY) {
    super();
    this._ship =  new Ship();
    
  }
  onSquareClick() {
    this._content = "MISS";

  }

  render(html) {
    return html`
      <div click="onSquareClick" class="square">${this._content}</div>

    `;
  }
}
