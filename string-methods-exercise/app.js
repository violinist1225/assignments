console.log('#1 Make a function that will return any given string into all caps followed by the same string all lowercase.')

function editString(string1){
        
        var upper = string1.toUpperCase()
        var lower = string1.toLowerCase()
        var combineStrings = upper.concat(lower)
        return combineStrings
}


console.log(editString('aarrriiooo'))


//Below is what I originally had which was wrong
// function editString(){
        
//     var string1 = 'abcdefg'
//     var upper = string1.toUpperCase()
//     var lower = string1.toLowerCase()
//     var combineStrings = upper.concat() + lower.concat()
//     Return (combineStrings)
// }

// editString
//Mistakes Made: 1. Return is NOT capitalized. 2. I logged function but did not call it. 3. return of something doesn't need to be in parentesis! 


console.log('2...Make a function that returns a number half the length, and rounded down')

//You'll need to use m a t h .floor
// how do i find the length of a number?
// how do i find the length and subsequently half of it?
// how do i split off half and return it?


//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tostring_number

//Help with base what it means? https://www.w3schools.com/jsref/jsref_tostring_number.asp


function half(num) {
    
    var n = num.toString()
    var le = n.length

    //Why is nothing showing when return le? 

    if (le % 2 === 0) {
        return n.substr(Math.floor(le/2))
    }
    return n.substr(Math.floor(le/2)+1)
    
}
console.log(half(4908879))








// #3: Make a function that uses slice and the other functions you've written to 
// return the first half of the string')
      
// function firstHalfOfString(string){
//     return string.slice(0, Math.floor(string.length/2))
// }

// console.log(firstHalfOfString('abcde'))


//#4. 

// console.log('4....Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower case')


// //hint: If the half way point is a decimal, or rather, your string length is odd. Use Math.floor to round down)

// function combo(string) {
//     var halfWay = Math.floor(string.length/2)
//     var upperCase = string.toUpperCase().slice(0,halfWay)
//     var lowerCase = string.toLowerCase().slice(halfWay)
//     return upperCase + lowerCase 

// }
// console.log(combo('aabbccd'))














//SPLIT METHOD: Can turn a string into an array depending on how it's used. For example, if wanted var animal = tiger split into 5 characters, would have to make another variable characterArr = animal.split("")
//Must have quotations in parenthesis to know to split letters apart. Individually. If put a letter inside quotations instead of being empty, then will split it at that letter! 

//SLICE METHOD: Cuts up a string. How diff from split? because taking string and making a new string out of it....split turnsinto array...var.slice(index of where begin, index of where to go up to (but not include). )


//INDEX OF: Looking for a specific word or letter. Want to know hwere it is in a string.
//var x = x.indexOf('C')

// Windows Setup for : https://www.youtube.com/watch?v=xvMAZsGDBKY&feature=youtu.be

// https://docs.microsoft.com/en-us/windows/wsl/install-win10




































//https://coursework.vschool.io/string-methods-exercise/
//https://www.w3schools.com/jsref/jsref_obj_string.asp
//https://scrimba.com/c/c9PEkZfD


//Below is my original work but is not all correct...See Eric's message to confirm answers
// const name = "Ben"
// let age = 24;
// const dateOfBirth = "feb";

// let statuses = [ 
//   { code: 'OK', response: 'Request successful' },
//   { code: 'FAILED', response: 'There was an error with your request' },
//   { code: 'PENDING', response: 'Your reqeust is still pending' }
// ];
// const message = '';
// let currentCode = 'OK';

// for (let i = 0; i < statuses.length; i++) {
//   if (statuses[i].code === currentCode) {
//     message = statuses[i].response;
//   }
// }

//FIXES: Statuses need to be const as arrays/objects always const. current code = const. And message
//message is let because will need to change. 






function myFun(...nums) {
    console.log(nums)
}
myFun(6, 10,12,)




// function return (Executes a function and ends it?)
// method
// arguments
// mutable
// immutable
// array terms (items, index, iterate)