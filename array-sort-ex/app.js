//https://coursework.vschool.io/array-sort-exercises/

const array = [1, 3, 5, 2, 90, 20]

array.sort((a,b) => a-b)

console.log(array)


const arrayOne = [1, 3, 5, 2, 90, 20]

arrayOne.sort((a,b) => b-a)

console.log(arrayOne)



const arrayTwo = ["dog", "wolf", "by", "family", "eaten"]

arrayTwo.sort((a,b) =>  a.length - b.length)

console.log(arrayTwo)



//sort alphabetical 
const alphabet = ["dog", "wolf", "by", "family", "eaten"]
alphabet.sort()
console.log(alphabet)





const people =  [{ name: "Quiet Samurai", age: 22 },
{ name: "Arrogant Ambassador", age: 100 },
{ name: "Misunderstood Observer", age: 2 },
{ name: "Unlucky Swami", age: 77 }
]

people.sort((a,b) => a.age - b.age)

console.log(people)

