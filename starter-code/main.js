/*

console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";


if (cardTwo === cardFour) {
    alert("You found a match!");
}
else {
    alert("Sorry try again.")
    };
*/

/*
for(i=0; i<=(numCards-1); i++) {
    var newCard = document.createElement('div');
    newCard.classname = "card";
    document.getElementsByClassName('board').appendChild(newCard);
    };
*/


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

var createBoard = function(){
    for (var i = 0; i< cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = "card";
    cardElement.setAttribute('data-card', cards[i]);
    gameBoard.appendChild(cardElement);
    // when a card is clicked the function isTwoCards will be executed
    cardElement.addEventListener('click', isTwoCards)
    };
};

//checks to see if the cards match
var isMatch = function(matchCard){
    if (matchCard[0] === matchCard[1]) {
    alert("You found a match!");
    }
else {
    alert("Sorry try again.")
    };
};

// checks to see if there are cards in play
// cards clicked on are in play and get pushed data values
// cards in play get images
// if two cards in play, check for a match
// and clear cards in play array for next try

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png'>"; 
	} else {
		this.innerHTML = "<img src='queen.png'>"; 
	}
  
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [ ];
  }

}

createBoard();