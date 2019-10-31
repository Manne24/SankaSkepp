class App extends Domer {
  constructor() {
    super();
    this.gameBoard = new GameBoard();
    this.gameBoard.printPlayerSquare();
    this.ship = new Ship(2 , 0 , 2);
    this.ship2 = new Ship(3 , 3 , 1);
    this.ship3 = new Ship(4 , 2 , 7);
    this.gameBoard.addShip(this.ship);
    this.gameBoard.addShip(this.ship2);
    this.gameBoard.addShip(this.ship3);
  }

  render(html) {
    return html`
      <section>
      <div class="header">
        <img src="/image/leftShip.png"> 
        <h1>SÄNKASKEPP</h1>
        <img src="/image/rightShip.png"> 
      </div>
        ${this.gameBoard}
      </section>
    `;
  }
}

new App();
