// let isAlive = true
// let hasWon = false
// isAlive = false
// if(isAlive && !hasWon){
//   console.log('hey there')
// }
// truthy
// everything else
// falsey
// 0
// ''
// NaN
// null
// undefined
// false
// conditions are always true or false
// if a condition is true, the code in the following scope will run
// if a condition is false, the code in the following scope will not run
// if(condition){
// }else if(condition){
// }else {
// }
// while(condition){
// }
// for(let i = 0; i < 10; i++){
//   console.log(i)
// }
// function Hero (name, ap, hp = 100){
//     this.person = name;
//     this.health = hp;
//     this.attack = ap;
//     this.inventory = ['stick']
// }
// const player1 = new Hero('Joe', 10)
// const player2 = new Hero('Jolyn', 54)
// const player3 = new Hero('Joseph', 90, 50)
// player1.health -= 10
// player1.inventory.push('potion')
// console.log(player1)
// console.log(player2)
// console.log(player3)
// function speak(name, hp){
//   console.log(name + ' ' + hp)
// }
// speak('hello', 'joe')


// let random = Math.floor(Math.random() * 3)
// if(random === 2){
//   console.log('found enemy')
// }



// RPG Starter Code Below! 

// const readline = require('readline-sync')
// let isAlive = true;
// const name = readline.question('What is your name? ')
// class Hero{
//     constructor(name, hp, ap){
//         this.name = name
//         this.hp = hp
//         this.ap = ap
//         this.inventory = ['potion']
//     }
// }
// const player = new Hero(name, 100, 50)
// class Enemy {
//     constructor(name, hp, ap){
//         this.name = name;
//         this.hp = hp;
//         this.ap = ap;
//     }
// }
// const darthSideous = new Enemy("Darth Sideous", 50, 50)
// const darthVader = new Enemy("Darth Vader", 75, 50)
// const darthMaul = new Enemy("Darth Maul", 50, 25)
// const enemies = [darthMaul, darthSideous, darthVader]
// while(isAlive){
//     const action = readline.keyIn('Would you like to [w] Walk, [p] Print Inventory, or [q] Quit?', {limit: 'wqp'})
    
//     if(action === 'w'){
//         walk()
//     }else if (action === 'p'){
//         printInventory()
//     }else if(action === 'q'){
//        isAlive = false
//        console.log('You quit the game') 
//     }
// }
// function walk(){
//     const random = Math.floor(Math.random()*4)
//     if(random === 0){
//         enemyEncounter()
//     }else{
//         console.log('You walk safely')
//     }
// }
// function printInventory(){
//     console.log(player.inventory)
// }
// function enemyEncounter(){
//     const random = Math.floor(Math.random() * enemies.length)
//     const enemy = enemies[random]
// }
