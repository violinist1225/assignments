const ask = require("readline-sync");
let gameIsRunning = true;
let hasWon = false;


let inventoryIsOpen = true

function Hiker(name, healthStat, attackPower) {
  this.name = name;
  this.healthStat = healthStat;
  this.attackPower = attackPower;
  this.inventory = {
    watterBottles: 9,
    seaSaltCaramelBars: 4,
    items: []
  };
  this.enemiesFought = 0;
  this.showStats = () => {console.clear();
  ask.keyInPause(
    `Your current stats are: name: ${name} | healthStat: ${this.healthStat} |inventory: watterBottles: ${this.inventory.watterBottles} , seaSaltCaramelBars: ${this.inventory.seaSaltCaramelBars},`
  );}
}


function Enemy(type, healthStat, enemyAttackPower, item) {
  this.type = type;
  this.healthStat = healthStat;
  this.enemyAttackPower = enemyAttackPower;
  this.item = item;
}


let arrayOfEnemies = [
  new Enemy("Crazy Steroid Hare", 55, 2, 'organic carrots'),
  new Enemy("RABID RoadRunner", 45, 25, 'turbo sword'),
  new Enemy("Ferocious RattleSnake", 38, 20, 'venom antidote'),
  new Enemy("Gigantic Lizard-O", 20, 15, 'pasture raised eggs'),
];



function thisMeansWarLoop(enemy) {
  while(player.healthStat > 0 && enemy.healthStat > 0){
    let hikerAttack =  Math.floor(Math.random() * player.healthStat);
    let enemyAttack = Math.floor(Math.random() * enemy.healthStat);
    player.healthStat -= enemyAttack
    enemy.healthStat -= hikerAttack

    console.clear();
    ask.keyInPause(`Oh No! You don't get away ${name}. ${enemy.type} grabs your legs
    and forces you into a fight!`)

    console.clear();
    ask.keyInPause(
      `Hahahahahaha ${enemy.type} laughs and changes direction to inflicts damage. Your life has diminished. Your new health stat is now ${player.healthStat}`);

    console.clear();
    ask.keyInPause(
      `You counter ${enemy.type} and strike back. Good job ${name}! 
      ${enemy.type}'s new Health Stat has diminished and  is currently ` +enemy.healthStat);

  }

  if(player.healthStat > 0){
    console.clear();
    ask.keyInPause(`congratulations ${name}, you have defeated your enemy! ${enemy.type} wobbles to the ground and takes it's last breathe....Then screams:  
    NoooooOOOO! You have defeated me today, but rest assured the others will finish what I started here! 
    You then hear a huge PLOOOOP to the ground`);
    console.log(`You've earned new inventory, ${enemy.item}`)
    player.inventory.items.push(enemy.item)
    arrayOfEnemies =  arrayOfEnemies.filter((enemies) => {
      player.enemiesFought++
      return enemies.type !== enemy.type
    })
    openInventory()
  }
    
  if(arrayOfEnemies.length === 0){
    console.log(`CONGRATS! You have made  it through the whole trail, ${name}!! The grueling heat.
    The mean and territorial enemies. Beyond all, you have prevailed this challenging and dangerous Joshua Tree Killer Trail. Pat yourself on the back and remember to replenish your electrolytes!`)
    hasWon = true
    inventoryIsOpen = false
      
  } else if(player.healthStat < 0){
    gameIsRunning = false
    console.log('unfortunately you died, GAME OVER')
  }
 
}


function run () {
  if(arrayOfEnemies.length === 3){
    player.healthStat -= 25
    console.log(ask.keyInPause(`With adrenaline pumping and fear overtaking your body, you RUN as 
    fast as you can away from ${enemy.type} BUT trip over your boot's laces and injure your knees. 
    The hot desert ground burns your legs also!! You have escaped ${enemy.type} BUT 
    just lost 25 healthStat points due to this injury.`))
  } else {
    console.log('You are one lucky hiker! You got away safely')
  }

}

function enemySelect() {
  let randomChance = Math.floor(Math.random()*arrayOfEnemies.length)
  return arrayOfEnemies[randomChance]
}

function openInventory(){
  let inventoryQuestion = ask.keyIn('Do you want to eat 2 kind bars for fast energy type [k], or drink a bottle of water for fast hydration power[w]?', {limit: 'kw'})
  if (inventoryQuestion === 'k'){
      player.healthStat  += 50
      player.inventory.seaSaltCaramelBars = player.inventory.seaSaltCaramelBars -=2
      console.clear(); ask.keyInPause("What a battle! You have gobbled up 2 kind bars and gained 50 healthStat Points") 
      console.log('Your current Health Stat is' +player.healthStat)
      inventoryIsOpen = false
  } else if (inventoryQuestion === 'w') {
      player.healthStat += 60
      player.inventory.watterBottles = player.inventory.watterBottles -=3
      console.clear(); ask.keyInPause(`You have replenished your hydration with these bottles
      of highly alkalized bottle water and gained 60 joules of energy in your HealthStat!`) 
  }
    console.log('Your current Health Stat is' +player.healthStat)
           
}
      
// GAME BEGINS HERE

const name = ask.question("HELLO there brave hiker! What is your Name?");
console.clear();
ask.keyInPause(`Greetings, ${name}! You're about to embark on a long, dangerous, but EXCITING
summer hike in Joshua Tree, California. It's currently 98 degrees and counting...You have a
10 Mile loop to finish. You pull out your map and face the desert with courage.`)

const player = new Hiker(name, 150, 40)

player.showStats()

while (gameIsRunning && !hasWon) {
  const playerAnswer = ask.keyIn(
  "Would you like to walk east[e], west[w], see your inventory[i], or quit [q]?",
  { limit: "ewiq" })

  if (playerAnswer === "e" || playerAnswer === "w") {
    walk();
  } else if (playerAnswer === "i") {
    console.log(player.inventory)
  } else if (playerAnswer === "q") {
    console.clear();
    ask.keyInPause(
    "Better Luck next time! At least you got started. Goodbye brave hiker!")
    hasWon = true
  }

}

function walk(){
  let randomChance = Math.floor(Math.random()* 3)
  if(randomChance === 0){
      enemyInTheWay()
  }else {
      console.log('You are one lucky hiker. No enemies in your path yet. Keep Walking!')
  }
}



function enemyInTheWay(){
  let enemy = enemySelect()
  console.clear();
  ask.keyInPause(`How strong-minded you are, walking this challenging trail in Now 105 degree weather. 
  You continue happily along this trail when a formidible enemy begins stalking you. ${name}, 
  You are in SERIOUS trouble!!! ${enemy.type} is stalking you. Oh NOOOO...Prepare yourself 
  for survival NOW!`)

  let choice = ask.keyIn('Would you like to fight [f], or run [r]?', {limit: 'fr'})
  if(choice === 'r' ){
    if(Math.random() > .5){
      run()
    }    else {
      console.log(`You have emboldened ${enemy.type} by running away! ${enemy.type} is feeding off the fear
      and hits you ferociously!`) 
      player.healthStat -= 25
      console.log(`${enemy.type} hits ${name} taking away 25 health stat points
      ${name}, your health stat is now ${player.healthStat}`)
      thisMeansWarLoop(enemy) 
    }
  }   else if (choice === 'f'){
    thisMeansWarLoop(enemy)   
  }
}