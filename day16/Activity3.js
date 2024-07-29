//Task 1
function reverseString(str,f,l) {
    if(f>l){
        return str;
    }
    let temp = str.at(f);
    str.at(f)=str.at(l);
    str.at(l) = temp;
    return reverseString(str,f+1,l-1);
}
console.log(reverseString("hello",0,5));