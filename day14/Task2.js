class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    updateAge(age){
        this.age=age;
        console.log(`Your age is ${this.age}`);
    }
}
const personOne = new Person('tanuja',21)
personOne.updateAge(25);