import Column from "./column.js";
import ColumnWinInspector from "./column-win-inspector.js";

export default class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1;
        this.winnerNumber = 0;
        this.columns = [];
        for(let i = 0; i <= 6; i++) {
            this.columns.push(new Column());
        }
    }
    getName() {
        if (this.winnerNumber === 3) {
            return `${ this.player1 } ties with ${ this.player2 }`;
        }
        if(this.winnerNumber === 1){
            return `${this.player1} wins!`
        }
        if (this.winnerNumber === 2) {
            return `${this.player2} wins!`
        }
        return `${this.player1} vs ${this.player2}`;
    }
    playInColumn(columnNum) {
        this.columns[columnNum].add(this.currentPlayer);
        if (this.currentPlayer === 1){
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
        if(this.checkForTie() === true) {
            this.winnerNumber = 3;
        }
        if(this.winnerNumber !== 0){
            return;
        }
        this.checkForColumnWin();
    }
    getTokenAt(row, column) {
        return this.columns[column].getTokenAt(row);
    }

    isColumnFull(colIndex){
        // console.log(this.columns[colIndex])
        if (this.winnerNumber === 1 || this.winnerNumber === 2){
            return true;
        }
        return this.columns[colIndex].isFull();
    }
    
    checkForTie() {
        for(let i = 0; i <= 6; i++){
            if(!this.isColumnFull(i)){
                return false;
            };
        }
        return true;
    }

    checkForColumnWin() {
        for(let colNum = 0; colNum <= 6; colNum++){
            let checkColumn = new ColumnWinInspector(this.columns[colNum]);
            if(checkColumn.inspect() === true) {
                this.winnerNumber = this.currentPlayer;
                return;
            } 
        }
    }

}