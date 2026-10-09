const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playgame(playChoice){

const computerChoice = choices[Math.floor(Math.random() * 3)];

const getResult = (PlayerChoice, computerChoice) =>
playerChoice === computerChoice ? "It's a tie 😕" :    
(playerChoice === "Rock" && computerChoice === "Scissors") ||
(playerChoice === "Paper" && computerChoice === "Rock") ||
(playerChoice === "Scissors" && computerChoice === "Paper") 
? "You win! 😎;" 
: "You lose! 😢";

const result = getResult(playChoice, computerChoice);
resultDisplay.textContent = result;
playerDisplay.textContent = `Player: ${playChoice}`;
computerDisplay.textContent = `Computer: ${computerChoice}`;

resultDisplay.style.color = result === "You win! 😎;" 
? "green" 
: result === "You lose! 😢" 
? "red" 
: "black";
resultDisplay.style.border = "2px sold transparent";
resultDisplay.style.color = "White";

}