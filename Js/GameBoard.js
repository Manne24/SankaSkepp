class GameBoard extends Domer {
  _playerBoard = [];

  constructor() {
    super();
  }

  //Skapar Grid
  printPlayerSquare() {
    for (let i = 0; i < 8; i++) {
      this._playerBoard[i] = [];
      for (let j = 0; j < 8; j++) {
        this._playerBoard[i].push(new Square(this, i, j));
      }
    }
    // console.log(this._playerBoard);
  }

  // Lägger till Ship vertikalt
  addShip(ship) {
    for (let i = 0; i < ship._shipSize; i++) {
      this._playerBoard[ship._posX + i][ship._posY]._content =
        ship._shipModel[i];
    }
  }

  get playerBoard() {
    return this._playerBoard.flat(); // secret magic stuff (Sätter in min array och gör den 2D )
  }

  render(html) {
    return html`
      <section id="containter">
        <h3>Try To locate Enemy Ships</h3>
        <div id="game-board">
          ${this.playerBoard}
        </div>
      </section>
    `;
  }
}
