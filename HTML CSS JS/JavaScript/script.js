
// //targeting using classname
// let boxes = document.getElementsByClassName("box");
// boxes[0].style.backgroundColor = "red";


// ////targeting using id name
// let box = document.getElementById("item");
// box.style.backgroundColor = "Purple";


/////Targeting using Tagname:

// let tag_div = document.getElementsByTagName("div");

// for(let i=0;i<tag_div.length;i++){
//     tag_div[i].style.color =  "red"
//     tag_div[i].style.fontSize = "25px";
// }

// // tag_div[0].style.fontWeight = 'bold';


// /////Query Selector
// let box = document.querySelector(".box"); //will only return the very first element using "box" class
// console.log(box);

///////Query Selector All:

// let box = document.querySelectorAll(".box");
// box.forEach(element => {
//     element.style.backgroundColor = "green"
//     element.style.color= "white"
//     element.style.border =  "5px solid black"
// });



////Random Color generator for Background 

// let a = "red";
// let b = "yellow";
// let c = "blue";
// let d = "brown";
// let e = "purple";
// let f = "tomato";
// let g = "orange";
// let h = "pink";
// let i = "gray";
// let j = "green";

// function randomColor() {
//     let color;
//     let random = Math.floor(Math.random() * 9) + 1
//     if (random == 1) {
//         color = a;
//     }
//     else if (random == 2) {
//         color = b;
//     }
//     else if (random == 3) {
//         color = c;
//     } 
//     else if (random == 4) {
//         color = d;
//     } 
//     else if (random == 5) {
//         color = e;
//     } 
//     else if (random == 6) {
//         color = f;
//     } 
//     else if (random == 7) {
//         color = g;
//     }
//     else if (random == 8) {
//         color = h;
//     } 
//     else if (random == 9) {
//         color = i;
//     }
//     return color;
// }

// let boxes = document.getElementsByClassName("box");

// for (let i = 0; i < boxes.length; i++) {
//     let color = randomColor();
//     boxes[i].style.backgroundColor = color;
//     let fontColor = randomColor();
//     boxes[i].style.color = fontColor;
// }


