//https://coursework.vschool.io/multiple-array-methods-practice-1/

var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


function sortAgeName (arr) {
    const result = arr.filter((alphabet) => alphabet.age > 18)

    const sortedArr = result.sort(( a, b ) => {
        if ( a.lastName < b.lastName ){
        return -1;
        }
        if ( a.lastName > b.lastName ){
        return 1;
        }
        return 0;
    }) 

    return sortedArr.map((info) =>{
        return '<li>'+ info.firstName + ' ' + info.lastName + ' is ' + info.age + '</li>'
    }) 
}

console.log(sortAgeName(peopleArray))


