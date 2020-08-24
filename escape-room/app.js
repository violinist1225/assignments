



//a method (Like createElement) is called with parenthesis () and a string inside.


//Example on creating a new paragraph elemen: var newP= document.createElement('p')
//newP.textContent = "It's a cool day"
//myList.append(newP) <--- Correct way: document.body.append(newP) Why? If put on 
//Mylist,it will be a part of list. So, body is before it. So, can use body so it goes //after list. document.body.append(newP)


//If wanted to center above font and make it larger, would do this: 
//newP.style.textAlign = "center"  ; newP.style.fontSize = "30px"

//Difference b/w append/appendchild: https://dev.to/ibn_abubakre/append-vs-appendchild-a4m



/* 
## Tasks:

1. Search Google to learn a little more about the difference between the `.append()` method and the `.appendChild()` method

2. What do you see as pros/cons of using `.createElement()` and `append()` vs. `.innerHTML`?

3. What happens if I create an element using `.createElement()` but don't use `.append()`?

4. How might you use a for loop in conjunction with the DOM methods for create elements?


*/