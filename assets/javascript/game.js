// Create an array of words
var words = [
    "lebowski",
    "jeffery",
    "rug",
    "bunny",
    "bowling",
    "donnie",
    "walter",
    "caucasian",
    "jackie treehorn",
    "pomeranian",
    "nihilism",
    "creedence",
    "maude",
    "ringer",
    "the stranger",
    "beeper",
    "toe",
    "nail polish",
    "chock full o nuts",
    "cohen",
    "brief case",
    "the eagles"
    ];
    // Pick a random word
    var word = words[Math.floor(Math.random() * words.length)];
    // Set up the answer array
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    }
    var remainingLetters = word.length;
    // The game loop
    while (remainingLetters > 0) {
    // Show the player their progress
    alert (answerArray.join(" "));
    // Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
    // Exit the game loop
    break;
    } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
    } else {
    // Update the game state with the guess
    for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
    answerArray[j] = guess;
    remainingLetters--;
    }

    // The end of the game loop
    

}
    }
}
