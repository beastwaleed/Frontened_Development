console.log("Faulty Calculator");

function sub(a, b){
    return a - b;
}

function add(a, b){
    return a+b;
}

function mul(a, b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function expo(a ,b){
    return a**b;
}

let num1 = 5;
let num2 = 2; 

if(Math.random()<0.1){
    console.log("Addition: ",sub(num1, num2));
    console.log("Subtraction: ",div(num1, num2));
    console.log("Multiplication: ",add(num1, num2));
    console.log("Division: ",expo(num1, num2));
}

else{
    console.log("Addition: ",add(num1, num2));
    console.log("subtraction: ",sub(num1, num2));
    console.log("multiplication: ",mul(num1, num2));
    console.log("division: ",div(num1, num2));
    console.log("exponential: ",sub(num1, num2));

}