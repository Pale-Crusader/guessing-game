'use strict';

var userName = prompt('Welcome! What is your name?');

alert(userName + ", it is nice to meet you! I am Matthew and I'd like you to know more about me.");

var season = prompt(userName + ", please using a Y or N as an answer for yes or no: Do you think I was born in the winter?");
console.log("Displaying if season letter is capital before toUpperCase: " + season);
var season = season.toUpperCase();
console.log("Displaying if season letter is capital after toUpperCase: " + season);
if (season == 'Y') {
    alert("Sorry, " + userName + ", that is not correct, I was born on midsummer's eve.");
    }else if (season == 'N'){
    alert(userName + "! Awesome Correct?");
    }else {
    alert("I apologize, I really need a Y or N to know if you answered correctly.")
    }


var origin = prompt("Still with a Y or N as an answer for yes or no: " + userName + ", do you think I am from the Pacific Northwest?");
console.log("Displaying if origin letter is capital before toUpperCase: " + origin);
var origin = origin.toUpperCase();
console.log("Displaying if origin letter is capital after toUpperCase: " + origin);
if (origin == 'N') {
    alert("Sorry, " + userName + ", that is not correct. I was born at Fort Lewis and later served there");
    }else if (origin == 'Y'){
    alert(userName + "! Awesome Correct?");
    }else {
    alert(username + ", I apologize, I really need a Y or N to know if you answered correctly.")
    }

var military = prompt("Still with a Y or N as an answer for yes or no: Do you think I am a veteran?");
console.log("Displaying if military letter is capital before toUpperCase: " + military);
var military = military.toUpperCase();
console.log("Displaying if military letter is capital after toUpperCase: " + military);
if (military == 'N') {
    alert(userName + ", I am sorry that is not correct. Is the page not loading?");
    }else if (military == 'Y'){
    alert("You are awesome and correct! Thank you " + userName + " for paying attention.");
    }else {
    alert("I am so sorry, I really need a Y or N to know if you answered correctly.")
    }

var goals = prompt("Still with a Y or N as an answer for yes or no: Do you think I want to be a coder?");
console.log("Displaying if goal letter is capital before toUpperCase: " + goals);
var goals = goals.toUpperCase();
console.log("Displaying if goal letter is capital after toUpperCase: " + goals);
if (goals == 'N') {
    alert(userName + ", that is not correct. I was born at Fort Lewis and later served there");
    }else if (goals == 'Y'){
    alert("You are awesome and correct! Thank you " + userName + " for paying attention.");
    }else {
    alert("I am so sorry, I really need a Y or N to know if you answered correctly.")
    }

var eldest = prompt("Still with a Y or N as an answer for yes or no: Do you think ?");
console.log("Displaying if goal letter is capital before toUpperCase: " + eldest);
var eldest = eldest.toUpperCase();
console.log("Displaying if goal letter is capital after toUpperCase: " + eldest);
if (eldest == 'N') {
    alert("I am sorry that is not correct. I am the eldest son.");
    }else if (eldest == 'Y'){
    alert("You are awesome and correct! Thank you " + userName + " for paying attention.");
    }else {
    alert("I am so sorry, I really need a Y or N to know if you answered correctly.")
    }

alert("I am so glad that you've had a chance to play this guessing game to learn more about me, " +userName + " and am looking forward to meeting you soon!.")

// Robert Carter Accountability Buddy
// Paul Depew Accountability Buddy