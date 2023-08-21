const gameContainer = document.getElementById("game");
// declare needed card variables
// cards start with no assigned value 
let firstCard = null;
let secondCard = null;
// start clicked cards at zero to add to later
let clickedCard = 0;
let notClicking = false;

// color array that shuffle function uses
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
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.
  target);

  //target the card clicked
  let clickedCard = event.target;
  // add background color using classlist[0] because it shuffles every new game
  clickedCard.style.backgroundColor = clickedCard.classList[0];

  // if first or second card are clicked
  if (!firstCard || !secondCard) {

    // add clickedCard classlist to card clicked
    clickedCard.classList.add("clickedCard");
    //first card equals first card or clicked card
    firstCard = firstCard || clickedCard;
    // second card clicked is assigned to either first card or clicked card
    secondCard = clickedCard === firstCard ? null : clickedCard;
  }
  //if two cards are clicked
  if (firstCard && secondCard) {
    notClicking = true;
    // debugger
    let colorOne = firstCard.className;
    let colorTwo = secondCard.className;
    // if both clicked cards are same classname/color
    if (colorOne === colorTwo) {
      //count clicked cards to number matched
      clickedCard += 2;
      // make matched cards unclickable
      firstCard.removeEventListener("click", handleCardClick);
      secondCard.removeEventListener("click", handleCardClick);
      //return unmatched cards to original state
      firstCard = null;
      secondCard = null;
      notClicking = false;
    } else {
      //if colors not equal, flip back to no color after .6 seconds
      setTimeout(function() {
        // set 1st card back to no color
        firstCard.style.backgroundColor = "";
        //set second card back to no color
        secondCard.style.backgroundColor = "";
        //remove clickedCard classlist to revert back to unclicked
        firstCard.classList.remove("clickedCard");
        secondCard.classList.remove("clickedCard");
        //return all unmatched cards to original state
        firstCard = null;
        secondCard = null;
        notClicking = false;
      }, 600);
    }
  }


 if (clickedCard === COLORS.length){
  alert ("Congrats!");
 }

}

// when the DOM loads
createDivsForColors(shuffledColors);
