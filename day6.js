//Activity 1 : Array Creation and Access
console.log("Activity 1 : Array Creation and Access");

console.log("\nTask 1");
let arrNums = [1,2,3,4,5]
//method 1 to log
console.log("Method 1 :");
console.log(arrNums);
//method 2 to log
console.log("Method 2 :");
for (let i = 0; i < arrNums.length; i++) {
    console.log(arrNums[i] + " ");
}

console.log("\nTask 2");
function logFirstLastElements(arr) {
    console.log(`First Element : ${arr[0]}`);
    console.log(`Last Element : ${arr[arr.length-1]}`);
}
logFirstLastElements(arrNums);



//Activity 2 : Array Methods
console.log("\nActivity 2 : Array Methods");

console.log("\nTask 3");
//push : add element in the last of array
function insertElement(arr) {
    return arr.push(30);
}
console.log(arrNums);
let resultPush=insertElement(arrNums);
console.log(`Array after element inserted : ${arrNums}`);

console.log("\nTask 4");
//pop : remove element from the last in the array
function removeElement(arr) {
    return arr.pop();
}
console.log(arrNums);
let resultPop=removeElement(arrNums);
console.log(`Array after element removed : ${arrNums}`);

console.log("\nTask 5");
// shift : used to remove first element from the array
function usingShift(arr) {
    return arr.shift();
}
console.log(arrNums);
let resultShift=usingShift(arrNums);
console.log(`Array after element removed : ${arrNums}`);

console.log("\nTask 6");
// Unshift :  add  element in first place in the array
function usingUnshift(arr) {
    return arr.unshift(45);
}
console.log(arrNums);
let resultUnshift=usingUnshift(arrNums);
console.log(`Array after element added : ${arrNums}`);



//Activity 3 : Array Methods (Intermediate)
console.log("\nActivity 3 : Array Methods (Intermediate)");
/*
map() : transform elements of array using fn and creates a new array with transformed elements
does not modify the original array.

Syntax :  map(callbackFn)
         map(callbackFn,thisArg)

const newArray = array.map(item => transformedValue);

*/
console.log("\nTask 7");
let arr1=[2,4,6,8];
let arrMap=arr1.map((x) => x*2);
console.log(arrMap);

console.log("\nTask 8");
/*
filter() :  creates a new array that meets a specific condition

Syntax : filter(callbackFn)
        filter(callbackFn,thisArg)

const filteredArray = array.filter(item => condition);

*/
let arr2=[1,2,4,66,43,23,78,65,43,23]
let arrayFilter=arr2.filter((x) => x%2==0);
console.log(arrayFilter);

console.log("\nTask 9");
/*
reduce() :  combines all elements of array into a single value

Syntax :  reduce(callbackFn)
          reduce(callbackFn, initialValue)

const result = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

*/
let arr3=[1,2,4,5];
let totalSum=arr3.reduce(
    (sum,value) => sum+value
);
console.log(totalSum);



//Activity 4 : Array Iteration
console.log("\nActivity 4 : Array Iteration");

console.log("\nTask 10");
function printArrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
       console.log(arr[i]);
    } 
}
printArrayElements(arr1);

console.log("\nTask 11");
function printArrayElements2(arr) {
   arr.forEach(element => {
    console.log(element);
   });
}
printArrayElements2(arr1);



//Activity 5 : Multi-dimensional Arrays
console.log("\nActivity 5 : Multi-dimensional Arrays");
console.log("\nTask 11");
let multiArray=[[1,2,3],[4,5,6],[7,8,9]];
console.log(multiArray);


console.log("\nTask 12");
function printMultiArray(arr) {
    arr.forEach(element => {
     console.log(element);
  });
}
printMultiArray(multiArray);



