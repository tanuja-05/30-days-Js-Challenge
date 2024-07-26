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
    constructor(name,age,stId){
        super(name,age)
           this.stId=stId
    }
    myId(){
        console.log(`${this.name} your Id is ${this.stId}`);
    }
}

let s1 = new Student('Raj',16,21)
s1.myId()