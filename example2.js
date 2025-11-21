//important=closure
function outer(){
    let name="Ramesh";
    console.log(name);
    function inner(){
        let name2="suresh";
        console.log(name2);
        console.log("---------");

    }
    return inner;
}
let value=outer();
value();
value(); //closure : once it invoked the outer function will expire
value();