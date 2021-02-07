const numbers = document.querySelectorAll(".number");
let selectedNumbers = [];
const displayWinningNumber = document.getElementById("winningNumber");
const displaySelectedNumbers = document.getElementById("selectedNumbers");
const startGameBtn = document.getElementById("startGameBtn");
// Alt buttons
const firstTwelveBtn = document.getElementById("firstTwelveBtn");

const selectNumber = (e) => {
  // click functions to add selected class
  // get the target number + the target element
  // if the number is selected : push the target number in Array, add Selected class, and display result
  // if the number is deselected : remove Selected class, find index of target number, using splice delete it from Array, then display the selected numbers again
  let targetNumber = Number(e.target.textContent);
  let targetEl = e.target;
  if (!targetEl.classList.contains("number-selected")) {
    selectedNumbers.push(targetNumber);
    targetEl.classList.add("number-selected");
    displaySelectedNumbers.textContent =
      "You have selected: " + selectedNumbers;
  } else {
    targetEl.classList.remove("number-selected");
    let index = selectedNumbers.indexOf(targetNumber);
    selectedNumbers.splice(index, 1);
    displaySelectedNumbers.textContent =
      "You have selected: " + selectedNumbers;
  }
};

const startGame = () => {
  // If we have selected a number ...
  if (selectedNumbers.length !== 0) {
    let winningNumber = Math.floor(Math.random() * 37);

    if (selectedNumbers.includes(winningNumber)) {
      console.log("You win with " + winningNumber);
    } else {
      console.log("You loose !!!");
    }

    displayWinningNumber.textContent = winningNumber;
    // ... else don't do anything
  } else {
    console.log("Please select a number first");
  }
};

const firstTwelveSelect = () => {
  const item = "1-12";
  let index = selectedNumbers.indexOf(item);

  if (!selectedNumbers.includes(item)) {
    selectedNumbers.unshift(item);
  } else {
    selectedNumbers.splice(index, 1);
  }

  console.log(index);
  console.log(selectedNumbers);

  // let thisBatchNumbers;

  displaySelectedNumbers.textContent = "You have selected: " + selectedNumbers;
};

// Select numbers function for each number
numbers.forEach((number) => number.addEventListener("click", selectNumber));
// Start game function
startGameBtn.addEventListener("click", startGame);
firstTwelveBtn.addEventListener("click", firstTwelveSelect);
