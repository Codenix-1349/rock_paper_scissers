const player = (process.argv[2] || "").toLowerCase();
const moves = ["rock", "paper", "scissors"];

if (!moves.includes(player)) {
  console.log("Syntax: node rps.js rock|paper|scissors");
  process.exit(1);
}

const computer = moves[Math.floor(Math.random() * moves.length)];

let result;
if (player === computer) result = "draw";
else if (
  (player === "rock" && computer === "scissors") ||
  (player === "paper" && computer === "rock") ||
  (player === "scissors" && computer === "paper")
)
  result = "Glückwunsch, du hast gewonnen!";
else result = "Verloren!Probier es nochmal.";

console.log(`Deine Wahl: ${player}`);
console.log(`Wahl des Computers: ${computer}`);
console.log(`Ergebnis: ${result}`);
