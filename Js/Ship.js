class Ship extends Domer {
shipSize;
shipModel;
posX = 0; 
posY = 0;

  
  constructor(size, posX , posY) {
    super();
    this.shipSize = size;
    this.posX = posX;
    this.posY = posY;
    this.setSize();
  }

  setSize() {
    if(this.shipSize === 2) {
      this.shipModel = [" " , "  "];
  }else if(this.shipSize === 3) {
    this.shipModel = ["  " , "  " ,"  "];
  }else if(this.shipSize === 4) {
    this.shipModel = ["  " , "  " , "  ", "  "];
  }
}



  render(html) {
    return html`
      <section>${this.shipModel}</section>
    `;
  }
}
