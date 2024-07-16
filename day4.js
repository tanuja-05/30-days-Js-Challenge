//Activity 1: For loop
console.log("\nActivity 1 : For Loop");
console.log("Task 1");
function printOnetoTen(){
    for (let i = 1; i <=10; i++) {
        console.log(i+" ");
    }
}
printOnetoTen();

console.log("\nTask 2");
function printMulof5(){
    for (let i = 1; i <= 10; i++) {
        console.log(`5 x ${i} = ${5*i}`);
    }
}
printMulof5();

//Activity 2:While Loop
console.log("\nActivity 2 : While Loop");
console.log("Task 1");
function sumOnetoTen() {
    let sum=0;
    let i=1;
    while(i<=10){
       sum+=i;
       i++;
    }  
    return sum;
}
let result=sumOnetoTen();
console.log(`sum from 1 to 10 => ${result}`);

console.log("\nTask 2");
function printTentoOne() {
    let i=10;
    while(i>=1){
      console.log(i+" ");
      i--;
    }  
}
printTentoOne();

//Activity 3: Do..While Loop
console.log("\nActivity 3 : Do...While Loop");
console.log("Task 1");
function printOnetoFive() {
    let i=1;
    do {
        console.log(i+" ");
        i++;
    } while (i<=5);
}
printOnetoFive();

console.log("\nTask 2");
function calculatefactorial(number) {
    if(number==0 || number==1){
        return 1;
    }
    let fact=1;
    do {
        fact*=number;
        number--;
    } while (number>=1);
    return fact;
}
let factResult=calculatefactorial(5);
console.log(`factorial of 5 is ${factResult}`);


//Activity 4: Nested Loops
console.log("\nActivity 4 : Nested Loop");
console.log("Task 1");
function printStar(length) {
    for (let i = 1; i <=length; i++) {
         for (let j = 1; j <=i; j++) {
             process.stdout.write("* ");
         }
         console.log();
    }
}
printStar(5);

//Activity 5 : Loop control statements
console.log("\nActivity 5 : Loop control statements");
console.log("Task 1");
function skipNumber(num) {
    for (let i = 1; i <=10; i++) {
         if(i==5){
            continue;
         } 
         console.log(i+" ");
    }
}
skipNumber(5);

console.log("\nTask 2");
function stopLoopAtNumber(num) {
    for (let i = 1; i <=10; i++) {
         if(i==7){
            break;
         } 
         console.log(i+" ");
    }
}
stopLoopAtNumber(7);

