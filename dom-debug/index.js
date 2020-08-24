a// Notes from What I learned in this Module:

//https://www.w3schools.com/js/js_htmldom.asp

// *Onchange is not needed typically in EventListeners. Click was preferred choice for
// functions in this assignment as user was clicking and getting input info 
// *Breakpoints in Sourcs tab are helpful to run specific lines of code to verify if they 
// are working...It is recommended to put a breakpoint 1 line after the line of code that is
// to be checked. And press Play button in debugger window to verify if working. If pauses, it's working.
// *In dev tools, hover over interested property and do a consile.dir(preferably) or console.log to 
// investigate further. During investigation, have to see specifically the location of
// interested property is located. To determine is have to use dot notation or other syntax to
// alingn code with.  




const colors = ["red", "blue", "green"]

//Onclick / Onchange is not needed b/c addevent listender has built in event
//listener, so just string of what trying to do is necessary. 

document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function createDropDown(){
    const dropDown = document.createElement("select") 
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("click", function(e){  //changed to click? 
        e.target.parentElement.style.backgroundColor = e.target.value
    })
    return dropDown
}





function createSubItem(e){
    const subItem = document.createElement("div")

    var subItemValue = document.getElementById("input").value
    subItem.textContent = 'subItemValue' //Investigate what subitemvalue is in console? I put quotes around subitemvalue?
    console.log(subItemValue)
    console.dir(subItemValue)
    
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}



//return means the value of the function = to variable 








//Original COPY BELOW 
// const colors = ["red", "blue", "green"]

// document.getElementById("add").addEventListener("onclick", function(e){
//     const subItem = createSubItem(e)
//     document.getElementById("list").appendChild(subItem)
// })

// function createDropDown(){
//     const dropDown = document.createElement("select")
//     for (let i = 0; i < colors; i++){
//         const option = createElement("option") 
//         option.innerHTML = colors[i]
//         option.value = colors[i]
//         dropDown.append(option)
//     }
//     dropDown.addEventListener("onchange", function(e){
//         e.target.parent.backgroundColor = e.target.value
//     })
//     return dropDown
// }

// function createSubItem(e){
//     const subItem = document.createElement("div")
//     var subItemValue = document.getElementById("input")
//     subItem.textContent = subItemValue
//     const dropDown = createDropDown()
//     subItem.appendChild(dropDown)
//     subItem.setAttribute("class", "subItem")
//     return subItem
// }


