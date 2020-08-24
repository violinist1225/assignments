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





//NOTES: Let num=2 vs Const num=2? Let CAN change (booleans/strings). 
//Const (Is immutable - can't change-think of CONSistency--objects/arrys)...
//KeyIn is a Method




// Link to Reference: https://www.npmjs.com/package/readline-sync
//Link to KeyIn, question, other readline 'methods' to apply:
// https://www.npmjs.com/package/readline-sync


//NEW JUNE 21 QUESTION: gameisrunning= false in all 3 conditions? check? 

const readline = require('readline-sync')
let gameIsRunning = true
while(gameIsRunning){
    const question = readline.keyIn('Would you like to [o] open the door, [f] find the key, or [p] put hand in the hole?', {limit: ['o', 'f', 'p']})

     if(question === 'p'){
        console.log('You are dead!')
        gameIsRunning = false  //Could write break instead of gameIsRunning=false.. 
        //while is used when I don't know how many times loop will be performed
     }

     else if(question === 'f'){
        console.log('You are saved! Open the door now!')
        gameIsRunning = false //false ends loop b/c they found key
    }

    else if (question ==='o'){
         console.log('You must find the key first. Try again!')
         gameIsRunning = false } //
   
        } 
        
//Question to ask: How to add node to my path here? It's on D drive folder js-node.