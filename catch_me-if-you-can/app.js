//1a & 1b
//If use && then both conditions must satisfy conditions to RUN. With ||, only one condition must satisfy to continue the throw error. 

const summary = (num1, num2) => {
    try {
        if (typeof num1 !=='number' || typeof num2 !=='number'){
            throw "Error: num 1 and num 2 can only be numerical values"
        }
        else {
            const sum = num1 + num2 
            return sum  
        }
        
    }
      
        
catch (err){
            return err
           
        }
// finally {
        //Will fire no matter the situation, so use if don't care about what fires here. Usually should be good to just use type and catch
        
//     }

}

const sum1 = summary('cat',2)  //KEY CONCEPT OF FUNCTIONS: if need to return a value then store as variable and then log it to console (below)
console.log(sum1)


//2a & 2b

const user = {
username: "sam", 
password: "123abc"
}

const login = (username, password) => {
    try{
    if(username !== password){
        throw "Error: Username and Password Must Match Each Other"
    }
    else {
        return ('login was successful')
    }
    

} 

catch(err){
    return err  
}


}

console.log(login(1,2))