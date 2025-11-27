superkeyword:
     

class Bank{
    constructor(name)
    {
        this.name=name;
    }
}

class AxisBank extends Bank{
    constructor(name,city){
    super(name);
    this.city=city;
    }
}
let value=new AxisBank("Bank","Bangalore");
console.log(value);