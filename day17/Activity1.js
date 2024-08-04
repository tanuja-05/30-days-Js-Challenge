// Task 1
class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

//Task2
class ll{
    constructor(){
        this.head=null;
    }
    addFromLast(val){
        let newNode= new Node(val,null);
        if(this.head==null){
            this.head=newNode;
        }
        else{
            let temp=this.head;
            while(temp.next!=null){
              temp=temp.next;
            }
            temp.next=newNode;
        }
    }

    removeFromBack(){
        if(this.head===null){
            return null;
        }
        if(this.head.next===null){
            let val=this.head.val;
            this.head=null;
            return val;
        }
        let temp=this.head;
        while(temp.next.next!==null){
            temp=temp.next;
        }
        let val = temp.next.val;
        temp.next=null;
        return val;
    }

    display(){
        let temp=this.head;
        while(temp!==null){
            console.log(temp.val);
            temp=temp.next;
            
        }
    }
}

const list = new ll();
list.addFromLast(5);
list.addFromLast(6);
list.addFromLast(7);
list.addFromLast(8);
list.addFromLast(9);
list.display();