//activity 1:If-else statements
console.log("\nif-else statements ");
function checkNumber(val) {
if(val < 0){
    console.log("negative number :",val);
}
else if(val == 0){
    console.log("number is zero :",val);
}
else if(val > 0){
    console.log("positive number :",val);
}
    
}
let value=-16540;
checkNumber(value);

function isEligible(age) {
    if(age < 18){
        console.log("you are not eligible to vote");
    }
    else if(age >= 18){
        console.log("you are eligible to vote");
    }
}
let age=23;
isEligible(age);

//activity 2 : nested if-else statements
console.log("\nNested if-else statements ");
function checkLargestnumber(num1,num2,num3) {
    if(num1 > num2 ) { 
        if(num1 > num3 ){
          console.log("number 1 is largest : ",num1);
        }
        else if(num1<num3){
            console.log("number 3 is largest : ",num3);
        }
    }
    else{
        if(num2>num1){
            if(num2>num3){
                console.log("number 2 is largest :",num2);
            }
        }
    }
}
let num1=10;
let num2=1;
let num3=79;
checkLargestnumber(num1,num2,num3);

//activity 3 : switch case
console.log("\nSwitch cases");
function determineDay(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thrusday");
            break;
        case 5:
            console.log("Friday");
            break;
         case 6:
            console.log("Saturday");
            break;
        case 6:
             console.log("Sunday");
             break;
    
        default:
            console.log("enter valid day Number");
            break;
    }
    
}
let dayNumber=7;
determineDay(dayNumber);

function determineGrade(score) {
    switch (true) {
        case (score>=90) :
               console.log("Your grade is A");
               break;
        case (score>=70 && score<90) :
                console.log("Your grade is B");
                break;
        case (score>=60 && score<70) :
                console.log("Your grade is C");
                break;
        case (score>=50 && score<60) :
                console.log("Your grade is D");
                break;
         case (score<50) :
                console.log("Your grade is F");
                 break;
        default:
            console.log("enter valid marks");
            break;
    }
    
}
let marks=65;
determineGrade(65);

//activity 4 : Conditional operator
console.log("\nConditional operator");
let values=23;
let result=(values%2==0)? "even":"odd";
console.log(`${values} is ${result}`);


//activity 5: Combining conditions
console.log("\nCombining conditions");
function checkLeapyear(year) {
    if(year%4==0 && year%100!=0 || year%400==0){
                console.log(year,"is Leap year");
             
        
    }
    else{
        console.log(year,"is not a Leap year");
    }
}
let year=2000;
checkLeapyear(year);
