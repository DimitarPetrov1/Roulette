const numbers = document.querySelectorAll(".number");
let winningNumbers = [];
let selectedNumbers = [];
const displayWinningNumber = document.getElementById("winningNumber");
const displaySelectedNumbers = document.getElementById("selectedNumbers");
const startGameBtn = document.getElementById("startGameBtn");
// Alt buttons
const firstTwelveBtn = document.getElementById("firstTwelveBtn");
const secondTwelveBtn = document.getElementById("secondTwelveBtn");
const thirdTwelveBtn = document.getElementById("thirdTwelveBtn");
//
const firstHalfBtn = document.getElementById("firstHalfBtn");
const secondHalfBtn = document.getElementById("secondHalfBtn");

//
const firstTwelve = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const secondTwelve = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const thirdTwelve = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
//
const firstHalf = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18
];
const secondHalf = [
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36
];

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

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[winningNumber].classList.contains("number-selected")) {
        console.log("You win from " + winningNumber);
      } else {
        console.log("You loose");
      }
    }
    winningNumbers.unshift(winningNumber);
    displayWinningNumber.textContent = "Winning number is: " + winningNumbers;
    // ... else don't do anything
  } else {
    console.log("Please select a number first");
  }
};
// 1st 12
const firstTwelveSelect = () => {
  let index = selectedNumbers.indexOf(firstTwelve);
  // first add the classes where needed
  for (let i = 1; i < 13; i++) {
    // get numbers displayed on screen (red & black)
    if (!numbers[i].classList.contains("number-selected")) {
      numbers[i].classList.add("number-selected");
    } else {
      numbers[i].classList.remove("number-selected");
    }
  }
  // second add/remove items from array
  if (!selectedNumbers.includes(firstTwelve)) {
    selectedNumbers.unshift(firstTwelve); // displays on screen
  } else {
    selectedNumbers.splice(index, 1);
  }
  displaySelectedNumbers.textContent = "You have selected: " + selectedNumbers;
};
// 2nd 12
const secondTwelveSelect = () => {
  let index = selectedNumbers.indexOf(secondTwelve);
  // first add the classes where needed
  for (let i = 13; i < 25; i++) {
    // get numbers displayed on screen (red & black)
    if (!numbers[i].classList.contains("number-selected")) {
      numbers[i].classList.add("number-selected");
    } else {
      numbers[i].classList.remove("number-selected");
    }
  }
  // second add/remove items from array
  if (!selectedNumbers.includes(secondTwelve)) {
    selectedNumbers.unshift(secondTwelve); // displays on screen
  } else {
    selectedNumbers.splice(index, 1);
  }
  displaySelectedNumbers.textContent = "You have selected: " + selectedNumbers;
};
// 3rd 12
const thirdTwelveSelect = () => {
  let index = selectedNumbers.indexOf(thirdTwelve);
  // first add the classes where needed
  for (let i = 25; i < 37; i++) {
    // get numbers displayed on screen (red & black)
    if (!numbers[i].classList.contains("number-selected")) {
      numbers[i].classList.add("number-selected");
    } else {
      numbers[i].classList.remove("number-selected");
    }
  }
  // second add/remove items from array
  if (!selectedNumbers.includes(thirdTwelve)) {
    selectedNumbers.unshift(thirdTwelve); // displays on screen
  } else {
    selectedNumbers.splice(index, 1);
  }
  displaySelectedNumbers.textContent = "You have selected: " + selectedNumbers;
};
// first half
const firstHalfBtnSelect = () => {
  let index = selectedNumbers.indexOf(firstHalf);
  for (let i = 1; i < 19; i++) {
    if (!numbers[i].classList.contains("number-selected")) {
      numbers[i].classList.add("number-selected");
    } else {
      numbers[i].classList.remove("number-selected");
    }
  }
  // second add/remove items from array
  if (!selectedNumbers.includes(firstHalf)) {
    selectedNumbers.unshift(firstHalf); // displays on screen
  } else {
    selectedNumbers.splice(index, 1);
  }
  displaySelectedNumbers.textContent = "You have selected: " + selectedNumbers;
};
// second half
const secondHalfBtnSelect = () => {
  let index = selectedNumbers.indexOf(secondHalf);
  for (let i = 19; i < 37; i++) {
    if (!numbers[i].classList.contains("number-selected")) {
      numbers[i].classList.add("number-selected");
    } else {
      numbers[i].classList.remove("number-selected");
    }
  }
  // second add/remove items from array
  if (!selectedNumbers.includes(secondHalf)) {
    selectedNumbers.unshift(secondHalf); // displays on screen
  } else {
    selectedNumbers.splice(index, 1);
  }
  displaySelectedNumbers.textContent = "You have selected: " + selectedNumbers;
};

// Select numbers function for each number
numbers.forEach((number) => number.addEventListener("click", selectNumber));
// Start game function
startGameBtn.addEventListener("click", startGame);
firstTwelveBtn.addEventListener("click", firstTwelveSelect);
secondTwelveBtn.addEventListener("click", secondTwelveSelect);
thirdTwelveBtn.addEventListener("click", thirdTwelveSelect);
//
firstHalfBtn.addEventListener("click", firstHalfBtnSelect);
secondHalfBtn.addEventListener("click", secondHalfBtnSelect);
