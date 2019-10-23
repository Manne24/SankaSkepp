class App extends Domer {
    
    
    constructor(){
        super()
        this.gameBoard = new GameBoard();

    }

    render(html){
        return html`
        <section>
        <h1>Sänka Skepp</h1>
        <hr>
        ${this.gameBoard}
        <hr>
        </section>
                
    `
    }
}

new App();