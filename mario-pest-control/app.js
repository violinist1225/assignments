let total = 0 //global variable increases when it's added. Will automatically be assigned to DOM

let totalCoin= document.getElementById('title1')  //assigned at end of html to equal total coins overall 

const form = document.goomba


form.addEventListener('submit', (event) =>{
    event.preventDefault()
    let goombasCaught= parseInt(document.goomba.gcaught.value)  //user's input 
    let result = goombasCaught * 5
    total += result 
    totalCoin.textContent = total  //shows up on DOM

})

//return gives a specific result back. 

const formBob = document.bob
    formBob.addEventListener('submit', (event) =>{
    event.preventDefault()
    let bobCaught = parseInt(document.bob.bobcaught.value)
    let result = bobCaught * 7
    total += result
    totalCoin.textContent = total   
})



const formCheep = document.cheep
    formCheep.addEventListener('submit', (event) =>{
    event.preventDefault()
    let  cheepCaught = parseInt(document.cheep.cheepy.value)
    let result = cheepCaught * 11
    total += result 
    totalCoin.textContent = total 
})

