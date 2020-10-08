import { Game } from "./game.js";

let game = undefined;
window.addEventListener("DOMContentLoaded", event => {
    let playerName = document.getElementById("player-1-name");
    playerName.addEventListener("keyup", event => {
        let newGame = document.getElementById("new-game");
        if(player1 !== "" && player2 !== "") {
            newGame.setAttribute("disabled", "false");
        } else {
            newGame.setAttribute("disabled", "true");
        }
    });
    let player2Name = document.getElementById("player-2-name");
    player2Name.addEventListener("keyup", event => {
        let newGame = document.getElementById("new-game");
        if (player1 !== "" && player2 !== "") {
            newGame.setAttribute("disabled", "false");
        } else {
            newGame.setAttribute("disabled", "true");
        }
    });
    document.getElementById("new-game")
    .addEventListener("click", event => {
        this.Game(playerName.value, player2Name.value);
        playerName.value = "";
        player2Name.value = ""; 
    })
});