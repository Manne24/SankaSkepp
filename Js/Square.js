class Square extends Domer {
  _content = "";
  _miss = `<div id="miss">MISS</div>`;
  _hit = `<div id="hit">HIT</div>`;
  _isClicked = false;

  constructor() {
    super();
  }

  //Blir antingen rätt eller fel om jag klickar

  onSquareClick() {
    if (this._isClicked) {
      return;
    }
    if (this._content === "") {
      this._content = `${this._miss}`;
    } else if (this._content !== "" || this._content !== this._miss) {
      this._content = `${this._hit}`;
    }
    this._isClicked = true;
  }

  render(html) {
    return html`
      <div click="onSquareClick" class="square">${this._content}</div>
    `;
  }
}
