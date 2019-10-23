class TargetSquare extends Domer {
  _content = "";
  _gameBoard;

  constructor(_gameBoard) {
    super();
    this._gameBoard = GameBoard;
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
