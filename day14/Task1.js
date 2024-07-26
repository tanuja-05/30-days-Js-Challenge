class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greeting(){
        console.log(`Hello there ! my name is ${this.name}.I am ${this.age} years old`);
    }
}
const personOne = new Person('tanuja',21)
personOne.greeting()