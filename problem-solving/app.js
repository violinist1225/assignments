// https://coursework.vschool.io/problem-solving-practice/

//1.

//Original Response 

// function largestInArray(...num){
//     let value = 0
//     for(let i = 0; i < largestInArray.length; i++){
//         if (num[i] > value){
//             value = num[i] 
//         }
//     } 
//     return value 
// }

// console.log(largestInArray(1, 2, 3, 5, 9))

//Redo correctly:  replace i<largestinarray to i<num.length

function largestInArray(...num){
    let value = 0
    for(let i = 0; i < num.length; i++){
        if (num[i] > value){
            value = num[i] 
        }
    } 
    return value 
}

console.log(largestInArray(1, 2, 3, 5, 9))


