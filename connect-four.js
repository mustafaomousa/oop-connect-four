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
        updateUI();
    })

    
    clickTargets.addEventListener("click", () => {
        game.playInColumn();
        updateUI();
    });
});