// var player1Name = prompt("Enter Player 1 Name: ");
// var player2Name = prompt("Enter Player 2 Name: ");

// document.querySelector(".player1").innerHTML = player1Name;
// document.querySelector(".player2").innerHTML = player2Name;


var randomNumber1 = (Math.floor(Math.random() * 6)) + 1;
var randomNumber2 = (Math.floor(Math.random() * 6)) + 1;
if (randomNumber1 === 1) {
    document.querySelector(".img1").setAttribute("src", "images/Donkey.png");
} else if (randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute("src", "images/King.png");
} else if (randomNumber1 === 3) {
    document.querySelector(".img1").setAttribute("src", "images/Donkey.png");
} else if (randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute("src", "images/King.png");
} else if (randomNumber1 === 5) {   
    document.querySelector(".img1").setAttribute("src", "images/Donkey.png");
} else if (randomNumber1 === 6) {
    document.querySelector(".img1").setAttribute("src", "images/King.png");
} 



if (randomNumber2 === 1) {
    document.querySelector(".img2").setAttribute("src", "images/King.png");
} else if (randomNumber2 === 2) {
    document.querySelector(".img2").setAttribute("src", "images/Donkey.png");
}  else if (randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src", "images/King.png");
} else if (randomNumber2 === 4) {
    document.querySelector(".img2").setAttribute("src", "images/Donkey.png");
} else if (randomNumber2 === 5) {
    document.querySelector(".img2").setAttribute("src", "images/King.png");
} else if (randomNumber2 === 6) {
    document.querySelector(".img2").setAttribute("src", "images/Donkey.png");
} 


// if (player1Name === "") {
//     player1Name = "Player 1";
// }else if (player2Name === "") {
//     player2Name = "Player 2";
// } 
// if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = player1Name + " Wins! 🚩";
// } else if (randomNumber1 < randomNumber2) {
//     document.querySelector("h1").innerHTML = player2Name + " Wins! 🚩";
// }  else if (randomNumber1 === randomNumber2) {
//     document.querySelector("h1").innerHTML = "Draw!";
// } else {
//     document.querySelector("h1").innerHTML = "Refresh Me!";
// }


