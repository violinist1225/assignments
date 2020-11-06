const form = document.theform
const inputElement = document.theform.title
const descriptionElem = document.theform.description
const pictureUrl = document.theform.picUrl      
const price = document.theform.price


const apiUrl = "https://api.vschool.io/mayapurcell/todo"

const listElem = document.getElementById("list")

form.addEventListener("submit", addTodo);
renderItems()

function addTodo(e) {
    e.preventDefault();
    //prevents page from refreshing 
    console.log(inputElement.value)
    const todoObj = {
        title: inputElement.value,
        description: descriptionElem.value,
        pictureUrl: pictureUrl.value,
        price: price.value 
            // variable stores information we want in the object - in this case 'title' 
    }
    inputElement.value = ""
    descriptionElem.value = ""
    pictureUrl.value = ""
    price.value = ""
        // clears out input after it's been captured in above line. Otherwise, if this step is not done, it will keep inputs repeating on the DOM.
        /* close, but this isn't what is preventing the repeats on the DOM, this just clears the input field so you can type in a new todo item without needing to delete the last one */
    axios.post(apiUrl, todoObj)
        //Unsure of the entirety of what the above line does. But, axios.post(a,t) grabs the axios link and gets its value to post. Then, ? 
        /* sends the new todo (which we made on lines 16-19) to the server using the post api call*/
        .then(() => renderItems()) /* this is triggered if the api post was successful - basically: if the API was successful THEN call this annonymous arrow function, which in turn calls our renderItems function. it passes in an argument which is an object containing info about the posting from the server, but we are not using it in our function so I omitted it.   */
        .catch(error => console.log(error))
        /* this is triggered if the api post failes. it receives info about the reason for the failure, which we log to the console */
}

function renderItems() {
    //This function is grabbing each item in array of objects and creating a list to show on DOM with properties.
    axios.get(apiUrl).then(response => {
            clearList();
            response.data.forEach(
                (itemObj) => {
                    createItem(itemObj)
                })
        })
        .catch(error => console.log(error))
}

function clearList() {
    while (listElem.childElementCount > 0) {
        //while the condition of the list having children is greater than 0, remove the firstchild from list. So, that the list doesn't repeat the list again. And can simply add on extra list item, that will be appended to end of list. 
        /* perfect */
        listElem.firstChild.remove()
    }
}

function createItem(itemObj) {
    console.log(itemObj)
    const newLi = document.createElement('li') //creates list item element
    const newP = document.createElement('p') //creates p element
    const checkbox = document.createElement('input') //creates checkbox witih input datatype
    newP.className = itemObj.completed ? "done" : "not-done" //creates class name in Javascript for p tag and assigns it to tertiary boolean. If item status is complted, then assign done or not done class on DOM. 
    checkbox.type = "checkbox" //makes checkbox type = checkbox, so default textbox won't be assigned. 
    checkbox.checked = itemObj.completed //if check box = checked, 
    checkbox.addEventListener("change", (e) => {
        axios.put(apiUrl + "/" + itemObj._id, { completed: !itemObj.completed })
            //any of the axios methods return a PROMISE, so then must use .then and .catch methods after each promise.
            //DOM reflects Server always
            //.Put updates server with new content. Takes 2 arguments: 1st is the url we want to change (specifically), 2nd: What to change content to? In this case, completed key -part of object on server is set to false.  Then .then method called. Which calls renderItems function (that updates the DOM) 
            .then((response) => {
                renderItems()
            })
            .catch((error) => {
                console.log(error)
            })
    })

    const deleteButton = document.createElement("button")
    newP.textContent = itemObj.title
    deleteButton.textContent = "Delete"
    deleteButton.style.backgroundColor = "yellow"
    const editButton = document.createElement("button")
    editButton.textContent = "Edit"
    editButton.addEventListener("click", e => {
        const newInputField = document.createElement("input")
        newP.style.display = "none" //hides p tag (newP created earlier). Since changing CSS Property, have to use Style Property in dot notation! 
        //STOPPED HERE 
    })
    deleteButton.addEventListener("click", (e) => {
        removeId(itemObj._id)
    })
    newLi.append(checkbox, newP, deleteButton)
    listElem.append(newLi);

    
}



function removeId(id) {
    axios.delete(`${apiUrl}/${id}`)
        //any of the axios methods return a PROMISE, so then must use .then and .catch methods after each promise.
        .then((response) => {
            renderItems();
        })
        .catch(error => console.log(error))
}



