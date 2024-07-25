//Task 1
function isNumberValid(val) {
    if(val>18){
        console.log("number is valid");
    }
    else{
        throw new Error("ERROR ! number is invalid")
    }
}
try
{
    isNumberValid(12)
}
catch(error)
{
    console.log(error);
}

//Task 2
function division(num,deno) {
     if(deno!=0){
        console.log(num/deno);
     }
    else{
        throw new Error("Division by 0")
    }
}
try{
    division(2,0)
}
catch(err){
    console.error(err);
}

// Task 3
function exampleFinally() {
    console.log("This function is of Task 3");
    throw new Error("Some error occurred in Task 3")
}
try{
    exampleFinally()
}
catch(err){
    console.error(err);
}
finally{
        console.log("Task 3 execution is completed");
}

//Task 4
class customError extends Error{
    constructor(msg){
        super(msg)
        this.msg=this.constructor.msg
    }
}
function customErr() {
    throw new customError("This is a custom error")
}
try{
   customErr()
}
catch(err){
    if( err instanceof customError){
        console.error(err.message);
    }
    else{
        console.err("default error");
    }
}

//Task 5
class emptyStringError extends Error{
    constructor(msg){
        super(msg)
        this.msg="Invalid input string error"
    }
}
function isInputValid(str) {
    if(str.trim()===""){
        throw new emptyStringError("Input is empty enter some value")
    }
    return true;
}
try{
    const input="        ";
    isInputValid(input)
    console.error("Input Validated");
}
catch(err){
    if(err instanceof emptyStringError){
        console.log("validation error :",err.msg);
    }
    else{
        console.error("some error occurred in validating input string");
    }
}

//Task 6
const promOne = new Promise((resolve,reject) => {
    setTimeout(() => {
       const str=24
       if(str==='string'){
            resolve("Valid string of Task 6")
       }
       else{
        reject("This promise is rejected : Invalid String | Task 6")
       }
    }, 2000);
})
.then((msg) => {
    console.log(msg);
})
.catch((err) => {
    console.log(err);
})


//Task 7
const promTwo = new Promise((resolve,reject) => {
    setTimeout(() => {
       const isIdMatch=false
       if(isIdMatch){
            resolve("Verified user")
       }
       else{
        reject("Rejected : your id did not matched | Task 7")
       }
    }, 3000);
})
async function verifyIdPromTwo() {
    try{
        let response =  await promTwo
        console.log(response);
    }
    catch(error){
        console.error(error);
    }      
}
verifyIdPromTwo()

//Task 8
let url='https://examplefectch10Url.com'
fetch(url)
.then((response) => {
    console.log("Task 8 fetch response :",response);
})
.catch((error) => {
    console.error("There was some error occurred during fetching | Task 8",error);
})

//Task 9
async function fetchUrl() {
    try{ 
     let response = await fetch('https://examplefectch10Url.com')
     console.log(response);
    }
    catch(error){
        console.error("Could fetch the url | Task 9",error);
    }
}
fetchUrl()