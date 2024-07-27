
function addNums(a,b) {
    let sum = a+b
    function printSum(a,b,sum) {
        console.log(`The sum ${a} of ${b} is ${sum}`);
    }
    return printSum(a,b,sum);
}
addNums(4,6)
