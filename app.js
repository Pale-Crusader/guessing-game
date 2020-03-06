'use strict';

var userName = prompt('Welcome! What is your name?');
var score = 0;

function polarQuestion (inquiry, customRight, customWrong, correctAnswer, wrongAnswer) {
    /*
    The inqury is the question within the prompt.
    customRight and customWrong are customized texts for their applicable alerts.
    correctAnswer and wrongAnswer are for comparison logic (either Y or N, varies per question).
    all of these parameters are strings
    */
    var response = prompt(userName + ', please using a Y or N as an answer for yes or no: ' + inquiry);
    var response = response.toUpperCase();

    if (response === wrongAnswer) {
        alert('Sorry, ' + userName + ', that is incorrect. ' + customWrong);
        } else if (response === correctAnswer){
        alert(userName + '! That one is correct! ' + customRight);
        score = (score + 1);
        } else {
        alert("I apologize, I really need a Y or N to know if you answered correctly.");
        }
}

function numberGuessing (inquiry, correctAnswer, attempts) {
    /*
    The inqury is the question within the prompt.
    correctAnswer is for comparison math logic
    attempts is the number of guesses the user has
    inquiry is a string, the other two are numbers
    */
    for (var numberGame = 0; numberGame < attempts; numberGame++) {
        var numberGuess = prompt(inquiry);
        var numberGuess = Number(numberGuess);
        if (numberGuess < correctAnswer) {
            alert("Too Low!");
        } else if (numberGuess > correctAnswer) {
            alert("Too High!");
        } else if (numberGuess === correctAnswer) {
            alert("WOW!! " + userName + ", Amazing Guess!!!");
            score = (score + 1);
            break;
        } else {
            alert(userName + ", I am sorry. Really need a NUMERICAL number.");
        }
    }
}

function mulitpleChoiceQuestion (inquiry, multipleAnswers, attempts) {
    /*
    The inqury is the question within the prompt.
    multipleAnswers is for comparison math logic
    attempts is the number of guesses the user has
    inquiry is a string, multipleAnswers is an array, attempts is a number
    */
   loop1: for (var index = 0; index < attempts; index++) {
        var response = prompt(inquiry);
        var response = response.toLowerCase();

        loop2: for (var indexCheck = 0; indexCheck < multipleAnswers.length; indexCheck++) {
            if (response === multipleAnswers[indexCheck]) {
                alert("Ding!! That's Correct!");
                score = (score + 1);
                break loop1;
            }     
        }

        alert(userName + ', I am very sorry that isn\'t correct. Your number correct so far is: ' + score + '.');
     }
    // displayAllAnswers and the for loop below the ability to have a dynamically generated display of all correct answers.
    var displayAllAnswers = '';
    for (var displayAdd = 0; displayAdd < multipleAnswers.length; displayAdd++) {
        if (displayAdd < (multipleAnswers.length -1)) {
        displayAllAnswers = (displayAllAnswers + ' ' + multipleAnswers[displayAdd]);
        } else {
            displayAllAnswers = (displayAllAnswers + ' and ' + multipleAnswers[displayAdd] + '.');
        // Does not need to compare on (displayAdd < (multipleAnswers.length - 1))
        }
    }
    alert(userName + ', of the potential correct answers here is the list: ' +displayAllAnswers)
    console.log('What is ' + displayAllAnswers)

}




alert(userName + ", it is nice to meet you! I am Matthew and I'd like you to know more about me.");

polarQuestion('Do you think I was born in the winter?','I am a Cancer.','I was born on midsummer\'s eve.','N','Y');

polarQuestion('Do you think I am from the Pacific Northwest?','I was born at Fort Lewis and later served there.','I was born at Fort Lewis and later served there.','Y','N');

polarQuestion('Do you think I am a veteran?','Thank you for paying attention.','Is the page not loading?','Y','N');

