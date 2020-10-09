import Game from "./game.js";

export default class ColumnWinInspector {
    constructor(col) {
        this.col = col;
        console.log(this.col);
    }
    inspect() {
        for(let rowNum = 0; rowNum <= 2; rowNum++) {
            console.log(this.col);
            let token1 = this.col.getTokenAt(rowNum);
            let token2 = this.col.getTokenAt(rowNum+1);
            let token3 = this.col.getTokenAt(rowNum+2);
            let token4 = this.col.getTokenAt(rowNum+3)
            if(token1 === 1 || token1 === 2){
                if(token1 === token2
                && token1 === token3
                && token1 === token4){
                    return true; 
                }
            }
        }
        return false;
    }
}