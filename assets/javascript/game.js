var name = prompt("whats your name?");
console.log("hello" + name);

//create an array of words
var words = ["The Dude", "Walter", "Donnie", "Jackie Treehorn", "the ringer", "Caucasian", "Rug", "Pomeranian", "Nihilist", "Bowling", "Bunny", "Lebowski", "The Jesus", "Maude"];

// pick a random word from the words array
var word = words[ Math.floor(math.random() * words.length)];
// set up the answerArray to show how many letters being used
var answerArray =[];
for (var i = 0; i <word.length; i++){
    answerArray [i] = "_";
}
//create a variable to hold the number of remaining letters 
var remaningLetters = word.length;

// ******* main game loop************
while (remainingLetters > 0){
    //showthe player their progress 
    alert(answerArray.join(" "));

}
