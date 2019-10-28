class GameBoard extends Domer {
  _playerBoard = [];

  constructor() {
    super();

}

printPlayerSquare() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {   
            this._playerBoard.push(new Square(this,[i][j]));
        }
    }
    console.log(this._playerBoard);
  }

  render(html) {
    return html`
      <section id="containter">
        <div id="game-board">
          ${this._playerBoard}
        </div>
      </section>
    `;
  }
}
