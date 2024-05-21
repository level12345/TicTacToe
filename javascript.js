// Set up the game board as an array
// let board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

// // Define a function to print the game board
// function printBoard() {
//   console.log(`${board[0]} | ${board[1]} | ${board[2]}`);
//   console.log(`${board[3]} | ${board[4]} | ${board[5]}`);
//   console.log(`${board[6]} | ${board[7]} | ${board[8]}`);
// }

// function checkGameOver(currentPlayer) {
//   if (
//     (board[0] === board[1] && board[1] === board[2] && board[0] !== "-") ||
//     (board[3] === board[4] && board[4] === board[5] && board[3] !== "-") ||
//     (board[6] === board[7] && board[7] === board[8] && board[6] !== "-") ||
//     (board[0] === board[3] && board[3] === board[6] && board[0] !== "-") ||
//     (board[1] === board[4] && board[4] === board[7] && board[1] !== "-") ||
//     (board[2] === board[5] && board[5] === board[8] && board[2] !== "-") ||
//     (board[0] === board[4] && board[4] === board[8] && board[0] !== "-") ||
//     (board[2] === board[4] && board[4] === board[6] && board[2] !== "-")
//   ) {
//     return "win";
//   } else if (!board.includes("-")) {
//     return "tie";
//   } else {
//     return "play";
//   }
// }

// function takeTurn(player) {
//   console.log(`${player}'s turn.`);
//   let position = prompt("Choose a position from 1-9:");
//   position -= 1;
//   while (position < 0 || position > 8 || board[position] !== "-") {
//     position = prompt(
//       "Invalid input or position already taken. Choose a different position:"
//     );
//     position -= 1;
//   }
//   board[position] = player;
//   printBoard();
// }

// function playGame() {
//   let play = prompt("Do you want to start a game?");
//   if (play === "yes") {
//     printBoard();
//     let currentPlayer = "X";
//     let gameOver = false;
//     while (!gameOver) {
//       takeTurn(currentPlayer);
//       let gameResult = checkGameOver();
//       if (gameResult === "win") {
//         console.log(`${currentPlayer} wins!`);
//         gameOver = true;
//       } else if (gameResult === "tie") {
//         console.log("Tie Game");
//         gameOver = true;
//       } else {
//         currentPlayer = currentPlayer === "X" ? "O" : "X";
//       }
//     }
//   } else {
//     return;
//   }
// }

// function main() {}

// main();

// playGame();

let currentPlayer = "O";
let gameOver = false;
let currentValue;
let i = 0;

const gameboard = document.getElementById("gameboard");
gameboard.addEventListener("click", (e) => {
  if (e.target.classList.contains("grid-item")) {
    if (e.target.hasChildNodes()) {
      alert("Already clicked!");
    } else {
      if (currentPlayer === "X") {
        currentValue = e.target.id;
        square_array.push(currentValue);
        player_selection.push(currentPlayer);
        test_array[currentValue] = currentPlayer;
        X_creator(e.target);
        isGameover();
        currentPlayer = "O";
      } else {
        currentValue = e.target.id;
        square_array.push(currentValue);
        player_selection.push(currentPlayer);
        test_array[currentValue] = currentPlayer;
        O_creator(e.target);
        isGameover();
        currentPlayer = "X";
      }
      i++;
    }
  }
});

function isGameover() {
  if (
    (test_array.square0 === test_array.square1 &&
      test_array.square1 === test_array.square2 &&
      test_array.square0 !== NaN) ||
    (test_array.square3 === test_array.square4 &&
      test_array.square4 === test_array.square5 &&
      test_array.square3 !== NaN) ||
    (test_array.square6 === test_array.square7 &&
      test_array.square7 === test_array.square8 &&
      test_array.square6 !== NaN) ||
    (test_array.square0 === test_array.square3 &&
      test_array.square3 === test_array.square6 &&
      test_array.square0 !== NaN) ||
    (test_array.square1 === test_array.square4 &&
      test_array.square4 === test_array.square7 &&
      test_array.square1 !== NaN) ||
    (test_array.square2 === test_array.square5 &&
      test_array.square5 === test_array.square8 &&
      test_array.square2 !== NaN) ||
    (test_array.square0 === test_array.square4 &&
      test_array.square4 === test_array.square8 &&
      test_array.square0 !== NaN) ||
    (test_array.square2 === test_array.square4 &&
      test_array.square4 === test_array.square6 &&
      test_array.square2 !== NaN)
  )
    console.log("win");
  return "win";
}

// function checkGameOver() {
//   if (
//     (player_selection[2] === player_selection[4] &&
//       player_selection[4] === player_selection[6] &&
//       player_selection[2] !== "-")
//   ) {
//     console.log("win");
//     return "win";
//   } else if (!player_selection.includes("-")) {
//     console.log("tie");
//     return "tie";
//   } else {
//     console.log("play");
//     return "play";
//   }
// }

function winner_loser() {}

let test_array = {
  sqaure1: 0,
  square1: 1,
  square2: 2,
  square3: 3,
  square4: 4,
  square5: 5,
  square6: 6,
  square7: 7,
  square8: 8,
};
let square_array = [];
// let player_selection = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
let player_selection = [];

function handleButtonClick(squareID) {
  console.log("Square with ID " + squareID + " was clicked");
}

function O_creator(target) {
  const newDiv = document.createElement("div");
  newDiv.textContent = "O"; // Using timestamp for uniqueness
  newDiv.id = "uniqueDiv" + new Date().getTime(); // Unique ID
  target.appendChild(newDiv);
}

function X_creator(target) {
  const newDiv = document.createElement("div");
  newDiv.textContent = "X"; // Using timestamp for uniqueness
  newDiv.id = "uniqueDiv" + new Date().getTime(); // Unique ID
  target.appendChild(newDiv);
}
