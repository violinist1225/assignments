const ask = require("readline-sync");
let gameIsRunning = true;
let hasWon = false

// FUNCTIONS


function status(){
  
const player = new Hiker("Hiker", 100, 7, 3, 50, 1);

// function showHikerStats(){
//   return this.name
//   this.healthStat
//   this.bottleWater
//   this.kindBars

}

function walk() {
  const randomChance = Math.floor(Math.random() * 3);

  if (randomChance === 0) {
    
    const currentEnemy = generateEnemy()
    console.log(
      "How strong-minded you are, walking this challenging trail in 100 degree weather. You continue happily along this trail when a formidible enemy begins stalking you " +
      name +
      ". You are in SERIOUS trouble! " +
      currentEnemy.type +
      " is stalking you. Oh Noooooooo...Prepare yourself for survival NOW !"
    );
    thisMeansWarLoop()
    }
}


function Hiker(name, healthStat, bottleWater, kindBars, attackPower, superWalkingStickSword) {
  this.name = name;
  this.healthStat = healthStat;
  this.bottleWater = bottleWater;
  this.kindBars = kindBars;
  this.attackPower = attackPower;
  this.superWalkingStickSword = superWalkingStickSword
  this.enemiesFought = 0
  this.showStats = () =>
    console.log(
      `Your current stats are: type: ${this.name} | health: ${this.healthStat} | water: ${this.bottleWater} | food: ${this.kindBars}}`
    );
}


const player = new Hiker("Hiker", 100, 7, 3, 50, 1);

// function showHikerStats(){
//   return this.name
//   this.healthStat
//   this.bottleWater
//   this.kindBars

// }


function Enemy(type, healthStat, healthStatDrainingSword, enemyAttackPower) {
  this.type = type;
  this.healthStat = healthStat;
  this.healthStatDrainingSword = healthStatDrainingSword;
  this.enemyAttackPower = enemyAttackPower;
}


  
function generateEnemy() {
  const randomChance = Math.floor(Math.random() * 4);
  if (randomChance === 0) {
    return new Enemy("crazySteroidHare", 55, 2);
  } else if (randomChance === 1) {
    return new Enemy("rabidRoadRunner", 45, 1);
  } else if (randomChance === 2) {
    return new Enemy("ferociousRattleSnake", 38, 1);
  } else {
    return new Enemy("giganticLizard", 20, 1);
  }
}


function hikerAttack(currentEnemy) {
  
  currentEnemy.healthStat -= Math.floor(Math.random()* 5)
  console.log("Good job "+ name +"! "+ currentEnemy +" 's new health stat is " + currentEnemy.healthStat)


}

function enemyAttack(hiker){


  hiker.healthStat -= Math.floor(Math.random()*3)
  console.log("Hahahahahaha ${currentEnemy} laughs and says: 'You May Have Won the Battle, but not the war foolish hiker! ${currentEnemy) changes direction of it's health draining sword. Your new health stat is " + hiker.healthStat)
}



function thisMeansWarLoop(enemy) {
 
  let playerRunSuccess = false 
  while (player.healthStat > 0 && enemy.healthStat > 0 && !playerRunSuccess) {
   
    const playerFightChoice = ask.keyIn(`Do you want to Fight ${currentEnemy.type} [f], Run for your life [r], OR quit [q]?`, {limit: 'frq'})
  
    if (playerFightChoice === 'f') {
        hikerAttack()
        enemyAttack()

    } else if (playerFightChoice === 'r') {
      if (player.enemiesFought === 0){
        return runOne()
      } else  {
        return runTwo()
      } 
    }
      else if (playerFightChoice === 'q') {
      console.log('The great sages have said there is no right or wrong choice. You. Have. Self. Terminated. Goodbye.') 
      gameIsRunning = false 
}

//Below is randomChance index of enemy? Is not global variable. How to find index of enemy? HELP
if (enemy.healthStat < 0){
  arrayOfEnemies.splice(randomChance, 1);
}
  }
}




function runOne() {


  console.log(
    "With adrenaline pumping and fear overtaking your body, you trip over your boot/s laces and injure your knees. You have escaped ${currentEnemy} BUT just lost 25 healthStat points! Such is life $(hiker.type)...Such is life.")

  player.health = player.health - 25
  console.log('Your health is now ' + player.health)
}



