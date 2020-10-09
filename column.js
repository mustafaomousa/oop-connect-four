export default class Column {
    constructor() {
        this.tokens = ['','','','','',''];
    }

    add(playerNum) {
        for(let i = 5; i >= 0; i--){
            if(this.tokens[i] === ''){
                this.tokens[i] = playerNum;
                // console.log(i);
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
    }

    isFull(){
        if(this.tokens[0] !== ''){
            return true;
        }
        return false;
    }

}