class GameBoard extends Domer {
    _playerBoard = []
    
    
    constructor(){
        super()
        this.printSquare();
    }
        
printSquare(){
    for(let i = 0; i < 100; i++){
        this._playerBoard.push(new TargetSquare(this));
    }
}   
    
    render(html){
            return html`
            <section id="containter">
                <div id="game-board">${this._playerBoard}</div>
            </section>                       
        `
        }
}
