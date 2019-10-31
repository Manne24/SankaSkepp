class Square extends Domer {
  _content = "";
  _miss = `<div id="miss">MISS</div>`;
  _hit = `<div id="hit">HIT</div>`;
  
  constructor() {
    super();
  }

  
  onSquareClick() {
    if(this._content === "" ) {
      this._content = `${this._miss}`;
    }else if (this._content !== "") {
      this._content = `${this._hit}`;
    }
  }


  render(html) {
    return html`
      <div click="onSquareClick" class="square">${this._content}</div>

    `;
  }
}
