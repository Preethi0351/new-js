// to handle asynchronous operations in a sychronour manner we will use A callback
// callback is a process of passing a function as a parameter to decide the order of execution of my program
// callback hell includes multiple nested callbacks which makes the code hard to read and maintain
// to overcome callback hell we will follow Promise
// promises is a javascript object it will either resole or reject
//  asynchronous function callback ex1
// function one(){
//     setTimeout(()=>{
//         console.log("function one is executed");
//     },2000);
// }
// function two(){
//     console.log("function two is executed");



// }
// one();
// two();


// to make sure that function two is executed after function one we will use callback
// example 2
// function one(callback){
//     setTimeout(()=>{
//         console.log("function one is executed");
//         callback();
//     },2000);
// }
// function two(){
//     console.log("function two is executed");

// }
// one(two);
// one(()=>{
//     return two();
// });


// example 3
// function addMoney(value,callback){
//     setTimeout(()=>{
//         console.log("I am adding Money",value);
//         callback(value);
//     },2000)
// }
// function displayBalance(value){
//     console.log("my current balance",value);
// }
// // addMoney(1000);
// // displayBalance();
// addMoney(1000,displayBalance);

function fetchData(callback){
    setTimeout(()=>{
        console.log("i am fetching the data");
        callback();
    },4000);
    }
    function arrangeData(callback){
        setTimeout(()=>{
            console.log("I am arranging the data");
            callback();
        },3000);

    }
    function displayData(){
        setTimeout(()=>{
            console.log("I am displaying the data");
        },2000);
}
// fetchData();
// arrangeData();
// displayData();
fetchData(()=>{
    arrangeData(()=>{
        displayData();
    });
});
