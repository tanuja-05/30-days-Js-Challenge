class Person{
    constructor(FirstName,LastName,age){
        this.FirstName=FirstName;
        this.LastName=LastName;
        this.age=age;
    }
    greeting(){
        console.log(`Hello there ! my name is ${this.FirstName} ${this.LastName} `);
    }
    get fullname(){
        return `${this.FirstName} ${this.LastName}`
    }
    set fullname(name){
        const [fname,lname] =name.split(' ');
        this.FirstName=fname;
        this.LastName=lname;
    }
}
const personOne = new Person('Tanuja','Maurya',21)
personOne.greeting()
personOne.fullname='Tanu Maurya'
personOne.greeting()