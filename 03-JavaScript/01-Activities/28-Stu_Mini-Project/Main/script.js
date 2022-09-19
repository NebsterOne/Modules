var wins = 0;
var ties = 0;
<<<<<<< HEAD
var loses = 0;


var options = ['R', 'P', 'S'];

function playGame() {
    var userChoice = window.prompt("Enter R, P or S");

    if (!userChoice) return;

    var index = Math.floor(Math.random() * 3);
    var computerChoice = options[index];

    window.alert("The Computer chose " + computerChoice);
    
    if (userChoice === computerChoice) {
        ties++;
        window.alert("It's a tie!");
    } else if (
        (userChoice === 'R' && computerChoice ==='S') ||
        (userChoice === 'P' && computerChoice ==='R') ||
        (userChoice === 'S' && computerChoice ==='P') 
    ) {
    wins ++;
    window.alert("You win");
    } else { 
        loses++;
        window.alert("You lost");
    } 
    window.alert("Stats:\nWins: " + wins + "\nLosses: " + loses + "\nTies: " + ties);

    var playAgain = window.confirm("Play again?");
    if(playAgain){
        playGame();
    }
}
playGame();




  /* 



  */
=======
var losses = 0;

// Array of options for computer to pick from
var options = ["R", "P", "S"];

var playGame = function() {
  // Ask user for their choice
  var userChoice = window.prompt("Enter R, P, or S:");

  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  }

  // Convert to uppercase to make comparisons easier
  userChoice = userChoice.toUpperCase();

  // Get random index from array of options
  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  window.alert("The computer chose " + computerChoice);

  // If choices are the same, it's a tie
  if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");

  // Check every win condition for the player
  } else if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You win!");

  // If above conditions failed, assume player lost
  } else {
    losses++;
    window.alert("You lost!");
  }

  // Print stats with line breaks
  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  // Ask user to play again
  var playAgain = window.confirm("Play again?");

  // If user pressed OK, run the function again
  if (playAgain) {
    playGame();
  }
};

// Run the game for the first time
playGame();
>>>>>>> f01bf229670149e897f46730667686e38849942f
