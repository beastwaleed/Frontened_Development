let a = "red";
let b = "yellow";
let c = "blue";
let d = "brown";
let e = "purple";
let f = "tomato";
let g = "orange";
let h = "pink";
let i = "gray";
let j = "green";

function randomColor() {
    let color;
    let random = Math.floor(Math.random() * 9) + 1
    if (random == 1) {
        color = a;
    }
    else if (random == 2) {
        color = b;
    }
    else if (random == 3) {
        color = c;
    } 
    else if (random == 4) {
        color = d;
    } 
    else if (random == 5) {
        color = e;
    } 
    else if (random == 6) {
        color = f;
    } 
    else if (random == 7) {
        color = g;
    }
    else if (random == 8) {
        color = h;
    } 
    else if (random == 9) {
        color = i;
    }
    return color;
}

let boxes = document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; i++) {
    let color = randomColor();
    boxes[i].style.backgroundColor = color;
    let fontColor = randomColor();
    boxes[i].style.color = fontColor;
}