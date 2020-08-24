
// var arrayOfArrays = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// for(i=0; i<arrayOfArrays.length; i++){
//     for (j=0; j<arrayOfArrays.length; j++){
//         console.log(arrayOfArrays[i][j])
//     }
// } 

// //Console log number 6 in array above? then 1, then 9. 
// console.log(arrayOfArrays[1][2])
// console.log(arrayOfArrays[0][0])
// console.log(arrayOfArrays[2][2])

// //Matrix is synonymous with Array of Array

// https://coursework.vschool.io/loop-olympics/

// const:  permanent
// let: you change it at some point
// var: avoid it, it is deprecated

// Const means constant, like in math
// It doesn’t change like a true variable does

// It’s not about where you use it, just that it will never change.

// Also var by default has global scope, even if you declare it inside a code block { }, which means it’s generally a bad idea to use it.

console.log('Prelim Part 1')

        for(i=0; i<=9; i++){
            console.log(i)
}

//To stop an infinite loop, type Control + C


// Ask: originally had i<9; i-- and it was in infinite loop. WHy? 
//Second part is condition on where it will continue. Satisfy requirement.


//Ask Austin why this won't run? b/c i is never less than 0 if start from 9?
// for(i=9; i <=0; i--){
//     console.log(i)
// }


console.log('prelim part 2 ')

            for(i=9; i>=0; i--){
                console.log(i)
            }

            console.log('Another way to do part 2')

            var reverse = [0, 1,2,3,4,5,6,7,8,9] 

            for( let i = reverse.length-1; i>=0 ; i--){
                console.log(reverse[i])
            }

//Second part: Like an if statement. If this is true, then keep going. For loops are if statements.

console.log('part 3 prelim')

            var fruit = ["banana", "orange", "apple", "kiwi"]

            for(let i=0; i < fruit.length; i++){
                console.log(fruit[i])
                }


               

//Bronze Medal Part A

console.log('Write a for loop that will push the numbers 0 through 9 to an array')

// Push passes values (objects, strings, boleans, functions etc) NOT ///variables. It's the argument going into. 

// DIFFERENCE B/W LET, CONST,  AND VAR : 

// // VAR scopes globally ; can be used other places unless defined ////inside a function. If outside function, then it is scoped globally..
//  let scopes to nearest code block (curly brackets) const scopes to //nearest curly (can't reassign). Can reassin let & var. Not const.


//Let: Write for loops with LET. (Scopes to Nearest curly brackets)
const numbers = []

for(let i = 0; i <= 9; i++){
    numbers.push(i)
}
console.log(i)


console.log(numbers)


console.log('Write a for loop that prints to the console only even numbers 0 through 100')

for(let i = 0; i <= 100; i+=2){
    console.log(i)
}


console.log('Write a for loop that will push every other fruit to an array')

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]


for(let i=1; i < fruit.length; i+=2){
    console.log(fruit[i])
    }

// for loops: looping over data in array
// while loops: run in background (in chrome etc); we don't write 
//them. 

console.log('Silver Medal Part 1')

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
//   Remember: Name of array, index of array, then dot notation to //  //get a specific property.

  for(let i = 0; i < peopleArray.length; i++){
      console.log(peopleArray[i].name)
  } 
  

  console.log('part 2 silver medal')

//   Write a loop that pushes the names into a names array, and the occupations into an occupations array.

let namesArray = []
let occupationArray = []

for(i = 0; i < peopleArray.length; i++){
    namesArray.push(peopleArray[i].name)
    occupationArray.push(peopleArray[i].occupation)
}

console.log(namesArray)
console.log(occupationArray)

// So your push needs to be in the for loop.

// Outside of it, peopleArray[i] doesn't exist.

// So just move line 154 into the for loop, under your first console log.

// That second console log for namesArray can stay outside of it though.

console.log('Part 3 of Silver')

// Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".

let everyOtherName = []
let everyOtherOccupation = []

for(i = 0; i < namesArray.length; i+=2){
    everyOtherName.push(peopleArray[i].name)
    everyOtherOccupation.push(peopleArray[i].occupation)
}
console.log(everyOtherName)
console.log(everyOtherOccupation)

