function enterName(name) {
    return greetUser = () => {
           console.log(`Hello ${name} ! how are you`);
    }
}
let userOne = enterName("Rohit")
userOne()