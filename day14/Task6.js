class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greeting(){
        console.log(`Hello there ! my name is ${this.name}.I am ${this.age} years old`);
    }
}

class Student extends Person{
    static countStudents=0;
    constructor(name,age,stId){
        super(name,age)
           this.stId=stId
           Student.countStudents++;
    }
    myId(){
        console.log(`${this.name} your Id is ${this.stId}`);
    }
}

let s1 = new Student('Raj',16,21)
let s2 = new Student('Ram',17,22)
let s3 = new Student('Raju',18,24)
let s4 = new Student('sham',19,27)
let s5 = new Student('dhyan',13,29)

console.log(`No of students are ${Student.countStudents}`);