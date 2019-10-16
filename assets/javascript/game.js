//shorten the code 
let $ = function (id) {
    return document.getElementById(id)
}

//global variable
const words = ["Dude", "Donnie", "Walter", "Bunny", "Bowling", "Lebowski", "Rug", "Abide"];
const images = ["assets/images/IMG_2272.JPG"]
let word;
const img = document.createElemnet("img")
const parent = $("img")
let answerArray = [];
let userGuess;
let rightGuess = false;
let userRightGuess = 0;
let left = 9;
let wins = 0;
let losses = 0;


//random word

function random() {
    let random = Math.floor(Math.random() + words.length);
    word = words [random]
    img.src = images [random]
}

//show blank start
function showBlank() {
    for (i =0; i < word.length; i++) {
        answerArray[i] = "_"
    }
    $("guess").innerHTML = answerArray.join(" ")
}
//guesses left
function guessesleft() {
    $("left").innerHTML = wins 
}
//wins
functions winsScore() {
    $("wins").innerHTML = wins 
}
//losses 
function lossesScore() {
    $("losses").innerHTML = losses 
}
//show wrong guess
function wrongGuess(char) {
    $("wrong").innerHTML += char + ", "
}
//resent function
function initalGame() {
    if ($("winImage")) {
        $("winImage").remove()
    }
    
    left = 9;
    answerArray = [];
    $("wrong").innerHTML = "";
    userRightGuess = 0
    RightGuess = false;
    guessesleft()
    random()
    showBlank()
}

//call inital function 
initalGame()
winsScore()
lossesScore()

//check letter 
function showLetter (char, str) 