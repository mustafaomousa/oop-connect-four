import Column from "./column.js";

export default class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1
        this.columns = [];
        for(let i = 0; i <= 6; i++) {
            this.columns.push(new Column(i));
        }
    }
    getName() {
        return `${this.player1} vs ${this.player2}`
    }
    playInColumn(columnNum) {
        if (this.currentPlayer === 1){
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }
}