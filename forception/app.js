

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"




function forception(arr, str){

    var array = []
    var split1 = str.toUpperCase().split('') //split returns an array
    for(i = 0; i < arr.length; i++){
        var name = arr[i] + ':'   //concatenating: combine 2 strings. declared variable to put in ///manipulating value...strings can't be changed; only can change how variables point to them (immutable) Can't change a string in and of itself. Have to declare as a variable to do it!
        array.push(name)
        for(j = 0; j < split1.length; j++){
            array.push(split1[j])
        }
    }
    //console.log(count)
    return array
}

console.log(forception(people,alphabet))

// array =[]
// split1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// i = 0
//     name = people[i] + ':' = people[0] + ':' = "Jon" + ':' = "Jon:"
//     array.push(name) = array.push("Jon:")
//     array = ["Jon:"]
//     j = 0
//         array.push(split1[j]) = array.push(split1[0]) = array.push("A")
//         array = ["Jon:", "A"]



//         j++ = j + 1 = 1   is j < split1.length = 26?   yes
//             array.push(split1[j]) = array.push(split1[1]) = array.push("B")
//             array = ["Jon:", "A", "B"]
//             array = ["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]



// i++ = i + 1 = 1 is i < arr.length = 5? yes
//     name = people[i] + ':' = people[0] + ':' = "Jacob" + ':' = "Jacob:"
//     array.push(name) = array.push("Jacob:")
//     array = ["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:"]
//     j = 0
//         array.push(split1[j]) = array.push(split1[0]) = array.push("A")
//         array = ["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A"]
//         j++ = j + 1 = 1   is j < split1.length = 26?   yes
//         array = ["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// i++ = i + 1 = 1 is i < arr.length = 5? yes





  






//create nested loops 


// Need to: 1. Upper case all alphabet 2. add colon after each name. 
// 3. Make sequence so that each name has alphabet affer it. 4. All in one array


// https://coursework.vschool.io/for-within-for-within-for

// // Output: 
// ["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


//https://scrimba.com/c/cqRr8bUR

// Nested for loops syntax of curly brackets below:

// function forception(arr1, arr2) {
//     for (i=0; i < people.length; i++) {
//         for (j=0; j < split1.length; j++) {
//         }
//     }
// }

//Note: Remember, you CAN'T use SAME variables outside of a function and then in parameters. 


var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"


//Original Answer that is incorrect below....

// function forception(people, alphabet){

//     var array = []
//     var split1 = alphabet.toUpperCase().split('')
//     //return split1
//     for(i=0; i < people.length; i++){
//         for(j=0; j < alphabet[j].length; j++)  
// } }
    

// console.log(forception(people, alphabet))
