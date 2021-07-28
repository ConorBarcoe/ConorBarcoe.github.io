"use strict";

//Creates random number
let randNum = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

//shortcut functions
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
const bgColour = function(colour) {
    document.querySelector('body').style.background = colour;
}
const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
}

//On button click
document.querySelector('.guessBox').addEventListener("click", function(){
    let guess = Number(document.querySelector('.guessTxt').value);
    console.log(Number(guess));
    
    //When guess is false
    if(!guess) {
        displayMessage('❌ Invalid number!');

        //When guess is correct
    } else if(guess === randNum) {
        displayMessage('🎉 Correct Number!');

        bgColour('linear-gradient(to right, #646a00, #00aa5b)');

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highScore').textContent = highScore;
        }

        //When guess is wrong
    } else if(guess !== randNum) {
        if(score > 1) {
            displayMessage(guess > randNum ? '🔺 Too high!' : '🔻 Too low!');
            score--;
            displayScore(score);
        } else {
            bgColour('linear-gradient(to right, #6a0000, #aa8000)')
            displayMessage('💥 You lost the game!');
            score--;
            displayScore(score);
        }
    }
})

//Again button press
document.querySelector('.again').addEventListener("click", function(){
    //New rand number
    randNum = Math.trunc(Math.random() * 20) + 1;
    console.log(randNum);

    //Reset input field
    document.querySelector('.guessTxt').value = '';

    //Reset text
    displayMessage('🟢 Start Guessing...');

    //Reset score
    score = 10;
    displayScore(score);

    //Reset BG colour
    bgColour('linear-gradient(to right, #00326a, #00aa8c)');
})