function runTwo() {
  
  //Have to log the name of the current enemy with highest hp 
   
  let currentHighestHp = 0
  for(let i=0; i < arrayOfEnemies.length; i++){
    if (currentHighestHp < arrayOfEnemies[i].healthStat){
      currentHighestHp = arrayOfEnemies[i].healthStat 
    }

    let currentEnemyWithHighestHp // = NEED HELP logging current enemy with highest hp resuilts from loop

    hikerAttack(currentEnemyWithHighestHp)
    enemyAttack(hiker)
  
  
  
  }
  
  







//INVENTORY

let hikerItems = []

  const addItems =  function AddItems(kindBars, bottleWater, superWalkingStickSword){
        this.kindBars = kindBars
        this.bottleWater = bottleWater
        this.superWalkingStickSword = superWalkingStickSword
  }
  
  const removeItems =  function RemoveItems(kindBars, bottleWater, superWalkingStickSword){
    this.kindBars = kindBars
    this.bottleWater = bottleWater
    this.superWalkingStickSword = superWalkingStickSword
  }

  let inventoryIsOpen = false
  // function items(){
  //   while (!inventoryisOpen){
  //     let question = question.KeyIn('Do you wish to use your ONLY super walking stick sword type this one time [s], or quickly eat 2 kind bars for fast energy type [k]?', {limit: 'ks'})
  //     if question === 's'{
  //       hiker.healthStat +=
  //       delete add
  //     }
    
//HERE ABOVE IS WHERE I LEFT OFF 

  
    //         let question = readline.keyIn('To use a health pack press [h], to use a minor health pack press [m], to use roids press [r]')
    //         if(question === 'h'){
    //             playerHealth += 100
    //             delete addToInventory[$healthPack]
    //             console.log('You have used a Health pack')
    //         } else if(question === 'm'){
    //             playerHealth += 40
    //             delete addToInventory[$minorHealthPack]
    //             console.log('You have used a minor health pack')
    //         } else if(question === 'r'){
    //             playerAttack += Math.floor(Math.random()* 40) 
    //             delete addToInventory[$roids]
    //             console.log('You have used roids to increase your attack')
    //         }
    //     }




//GLOBAL VARIABLES

let arrayOfEnemies = [
  new Enemy("crazySteroidHare", 55, 2, 30),
  new Enemy("Rabid Road Runner", 45, 1, 25),
  new Enemy("ferociousRattleSnake", 38, 1, 20),
  new Enemy("giganticLizard", 20, 1, 15),
]






// GAME BEGINS HERE

const name = ask.question("HELLO there brave hiker! What is your Name?");
console.log(
  "Greetings, " + name + "! You're about to embark on a long, dangerous, but exciting summer hike in Joshua Tree, California."
);
player.showStats();

while (gameIsRunning && !hasWon) {
  const playerAnswer = ask.keyIn(
    "Would you like to [e] walk east or west[w] or Print (check your status)[s]?",
    {limit: "ews" })
  

  if (playerAnswer === "e" || playerAnswer === "w") {
   walk() 
  }
  if (playerAnswer === 's'){
    status()
  }
}

}








// const $healthPack = new HealthPack('healthPack' , 100)
// let $roids = new Roids('Roids' , Math.floor(Math.random()* 40) )
// const $minorHealthPack = new MinorHealthPack('Minor Health Pack', 40)
// function HealthPack(name , stats){
//     this.name = name
//     this.stats = stats
// }   
// function MinorHealthPack(name , stats){
//     this.name = name
//     this.stats = stats
// }
// function Roids(name , stats){
//     this.name = name
//     this.stats = stats
// }
// function items(){
//     while(!inventoryIsOpen){
//         let question = readline.keyIn('To use a health pack press [h], to use a minor health pack press [m], to use roids press [r]')
//         if(question === 'h'){
//             playerHealth += 100
//             delete addToInventory[$healthPack]
//             console.log('You have used a Health pack')
//         } else if(question === 'm'){
//             playerHealth += 40
//             delete addToInventory[$minorHealthPack]
//             console.log('You have used a minor health pack')
//         } else if(question === 'r'){
//             playerAttack += Math.floor(Math.random()* 40) 
//             delete addToInventory[$roids]
//             console.log('You have used roids to increase your attack')
//         }
//     }
// }





