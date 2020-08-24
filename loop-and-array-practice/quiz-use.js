//https://coursework.vschool.io/loops-and-arrays-practice/

//review functions: https://scrimba.com/p/pG66Msa/cLrMenHv

// For loops do what you tell them to do. While normally you just loop through an array from beginning to end, you don't have to. You can start at any index, end at any index, and you can loop in whatever direction you want by manipulating i.
// for example:
// for( i = 10; i < 6; i--)
// would start the loop at the 10th index, then loop backwards 5 times.

//1. 

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

for(i=0; i< officeItems.length; i++){
    console.log(officeItems[i])
}

console.log(officeItems.length)

//2. 

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

    // var age = 18 (don't need this b/c computer will log all items in array at one shot using this method)   .age/.gender are properties ...alt/shift down copies line downwards
    
    //console.log(peopleWhoWantToSeeMadMaxFuryRoad[0].name)
  for(i=0; i <peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
            if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >=18){
                console.log('Old enought to see movie')
            } 
            else console.log('Not old enough to see movie')

  }

//Bonus #1

// if (age <18){
//     console.log('name' is not old enough to see Mad Max')
// }



