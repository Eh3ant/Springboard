const gameContainer = document.getElementById("game");
const starBtn = document.querySelector('#start-btn')

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!

let firstCard = null;
let secondCard = null;
let isProcessing = false; // Flag to prevent multiple clicks while processing

function handleCardClick(event) {
  // Ignore clicks if already processing or if two cards are already flipped
  if (isProcessing || (firstCard !== null && secondCard !== null)) {
    return;
  }

  const clickedCard = event.target;

  // Ignore clicks on already matched cards
  if (clickedCard.classList.contains('matched') || clickedCard === firstCard) {
    return;
  }

  // Change background color to the color of the class
  clickedCard.style.backgroundColor = clickedCard.classList[0];

  if (firstCard === null) {
    // Set first card if no card is flipped
    firstCard = clickedCard;
  } else {
    // Set second card if first card is already flipped
    secondCard = clickedCard;

    // Check for match
    if (firstCard.classList[0] === secondCard.classList[0]) {
      // If match, add 'matched' class to both cards
      firstCard.classList.add('matched');
      secondCard.classList.add('matched');

      firstCard = null;
      secondCard = null;
      //resetCards();
    } else {
      // If no match, reset cards after 1 second
      isProcessing = true;
      setTimeout(resetCards, 1000);
    }
  }
}

function resetCards() {
  // Reset background color of flipped cards
  if (!firstCard.classList.contains('matched')) {
    firstCard.style.backgroundColor = "";
  }
  if (!secondCard.classList.contains('matched')) {
    secondCard.style.backgroundColor = "";
  }

  // Reset firstCard and secondCard
  firstCard = null;
  secondCard = null;

  // Reset processing flag
  isProcessing = false;
}



// when the DOM loads
createDivsForColors(shuffledColors);

