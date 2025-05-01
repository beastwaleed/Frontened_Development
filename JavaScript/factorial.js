console.log("Factorial Calculator")

function factorial(num) {
    let size = num;
    if (num == 0 || num == 1) {
        return 1;
    }
    else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result = result * i;
        }
        return result;
    }
}

console.log(factorial(6)); 
