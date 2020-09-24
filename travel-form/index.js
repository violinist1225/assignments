// https://coursework.vschool.io/travel-form/

const form = document.genderForm
    form.addEventListener('submit', (event) =>{
    event.preventDefault()
    console.log(form.gender.value)
})

const title = document.identity
    title.addEventListener('submit', (event) =>{
    event.preventDefault()
    console.log(title.nameOne.value)
})




const locationForm = document.place
    place.addEventListener('submit', (event) =>{
    event.preventDefault()
    console.log(place.vacation.value)
})


const foodieForm = document.foodie
let checkedInputs = []
    foodieForm.addEventListener('submit', (event) =>{
    event.preventDefault()

  
})


const submitButton = document.getElementById('submitOne')
    submitButton.addEventListener('click', (event) =>{
    event.preventDefault()
    const foodieForm = document.foodie
  
    let checkedInputs = []
    for(i=0; i < foodieForm.food.length; i++){
        if(foodieForm.food[i].checked){
            checkedInputs.push(foodieForm.food[i].value)
        }
    }
    console.log(checkedInputs)

    alert(title.nameOne.value + " " + form.gender.value + " " + place.vacation.value + checkedInputs)
})

//submit is used mostly to submit form data....but button is different. 

let bodyColor = document.body.style.backgroundColor = "yellow"






