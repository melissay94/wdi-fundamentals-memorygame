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
        cardElement.setAttribute("src", "images/card_front.jpg");
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

createPlayingCard("winnie", 1, "images/meme_2_first_panel.jpg");
createPlayingCard("disappointed", 2, "images/meme_1_second_panel.jpg");
createPlayingCard("winnie", 2, "images/meme_2_second_panel.jpg");
createPlayingCard("disappointed", 1, "images/meme_1_first_panel.jpg");

createBoard();
