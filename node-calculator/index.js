// Add at top of js file: const readline = require(“readline-sync”);
// Node has npm (Node Package manager) - used to download node_modules

// Steps when setting up a javascript project in node (not the browser)
// 0. Preliminary Step: Ctrl + backtick to pull up terminal window; node (name of file.js)
// 1. npm init -y (this creates a package.json) (Is not an actual package, but keeps track of packages being used) React is an example. 
// 2. npm install package-name (node package manager): AKA npm install readline-sync

//BELOW: Copied and pasted from readline-sync from github... then run in node js. 
// var readlineSync= require('readline-sync')
// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
//When ready to run program, put: node (name of file - index.js in this case)


 


//NODE CALCULATOR ASSIGNMENT STARTS BELOW 



var readlineSync= require('readline-sync')
var num1= readlineSync.question('What is the first number? ')
var num2= readlineSync.question('What is the second number?')
var userChoice= readlineSync.question('Do you want to add(Type a), subtract(Type s), divide(Type d), or multiply(Type m)')




function addition(num1, num2){
    console.log(num1+num2)
}

function multiply(num1,num2){
    console.log(num1*num2)
}

function division(num1,num2){
    console.log(num1/num2)
}

function subtraction(num1,num2){
    console.log(num1-num2)
}



if(userChoice === 'a'){
    addition(Number(num1), Number(num2))
} else if (userChoice==='m'){
   multiply(Number(num1), Number(num2))
} else if (userChoice==='s'){
    subtraction(Number(num1), Number(num2))  
} else if (userChoice==='d'){
    division(Number(num1), Number(num2))
} else {
    (console.log('Only Select a, m, s, or d'))
}



