class Square extends Domer {
  _content = "";
  _ship = false;
  _posX= 0;
  _posY = 0;

  constructor(gameBoard, posX , posY) {
    super();
    
  }

  setShip(){
    this._playerBoard[3][5].setShip()
  }
  
  onSquareClick() {
    if(this._content === "" ) {
      this._content = "MISS";
    } 

  }


  render(html) {
    return html`
      <div click="onSquareClick" class="square">${this._content}</div>

    `;
  }
}
