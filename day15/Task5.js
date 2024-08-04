function printIndex() {
    let arr=[]
    for (let i = 0; i <=5; i++) {
        arr.push(((index) => {
                return function(){
                    console.log(index);
                }
        }))
    }
}
printIndex();