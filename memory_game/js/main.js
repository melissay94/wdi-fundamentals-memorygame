console.log("Up and running!");

const cards = ["winnie", "winnie", "disappointed", "disappointed"];
const cardsInPlay = [];

function checkForMatch() {
    
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            console.log("You found a match!");
        } else {
            console.log("Sorry, try again.");
        }
    }
}

function flipCard(cardId) {
    
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);

    checkForMatch();
}

flipCard(0);
flipCard(2);