polarQuestion('Do you think I want to be a coder?','Absolutely, that is why I attend Code Fellows.','I really do want to be a coder!','Y','N');

polarQuestion('Do you think I have older sibling(s)?','I am the eldest son.','I am the eldest son.','N','Y');

numberGuessing('As a fun number game, please guess any numerical number.', 3.82, 4);

mulitpleChoiceQuestion(
    'What are some of my favorite unusual colors?',
    ["scarlet","fuchsia","mauve","canary","magenta","crimson","orange","raspberry","robin shell","antique white"],
    6
    );

alert("I am so glad that you've had a chance to play this guessing game to learn more about me, " + userName + " and your number of correct guesses is " + score + " am looking forward to meeting you soon!.")













// var score = 0;
// var userName = prompt('Welcome! What is your name?');

// alert(userName + ", it is nice to meet you! I am Matthew and I'd like you to know more about me.");

// var season = prompt(userName + ", please using a Y or N as an answer for yes or no: Do you think I was born in the winter?");
// // console.log("Displaying if season letter is capital before toUpperCase: " + season);
// var season = season.toUpperCase();
// // console.log("Displaying if season letter is capital after toUpperCase: " + season);
// if (season == 'Y') {
//     alert("Sorry, " + userName + ", that is not correct, I was born on midsummer's eve.");
//     }else if (season == 'N'){
//     alert(userName + "! Awesome Correct?");
//     var score = (score + 1);
//     }else {
//     alert("I apologize, I really need a Y or N to know if you answered correctly.")
//     }


// var origin = prompt("Still with a Y or N as an answer for yes or no: " + userName + ", do you think I am from the Pacific Northwest?");
// // console.log("Displaying if origin letter is capital before toUpperCase: " + origin);
// var origin = origin.toUpperCase();
// // console.log("Displaying if origin letter is capital after toUpperCase: " + origin);
// if (origin == 'N') {
//     alert("Sorry, " + userName + ", that is not correct. I was born at Fort Lewis and later served there");
//     }else if (origin == 'Y'){
//     alert(userName + "! Awesome Correct?");
//     var score = (score + 1);
//     }else {
//     alert(username + ", I apologize, I really need a Y or N to know if you answered correctly.")
//     }

// var military = prompt("Still with a Y or N as an answer for yes or no: Do you think I am a veteran?");
// // console.log("Displaying if military letter is capital before toUpperCase: " + military);
// var military = military.toUpperCase();
// // console.log("Displaying if military letter is capital after toUpperCase: " + military);
// if (military == 'N') {
//     alert(userName + ", I am sorry that is not correct. Is the page not loading?");
//     }else if (military == 'Y'){
//     alert("You are awesome and correct! Thank you " + userName + " for paying attention.");
//     var score = (score + 1);
//     }else {
//     alert("I am so sorry, I really need a Y or N to know if you answered correctly.")
//     }

// var goals = prompt("Still with a Y or N as an answer for yes or no: Do you think I want to be a coder?");
// // console.log("Displaying if goal letter is capital before toUpperCase: " + goals);
// var goals = goals.toUpperCase();
// // console.log("Displaying if goal letter is capital after toUpperCase: " + goals);
// if (goals == 'N') {
//     alert(userName + ", that is not correct. I was born at Fort Lewis and later served there");
//     }else if (goals == 'Y'){
//     alert("You are awesome and correct! Thank you " + userName + " for paying attention.");
//     var score = (score + 1);
//     }else {
//     alert("I am so sorry, I really need a Y or N to know if you answered correctly.")
//     }

// var eldest = prompt("Still with a Y or N as an answer for yes or no: Do you think I have older sibling(s)?");
// // console.log("Displaying if goal letter is capital before toUpperCase: " + eldest);
// var eldest = eldest.toUpperCase();
// // console.log("Displaying if goal letter is capital after toUpperCase: " + eldest);
// if (eldest == 'Y') {
//     alert("I am sorry that is not correct. I am the eldest son.");
//     }else if (eldest == 'N'){
//     alert("You are awesome and correct! Thank you " + userName + " for paying attention.");
//     var score = (score + 1);
//     }else {
//     alert("I am so sorry, I really need a Y or N to know if you answered correctly.");
//     }

