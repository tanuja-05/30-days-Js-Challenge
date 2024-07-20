//Activity 1 : Template Literals
console.log("\nTask 1");
let pname="dodo"
let age=16
let person=`My name is ${pname} and i am ${age} years old`
console.log(person);

console.log("\nTask 2");
let mulLineStr=`Today is day 8 of Js challenge.
Today's challenge is about js ES6+ features.
and this is task-2.`
console.log(mulLineStr);


//Activity 2 : Destructuring
console.log("\nTask 3");
let arr=[1,2,3,4,5]
let [a , b] = arr
console.log(`a : ${a} , b : ${b}`);

console.log("\nTask 4");
const book = {
 title:"The story of TATA",
 author:"Peter Casey"
}
const {title,author} = book
console.log(`Book's title : ${title} , Book's author : ${author}`);


//Activity 3 : Spread and Rest Operators
console.log("\nTask 5");
//Spread = separte the values individually 
let array=[1,2,3,4,5]
let spreadArray=[...array,8,9,7]
console.log(spreadArray);

console.log("\nTask 6");
//Rest = take values and bunch them into form of array
function sum(...args) {
    let sum=0;
   for (const arg of args) {
         sum+=arg
   }
   return sum;
}
let result=sum(...array)
console.log(result);


//Activity 4 : Default Parameters
console.log("\nTask 7");
function product(a,b=1) {
    return a*b;
}
//passing both parameters
let productRes1=product(4,5);
console.log(productRes1);
// passing only one parameter
let productRes2=product(4);
console.log(productRes2);


//Activity 5 : Enhanced Object Literals
console.log("\nTask 8");
let cname="tata"
let price=400000
let model="safari"
let features = function () {
    console.log("India's safest car with 4.5/5 rating");
}
let fourWheeler={cname,price,model,features};
console.log(fourWheeler);
console.log(fourWheeler.features());

console.log("\nTask 9");
let key1='name'
let key2='rollno'
let key3='result'

let val1="tanuja"
let val2=75
let val3=true

const student={
    [key1]:val1,
    [key2]:val2,
    [key3]:val3
}
console.log(student);