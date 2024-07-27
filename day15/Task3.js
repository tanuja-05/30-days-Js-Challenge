function genIds() {
    let uniqueId=1000;
    return () => {
       uniqueId+=1
       return uniqueId;
    }
}
let myids = genIds()
console.log( myids());
console.log( myids());
console.log( myids());
console.log( myids());