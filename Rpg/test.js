// const readline = require('readline-sync')
// console.log('A Fun Message')
// const $name = readline.question("what is your name?")
// const arrayOfInventory = []
// const arrayOfEnemies = []
// let isAlive = true
// let inventoryIsOpen = false
// function Player(playerHealth , playerAttack, name, inventory){
//     this.playerHealth = playerHealth
//     this.playerAttack = playerAttack
//     this.name = name
//     this.inventory = []
// }
// const jon = new Player(100, 20, "jon" , 'inventory')
// function Enemy(HP , AP, type){
//     this.HP = HP
//     this.AP = AP
//     this.type = type
// }
// function enemyType(){
//     let $enemyType = Math.floor(Math.random() * 2)
//         if($enemyType === 0){
//             return new Enemy(1 ,1 , 'Joffrey')
//         }else if($enemyType === 1){
//             return new Enemy(25 , 15, 'Ramsey')
//         }else if($enemyType === 2){
//             return new Enemy(75 , 30, 'Knight King')
//         }
// }
// while(isAlive){
//     let commands = readline.keyIn('press [w] to walk, press [i] for inventory, press [q] to quit', {limit: "wiq" })
//     if(commands === 'w'){
//         walking()
//     } else if(commands === 'i'){
//         items()
//     } else if(commands === 'q'){
//         isAlive = false
//         console.log('You know nothing Jon Snow')
//     }
// }
// function walking (){
//     let encounterRate = Math.floor(Math.random() * 3)
//         if(encounterRate === 2){
//             battle(enemyType())
//         } else{
//             console.log('No enemies')
//         }
// }
// function flee(enemy){
//     let $run = Math.floor(Math.random() * 3)
//     if($run === 0){
//         walking()
//         console.log("You ran away")
//     } else {
//         enemyType()
//         console.log("You could not get away from " + enemy.type)
//     }
// }
// function battle(enemy){
//     console.log('You have encountered'+ enemy.type)
//     while(jon.playerHealth > 0 && enemy.HP >0 ){
//         let fight = readline.keyIn('Do you want to fight [f] or run [r] or [q] to quit' , {Limit: 'frq'})
//         if(fight === 'f'){
//             enemyType()
//             jon.playerHealth -= enemy.AP
//             enemy.HP -= jon.playerAttack
//         } else if(fight === 'r'){
//             flee(enemy)
//         } else if(fight === 'q')
//             isAlive = false
//          if(jon.playerHealth > 0){
//             console.log('Congrats you have defeated' + enemy.type)
//             let droppedItems = Math.floor(Math.random() * 5)
//             if(droppedItems === 0){
//                 arrayOfInventory.push($healthPack)
//             }else if(droppedItems === 1){
//                 arrayOfInventory.push($minorHealthPack)
//             }else if(droppedItems === 2){
//                 arrayOfInventory.push($minorHealthPack)
//             }else if(droppedItems === 3){
//                 arrayOfInventory.push($minorHealthPack)
//             }else if(droppedItems === 4){
//                 arrayOfInventory.push($roids)
//             }
//         }else{
//             console.log('You played the Game of Thrones and you lost')
//             isAlive = false
//         }
//     }
// }
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
//         let question = readline.keyIn('To use a health pack press [h], to use a minor health pack press [m], to use roids press [r]', {limit: 'hmr'})
//         if(question === 'h'){
//             jon.playerHealth += 100
//             delete arrayOfInventory[$healthPack]
//             console.log('You have used a Health pack')
//         } else if(question === 'm'){
//             jon.playerHealth += 40
//             delete arrayOfInventory[$minorHealthPack]
//             console.log('You have used a minor health pack')
//         } else if(question === 'r'){
//             jon.playerAttack += Math.floor(Math.random()* 40) 
//             delete arrayOfInventory[$roids]
//             console.log('You have used roids to increase your attack')
//         }
//     }
// }