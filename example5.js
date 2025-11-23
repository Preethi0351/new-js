function outer(){
    let amount=1000;//2
    function addMoney(value){
       amount=amount+value;
        console.log("I have amount",amount);//5
        console.log("---------");//6

    }
    return addMoney;//3
}
let value=outer();
value(1000);
value(1000);
