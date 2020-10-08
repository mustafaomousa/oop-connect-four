


export default class Column {
    constructor() {
        this.tokens = ['','','','','',''];
    }

    add(playerNum) {
        for(let i = 0; i <= 5; i++){
            if(this.tokens[i] !== ''){
                this.tokens[i-1] = playerNum;
                return;
            }
        }
    }

    getTokenAt(row){
        if(this.tokens[row] === ''){
            return null;
        } else if (this.tokens[row] === 1){
            return 1;
        } else {
            return 2;
        }
    };
}