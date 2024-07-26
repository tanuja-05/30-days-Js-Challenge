class Account{
    #balance
    constructor(initBalance=0){
        this.#balance=initBalance
    }
    depositeMoney(amt){
            if(amt<0)
              {
                console.log("Amount deposited should be positive");
              } 
            else { 
                   this.#balance+=amt
                  console.log(`Your current balance is now ${this.#balance}`);
              }
    }
    withDrawMoney(amt){
        if(amt<0)
        {
            console.log("Amount withdrawn should be positive");
        }
        if(amt > this.#balance)
        {
            console.log(`Insufficient balance ! Your Current balance  ${this.#balance}`);
        }
        else
        {
            this.#balance-=amt;
            console.log(`Amount withdraw ${amt} ,Your balance :${this.#balance}`);
        }
        console.log(`Your Current balance is ${this.#balance}`);
    }
    
    getbalance()
    {
        console.log(`Your Current balance is ${this.#balance}`);
    }
}
const acc1=new Account(100)
// console.log(acc1.balance); // undefined
acc1.getbalance()
acc1.depositeMoney(-11)
acc1.withDrawMoney(200)