import Game  from "./game.js";
import Column from "./column.js"

let game = undefined;

function updateUI() {
    let boardHolder = document.getElementById('board-holder');
    let gameName = document.getElementById('game-name');
    let clickTargets = document.getElementById("click-targets");
    if(game === undefined){
        boardHolder.className = 'is-invisible';
    } else {
        boardHolder.className = '';
        gameName.innerHTML = game.getName();
    }
    if (game.currentPlayer === 1) {
        clickTargets.className = "black";
    } else {
        clickTargets.className = "red";
    }
    for(let rowIndex = 0; rowIndex <= 5; rowIndex++) {
        for(let colIndex = 0; colIndex <= 6; colIndex++) {
            let squareId = document.getElementById(`square-${rowIndex}-${colIndex}`);
            let insertedToken = game.getTokenAt(rowIndex, colIndex);
            // console.log(insertedToken);
            squareId.innerHTML = "";
            if (insertedToken === 1){
                // console.log(insertedToken);
                let newDiv = document.createElement('div');
                newDiv.className = "token black";
                squareId.appendChild(newDiv);
            } else if (insertedToken === 2) {
                let newDiv = document.createElement('div');
                newDiv.className = "token red";
                squareId.appendChild(newDiv);
            }
        }
    }

    for(let i = 0; i <= 6; i++){
        let currentCol = document.getElementById(`column-${i}`);
        let colId = currentCol.id;
        colId = colId.slice(colId.length-1);
        colId = Number.parseInt(colId);
        if(game.isColumnFull(colId)){
            currentCol.classList.add('full');
        } else {
            currentCol.classList.remove('full');
        }
    }

}

window.addEventListener("DOMContentLoaded", event => {
    let newGame = document.getElementById("new-game");
    let playerName = document.getElementById("player-1-name");
    let player2Name = document.getElementById("player-2-name");
    let clickTargets = document.getElementById("click-targets");
    playerName.addEventListener("keyup", event => {
        if(playerName.value !== "" && player2Name.value !== "") {
            newGame.disabled = false;
        } else {
            newGame.disabled = true;
        }
    });

    player2Name.addEventListener("keyup", event => {
        if (playerName.value !== "" && player2Name.value !== "") {
            newGame.disabled = false;
        } else {
            newGame.disabled = true;
        }
    });

    newGame.addEventListener("click", event => {
        game = new Game(playerName.value, player2Name.value);
        playerName.value = "";
        player2Name.value = "";
        newGame.disabled = true;
        clickTargets.addEventListener("click", clickListener);
        updateUI();
    })

    function clickListener (event) {
        let clickedCol = event.target.id;
        if (event.target.id.includes("column")){
            
            clickedCol = clickedCol.slice(clickedCol.length - 1);
            clickedCol = Number.parseInt(clickedCol);
            // console.log(clickedCol);
            game.playInColumn(clickedCol);
        }
        
        updateUI();
        if(game.winnerNumber > 0){
            clickTargets.removeEventListener('click', clickListener);
        }
    } 
    clickTargets.addEventListener("click", clickListener);  
});