const numbers = document.querySelectorAll(".number");
const buttons = document.querySelectorAll(".btn");
let displayWinningNumber = document.getElementById("winningNumber");
let winningNumbers = [];

const coin = document.createElement("div");
coin.classList.add("coin");
coin.textContent = "$";
const removeCoinsBtn = document.createElement("div");
removeCoinsBtn.classList.add("remove-coins-btn");
removeCoinsBtn.textContent = "X";
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
  let eventId = e.target.getAttribute("id"); // The ID of the clicked button
  let eventTarget = e.target; // The target HTML element to add COINS
  if (eventId === "firstTwelveBtn") {
    for (let i = 1; i < 13; i++) {
      if (!numbers[i].classList.contains("number-selected")) {
        numbers[i].classList.add("number-selected");
      }
    }
    eventTarget.appendChild(coin.cloneNode(true));
    eventTarget.appendChild(removeCoinsBtn);
    let coins = document.querySelectorAll(".coin");

    coins.forEach((coin) => {
      coin.style.left += coins.length + "1px";
    });
    removeCoinsBtn.addEventListener("click", () => {
      for (let i = 0; i < coins.length; i++) {
        coins[i].remove();

        for (let i = 0; i < 13; i++) {
          numbers[i].classList.remove("number-selected");
        }
      }
      if (eventTarget.contains(removeCoinsBtn)) {
        removeCoinsBtn.remove();
      }
    });
  }
};

const buttonsHover = () => {
  numbers.forEach((number) => {
    if (!number.classList.contains("number-selected")) {
      number.classList.add("number-selected");
    } else return null;
  });
};

const buttonsHoverEnd = () => {
  numbers.forEach((number) => {
    if (number.classList.contains("number-selected")) {
      number.classList.remove("number-selected");
    } else return null;
  });
};

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

document.getElementById("startGameBtn").addEventListener("click", startGame);
numbers.forEach((number) => {
  number.addEventListener("click", selectSingleNumber);
});
buttons.forEach((button) => {
  button.addEventListener("click", selectMultipleNumbers);
  button.addEventListener("mouseover", buttonsHover);
  button.addEventListener("mouseleave", buttonsHoverEnd);
});
