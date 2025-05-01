// console.log("Learning Conditionals");

// //arithmetic operators
// let a = 2;
// let b = 4;

// console.log(a+b) //addition
// console.log(a-b) //subtraction
// console.log(a*b) //multiplication
// console.log(a/b) //division
// console.log(a**b) //power


//comparison operators
// let x = 5, y = 10;
// console.log(x == y);   // false
// console.log(x === 5);  // true
// console.log(x != 10);  // true
// console.log(x > y);    // false
// console.log(x < y);    // true
// console.log(x >= 5);   // true
// console.log(x <= 10);  // true

// console.log("5" == 5); //true because it will only compare values
// console.log("5" === 5); //false because it will compare value and data type
// console.log("5" === "5"); //true 


//loops uncomment lines from 32 - 66

////basic for loop
// for(let i=0;i<5;i++){
//     console.log(i);
// }

////for-in loop (used for objects)
// let person = {
//     name : "Waleed",
//     age: 15,
//     city: "Karachi"
// };

//// for(let key in person){
//     console.log(key, person[key]);
// }

////for-of loop(for arrays or strings)
// let name="waleed";
// for (const c of name) {
//     console.log(c);
// }

////while loop
// let i =10;
// while(i>0){
//     console.log(i);
//     i--;
// }

////do-while loop
// let i =10;
// do{
//     console.log(i);
//     i++;
// }
// while(i<15);

//functions ==> uncomment lines from 69 - 894
// function printingInfo(name) {
//     console.log(name + " is a good boy");
// }
// printingInfo("Waleed");

// //return from function /////
// function sum(a, b){
//     return a+b;
// }
// result = sum(2,8);
// console.log(sum(4,4));
// console.log("The sum of numbers is", result);

// //optional value parameter ////
// function sumthree(a, b, c=5){
//     console.log(a+b+c);
// }

// sumthree(2,8);
// sumthree(3,3,3); //custom optional value in parameter passing

// //arrow function
// const square = (n) => {
//     console.log(n**2);
// }
// square(2);

// ////function for finding max of three numbers
// function maxOfThree(a, b, c) {
//     if (a > b && a>c) {
//             console.log(a + " is maximum");
//     }
//     else if (b > a && b>c) {
//             console.log(b + " is maximum");
//     }
//     else {
//             console.log(c + " is maximum")
//     }
// }
// maxOfThree(10,20,30);

