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
    console.log(err);
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
    console.log(err);
}
finally{
        console.log("Task 3 execution is completed");
}

//Task 4
class customError extends Error{
    constructor(msg){
        super(msg)
        this.name = this.constructor.name
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
        console.log(err);
    }
    else{
        console.log("default error");
    }
}

//Task 5