// var correctNumber = 3.82;
// var correctNumber = Number(correctNumber);

// for (var numberGame = 0; numberGame < 4; numberGame++) {
//     var numberGuess = prompt("As a fun number game, please guess any numerical number.");
//     var numberGuess = Number(numberGuess);
//     if (numberGuess < correctNumber) {
//         alert("Too Low!");
//     } else if (numberGuess > correctNumber) {
//         alert("Too High!");
//     } else if (numberGuess === correctNumber) {
//         alert("WOW!!" + userName + ", Amazing Guess!!!");
//         var score = (score + 1);
//         var numberGame = (numberGame + 10);
//     } else {
//         alert(userName + ", I am sorry. Really need a NUMERICAL number.");
//     }
// }

// if (numberGame === 3) {
//     alert("The correct guess is " +correctNumber + ". Hard to guess, I know.");
// }

// var multipleAnswers = ["scarlet","fuchsia","mauve","canary","magenta","crimson","orange","raspberry","robin shell","antique white"]

// for (var index = 0; index < multipleAnswers.length; index++) {
//     var oddColorsGuess = prompt("What are some of my favorite unusual colors?");
//     var oddColorsGuess = oddColorsGuess.toLowerCase();
//     if (multipleAnswers[0] === oddColorsGuess) {
//         alert("Ding!! That's Correct!");
//         var score = (score + 1);
//         var index = (index + 10);
//     } else if (multipleAnswers[1] === oddColorsGuess) {
//         alert("Ding!! That's Correct!");
//         var score = (score + 1);
//         var index = (index + 10);
//     } else if (multipleAnswers[2] === oddColorsGuess) {
//         alert("Ding!! That's Correct!");
//         var score = (score + 1);
//         var index = (index + 10);
//     } else if (multipleAnswers[3] === oddColorsGuess) {
//         alert("Ding!! That's Correct!");
//         var score = (score + 1);
//         var index = (index + 10);
//     } else if (multipleAnswers[4] === oddColorsGuess) {
//         alert("Ding!! That's Correct!");
//         var score = (score + 1);
//         var index = (index + 10);
//     } else if (multipleAnswers[5] === oddColorsGuess) {
//         alert("Ding!! That's Correct!");
//         var score = (score + 1);
//         var index = (index + 10);
//     } else if (multipleAnswers[6] === oddColorsGuess) {
//         alert("Ding!! That's Correct!");
//         var score = (score + 1);
//         var index = (index + 10);
//     } else if (multipleAnswers[7] === oddColorsGuess) {
//         alert("Ding!! That's Correct!");
//         var score = (score + 1);
//         var index = (index + 10);
//     } else if (multipleAnswers[8] === oddColorsGuess) {
//         alert("Ding!! That's Correct!");
//         var score = (score + 1);
//         var index = (index + 10);
//     } else if (multipleAnswers[9] === oddColorsGuess) {
//         alert("Ding!! That's Correct!");
//         var score = (score + 1);
//         var index = (index + 10);
//     } else {
//         alert(userName + ", I am very sorry that isn't one of my favorite unusual colors. Your number correct so far is: " + score)
//     }
// }     

// if (index === (multipleAnswers.length - 1)) {
//     alert(userName + ", in order my favorite unusual colors are scarlet, fuchsia, mauve, canary, magenta, crimson, orange, raspberry, robin shell, and antique white")
// }


// alert("I am so glad that you've had a chance to play this guessing game to learn more about me, " +userName + " and your number of correct guesses is " + score + " am looking forward to meeting you soon!.")

// // Robert Carter Accountability Buddy
// // Paul Depew Accountability Buddy