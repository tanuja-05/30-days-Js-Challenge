//Task 1
let promiseOne = new Promise((resolve,reject) => {
    setTimeout(() => {
          console.log("This is Task 1 of day11 logged after 2 sec");
          resolve()
    },2000)
})

//Task 2
let promiseTwo = new Promise((resolve,reject) => {
    setTimeout(() => {
          console.log("This is Task 2 of day11 rejecting a promise after 2 seconds");
          reject("Some error occurred Task 2")
    },2000)
})
promiseTwo
.then((msg) =>{
    console.log(msg);
})
.catch((err) => {
    console.log(err);
})

//Task 3
const promiseThree = new Promise((resolve,reject) => {
    setTimeout(() =>{
        let error=false
        if(!error){
            resolve({stName:"tanuja", rollNo:73,grade:"A"})
        }
        else{
            reject("ERROR !! ")
        }
    },2000)
})
promiseThree
.then((studentData) => {
    console.log(studentData);
    return studentData;
})
.then((stData) => {
    console.log(`Student Name : ${stData.stName}`);
    return stData.grade;
})
.then((studentGrade) =>{
    console.log(`Student Grade : ${studentGrade}`);
})
.catch((err) => {
    console.log("some error occurred",err);
})

//Task 4
const promiseFour=new Promise((resolve,reject) => {
    setTimeout(() => { 
    let err=false
    if(!err){
        resolve({userName:"Tanuja", userAge:21})
    }
    else{
        reject("Some error Occurred in Promise Four")
    } 
       },4000) 
})
async function consumePromiseFour() {
   let response = await promiseFour
   console.log("Response of promise Four consumed by the async fn :",response);  
}
consumePromiseFour()

//Task 5
const promiseFive=new Promise((resolve,reject) => {
    setTimeout(() => { 
    let err=true
    if(!err){
        resolve({userName:"Tanu", userAge:20})
    }
    else{
        reject("Some error Occurred in Promise Five")
    } 
       },3000) 
})
async function consumePromiseFive() {
   try{ 
   let response = await promiseFive
   console.log("Response of promise Four consumed by the async fn :",response);  
    }
    catch(err){
        console.log(err);
    }
}
consumePromiseFive()

// Task 6
// const apiUrl='https://jsonplaceholder.typicode.com/users'
// fetch(apiUrl)
// .then((response) => {
//  return response.json()
// })
// .then((data) => {
//     console.log("Task 6 :",data);
// })
// .catch((err) => {
//     console.log("Error in fetching the api",err);
// })

//Task 7
async function fetchUsingAsync() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        console.log("Task 7 :",data);
    }
    catch(err){
        console.log("Error occurred in task 7");
    }  
}
// fetchUsingAsync()


//Task 8
const prom1=new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve("promise 1 fullfilled")
    },2000)
})
const prom2=75

const prom3=new Promise((resolve,reject) => {
    setTimeout(() =>{
          resolve("hello")
    },2000)
})
Promise.all([prom1,prom2,prom3]).then((data) =>{
    console.log("Task 8:",data);
})
.catch((err) => {
  console.log(err);
})

//Task 9
const promOne=new Promise((resolve,reject) => {
    setTimeout(resolve,200,'first promise')
})

const promTwo=new Promise((resolve,reject) => {
    setTimeout(resolve,300,'second promise')
})

Promise.race([promOne,promTwo]).then((val)=> {
    console.log("Task 9 :",val);
})