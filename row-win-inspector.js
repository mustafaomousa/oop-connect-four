import Game from "./game.js";
export default class RowWinInspector {
    constructor(columns) {
        this.columns = columns;
    }
    inspect() {
        for (let row = 0; row <= 5; row++){
                console.log(this.columns[0]);
                // let token1 = getTokenAt(row, this.columns[0])
                let token1 = this.columns[0].getTokenAt(row);
                let token2 = this.columns[1].getTokenAt(row);
                let token3 = this.columns[2].getTokenAt(row);
                let token4 = this.columns[3].getTokenAt(row);
                // console.log(token1, token2, token3, token4);
                if(token1 > 0){
                    if(token1 === token2
                    && token1 === token3
                    && token1 === token4){
                    return token1; 
                    }
                }
        }
        return 0;
    }
}