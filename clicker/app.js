//https://coursework.vschool.io/go-speed-clicker/
//.getItem() returns value; .setItem stores value

//Key names one word (not two)

//isNaN: Checks if value is not a number. Can't use conditional with ===NaN

let clickCount = parseInt(localStorage.getItem("ClickCount")) //Will work if local storage has key saved. But not work if it doesn't. New user
if (isNaN(clickCount)){
    localStorage.setItem("ClickCount", 0)
    clickCount = parseInt(localStorage.getItem('ClickCount'))
    console.log('thisIsRunning')
}
console.log(localStorage.ClickCount) 

let total= document.getElementById('counter')  //assigned at end of html to equal total coins overall 



const clicker = document.hello
    clicker.addEventListener('submit', (event) =>{
    event.preventDefault()
    let clik= parseInt(document.hello.hiya.value)
    
    clickCount += clik
    total.textContent = clickCount
    localStorage.setItem("ClickCount", clickCount)
    
})

    total.textContent =  localStorage.getItem("Click Count")

    localStorage.setItem("Click Count", clickCount)
