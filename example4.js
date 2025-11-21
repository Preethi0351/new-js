//closure is a function that will retain outer variable even after outer function is closed
function outer(){
    let count=0;//2
    function inner(){
        count++;//4
        console.log("I have counter",count);
        console.log("---------");

    }
    return inner;
}
let value=outer();
value();
value();