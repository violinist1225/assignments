
//  form.addEventListener("submit", function(event){
//         event.preventDefault()

// created elements need to be attached to the html in some way. listItems.append('liNew') // appended liNew to listItems, but how is listItems associated with your html?

// Global VS. Local Scope (local to functions). Can use var button again b/c line 18 exists only inside that function. So can use again.


// console.log(form.title.value)
// //This tests if it works. 
// //Concept of this assignment 



var list = document.getElementById('list')

var form = document.addItem 
// Can access document directly like this with forms only. The NAME of form (not id)

function editItem(textBox) {
    var button = document.createElement('button')
    button.textContent = 'edit'
    button.addEventListener('click', function(e){
        textBox.textContent = form.title.value   
     })

    return button 

}



function deleteItem(parent, child){
    var button = document.createElement('button')
    button.textContent = 'delete'
    button.addEventListener('click', function(e){
        // parent.removeChild(child) can work same as child.remove()
        child.remove()
    })
    //parent is list; item  is child
    return button
}

// e.parentNode.parentNode.removeChild(e.parentNode)






    form.addEventListener('submit', function(e) {
        event.preventDefault()

        var item = document.createElement('li')
        item.style.backgroundColor = "yellow"
        var itemName= document.createElement('div')
        itemName.textContent = form.title.value
        
        console.log(form.title.value) //? How it was derived? 

        
        item.append(itemName)
        item.append(editItem(itemName))
        item.append(deleteItem(list, item))
        list.append(item)
        

    })


   
    




// var button = document.createElement('button')












    
