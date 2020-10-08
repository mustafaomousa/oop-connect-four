import Game from "./game.js";

export default class ColumnWinInspector {
    constructor(col) {
        this.col = col;
        console.log(this.col);
    }
    inspect() {
        for(let rowNum = 0; rowNum <= 2; rowNum++) {
            console.log(this.col);
            //console.log(this.col[rowNum], this.col[rowNum + 1], this.col[rowNum + 2], this.col[rowNum+3])
                if ((this.col[rowNum] === 1)
                && (this.col[rowNum + 1] === 1)
                && (this.col[rowNum + 2] === 1) 
                && (this.col[rowNum + 3] === 1)){
                    console.log("I'm here");
                    return true; 
                }
            
        }
        return false;
    }
}