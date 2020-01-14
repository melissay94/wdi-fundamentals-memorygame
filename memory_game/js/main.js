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

createPlayingCard("winnie", 1, "images/meme_2_first_panel.jpg");
createPlayingCard("winnie", 2, "images/meme_2_second_panel.jpg");
createPlayingCard("disappointed", 1, "images/meme_1_first_panel.jpg");
createPlayingCard("disappointed", 2, "images/meme_1_second_panel.jpg");

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
    
    console.log("User flipped " + cards[cardId].name);
    cardsInPlay.push(cards[cardId].name);

    console.log("Card Image: " + cards[cardId].cardImage);
    console.log("Panel Number: " + cards[cardId].panel);

    checkForMatch();
}

flipCard(0);
flipCard(2);
