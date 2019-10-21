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
let userRightGuess = false;
let userRightGuess = 0;
let left = 9;
let wins = 0;
let losses = 0;


//random word

function random() {
    let random = Math.floor(Math.random() * words.length);
    word = words[random]
    img.src = images[random]
}

//show blank start
function showBlank() {
    for (i = 0; i < word.length; i++) {
        answerArray[i] = "_"
    }
    $("guess").innerHTML = answerArray.join(" ")
}
//guesses left
function guessesLeft() {
    $("left").innerHTML = left
}
//wins
function winsScore() {
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
    rightGuess = false;
    guessesleft()
    random()
    showBlank()
}

//call inital function 
initalGame()
winsScore()
lossesScore()

//check letter 
function showLetter (char, str) {
    for (let j = 0; j < str.length; j++) {
        if (char === str[j]) {
            rightGuess = true
            answerArray.splice(j,1,char)
            userRightGuess++
        }
    }
    $("guess").innerHTML = answerArray.join(" ")
}
//check length
let matchLength = function() {
    if (word.length === userRightGuess) return true 
    else return false
}

//user guess
document.onkeyup = function(event) {
    userGuess = event.key.toLowerCase();

    showLetter (userGuess, word)

    if (rightGuess) {
        rightGuess = false
        if (matchLength()) {
            let audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3');
            audio.play()
            img.setAttribute("id", "winImage")
            parent.appendChild(img)
            wins++
            winsScore()
            setTimeout(initalGame, 2000)

        } else {
            left--
            if (left< 1) {
                let audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3');
                audio.play()
                initalGame()
                losses++
                lossesScore()
            } else {
                let audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/bad.mp3');
                audio.play()
                wrongGuess(userGuess)
                guessesLeft()
            
            }
        }
    }
}