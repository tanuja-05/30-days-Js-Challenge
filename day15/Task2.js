function myCounter() {
    let counter = 0;
    function increment() {
        counter+=1;
    }
    function display() {
        return counter;
    }
    return {increment,display}
}
let val = myCounter()
val.increment()
val.increment()
val.increment()
val.increment()
console.log(val.display());