//https://coursework.vschool.io/array-map-exercises/   Use .map method
console.log('Make an array of numbers that are doubles of the first array')
const numArray = [2, 5, 100]
//Each index is looped over in a 4 loop. num is array, indexth of i. 
const doubleNumbers = numArray.map((num)=> num * 2)
console.log(doubleNumbers)



console.log('Take an array of numbers and make them strings')
const array = [2, 5, 100]
const stringItUp = array.map((num)=> num.toString())
console.log(stringItUp)



console.log(' Capitalize each of an array of names')
const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]
const capitalizeNames = names.map((item) => {
    let firstLetter = item[0].toUpperCase()
    let restOfLetters = item.slice(1).toLowerCase()
    return firstLetter + restOfLetters 
})
console.log(capitalizeNames)




console.log('Make an array of strings of the names')
const infoOfCelebrities = [{
              name: "Angelina Jolie",
              age: 80
          },
          {
              name: "Eric Jones",
              age: 2
          },
          {
              name: "Paris Hilton",
              age: 5
          },
          {
              name: "Kayne West",
              age: 16
          },
          {
              name: "Bob Ziroll",
              age: 100
          }
  ]

  const stringsOfNames = infoOfCelebrities.map((celeb) => celeb.name)
  console.log(stringsOfNames)






  console.log('Make an array of strings of the names saying whether or not they can go to The Matrix')
 
  const matrixSeekers = [{
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}]

const inTheMatrix = matrixSeekers.map((approve) => {
  if(approve.age >=18){
    console.log(approve.name)
  }
})
// console.log(inTheMatrix)








console.log('Make an array of the names in h1s, and the ages in h2s')

 const readyToPutInTheDom = [{
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ] 

  const readyForDom = readyToPutInTheDom.map((info) => {
    return '<h1>'+ info.name + '</h1>' + '<h2>' +info.age + '</h2>'
})
console.log(readyForDom)
 
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]