//Full List: https://www.w3schools.com/jsref/jsref_obj_array.asp

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
//At end should print: 3,pepper,1,watermelon,orange,apple

// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);


console.log('#1 Remove the last item from the vegetable array')
vegetables.pop()
console.log(vegetables)
//Pop & Shift Methods don't require arguments (so empty parenthesis)


console.log('#2 Remove the first item from the fruit array')
fruit.shift()
console.log(fruit)




console.log('#3 Find the index of "orange."')

var indexOfOrange = fruit.indexOf('orange')
console.log(indexOfOrange)

//argument needs to be type of datatype looking for.




console.log('#4 Add that number to the end of the fruit array.')


fruit.push(indexOfOrange)


console.log(fruit)


console.log('#5 Use the length property to find the length of the vegetable array.')

console.log(vegetables.length)


console.log('#6 Add that number to the end of the vegetable array.')

vegetables.push(vegetables.length)
console.log(vegetables)


console.log('#7 Put the two arrays together into one array. Fruit first. Call the new Array "food".')

var food = fruit.concat(vegetables)

console.log(food)



console.log('#8 Remove 2 elements from your new array starting at index 4 with one method.')

food.splice(4, 2)
console.log(food)



console.log('# 9 Reverse your array.')
food.reverse()
console.log(food)



console.log(' #10 Turn the array into a string and return it.')

var foodJoin = food.join()
console.log(foodJoin)


// var stringFood = food.map(String)
// console.log(stringFood)


function sum(num1, num2){
    return num1+num2
}

sum(2,8)

var test = 5 + sum(1,1)
console.log(test)






// JS Array Methods

// Full list can be found here: https://www.w3schools.com/jsref/jsref_obj_array.asp


// push - adds item(s) to the end of the array
    // arrOfFoods.push("cereal")
    // console.log(arrOfFoods)

// pop - removes item from the end of the array
    // arrOfFoods.pop()
    // console.log(arrOfFoods)

// unshift - adds item(s) to the beginning of the array
    // arrOfFoods.unshift("cereal")
    
// shift - removes item from the beginning of the array
    // arrOfFoods.shift()
    // console.log(arrOfFoods)

// concat
    // var colors1 = ["blue", "green"]
    // var colors2 = ["purple", "red"]
    // var newArr = colors1.concat(colors2)
    // console.log(newArr)
    


// indexOf
    // var pizzaIndex = arrOfFoods.indexOf("popcicle")
    // console.log(pizzaIndex)

// slice
    // var newArr = arrOfFoods.slice(1, 3)
    // console.log(arrOfFoods)

// join - Turns an array into a string
    // var name = "steve"
    // var splitName = name.split("")
    // var joinedName = splitName.join("")
    // console.log(joinedName)

// reverse
    // var name = "rick" // kcir
    // var splitName = name.split("")
    // var reversedArr = splitName.reverse()
    // var reversedName = reversedArr.join("")
    
    // var allAtOnce = name.split("").reverse().join("")
    // console.log(allAtOnce)
    
// splice - change the orignal array
//var arrOfFoods = ["pancake", "egg", "ice cream", "pizza",
//"hamburger"]
    
//arrOfFoods.splice(2, 2, "bacon", "ice cream")
//console.log(arrOfFoods)












//code challenge
// Create a function that takes an array of numbers and //     
//return          "Boom!" if the number 7 appears in the array. 
//Otherwise, return "there is no 7 in the array".

// 4 Steps Problem Solving STeps:

// 1. Understand the problem 
// 2. Break it down; make a plan
// 3. Execute the plan
// 4.Look back ---> Improve and correct 

// https://edabit.com/challenge/6R6gReGTGwzpwuffD

// One way to do it: 


// return arr.some(num => num.toString().includes('7')) ? 'Boom!' :   // 'there is no 7 in the array'