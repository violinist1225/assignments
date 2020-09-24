//https://coursework.vschool.io/array-reduce-exercises/
// final = final + num  = final += num

//good to know for interviews 

arrayOfNumbers = [1,2,3]

const sum = arrayOfNumbers.reduce((final, num) =>{
    final += num
    return final
} , 0)

//0 is = final's initial value in above example ; final is what will get returned; num rep. indexes in array 

console.log(sum)



//2. 
stringconCat = [1,2,3]

const conCat = stringconCat.reduce((final, num) => {
    final += num.toString()
    return final

}, '')

console.log(conCat)


//3.

let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const howManyVoted = voters.reduce((final, voter) => {
    if(voter.voted){
        final++
    }
    return final
}, 0)

console.log(howManyVoted)









//4.

let wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const totalCost = wishlist.reduce((sum, item) => {
    sum += item.price
    return sum
} ,0)

console.log(totalCost)



//5.

//Lots of data in different arrays and want to combine them in one. Reduce (method)
let arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]


//array in below example is final result 
const singleArray = arrays.reduce((array, item) =>{
    array = array.concat(item)
    return array
} ,[])
//Empty array above is intial value of array. Will get passed after reduce function is finished.
// Will store ans in const.
console.log(singleArray)


//6. 

let votersTwo = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
//true and false are javascript keywords. boolean values... undefined/NAN/'', 0, null, false, return false 
//if a value is a boolean (t/f) then will be truthy/falsy, so don't need to === false or true in conditional.
//acc = accumulator 

const combo = votersTwo.reduce((acc, voter) =>{
    //if wanted to test ages returning t/f, then console log here voter.age >= et al.
        if(voter.age >= 18 && voter.age <= 25){
            acc.numYoungPeople++
            if(voter.voted){
                acc.numYoungVotes++

            }
    }
        else if(voter.age >= 26 && voter.age <= 35){
            acc.numMidPeople++
            if(voter.voted){
                acc.numMidVotesPeople++
            }
        }

        else if(voter.age >=36 && voter.age <= 55){
            acc.numOldPeople++
            if(voter.voted){
                acc.numOldVotesPeople++
            }
           
        }
        return acc
} , {numYoungVotes: 0, numYoungPeople: 0, numMidVotesPeople: 0, numMidPeople: 0, numOldVotesPeople: 0, numOldPeople: 0})

console.log(combo)


// { numYoungVotes: 1,
//   numYoungPeople: 4,
//   numMidVotesPeople: 3,
//   numMidsPeople: 4,
//   numOldVotesPeople: 3,
//   numOldsPeople: 4 
// }
