//Pseudo Code

Hiker walks along trail east or west
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   //Dani's part 2 game tutorial: https://www.youtube.com/watch?v=eYYYxrDkZbQ

   //Nates's rpg video: https://www.youtube.com/watch?v=egzmmI7Vw1s&list=PL1whVIy6oz7PsU6Cr88Vdsxu3aIFYIkef&index=24
   
   
   // const readline = require('readline-sync')
    // let gameIsRunning = true
    // while(gameIsRunning){
    //     const question = readline.keyIn('Would you like to [o] open the door, [f] find the key, or [p] put hand in the hole?', {limit: ['o', 'f', 'p']})

    //     if(question === 'p'){
    //         console.log('You are dead!')
    //         gameIsRunning = false  //Could write break instead of gameIsRunning=false.. 
    //         //while is used when I don't know how many times loop will be performed
    //     }

    //     else if(question === 'f'){
    //         console.log('You are saved! Open the door now!')
    //         gameIsRunning = false //false ends loop b/c they found key
    //     }

    //     else if (question ==='o'){
    //         console.log('You must find the key first. Try again!')
    //         gameIsRunning = false } //
    
    //         } 


    

// Do an ls in the terminal after navigating to he rpg project folder. and if the node_module folder is there and has readline-sync in it, you did it right.
// 3:10
// If there is no node modules, do an npm i readline-sync

// Just go to your terminal,
// cd into the folder you are building it in
// then type the following
// npm i readline-sync
// Then at the top of your .js file type this
// const readline = require('readline-sync')



  
    //     if(question === 'p'){
//     //         console.log('You are dead!')
//     //         gameIsRunning = false  //Could write break instead of gameIsRunning=false.. 
//     //         //while is used when I don't know how many times loop will be performed
//     //     }



    
// function generateEnemy() {
//     const randomChance = Math.floor(Math.random() * 3)
//     if (randomChance === 0) {
//         return new Enemy('crazySteroidHare', 55, 2)
//     } else if (randomChance === 1) {
//         return new Enemy('rabidRoadRunner', 45, 1)
//     } else if (randomChance === 2) {
//         return new Enemy('ferociousRattleSnake', 38, 1)
//     } 
//     else {
//         return new Enemy('giganticLizard', 20, 1)

//     }
// }

// }

// function thisMeansWarLoop(Enemy){
  
//     while(Hiker.healthStat > 0 && Enemy.healthStat > 0) {
//         const playerAnswer = ask.keyIn('Would you like to run [r] from '+ Enemy.name +' OR stand your ground  and fight [f]?', { limit: ['r', 'f'] })
//     }
//     if (playerAnswer === 0){
//         const attackPower = Hiker.attack()
//         Enemy.health -= attackPower
//         console.log(`{Hiker.name} attacked ${Enemy.type} for ${attackPower}!!!!!`)
    

