//activity 1: variable declaration
var variableOne=30;
console.log(`variableOne = ${variableOne}`);

let variableTwo=" days js challenge";
console.log(`variableTwo = ${variableTwo}`);

// activity 2 : constant declaration
const variableThree=true;
console.log(variableThree);

//activity 3: data types
let days=30;
let challengeName="js challenge";
let ischallengeAccepted=true;
let objectExample={
    id:45,
    name:"tanuja",
}
let arrayExample=["numbers",1,2,3];
console.log(`value = ${days}, dataType is `,typeof days);
console.log(`value = ${challengeName} , dataType is `,typeof challengeName);
console.log(`value = ${ischallengeAccepted} , dataType is `,typeof ischallengeAccepted);
console.log(`value = ${objectExample} , dataType is `,typeof objectExample);
console.log(`value = ${arrayExample} , dataType is `,typeof arrayExample);

//activity 4 : resassigning variables
let firstValue=15;
console.log(firstValue);
firstValue=30
console.log(firstValue);

// activity 5 : understanding const
const firstdec=30
console.log(firstdec);
// firstdec=15
// console.log(firstdec); 
// observation : it gives error of TypeError: Assignment to constant variable. since it is constant so it can't be reassigned.

