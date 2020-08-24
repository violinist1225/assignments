const ask = require("readline-sync");
let gameIsRunning = true;
let hasWon = false
const player = new Hiker("Hiker", 100, 7, 3, 50, 1);
//Question about const player. Is this correct? I need to add inventory? Or just call it?

let inventory = []
let inventoryIsOpen = false

const addItems =  function AddItems(kindBars, bottleWater, superWalkingStickSword){
  this.kindBars = kindBars
  this.bottleWater = bottleWater
  this.superWalkingStickSword = superWalkingStickSword
}

//CONFUSED BELOW 

// let gainedItems = Math.floor(Math.random()* 4)
// if (gainedItems === 0){
//   inventory.push(hiker.)
// } else if (gainedItems === 1){
//   inventory.push()
// }








// FUNCTIONS



function status(){
  
const player = new Hiker("Hiker", 100, 7, 3, 50, 1);

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
    )
    thisMeansWarLoop() }

     else { 
       console.log('You are one lucky hiker today! No enemies in your path.')
    }



function Hiker(name, healthStat, bottleWater, kindBars, attackPower, superWalkingStickSword, inventory) {
  this.name = name;
  this.healthStat = healthStat;
  this.bottleWater = bottleWater;
  this.kindBars = kindBars;
  this.attackPower = attackPower;
  this.superWalkingStickSword = superWalkingStickSword
  this.inventory = []
  this.enemiesFought = 0
  this.showStats = () =>
    console.log(
      `Your current stats are: type: ${this.name} | health: ${this.healthStat} | water: ${this.bottleWater} | food: ${this.kindBars}}`
    );
}



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

if (enemy.healthStat < 0){
  console.log(`${enemy.type} wobbles to the ground and takes it's last breathe....Then screams:  NoooooOOOO! You have defeated me today, but rest assured my bretheren will finish what I started! You then hear a huge plop to the ground sound`)

  arrayOfEnemies.splice(indexOf($enemy.type), 1)

  HERE


}


else if (hiker.healthStat  < 0){
  console.log(`You have lost the battle against ${enemey.type} today. You did your best and died in honor. Goodbye brave hiker`)
  isalive = false
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
  
  





//Inventory Function Below 


//   function items(player){
//     while (!inventoryisOpen){
//       let question = question.KeyIn('Do you wish to use your ONLY super walking stick sword type this one time [s], or quickly eat 2 kind bars for fast energy type [k], or drink a bottle of water for fast hydration power[w]?', {limit: 'ksw'})
      
//         if (question === 's'){
//         player.healthStat  += 50
//         delete.addItems[]
//           console.log('You have used your only ')
//         ]
        
//       } else if 
//       (question === 'k'){
//         player.healthStat += 30
//         delete.addItems[]
//           console.log('You have eaten 2 Kind bars and gained 30 joules of energy to your HealthStat!')
//   }    else if
//       (question === 'w'){
//         player.healthStat +=40
//         delete.addItems[]
//           console.log('You have gobbled down a bottle of highly alkanized bottle water and gained 40 joules of energy in your HealthStat!')
//       }
//     }
// }   


//GLOBAL VARIABLES

const arrayOfEnemies = [
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
    "Would you like to walk east[e], west[w], see your inventory[i], or quit [q]?",
    {limit: "ewi" })
  

  if (playerAnswer === "e" || playerAnswer === "w") {
   walk() 
  }
  else if (playerAnswer === 'i'){
    inventory()  //Need help creating this
  }
  else if (playerAnswer ==='q'){
    console.log("Better Luck next time! At least you got started. Goodbye brave hiker!" )
    isalive = false
  }
}

}










