console.log("Up and running!");

const cards = [];
const cardsInPlay = [];

function setUpGame() {

    document.getElementById("reset-button").addEventListener('click', resetBoard);

    createPlayingCard("queen", "hearts", "images/queen-of-hearts.png");
    createPlayingCard("king", "diamonds", "images/king-of-diamonds.png");
    createPlayingCard("king", "hearts", "images/king-of-hearts.png");
    createPlayingCard("queen", "diamonds", "images/queen-of-diamonds.png");
    
    createBoard();

}

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
        cardElement.setAttribute("class", "game-card");
        cardElement.setAttribute("id", "card-"+i);
        cardElement.setAttribute("data-id", i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById("game-board").appendChild(cardElement);
    }
}

function resetBoard() {
    const cardsInPlayLength = cardsInPlay.length
    for (let i = 0; i < cardsInPlayLength; i++) {
        cardsInPlay.pop();
    }

    const cardImg = document.querySelectorAll(".game-card");
    for (let i = 0; i < cardImg.length; i++) {
        cardImg[i].setAttribute("src", "images/back.png");
    }

    document.getElementById("player-score").textContent = 0;
}

function increaseScore() {
    let current_score = document.getElementById("player-score")
    current_score.textContent = parseInt(current_score.textContent) + 1;
}

function decreaseScore() {
    let current_score = document.getElementById("player-score")
    current_score.textContent = parseInt(current_score.textContent) - 2;
}

function checkForMatch() {
    
    if (cardsInPlay.length % 2 == 0) {
        if (cardsInPlay[0].name === cardsInPlay[1].name) {
            increaseScore();
        } else {
            decreaseScore();
            window.setTimeout(() => {
                flipCardsBack();
            }, 500);
        }
    }

    if (cardsInPlay.length === cards.length) {
        window.setTimeout(() => {
            alert("You have found all the matches!");
        }, 500);
    }
}

function flipCard() {

    let cardId = this.getAttribute("data-id");

    this.setAttribute("src", cards[cardId].cardImage);

    let current_card = {
        name: cards[cardId].name,
        id: cardId
    }

    cardsInPlay.push(current_card);

    checkForMatch();
}

function flipCardsBack() {

    const topCardId = cardsInPlay[cardsInPlay.length-1].id;
    const secondTopCardId = cardsInPlay[cardsInPlay.length-2].id;
    
    const topCard = document.getElementById("card-"+topCardId);
    const secondTopCard = document.getElementById("card-"+secondTopCardId);
    
    topCard.setAttribute("src", "images/back.png");
    secondTopCard.setAttribute("src", "images/back.png");

    cardsInPlay.pop();
    cardsInPlay.pop();

}

setUpGame();
