


class braveSoul {
    constructor (name, totalCoins, status = "small")
{
    this.name = name
    this.totalCoins = totalCoins
    this.status = status
    this.hasStar = false
    this.gameActive = true
}
setName(namePicked){
    return namePicked
}
gotHit(){
    if(this.status === 'small'){
        this.status = 'dead'
        this.gameActive = false
    } else if(this.status === 'big'){
        this.status = 'small' 
    } else if(this.status === 'powered up'){
        if(this.hasStar){
            this.hasStar = false
        } else{
            this.status = 'big'
        }
    }
       
}
    poweredUp() {
        if(this.status === 'small'){
            this.status = 'big'
        }else if(this.status ==='big'){
            this.status = 'powered up'
        } else if(this.status ==='powered up'){
            this.hasStar = true
        }

    }

    addCoin = () =>{ 
        console.log(`You earned a coin! Previous total coins: ${this.totalCoins}`)
        this.totalCoins++
        console.log(`You now have ${this.totalCoins}`)
    }
    
    print = () => {console.log(`Hello, here are your stats: 
    
    Name: ${this.name}
    Total Coins: ${this.totalCoins}
    Status: ${this.status}
    Star Property:  ${this.hasStar}`)
    }

}

const firstPlayer = new braveSoul('Mario', 0,'small', false)

let intervalId

 
function randomRange() {
    const randomNumber = Math.floor(Math.random() *3)
    
    //console.log(randomNumber)  this checks if number 0, 1, 2 is getting ran. It is!
        switch (randomNumber) {
            case 0: 
            console.log(`this is supposed to call gothit function`)
                firstPlayer.gotHit()
                firstPlayer.print()
                break
            case 1: 
            console.log(`this calls gotPowerUp function`)
                firstPlayer.poweredUp()
                firstPlayer.print()
                break
            case 2:
                console.log(`this calls addCoin function`)
               firstPlayer.addCoin()
               firstPlayer.print()

           
        }
    }




const secondPlayer = new braveSoul ('Luigi', 0, false, 'Small')



const game = (player) => {
    intervalId = setInterval(() => {
        if (player.gameActive === true)
            randomRange(player) 
        else{
            clearInterval(intervalId)
        }   
   
    }  
    , 1000)

}       

game(firstPlayer)










    




