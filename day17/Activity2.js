//Task 3
class Stack{
    constructor(){
        this.elements=[];
    }

    push(val){
        this.elements.push(val);
    }
    pop(){
        if(this.elements===null){
            return "Empty stack";
        }
        return this.elements.pop();
    }
    peek(){
        if(this.elements===null){
            return -1;
        }
        return this.elements[this.elements.length-1];

    }
    display(){
        console.log(this.elements.join(" "));
        
    }
}
let st = new Stack();
st.push(5);
st.push(4);
st.push(6);
st.push(7);
st.push(2);
st.display();
console.log("popped : ",st.pop());
st.display();
console.log("top :",st.peek());


//Task 4
// let word ="jsChallenge"
let word ="racecar"
let stk = new Stack();
for (let i = 0; i < word.length; i++) {
    stk.push(word.charAt(i));
}
let revWord = "";
for (let i = 0; i < word.length; i++) {
     revWord+=stk.pop();
}
console.log("Reversed Word : ",revWord);
