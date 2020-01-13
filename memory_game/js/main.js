console.log("Up and running!");

const cards = ["winnie", "winnie", "disappointed", "disappointed"];

let cardOne = cards[0];
let cardTwo = cards[2];
let cardThree = cards[1];
let cardFour = cards[3];

const cardsInPlay = [];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped winnie the pooh meme.");
console.log("User flipped disappointed guy meme.");

if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}
