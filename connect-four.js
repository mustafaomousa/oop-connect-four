import Game  from "./game.js";

let game = undefined;

function updateUI() {
    let boardHolder = document.getElementById('board-holder');
    let gameName = document.getElementById('game-name');
    if(game === undefined){
        boardHolder.className = 'is-invisible';
    } else {
        boardHolder.className = '';
        gameName.innerHTML = game.getName();
    }
}

window.addEventListener("DOMContentLoaded", event => {
    let newGame = document.getElementById("new-game");
    let playerName = document.getElementById("player-1-name");
    let player2Name = document.getElementById("player-2-name");

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
});