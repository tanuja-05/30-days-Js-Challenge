//Task 5
class Queue{
    constructor(){
        this.elements=[];
    }

    enqueue(val){
        this.elements.push(val);
    }
    dequeue(){
        if(this.elements===null){
            return "Empty queue";
        }
        return this.elements.pop();
    }
    front(){
        if(this.elements===null){
            return -1;
        }
        return this.elements[0];

    }
    display(){
        console.log(this.elements);
        
    }
}

let que = new Queue();
que.enqueue(5);
que.enqueue(4);
que.enqueue(6);
que.enqueue(7);
que.display();
console.log("dequeue : ",que.dequeue());
console.log("front : ",que.front());

//Task 6
let que2 = new Queue();
que2.enqueue("job 1");
que2.enqueue("job 2");
que2.enqueue("job 3");
que2.enqueue("job 4");
que2.display();
console.log("dequeue job : ",que2.dequeue());
console.log("front job : ",que2.front());
