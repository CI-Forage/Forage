import { Games } from "../Game";

//Defines behavior of random button in nav bar
$("#random").on("click", _event => {
    let rank = Math.floor(Math.random() * 20344);
    let game = Games.with({ rank: { minimum: rank, maximum: rank } })[0];
    sessionStorage.setItem("game", JSON.stringify(game));
    window.location.href = "./gameDisplay.html";
});
