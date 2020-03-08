'use strict';

/* I am declaring the functions at top.
Calling/invoking Functions and declaring Global Variables happens below the bottom function declared
I am including these comments for each function both for my future self and collaborators.
*/

function introduction() {
    var userName = '';
    var introIndexMin = 0;
    var introIndexMax = 5;
    var introIndex = introIndexMin;
    var defaultUserName = 'Friendly Stranger';
    /* I wanted this function to be reusable, possible with ability to remove default 
    by simply deleting the later part of the code and removing the introIdex references
    so that it could loop indefinitely if wanted. I want to make code I can reuse.
    this could have been a for loop since I decided to add a maximum number of loops,
    but wanted to practice while loops and though later I may want this in a while loop version
    */
    while  (userName === '') {
        if (userName === '' && introIndex === introIndexMin) {
            var userName = prompt('Welcome! What is your name?');
            introIndex++; 
        } else if (userName === '' && introIndex  < introIndexMax)  {
            userName = prompt('If we\'re going to get to know each other, I\'ll need to know your name. My name is Matthew Adam Stewart. Would you please tell me your name?');
            introIndex++;
        } else {
            userName = defaultUserName;
            alert('Well, if you don\'t feel like introducing yourself, I\'ll just call you: ' + userName );
        }
    }
    return userName;
    /* This returns userName so the function can be assigned to a global userName variable
    which can be used in my other functions. Most of the other functions operate via display alerts
    or prompts directly allowing the End User interaction with the function, this function makes something
    needed by other functions.
    */
}

function polarQuestion (inquiry, customRight, customWrong, correctAnswer, wrongAnswer) {
    /* The inqury is the question within the prompt.
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

function numberGuessing (inquiry, correctAnswer, attempts, customRight) {
    /* The inqury is the question within the prompt.
    correctAnswer is for comparison math logic
    attempts is the number of guesses the user has
    customRight is wording to customize the test of right answers
    inquiry is a string, the other two are numbers, customRight is a string
    */
    for (var numberGame = 0; numberGame < attempts; numberGame++) {
        var numberGuess = prompt(inquiry);
        var numberGuess = Number(numberGuess);
        if (numberGuess < correctAnswer) {
            alert("Too Low!");
        } else if (numberGuess > correctAnswer) {
            alert("Too High!");
        } else if (numberGuess === correctAnswer) {
            alert("WOW!! " + userName + ", Correct! " + customRight);
            score = (score + 1);
            break;
        } else {
            alert(userName + ", I am sorry. Really need a NUMERICAL number.");
        }
    }
    alert('The correct answer was ' + correctAnswer + 'and if you guessed that, congratulations! If not, don\'t feel bad, it was just a fun creative exercise.')
}

function mulitpleChoiceQuestion (inquiry, multipleAnswers, attempts) {
    /* The inqury is the question within the prompt.
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
        if (displayAdd === 0) {
            displayAllAnswers = (multipleAnswers[displayAdd]);
        }
        else if (displayAdd < (multipleAnswers.length -1)) {
            displayAllAnswers = (displayAllAnswers + ', ' + multipleAnswers[displayAdd]);
        } else {
            displayAllAnswers = (displayAllAnswers + ' and ' + multipleAnswers[displayAdd] + '.');
        // Does not need to compare on (displayAdd < (multipleAnswers.length - 1))
        }
    }
    alert(userName + ', of the potential correct answers here is the list: ' +displayAllAnswers);
}

/* This is where the global variables are set and functional are called
userName is ___Extremely__ important for these functions
*/

var userName = introduction();

var score = 0;

alert(userName + ", it is nice to meet you! I am Matthew and I'd like you to know more about me.");

polarQuestion('Do you think I was born in the winter?','I am a Cancer.','I was born on midsummer\'s eve.','N','Y');

polarQuestion('Do you think I am from the Pacific Northwest?','I was born at Fort Lewis and later served there.','I was born at Fort Lewis and later served there.','Y','N');

polarQuestion('Do you think I am a veteran?','Thank you for paying attention.','Is the page not loading?','Y','N');

polarQuestion('Do you think I want to be a coder?','Absolutely, that is why I attend Code Fellows.','I really do want to be a coder!','Y','N');

polarQuestion('Do you think I have older sibling(s)?','I am the eldest son.','I am the eldest son.','N','Y');

numberGuessing('As a fun number game, please guess any numerical number.', 3.82, 4, 'What a truly amazing guess!! The fact you chose a decimal means you think outside the box.');

mulitpleChoiceQuestion(
    'What are some of my favorite unusual colors?',
    ["scarlet","fuchsia","mauve","canary","magenta","crimson","orange","raspberry","robin shell","antique white"],
    6
    );

alert("I am so glad that you've had a chance to play this guessing game to learn more about me. " + userName + ", your number of correct guesses is " + score + ". I am looking forward to meeting you soon!.")
