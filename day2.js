//activity 1 : Arithematic operations
console.log("\nArithematic operations");
let numberOne=35;
let numberTwo=10;
console.log(`result of  ${numberOne} + ${numberTwo} = ${numberOne+numberTwo}`);
console.log(`result of  ${numberOne} - ${numberTwo} = ${numberOne-numberTwo}`);
console.log(`result of  ${numberOne} * ${numberTwo} = ${numberOne*numberTwo}`);
console.log(`result of  ${numberOne} / ${numberTwo} = ${numberOne/numberTwo}`);
console.log(`result of  ${numberOne} % ${numberTwo} = ${numberOne%numberTwo}`);

// activity 2 : assignment operators
console.log("\nassignment operators");
let valueOne=10;
let valueTwo=3;
valueTwo+=valueOne;
console.log(`valueTwo ${valueTwo}`);
let valueThree=5;
valueOne-=valueThree;
console.log(`valueOne ${valueOne}`);

//activity 3: comparison operator
console.log("\ncomparison operator");
console.log(valueOne>valueTwo);
console.log(valueOne<valueTwo);
console.log(valueOne>=valueTwo);
console.log(valueOne<=valueTwo);
console.log(valueOne==valueTwo);
console.log(valueOne===valueTwo);

//activity 4 : logical operators
console.log("\nlogical operators");
console.log(valueOne>valueTwo && valueOne<valueThree);
console.log(valueOne<valueTwo || valueOne>valueThree);
console.log(valueOne!=valueTwo);

//activity 5 : Ternary operator
console.log("\n Ternary operator");
let number =-5;
let result=(number<0)? "less than zero":"greater than zero";
console.log(number,result);




