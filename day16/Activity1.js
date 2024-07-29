//Task 1
function factorial(number) {
    if(number == 0 || number ==1){
        return 1;
    }
    return number*factorial(number-1);
}


//Task 2
function fibonacci(number) {
    if(number == 0){
        return 0;
    }
    if(number == 1){
        return 1;
    }
    return fibonacci(number-1)+fibonacci(number-2);
    
}


let testCases=5;
console.log("Factorial");
for (let i = 1; i <=testCases; i++) {
    let ansFact = factorial(i);
     console.log(`test case ${i}:\n factorial of ${i}`);
     console.log(ansFact);
}

console.log("\nFibonacci");
for (let i = 1; i <=testCases; i++) {
    let ansFib=fibonacci(i);
     console.log(`test case ${i}:\n ${i} th fibonacci number :`);
     console.log(ansFib);
}