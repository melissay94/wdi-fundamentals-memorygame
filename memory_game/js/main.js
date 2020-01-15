console.log("Up and running!");

const cards = [];
const cardsInPlay = [];

function createPlayingCard(name, panel, cardImage) {
    let card = {
        name: name,
        panel: panel, 
        cardImage: cardImage
    }

    cards.push(card);
}

function createBoard() {
    for (let i = 0; i < cards.length; i++) {
        let cardElement = document.createElement("img");
        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute("data-id", i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById("game-board").appendChild(cardElement);
    }
}

function checkForMatch() {
    
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        } else {
            alert("Sorry, try again.");
        }
    }
}

function flipCard() {

    console.log(this);
    let cardId = this.getAttribute("data-id");
    
    console.log("User flipped " + cards[cardId].name);
    cardsInPlay.push(cards[cardId].name);

    this.setAttribute("src", cards[cardId].cardImage);

    checkForMatch();
}

createPlayingCard("queen", "hearts", "images/queen-of-hearts.png");
createPlayingCard("king", "diamonds", "images/king-of-diamonds.png");
createPlayingCard("king", "hearts", "images/king-of-hearts.png");
createPlayingCard("queen", "diamonds", "images/queen-of-diamonds.png");

createBoard();
