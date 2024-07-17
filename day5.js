//Activity 1 : Function Declaration
console.log("Activity 1 : Function Declaration");
console.log("Task 1");
function evenOrOdd(num) {
    if(num%2==0){
        console.log("number is even : ",num);
    }
    else{
        console.log("number is odd : ",num);
    }
}
evenOrOdd(45);

console.log("\nTask 2");
function squareOfNum(num) {
    return num*num;
}
let num=56;
let squareResult=squareOfNum(num);
console.log(`Square of ${num} : ${squareResult}`);


//Activity 2 : Function Expression
console.log("\nActivity 2 : Function Expression");
console.log("Task 1");
let findMaxofTwoNums=function(first ,second) {
    if(first>second){
        return first;
    }
    else{
        return second;
    }
}
console.log("Maximum number is :",findMaxofTwoNums(4,5));

console.log(" \nTask 2 ");
let mergeString = function ( str1 , str2 ) {
    return str1.concat('' , str2 );
}
console.log(mergeString("Js-","challenge"));

//Activity 3 : Arrow Function 
console.log("\nActivity 3 : Arrow Function");
console.log("Task 1");
let sumofTwoNums = ( num1 , num2 ) => {
    return num1 + num2 ;
}
console.log("Sum of two number :",sumofTwoNums(30,32));

console.log("\nTask 2");
let isCharPresent = ( str , char ) => {
     return str.includes(char);
}
console.log(isCharPresent("Challenge",'a'));

//Activity 4 : Function Parameters and Default Values
console.log("\nActivity 4 : Function Parameters and Default Values");
console.log("Task 1");
function productOfNumbers( num1 , num2 = 4 ) {
    return  num1 * num2 ;
}
let productResult =productOfNumbers(9);
console.log("Product of two numbers : " ,productResult);

console.log("\nTask 2");
function greeting(name,age=35) {
    console.log(`Hello ${name} ! have a nice day.`);
}
greeting("Tanuja",21)

//Activity 5 : Higher-Order Functions 
console.log("\nActivity 5 : Higher-Order Functions ");
console.log("Task 1");
function hofDemo(fun,num) {
    console.log(fun(),num);
}
function printNum() {
    return "This function is being called by other function and number is :";
}
hofDemo(printNum,30);

console.log("\nTask 2");
function inputTwoFunc(fun1,fun2,val) {
    let resOne=fun1(val);
    let resTwo=fun2(resOne);
    return resTwo;
}
function cube(val) {
    return val*val*val;
}
function printFun(value) {
    return `The result is : ${value}`;
}
let result=inputTwoFunc(cube,printFun,2);
console.log(result);