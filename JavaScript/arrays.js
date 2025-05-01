console.log("arrays");

let num = [1,2,3,4,5]
// console.log(num)
// console.log(num.length);    //prints length

// console.log(num.pop()); //prints and delete last element
// console.log(num)

// console.log(num.push(60)) //push element to the last
// console.log(num)

// console.log(num.shift());   //pop first element
// console.log(num)

// console.log(num.unshift(100)) //inserting new element to the front
// console.log(num)

// let Arr2=[10,20,30];
// console.log(num.concat(Arr2)); //concatenating two arrays
// console.log(num);

// console.log(num.reverse()); //reverse the array

// console.log(num.sort());    //sorting the array;

// console.log(num.join()) //converting array into string
// console.log(num.join(" | ")) //can also give a seperater 

// for(let i=0;i<num.length;i++){  //looping through all indices
//     console.log("Element " + (i+1) +": "+ num[i]);
// }

// num.forEach((element) => { //for Each LOOP
//     console.log(`${element}`);
// });

for (const element of num) { //For Of LOOP
    console.log(element);
}


