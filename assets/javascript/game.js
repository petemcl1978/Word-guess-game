window.onload = function(){
    var alphabet =['a','b', 'c', 'd', 'e','f', 'g','h','i', 'j', 'k',
'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var word;
var guess;
var guesses =[];
var lives; 
var counter;
var space;

//get elements
var showLives = document.getElementById("mylives");
//create alphabet ul 
var buttons= function() {
    myButtons= document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i =0; i < alphabet.length; i++){
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        List.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
    }
}
}
//create guesses
result = function() {
    wordHolder = document.getElementById('hold');
correct= document.createElement('ul');
    for (var i =0; i < word.length; i++){
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i]=== "-"){
            guess.innerHTML = "-";
            space = 1;
        } else {
            guess.innerHTML = "-";
        }
        guesses.push(guess);
        wordHolder.appendChild(corret);
    }
}
//show lives
comments = function () {
    showlives.innerHTML = "you have " +
    lives + "lives";
    if (lives < 1) {
        showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length;i++){
        if(counter + space ==== guesses.length){
            show.lives.innerHTML = "That Really Ties the Room Together";
        }
    }
}
//onClick Function 


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
    modal (answerArray.join(" "));
    // Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
    // Exit the game loop
    break;
    } else if (guess.length !== 1) {
    modal ("Please enter a single letter.");
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
