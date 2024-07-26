class Person{
    constructor(FirstName,LastName,age){
        this.FirstName=FirstName;
        this.LastName=LastName;
        this.age=age;
    }
    greeting(){
        console.log(`Hello there ! my name is ${this.name}.I am ${this.age} years old`);
    }
    get fullname(){
        return `${this.FirstName} ${this.LastName}`
    }
}
const personOne = new Person('Tanuja','Maurya',21)
console.log(personOne.fullname);