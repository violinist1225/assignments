//whttps://coursework.vschool.io/array-filter-exercises/

console.log(' Given an array of numbers, return a new array that has only the numbers that are 5 or greater.')
  
const arr = [3, 6, 8, 2]
const fiver = arr.filter((num) => {
    if(num >=5){
    return true
    }
  })
  console.log(fiver)


const array = [3, 6, 8, 2]
const even = array.filter((num) => {
  if(num % 2 ===0){
    return true
  }
})

console.log(even)


console.log(' Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length')

const characters = ["dog", "wolf", "by", "family", "eaten", "camping"]
const fiveOnly = characters.filter((item) => {
    if(item.length <= 5){
    return true
  }
})

console.log(fiveOnly)


console.log(`{Given an array of people objects, return a new array that has filtered out all those who don't belong to the club}`)

const illum = [
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true }
]

const members = illum.filter((celeb) => {
  if(celeb.member === true){
    return celeb
  }
})

console.log(members)

console.log('Make a filtered list of all the people who are old enough to see The Matrix (older than 18)')

const celebrities = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 }
]


const canSeeMovie = celebrities.filter((celeb) => {
  if(celeb.age > 18){
    return true
  }
})

console.log(canSeeMovie)