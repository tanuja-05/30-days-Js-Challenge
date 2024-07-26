class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    static updateAge(age){
        this.age=age;
        console.log(`Your age is ${this.age}`);
    }
}

Person.updateAge(25);