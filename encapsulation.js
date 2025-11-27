encapsulation:making your variable private and restrict the direct access
class Bank{
    #balance;
    constructor(balance){
        this.#balance=balance;
       

    }
    bankBalance(){
        console.log(`I have a balance ${this.#balance}`);
    }
}
let value=new Bank(1000);
value.bankBalance();
// console.log(value.#balance);