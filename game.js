import Column from "./column.js";

export default class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1
        this.columns = [];
        for(let i = 0; i <= 6; i++) {
            this.columns.push(new Column());
        }
    }
    getName() {
        return `${this.player1} vs ${this.player2}`
    }
    playInColumn(columnNum) {
        this.columns[columnNum].add(this.currentPlayer);
        if (this.currentPlayer === 1){
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }
    getTokenAt(row, column) {
        return this.columns[column].getTokenAt(row);
    }

    isColumnFull(colIndex){
        console.log(this.columns[colIndex])
        return this.columns[colIndex].isFull();
    }

}