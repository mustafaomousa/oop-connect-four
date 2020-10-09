import Column from "./column.js";
import ColumnWinInspector from "./column-win-inspector.js";
import RowWinInspector from "./row-win-inspector.js";
import DiagonalWinInspector from "./diagonal-win-inspector.js";


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
        if(this.winnerNumber === 2){
            return `${this.player1} wins!`
        }
        if (this.winnerNumber === 1) {
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
        this.checkForRowWin();
        this.checkForDiagonalWin();
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
    checkForRowWin() {
        
        let columnArray1 = this.columns.slice(0,4);
        let columnArray2 = this.columns.slice(1,5);
        let columnArray3 = this.columns.slice(2,6);
        let columnArray4 = this.columns.slice(3);
        let rowCheck1 = new RowWinInspector(columnArray1);
        let rowCheck2 = new RowWinInspector(columnArray2);
        let rowCheck3 = new RowWinInspector(columnArray3);
        let rowCheck4 = new RowWinInspector(columnArray4);
        // console.log(rowCheck1.inspect(), rowCheck2.inspect(), rowCheck3.inspect(), rowCheck4.inspect())
        if(rowCheck1.inspect() > 0 
        || rowCheck2.inspect() > 0
        || rowCheck3.inspect() > 0
        || rowCheck4.inspect() > 0) {
            
            this.winnerNumber = this.currentPlayer;
            return;
        };
        if(this.winnerNumber === 0) {
            return;
        }
    }

    checkForDiagonalWin(){
        let columnArray1 = this.columns.slice(0, 4);
        let columnArray2 = this.columns.slice(1, 5);
        let columnArray3 = this.columns.slice(2, 6);
        let columnArray4 = this.columns.slice(3);
        let diagonalCheck2 = new DiagonalWinInspector(columnArray2);
        let diagonalCheck1 = new DiagonalWinInspector(columnArray1);
        let diagonalCheck3 = new DiagonalWinInspector(columnArray3);
        let diagonalCheck4 = new DiagonalWinInspector(columnArray4);

        if (diagonalCheck1.inspect() > 0
            || diagonalCheck2.inspect() > 0
            || diagonalCheck3.inspect() > 0
            || diagonalCheck4.inspect() > 0) {

            this.winnerNumber = this.currentPlayer;
            return;
        };

        if (this.winnerNumber === 0) {
            return;
        }

    }
    

}