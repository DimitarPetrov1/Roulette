const numbers = document.querySelectorAll(".number");
const buttons = document.querySelectorAll(".btn");
let displayWinningNumber = document.getElementById("winningNumber");
let winningNumbers = [];

const selectSingleNumber = (e) => {
  // click functions to add selected class
  // get the target number + the target element
  // if the number is selected : push the target number in Array, add Selected class, and display result
  // if the number is deselected : remove Selected class, find index of target number, using splice delete it from Array, then display the selected numbers again
  let targetEl = e.target;
  if (!targetEl.classList.contains("number-single-selected")) {
    targetEl.classList.add("number-single-selected");
  } else {
    targetEl.classList.remove("number-single-selected");
  }
};
const selectMultipleNumbers = (e) => {
  // Class number-selected is only to find the winning number
  let eventId = e.target.getAttribute("id"); // The ID of the clicked button
  let eventTarget = e.target.id; // The target HTML element to add COINS

  // Fix later
  const handleCoins = (target, start, end) => {
    // create elements
    const coin = document.createElement("div");
    coin.classList.add("coin");
    const removeCoinsBtn = document.createElement("div");
    removeCoinsBtn.classList.add("remove-coins-btn");
    // Add elements to target
    target.appendChild(coin);
    target.appendChild(removeCoinsBtn);
    let coins = document.querySelectorAll(".coin");
    coin.textContent = coins.length;

    removeCoinsBtn.addEventListener("click", () => {
      target.removeChild(coin);

      for (let j = start; j < end; j++) {
        numbers[j].classList.remove("number-selected");
        removeCoinsBtn.remove();
      }
    });
  };

  if (eventId === "firstTwelveBtn") {
    for (let i = 1; i < 13; i++) {
      numbers[i].classList.add("number-selected");
    }
    handleCoins(e.target, 1, 13);
  }
  if (eventId === "secondTwelveBtn") {
    for (let i = 13; i < 25; i++) {
      numbers[i].classList.add("number-selected");
    }
    handleCoins(e.target, 13, 25);
  }
  if (eventId === "thirdTwelveBtn") {
    for (let i = 25; i < 36; i++) {
      numbers[i].classList.add("number-selected");
    }
    handleCoins(e.target, 25, 36);
  }
  if (eventId === "firstHalfBtn") {
    for (let i = 1; i < 19; i++) {
      numbers[i].classList.add("number-selected");
    }
    handleCoins(e.target, 1, 19);
  }
  if (eventId === "secondHalfBtn") {
    for (let i = 19; i < 37; i++) {
      numbers[i].classList.add("number-selected");
    }
    handleCoins(e.target, 19, 37);
  }
  if (eventId === "evenBtn") {
    for (let i = 1; i < 37; i++) {
      if (i % 2 === 0) {
        numbers[i].classList.add("number-selected");
      }
    }
    // handleCoins(e.target, 1, 2);
  }
};
// numbers[winningNumber].classList.contains("number-selected") ||
// numbers[winningNumber].classList.contains("number-single-selected")
const startGame = () => {
  setInterval(() => {
    let winningNumber = Math.floor(Math.random() * 37);
    // If we have selected a number ...
    for (let i = 0; i < numbers.length; i++) {
      if (
        numbers[winningNumber].classList.contains("number-selected") ||
        numbers[winningNumber].classList.contains("number-single-selected")
      ) {
        console.log("You win from " + winningNumber);
      } else {
        console.log("Winning number is: " + winningNumber);
      }
    }
    // ... else don't do anything
    winningNumbers.unshift(winningNumber);
    displayWinningNumber.textContent = "Winning number is: " + winningNumbers;
  }, 3000);
};

const hoverIn = (e) => {
  let eventTarget = e.target.id;
  if (eventTarget === "firstTwelveBtn") {
    for (let i = 1; i < 13; i++) {
      numbers[i].classList.add("number-selected-hover");
    }
  }
};
const hoverOut = (e) => {
  let eventTarget = e.target.id;
  if (eventTarget === "firstTwelveBtn") {
    for (let i = 1; i < 13; i++) {
      numbers[i].classList.remove("number-selected-hover");
    }
  }
};

document.getElementById("startGameBtn").addEventListener("click", startGame);
numbers.forEach((number) => {
  number.addEventListener("click", selectSingleNumber);
});
buttons.forEach((button) => {
  button.addEventListener("click", selectMultipleNumbers);
  button.addEventListener("mouseenter", hoverIn);
  button.addEventListener("mouseleave", hoverOut);
});
