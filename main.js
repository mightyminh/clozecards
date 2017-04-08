// this is the main app that calls the other files in. 


var BasicCard = require("./simple.js");
var ClozeCard = require("./cloze.js");
var inquirer = require("inquirer");
var fs = require("fs");

// list options for users

var userOptions = [
    {
        type: "list",
        name: "userChoice",
        message: "What is your option for flash card?",
        choices: ["Create", "Review", "Delete"]
    }
];

var cardOptions = [
    {
        type: "list",
        name: "cardType",
        message: "What type of card you want?",
        choices: ["Simple", "Cloze"]
    }
];

var simpleQuiz = [
    {
        type: "input",
        name: "front",
        message: "What is on the front of the card?",
    },
    {
        type: "input",
        name: "back",
        message: "What is on the back of the card?",  
    }
];

var clozeQuiz = [
    {
        type: "input",
        name: "text",
        message: "Enter the full text.",
    {
        type: "input",
        name: "cloze",
        message: "Which word do you want to hide?",
        
    }
];



//write loads of functions here. one for getting the commands straight. 
//Then one for each "CREATE, REVIEW, and DELETE function"




