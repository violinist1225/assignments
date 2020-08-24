var employees = []


function PrintEmployeeForm(name, jobTitle, salaryInDollars, status = 'fullTime'){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salaryInDollars
    this.status = status


    employees.push(this)
    console.log(employees)
}


var employee = new PrintEmployeeForm('sarah', 'teacherAssistant', 35,)

var employee = new PrintEmployeeForm('joe', 'teacher', 50, 'partTime')

var employee = new PrintEmployeeForm('christy', 'courseCreator', 45, )




// Constructor Functions - functions that build objects of the same shape.

// Constructor Functions can be "instantiated" using the "new" keyword to create these objects.

// NOTES OF WHAT I LEARNED RECAP (READ FIRST):
// Recap of what I learned:
// Mistakes Corrected:
// * empty array of employees put at the beginning of code as I had it within the constructor function, so gave employees limited scope. Outside of the function, it now has global scope so more employees can be added at any time.
// *Within parameters of functions, they can be set to a default number/string, etc. This is how the status could be set as a default.
// *The push method is used at end for the empty employee array, but the trick was figuring out what got pushed into the array? It would be the 'this' method as it contains all the attributes of the object, Employee........


//Instatiates means to make instance of something (building a factory with constructor functions)

//Keyword to use in objects to refer to themselves????? would be THIS










//for functions, can hardcode PARAMETERS EQUAL TO SOMETHING AS A DEFAULT. 

//this.honkSound = honkSound (Would be in constructor function itself of properties of what it IS)
// Car.prototype.honk = function(){
//     console.log(this.honkSound)
//Above is a better way to store function ONCE in memory with prototype being a DOING keyword. Explains
//What object DOES

//object.create(); need to set as varaible. var phone = object.create(iphone3)


//Object.setPrototypeOf(iPhone, smartPhone); smart Phone is now prototype to iPhone
//// Create a new object and set its prototype to `electronicDevice`
//var smartPhone = Object.create(electronicDevice);

//The word THIS is important with constructor functions. so that data refers to itself

//Read this first prototypes: https://coursework.vschool.io/prototypes/

//https://coursework.vschool.io/employee-records/

//https://scrimba.com/c/cEe88eUJ

//https://coursework.vschool.io/mutability-and-value-types/
//https://coursework.vschool.io/javascript-constructor-functions/



// Immutability. What variable POINTS to can change but not the actual value in memory.
// Example: var name = maya 
// name[0] = 'f'
// console.log(name) would still give what? ---------->>>>>>>>>>>>>>>>>>>>>>>>> maya b/c is immutable
// If wanted to change name to mayaf, would need to do: name = 'mayaf', which is called REASSIGNING
// THE VARIABLE. 

//MUTABLE DATA TYPES are passsed by reference. IMMUTABLE are passed by value. 

//REMEMBER IN JAVASRIPT, EVERYTHING IS AN OBJECT, EVEN with console.log(typeOf [1,2,3,4]); would still say
// is object (not array)! 