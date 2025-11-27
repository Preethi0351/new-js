class Bank {
    bankBalance() {
        console.log("My bank balance");
    }
}
class bobBank extends Bank {
    bankBalance() {  
        console.log("my balance is 120000");
    }
}

    //overloading
//  class Dl{
//     isEligible(name,age){
//         if(age==undefined||age<18)
//         {
//             console.log("not eligible");

//         }else{
//             console.log("eligible");
//         }
//     }
// }
// let value=new Dl();
// value.isEligible("Preethi");
// value.isEligible("Preethi",22);